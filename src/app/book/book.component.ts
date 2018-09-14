import { Component, OnInit } from '@angular/core';
// importing route related code
import { ActivatedRoute, Router } from "@angular/router";

//importing Httpservice
import { GotHttpServiceService } from '../got-http-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  public allBooks:any = [];
  constructor(private _route: ActivatedRoute, public GotHttp: GotHttpServiceService) { }

  ngOnInit() {

    console.log("Books component  onInit called");

    //calling the function to get all books
    this.allBooks = this.GotHttp.getAllBooks().subscribe(

      data => {
        this.allBooks = data;
        console.log(this.allBooks);
        console.log(this.allBooks.length);
        console.log(this.allBooks[0]);
     
     this.allBooks.sort(function(a,b){
      let na1=a.name.toLowerCase(), na2=b.name.toLowerCase()
      if(na1<na2)
      return -1
      if(na1>na2)
      return 1
      return 0

      })
    },
    
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }
}



