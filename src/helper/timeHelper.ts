export function getHmsFromSeconds(_seconds: number | string) {
  const seconds = Number(_seconds);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor((seconds % 3600) % 60);

  return { h, m, s };
}
