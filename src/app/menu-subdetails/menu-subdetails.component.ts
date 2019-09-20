import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../config.service';
// import { isRootView } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-menu-subdetails',
  templateUrl: './menu-subdetails.component.html',
  styleUrls: ['./menu-subdetails.component.scss']
})
export class MenuSubdetailsComponent implements OnInit {

  // @Input('irow') ind: number;
  menu: any;
  ind = localStorage.getItem('index');

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getMenuById();
    console.log('index', this.ind);
  }

  getMenuById() {
    this.service.getMenuById().subscribe((result: any) => {
      this.menu = result.items[this.ind];
      console.log('sub menu:', this.menu);
    });
  }

}
