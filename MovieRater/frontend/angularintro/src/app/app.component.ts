import { Component, OnInit } from '@angular/core';

import { PeopleService } from "./people.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularintro';
  counter = 0;
  peoples = []
  cash = 10;
  constructor(private info: PeopleService) {}

  onClick = (evt) => {
    this.counter ++;
    
  }

  ngOnInit(){
    this.counter = 1;
    this.peoples = this.info.peoples;

    this.info.newObservable$.subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
} 
