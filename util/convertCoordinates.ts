/**
 * 緯度経度をパーセントに変換する
 * @param lat 緯度
 * @param lng 経度
 * @returns [緯度のパーセント, 経度のパーセント]
 */
export function toPercent(lat: number, lng: number): [number, number] {
  const maxLat = 35.185835318281335;
  const minLat = 35.18070760286929;
  const maxLng = 137.11979269981387;
  const minLng = 137.10864007472995;

  const latPercent = (lat - minLat) / (maxLat - minLat) * 100;
  const lngPercent = (lng - minLng) / (maxLng - minLng) * 100;

  return [latPercent, lngPercent];
}