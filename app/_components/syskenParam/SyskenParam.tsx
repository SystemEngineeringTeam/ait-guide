'use client';

import { useSearchParams } from 'next/navigation';
import { Fragment, useEffect } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { PickUp } from '@/const/pickup';

type Props = {
  setPickup: Dispatch<SetStateAction<PickUp>>;
};

export default function SyskenParam(props: Props) {
  const { setPickup } = props;

  const searchParams = useSearchParams();
  const sysken = searchParams.get('sysken');
  const facility = searchParams.get('facility');

  useEffect(() => {
    if (sysken !== null) {
      setPickup({
        facility: -1,
        room: 0,
        secret: 0,
      });
    } else if (facility !== null) {
      setPickup({
        facility: parseInt(facility, 10),
        room: 0,
        secret: 0,
      });
    }
  }, [facility, setPickup, sysken]);

  return <Fragment />;
}
