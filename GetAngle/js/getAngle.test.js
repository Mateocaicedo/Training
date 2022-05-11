
const getAngle = require('./getAngle');
test("adds 3 and 15 the angle is 7.5",()=>{
    const result = getAngle.GetAngle(3,15);
    expect(result).toBe(7.5);
})

