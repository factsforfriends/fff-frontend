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
  // from https://medium.com/madhash/how-to-properly-add-google-analytics-tracking-to-your-angular-web-app-bc7750713c9e
  constructor(public router: Router, private metaTagService: Meta){   
    this.router.events.subscribe(event => {
       if(event instanceof NavigationEnd){
           gtag('config', 'G-57W7LJ8L20', 
                 {
                   'page_path': event.urlAfterRedirects
                 }
                );
        }
     }
  )}
  title = 'factsforfriends';
  
  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'description', content: 'Willkommen bei der Fact-Checking Revultion - Kämpfe einfach, schnell und bequem gegen Fake News auf Sozialen Netzwerken' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Facts for Friends' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' }
    ]);
  }
}
