'use client';

import { useState } from 'react';
import AitMap from './_components/aitmap';
import FacilityList from './_components/facilitylist';
import Search from './_components/search';
import styles from './page.module.scss';

export default function Home() {
  const [pickup, setPickup] = useState(0);

  return (
    <main className={styles.main}>
      <Search />
      <FacilityList pickup={pickup} setPickup={setPickup} />
      <AitMap pickup={pickup} setPickup={setPickup} />
    </main>
  );
}
