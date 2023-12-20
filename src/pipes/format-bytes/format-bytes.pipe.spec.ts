import { FormatBytesPipe } from './format-bytes.pipe';

describe('FormatBytesPipe', () => {
  let pipe: FormatBytesPipe;

  beforeEach(() => {
    pipe = new FormatBytesPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform bytes to formatted string', () => {
    expect(pipe.transform(0)).toEqual('0 b');
    expect(pipe.transform(1024)).toEqual('1 Kb');
    expect(pipe.transform(2048, 1)).toEqual('2 Kb');
    expect(pipe.transform(1048576)).toEqual('1 Mb');
    expect(pipe.transform(1073741824)).toEqual('1 Gb');
    expect(pipe.transform(1099511627776)).toEqual('1 Tb');
  });

  it('should return null for null or undefined input', () => {
    expect(pipe.transform(null)).toBeNull();
    expect(pipe.transform(undefined)).toBeNull();
  });

  it('should handle negative decimals', () => {
    expect(pipe.transform(1024, -1)).toEqual('1 Kb');
    expect(pipe.transform(1048576, -2)).toEqual('1 Mb');
  });
});
