import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss']
})
export class PageDetailsComponent implements OnInit {

  pageDetails: any;

  constructor(private route: ActivatedRoute,
              private service: ConfigService) { }

  ngOnInit() {
    this.getPageDetails();
  }

  getPageDetails() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getPageById(id).subscribe((result: any) => {
      this.pageDetails = result;
      console.log('pageDetails:', this.pageDetails);
    });
  }

}
