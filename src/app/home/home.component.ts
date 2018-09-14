import { Component, OnInit } from '@angular/core';
//importing route code
import { ActivatedRoute, Router } from "@angular/router";
//importing Httpservice
import { GotHttpServiceService } from '../got-http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allBooks = [];
  public allCharacters;
  public allHouses;
  constructor(private _route: ActivatedRoute, public GotHttp: GotHttpServiceService) { }

  ngOnInit() {

    console.log("Books component  onInit called");
    //calling all book function
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
    )//ends

    //calling all character function
    this.allCharacters = this.GotHttp.getAllCharacters().subscribe(

      data => {
        this.allCharacters = data;
        console.log(this.allCharacters);
        console.log(this.allCharacters.length);
        console.log(this.allCharacters[0]);

        this.allCharacters.sort(function(a,b){
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
    )//ends

    // calling all house function
    this.allHouses = this.GotHttp.getAllHouses().subscribe(

      data => {
        console.log(data);
        this.allHouses = data;
        console.log(this.allHouses);
        console.log(this.allHouses.length);
        console.log(this.allHouses[0]);
        
        //sorting
        this.allHouses.sort(function(a,b){
          let na1=a.name.toLowerCase(), na2=b.name.toLowerCase()
          if(na1<na2)//sort ascending
          return -1
          if(na1>na2)
          return 1
          return 0 //return no string 
    
          })
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
    console.log(this.allHouses);
  }
}