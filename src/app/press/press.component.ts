import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent implements OnInit {
  public factsExpanded: boolean;
  public visionExpanded: boolean;
  public projectExpanded: boolean;
  public foundersExpanded: boolean;
  constructor() {
    this.factsExpanded = false;
    this.visionExpanded = false;
    this.projectExpanded = false;
    this.foundersExpanded = false;
  }

  ngOnInit(): void {
  }
  expand_collapse(section: string): void{
    if (section === 'facts'){
      this.factsExpanded = !this.factsExpanded;
      return;
    }
    if (section === 'vision'){
      this.visionExpanded = !this.visionExpanded;
      return;
    }
    if (section === 'project'){
      this.projectExpanded = !this.projectExpanded;
      return;
    }
    if (section === 'founders'){
      this.foundersExpanded = !this.foundersExpanded;
      return;
    }
  }

}
