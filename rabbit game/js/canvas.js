let canvasCollection = document.getElementsByTagName('canvas');
let canvas = canvasCollection[0];
canvas.width = 900;
canvas.height = 600;

let context = canvas.getContext('2d');
context.fillStyle = '#1DD300';
context.fillRect(0, 0, 900, 600);

let rabbitImg = new Image();
rabbitImg.src = 'img/rabbit.png';
rabbitImg.onload = function () {
  context.drawImage(rabbitImg, 22, 15, 220, 220);
};
let x = 22;
let y = 15;

document.addEventListener("keypress", movePic);
function clearImage(){

}

function movePic(event) {
  console.log(event.code);
  context.fillStyle = '#1DD300';
  context.fillRect(x, y, 220, 220);

if(event.code === "Numpad6"){
  x += 4;
}
 if(event.code === "Numpad4") {
  x -= 4;
}
if(event.code === "Numpad2") {
  y += 4;
}

if(event.code === "Numpad8") {
  y -= 4;
}
context.drawImage(rabbitImg, x, y, 220, 220);
}


let eggImg = new Image();
eggImg.src = 'img/egg.png';
eggImg.onload = function () {
  context.drawImage(eggImg, 100, 255, 50, 50);
};

//классы
//1)Игра
//2)Игрок: картинка, координаты,размеры
//3)Враг: картинка, координаты,размеры
//unit - игрок - враг
