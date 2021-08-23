import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Meta } from '@angular/platform-browser';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private metaTagService: Meta){}
  title = 'factsforfriends';
  
  ngOnInit() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    this.metaTagService.addTags([
      { name: 'description', content: 'Willkommen bei der Fact-Checking Revolution - Kämpfe einfach, schnell und bequem gegen Fake News auf Sozialen Netzwerken' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Facts for Friends' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' }
    ]);
  }
}
