'use client';

import styles from './precent.module.scss';
import { toPercent } from '@/util/convertCoordinates';

type PrecentLocationProps = {
  location: [number, number] | undefined;
};

export default function PrecentLocation(props: PrecentLocationProps) {
  const { location } = props;

  const point = location && toPercent(location[0], location[1]);

  return (
    <div
      className={styles.precent_location}
      style={{
        display: point ? 'block' : 'none',
        bottom: `${point && point[0]}%`,
        left: `${point && point[1]}%`,
      }}
    />
  );
}
