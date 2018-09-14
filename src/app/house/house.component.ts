import { Component, OnInit } from '@angular/core';
// importing route related code
import { ActivatedRoute, Router } from "@angular/router";
//importing Httpservice
import { GotHttpServiceService } from '../got-http-service.service';


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  public allHouses;
  constructor(private _route: ActivatedRoute, public GotHttp: GotHttpServiceService) { }

  ngOnInit() {

    //calling the function to get all houses
    this.allHouses = this.GotHttp.getAllHouses().subscribe(

      data => {
        console.log(data);
        this.allHouses = data;
        console.log(this.allHouses);
        console.log(this.allHouses.length);
        console.log(this.allHouses[0]);

        this.allHouses.sort(function(a,b){
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
    console.log(this.allHouses);
  }

}
