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
  constructor() {
    this.whyFFFexpanded = false;
    this.advantageFFFexpanded = false;
    this.processesFFFexpanded = false;
    this.teamFFFexpanded = false;
    this.steigerExpanded = false;
    this.holisticExpanded = false;
    this.wvvExpanded = false;
    this.darkModeActivated = false;
   }

  ngOnInit(): void { }
  expand_collapse(section: string): void{
    if (section === 'whyfff'){
      this.whyFFFexpanded = !this.whyFFFexpanded;
      return;
    }
    if (section === 'fffAdvantage'){
      this.advantageFFFexpanded = !this.advantageFFFexpanded;
      return;
    }
    if (section === 'fffProcesses'){
      this.processesFFFexpanded = !this.processesFFFexpanded;
      return;
    }
    if (section === 'fffTeam'){
      this.teamFFFexpanded = !this.teamFFFexpanded;
      return;
    }
    if (section === 'steiger'){
      this.steigerExpanded = !this.steigerExpanded;
      return;
    }
    if (section === 'holistic'){
      this.holisticExpanded = !this.holisticExpanded;
      return;
    }
    if (section === 'wvv'){
      this.wvvExpanded = !this.wvvExpanded;
      return;
    }
  }

}
