// 1. Basic Types
let num: number = 4;
let str: string = "Namaste";
let bool: boolean = true;
let numArray: number[] = [1, 2, 3, 4, 5];
let tuple: [string, number] = ["goa", 40];

enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

// 2. Functions
function add(a: number, b: number): number {
  return a + b;
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// 3. Interfaces
interface Person {
  name: string;
  age: number;
  email: string;
}

const user: Person = {
  name: "Ram",
  age: 24,
  email: "ram@gmail.com"
};

// 4. Classes
class Car {
  constructor(public make: string, public model: string, public year: number) {}

  displayInfo(): void {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }
}

// 5. Generics
function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

// Testing
console.log("num:", num);
console.log("str:", str);
console.log("bool:", bool);
console.log("numArray:", numArray);
console.log("tuple:", tuple);
console.log("DaysOfWeek:", DaysOfWeek);
console.log("add(5, 10):", add(5, 10));
console.log("capitalize('world'):", capitalize("world"));
console.log("user:", user);
const myCar = new Car("Toyota", "Supra", 2010);
myCar.displayInfo();
console.log("reverseArray([1, 2, 3, 4, 5]):", reverseArray([1, 2, 3, 4, 5]));
