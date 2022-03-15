import { Component, OnInit } from '@angular/core';
import blog_entries from '../../assets/data/blog.json';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss']
})
export class BlogOverviewComponent implements OnInit {
  BlogEntries: any = blog_entries;
  constructor() { }

  ngOnInit(): void {
    console.log(this.BlogEntries);
    
  }

}
