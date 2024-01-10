/* eslint-disable @typescript-eslint/no-explicit-any */

import { Observable, race, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface CacheOptions {
  ttl: number;
}

/**
 * This decorator assumes that the function being decorated returns an Observable
 * and that the same arguments will produce the same result within the specified TTL
 *
 * @typescript
 * class ExampleService {
 *   @Cache({ ttl: 5000 }) // Caching for 5 seconds
 *   fetchData(id: number): Observable<any> {
 *     return someAsyncFunctionReturningObservable(id);
 *   }
 * }
 *
 */
export function Cache(options: CacheOptions) {
  const cacheMap: Map<
    string,
    ReplaySubject<any>
  > = new Map();

  return (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const originalFunction = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const key = `${propertyKey}_${args.toString()}`;

      if (!cacheMap.has(key)) {
        cacheMap.set(
          key,
          new ReplaySubject<any>(1, options.ttl)
        );
      }

      const cachedSubject = cacheMap.get(
        key
      ) as ReplaySubject<any>;

      const req: Observable<any> = originalFunction
        .apply(this, args)
        .pipe(
          tap(
            (response) => {
              cachedSubject.next(response);
            },
            (error) => {
              // Forward errors to the ReplaySubject
              cachedSubject.error(error);
            }
          )
        );

      return race(cachedSubject, req);
    };

    return descriptor;
  };
}
