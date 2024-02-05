const maxLat = 35.185835318281335;
const minLat = 35.18070760286929;
const maxLng = 137.1198156571;
const minLng = 137.1098013714;

/**
 * 緯度経度をパーセントに変換する
 * @param lat 緯度
 * @param lng 経度
 * @returns [緯度のパーセント, 経度のパーセント]
 */
export function toPercent(lat: number, lng: number): [number, number] {

  const latPercent = (lat - minLat) / (maxLat - minLat) * 100;
  const lngPercent = (lng - minLng) / (maxLng - minLng) * 100;

  return [latPercent, lngPercent];
}

/**
 * 座標が範囲外ならnullを返す
 * @param lat 緯度
 * @param lng 経度
 * @returns null or [緯度, 経度]
 */
export function toValidCoordinate(lat: number, lng: number): [number, number] | null {
  if (lat < minLat) return null;
  if (lat > maxLat) return null;
  if (lng < minLng) return null;
  if (lng > maxLng) return null;

  return [lat, lng];
}
