import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../../models/post';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  @Input() getPost1 !: Ipost
  

}
