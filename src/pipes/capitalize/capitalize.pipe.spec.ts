import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;

  beforeEach(() => {
    pipe = new CapitalizePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return an empty string if value is null', () => {
    const result = pipe.transform(null);
    expect(result).toEqual('');
  });

  it('should return an empty string if value is undefined', () => {
    const result = pipe.transform(undefined);
    expect(result).toEqual('');
  });

  it('should capitalize the first letter of a string', () => {
    const result = pipe.transform('hello');
    expect(result).toEqual('Hello');
  });

  it('should capitalize the first letter of a string with multiple words', () => {
    const result = pipe.transform('hello world');
    expect(result).toEqual('Hello world');
  });

  it('should capitalize the first letter of a string with leading and trailing spaces', () => {
    const result = pipe.transform('  hello world  ');
    expect(result).toEqual('  Hello world  ');
  });

  it('should handle an empty string', () => {
    const result = pipe.transform('');
    expect(result).toEqual('');
  });

  it('should handle a string with only one character', () => {
    const result = pipe.transform('a');
    expect(result).toEqual('A');
  });

  it('should handle a string with special characters', () => {
    const result = pipe.transform('!hello');
    expect(result).toEqual('!Hello');
  });
});
