import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cat = false;
  click = false;
  posts: any[];
  categories: any[];
  postTitle: any[];

  constructor(private service: ConfigService) { }

  ngOnInit() {
  }

  getAllPosts() {
    this.click = true;
    this.service.getAllPosts().subscribe((result: any) => {
      console.log(result);
      this.posts = result;
    });
  }
  getAllCategories() {
    this.service.getAllCategories().subscribe((res: any) => {
      console.log(res);
      this.categories = res;
    });
  }
  catposts(id) {
    // const name = +this.route.snapshot.paramMap.get('name');
    console.log('home', id);
    this.service.getPostByCategory(id).subscribe((posts: any) => {
      this.categories = posts;
    });
  }
}
