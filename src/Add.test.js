const add = require("./Add");

test("add a to b",() =>
{
    const res = add(2,3);

    expect(res).toBe(5);
});