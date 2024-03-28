import { UniquePipe } from './unique.pipe';

describe('UniquePipe', () => {
  let pipe: UniquePipe<any>;

  beforeEach(() => {
    pipe = new UniquePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return an empty array if the collection is null', () => {
    const result = pipe.transform(null);
    expect(result).toEqual([]);
  });

  it('should return an empty array if the collection is undefined', () => {
    const result = pipe.transform(undefined);
    expect(result).toEqual([]);
  });

  it('should return an empty array if the collection is empty', () => {
    const result = pipe.transform([]);
    expect(result).toEqual([]);
  });

  it('should return the same collection if no identifier is provided', () => {
    const collection = [1, 2, 3, 3, 2, 1];
    const result = pipe.transform(collection);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should return unique elements based on the provided identifier', () => {
    const collection = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 1, name: 'John' },
      { id: 3, name: 'Doe' },
      { id: 2, name: 'Jane' }
    ];
    const result = pipe.transform(collection, 'id');
    expect(result).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Doe' }
    ]);
  });
});
