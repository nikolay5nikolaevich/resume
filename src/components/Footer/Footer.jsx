import { profile } from '../../data/profile';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {year} {profile.name}
        </p>
        <p className={styles.made}>Спасибо за внимание</p>
      </div>
    </footer>
  );
}
