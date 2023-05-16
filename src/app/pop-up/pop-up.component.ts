import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
})
export class PopUpComponent {
  closeResult = '';

  filterPath: any;
  filterName: any;
  filterType: any;

  message1: string = '';
  message2: string = '';
  message3: string = '';

  constructor(
    private modalService: NgbModal,
    private filterService: FilterService
  ) {}

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          console.log('closed with: saving');
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          console.log('closed with: canceling or pressing x');
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

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
  }

  setFilter(filter: {
    filterPath: String;
    filterName: String;
    filterType: String;
  }) {
    this.filterPath = filter.filterPath;
    this.filterName = filter.filterName;
    this.filterType = filter.filterType;
    console.log(
      this.filterPath + ' / ' + this.filterName + ' / ' + this.filterType
    );

    this.filterService.changeMessage1(this.filterPath);
    this.filterService.changeMessage2(this.filterName);
    this.filterService.changeMessage3(this.filterType);
  }
}
