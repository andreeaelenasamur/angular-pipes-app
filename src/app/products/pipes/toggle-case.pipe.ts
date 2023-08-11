import { Pipe, PipeTransform } from "@angular/core";

// andreea | toggleCase = 'ANDREEA'
// ANDREEA | toggleCase = 'andreea'


@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
