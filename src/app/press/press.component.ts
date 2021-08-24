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
    // Track the click
    let paq = window["_paq"];

    if (section === 'facts'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Die Fakten zu Facts for Friends']);
      this.factsExpanded = !this.factsExpanded;
      return;
    }
    if (section === 'vision'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Mission und Vision']);
      this.visionExpanded = !this.visionExpanded;
      return;
    }
    if (section === 'project'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Vom Projekt zum Startup']);
      this.projectExpanded = !this.projectExpanded;
      return;
    }
    if (section === 'founders'){
      paq.push(['trackEvent', 'Content box', 'Expand', 'Von Schulfreundinnen zum Gründer-Duo']);
      this.foundersExpanded = !this.foundersExpanded;
      return;
    }
  }

}
