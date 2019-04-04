/* Дан массив целых чисел. Числа не отсортированы и могут повторяться. Необходимо найти в данном массиве такие два числа
M и N, чтобы их сумма была равна 7. Например, 3 + 4 = 7 или 0 + 7 = 7 или -2 + 9 = 7 и тд
   Для решения достаточно найти хотя бы одну подходящую пару чисел M и N. Подумайте над оптимальным вариантом поиска.*/
   let arr = [], m, n;
   for ( let i = 0; i < 50; i++) {
     arr.push (Math.round( Math.random() * 100));
   }
   console.log(arr); // сoздала массив чисел*/

   function findNum(arrNum, sum) {

     for (let i = 0; i < arrNum.length; i++)  {
       el1 = arrNum[i];

       for (let j = 1; j < arrNum.length; j++){
         el2 = arrNum[j];
        if( el1 + el2 === sum) {
          return [el1, el2];
        }
       }
     }

   }
   console.log(findNum(arr, 7));

/* Вывести через console.log все числа от 1 до 100, с двумя исключениями.
Для чисел, нацело делящихся на 3, она должна выводить ‘Three’,
а для чисел, делящихся на 5 (но не на 3) – ‘Five’.
Измените код так, чтобы она выводила «ThreeFive» для всех чисел, которые делятся и на 3 и на 5.*/

let arr1 = [...Array(100).keys()];
function ThreeFive(arr) {
  for (let i = 0; i < arr1.length; i++) {
    elem1 = arr1[i];
    if (elem1 > 0){

    if (elem1 % 3 === 0 && elem1 % 5 === 0){
        console.log('ThreeFive');
      }
    else if (elem1 % 3 === 0) {
      console.log('Three');
    }

    else if (elem1 % 5 === 0) {
      console.log('Five');
    }
    else {

    console.log(elem1);
  }
}
}
}

//Напишите цикл, который  выводит в консоль треугольник из символов #, высотой 10 символов.

let limit=10,str ='#', trn =' ';


for (let i=1; i < limit; i++) {
    trn += str;
    console.log(limit);
}
/*Задать количество тарелок и количество моющего средства.
   Моющее средство расходуется из расчета 0,5 на одну тарелку.
   В цикле выводить сколько моющего средства осталось после мытья каждой тарелки
   В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.*/

   let plate = 55, agent = 250; count = 0;

for(i=1;i<=plate;i++){
    if(agent>0){
        agent-= 0.5;
        console.log('Помыли тарелок ',i);
        console.log('Осталось средства ',agent);
    }
    else{
        count++;
    }
}
console.log('Cредства осталось',agent);
console.log('Грязных тарелок осталось:', count);

 // Создайте программу, выводящую на экран первые 20 элементов последовательности 2 4 8 16 32 64 128

let sequenNumber = 1;
let i = 0;
while (i < 20) {
    sequenNumber *= 2;
    i++;
    console.log(sequenNumber);
}
