import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

// デフォルトのタイムゾーンをUTCに設定
dayjs.tz.setDefault('UTC');

export const getUTCDate = (): string => {
  return dayjs().tz().format('YYYY-MM-DD HH:mm:ss');
};
