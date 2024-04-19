import { IdToValuePipe } from './id-to-value.pipe';

describe('IdToValuePipe', () => {
  let pipe: IdToValuePipe<any>; // Adjust `any` to match the type of your dictionary

  beforeEach(() => {
    pipe = new IdToValuePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return null if dictionary is null', () => {
    const result = pipe.transform('id', null);
    expect(result).toBeNull();
  });

  it('should return null if id is null', () => {
    const dictionary = { id1: 'value1', id2: 'value2' };
    const result = pipe.transform(null, dictionary);
    expect(result).toBeNull();
  });

  it('should return null if id is not found in dictionary', () => {
    const dictionary = { id1: 'value1', id2: 'value2' };
    const result = pipe.transform('id3', dictionary);
    expect(result).toBeNull();
  });

  it('should return the corresponding value for the given id', () => {
    const dictionary = { id1: 'value1', id2: 'value2' };
    const result = pipe.transform('id1', dictionary);
    expect(result).toEqual('value1');
  });

  it('should handle numbers as keys', () => {
    const dictionary = { 1: 'value1', 2: 'value2' };
    const result = pipe.transform(1, dictionary);
    expect(result).toEqual('value1');
  });

  it('should handle special characters in keys', () => {
    const dictionary = { '@': 'value1', '#': 'value2' };
    const result = pipe.transform('@', dictionary);
    expect(result).toEqual('value1');
  });
});
