import { MAP_MAX_X, MAP_MAX_Y, MAP_MIN_X, MAP_MIN_Y, MAX_LAT, MAX_LNG, MIN_LAT, MIN_LNG } from "@/const/map";

/**
 * 緯度経度をSVG座標に変換する
 * @param lat 緯度
 * @param lng 経度
 */
export function convertSvgPoint([lat, lng]: [number, number]): [number, number] {
  const xPercent = (lng - MIN_LNG) / (MAX_LNG - MIN_LNG);
  const yPercent = 1 - (lat - MIN_LAT) / (MAX_LAT - MIN_LAT);

  const x = MAP_MIN_X + xPercent * (MAP_MAX_X - MAP_MIN_X);
  const y = MAP_MIN_Y + yPercent * (MAP_MAX_Y - MAP_MIN_Y);

  return [x, y];
}
