import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('рендерит main и ровно один h1', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('содержит якоря секций работ и контактов', () => {
    const { container } = render(<App />);
    expect(container.querySelector('#works')).toBeInTheDocument();
    expect(container.querySelector('#contact')).toBeInTheDocument();
  });

  it('рендерит все 5 работ (карточки-ссылки присутствуют)', () => {
    render(<App />);
    // как минимум 5 ссылок-карточек работ (плюс контакты/навигация — потому >=)
    expect(screen.getAllByRole('link').length).toBeGreaterThanOrEqual(5);
  });
});
