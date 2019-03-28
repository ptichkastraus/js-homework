let height = 125, width = 115, height2 = 85;
let area = 2 * (height * width + width * height2 + height * height2);
console.log(area);


// res = (height >= width), res = (width <= height2) ? "высота больше" : "ширина больше" ? "ширина больше" : "высота2 больше"; // здесь я, кажется, не допоняла логику
res = (height > width) ? "высота больше" : "ширина больше или они равны";
console.log(res);


let s = 1000, a = 15, b = 25;
let emparea = s % (a * b);
console.log(emparea);

let oval = '15dm2', oval2 = '600sm2', ring;
oval = parseInt(oval);
oval2 = parseInt(oval2);
ring = oval * 100 - oval2;
console.log(ring);

let m = 15.2, n = 7.4;
m = Math.abs(10 - m);
n = Math.abs(10 - n);
res = (n > m) ? "m ближе к 10" : "n ближе к 10 или они равноудалены";
console.log(res);
