import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

// デフォルトのタイムゾーンを設定
dayjs.tz.setDefault('Asia/Tokyo');

export const getJSTDate = (): string => {
  return dayjs().tz().format('YYYY-MM-DD HH:mm:ss');
};
