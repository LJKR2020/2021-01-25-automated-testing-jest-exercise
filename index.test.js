// testen uit de les

// Importeren
// const add = require('./index').add;
// const findByName = require('./index').findByName;
const { add, findByName } = require("./index");

test("add() function should return the sum of 2 numbers", () => {
    // console.log("Hallo")
    // ARRANGE
    const number1 = 4;
    const number2 = 5;

    // ACT
    const sum = add(number1, number2);

    // ASSERT
    expect(sum).toBe(9);
});


//
test("findByName() returns an object form an array with a specified name", () => {
    // ARRANGE
    const users = [
        { id: 1, name: "Rein" },
        { id: 2, name: "Nova" },
        { id: 3, name: "Loredana" },
    ];
    const userNameToFind = "Loredana";

    // ACT
    const user = findByName(users, userNameToFind);

    // ASSERT
    expect(user).toEqual({ id: 3, name: "Loredana" });
})

//Als je nu toEqual aanpast naar toBe dan passed de test niet. Dit omdat je een directe vergelijking maakt.
//En ze zijn niet precies hetzelfde. Het is allebei een user, maar niet hetzelfde.
//toBe is dit dezelfde pen, toEqual zijn deze pennen gelijk aan elkaar.



//Wat gebeurt er nou als je een naam zoekt die er niet tussen staat?
test("findByName should return null, if the element is not found", () => {
    // ARRANGE
    const users = [
        { id: 1, name: "Rein"},
        { id: 2, name: "Nova"},
        { id: 3, name: "Loredana"},
    ];
    const userNameToFind = "Jasper";

    // ACT
    const user = findByName(users, userNameToFind);

    // ASSERT
    expect(user).toBeNull();
});