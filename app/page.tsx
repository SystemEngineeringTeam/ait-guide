import AitMap from './_components/aitmap';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <AitMap pickup={55} />
    </main>
  );
}
