import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../models/Category';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})

@Injectable()
export class AddCategoryComponent implements OnInit {
  databasen = 'http://beerservice.henrikobsen.dk/api/Category/AddCat/';  
  
  
  //@ViewChild('f') myForm: NgForm;
  data;
  Name='';
  Sortering='';  
  submitted = false;
  extractData: number;
  handleErrorObservable;
  test;

  onSubmit(cat) {    
    this.addCat(cat);
  }

  constructor(private http:Http) { }

  addCat(cat :Category) {
    //let headers = new Headers({ 'Content-Type': 'application/json' });   
    //let options = new RequestOptions({ headers: headers });
   //this.http.post(this.databasen, cat, options)
    //.subscribe();
    let headers = new Headers({ 'Authorization': 'TokenValue' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.databasen, cat, options)
    .subscribe( data => this.extractData = data["_body"],
      error => {
        console.log(JSON.stringify(error.json()));
    });
    }

  

  ngOnInit() {
  }

}
