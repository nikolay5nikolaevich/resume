import styles from './ProjectCard.module.css';

/**
 * ProjectCard — карточка проекта с hover-эффектом прокрутки скриншота.
 *
 * Анимация появления (IntersectionObserver / fade-in) реализуется на уровне
 * родительского компонента WorksSection; ProjectCard отвечает только за
 * собственный внешний вид и hover-поведение.
 *
 * @param {{ project: {
 *   id: string,
 *   title: string,
 *   description: string,
 *   screenshot: string,
 *   url: string,
 *   tags?: string[],
 *   category: string
 * }}} props
 */
export function ProjectCard({ project }) {
  const { title, description, screenshot, url, tags } = project;

  return (
    <a
      className={styles.card}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Открыть сайт: ${title}`}
    >
      {/* Область превью: фиксированная пропорция 4:3 */}
      <div className={styles.preview}>
        <img
          className={styles.screenshot}
          src={screenshot}
          alt={title}
          loading="lazy"
        />
      </div>

      {/* Текстовый блок */}
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        {tags && tags.length > 0 && (
          <ul className={styles.tags} aria-label="Технологии">
            {tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </a>
  );
}
