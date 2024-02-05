const types = [1, 2, 3, 4, 5];
export type FacilityMap = {
  id: number;
  name: string;
  coordinate: [number, number];
  type: typeof types[number];
  candidate: string[];
}

export const FACILITY_MAP: FacilityMap[] = [
  { id: 1, name: "1号館", coordinate: [35.18396754260577, 137.11134374141696], type: 1, candidate: [] },
  { id: 2, name: "1号館別館", coordinate: [35.18474357273004, 137.11104869842532], type: 1, candidate: [] },
  { id: 4, name: "2号館", coordinate: [35.18377463001242, 137.11404204368594], type: 1, candidate: ["ロボットミュージアム"] },
  { id: 5, name: "3号館", coordinate: [35.18391931450037, 137.1150773763657], type: 1, candidate: [] },
  { id: 6, name: "3号館別館", coordinate: [35.183717633022226, 137.11512565612796], type: 1, candidate: [] },
  { id: 8, name: "4号館", coordinate: [35.18484879658316, 137.11510419845584], type: 1, candidate: [] },
  { id: 9, name: "4号館別館", coordinate: [35.18519077316489, 137.1154743432999], type: 1, candidate: [] },
  { id: 10, name: "5号館講義実験棟", coordinate: [35.18457696801732, 137.11404204368594], type: 1, candidate: [] },
  { id: 11, name: "6号館", coordinate: [35.18468219208616, 137.11606442928317], type: 1, candidate: [] },
  { id: 12, name: "7号館", coordinate: [35.18469096075241, 137.11256146430972], type: 1, candidate: [] },
  { id: 13, name: "8号館", coordinate: [35.184217451420814, 137.114594578743], type: 1, candidate: [] },
  { id: 14, name: "9号館", coordinate: [35.184761110048356, 137.11153686046603], type: 1, candidate: [] },
  { id: 15, name: "10号館", coordinate: [35.184186760905995, 137.11095213890079], type: 1, candidate: [] },
  { id: 16, name: "10号館・旧1号館", coordinate: [35.18441913165859, 137.11139202117923], type: 1, candidate: [] },
  { id: 17, name: "11号館", coordinate: [35.18519954177627, 137.11593031883243], type: 1, candidate: [] },
  { id: 18, name: "12号館", coordinate: [35.18370009547875, 137.11346268653872], type: 1, candidate: [] },
  { id: 19, name: "13号館", coordinate: [35.18474795705999, 137.11569964885715], type: 1, candidate: [] },
  { id: 20, name: "14号館", coordinate: [35.184484896845326, 137.11093068122867], type: 1, candidate: [] },
  { id: 55, name: "正門", coordinate: [35.18185863235197, 137.10961103439334], type: 2, candidate: [] },
  { id: 49, name: "バス停", coordinate: [35.182340924346484, 137.11006164550784], type: 2, candidate: [] },
  { id: 50, name: "守衛室", coordinate: [35.18284513564438, 137.11024940013888], type: 2, candidate: ["警備室"] },
  { id: 32, name: "愛和会館", coordinate: [35.184234988852666, 137.1123576164246], type: 2, candidate: ["愛和食堂"] },
  { id: 33, name: "AITプラザ", coordinate: [35.1842656793493, 137.11178898811343], type: 2, candidate: [] },
  { id: 34, name: "セントラルテラス", coordinate: [35.18417799218533, 137.1139454841614], type: 2, candidate: [] },
  { id: 35, name: "鉀徳館", coordinate: [35.18219623704863, 137.11377918720248], type: 2, candidate: ["体育館"] },
  { id: 37, name: "小体育館", coordinate: [35.181446489652515, 137.113333940506], type: 2, candidate: [] },
  { id: 21, name: "図書館", coordinate: [35.183634329656954, 137.11289405822757], type: 2, candidate: [] },
  { id: 22, name: "計算センター", coordinate: [35.18459888970955, 137.1145409345627], type: 2, candidate: [] },
  { id: 23, name: "情報教育センター", coordinate: [35.18458573669492, 137.1150076389313], type: 2, candidate: [] },
  { id: 29, name: "本部棟", coordinate: [35.18321342713723, 137.11201429367068], type: 2, candidate: [] },
  { id: 30, name: "第1本部棟", coordinate: [35.183586101353804, 137.1118372678757], type: 2, candidate: [] },
  { id: 31, name: "第2本部棟", coordinate: [35.183568563781925, 137.11238980293277], type: 2, candidate: [] },
  { id: 46, name: "第一駐車場", coordinate: [35.18223131278086, 137.11513638496402], type: 3, candidate: [] },
  { id: 47, name: "第二駐車場", coordinate: [35.18227077296152, 137.11609661579135], type: 3, candidate: [] },
  { id: 48, name: "第三駐車場", coordinate: [35.18166133025661, 137.1175986528397], type: 3, candidate: [] },
  { id: 43, name: "バイク駐車場", coordinate: [35.182248850641294, 137.11463749408725], type: 3, candidate: [] },
  { id: 3, name: "土木・建築実験棟", coordinate: [35.18410345802157, 137.11294233798984], type: 4, candidate: ["2号館実験棟"] },
  { id: 7, name: "バイオ環境化学実験棟", coordinate: [35.18372201740752, 137.11539924144748], type: 4, candidate: [] },
  { id: 24, name: "総合技術研究所", coordinate: [35.18319150507129, 137.11470723152163], type: 4, candidate: [] },
  { id: 25, name: "耐震実験センター", coordinate: [35.18514693009382, 137.1111345291138], type: 4, candidate: [] },
  { id: 26, name: "振動実験棟", coordinate: [35.18501101642313, 137.1131139993668], type: 4, candidate: [] },
  { id: 27, name: "地域防災研究センター", coordinate: [35.18475234138968, 137.1105390787125], type: 4, candidate: [] },
  { id: 28, name: "エコ電力研究センター", coordinate: [35.182840751211785, 137.11528122425082], type: 4, candidate: [] },
  { id: -1, name: "システム工学研究会", coordinate: [35.18521269469156, 137.11530804634097], type: 4, candidate: ["シス研", "シスケン"] },
  { id: 38, name: "第3クラブハウス", coordinate: [35.18512500854939, 137.11148858070376], type: 5, candidate: [] },
  { id: 39, name: "第4クラブハウス", coordinate: [35.182586453717065, 137.11463212966922], type: 5, candidate: [] },
  { id: 40, name: "第5クラブハウス", coordinate: [35.18156487128013, 137.11795270442965], type: 5, candidate: [] },
  { id: 36, name: "総合運動場管理棟", coordinate: [35.18345456947251, 137.11749672889712], type: 5, candidate: [] },
  { id: 41, name: "庭球場管理ハウス", coordinate: [35.18339757225784, 137.11271166801455], type: 5, candidate: [] },
  { id: 42, name: "セントラル広場", coordinate: [35.18328796211728, 137.11378991603854], type: 5, candidate: [] },
  { id: 44, name: "テニスコート", coordinate: [35.18320465831159, 137.11263656616214], type: 5, candidate: [] },
  { id: 51, name: "アーチェリー場", coordinate: [35.18147718120217, 137.11409568786624], type: 5, candidate: [] },
  { id: 45, name: "サッカー場", coordinate: [35.183643098436264, 137.11651504039767], type: 5, candidate: [] },
  { id: 52, name: "陸上競技場", coordinate: [35.18441474731094, 137.1177810430527], type: 5, candidate: [] },
  { id: 53, name: "球技場", coordinate: [35.18236284664188, 137.1172392368317], type: 5, candidate: [] },
  { id: 54, name: "野球場", coordinate: [35.18273552475875, 137.11881101131442], type: 5, candidate: [] },
] as const;

export const GROUPED_FACILITY_MAP: FacilityMap[][] = types.map((t) => FACILITY_MAP.filter((f) => f.type === t));
export type FacilityNames = typeof FACILITY_MAP[number]["name"];
export type FacilityIds = typeof FACILITY_MAP[number]["id"];
