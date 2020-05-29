/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
    let returnValue = [];
    for (item of arr)
      if (parseInt(item) >= parseInt(a) && parseInt(item) <= parseInt(b)) 
      returnValue.push(item);
     return returnValue;
}
