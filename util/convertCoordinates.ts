import { MAX_LAT, MAX_LNG, MIN_LAT, MIN_LNG } from "@/const/map";

/**
 * 緯度経度をパーセントに変換する
 * @param lat 緯度
 * @param lng 経度
 * @returns [緯度のパーセント, 経度のパーセント]
 */
export function toPercent(lat: number, lng: number): [number, number] {

  const latPercent = (lat - MIN_LAT) / (MAX_LAT - MIN_LAT) * 100;
  const lngPercent = (lng - MIN_LNG) / (MAX_LNG - MIN_LNG) * 100;

  return [latPercent, lngPercent];
}

/**
 * 座標が範囲外ならnullを返す
 * @param lat 緯度
 * @param lng 経度
 * @returns null or [緯度, 経度]
 */
export function toValidCoordinate(lat: number, lng: number): [number, number] | undefined {
  if (lat < MIN_LAT) return undefined;
  if (lat > MAX_LAT) return undefined;
  if (lng < MIN_LNG) return undefined;
  if (lng > MAX_LNG) return undefined;

  return [lat, lng];
}
