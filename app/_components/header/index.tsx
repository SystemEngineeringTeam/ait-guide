import styles from './index.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>AITガイド</h1>

      <div className={styles.menu}>
        <a className={styles.link} href="#facility-list">
          施設一覧
        </a>
        <a className={styles.link} href="#map">
          学内マップ
        </a>
      </div>
    </header>
  );
}
