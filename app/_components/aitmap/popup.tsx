import styles from './popup.module.scss';

type Props = {
  name: string | undefined;
  position: [number, number] | undefined;
};

export default function Popup({ name, position }: Props) {
  return (
    <h3
      className={styles.popup}
      style={{
        display: position && name ? 'block' : 'none',
        bottom: `${position && position[0]}%`,
        left: `calc(35px + ${position && position[1]}%)`,
      }}
    >
      {name}
    </h3>
  );
}
