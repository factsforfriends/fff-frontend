import { Injectable } from '@angular/core';
import { Blog } from '../model/blog.model';
import blog_entries from '../../assets/data/blog.json';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogs: Blog[] = [];

  constructor() {
    this.blogs = blog_entries;
    this.blogs.forEach((blog) => {
      blog.parsed_date = new Date(blog.date)
    })
  }
  getBlogs() {
    return this.blogs;
  }
  getBlogById(id:number){
    return this.blogs.find(b => b.id == id);
  }
  getLatestBlogs(){
    return this.blogs.sort((a: Blog, b: Blog) => {
      return b.parsed_date.getTime() - a.parsed_date.getTime()
    }).slice(0,3)
  }
}
