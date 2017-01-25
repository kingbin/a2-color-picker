import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
//export class AppComponent  { name = 'Angular'; }
export class AppComponent {
  color: string
  name: string = 'Angular'

  constructor(){
    this.color = '#d81414'
    this.name = 'with ❤️ from 628 Productions!'
  }
}
