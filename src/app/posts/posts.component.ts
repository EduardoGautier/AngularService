
import { Component, OnInit } from '@angular/core';
import {Observable,of } from 'rxjs';
import { Post } from '../posts';
import {PostsService} from '../posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;
  userId: number;


  constructor(private PostsService: PostsService) {
    this.posts$ = of([]);
    this.userId = 1;
  }

  ngOnInit(): void {
    //this.posts$ = this.PostsService.buscarTodosPosts()
    this.posts$ = this.PostsService.buscarPostPorUserId(this.userId)
  }
  getPosts(){
    this.posts$ = this.PostsService.buscarPostPorUserId(this.userId);
  }

}
