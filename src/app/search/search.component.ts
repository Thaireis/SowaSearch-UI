import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  inputs: any;
  input: any;
  headers: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
  }

  ngOnInit() {
    this.input = this.route.snapshot.params['userInput'];
    console.log(this.input);

    this.http
      .get('http://localhost:8081/inputs?post=' + this.input, {
        responseType: 'text',
      })
      .subscribe((data) => {
        console.log(data);
        this.inputs = data;
      });
  }
}
