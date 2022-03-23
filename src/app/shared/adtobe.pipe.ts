import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adtobe'
})
export class AdtobePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const monthName = [
      'มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน',
      'กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'
    ];
    const currentDate = new Date(value);
    return `วันที่ ${currentDate.getDate()}
            ${monthName[currentDate.getDate()]}
            ${currentDate.getFullYear() + 543}`;
  }
}
