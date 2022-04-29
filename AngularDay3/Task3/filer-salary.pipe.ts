import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filerSalary',
  pure: true,
})
export class FilerSalaryPipe implements PipeTransform {
  transform(inputData: any[], min: number, max: number): any[] {
    return inputData.filter((item) => item.sal >= min && item.sal < max);
  }
}
