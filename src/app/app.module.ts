import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';  
import { RouterModule, Routes } from '@angular/router';   
import { HomeComponent } from './home/home.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerListItemComponent } from './beer-list/beer-list-item/beer-list-item.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'beerlist/:id', component: BeerListComponent},  
  { path: '**', component: HomeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BeerListComponent,
    BeerListItemComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
