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
  }
  getBlogs() {
    return this.blogs;
  }
  getBlogById(id:number){
    return this.blogs.find(b => b.id == id);
  }
}
