"use strict";
//Сад - это объект со списком объектов деревьев.
//У всего сада есть возраст (например количество суток).
//Сад имеет метод:
//просчитать 1 сутки (т.е. метод, который фиксирует прохождение суток)



class Garden {
    constructor () {
        this.countApples = 0; // количество яблок на конкретном дереве
        this.countAllGrowApple = 0; // суммируем количество рождённых яблок в саду со всех деревьев
        this.trees = []; //массив деревьев
        this.quantity = Math.floor(Math.random()*(100-1)+1); // добавляем случайное количество деревьев от 1 до 100
        for (let i = 0; i < this.quantity; i ++) {
            this.trees.push(new Tree());  // пушим N деревев в класс Tree
        }
        this.age = 1; // возраст сада
        this.day = 1; // день сегодняшний
    }

// получить список висящих яблок на деревьях
    getCountApples(){
        for (let i=0; i<this.trees.length; i++) { // проходит по массиву деревьев
            this.countApples +=this._trees[i].apples.length; //у каждого дерева (class Tree) есть масссив яблок(apples),он проходится по каждому и считает количество и суммирует в countApples
        }
        console.log(this.countApples)
        return this.countApples; //возвращает в консольку
    }

//задаем метод, который фиксирует прохождение суток
    passDay() {
        for (let i=0; i < this.trees.length; i++) {
            this.trees[i].oneDayPassed(); //обращаемся к свойству дерева "один прошедший день"
            this.countApples += this.trees[i].apples.length;// фиксируем изменения количество яблок после суток
            this.countAllGrowApple+=this.trees[i].countGrowApple;//считает количество рожденных яблок
        }

        if (this.age !==31){
            console.log("день - "+this.day+" (Всего яблок на "+this.quantity+" деревьях - " +this.countApples+")");}
            else{
            console.log("день - "+this.day+" (Всего яблок на "+this.quantity+" деревьях - " +this.countApples+" , "+ "выросло - "+this.countAllGrowApple+" яблок)");
            this.age =1;// сбрасываем что бы начать отсчет опять
             }
        this.age += 1; // увеличиваем возраст сада
        this.countApples = 0; // все выведины, сбрасываем счетчики что бы не суммировать все значений каждый день
        this.countAllGrowApple = 0;
        return this.day += 1; // увеличиваем день в саду
    }


}

class Tree {
    constructor() {
        this.apples = []; //задаем массив с яблоками на дереве
        this.countGrowApple = 0; //суммируем количество рождённых яблок
        this.age = 1; // возраст дерева
        this.quantity = Math.floor(Math.random() * (100 - 1) + 1); //количество будущих яблок в массиве
        for (let i = 0; i < this.quantity; i++) {
                    this.apples.push(new Apple()); //добавляем новое яблоко

        }
      }

//запускаем день
    oneDayPassed() {
        for (let i = 0; i < this.apples.length; i++) { // перебор всех яблок на дереве
            this.apples[i].hasAged(); //увеличиле возраст яблока
            if (this.apples[i].fall === 1) { // проверили упало ли яблоко, если да поставил что оно испортилось.
                this.apples[i].spoil();
            }
            if (this.apples[i].age > 30) { // если возраст яблока больше 30, то оно падает
                this.apples[i].fell();
            }
            if (this.apples[i].spoiled === 1) {// если яблоко испортилось убираем его с дерева
                this.apples.splice(i, 1); //изменяет содержимое массива, удаляя один элемент по индексу i и/или добавляя новые.
            }
        }
        this.newApple();// начинаем процесс рождения яблока
        this.age += 1; //увеличили возраст дерева
    }

    newApple() {
        if (this.age === 31) {// проверяем если дереву 31, то он сносит яблочко
            this.countGrowApple=0;
            this.quantity = Math.floor(Math.random() * (30 - 1) + 1);//рандомное число яблок которые сегодня родятся
            for (let i = 0; i < this.quantity; i++) {
                this.apples.push(new Apple());
               }
            this.countGrowApple=this.quantity; //устанавливаем скок яблок на дереве
            this.age = 1;// сбрасываем возраст дерева чтобы начать отсчет для рождения яблок заново
        }
    }
}
class Apple {
    constructor(){
      this._age =  Math.floor(Math.random()*(30-1)+1);
      this.color = Math.round(Math.random())?"Красное":"Зеленое";//пока не используется
      this.size = Math.floor(Math.random()*(4-1)+1);//пока не используется
      //   -флаг испорченности (0 - свежее, 1 - испорченное)
      //   -флаг упавшего с дерева (0 - на дереве, 1 - упало)
      this.spoiled = 0;
      this.fall = 0;
      }

      //получаем значения свойств яблока - возраст и цвет (в зависимости от возраста)
      get age() {
        return this._age;
    }


    //устанавливаем яблоку полученные значения
      set age(value) {
        this._age = value;
    }

    // Яблоки имею методы:
    //  -упасть с дерева

    fell(){
        return this.fall = 1; //при запуске функции устанавливается флаг что яблоко упало
    }
    // -испортиться
    spoil(){
        return this.spoiled =1; //при зауске функции устанавливается флаг что яблоко испортилось
    }

    //задаем время, спустя которое упавшее яблоко портится
    hasAged(){
        return this._age +=1; //при запуске функции значение увеличивается на 1
    }
}

let garden = new Garden(); // записываем в переменную новый объект Garden

setInterval(function() { //каждые 5 секунд = 1 пройденный день
    garden.passDay();
}, 1000);
