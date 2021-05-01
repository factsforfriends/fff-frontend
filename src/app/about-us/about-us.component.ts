import { Component, OnInit } from '@angular/core';
import { faGlassWhiskey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  public whyFFFexpanded;
  public advantageFFFexpanded;
  public processesFFFexpanded;
  public teamFFFexpanded;
  constructor() {
    this.whyFFFexpanded = false;
    this.advantageFFFexpanded = false;
    this.processesFFFexpanded = false;
    this.teamFFFexpanded = false;
   }

  ngOnInit(): void {
  }
  expand_collapse(section: string){
    if(section === "whyfff"){
      this.whyFFFexpanded = !this.whyFFFexpanded;
      return;
    }
    if(section === "fffAdvantage"){
      this.advantageFFFexpanded = !this.advantageFFFexpanded;
      return;
    }
    if(section === "fffProcesses"){
      this.processesFFFexpanded = !this.processesFFFexpanded;
      return;
    }
    if(section === "fffTeam"){
      this.teamFFFexpanded = !this.teamFFFexpanded;
      return;
    }
  }

}
