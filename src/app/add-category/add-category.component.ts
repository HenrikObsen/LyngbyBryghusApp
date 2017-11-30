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
  databasen = 'http://beerservice.henrikobsen.dk/api/Category/test/';  
  
  
  //@ViewChild('f') myForm: NgForm;
  data;
  Name='';
  Sortering='';  
  submitted = false;
  extractData;
  handleErrorObservable;
  test;

  onSubmit(data) {
    this.submitted = true;
    this.data = {
      ID:1,
      Name: 'some name',
      Sortering: 3      
    };

    this.Name = data;
    this.Sortering = this.data.Sortering;
   this.test = this.addCat(this.data);
}

  constructor(private http:Http) { }

  addCat(cat :Category) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
    
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.databasen, 'test', options)
    .subscribe();

      }
  

  ngOnInit() {
  }

}
