import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  menus: any[];

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getMenus();
  }

  getMenus() {
    this.service.getMenus().subscribe((result: any) => {
      this.menus = result;
      console.log(result);
    });
  }

}
