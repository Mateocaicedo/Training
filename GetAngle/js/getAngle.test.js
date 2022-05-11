
const getAngle = require('./getAngle');
test("adds 3 and 15 the angle is 7.5",()=>{
    const result = getAngle.GetAngle(12,15);
    expect(result).toBe(277.5);
})

