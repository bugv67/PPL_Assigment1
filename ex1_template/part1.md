## Part 1: Theoretical Questions

Submit the solution to this part as `part1.md`.

### [25 points] Question 1.1

1. Explain in simple words the following programming paradigms:
   1. [5 points] Imperative 
   1. [5 points] Object Oriented
   1. [5 points] Functional
1. [5 points] How does the object oriented paradigm improve over the imperative paradigm?
1. [5 points] How does the functional paradigm improve over the object oriented paradigm?

Answer:
1.
  1.1 The program is sequence of operations, one afer another, like java or python
  1.2 The code is organized as a hierarchey, in objects which communicate with the another through methods, that can pass data.
  1.3 The program is one big expression or a sequence. Running the program is calculating the value of the expression. 
2.  The oop paradigm improves over the imperative by organizing the code as objects. This makes the program modular, alloweing easier managment and upkeep of code, especially in larger programs (higher scalibilty). This division also makes the project more secure in terms of data. Unlike imperative, where any data can be accessed at any point, in oop data is accessed through methods.
3. The functional paradigm improves over the oop paradigm by using immutable data and minimizing side effects. This usually means that the results are more predictable, therefore there are less bugs. Moreover, this also means the testing and understanding the code is easier.
### [10 points] Question 1.2

Consider the following TypeScript function, which calculates the average price of all discounted products in a given inventory.

```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

// const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
//   let discountedPriceSum = 0;
//   let discountedProductsCount = 0;

//   for (const product of inventory) {
//     if (product.discounted) {
//       discountedPriceSum += product.price;
//       discountedProductsCount++;
//     }
//   }

//   if (discountedProductsCount === 0) {
//     return 0;
//   }

//   return discountedPriceSum / discountedProductsCount;
// };
const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
  const filteredProd : product[] = filter(prod => prod.discounted, inventory);
  const sum = reduce((acc, cur) => acc + cur, 0, filteredProd);
  const prodCount = filteredProd.length();

  if (discountedProductsCount === 0) {
    return 0;
  }
  return sum / prodCount;
};
```

This function uses an imperative approach with loops and conditional statements.

Refactor the function `getDiscountedProductAveragePrice` to adhere to the Functional Programming paradigm. Utilize the built-in array methods `map`, `filter`, and `reduce` to achieve the same functionality without explicit iteration and conditional checks.
Write the new function under the name `getDiscountedProductAveragePriceFP`.

**Important**: the new function should have the same signature.

**Note**: there are no tests for this question, and it will not be executed. The task here is to write the code in a functional way.

### [18 points] Question 1.3

Write the most general type for each expression, using type variables where applicable.
Guidelines:

- Arrays must be homogeneous.
- Arithmetic operations must be performed on numbers.
- Use generics where possible.
- Avoid using `any`.

1. [3 points] `(x, y) => x.some(y)` : <T> (array: T[], func: (a: T) => boolean) => boolean
2. [3 points] `x => x.map(y => y * 2)` : (array: number[]) => number[] 
3. [3 points] `(x, y) => x.filter(y)` : <T> (array: T[], func: (a: T) => boolean) => T[]
4. [3 points] `x => x.reduce((acc, cur) => acc + cur, 0)`: (array: number[]) => number
5. [3 points] `(x, y) => x ? y[0] : y[1]` : <T> (x: boolean, y: T[]) => T
6. [3 points] `(f,g) => x => f(g(x+1))`: <T,S> (f: (x : T) => S, g: (y: number) => T) => (z: number) => S
;
