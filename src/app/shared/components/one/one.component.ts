import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../../models/post';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  @Input() getPost !: any

  person = {
    fname : 'Jhon',
    lname : 'Doe',
    age : 40
  }

}
