import { Component, Input, OnInit } from '@angular/core';
import { Fact } from '../model/fact.model';
import { Blog } from '../model/blog.model';

@Component({
  selector: 'app-featured-content',
  templateUrl: './featured-content.component.html',
  styleUrls: ['./featured-content.component.scss'],
})
export class FeaturedContentComponent implements OnInit {
  @Input() showTitle = true;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() set facts(facts: Array<Fact>) {
    if (facts) {
      facts.forEach((fact) => {
        this.content.push({
          link: '/fact/' + fact.id,
          image_url: fact.image_url,
          title: fact.title,
          titleFormatted: fact.titleFormatted,
          date: fact.date,
          categories: fact.category.split(','),
        });
      });
    }
  }
  @Input() set blogs(blogs: Array<Blog>) {
    if (blogs) {
      console.log(blogs);
      
      blogs.forEach((blog) => {
        this.content.push({
          link: '/blog/' + blog.id,
          image_url: blog.image_link,
          title: blog.title,
          titleFormatted: blog.title,
          date: blog.date,
          author: blog.author
        });
      });
    }
  }
  content: Array<any> = [];
  constructor() {}

  ngOnInit(): void { }
}
