import { Component } from '@angular/core';

@Component({
  selector: 'app-reverse',
  templateUrl: './reverse.component.html',
  styleUrls: ['./reverse.component.css']
})
export class ReverseComponent {
  title = 'Лабораторна робота 3';
  userInput: string = '';
  reversedWord: string = '';

  reverseWord() {
    this.reversedWord = this.userInput.split('').reverse().join('');
  }
}
