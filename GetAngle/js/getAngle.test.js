
const getAngle = require('./getAngle');
describe("editar, elimnar y agregar",()=>{
    test("adds 3 and 15 the angle is 7.5",()=>{
        const result = getAngle.GetAngle(12,15);
        expect(Math.abs(result)).toBe(82.5);
    })
})




