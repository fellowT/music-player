/**
 * @description 毫秒转换成分秒
 * @param duration
 */
export function transformDuration(duration:number):string {
  const minutes = parseInt(`${duration / 60}`, 10);
  const seconds = parseInt(`${duration % 60}`, 10);
  return `${minutes >= 10 ? minutes : `0${minutes}`}:${seconds >= 10 ? seconds : `0${seconds}`}`;
}

export function transformPlayCount(count:number):string|number {
  if (count >= 10000) {
    return `${String(count).slice(0, -4)}万`;
  }
  return count;
}
