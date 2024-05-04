// any
function fetchUserData(id: string, callback: (data: any) => void): void {

  const responseData = { name: 'Tom' };

  callback(responseData);
}


fetchUserData('123', (data) => {
  console.log(data.name); // TypeScript не викличе помилку, навіть якщо поле name не існує
});

//unknown
function fetchUsersData() {
  return 'Tom';
}

let userData: unknown = fetchUsersData(); // fetchUserData повертає невідомі дані
if (typeof userData === 'string') {
  console.log(userData.toUpperCase()); // OK, тепер ми знаємо, що це рядок
}

// Tuple Кортеж
let tupleType: [string, boolean];
tupleType = ['hello', true]; // OK
tupleType = [true, 'hello']; // Error. Неправильні типи
tupleType = ['hello', true, true]; // Error. Більше значень ніж у tuple

// Кортежі зручні, коли нам потрібно зберегти в масив фіксовані значення, наприклад, день, місяць та рік.
let date: [number, number, number];
date = [7, 11, 2023]; // OK

// TypeScript надає гнучкі можливості для роботи з кортежами, включно з використанням оператора розширення (...) для створення кортежів змінної довжини.

let tuple: [string, ...number[]];

tuple = ['hello', 42, 100, 200]; // OK

// Enum. Enum являє собою набір констант
enum Role { ADMIN, USER };

const person = {
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log('Role: ', Role.ADMIN);
}

enum UserStatus {
    Active = 'ACTIVE',
    Inactive = 'INACTIVE',
    Banned = 'BANNED',
}
let status: UserStatus = UserStatus.Active;

// Існує ще така конструкція, як const enum. На відміну від звичайного enum, const enum видаляється під час транспіляції та не створює додаткового об'єкта в JavaScript.

//Union Type
let mixedType: string | number | boolean;

function combine(param1: number | string, param2: number | string) {
  if (typeof param1 === 'number' && typeof param2 === 'number') {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

// Union Type працює не лише з базовими типами, а й з об'єктами:

type Dog = {
    legs: 4;
    bark: () => void;
};

type Fish = {
    fins: 2;
    swim: () => void;
};

let pet: Dog | Fish;
