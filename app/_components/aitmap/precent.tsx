'use client';

import { useEffect, useState } from 'react';
import styles from './precent.module.scss';
import { toPercent, toValidCoordinate } from '@/util/convertCoordinates';

type Precent = [number, number] | null;

export default function PrecentLocation() {
  const [precent, setPrecent] = useState<Precent>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.permissions.query({ name: 'geolocation' });
    navigator.geolocation.watchPosition((e) => {
      const coords = toValidCoordinate(e.coords.latitude, e.coords.longitude);
      setPrecent(coords && toPercent(coords[0], coords[1]));
    });
  }, []);

  return (
    <div
      className={styles.precent_location}
      style={{
        display: precent ? 'block' : 'none',
        bottom: `${precent && precent[0]}%`,
        left: `${precent && precent[1]}%`,
      }}
    />
  );
}
