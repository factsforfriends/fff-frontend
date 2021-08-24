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
  public bpExpanded: boolean;
  public ph2Expanded: boolean;
  public codetektExpanded: boolean;
  constructor() {
    this.fakenewsExpanded = false;
    this.effectExpanded = false;
    this.conspiracyExpanded = false;
    this.weitklickExpanded = false;
    this.ndmExpanded = false;
    this.ftvExpanded = false;
    this.bpExpanded = false;
    this.ph2Expanded = false;
    this.codetektExpanded = false;
   }

  ngOnInit(): void {
  }
  expand_collapse(section: string): void{
    // Track the click
    let paq = window["_paq"];
    if (section === 'fakenews'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Was sind Desinformationen?']);
      this.fakenewsExpanded = !this.fakenewsExpanded;
      return;
    }
    if (section === 'effect'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Wieso sind Desinformation gerade jetzt ein großes Problem?']);
      this.effectExpanded = !this.effectExpanded;
      return;
    }
    if (section === 'conspiracy'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Wie sollte man mit Verschwörungen umgehen?']);
      this.conspiracyExpanded = !this.conspiracyExpanded;
      return;
    }
    if (section === 'weitklick'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Weitklick']);
      this.weitklickExpanded = !this.weitklickExpanded;
      return;
    }
    if (section === 'ndm'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'No Hate Speech Movement']);
      this.ndmExpanded = !this.ndmExpanded;
      return;
    }
    if (section === 'ftv'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Follow The Vote']);
      this.ftvExpanded = !this.ftvExpanded;
      return;
    }
    if (section === 'bp'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Betterplace Lab']);
      this.bpExpanded = !this.bpExpanded;
      return;
    }
    if (section === 'ph2'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Digital Democracy Alliance']);
      this.ph2Expanded = !this.ph2Expanded;
      return;
    }
    if (section === 'codetekt'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Codetekt']);
      this.codetektExpanded = !this.codetektExpanded;
      return;
    }
  }

}
