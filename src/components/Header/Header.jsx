import { profile } from '../../data/profile';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          {profile.name}
        </a>
        <nav aria-label="Основная навигация" className={styles.nav}>
          <a href="#works" className={`${styles.navLink} ${styles.navWorks}`}>
            Работы
          </a>
          <a href="#contact" className={styles.navLink}>
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}
