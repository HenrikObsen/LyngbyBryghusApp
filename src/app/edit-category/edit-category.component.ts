import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  data = []; 
  constructor() {}
  
  loadList()  {
    let databasen = 'http://beerservice.henrikobsen.dk/api/Category/GetAll';     
             fetch(databasen)   
                 .then( res => res.json() )   
                 .then( respons => this.data = respons) 
  }
   ngOnInit(): void {
              this.loadList();    
  } 

        DeleteCat(id,index){
                   
          let databasen = 'http://beerservice.henrikobsen.dk/api/Category/DeleteCat/' + id; 
          
                fetch(databasen)   
                      .then( res => res.json() )     
                      
             document.getElementById(index).hidden = true;
         }         

}
