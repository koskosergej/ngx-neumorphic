import { LastPipe } from './last.pipe';

describe('LastPipe', () => {
  let pipe: LastPipe<any>;

  beforeEach(() => {
    pipe = new LastPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return null if the list is null', () => {
    const result = pipe.transform(null);
    expect(result).toBeNull();
  });

  it('should return null if the list is undefined', () => {
    const result = pipe.transform(undefined);
    expect(result).toBeNull();
  });

  it('should return null if the list is an empty array', () => {
    const result = pipe.transform([]);
    expect(result).toBeNull();
  });

  it('should return the last element if the list has elements', () => {
    const list = [1, 2, 3];
    const result = pipe.transform(list);
    expect(result).toEqual(3);
  });

  it('should return the last element if the list has a single element', () => {
    const list = [5];
    const result = pipe.transform(list);
    expect(result).toEqual(5);
  });

  it('should return null if the list has null as its last element', () => {
    const list = [1, 2, null];
    const result = pipe.transform(list);
    expect(result).toBeNull();
  });

  it('should return null if the list has undefined as its last element', () => {
    const list = [1, 2, undefined];
    const result = pipe.transform(list);
    expect(result).toBeNull();
  });

  it('should return null if the list is not an array', () => {
    const list = 'not an array';
    const result = pipe.transform(list as any);
    expect(result).toBeNull();
  });

  it('should return the last element if the list contains falsy values', () => {
    const list = [0, '', false, null, undefined, 1, 2, 3];
    const result = pipe.transform(list);
    expect(result).toEqual(3);
  });
});
