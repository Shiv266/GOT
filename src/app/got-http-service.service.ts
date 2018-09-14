import { Injectable } from '@angular/core';

// importing http client to make the requests
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// import observable related code
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GotHttpServiceService {

  public allBooks;
  public allCharaters;
  public allHouses;

  //url of API
  public baseUrl1: string = 'https://anapioficeandfire.com/api/books';
  public baseUrl2: string = 'https://anapioficeandfire.com/api/characters';
  public baseUrl3: string = 'https://anapioficeandfire.com/api/houses';


  //Provided local variable in constructor
  constructor(private _http: HttpClient) {

  }

  // exception handler
  private handleError(err: HttpErrorResponse) {
    console.log('Handle error Http call');
    console.log(err.message);
    return Observable.throw(err.message)
  }

  //method to return AllBooks
  public getAllBooks(): any {
    let myBooks = this._http.get(this.baseUrl1);
    console.log(myBooks);
    return myBooks;
  }

  // method to return bookInformaton
  getBookInfo(bookId): any {
    console.log(bookId);
    let myResponse = this._http.get(this.baseUrl1 + '/' + bookId);
    return myResponse;
  }

  // method to return all character
  public getAllCharacters(): any {
    let myCharacters = this._http.get(this.baseUrl2);
    console.log(myCharacters);
    return myCharacters;
  }

  // method to return characterInformaton
  getCharacterInfo(characterId): any {
    console.log(characterId);
    let myResponse = this._http.get(this.baseUrl2 + '/' + characterId);
    return myResponse;
  }

  //method to return all houses
  public getAllHouses(): any {
    let myHouses = this._http.get(this.baseUrl3);
    console.log(myHouses);
    return myHouses;
  }

  // method to return houseInformaton
  getHouseInfo(houseId): any {
    console.log(houseId);
    let myResponse = this._http.get(this.baseUrl3 + '/' + houseId);
    return myResponse;
  }
}
