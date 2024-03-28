import { SplitPipe } from './split.pipe';

describe('SplitPipe', () => {
  let pipe: SplitPipe;

  beforeEach(() => {
    pipe = new SplitPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return null if the value is null', () => {
    const result = pipe.transform(null);
    expect(result).toBeNull();
  });

  it('should return null if the value is undefined', () => {
    const result = pipe.transform(undefined);
    expect(result).toBeNull();
  });

  it('should return null if the splitter is null', () => {
    const result = pipe.transform('test', null);
    expect(result).toBeNull();
  });

  it('should return null if the value and splitter are null', () => {
    const result = pipe.transform(null, null);
    expect(result).toBeNull();
  });

  it('should return null if the value is empty', () => {
    const result = pipe.transform('', /,/);
    expect(result).toBeNull();
  });

  it('should return null if the value is empty and splitter is not provided', () => {
    const result = pipe.transform('', undefined);
    expect(result).toBeNull();
  });

  it('should return null if the splitter is not provided', () => {
    const result = pipe.transform('test', undefined);
    expect(result).toBeNull();
  });

  it('should split the value based on the provided splitter', () => {
    const result = pipe.transform('hello,world', /,/);
    expect(result).toEqual(['hello', 'world']);
  });

  it('should split the value based on the provided regular expression', () => {
    const result = pipe.transform('hello,world', /o/);
    expect(result).toEqual(['hell', ',w', 'rld']);
  });

  it('should split the value based on the provided string', () => {
    const result = pipe.transform('hello world', ' ');
    expect(result).toEqual(['hello', 'world']);
  });

  it('should split the value based on the provided string containing multiple characters', () => {
    const result = pipe.transform('hello--world', '--');
    expect(result).toEqual(['hello', 'world']);
  });

  it('should split the value based on the provided string containing special characters', () => {
    const result = pipe.transform('hello!@world', '!@');
    expect(result).toEqual(['hello', 'world']);
  });
});
