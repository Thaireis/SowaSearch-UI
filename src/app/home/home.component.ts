import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  inputs: any;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(input: { userInput: string }) {
    //console.log(input);
    /*
    const headers = new HttpHeaders({ myHeader: 'SowaSearch' });
    this.http
      .post('http://localhost:8081/inputs/new?input=' + input, {
        headers: headers,
      })
      .subscribe((data) => {
        console.log(data);
      });
      */
    this.router.navigate(['/search', input]);
  }
}
