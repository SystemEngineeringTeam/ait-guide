import { FacilityIds } from '@/const/facility';
import { RoomIds } from '@/const/room';

export type PickUp = {
  facility: FacilityIds;
  room: RoomIds;
}

export const INIT_PICKUP: PickUp = {
  facility: 0,
  room: 0,
}
