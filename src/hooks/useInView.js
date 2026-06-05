import { useState, useEffect, useRef } from 'react'

/**
 * Отслеживает появление DOM-элемента во вьюпорте через IntersectionObserver.
 *
 * @param {Object} [options]
 * @param {number} [options.threshold=0.15]   - доля элемента, при которой срабатывает событие
 * @param {string} [options.rootMargin='0px'] - отступ вокруг вьюпорта (как в CSS)
 * @param {boolean} [options.once=true]       - если true, отписаться после первого появления
 * @returns {[React.RefObject, boolean]} [ref, inView]
 */
function useInView({ threshold = 0.15, rootMargin = '0px', once = true } = {}) {
  const ref = useRef(null)

  // Graceful fallback: если IntersectionObserver недоступен — контент сразу видим
  const isSupported = typeof IntersectionObserver !== 'undefined'
  const [inView, setInView] = useState(!isSupported)

  useEffect(() => {
    // Браузер не поддерживает IntersectionObserver — ничего не делаем
    if (!isSupported) return

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]

        if (entry.isIntersecting) {
          setInView(true)
          // При once=true отписываемся сразу после первого появления
          if (once) observer.unobserve(element)
        } else if (!once) {
          // При once=false обновляем состояние при выходе из вьюпорта
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)

    // Cleanup: отключаем наблюдатель при размонтировании или смене зависимостей
    return () => observer.disconnect()
  }, [threshold, rootMargin, once, isSupported])

  return [ref, inView]
}

export default useInView
