import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: any[];
  obj: any;

  constructor(private service: ConfigService,
              private router: Router) { }

  ngOnInit() {
    this.getMenu();
    // this.ind(i);
  }

  getMenu() {
    this.service.getMenuById().subscribe((result: any) => {
      console.log(result);
      this.menu = result.items;
      // if (result.items.object === 'page') {
      //   this.obj = 'pages';
      // }
      // if (result.items.object === 'post') {
      //   this.obj = 'posts';
      // }
      // if (result.items.object === 'category') {
      //   this.obj = 'categories';
      // }
      console.log('menu', this.menu);
    });
  }
  ind(i) {
    console.log(i);
    localStorage.setItem('index', i);
  }
  post(id) {
    this.router.navigateByUrl(`/post/${id}`);
  }

}
