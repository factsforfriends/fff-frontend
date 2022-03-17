import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Blog } from '../model/blog.model';
import { Fact } from '../model/fact.model';
import { BlogService } from '../services/blog-service.service';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss'],
})
export class BlogArticleComponent implements OnInit {
  selectedBlog: Blog;
  blog_id: number;
  recommendedSnacks: Array<Fact>;
  constructor(private blogService: BlogService, private route: ActivatedRoute, private dataService:DataService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {      
      this.selectedBlog = this.blogService.getBlogById(params['id']);
    });
    this.dataService.getData(null,3).subscribe((response) => { this.recommendedSnacks = response.facts})
  }
}
