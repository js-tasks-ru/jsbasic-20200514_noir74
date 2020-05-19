/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
    if (str === null || str === undefined || str === '') {
      return str
    } else if (str.length == 1) {
      return str.toUpperCase();
    } else {
      return str[0].toUpperCase() + str.slice(1)
    }
  }