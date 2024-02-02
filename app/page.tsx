import AitMap from './_components/aitmap';
import Header from './_components/header';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <AitMap pickup={55} />
    </main>
  );
}
