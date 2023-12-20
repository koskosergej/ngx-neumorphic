import { MemoPipe } from './memo.pipe';

describe('MemoPipe', () => {
  let pipe: MemoPipe<any, any, any, any>;

  beforeEach(() => {
    pipe = new MemoPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should call handler with provided arguments and context', () => {
    const context = {
      multiplier: 2,
      add: function (value: number, ...args: number[]): number {
        return args.reduce((acc, curr) => acc + curr, value) * this.multiplier;
      }
    };

    const handlerSpy = jest.spyOn(context, 'add');

    const result = pipe.transform(5, context.add, context, 3, 4);

    expect(handlerSpy).toHaveBeenCalledWith(5, 3, 4);
    expect(result).toEqual(24); // (5 + 3 + 4) * 2 = 24
  });

  it('should call handler with provided arguments without context', () => {
    const handler = (value: string, ...args: string[]): string => {
      return value + args.join('');
    };

    const result = pipe.transform('Hello,', handler, null, ' ', 'World!');

    expect(result).toEqual('Hello, World!');
  });

  it('should return handler result when no context provided', () => {
    const handler = (value: number, ...args: number[]): number => {
      return args.reduce((acc, curr) => acc + curr, value);
    };

    const result = pipe.transform(1, handler, null, 2, 3, 4);

    expect(result).toEqual(10); // 1 + 2 + 3 + 4 = 10
  });
});
