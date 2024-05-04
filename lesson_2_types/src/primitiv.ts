

let isDone: boolean = false;

let decimal: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d; 
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";

let empty: null = null;
let notParam: undefined = undefined;

// не обов'язково вказувати тип даних, якщо ви передати його явно.
const num = 10;
const str = 'Some string';
const bool = true;
const emptyNull = null;
const notParamUndef = undefined;


function foo(num: number, str: string, bool: boolean, empty: null) {
    console.log("🚀 ~ foo ~ empty:", empty)
    console.log("🚀 ~ foo ~ bool:", bool)
    console.log("🚀 ~ foo ~ str:", str)
    console.log("🚀 ~ foo ~ num:", num)
}

// якщо ми задаємо значення за замовчуванням у функції, тип вказувати не потрібно.
function boo(num = 10, str = "string", bool: boolean, empty: null) {
    console.log("🚀 ~ foo ~ empty:", empty)
    console.log("🚀 ~ foo ~ bool:", bool)
    console.log("🚀 ~ foo ~ str:", str)
    console.log("🚀 ~ foo ~ num:", num)
}
