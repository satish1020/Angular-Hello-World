import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloWorldComponent}  from './helloworldcomponent';

@NgModule({
    imports: [BrowserModule],
    declarations: [HelloWorldComponent],
    bootstrap: [HelloWorldComponent]
})
export class AppModule { }
