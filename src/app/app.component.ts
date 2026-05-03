import { Component } from '@angular/core';
import { Ipost } from './shared/models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'I Love Angular';

  person = {
    fname : 'Jhon',
    lname : 'Doe',
    age : 40
  }

  postobj: Ipost = {
    "userId": 1,
    "id": 1,
    "title": "sunt reprehenderit",
    "body": "quia et suscipit\nsusci molestiae uest autem sunt rem eveniet  tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores nequearchitecto"
  }
}
