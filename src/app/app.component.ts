import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sowasearch';
  students: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    let response = this.http.get('http://localhost:8081/students');
    response.subscribe((data) => (this.students = data));
  }
}
