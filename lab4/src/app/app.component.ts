import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:"./app.component.html" 
})
export class AppComponent {
  numberArray: string="";
  numbersBetweenMinMax: number[]=[];

  findMinMax() {
    const numbers = this.numberArray.split(',').map(Number);
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const minIndex = numbers.indexOf(min);
    const maxIndex = numbers.indexOf(max);
  
    if (minIndex < maxIndex) {
      this.numbersBetweenMinMax = numbers.slice(minIndex + 1, maxIndex);
    } else {
      this.numbersBetweenMinMax = numbers.slice(maxIndex + 1, minIndex);
    }
  }
  
}
