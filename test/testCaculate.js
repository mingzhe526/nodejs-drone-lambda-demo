const calculate = require('../model/calculate')

describe('calculate model test', ()=> {

    it('test add operation: 5+5 expect 10', ()=> {
      if (calculate.add(5, 5) !== 10) {
        throw new Error("add operation fail");
      }
    });
    it('test sub operation: 5-5 expect 0', ()=> {
      if (calculate.sub(5, 5) !== 0) {
        throw new Error("sub operation fail");
      }
    });
});
