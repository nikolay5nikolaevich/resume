import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero', () => {
  it('рендерит заголовок h1 и CTA к работам', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Смотреть работы/i })).toHaveAttribute('href', '#works');
  });

  it('показывает фото с непустым alt', () => {
    render(<Hero />);
    const img = screen.getByRole('img');
    expect(img.getAttribute('alt')?.length).toBeGreaterThan(0);
  });

  it('секция имеет id="top"', () => {
    render(<Hero />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.getElementById('top')).not.toBeNull();
  });

  it('показывает eyebrow с ролью frontend-разработчика', () => {
    render(<Hero />);
    // Eyebrow содержит точную строку profile.role без дополнительного текста
    expect(screen.getByText('Frontend-разработчик')).toBeInTheDocument();
  });
});
