//import {bootstrap} from 'angular2/platform/browser';
//import {AppComponent} from './app.component';

//bootstrap(AppComponent);

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

