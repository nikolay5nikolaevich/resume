import { describe, it, expect } from 'vitest';
import { projects } from './projects';

describe('projects data', () => {
  it('содержит ровно 3 classic и 2 ai', () => {
    expect(projects.filter(p => p.category === 'classic')).toHaveLength(3);
    expect(projects.filter(p => p.category === 'ai')).toHaveLength(2);
  });

  it('у каждого проекта заполнены обязательные поля', () => {
    for (const p of projects) {
      expect(p.id && p.title && p.description && p.screenshot && p.url).toBeTruthy();
      expect(['classic', 'ai']).toContain(p.category);
    }
  });

  it('id уникальны', () => {
    const ids = projects.map(p => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('tags — непустые массивы строк', () => {
    for (const p of projects) {
      expect(Array.isArray(p.tags)).toBe(true);
      expect(p.tags.length).toBeGreaterThan(0);
      p.tags.forEach(tag => expect(typeof tag).toBe('string'));
    }
  });

  it('url — внешняя https-ссылка или встроенная работа в /works/', () => {
    for (const p of projects) {
      expect(p.url).toMatch(/^(https:\/\/|\/works\/)/);
    }
  });
});
