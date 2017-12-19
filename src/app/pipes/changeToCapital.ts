import { Pipe, PipeTransform } from '@angular/core';
/*
 * Capitalize the first letter of the string
 * Takes a string as a value.
*/
@Pipe({
    name: 'chgChar'
})
export class ChangeChar implements PipeTransform {
    transform(value: string): string {
        if (value === null) {
            return 'Not asssigned';
        }
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
 }
