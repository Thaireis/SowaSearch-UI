import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  headers: any;
  input: any;
  hitAmount: any;
  paths: any;
  text: any;
  linkFile: any;

  filterURL: any;
  filterPath: any;
  filterName: any;
  filterType: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    this.linkFile = 'file:///';

    this.filterURL = 'http://localhost:8081/inputs/filter?post=';
  }

  ngOnInit() {
    this.input = this.route.snapshot.params['userInput'];
    this.filterPath = 'D:/DATA/Lucene_test';
    this.filterName = 'test2';
    this.filterType = '.txt';
    console.log(this.input);
    console.log(
      'Filter: \n' +
        this.filterPath +
        ' | ' +
        this.filterName +
        ' | ' +
        this.filterType
    );

    this.http
      .get(
        'http://localhost:8081/inputs/filter/int?post=' +
          this.input +
          '&filterPath=D:/DATA/Lucene_test&filterName=test2&filterType=.txt'
      )
      .subscribe((data) => {
        console.log(data);
        this.hitAmount = data;
      });

    this.http
      .get(
        'http://localhost:8081/inputs/filter/paths?post=' +
          this.input +
          '&filterPath=D:/DATA/Lucene_test&filterName=test2&filterType=.txt'
      )
      .subscribe((data) => {
        console.log(data);
        this.paths = data;
      });

    this.http
      .get(
        'http://localhost:8081/inputs/filter/result?post=' +
          this.input +
          '&filterPath=D:/DATA/Lucene_test&filterName=test2&filterType=.txt',
        {
          responseType: 'text',
        }
      )
      .subscribe((data) => {
        console.log(data);
        this.text = data;
      });
  }
}
