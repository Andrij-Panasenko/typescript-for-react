const obj: object = {};
const objct: {} = {};

// Як і зі скалярними типами даних, ми можемо не уточнювати, що це Object:
let userObj = {
    name: "Tom",
    age: 30
};

const user:{ name: string, age: number } = {
    name: "John",
    age: 18
}

type User = {
    name: string,
    age: number,
}

const userJohn: User = {
    name: "John",
    age: 18
}

const userDoe: User = {
    name: 'Doe',
    age: 30 
}