import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../model/blog.model';
import { BlogService } from '../services/blog-service.service';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss'],
})
export class BlogArticleComponent implements OnInit {
  selectedBlog: Blog;
  blog_id: number;
  constructor(private service: BlogService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {      
      this.selectedBlog = this.service.getBlogById(params['id']);
    });
  }
}
