/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  return (str.length <= maxlength) ? str : str.slice(0, maxlength - 1) + '…';
}

console.log(truncate('qqqqq', 3));
