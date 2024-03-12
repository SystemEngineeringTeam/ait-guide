'use client';

import { useEffect, useState } from 'react';
import styles from './route.module.scss';
import { convertSvgPoint } from '@/util/convertSvgPoint';

type Point = [number, number];
type Coordinate = { lat: number; lng: number };

type RouteProps = {
  route: Coordinate[] | undefined;
};

export default function Route(prop: RouteProps) {
  const { route } = prop;

  const [start, setStart] = useState<Point | null>(null);
  const [end, setEnd] = useState<Point | null>(null);
  const [draw, setDaraw] = useState('');

  useEffect(() => {
    if (route === undefined) return;

    const d = `M ${route
      .map((r) => {
        const p = convertSvgPoint([r.lat, r.lng]);
        return `${p[0]} ${p[1]}`;
      })
      .join(', ')}`;
    setDaraw(d);

    const startCoord = route.at(0);
    const endCoord = route.at(-1);
    if (startCoord) setStart(convertSvgPoint([startCoord.lat, startCoord.lng]));
    if (endCoord) setEnd(convertSvgPoint([endCoord.lat, endCoord.lng]));
  }, [route]);

  return (
    <g>
      <path d={draw} className={styles.path} />
      {start && (
        <circle cx={start[0]} cy={start[1]} r="5" className={styles.start} />
      )}
      {end && <circle cx={end[0]} cy={end[1]} r="10" className={styles.end} />}
    </g>
  );
}
