import styles from './index.module.scss';

type PenguinProps = {
  active: boolean;
};

export function Penguin({ active }: PenguinProps) {
  if (!active) return null;

  return (
    <div className={styles.penguin_surf}>
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
