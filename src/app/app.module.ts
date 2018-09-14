import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// router module used for setting up the application level route
import { RouterModule, Routes } from '@angular/router';

// all component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HouseComponent } from './house/house.component';
import { HouseviewComponent } from './houseview/houseview.component';
import { CharacterComponent } from './character/character.component';
import { CharacterviewComponent } from './characterview/characterview.component';
import { BookComponent } from './book/book.component';
import { BookviewComponent } from './bookview/bookview.component';
import { NotfoundComponent } from './notfound/notfound.component';

// import statement for Httpservice
import { GotHttpServiceService } from './got-http-service.service';

// import statements for API 
import { HttpClientModule } from '@angular/common/http';


//decorators
@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    HouseviewComponent,
    CharacterComponent,
    CharacterviewComponent,
    BookComponent,
    BookviewComponent,
    NotfoundComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //routerModule forRoot method to declare the possible routes in application
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'book', component: BookComponent },
      { path: 'character', component: CharacterComponent },
      { path: 'house', component: HouseComponent },
      { path: 'bookview/:bookId', component: BookviewComponent },
      { path: 'characterview/:characterId', component: CharacterviewComponent },
      { path: 'houseview/:houseId', component: HouseviewComponent },
      { path: '**', component: NotfoundComponent }
    ])
  ],
  providers: [GotHttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
