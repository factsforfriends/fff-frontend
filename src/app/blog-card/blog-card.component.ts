import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../model/blog.model';
import { BlogService } from '../services/blog-service.service';
@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent implements OnInit {
  @Input() blog: Blog;
  @Input() detailedView = false;
  constructor(private service: BlogService, private router: Router) {}

  ngOnInit(): void {}

}
