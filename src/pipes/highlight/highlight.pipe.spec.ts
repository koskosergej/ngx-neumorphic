import { HighlightPipe } from './highlight.pipe';

describe('HighlightPipe', () => {
  let pipe: HighlightPipe;

  beforeEach(() => {
    pipe = new HighlightPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the original value if value is null', () => {
    const result = pipe.transform(null, 'search');
    expect(result).toBeNull();
  });

  it('should return the original value if searchTerm is null', () => {
    const result = pipe.transform('value', null);
    expect(result).toEqual('value');
  });

  it('should return the original value if value and searchTerm are null', () => {
    const result = pipe.transform(null, null);
    expect(result).toBeNull();
  });

  it('should return the original value if searchTerm is not found in value', () => {
    const result = pipe.transform('value', 'search');
    expect(result).toEqual('value');
  });

  it('should highlight the searchTerm in the value', () => {
    const result = pipe.transform(
      'this is a search string',
      'search'
    );
    expect(result).toEqual(
      'this is a <span class="highlighted">search</span> string'
    );
  });

  it('should highlight multiple occurrences of searchTerm in the value', () => {
    const result = pipe.transform(
      'search this search string search',
      'search'
    );
    expect(result).toEqual(
      '<span class="highlighted">search</span> this <span class="highlighted">search</span> string <span class="highlighted">search</span>'
    );
  });

  it('should not be case sensitive', () => {
    const result = pipe.transform(
      'This is a search string',
      'SEARCH'
    );
    expect(result).toEqual(
      'This is a <span class="highlighted">search</span> string'
    );
  });
});
