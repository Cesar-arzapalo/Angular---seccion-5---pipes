import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {
    return value.toLowerCase().split(' ').map((palabra, i) => {
      if (todas){
        return palabra[0].toUpperCase() + palabra.substr(1);
      }else{
        if (i === 0){
          return  palabra[0].toUpperCase() + palabra.substr(1);
        }else{
          return palabra;
        }
      }
    }).join(' ');
  }

}
