
function add(number1, number2) {
    // console.log("INPUT", number1, number2);
    const sum = number1 + number2;
    // console.log("SUM", sum);
    return sum
}

function findByName(users, name){
    // console.log("INPUT:", users, name);
    // 1. om een naam te zoeken moeten we een loop maken. (zie for)
    // 2. if statement: is de name hetzelfde als de naam uit het object?
    // 3. Zo ja, return het object.
    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        // console.log("USER 1 voor 1?", user.name);
        if (user.name === name){
            // console.log("Gevonden?", user);
            return user;
        }
    }
    return null;
}

// Exporteren
module.exports = {
    add: add,
    findByName: findByName,
};