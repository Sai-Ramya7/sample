import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  categoryDetails: any;

  constructor(private service: ConfigService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCategoryDetails();
  }

  getCategoryDetails() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getCategoryById(id).subscribe((result: any) => {
      this.categoryDetails = result;
      console.log('categoryDetails:', this.categoryDetails);
    });
  }

}
