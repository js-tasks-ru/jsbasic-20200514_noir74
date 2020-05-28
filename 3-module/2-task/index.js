/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(inputData) {    
    let a = inputData
        .split(',')
        .concat(inputData.split(' '))
        .map(item => parseFloat(item))
        .filter(item => !Number.isNaN(item))
        .sort((a, b) => (a > b ? 1 : a === b ? 0 : -1));

    return {
        min: a[0],
        max: a[a.length - 1]
    };
}

