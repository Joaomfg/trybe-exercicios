// 7
const uppercase = require('./script.js');

it('upppercase "test" to equal "TEST"', (done) => {
    uppercase('test', (str) => {
        try{
            expect(str).toBe('TEST');
            done();
        } catch (error) {
            done(error);
        }
        })
})

// 9 