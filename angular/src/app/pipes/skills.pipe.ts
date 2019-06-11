import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skills'
})
export class SkillsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args && value)
    {
      return value.filter((value) =>{
        console.log(args);
        if (value.skill == args)
          return value;
      })
    }
    return value;
  }

}
