export function transformDuration(duration:number):string {
  const minutes = parseInt(`${duration / 60}`, 10);
  const seconds = parseInt(`${duration % 60}`, 10);
  return `${minutes >= 10 ? minutes : `0${minutes}`}:${seconds >= 10 ? seconds : `0${seconds}`}`;
}
