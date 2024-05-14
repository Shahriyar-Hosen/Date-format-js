const today: Date = new Date();

const yyyy: number = today.getFullYear();
let mm: number | string = today.getMonth() + 1; // Months start at 0!
let dd: number | string = today.getDate();

if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;

const formattedToday: string = dd + "-" + mm + "-" + yyyy;

console.log(formattedToday);
// output === '27-09-2022'
