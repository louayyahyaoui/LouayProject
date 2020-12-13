import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterChauffeur'
})
export class FilterChauffeurPipe implements PipeTransform {

  transform(value: any, sName: string): any {
    if (sName === "") {
      return value;
    }
    else {
      console.log(value);
      console.log(sName);
      const busArray: any[] = [];
      for (let i = 0; i < value.length; i++) {

        const nom: string = value[i].firstName;
        const prenom: string = value[i].lastName;
        const station: string = value[i].station;

        // tslint:disable-next-line:max-line-length
        if (nom.toString().toLowerCase().includes(sName.toLowerCase()) || prenom.toString().toLowerCase().includes(sName.toLowerCase())
        || station.toString().toLowerCase().includes(sName.toLowerCase())
        ){
          busArray.push(value[i]);
        }
      }
      return busArray;
    }
  }

}
