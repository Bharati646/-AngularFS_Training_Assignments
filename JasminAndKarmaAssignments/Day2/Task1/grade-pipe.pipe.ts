import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'GradePipePipe',
})
export class GradePipePipe implements PipeTransform {
  transform(input: number): string {
    let output: string = '';

    if (input == 1) output = 'Outstanding';
    if (input == 2) output = 'Excellent';
    if (input == 3) output = 'Good';
    if (input == 4) output = 'Average';
    if (input == 5) output = 'Poor';

    return output;
  }
}
