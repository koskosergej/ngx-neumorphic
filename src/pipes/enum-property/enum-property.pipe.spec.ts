import { EnumPropertyPipe } from './enum-property.pipe';

describe('EnumPropertyPipe', () => {
  let pipe: EnumPropertyPipe<any>;

  beforeEach(() => {
    pipe = new EnumPropertyPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return value for a valid property', () => {
    const map = {
      A: 'Value A',
      B: 'Value B',
      C: 'Value C'
    };
    const result = pipe.transform('A', map);
    expect(result).toEqual('Value A');
  });

  it('should return null for an invalid property', () => {
    const map = {
      A: 'Value A',
      B: 'Value B',
      C: 'Value C'
    };
    const result = pipe.transform('D', map);
    expect(result).toBeNull();
  });

  it('should return null if property is undefined', () => {
    const map = {
      A: 'Value A',
      B: 'Value B',
      C: 'Value C'
    };
    const result = pipe.transform(undefined, map);
    expect(result).toBeNull();
  });

  it('should return null if map is undefined', () => {
    const result = pipe.transform('A', undefined);
    expect(result).toBeNull();
  });

  it('should return null if property and map are undefined', () => {
    const result = pipe.transform(undefined, undefined);
    expect(result).toBeNull();
  });

  it('should return value for a valid property with complex types', () => {
    enum MyEnum {
      A = 'Value A',
      B = 'Value B',
      C = 'Value C'
    }

    const map = MyEnum;
    const result = pipe.transform('A', map);
    expect(result).toEqual('Value A');
  });
});
