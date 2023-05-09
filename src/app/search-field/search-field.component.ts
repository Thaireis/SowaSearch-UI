import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css'],
})
export class SearchFieldComponent {
  inputs: any;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(input: { userInput: string }) {
    this.router.navigate(['/search', input]);
  }
}
