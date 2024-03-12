import { useEffect, useState } from 'react';
import { toValidCoordinate } from '@/util/convertCoordinates';

export type Precent = [number, number];

export function useLocation() {
  const [precent, setPrecent] = useState<Precent>();

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.permissions.query({ name: 'geolocation' });
    navigator.geolocation.watchPosition((e) => {
      const coords = toValidCoordinate(e.coords.latitude, e.coords.longitude);
      setPrecent(coords);
    });
  }, []);

  return precent;
}
