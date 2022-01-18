import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value:number[], ...args: number[]): unknown {
    return value.sort();
  }

}
