// test uit de les

function add(number1, number2) {
    console.log("INPUT", number1, number2);
    const sum = number1 + number2;
    console.log("SUM", sum);
    return sum
}

test("add() function should return the sum of 2 numbers", () => {
    console.log("Hallo")
    // ARRANGE
    const number1 = 4;
    const number2 = 5;

    // ACT
    const sum = add(number1, number2);

    // ASSERT
    expect(sum).toBe(9);
})

