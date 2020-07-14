const moment = require('moment');

let now = moment();
let friday = moment('2020-07-03 00:00:01');

console.log('Сейчас: ' + now.format('YYYY-MM-DD HH:mm:ss'));
console.log('Пятничко: ' + friday.format('YYYY-MM-DD HH:mm:ss'));
console.log('До пятнички осталось: ' + friday.from(now));