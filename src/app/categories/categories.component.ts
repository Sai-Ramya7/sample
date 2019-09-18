import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  click = false;
  categories: any[];

  constructor(private service: ConfigService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.catposts();
  }

  getAllCategories() {
    this.click = true;
    this.service.getAllCategories().subscribe((result: any) => {
      console.log(result);
      this.categories = result;
    });
  }
  catposts() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('category id:', id);
    this.service.getPostByCategory(id).subscribe((posts: any) => {
      this.categories = posts;
      console.log(this.categories);
    });
  }

}
