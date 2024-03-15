import { useEffect, useState } from 'react';
import { toValidCoordinate } from '@/util/convertCoordinates';

export type Precent = [number, number];

export function useLocation() {
  const [precent, setPrecent] = useState<Precent>();

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.permissions.query({ name: 'geolocation' });
    navigator.geolocation.watchPosition(() => {
      const coords = toValidCoordinate(35.182089, 137.109693);
      setPrecent(coords);
    });
  }, []);

  return precent;
}
