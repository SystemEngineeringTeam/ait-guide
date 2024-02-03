import { Dispatch, SetStateAction } from 'react';
import styles from './index.module.scss';
import { GROUPED_FACILITY_MAP } from '@/const/facility';

type Props = {
  pickup: number;
  setPickup: Dispatch<SetStateAction<number>>;
};

export default function FacilityList(props: Props) {
  const { pickup, setPickup } = props;

  function changePickup(id: number) {
    setPickup((p) => (p === id ? 0 : id));
  }

  return (
    <section className={styles.facilitylist} id="facility-list">
      <h3>施設一覧</h3>
      <div className={styles.container}>
        {GROUPED_FACILITY_MAP.map((g, i) => (
          <div key={i} className={styles.buttons}>
            {g.map((facility) => (
              <button
                key={facility.id}
                className={styles.button}
                data-active={pickup === facility.id}
                onClick={() => changePickup(facility.id)}
              >
                {facility.name}
              </button>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
