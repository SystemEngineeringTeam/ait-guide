'use client';

import { useEffect, useState } from 'react';
import styles from './route.module.scss';
import { convertSvgPoint } from '@/util/convertSvgPoint';

type Point = [number, number];

export default function Route() {
  const [points] = useState<Point[]>([
    [35.185129392858755, 137.1155118942261],
    [35.184822490632655, 137.11557626724246],
    [35.18439720991786, 137.11526513099673],
    [35.18441036296303, 137.11517930030826],
    [35.18435336641866, 137.113693356514],
    [35.18400261757354, 137.11372554302218],
    [35.183875470743345, 137.1135646104813],
    [35.18369132670557, 137.11085021495822],
    [35.18281882904529, 137.11092531681064],
    [35.18280129130785, 137.1108448505402],
    [35.18273552475875, 137.11026549339297],
    [35.18256891592947, 137.11022794246676],
    [35.182393537845485, 137.11002945899966],
  ]);
  const [start, setStart] = useState<Point | null>(null);
  const [end, setEnd] = useState<Point | null>(null);
  const [draw, setDaraw] = useState('');

  useEffect(() => {
    let d = 'M ';
    d += points
      .map((point) => {
        const p = convertSvgPoint(point);
        return `${p[0]} ${p[1]}`;
      })
      .join(', ');
    setDaraw(d);

    const startCoord = points.at(0);
    const endCoord = points.at(-1);
    if (startCoord) setStart(convertSvgPoint(startCoord));
    if (endCoord) setEnd(convertSvgPoint(endCoord));
  }, [points]);

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
