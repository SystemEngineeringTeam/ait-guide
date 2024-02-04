import styles from './index.module.scss';

export default function Header() {
  const menues = [
    { name: '検索', href: '#search' },
    { name: '学内マップ', href: '#map' },
    { name: '施設一覧', href: '#facility-list' },
  ];

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>AITガイド</h1>

      <div className={styles.menu}>
        {menues.map((menu) => (
          <a key={menu.href} className={styles.link} href={menu.href}>
            {menu.name}
          </a>
        ))}
      </div>
    </header>
  );
}
