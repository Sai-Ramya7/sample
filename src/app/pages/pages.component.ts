import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  pages: any[];

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getAllPages();
  }

  getAllPages() {
    this.service.getAllPages().subscribe((result: any) => {
      this.pages = result;
      console.log(this.pages);
    });
  }

}
