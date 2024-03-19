import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  let pipe: EllipsisPipe;

  beforeEach(() => {
    pipe = new EllipsisPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string for null value', () => {
    const result = pipe.transform(null, 10);
    expect(result).toEqual('');
  });

  it('should return empty string for undefined value', () => {
    const result = pipe.transform(undefined, 10);
    expect(result).toEqual('');
  });

  it('should return empty string for empty string value', () => {
    const result = pipe.transform('', 10);
    expect(result).toEqual('');
  });

  it('should return value unchanged if length is greater than string length', () => {
    const result = pipe.transform('hello', 10);
    expect(result).toEqual('hello');
  });

  it('should return truncated value with ellipsis suffix', () => {
    const result = pipe.transform(
      'This is a long sentence',
      10
    );
    expect(result).toEqual('This is a ...');
  });

  it('should return truncated value with custom suffix', () => {
    const result = pipe.transform(
      'This is a long sentence',
      10,
      '...'
    );
    expect(result).toEqual('This is a ...');
  });

  it('should return value unchanged if length is equal to string length', () => {
    const result = pipe.transform('hello', 5);
    expect(result).toEqual('hello');
  });

  it('should return empty string if length is zero', () => {
    const result = pipe.transform('hello', 0);
    expect(result).toEqual('');
  });

  it('should return empty string if length is negative', () => {
    const result = pipe.transform('hello', -5);
    expect(result).toEqual('');
  });
});
