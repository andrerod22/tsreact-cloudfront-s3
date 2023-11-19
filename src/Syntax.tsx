import React from 'react';
import { UnionType } from 'typescript';

const Syntax: React.FC = () => {
  // Primitive types
  const aString: string = "Hello, TypeScript!";
  const aNumber: number = 42;
  const aBoolean: boolean = true;

  // Logging primitive types
  console.log('String:', aString);
  console.log('Number:', aNumber);
  console.log('Boolean:', aBoolean);

  // Arrays
  const numberArray: number[] = [1, 2, 3, 4, 5];
  const stringArray: string[] = ["Hello", "World"];

  // Logging arrays
  console.log('Number Array:', numberArray);
  console.log('String Array:', stringArray);

  // Union types
  const someUnion: string | number = "Hello";
  console.log("Union type value: ", someUnion);
  // Literal Types
  const someLiteral: "red" | "green" | "blue" = "red";
  console.log("Literal exact value:", someLiteral);
  // Enums
  enum Color { Red, Green, Blue}
  const selectColor: Color = Color.Red;
  console.log("Colors: ", Color.Red, Color.Green, selectColor);

  // Tuples
  const aTuple: [string, number, Color] = ["Charisa", 22, Color.Blue];
  console.log("Tuple Elems: ", aTuple[0], aTuple[1], aTuple[2]);

  // Interfaces
  interface Doggo {
    name: string;
    id: number;
    rgbCollar: Color;
  }
  const doggo: Doggo = {name: "Calamari Extravaganza", id: 1997, rgbCollar: Color.Green};
  console.log("Doggos Attributes: ", doggo.name, doggo.id, doggo.rgbCollar);

  // Generics
  function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
  }
  const reverseNumbers = reverseArray<number>(numberArray); // Using the generic function
  const reverseStrings = reverseArray<string>(stringArray);

  // Type Assertions
  const value: any = "Hello";
  const length: number = (value as string).length;

  // Lambda (Arrow Function)
  const add = (x: number, y: number): number => x + y;
  console.log("Add lamba function : ", add(1, 2));
  
  // Hash Table (Object)
  const person: { name: string; age: number } = { name: "John", age: 30 };
  console.log("Hash Table Person: ", person.age, person.name)

  // Conditional Types
  type ArrayOrNot<T> = T extends any[] ? 'Array' : 'Not Array';
  const isArray: ArrayOrNot<number[]> = 'Array';
  const isNotArray: ArrayOrNot<number> = 'Not Array';
  console.log("Conditional Types: ", isArray, isNotArray);

  // Interface Inheritance (OOP Basically)
  interface DogWithBark extends Doggo {
    bark(): void;
  }
  const dogWithBark: DogWithBark = {
    name: "Rex",
    id: 123,
    rgbCollar: Color.Blue,
    bark: () => {
      console.log("Woof!");
    },
  };
  console.log("Interface type (OOP): ", dogWithBark.bark(), dogWithBark.id, dogWithBark.rgbCollar, dogWithBark.name);
  
  return (
    <div>
      <h1>TypeScript Syntax Examples</h1>
      <p>Check the console for outputs.</p>
    </div>
  );
};

export default Syntax;
