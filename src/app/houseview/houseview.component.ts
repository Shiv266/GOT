import { Component, OnInit } from '@angular/core';
//route related code
import { ActivatedRoute, Router } from "@angular/router";
//importing HttpService
import { GotHttpServiceService } from '../got-http-service.service';

@Component({
  selector: 'app-houseview',
  templateUrl: './houseview.component.html',
  styleUrls: ['./houseview.component.css']
})
export class HouseviewComponent implements OnInit {

  public currentHouse;
  public houseId: any;
  public houseUrl: any;
  constructor(public _route: ActivatedRoute, public router: Router, public GotHttp: GotHttpServiceService) { }

  ngOnInit() {
    //getting house id from route
    this.houseUrl = this._route.snapshot.paramMap.get('houseId');
    console.log(this.houseUrl);
    this.houseId = this.houseUrl.length;
    this.houseId--;
    console.log(this.houseId);
    console.log(this.houseUrl[this.houseId]);
    this.houseId = this.houseUrl[this.houseId];

    if (this.houseId == 0) {
      this.houseId = 10;
      console.log(this.houseId);
    }
    // Calling the function to get houseinformation
    this.GotHttp.getHouseInfo(this.houseId).subscribe(
      data => {
        this.currentHouse = data;
        console.log(this.currentHouse);
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
