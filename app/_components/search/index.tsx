'use client';

import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useState,
} from 'react';
import styles from './index.module.scss';
import { FACILITY_MAP, FacilityMap } from '@/const/facility';
import { INIT_PICKUP, PickUp } from '@/const/pickup';
import { ROOM_MAP, RoomMap } from '@/const/room';
import { SECRET_MAP, SecretMap } from '@/const/secret';

type Props = {
  pickup: PickUp;
  setPickup: Dispatch<SetStateAction<PickUp>>;
};

const MAX_DISPLAY = 10;

// 文字列を半角,大文字に変換, ーをｰに変換, 、を,に変換, ひらがなをカタカナに変換
function toHankakuUpperCase(str: string) {
  return str
    .replace('ごう', '号')
    .replace('かん', '館')
    .replace(/ー/, '-')
    .replace(/、/, ',')
    .toUpperCase()
    .replace(/[Ａ-Ｚ０-９]/g, (s) => {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    })
    .replace(/[ぁ-ん]/g, (s) => {
      return String.fromCharCode(s.charCodeAt(0) + 0x60);
    });
}

export default function Search(props: Props) {
  const { pickup, setPickup } = props;

  const [searchWord, setSearchWord] = useState('');
  const [filterdFacility, setFilterdFacility] = useState([] as FacilityMap[]);
  const [filterdRoom, setFilterdRoom] = useState([] as RoomMap[]);
  const [filterdSecret, setFilterdSecret] = useState([] as SecretMap[]);

  function search(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    const searchWordSnap = toHankakuUpperCase(value);
    setSearchWord(value);

    if (searchWordSnap === '') {
      setFilterdFacility([]);
      setFilterdRoom([]);
      setFilterdSecret([]);
      return;
    }

    const resFacility = FACILITY_MAP.filter((f) => {
      return f.name.includes(toHankakuUpperCase(searchWordSnap));
    });
    const resRoom = ROOM_MAP.filter((r) => {
      return r.room.includes(toHankakuUpperCase(searchWordSnap));
    });
    const resSecret = SECRET_MAP.filter((s) => {
      return s.word.includes(toHankakuUpperCase(searchWordSnap));
    });

    if (resFacility.length === 0 && resRoom.length === 0) {
      setFilterdFacility([]);
      setFilterdRoom([]);
      setFilterdSecret(resSecret);
      return;
    }

    setPickup((prev) => ({ ...INIT_PICKUP, secret: prev.secret }));
    setFilterdFacility(resFacility);
    setFilterdRoom(resRoom);
    setFilterdSecret([]);
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter') return;
    if (filterdFacility.length + filterdRoom.length !== 1) return;
    setPickup((prev) => ({
      facility: filterdFacility[0]?.id || filterdRoom[0]?.buildId || 0,
      room: filterdRoom[0]?.id || 0,
      secret: prev.secret,
    }));
  };

  return (
    <section className={styles.search_wrapper} id="search">
      <h2>
        <label htmlFor="search" className={styles.label}>
          施設・教室検索
        </label>
      </h2>
      <input
        type="text"
        className={styles.search}
        value={searchWord}
        onChange={search}
        onKeyDown={handleKeyDown}
      />

      {filterdRoom.length > 0 && (
        <div className={styles.buttons}>
          {filterdRoom.slice(0, MAX_DISPLAY).map((r) => (
            <button
              key={r.room}
              className={`${styles.button} ${styles.room}`}
              data-active={pickup.room === r.id}
              onClick={() =>
                setPickup((prev) => ({
                  facility: r.buildId,
                  room: r.id,
                  secret: prev.secret,
                }))
              }
            >
              {r.room}({FACILITY_MAP.find((f) => f.id === r.buildId)?.name})
            </button>
          ))}
        </div>
      )}
      {filterdRoom.length > MAX_DISPLAY && (
        <p className={styles.other}>他{filterdRoom.length - 15}件...</p>
      )}

      {filterdFacility.length > 0 && (
        <div className={styles.buttons}>
          {filterdFacility.slice(0, MAX_DISPLAY).map((f) => (
            <button
              key={f.id}
              className={styles.button}
              data-active={pickup.facility === f.id}
              onClick={() =>
                setPickup((prev) => ({
                  facility: f.id,
                  room: 0,
                  secret: prev.secret,
                }))
              }
            >
              {f.name}
            </button>
          ))}
        </div>
      )}
      {filterdFacility.length > MAX_DISPLAY && (
        <p className={styles.other}>他{filterdFacility.length - 15}件...</p>
      )}
      {filterdSecret.length > 0 && (
        <div className={styles.buttons}>
          {filterdSecret.slice(0, MAX_DISPLAY).map((s) => (
            <button
              key={s.word}
              className={styles.button}
              onClick={() => {
                if (s.event) s.event();
                else setPickup({ facility: 0, room: 0, secret: s.id });
              }}
            >
              {s.word}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
