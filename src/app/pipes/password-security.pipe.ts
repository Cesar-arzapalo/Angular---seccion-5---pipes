import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordSecurity'
})
export class PasswordSecurityPipe implements PipeTransform {

  transform(value: string, flag: boolean = true): string {
    if (!flag){
      return value.split('').map(() => '*').join('');
    }else{
      return value;
    }
  }

}
