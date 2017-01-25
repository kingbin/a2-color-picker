import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CommonModule} from '@angular/common';

import { AppComponent }  from './app.component';
import { HighlightDirective } from './highlight.directive';

import {ColorPickerService} from './color-picker.service';
import {ColorPickerDirective} from './color-picker.directive';

@NgModule({
  imports:      [ BrowserModule, CommonModule ],
  providers: [ColorPickerService],
  declarations: [ AppComponent, HighlightDirective, ColorPickerDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
