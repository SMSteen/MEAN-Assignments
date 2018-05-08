import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'importanceLevel'})
export class ImportanceLevelPipe implements PipeTransform {
  transform(value: boolean): string{
    return (value ? 'High' : 'Low');
  }
}
