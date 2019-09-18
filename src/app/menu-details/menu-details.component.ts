import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit {

  menu;
  menuItem;
  citems;
  click = false;

  constructor(private service: ConfigService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMenuByName();
  }

  getMenuByName() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getMenuByName(id).subscribe((result: any) => {
      this.menu = result;
      console.log('menu', result);
      console.log('sub', result.items);
      console.log('abc', this.citems);
    });
  }
  childItems(x) {
    this.click = true;
    this.menuItem = x;
    console.log('menu item:', this.menuItem);
  }
  citem(childItem) {
    console.log('ccitem', childItem);
    this.citems = childItem;
  }

}
