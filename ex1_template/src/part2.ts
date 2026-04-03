import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels: (s: string) => number = R.pipe(
    stringToArray,
    R.map((c: string) => c.toLowerCase()),
    R.filter((c: string) => R.includes(c, vowels)),
    R.length
);

/* Question 2.2 */
// export const isPalindrome = (text: string): boolean =  R.pipe(
//     stringToArray,
//     R.filter((c: string) => {
//         const code = c.charCodeAt(0);
//         return (code >= 65 && code <= 90) ? true   // A-Z
//              : (code >= 97 && code <= 122) ? true  // a-z
//              : (code >= 48 && code <= 57) ? true   // 0-9
//              : false;
//     },
//     R.map((c: string) => c.toLowerCase()),
//     (arr: string[]) => R.equals(arr, R.reverse(arr))
// );
//     undefined as any;;

export const isPalindrome = (text: string): boolean => R.pipe(
    stringToArray,
    R.filter((c: string) => {
        const code = c.charCodeAt(0);
        return (code >= 65 && code <= 90) ? true   // A-Z
            : (code >= 97 && code <= 122) ? true  // a-z
                : (code >= 48 && code <= 57) ? true   // 0-9
                    : false;
    }),
    R.map((c: string) => c.toLowerCase()),
    (arr: string[]) => R.equals(arr, R.reverse(arr))
)(text);


/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => 
   R.pipe(
    (tree: WordTree) => tree.children,
    R.reduce((acc: string, cur: WordTree) => acc + " " + treeToSentence(cur), t.root)
  )(t);
;