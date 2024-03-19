import { DefaultValuePipe } from './default-value.pipe';

describe('DefaultValuePipe', () => {
  let pipe: DefaultValuePipe<any, any>;

  beforeEach(() => {
    pipe = new DefaultValuePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return default value if input is null', () => {
    const result = pipe.transform(null, 'default');
    expect(result).toEqual('default');
  });

  it('should return default value if input is undefined', () => {
    const result = pipe.transform(undefined, 'default');
    expect(result).toEqual('default');
  });

  it('should return input value if it is not null or undefined', () => {
    const result = pipe.transform('value', 'default');
    expect(result).toEqual('value');
  });

  it('should return input value if it is a falsy value other than null or undefined', () => {
    const result = pipe.transform(0, 'default');
    expect(result).toEqual(0);
  });

  it('should return input value if it is a truthy value other than null or undefined', () => {
    const result = pipe.transform(true, 'default');
    expect(result).toEqual(true);
  });

  it('should return default value if input is null and default value is undefined', () => {
    const result = pipe.transform(null, undefined);
    expect(result).toEqual(undefined);
  });

  it('should return default value if input is undefined and default value is null', () => {
    const result = pipe.transform(undefined, null);
    expect(result).toEqual(null);
  });

  it('should return undefined if input and default value are undefined', () => {
    const result = pipe.transform(undefined, undefined);
    expect(result).toEqual(undefined);
  });

  it('should return null if input and default value are null', () => {
    const result = pipe.transform(null, null);
    expect(result).toEqual(null);
  });
});
