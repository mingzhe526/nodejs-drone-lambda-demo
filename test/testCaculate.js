const calculate = require('../model/calculate')

describe('calculate add test', ()=> {

    it('test 5+5 expect 10', ()=> {
      if (calculate.add(5, 5) !== 10) {
        throw new Error("add operation fail");
      }
    });
});
