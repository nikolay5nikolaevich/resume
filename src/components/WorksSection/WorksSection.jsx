import { ProjectCard } from '../ProjectCard/ProjectCard';
import useInView from '../../hooks/useInView';
import styles from './WorksSection.module.css';

/**
 * WorksSection — секция с сеткой карточек проектов.
 *
 * Поддерживает адаптивную сетку (columns 2 | 3), reveal-анимацию
 * через IntersectionObserver и приглушение соседних карточек на hover.
 *
 * @param {{
 *   id: string,
 *   eyebrow: string,
 *   title: string,
 *   lead: string,
 *   projects: Array<{
 *     id: string,
 *     title: string,
 *     description: string,
 *     screenshot: string,
 *     url: string,
 *     tags?: string[],
 *     category: string
 *   }>,
 *   columns: 2 | 3
 * }} props
 */
export function WorksSection({ id, eyebrow, title, lead, projects, columns }) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        {/* ── Шапка секции ── */}
        <header className={`${styles.header} ${inView ? styles.visible : ''}`}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.lead}>{lead}</p>
        </header>

        {/* ── Сетка карточек ── */}
        <ul
          ref={ref}
          className={styles.grid}
          style={{ '--cols': columns }}
        >
          {projects.map((project, i) => (
            <li
              key={project.id}
              className={`${styles.cell} ${inView ? styles.visible : ''}`}
              style={{ transitionDelay: inView ? `${i * 70}ms` : '0ms' }}
            >
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
