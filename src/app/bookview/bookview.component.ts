import { Component, OnInit } from '@angular/core';
//route related code
import { ActivatedRoute, Router } from "@angular/router";
//importing HttpService
import { GotHttpServiceService } from '../got-http-service.service';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})
export class BookviewComponent implements OnInit {
  public currentBook: any;
  public bookUrl: any;
  public bookId: any;

  constructor(public _route: ActivatedRoute, public router: Router, public GotHttp: GotHttpServiceService) { }

  ngOnInit() {
    //getting book id from route
    this.bookUrl = this._route.snapshot.paramMap.get('bookId');
    console.log(this.bookUrl);

    this.bookId = this.bookUrl.length;
    this.bookId--;
    console.log(this.bookId);
    console.log(this.bookUrl[this.bookId]);
    this.bookId = this.bookUrl[this.bookId];

    if (this.bookId == 0) {
      this.bookId = 10;
      console.log(this.bookId);
    }
    // Calling the function to get bookinformation
    this.GotHttp.getBookInfo(this.bookId).subscribe(
      data => {
        this.currentBook = data;
        console.log(this.currentBook);
      },
      error => {
        alert(error.errorMessage);
      }
    )

  }
  // method to get id of character, book,house
  public getId = (url): string => {
    let pos = url.lastIndexOf('/');
    let id = url.substr(pos + 1);
    return id;
  };
}



