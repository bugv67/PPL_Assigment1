import { Result, makeFailure, makeOk, bind, either, isOk } from "./lib/result";
import * as R from "ramda";

/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}


//TO DO- logiclogic -- const mySuccess: Result<number> = makeOk(5);
export const findResult = <T>(pred: (x: T) => boolean, a: T[]): Result<T> => 
    R.reduce(
    ( acc: Result<T>, cur: T) => isOk(acc) ? acc : pred(cur) ? makeOk(cur) : acc,
       makeFailure<T>("No element found."),
       a
     );
     
/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}

// TO DO-
export const returnSquaredIfFoundEven_v2 = (a: number[]): Result<number> =>
    bind(findResult(x => x % 2 === 0, a), x => makeOk(x * x));
;
export const returnSquaredIfFoundEven_v3 = (a: number[]): number => 
    either(findResult(x => x % 2 === 0, a), x => x * x, () => -1);

