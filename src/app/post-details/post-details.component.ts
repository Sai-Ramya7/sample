import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  postDetails: any;

  constructor(private service: ConfigService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPostDetails();
  }

  getPostDetails() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('post Id:', id);
    this.service.getPostById(id).subscribe((result: any) => {
      this.postDetails = result;
      console.log('post-details:', this.postDetails);
    });
  }
}
