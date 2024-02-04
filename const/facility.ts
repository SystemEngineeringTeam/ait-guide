const types = [1, 2, 3, 4, 5];
export type FacilityMap = {
  id: number;
  name: string;
  type: typeof types[number];
  candidate: string[];
}

export const FACILITY_MAP: FacilityMap[] = [
  { id: 1, name: "1号館", type: 1, candidate: [] },
  { id: 2, name: "1号館別館", type: 1, candidate: [] },
  { id: 4, name: "2号館", type: 1, candidate: [] },
  { id: 5, name: "3号館", type: 1, candidate: [] },
  { id: 6, name: "3号館別館", type: 1, candidate: [] },
  { id: 8, name: "4号館", type: 1, candidate: [] },
  { id: 9, name: "4号館別館", type: 1, candidate: [] },
  { id: 10, name: "5号館講義実験棟", type: 1, candidate: [] },
  { id: 11, name: "6号館", type: 1, candidate: [] },
  { id: 12, name: "7号館", type: 1, candidate: [] },
  { id: 13, name: "8号館", type: 1, candidate: [] },
  { id: 14, name: "9号館", type: 1, candidate: [] },
  { id: 15, name: "10号館", type: 1, candidate: [] },
  { id: 16, name: "10号館・旧1号館", type: 1, candidate: [] },
  { id: 17, name: "11号館", type: 1, candidate: [] },
  { id: 18, name: "12号館", type: 1, candidate: [] },
  { id: 19, name: "13号館", type: 1, candidate: [] },
  { id: 20, name: "14号館", type: 1, candidate: [] },
  { id: 55, name: "正門", type: 2, candidate: [] },
  { id: 49, name: "バス停", type: 2, candidate: [] },
  { id: 50, name: "守衛室", type: 2, candidate: ["警備室"] },
  { id: 32, name: "愛和会館", type: 2, candidate: ["愛和食堂"] },
  { id: 33, name: "AITプラザ", type: 2, candidate: [] },
  { id: 34, name: "セントラルテラス", type: 2, candidate: [] },
  { id: 35, name: "鉀徳館", type: 2, candidate: ["体育館"] },
  { id: 37, name: "小体育館", type: 2, candidate: [] },
  { id: 21, name: "図書館", type: 2, candidate: [] },
  { id: 22, name: "計算センター", type: 2, candidate: [] },
  { id: 23, name: "情報教育センター", type: 2, candidate: [] },
  { id: 29, name: "本部棟", type: 2, candidate: [] },
  { id: 30, name: "第1本部棟", type: 2, candidate: [] },
  { id: 31, name: "第2本部棟", type: 2, candidate: [] },
  { id: 46, name: "第一駐車場", type: 3, candidate: [] },
  { id: 47, name: "第二駐車場", type: 3, candidate: [] },
  { id: 48, name: "第三駐車場", type: 3, candidate: [] },
  { id: 43, name: "バイク駐車場", type: 3, candidate: [] },
  { id: 3, name: "土木・建築実験棟", type: 4, candidate: [] },
  { id: 7, name: "バイオ環境化学実験棟", type: 4, candidate: [] },
  { id: 24, name: "総合技術研究所", type: 4, candidate: [] },
  { id: 25, name: "耐震実験センター", type: 4, candidate: [] },
  { id: 26, name: "振動実験棟", type: 4, candidate: [] },
  { id: 27, name: "地域防災研究センター", type: 4, candidate: [] },
  { id: 28, name: "エコ電力研究センター", type: 4, candidate: [] },
  { id: 38, name: "第3クラブハウス", type: 5, candidate: [] },
  { id: 39, name: "第4クラブハウス", type: 5, candidate: [] },
  { id: 40, name: "第5クラブハウス", type: 5, candidate: [] },
  { id: 36, name: "総合運動場管理棟", type: 5, candidate: [] },
  { id: 41, name: "庭球場管理ハウス", type: 5, candidate: [] },
  { id: 42, name: "セントラル広場", type: 5, candidate: [] },
  { id: 44, name: "テニスコート", type: 5, candidate: [] },
  { id: 51, name: "アーチェリー場", type: 5, candidate: [] },
  { id: 45, name: "サッカー場", type: 5, candidate: [] },
  { id: 52, name: "陸上競技場", type: 5, candidate: [] },
  { id: 53, name: "球技場", type: 5, candidate: [] },
  { id: 54, name: "野球場", type: 5, candidate: [] },
] as const;

export const GROUPED_FACILITY_MAP: FacilityMap[][] = types.map((t) => FACILITY_MAP.filter((f) => f.type === t));
export type FacilityNames = typeof FACILITY_MAP[number]["name"];
export type FacilityIds = typeof FACILITY_MAP[number]["id"];
