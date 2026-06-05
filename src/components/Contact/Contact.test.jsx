import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Contact } from './Contact';

describe('Contact', () => {
  it('email — это mailto-ссылка на реальный адрес', () => {
    render(<Contact />);
    const email = screen.getByRole('link', { name: /почт/i });
    expect(email.getAttribute('href')).toMatch(/^mailto:nikolay\.nikolaevich1337@gmail\.com$/);
  });
  it('telegram ведёт на t.me', () => {
    render(<Contact />);
    expect(screen.getByRole('link', { name: /telegram/i })).toHaveAttribute('href', 'https://t.me/volopopi');
  });
  it('github ведёт на профиль', () => {
    render(<Contact />);
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', 'https://github.com/nikolay5nikolaevich');
  });
  it('секция имеет id-якорь contact', () => {
    const { container } = render(<Contact />);
    expect(container.querySelector('section#contact')).toBeInTheDocument();
  });
});
