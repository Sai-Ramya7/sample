import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getAllPosts();
  }
  getAllPosts() {
    this.service.getAllPosts().subscribe((result: any) => {
      this.posts = result;
      console.log(this.posts);
    });
  }

}
