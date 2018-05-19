import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evaluation'
})
export class EvaluationPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 20){
      return "Needs Work!"
    } else if (value < 50) {
      return "A decent start!"
    } else if (value < 100) {
      return "Doing good!"
    } else {
      return "Github Elite!"
    }
  }

}
