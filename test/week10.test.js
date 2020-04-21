const {
    sumDigits,
    createRange,
    hexToRGB
} = require("../challenges/week10");

describe("sumDigits", () => {
    test("returns the sum of the digits in a number", () => {
        expect(sumDigits(98464)).toBe(31);
        expect(sumDigits(47863)).toBe(28);        
        expect(sumDigits(0)).toBe(0);

    });
   
});
describe("createRange", () => {
    test("returns the sum of the digits in a number", () => {
        expect(createRange(5,60,5)).toEqual([5,10,15,20,25,30,35,40,45,50,55,60]);
        expect(createRange(3,21,6)).toEqual([3,9,15,21]);      
        expect(createRange(2,13)).toEqual([2,3,4,5,6,7,8,9,10,11,12,13]);

    });
   
});
describe("hexToRGB", () => {
    test("returns the sum of the digits in a number", () => {
        expect(hexToRGB("#ffffff")).toEqual("rgb(255,255,255)");
        expect(hexToRGB("#00ff00")).toEqual("rgb(0,255,0)");      
        expect(hexToRGB("#800080")).toEqual("rgb(128,0,128)");

    });
   
});