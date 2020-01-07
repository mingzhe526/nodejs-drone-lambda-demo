const {handler} = require('../index');
const { assert } = require('chai')

describe('event caculate tet', ()=> {

    it('handler', ()=> {

        const event = {
            "data": {

            }}
        let result = handler(event);
        if(isNaN(result.value)) {
            assert.Throw("not a number")
        }
        
    });
});







