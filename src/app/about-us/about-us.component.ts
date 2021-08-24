import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  public whyFFFexpanded: boolean;
  public advantageFFFexpanded: boolean;
  public processesFFFexpanded: boolean;
  public teamFFFexpanded: boolean;
  public steigerExpanded: boolean;
  public holisticExpanded: boolean;
  public wvvExpanded: boolean;
  public darkModeActivated: boolean;
  public sendExpanded: boolean;
  public ptExpanded: boolean;
  constructor() {
    this.whyFFFexpanded = false;
    this.advantageFFFexpanded = false;
    this.processesFFFexpanded = false;
    this.teamFFFexpanded = false;
    this.steigerExpanded = false;
    this.holisticExpanded = false;
    this.wvvExpanded = false;
    this.darkModeActivated = false;
    this.sendExpanded = false;
    this.ptExpanded = false;
   }

  ngOnInit(): void { }
  expand_collapse(section: string): void{
    // Track the click
    let paq = window["_paq"];
    if (section === 'whyfff'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Warum Facts for Friends']);
      this.whyFFFexpanded = !this.whyFFFexpanded;
      return;
    }
    if (section === 'fffAdvantage'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Die Vorteile von Facts for Friends']);
      this.advantageFFFexpanded = !this.advantageFFFexpanded;
      return;
    }
    if (section === 'fffProcesses'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Unsere Arbeit und Prozesse']);
      this.processesFFFexpanded = !this.processesFFFexpanded;
      return;
    }
    if (section === 'fffTeam'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Wer steckt hinter Facts for Friends']);
      this.teamFFFexpanded = !this.teamFFFexpanded;
      return;
    }
    if (section === 'steiger'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Steiger Stiftung']);
      this.steigerExpanded = !this.steigerExpanded;
      return;
    }
    if (section === 'holistic'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Holistic Foundation']);
      this.holisticExpanded = !this.holisticExpanded;
      return;
    }
    if (section === 'wvv'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Wir vs. Virus']);
      this.wvvExpanded = !this.wvvExpanded;
      return;
    }
    if (section === 'send'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Send e.V.']);
      this.sendExpanded = !this.sendExpanded;
      return;
    }
    if (section === 'pt'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Project Together']);
      this.ptExpanded = !this.ptExpanded;
      return;
    }
  }

}
