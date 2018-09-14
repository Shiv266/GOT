import { Component, OnInit } from '@angular/core';
// importing route related code
import { ActivatedRoute, Router } from "@angular/router";
//importing Httpservice
import { GotHttpServiceService } from '../got-http-service.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  public allCharacters;
  constructor(private _route: ActivatedRoute, public GotHttp: GotHttpServiceService) { }

  ngOnInit() {

    //calling the function to get all character
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
    )
  }

}

