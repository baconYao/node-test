const expect = require('expect');
const utils = require('./utils');

// 將以下任務分為一組
describe('Utils', () => {

  describe('#add', () => {
    // 設置檢查任務
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      // if(res !== 44) {
      //   throw new Error('Expected 44, but got ${res}.');
      // }
      expect(res).toBe(44).toBeA('number');     //設定res是否等於44，且型態為number

    });
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();       //let mocha know this is async function
    });
  });


  it('should square a number', () => {
    var res = utils.square(3);

    expect(res).toBe(9).toBeA('number');

  });

  it('should async square a number', (done) => {
    utils.asyncSquare(5, (res) => {
      expect(res).toBe(25).toBeA('number');
      done();
    });
  });
});


// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
  
//   // expect({name: 'BaconYao'}).toNotEqual({name: 'PeiYao'});
  
//   // expect([2,3,4]).toInclude(2);
//   // expect([2,3,4]).toExclude(1);
  
//   expect({
//     name: 'BaconYao',
//     age: 22,
//     location: 'Taiwan'
//   }).toInclude({
//     age: 23
//   })
// });


it('should set firstName and lastName', () => {
  var user = {location:'Taiwna', age: 25};
  var res = utils.setName(user, 'Bacon Yao');

  expect(res).toInclude({
    firstName: 'Bacon',
    lastName: 'Yao'
  });

});



