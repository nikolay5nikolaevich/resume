import { render, screen, act } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import useInView from './useInView.js'

// Тест-компонент: навешивает ref на div и отображает текущее состояние inView
function TestBox({ options }) {
  const [ref, inView] = useInView(options)
  return (
    <div ref={ref} data-testid="box">
      {inView ? 'visible' : 'hidden'}
    </div>
  )
}

// --- Вспомогательная фабрика мока IntersectionObserver ---
function createObserverMock() {
  let savedCallback = null
  const unobserveMock = vi.fn()
  const disconnectMock = vi.fn()

  const ObserverMock = vi.fn((callback) => {
    savedCallback = callback
    return {
      observe: vi.fn(),
      unobserve: unobserveMock,
      disconnect: disconnectMock,
    }
  })

  return { ObserverMock, unobserveMock, disconnectMock, getCallback: () => savedCallback }
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('useInView', () => {
  it('изначально inView === false при доступном IntersectionObserver', () => {
    const { ObserverMock } = createObserverMock()
    vi.stubGlobal('IntersectionObserver', ObserverMock)

    render(<TestBox />)

    expect(screen.getByTestId('box')).toHaveTextContent('hidden')
  })

  it('после пересечения (isIntersecting: true) inView становится true', () => {
    const { ObserverMock, getCallback } = createObserverMock()
    vi.stubGlobal('IntersectionObserver', ObserverMock)

    render(<TestBox />)
    expect(screen.getByTestId('box')).toHaveTextContent('hidden')

    // Симулируем появление элемента во вьюпорте
    act(() => {
      getCallback()([{ isIntersecting: true }])
    })

    expect(screen.getByTestId('box')).toHaveTextContent('visible')
  })

  it('при once: true после появления вызывается unobserve/disconnect', () => {
    const { ObserverMock, unobserveMock, disconnectMock, getCallback } = createObserverMock()
    vi.stubGlobal('IntersectionObserver', ObserverMock)

    render(<TestBox options={{ once: true }} />)

    act(() => {
      getCallback()([{ isIntersecting: true }])
    })

    // Хук должен отписаться — либо unobserve, либо disconnect
    const stopped = unobserveMock.mock.calls.length > 0 || disconnectMock.mock.calls.length > 0
    expect(stopped).toBe(true)
  })

  it('graceful fallback: если IntersectionObserver не определён — inView сразу true', () => {
    // Убираем IntersectionObserver из глобального окружения
    vi.stubGlobal('IntersectionObserver', undefined)

    render(<TestBox />)

    expect(screen.getByTestId('box')).toHaveTextContent('visible')
  })
})
