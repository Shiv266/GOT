import { Component, OnInit } from '@angular/core';

//route related code
import { ActivatedRoute, Router } from "@angular/router";

//importing HttpService
import { GotHttpServiceService } from '../got-http-service.service';


@Component({
  selector: 'app-characterview',
  templateUrl: './characterview.component.html',
  styleUrls: ['./characterview.component.css']
})
export class CharacterviewComponent implements OnInit {
  public characterUrl: any;
  public characterId: any;
  public currentCharacter;
  constructor(public _route: ActivatedRoute, public router: Router, public GotHttp: GotHttpServiceService) { }

  ngOnInit() {
    //getting character id from route
    this.characterUrl = this._route.snapshot.paramMap.get('characterId');
    console.log(this.characterUrl);
    this.characterId = this.characterUrl.length;
    this.characterId--;
    console.log(this.characterId);
    console.log(this.characterUrl[this.characterId]);
    this.characterId = this.characterUrl[this.characterId];

    if (this.characterId == 0) {
      this.characterId = 10;
      console.log(this.characterId);
    }
    // Calling the function to get characterinformation
    this.GotHttp.getCharacterInfo(this.characterId).subscribe(
      data => {
        this.currentCharacter = data;
        console.log(this.currentCharacter);
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
  }; //end

}
