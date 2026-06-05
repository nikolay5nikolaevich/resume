import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';

const project = {
  id: 't',
  title: 'Тестовый сайт',
  description: 'Описание сайта',
  screenshot: '/shot.svg',
  url: 'https://example.com',
  tags: ['React', 'CSS'],
  category: 'classic',
};

const projectNoTags = {
  id: 'no-tags',
  title: 'Без тегов',
  description: 'Проект без тегов',
  screenshot: '/shot.svg',
  url: 'https://example.com',
  category: 'classic',
};

describe('ProjectCard', () => {
  it('рендерит название и описание', () => {
    render(<ProjectCard project={project} />);
    expect(screen.getByText('Тестовый сайт')).toBeInTheDocument();
    expect(screen.getByText('Описание сайта')).toBeInTheDocument();
  });

  it('является внешней ссылкой на url с безопасными атрибутами', () => {
    render(<ProjectCard project={project} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
    expect(link).toHaveAccessibleName(/Открыть сайт: Тестовый сайт/);
  });

  it('у скриншота есть alt с названием', () => {
    render(<ProjectCard project={project} />);
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Тестовый сайт');
  });

  it('рендерит теги, если они есть', () => {
    render(<ProjectCard project={project} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
  });

  it('не падает и не рендерит блок тегов, если tags отсутствует', () => {
    render(<ProjectCard project={projectNoTags} />);
    expect(screen.getByText('Без тегов')).toBeInTheDocument();
    // aria-label "Технологии" должен отсутствовать — ul не рендерится
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('скриншот загружается лениво (loading=lazy)', () => {
    render(<ProjectCard project={project} />);
    expect(screen.getByRole('img')).toHaveAttribute('loading', 'lazy');
  });

  it('rel содержит noreferrer вместе с noopener', () => {
    render(<ProjectCard project={project} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noreferrer'));
  });
});
