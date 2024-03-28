import { JoinPipe } from './join.pipe';

describe('JoinPipe', () => {
  let pipe: JoinPipe<any>;

  beforeEach(() => {
    pipe = new JoinPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return null if the collection is null', () => {
    const result = pipe.transform(null);
    expect(result).toBeNull();
  });

  it('should return null if the collection is undefined', () => {
    const result = pipe.transform(undefined);
    expect(result).toBeNull();
  });

  it('should return null if the collection is an empty array', () => {
    const result = pipe.transform([], ',');
    expect(result).toBeNull();
  });

  it('should return string representation of the collection joined by default separator', () => {
    const collection = ['apple', 'banana', 'orange'];
    const result = pipe.transform(collection);
    expect(result).toEqual('apple,banana,orange');
  });

  it('should return string representation of the collection joined by the provided separator', () => {
    const collection = ['apple', 'banana', 'orange'];
    const separator = '-';
    const result = pipe.transform(collection, separator);
    expect(result).toEqual('apple-banana-orange');
  });

  it('should return string representation of the collection joined by empty separator', () => {
    const collection = ['apple', 'banana', 'orange'];
    const separator = '';
    const result = pipe.transform(collection, separator);
    expect(result).toEqual('applebananaorange');
  });

  it('should return string representation of the collection joined by default separator when separator is undefined', () => {
    const collection = ['apple', 'banana', 'orange'];
    const result = pipe.transform(collection, undefined);
    expect(result).toEqual('apple,banana,orange');
  });
});
