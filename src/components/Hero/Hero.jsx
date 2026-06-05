import { profile } from '../../data/profile';
import useInView from '../../hooks/useInView';
import styles from './Hero.module.css';

export function Hero() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      className={`${styles.hero} ${inView ? styles.visible : ''}`}
      ref={ref}
      id="top"
    >
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>{profile.role}</p>
          <h1 className={styles.title}>{profile.heroTitle}</h1>
          <p className={styles.subtitle}>{profile.heroSubtitle}</p>
          <a href="#works" className={styles.cta}>
            Смотреть работы
            <svg
              className={styles.ctaIcon}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 3v10M3 8l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className={styles.photo}>
          <img
            src={profile.photo}
            alt={`${profile.name} — ${profile.role}`}
            className={styles.photoImg}
          />
        </div>
      </div>
    </section>
  );
}
