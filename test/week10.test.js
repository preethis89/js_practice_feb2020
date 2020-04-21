const {
    sumDigits,
    createRange,
    hexToRGB,
    getScreenTimeAlertList
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
describe("getScreenTimeAlertList", () =>{
 test("return the username of users who exceeded 100 mins of Screen Time",() =>{
    const users =[
        {
         username: "beth_1234",
          name: "Beth Smith",
         screenTime: [
                       { date: "2019-06-01", usage: { twitter: 34, instagram: 32, facebook: 40} },
                       { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                       { date: "2019-06-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                        { date: "2019-06-04", usage: { twitter: 30, instagram: 56, facebook: 20} },
                       ]
          },
          {
          username: "sam_j_1989",
           name: "Sam Jones",
           screenTime: [
                        { date: "2019-06-11", usage: { mapMyRun: 34, whatsApp: 0, facebook: 0, safari: 10} },
                        { date: "2019-06-30", usage: { mapMyRun: 56, whatsApp: 30, facebook: 0, safari: 16} },
                        { date: "2019-06-14", usage: { mapMyRun: 78, whatsApp: 0, facebook: 0, safari: 31} },
                       ]
          },
          {
          username: "zaid_j_1989",
           name: "Zaid R",
           screenTime: [
                        { date: "2019-06-04", usage: { twitter: 5, whatsApp: 46, facebook: 40, safari: 10} },
                        { date: "2019-06-30", usage: { twitter: 10, whatsApp: 69, facebook: 20, safari: 16} },
                        { date: "2019-06-17", usage: { twitter: 0, whatsApp: 30, facebook: 0, safari: 31} },
                       ]
          },
        ]
        
        expect(getScreenTimeAlertList(users,"2019-06-30")).toEqual(["sam_j_1989","zaid_j_1989"]);
        expect(getScreenTimeAlertList(users,"2019-06-01")).toEqual(["beth_1234"]);
        expect(getScreenTimeAlertList(users,"2019-06-11")).toEqual([]);
        expect(getScreenTimeAlertList(users,"2019-06-04")).toEqual(["beth_1234","zaid_j_1989"]);
 });
});
