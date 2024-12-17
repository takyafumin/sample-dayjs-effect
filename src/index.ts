import dotenv from 'dotenv';

dotenv.config();

console.log(`現在のタイムゾーン: ${process.env.TZ}`);
console.log(`現在の日時: ${new Date().toLocaleString()}`);
console.log(`現在の日時: ${new Date().toString()}`);
