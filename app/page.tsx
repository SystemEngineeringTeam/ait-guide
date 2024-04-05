'use client';

import { Suspense, useState } from 'react';
import AitMap from './_components/aitmap';
import FacilityList from './_components/facilitylist';
import { Penguin } from './_components/penguin';
import SyskenParam from './_components/syskenParam/SyskenParam';
import styles from './page.module.scss';
import { INIT_PICKUP, PickUp } from '@/const/pickup';

export function Home() {
  const [pickup, setPickup] = useState<PickUp>(INIT_PICKUP);

  return (
    <main className={styles.main}>
      <Suspense>
        <SyskenParam setPickup={setPickup} />
      </Suspense>
      <AitMap pickup={pickup} setPickup={setPickup} />
      <FacilityList pickup={pickup} setPickup={setPickup} />
      <Penguin active={pickup.secret === 1} setPickup={setPickup} />
    </main>
  );
}
