import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  headers: any;
  input: any;
  hitAmount: any;
  paths: any;
  text: any;
  linkFile: any;

  filterPath: any;
  filterName: any;
  filterType: any;
  maxDepth: any;
  ignoreList: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.linkFile = 'file:///';
  }

  ngOnInit() {
    /*
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    */

    this.input = this.route.snapshot.params['input'];
    this.filterPath = this.route.snapshot.params['path'];
    this.filterName = this.route.snapshot.params['name'];
    this.filterType = this.route.snapshot.params['type'];
    this.maxDepth = this.route.snapshot.params['depth'];
    this.ignoreList = this.route.snapshot.params['ignore'];

    console.log(this.input);
    console.log(
      'Filter: \n' +
        this.filterPath +
        ' | ' +
        this.filterName +
        ' | ' +
        this.filterType +
        ' | ' +
        this.maxDepth +
        ' | ' +
        this.ignoreList
    );

    this.http
      .get(
        'http://localhost:8081/inputs/filter/int?post=' +
          this.input +
          '&filterPath=' +
          this.filterPath +
          '&filterName=' +
          this.filterName +
          '&filterType=' +
          this.filterType +
          '&maxDepth=' +
          this.maxDepth +
          '&ignoreList=' +
          this.ignoreList
      )
      .subscribe((data) => {
        console.log(data);
        this.hitAmount = data;
      });

    this.http
      .get(
        'http://localhost:8081/inputs/filter/paths?post=' +
          this.input +
          '&filterPath=' +
          this.filterPath +
          '&filterName=' +
          this.filterName +
          '&filterType=' +
          this.filterType +
          '&maxDepth=' +
          this.maxDepth +
          '&ignoreList=' +
          this.ignoreList
      )
      .subscribe((data) => {
        console.log(data);
        this.paths = data;
      });

    // this.http
    //   .get(
    //     'http://localhost:8081/inputs/filter/result?post=' +
    //       this.input +
    //       '&filterPath=' +
    //       this.filterPath +
    //       '&filterName=' +
    //       this.filterName +
    //       '&filterType=' +
    //       this.filterType +
    //       '&ignoreList=' +
    //       this.ignoreList,
    //     { responseType: 'text' }
    //   )
    //   .subscribe((data) => {
    //     console.log(data);
    //     this.text = data;
    //   });
  }
}
