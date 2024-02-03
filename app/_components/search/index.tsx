import { Dispatch, SetStateAction } from 'react';
import styles from './index.module.scss';

type Props = {
  setPickup: Dispatch<SetStateAction<number>>;
};

export default function Search(props: Props) {
  return (
    <section className={styles.search_wrapper} id="search">
      <h3>
        <label htmlFor="search" className={styles.label}>
          施設・教室検索
        </label>
      </h3>
      <input type="text" className={styles.search} />
    </section>
  );
}
