/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    let returnValue = 1;
    if (n > 2)
        while (n > 0) returnValue *= (n--);
    return returnValue;
}
