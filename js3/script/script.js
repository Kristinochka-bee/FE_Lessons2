// 1) Написать цикл for, который выводит в консоль числа от 5 до 17;

// for (let i=5; i<=17; i++){
//     console.log(i)
// }




//2)Написать цикл for, который выводит в консоль числа от 10 до 25 с шагом 2;

// for(let i=10; i<=25; i+=2){
//     console.log(i)
// }




//3)Написать цикл for, который выводит в консоль числа от 100 до 25 кратные 3


// for(let i= 100; i>= 25; i--){
//     if(i % 3 == 0)
//     console.log(i);
// }



//4) Задан массив. Вывести каждый элемент массива в консоль

// let arr = [3, 'hello', true, 9, 66]; 
// for(let i=0; i< arr.length; i++){
//     console.log(arr[i])
// }

//5)Дана строка. Вывести каждую букву в консоль
// let string = 'good morning!';
// for (let i=0; i<string.length; i++){
// console.log(string[i])}



//6) Дан массив с числами. Найти сумму всех чисел

let arr = [2, 54, 7, 98];
let sum=0;
for(let i = 0; i<arr.length;i++ ){
    sum += arr[i]                     //sum = sum + arr[i]
}
console.log(sum);  //когда вывод за пределами цикла , в консоле не будет показыватьяс каждая итерация цикла'




//7) Дан массив с числами. Найти произведение всех чисел //525

let arr2 = [3, 7, 25];
let mult = 1;
    for (let i = 0; i < arr2.length; i++){
    mult *= arr2[i]
}
 console.log(mult);