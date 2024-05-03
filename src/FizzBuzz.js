/**
 * @param {number} range
 *
 * @return {number[]}
 */
function fizzBuzz(range) {
    const results = [];

    for (let index = 1; index <= range; index++) {
        if (index % 3 === 0 && index % 5 === 0) {
            results.push('FizzBuzz');

            continue;
        }

        if (index % 3 === 0) {
            results.push('Fizz');

            continue;
        }

        if (index % 5 === 0) {
            results.push('Buzz');

            continue;
        }

        results.push(index);
    }

    return results;
}

module.exports = fizzBuzz;
