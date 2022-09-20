// Primitives: number, string, boolean
// Complex array, object
// Function, Parameter

// ! ===== Primitives =====

let age: number;

age = 25.3;
// age = "25.3"; // Type 'string' is not assignable to type 'number'.

let userName: string | string[];

userName = "Mehmet";

let isLoading: boolean;

isLoading = true;

// let hobilerim: null

// hobilerim = 12

// ! ===== Karmaşık Türler =====

let hobilerim: string[];

hobilerim = ["Mehmet", "Namık"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Mehmet",
  age: 25,
};

// person = {
//   isEmployee: true,
// };

let people: Person[];

// ! ===== Tür Çıkarımı =====

let kurs: string | number | boolean = "React";

kurs = 1234;

// ! ===== Function Types =====

function addTo(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// ! ===== Generics =====

function insert<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updateArray = insert(demoArray, -1); // [-1, 1, 2, 3]

const stringArray = insert(["a", "b", "c"], "d");

// updateArray[0].split()

// let numbers = [1, 2, 3];

// let numbers: number[] = [1, 2, 3];

// let numbers: Array<number> = [1, 2, 3];
