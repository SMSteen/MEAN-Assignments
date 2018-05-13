import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'powerMessage'})
export class PowerMessagePipe implements PipeTransform {
    transform(value: number): string {
        if(value === 50000){
            return "The One";
        }
        if(value <= 9000){
            return;
        }
        return value > 20000 ? "Superlative!" : "Over 9000."
    }
}