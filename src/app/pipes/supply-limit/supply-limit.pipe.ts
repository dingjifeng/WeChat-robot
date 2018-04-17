import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'supplyLimit'
})
export class SupplyLimitPipe implements PipeTransform {


  transform(value: any, d?: Date): any {
    let day = d.getDay();
    day = day === 0 ? 7 : day;
    let start = value[day].startedAt,
      end = value[day].endedAt,
      current = d.getHours() * 60 + d.getMinutes(),
      s = start.split(':')[0] * 60 + (+start.split(':')[1]),
      e = end.split(':')[0] * 60 + (+end.split(':')[1]);
    return current >= s && current <= e;
  }

}
