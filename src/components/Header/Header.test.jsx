import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('навигация ведёт к работам и контактам', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /Работы/i })).toHaveAttribute('href', '#works');
    expect(screen.getByRole('link', { name: /Контакты/i })).toHaveAttribute('href', '#contact');
  });

  it('имя-бренд ведёт наверх страницы', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /Николай/i })).toHaveAttribute('href', '#top');
  });

  it('навигация имеет aria-label', () => {
    render(<Header />);
    expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Основная навигация');
  });
});
