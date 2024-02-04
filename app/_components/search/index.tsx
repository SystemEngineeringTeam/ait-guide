'use client';

import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import styles from './index.module.scss';
import { FACILITY_MAP } from '@/const/facility';

type Props = {
  pickup: number;
  setPickup: Dispatch<SetStateAction<number>>;
};

export default function Search(props: Props) {
  const { pickup, setPickup } = props;

  const [searchWord, setSearchWord] = useState('');
  const [results, setResults] = useState([] as typeof FACILITY_MAP);

  function search(e: ChangeEvent<HTMLInputElement>) {
    const searchWordSnap = e.target.value;
    setSearchWord(searchWordSnap);

    if (searchWordSnap === '') {
      setResults([]);
      return;
    }

    const res = FACILITY_MAP.filter((f) => {
      return f.name.includes(searchWordSnap);
    });

    if (res.length === 0) return;

    setPickup(0);
    setResults(res);
  }

  return (
    <section className={styles.search_wrapper} id="search">
      <h3>
        <label htmlFor="search" className={styles.label}>
          施設・教室検索
        </label>
      </h3>
      <input
        type="text"
        className={styles.search}
        value={searchWord}
        onChange={search}
      />
      <div className={styles.buttons}>
        {results.map((f) => (
          <button
            key={f.id}
            className={styles.button}
            data-active={pickup === f.id}
            onClick={() => setPickup(f.id)}
          >
            {f.name}
          </button>
        ))}
      </div>
    </section>
  );
}
