import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, sName: string): any {
    if (sName === "") {
      return value;
    }
    else {
      console.log(value);
      console.log(sName);
      const busArray: any[] = [];
      for (let i = 0; i < value.length; i++) {

        const time: number = value[i].time;
        const ticketPrice: number = value[i].price;

        // tslint:disable-next-line:max-line-length
        if (time.toString().includes(sName.toLowerCase()) || ticketPrice.toString().includes(sName.toLowerCase())){
          busArray.push(value[i]);
        }
      }
      return busArray;
    }
  }

}
