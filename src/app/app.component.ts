import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./css/font-awesome.min.css']
})
export class AppComponent {
  title = 'Bryghus';
  data = []; 
  
  loadedFeature = 'recipe';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  
   
   constructor() {}
  
   ngOnInit(): void {
    let databasen = 'http://beerservice.henrikobsen.dk/api/Category/GetAll'; 
 
          fetch(databasen)   
              .then( res => res.json() )   
              .then( respons => this.data = respons)           
    
        } 
   
  toggleMenu(event) {  
    
  }
}

