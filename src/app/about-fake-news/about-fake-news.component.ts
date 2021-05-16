import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-fake-news',
  templateUrl: './about-fake-news.component.html',
  styleUrls: ['./about-fake-news.component.scss']
})
export class AboutFakeNewsComponent implements OnInit {

  public fakenewsExpanded: boolean;
  public effectExpanded: boolean;
  public conspiracyExpanded: boolean;
  public weitklickExpanded: boolean;
  public ndmExpanded: boolean;
  public ftvExpanded: boolean;
  public ph1Expanded: boolean;
  public ph2Expanded: boolean;
  public codetektExpanded: boolean;
  constructor() {
    this.fakenewsExpanded = false;
    this.effectExpanded = false;
    this.conspiracyExpanded = false;
    this.weitklickExpanded = false;
    this.ndmExpanded = false;
    this.ftvExpanded = false;
    this.ph1Expanded = false;
    this.ph2Expanded = false;
    this.codetektExpanded = false;
   }

  ngOnInit(): void {
  }
  expand_collapse(section: string): void{
    if (section === 'fakenews'){
      this.fakenewsExpanded = !this.fakenewsExpanded;
      return;
    }
    if (section === 'effect'){
      this.effectExpanded = !this.effectExpanded;
      return;
    }
    if (section === 'conspiracy'){
      this.conspiracyExpanded = !this.conspiracyExpanded;
      return;
    }
    if (section === 'weitklick'){
      this.weitklickExpanded = !this.weitklickExpanded;
      return;
    }
    if (section === 'ndm'){
      this.ndmExpanded = !this.ndmExpanded;
      return;
    }
    if (section === 'ftv'){
      this.ftvExpanded = !this.ftvExpanded;
      return;
    }
    if (section === 'ph1'){
      this.ph1Expanded = !this.ph1Expanded;
      return;
    }
    if (section === 'ph2'){
      this.ph2Expanded = !this.ph2Expanded;
      return;
    }
    if (section === 'codetekt'){
      this.codetektExpanded = !this.codetektExpanded;
      return;
    }
  }

}
