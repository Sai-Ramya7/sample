import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  careers: any[];

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getAllCareers();
  }
  getAllCareers() {
    this.service.getcareers().subscribe((result: any) => {
      this.careers = result;
      console.log('careers:', this.careers);
    });
  }
}
