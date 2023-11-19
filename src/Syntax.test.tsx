import React from 'react';
import { render } from '@testing-library/react';
import Syntax from './Syntax';

// 'describe' is used to group together similar tests. It creates a block that groups several related tests.
describe('Syntax Component', () => {

  // 'it' is an alias for 'test'. It's used for writing individual test cases.
  // Each 'it' block describes a single test case.
  it('renders without crashing', () => {
    // The 'render' function from '@testing-library/react' is used to render the component.
    render(<Syntax />);
    // This test checks if the component renders without throwing an error.
  });

  // Testing for correct primitive types
  it('has correct primitive types', () => {
    // Defining some variables with specific types
    const aString: string = "Hello, TypeScript!";
    const aNumber: number = 42;
    const aBoolean: boolean = true;

    // 'expect' is used to make an assertion about a certain condition in the test.
    // Here, we are asserting the type of each variable.
    expect(typeof aString).toBe('string'); // Checks if 'aString' is of type 'string'
    expect(typeof aNumber).toBe('number'); // Checks if 'aNumber' is of type 'number'
    expect(typeof aBoolean).toBe('boolean'); // Checks if 'aBoolean' is of type 'boolean'
  });

  // Testing for correct array types
  it('has correct array types', () => {
    // Defining some arrays
    const numberArray: number[] = [1, 2, 3, 4, 5];
    const stringArray: string[] = ["Hello", "World"];

    // 'toBeTruthy' is used to ensure that a certain value is truthy.
    // In this case, we're checking if 'numberArray' and 'stringArray' are arrays.
    expect(Array.isArray(numberArray)).toBeTruthy(); // Checks if 'numberArray' is an array
    expect(numberArray.every(item => typeof item === 'number')).toBeTruthy(); // Checks if all items in 'numberArray' are numbers

    expect(Array.isArray(stringArray)).toBeTruthy(); // Checks if 'stringArray' is an array
    expect(stringArray.every(item => typeof item === 'string')).toBeTruthy(); // Checks if all items in 'stringArray' are strings
  });

  // Testing for union and literal types
  it('has correct union and literal types', () =>{
    // Union Types
    const someUnion: string | number = "Hello";

    expect(typeof someUnion).toBe('string');
    expect(typeof someUnion).not.toBe('number');

    // Literal Types
    const someLiteral: "red" | "green" | "blue" = "red";
    
    expect(someLiteral).toBe("red");
    expect(someLiteral).not.toBe("green");
  });

  it('has correct enum types', () => {
    // Testing for enums
    enum Color {red, green, blue};
    const selectedColor: Color = Color.red;
    expect(selectedColor).toBe(Color.red);
  });

  // Testing for tuples:
  it('has correct tuple types', () => {
    enum Color {red, green, blue};
    const aTuple: [string, number, Color] = ["Charisa", 22, Color.blue];
    expect(aTuple[0]).toBe("Charisa");
    expect(aTuple[1]).toBe(22);
    expect(aTuple[2]).toBe(Color.blue);
  });

  it('has correct interface types', () => {
    enum Color {red, green, blue};
    interface Doggo {
      name: string;
      id: number;
      rgbCollar: Color;
    }

    const doggo: Doggo = {name: "Calamari Extravaganza", id: 1997, rgbCollar: Color.green};
    expect(doggo.name).toBe("Calamari Extravaganza");
    expect(doggo.id).toBe(1997);
    expect(doggo.rgbCollar).toBe(Color.green);
  });

    // Generic function to reverse an array
  it('has correct generic types', () => {
    function reverseArray<T>(arr: T[]): T[] {return arr.reverse();}
    const numbers: number[] = [1,2,3,4,5];
    const reversedNumbers = reverseArray(numbers);
    expect(Array.isArray(reversedNumbers)).toBeTruthy();
    expect(reversedNumbers).toEqual([5,4,3,2,1]);
  });

  it('has correct type assertions', () => {
    const value: any = "Hello";
    const length: number = (value as string).length;

    expect(typeof length).toBe('number');
    expect(length).toBe(5);
  });
});
