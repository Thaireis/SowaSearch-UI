import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private messageSource1 = new BehaviorSubject<string>('...');
  currentMessage1 = this.messageSource1.asObservable();

  private messageSource2 = new BehaviorSubject<string>('...');
  currentMessage2 = this.messageSource2.asObservable();

  private messageSource3 = new BehaviorSubject<string>('...');
  currentMessage3 = this.messageSource3.asObservable();

  constructor() {}

  changeMessage1(message1: string) {
    this.messageSource1.next(message1);
  }

  changeMessage2(message2: string) {
    this.messageSource2.next(message2);
  }

  changeMessage3(message3: string) {
    this.messageSource3.next(message3);
  }
}
