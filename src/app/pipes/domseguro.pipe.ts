import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domseguro',
})
export class DomseguroPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return null;
  }
}
