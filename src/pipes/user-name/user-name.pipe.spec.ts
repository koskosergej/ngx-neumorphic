import { UserNamePipe } from './user-name.pipe';

describe('UserNamePipe', () => {
  let pipe: UserNamePipe<any>;

  beforeEach(() => {
    pipe = new UserNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return null if user is null', () => {
    const result = pipe.transform(null);
    expect(result).toBeNull();
  });

  it('should return null if user is undefined', () => {
    const result = pipe.transform(undefined);
    expect(result).toBeNull();
  });

  it('should return null if firstName and lastName are both null', () => {
    const user = { firstName: null, lastName: null };
    const result = pipe.transform(user);
    expect(result).toEqual('');
  });

  it('should return null if firstName and lastName are both undefined', () => {
    const user = {
      firstName: undefined,
      lastName: undefined
    };
    const result = pipe.transform(user);
    expect(result).toEqual('');
  });

  it('should return the first name if lastName is null', () => {
    const user = { firstName: 'John', lastName: null };
    const result = pipe.transform(user);
    expect(result).toEqual('John');
  });

  it('should return the last name if firstName is null', () => {
    const user = { firstName: null, lastName: 'Doe' };
    const result = pipe.transform(user);
    expect(result).toEqual('Doe');
  });

  it('should return the full name if both firstName and lastName are provided', () => {
    const user = { firstName: 'John', lastName: 'Doe' };
    const result = pipe.transform(user);
    expect(result).toEqual('John Doe');
  });

  it('should return the full name without extra spaces if firstName and lastName contain spaces', () => {
    const user = {
      firstName: '  John ',
      lastName: '  Doe  '
    };
    const result = pipe.transform(user);
    expect(result).toEqual('John Doe');
  });

  it('should return the full name without extra spaces if firstName and lastName contain only spaces', () => {
    const user = { firstName: '   ', lastName: '   ' };
    const result = pipe.transform(user);
    expect(result).toEqual('');
  });
});
