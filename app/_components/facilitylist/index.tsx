import { Dispatch, SetStateAction } from 'react';
import Comment from '../../_components/comment';
import styles from './index.module.scss';
import { GROUPED_FACILITY_MAP } from '@/const/facility';
import { PickUp } from '@/const/pickup';

type Props = {
  pickup: PickUp;
  setPickup: Dispatch<SetStateAction<PickUp>>;
};

export default function FacilityList(props: Props) {
  const { pickup, setPickup } = props;

  function changePickup(id: number) {
    setPickup((p) => ({ ...p, facility: id }));
  }

  return (
    <section className={styles.facilitylist} id="facility-list">
      <h2>施設一覧</h2>
      <div className={styles.container}>
        {GROUPED_FACILITY_MAP.map((g, i) => (
          <div key={i} className={styles.buttons}>
            {g.map((facility) => (
              <button
                key={facility.id}
                className={styles.button}
                data-active={pickup.facility === facility.id}
                onClick={() => changePickup(facility.id)}
              >
                {facility.name}
                <Comment text="シカ🦌" />
              </button>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
