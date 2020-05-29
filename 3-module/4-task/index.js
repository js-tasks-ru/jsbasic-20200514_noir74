/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
    let returnValue = [];
    for (item of users)
      returnValue.push(item.name);
    return returnValue;
}