import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../models/post';
import { postData } from '../consts/postData';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
  postArr : Ipost[] = []
  constructor() { }
  ngOnInit(): void {
    this.postArr = postData
  }

  trackByFun(index: number, post: Ipost){
    return post.id
  }

}
