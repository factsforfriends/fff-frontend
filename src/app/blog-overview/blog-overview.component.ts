import { Component, OnInit } from '@angular/core';
// import blog_entries from '../../assets/data/blog.json';
import {BlogService}  from '../services/blog-service.service'
@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss']
})
export class BlogOverviewComponent implements OnInit {
  blogEntries: any;
  constructor(private service: BlogService) { 
    this.blogEntries = service.getBlogs()
  }

  ngOnInit(): void { }

}
