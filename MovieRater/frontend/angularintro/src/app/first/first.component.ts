import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  loginForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  reqLogin = () => {
    console.log(this.loginForm.value);
    ;
  }

}
