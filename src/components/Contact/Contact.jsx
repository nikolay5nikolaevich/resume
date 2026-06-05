import { profile } from '../../data/profile';
import useInView from '../../hooks/useInView';
import styles from './Contact.module.css';

/* ─── Inline SVG иконки ────────────────────────────────────── */

function TelegramIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M21.93 3.36a1.5 1.5 0 0 0-1.52-.22L2.42 10.07a1.5 1.5 0 0 0 .08 2.79l4.07 1.27 1.49 4.98a1.5 1.5 0 0 0 2.52.57l2.06-2.17 3.96 3.05a1.5 1.5 0 0 0 2.35-1.05l2.5-14.5a1.5 1.5 0 0 0-.52-1.65Z"
        fill="currentColor"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3 7l9 6 9-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.907-.62.069-.607.069-.607 1.003.07 1.531 1.031 1.531 1.031.892 1.528 2.341 1.087 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.104-.253-.447-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.579 9.579 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.91-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.393.1 2.646.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z"
      />
    </svg>
  );
}

/* ─── Компонент ────────────────────────────────────────────── */

export function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="contact"
      className={`${styles.section} ${inView ? styles.visible : ''}`}
      ref={ref}
    >
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Давайте работать</h2>
          <p className={styles.subtitle}>
            Открыт к предложениям — пишите в любой из каналов.
          </p>
        </div>

        <ul className={styles.channels}>
          <li>
            <a
              href={profile.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channel}
              aria-label="Написать в Telegram"
            >
              <span className={styles.icon}>
                <TelegramIcon />
              </span>
              <span className={styles.channelText}>
                <span className={styles.channelName}>Telegram</span>
                <span className={styles.channelValue}>@volopopi</span>
              </span>
            </a>
          </li>

          <li>
            <a
              href={`mailto:${profile.contacts.email}`}
              className={styles.channel}
              aria-label="Написать на почту"
            >
              <span className={styles.icon}>
                <EmailIcon />
              </span>
              <span className={styles.channelText}>
                <span className={styles.channelName}>Почта</span>
                <span className={styles.channelValue}>{profile.contacts.email}</span>
              </span>
            </a>
          </li>

          <li>
            <a
              href={profile.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channel}
              aria-label="Профиль на GitHub"
            >
              <span className={styles.icon}>
                <GitHubIcon />
              </span>
              <span className={styles.channelText}>
                <span className={styles.channelName}>GitHub</span>
                <span className={styles.channelValue}>nikolay5nikolaevich</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
