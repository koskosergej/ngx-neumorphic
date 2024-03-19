import { FirstPipe } from './first.pipe';

describe('FirstPipe', () => {
  let pipe: FirstPipe<any>;

  beforeEach(() => {
    pipe = new FirstPipe();
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

  it('should return the first element if the list has elements', () => {
    const list = [1, 2, 3];
    const result = pipe.transform(list);
    expect(result).toEqual(1);
  });

  it('should return the first element if the list has a single element', () => {
    const list = [5];
    const result = pipe.transform(list);
    expect(result).toEqual(5);
  });

  it('should return null if the list has null as its first element', () => {
    const list = [null, 1, 2];
    const result = pipe.transform(list);
    expect(result).toBeNull();
  });

  it('should return null if the list has undefined as its first element', () => {
    const list = [undefined, 1, 2];
    const result = pipe.transform(list);
    expect(result).toBeNull();
  });

  it('should return null if the list is not an array', () => {
    const list = 'not an array';
    const result = pipe.transform(list as any);
    expect(result).toBeNull();
  });

  it('should return the first element if the list contains falsy values', () => {
    const list = [null, undefined, 0, '', false, 1, 2, 3];
    const result = pipe.transform(list);
    expect(result).toBeNull();
  });
});
