import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css'],
})
export class SearchFieldComponent {
  constructor(private router: Router) {}

  onSubmit(input: { userInput: string }) {
    //http://localhost:4200/search;userInput=arcana
    this.router.navigate(['/search', input]);
  }
}
