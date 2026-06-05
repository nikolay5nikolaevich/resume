import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WorksSection } from './WorksSection';

const projects = [
  { id: 'a', title: 'Проект A', description: 'da', screenshot: '/a.svg', url: 'https://example.com', tags: ['React'], category: 'classic' },
  { id: 'b', title: 'Проект B', description: 'db', screenshot: '/b.svg', url: 'https://example.com', tags: ['CSS'], category: 'classic' },
];

describe('WorksSection', () => {
  it('рендерит eyebrow, заголовок и lead', () => {
    render(<WorksSection id="works" eyebrow="До нейросетей" title="Заголовок секции" lead="Вводный текст" projects={projects} columns={2} />);
    expect(screen.getByText('До нейросетей')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Заголовок секции' })).toBeInTheDocument();
    expect(screen.getByText('Вводный текст')).toBeInTheDocument();
  });

  it('рендерит по карточке-ссылке на каждый проект', () => {
    render(<WorksSection id="works" eyebrow="E" title="T" lead="L" projects={projects} columns={2} />);
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('секция имеет правильный id-якорь', () => {
    const { container } = render(<WorksSection id="works" eyebrow="E" title="T" lead="L" projects={projects} columns={3} />);
    expect(container.querySelector('section#works')).toBeInTheDocument();
  });

  it('все карточки присутствуют в DOM (не условный рендер)', () => {
    render(<WorksSection id="works" eyebrow="E" title="T" lead="L" projects={projects} columns={2} />);
    // Оба проекта рендерятся независимо от inView
    expect(screen.getByText('Проект A')).toBeInTheDocument();
    expect(screen.getByText('Проект B')).toBeInTheDocument();
  });

  it('корневой элемент — section с заданным id', () => {
    const { container } = render(<WorksSection id="portfolio" eyebrow="E" title="T" lead="L" projects={projects} columns={2} />);
    expect(container.querySelector('section#portfolio')).toBeInTheDocument();
  });

  it('рендерит пустую секцию без карточек без ошибок', () => {
    expect(() =>
      render(<WorksSection id="works" eyebrow="E" title="T" lead="L" projects={[]} columns={2} />)
    ).not.toThrow();
  });
});
