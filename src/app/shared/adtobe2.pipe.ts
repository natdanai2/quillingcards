import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adtobe2'
})
export class Adtobe2Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const monthName = [
      'มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน',
      'กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'
    ];
    const currentDate = new Date(value);
    return `${currentDate.getDate()}
            ${monthName[currentDate.getMonth()]}
            ${currentDate.getFullYear() + 543}
            `;
  }

}
