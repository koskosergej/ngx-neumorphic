import { FormatBytesPipe } from './format-bytes.pipe';

describe('formatBytes', () => {
  test.each([
    { value: 0, expected: '0' },
    { value: 10, expected: '10 b' },
    { value: 10000, expected: '9.77 Kb' }
  ])('', ({ value, expected }) => {
    const pipe = new FormatBytesPipe();
    expect(pipe.transform(value)).toEqual(expected);
  });
});
