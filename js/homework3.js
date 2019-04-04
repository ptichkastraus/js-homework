/* Написать функцию сравнения двух массивов. Функция принимает на вход два массива,
сравнивает их и возвращает true, если массивы равны и false, если не равны.*/

let array1 = [23, 57, 92, 54];
let array2 = [1,2,4,23];

function arrayForCompare(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        console.log("Only one array or dont find arrays");
        return false;
    }

    if (arr1.length !== arr2.length) {
        console.log("Array length not the same");
        return false;
    }

     for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log("Array not the same");
            return false;
        }
    }
    console.log("Array the same");
    return true;
}

arrayForCompare(array1, array2);

/*Дано натуральное число N. Вычислите сумму его цифр, использую рекурсию (строки, массивы и циклы использовать запрещено).*/
function sumN(N){
    if (N < 1) {
        return false;
    }

    return Math.trunc(N % 10) + Math.trunc(sumN(N/10));
}

console.log(sumN(579));


/*3. Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона,
третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива.
Функция возвращает массив, который содержит все числа из него, включая начальное и конечное.
Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].*/

function range(start, end, step){
    if (!start || !step) {
        console.log("data not transferred");
        return;
    }

    if (step <= 1) {
        step = 1;
    }

    let arr = [];

    arr [0] = start;


    for (i=1; start+step <= end; i++){
       start = start + step
       arr.push(start);
    }

    return arr;
}

console.log(range(1, 10, 2));
/*4. Напишите функцию,  которая в зависимости от переданного в нее целочисленного аргумента count,
будет выводить слово «товар» в нужно форме («12 товаров», но «22 товара» и тд).
