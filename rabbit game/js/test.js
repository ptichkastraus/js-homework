class Unit {
  constructor(image, x,y, width, height) {
    this.image = image;
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
  }


  get image (){
    return this._img
  }

 set image(image){
   this._image = image;
   this._img = new Image()
   this._img.src = this._image;
 }
  get width (){
    return this._width
  }

  get height (){
    return this._height
  }

  get x (){
    return this._x
  }

  set x (new_x){
    return this._x = new_x
  }

  get y (){
    return this._y
  }

  set y (new_y){
    return this._y = new_y
  }

}

  class Board {
    constructor (width, height, color) {
      let canvasCollection = document.getElementsByTagName('canvas');
      this._canvas = canvasCollection[0];
      this._context = this._canvas.getContext('2d');

      this.width = width;
      this.height = height;
      this.color = color;

      //canvas.width = 900;
      //canvas.height = 600;
      //context.fillStyle = '#1DD300';
      //context.fillRect(0, 0, 900, 600);
    }

    get color(){
      return this._color
    }
    set color(color) {
      this._color = color
      this._context.fillStyle = this._color
      this._context.fillRect(0,0,this.width, this.height)
    }
   get width(){
     return this._width
   }
   set width (width) {
     this._width = width
     this._canvas.width = this._width
     this.color = this.color
   }
  get height() {
    return this._height
  }
  set height(height){
    this._height = height
    this._canvas.height = this._height
    this.color = this.color
  }
  draw(unit) {
    self = this;
    unit.image.onload = function () {
      self._context.drawImage(unit.image, unit.x, unit.y, unit.width, unit.height);
    };
    this._context.drawImage(unit.image, unit.x, unit.y, unit.width, unit.height);
  }
}

class Game {
  constructor() {
    this._rabbit = new Unit('img/rabbit.png',22, 15, 220, 220);
    this._egg = new Unit('img/egg.png',100, 255, 50, 50);
    this._board = new Board(1000,1000,'green')
  }

  start() {
    this._board.draw(this._rabbit)
    this._board.draw(this._egg)
  }
  if this._rabbit.intersect(this._egg) {
    document.addEventListener("keypress", movePic);
    function clearImage(){

    }

    function movePic(event) {
      // console.log(event.code);
      // context.fillStyle = '#1DD300';
      // context.fillRect(x, y, 220, 220);

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

  }
  // key handling code
  // if event.code = 'Up' {
  //   this._rabbit.x += 4
  //  if this._rabbit.x >= this._egg.x {
  //    this._egg.x = 500
  //    this._egg.y = 200
  //   }
  // }

}

game = new Game()
game.start()
