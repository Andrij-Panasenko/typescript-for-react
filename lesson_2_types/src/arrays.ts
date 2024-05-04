// масив рядків
let arrayString: string[];

arrayString = ['aaa', 'bbb', 1] //Type 'number' is not assignable to type 'string'.

let arrayNumber: number[];

//багатовимірний масив
let matrix: number[][] = [[1, 2], [3, 4]];

//масив елементів різних типів
let mixed: (number | string)[] = [1, "string"];

// generic
let numbers: Array<number> = [1, 2, 3, 4];

let users: {
    name: string,
    age: number
}[] = [
        { name: 'Tom', age: 30 },
        { name: 'Jack', age: 25 },
        { name: 'Alice', age: 32 },
    ];

type UserType = {
    name: string;
    age: number;
};

let usersArray: UserType[] = [
    { name: 'Tom', age: 30 },
    { name: 'Jack', age: 25 },
    { name: 'Alice', age: 32 },
];