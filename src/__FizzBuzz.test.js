const {
    expect,
    test,
    describe
} = require('@jest/globals');
const fizzBuzz = require("./FizzBuzz");

//FizzBuzz powinien wypluc dla stosu liczb w ilosci x kolejne liczby 0 - 100
// , a w przypadku liczb podzielnych
// przez 3: Fizz,
// przez 5: Buzz,
// przez 3 i 5: FizzBuzz

describe('Zbior testow jednostkowych dla aplikacji fizzBuzz', function () {
    const fizzBuzz = require('./FizzBuzz');

    test('fizzBuzz dla range = 1 powinien zwrócić', () => {
        expect(fizzBuzz(1)).toEqual([1]);
    });

    test('fizzBuzz dla range = 3 powinien zwrócić [1, 2, Fizz]', () => {
        expect(fizzBuzz(3)).toEqual([1, 2 , 'Fizz']);
    });

    test('fizzBuzz dla range = 4 powinien zwrócić [1, 2, Fizz, 4)', () => {
        expect(fizzBuzz(4)).toEqual([1, 2, 'Fizz', 4]);
    });

    test('fizzBuzz dla range = 5 powinien zwrócić [1, 2 ,Fizz, 4, Buzz]', () => {
        expect(fizzBuzz(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
    })

    test('fizzBuzz dla range = 6 powinien zwrocic [1, 2, Fizz, 4, Buzz, Fizz]', () => {
        expect(fizzBuzz(6)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz']);
    })

    test('fizzBuzz dla range = 10 powinien zwrócić kolejne liczby a dla liczb podzielnych przez 3 (3,6,9) Fizz, dla podzielnych przez 5 (5, 10) Buzz', () => {
        expect(fizzBuzz(10)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']);
    })

    test('fizzBuzz dla range = 15 powinien zwrócić zwrócić kolejne liczby a dla liczb podzielnych przez 3 (3,6,9) Fizz, dla podzielnych przez 5 (5, 10) Buzz a dla 15 FizzBuzz', () => {
        expect(fizzBuzz(15)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
    })
});
