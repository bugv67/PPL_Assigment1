import { countVowels, isPalindrome, treeToSentence, WordTree } from "../src/part2";

describe("Assignment 1 Part 2", () => {
    describe("countVowels", () => {
        it("counts letters", () => {
            expect(countVowels("aaabbbb")).toEqual(3);
        });
        it("counts letters", () => {
            expect(countVowels("AaaBbbb")).toEqual(3);
        });
        it("counts letters", () => {
            expect(countVowels("ABbbaab")).toEqual(3);
        });
        it("counts letters", () => {
            expect(countVowels("I am robot")).toEqual(4);
        });
        it("counts letters", () => {
            expect(countVowels("abcABCaabbcc d")).toEqual(4);
        });
    });

    describe("isPalindrome", () => {

        it("should return true for a simple palindrome", () => {
            expect(isPalindrome("racecar")).toBe(true);
        });

        it("should return true for a palindrome with mixed case", () => {
            expect(isPalindrome("RaceCar")).toBe(true);
        });

        it("should return true for a palindrome ignoring spaces and punctuation", () => {
            expect(isPalindrome("A man, a plan, a canal, Panama!")).toBe(true);
        });

        it("should return false for a non-palindrome", () => {
            expect(isPalindrome("Not a palindrome")).toBe(false);
        });

        it("should return true for an empty string", () => {
            expect(isPalindrome("")).toBe(true);
        });

        it("should return true for a single-character string", () => {
            expect(isPalindrome("a")).toBe(true);
        });

        it("should handle numeric palindromes", () => {
            expect(isPalindrome("12321")).toBe(true);
        });

        it("should handle palindromes with special characters", () => {
            expect(isPalindrome("No lemon <=> No melon")).toBe(true);
        });

    });

    describe("treeToSentence", () => {
        it("Represents a tree as a sentence", () => {
            const t1: WordTree = {root:"hello", children:[{root: "world", children:[]}]}
            expect(treeToSentence(t1)).toBe("hello world");
        });

        it("Represents a tree as a sentence", () => {
            const t2: WordTree = {root:"hello", children:[{root: "there", children:[]}, {root:"!", children:[]}]}
            expect(treeToSentence(t2)).toBe("hello there !");
        });
        it("Represents a tree as a sentence", () => {
            const t3: WordTree = {root:"hello", children:[{root: "there", children:[{root:"!", children:[]}]}]}
            expect(treeToSentence(t3)).toBe("hello there !");
        });
        it("Represents a tree as a sentence", () => {
            const t4: WordTree = {root:"hello", children:[]}
            expect(treeToSentence(t4)).toBe("hello");
        });
        it("Represents a tree as a sentence", () => {
            const t5: WordTree = {root:"", children:[]}
            expect(treeToSentence(t5)).toBe("");
        });
    });
describe("Assignment 1 Part 2 - Additional Edge Cases", () => {
    describe("countVowels - Extra tests", () => {
        it("returns 0 for an empty string", () => {
            expect(countVowels("")).toEqual(0);
        });

        it("returns 0 for a string with no vowels", () => {
            expect(countVowels("bcdfg 123 !@#")).toEqual(0);
        });

        it("counts correctly when string is ONLY vowels", () => {
            expect(countVowels("aeiouAEIOU")).toEqual(10);
        });

        it("ignores numbers and special characters completely", () => {
            expect(countVowels("h3ll0 w0rld!")).toEqual(0); // No vowels here!
            expect(countVowels("v0w3ls r0ck!")).toEqual(0); 
        });
    });

    describe("isPalindrome - Extra tests", () => {
        it("returns true for a string consisting ONLY of special characters and spaces", () => {
            // All these characters are filtered out, resulting in an empty array which is a palindrome
            expect(isPalindrome(" !!! ??? --- ")).toBe(true);
        });

        it("handles alphanumeric mixtures correctly", () => {
            expect(isPalindrome("A1b2  2B1a")).toBe(true);
        });

        it("returns false for almost-palindromes", () => {
            expect(isPalindrome("racecars")).toBe(false);
        });

        it("returns false for non-palindromes that contain matching parts", () => {
            expect(isPalindrome("123ab321")).toBe(false);
        });
    });

    describe("treeToSentence - Extra tests", () => {
        it("Represents a complex tree with multiple branches and depths", () => {
            const t6: WordTree = {
                root: "I", 
                children: [
                    {
                        root: "love", 
                        children: [
                            {root: "functional", children: []}, 
                            {root: "programming", children: []}
                        ]
                    },
                    {
                        root: "very", 
                        children: [
                            {root: "much", children: []}
                        ]
                    }
                ]
            };
            expect(treeToSentence(t6)).toBe("I love functional programming very much");
        });

        it("Handles a tree where nodes contain numbers as strings", () => {
            const t7: WordTree = {
                root: "1", 
                children: [
                    {root: "2", children: []}, 
                    {root: "3", children: []}
                ]
            };
            expect(treeToSentence(t7)).toBe("1 2 3");
        });
    });
});
});

