'use client';

import { useSearchParams } from 'next/navigation';
import { Fragment } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { PickUp } from '@/const/pickup';

type Props = {
  setPickup: Dispatch<SetStateAction<PickUp>>;
};

export default function SyskenParam(props: Props) {
  const { setPickup } = props;

  const searchParams = useSearchParams();
  const sysken = searchParams.get('sysken');

  if (sysken !== null) {
    setPickup({
      facility: -1,
      room: 0,
      secret: 0,
    });
  }

  return <Fragment />;
}
