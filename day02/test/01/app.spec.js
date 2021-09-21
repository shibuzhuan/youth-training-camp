const add = require("./add")

test('should 1+1 = 2',() =>{

    const a = 1;
    const b = 1;

    expect(add(a, b)).toBe(2);

});