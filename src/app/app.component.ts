import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login, logout, toSave, toErase } from './auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  auth$: Observable<boolean>;
  myName: string="";
  displayData$: Observable<String>;
  constructor(private store: Store<{ auth: boolean, storedData:String }>) {
    this.auth$ = store.select('auth');
    this.displayData$ = store.select('storedData');
  }

  saveThisText(){
    this.store.dispatch(toSave({carryingData:this.myName}));
  }

  eraseThisText(){
    this.store.dispatch(toErase());
  }

  login() {
    this.store.dispatch(login());
  }

  logout() {
    this.store.dispatch(logout());
  }
}