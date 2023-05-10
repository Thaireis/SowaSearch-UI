import { Component, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private modalService: NgbModal) {}

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
  }

  /*
  onSubmit(friend: { name: string; age: number }) {
    console.log(friend);
    const headers = new HttpHeaders({ myHeader: 'WebsiteTim' });
    this.http
      .post('http://localhost:8080/api/v1/friends/add/', friend, {
        headers: headers,
      })
      .subscribe((data) => {
        console.log(data);
      });
    this.router.navigateByUrl('/home');
  }
  */
}
