import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('rosine','tacha1','http:/www','tyth',234,new Date())).toBeTruthy();
  });
});
