export type SecretMap = {
  id: number;
  word: string;
  event?: () => void;
}

export const SECRET_MAP: SecretMap[] = [
  { id: 1, word: "ペンギン" },
  { id: 2, word: "シカ", event: () => window.open("https://maps.app.goo.gl/PQNCBGnUDcWXvU6G7", "_blank") },
];
