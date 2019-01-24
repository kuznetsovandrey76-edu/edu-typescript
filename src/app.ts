let isDone: boolean = true;
let age: number = 28;
let fullname: string = "Andrey Kuznetsov";

let message: string = `Hello ${fullname}`;

console.log(message);

let year: string[]; // массив строковых значений
year = ['Jan', 'Feb', 'Mar'];

// Кортеж - упорядоченный набор фиксированной длины
let x: [string, string, number] = ['Andrey', 'Kuznetsov', 28];

function add(x: number, y: number) :number {
    return x + y;
}

// this - контекст функции. This - переменная, которая устанавливается при запуске функции.