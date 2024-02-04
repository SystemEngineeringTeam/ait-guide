import { Dispatch, SetStateAction } from 'react';
import styles from './index.module.scss';
import { PickUp } from '@/const/pickup';

type PenguinProps = {
  active: boolean;
  setPickup: Dispatch<SetStateAction<PickUp>>;
};

export function Penguin({ active, setPickup }: PenguinProps) {
  if (!active) return null;

  return (
    <div
      className={styles.penguin_surf}
      onClick={() => setPickup((prev) => ({ ...prev, secret: 0 }))}
    >
      <div className={styles.penguin}>
        <div className={styles.penguin_body}>
          <div className={styles.penguin_face}>
            <div className={styles.penguin_eyes} />
            <div className={styles.penguin_mouth} />
          </div>

          <div className={styles.penguin_wings} />
          <div className={styles.penguin_leg} />
        </div>
      </div>
    </div>
  );
}
