import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit, OnDestroy  {
  headline = "";
  id: number;
  data = []; 
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
    
       let databasen = 'http://beerservice.henrikobsen.dk/api/';   
       
     
           fetch(databasen + 'Beer/GetList/' + this.id)   
               .then( res => res.json() )   
               .then( respons => this.data = respons) 

          fetch(databasen+ 'Category/GetName/' + this.id)   
               .then( res => res.json() )   
               .then( respons => this.headline = respons) 
           
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
