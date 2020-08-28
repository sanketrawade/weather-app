import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celcius'
})
export class CelciusPipe implements PipeTransform {

  transform(value): any {
    const fer = ((value * 9 / 5) + 32 );
    return fer;
  }

}
