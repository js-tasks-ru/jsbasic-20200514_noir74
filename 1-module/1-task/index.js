/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    let factorialValue = 1;

    if (n > 2) {
        while (n > 0) factorialValue *= (n--);
    }
        
    return factorialValue;
}
