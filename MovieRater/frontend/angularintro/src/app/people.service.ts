import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  newObservable$ = new Observable(
    observer => {
      observer.next('api data');
    }
  );
  
  peoples = ['Mohsin', 'Mukul', 'Sujon']
  constructor() { }

}
