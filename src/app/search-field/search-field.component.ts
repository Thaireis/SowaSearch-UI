import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css'],
})
export class SearchFieldComponent {
  constructor(private router: Router, private filterService: FilterService) {}

  message1: string = '';
  message2: string = '';
  message3: string = '';
  message4: string = '';
  message5: number = 0;

  ngOnInit() {
    this.filterService.currentMessage1.subscribe(
      (message1) => (this.message1 = message1)
    );
    this.filterService.currentMessage2.subscribe(
      (message2) => (this.message2 = message2)
    );
    this.filterService.currentMessage3.subscribe(
      (message3) => (this.message3 = message3)
    );
    this.filterService.currentMessage4.subscribe(
      (message4) => (this.message4 = message4)
    );
    this.filterService.currentMessage5.subscribe(
      (message5) => (this.message5 = message5)
    );
  }

  onSubmit(input: { userInput: string }) {
    this.router.navigate([
      '/search',
      {
        input: input.userInput,
        path: this.message1,
        name: this.message2,
        type: this.message3,
        depth: this.message5,
        ignore: this.message4,
      },
    ]);
  }
}
