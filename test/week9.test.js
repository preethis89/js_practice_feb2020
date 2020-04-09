const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/week9");

describe("sumMultiples", () => {
    test("returns the sum of any number that are divisible by 3 or 5 in the array", () => {
        expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(19);
        expect(sumMultiples([15, 30, 45, 27, 8])).toBe(117);

    });
    test("if the no number is a multiple of both 3 & 5 in the array, returns null", () => {
        expect(sumMultiples([11, 13, 7, 8])).toBe(null);
    });
});
describe("isValidDNA", () => {
    test("returns true/false for a valid DNA sequence for a given string ", () => {
        expect(isValidDNA("CCGTTTAAG")).toBe(true);
        expect(isValidDNA("agtaaagtaad")).toBe(false);
        expect(isValidDNA("ataaTTggcg")).toBe(true);
        expect(isValidDNA("atataacatccccgttaaggccaaaagactgtgttaaggt")).toBe(true);
        expect(isValidDNA("atataacatccccgttaaghkfgccaaaagactgtgttaaggt")).toBe(false);
    });

});
describe("getComplementaryDNA", () => {
    test("returns complementary DNA sequence for a given valid DNA sequence ", () => {
        expect(getComplementaryDNA("CCGTTTAAG")).toBe("ggcaaattc");
        expect(getComplementaryDNA("ataaTTggcg")).toBe("tattaaccgc");
        expect(getComplementaryDNA("atataacatccccgttaaggccaaaagactgtgttaaggt")).toBe("tatattgtaggggcaattccggttttctgacacaattcca");
        expect(getComplementaryDNA("catccccgttaaggccaaaagactg")).toBe("gtaggggcaattccggttttctgac");
    });
});
describe("isItPrime", () => {
    test("returns true if a given number is prime and false for not a prime number", () => {
        expect(isItPrime(127)).toBe(true);
        expect(isItPrime(773)).toBe(true);
        expect(isItPrime(520)).toBe(false);
        expect(isItPrime(939)).toBe(false);
    });
});
describe("createMatrix", () =>{
    test("return an array of n arrays, each filled with n items", () =>{
        expect(createMatrix(2,"dino")).toBe([["dino","dino"],["dino","dino"]]);
        expect(createMatrix(4,4)).toBe([[4,4,4,4],[4,4,4,4],[4,4,4,4],[4,4,4,4]]);
        expect(createMatrix(1,"car")).toBe([["car"]]);
    });
});
describe("areWeCovered", ()=>{
    test("returns true or false for a given day and list of staff available", () =>{
        const staff = [
             { name: "Suzy", rota: ["Monday", "Tuesday", "Friday", "Wednesday"] },
             { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
             { name: "Emily", rota: ["Thursday", "Tuesday", "Friday"] },
             { name: "Danny", rota: ["Monday", "Friday","Saturday","Thursday"] },
             { name: "Wendy", rota: ["Monday", "Thursday","Saturday", "Wednesday"] }]
             expect(areWeCovered(staff,"Monday")).toBe(true);
             expect(areWeCovered(staff,"Sunday")).toBe(false);
             expect(areWeCovered(staff,"Friday")).toBe(true);
    });

});


