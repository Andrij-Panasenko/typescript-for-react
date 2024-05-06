
function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

let strings = reverse<string>(['a','b','c','d,'])
console.log("🚀 ~ numbers:", numbers)

let numeric = reverse<number>([1,2,3,4])
console.log("🚀 ~ numbers:", numbers)


// extends and key of
function lengthofObj<T extends { length: number }>(obj: T): number {
    return obj.length
};
 

const studentData = {
    name: 'bora',
    age: 25,
    address: "home", 
}

// в цьому випадку ми кажемо, що "К" має бути ключом об'єкту "Т"
function getProperty<T, K extends keyof T>(obj: T, key:K): T[K] {
    return obj[key];
}

let studentsName = getProperty(studentData, "name")
console.log("🚀 ~ studentsName:", studentsName) //'bora'

let studentsLocation = getProperty(studentData, "location") //Argument of type '"location"' is not assignable to parameter of type 
console.log("🚀 ~ studentsLocation:", studentsLocation) // undefined


// partial
type Todo = {
    title: string,
    description: string,
    completed: boolean
}

const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>):Todo => {
    return {...todo, ...fieldsToUpdate}
}

const todo1: Todo = {
    title: "TS",
    description: "study the basic of TS",
    completed: false
}

const todo2 = updateTodo(todo1, {
    description: "Study generic",
})

// readonly