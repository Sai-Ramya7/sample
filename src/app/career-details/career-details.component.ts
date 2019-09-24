import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
  styleUrls: ['./career-details.component.scss']
})
export class CareerDetailsComponent implements OnInit {

  careerDetails: any;

  constructor(private service: ConfigService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCareerById();
  }
  getCareerById() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getCareerById(id).subscribe((result: any) => {
      this.careerDetails = result;
      console.log('careerDetails:', this.careerDetails);
    });
  }

}
