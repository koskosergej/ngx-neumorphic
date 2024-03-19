import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string if value is null', () => {
    const result = pipe.transform(null, 10);
    expect(result).toEqual('');
  });

  it('should return empty string if value is undefined', () => {
    const result = pipe.transform(undefined, 10);
    expect(result).toEqual('');
  });

  it('should return empty string if length is null', () => {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    const result = pipe.transform('Test Value', null);
    expect(result).toEqual('');
  });

  it('should return empty string if length is undefined', () => {
    const result = pipe.transform('Test Value', undefined);
    expect(result).toEqual('');
  });

  it('should return empty string if length is zero', () => {
    const result = pipe.transform('Test Value', 0);
    expect(result).toEqual('');
  });

  it('should return value if length is greater than value length', () => {
    const result = pipe.transform('Test Value', 20);
    expect(result).toEqual('Test Value');
  });

  it('should return truncated value if length is less than value length', () => {
    const result = pipe.transform('Test Value', 4);
    expect(result).toEqual('Test');
  });

  it('should return truncated value if length is equal to value length', () => {
    const result = pipe.transform('Test Value', 10);
    expect(result).toEqual('Test Value');
  });
});
