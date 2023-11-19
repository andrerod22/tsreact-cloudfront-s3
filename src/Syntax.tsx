import React from 'react';

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

  return (
    <div>
      <h1>TypeScript Syntax Examples</h1>
      <p>Check the console for outputs.</p>
    </div>
  );
};

export default Syntax;
