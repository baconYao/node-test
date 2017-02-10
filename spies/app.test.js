const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {
  var dbs = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', dbs);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('BaconYao', 25);
    expect(spy).toHaveBeenCalledWith('BaconYao',25);
  });

  it('should call saveUser with user object', () => {
    var email = 'baconyao@gmail.com';
    var password = '123asd';

    app.handleSignup(email, password);
    expect(dbs.saveUser).toHaveBeenCalledWith({email, password});
  });
});
