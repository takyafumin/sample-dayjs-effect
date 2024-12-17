import dotenv from 'dotenv';

dotenv.config();

console.log(`現在のタイムゾーン: ${process.env.TZ}`);
console.log(`現在の日時: ${new Date().toLocaleString()}`);
console.log(`----------------------------------------`);

import { getUTCDate } from './utils/dayjs-utc';
console.log(`./utils/dayjs-utc.ts を読み込みました`);
console.log(`現在の日時 (UTC): ${getUTCDate()}`);
console.log(`----------------------------------------`);

import { getJSTDate } from './utils/dayjs-jst';
console.log(`./utils/dayjs-jst.ts を読み込みました`);
console.log(`現在の日時 (JST): ${getJSTDate()}`);
console.log(`----------------------------------------`);

console.log(`現在の日時 (UTC): ${getUTCDate()}`);
