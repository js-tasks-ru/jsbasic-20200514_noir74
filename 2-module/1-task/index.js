/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
    let rezultValue = 0;
    for (key in salaries) {
        if (typeof (salaries[key]) == 'number')
            rezultValue += salaries[key];
    }
    return rezultValue;
}
