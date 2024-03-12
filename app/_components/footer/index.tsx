import styles from './index.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        <a href="https://www.openstreetmap.org/copyright">
          © OpenStreetMap contributors
        </a>
      </p>

      <p className={styles.copyright}>
        {'©SET / created by '}
        <a href="https://www.sysken.net/" target="_blank">
          システム工学研究会
        </a>
      </p>
    </footer>
  );
}
