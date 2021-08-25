import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-policy-page',
  templateUrl: './privacy-policy-page.component.html',
  styleUrls: ['./privacy-policy-page.component.scss'],
})
export class PrivacyPolicyPageComponent implements OnInit {
  tracking: boolean;

  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Datenschutz | Facts for Friends');
  }

  ngOnInit(): void {
    this.tracking = true;
  }

  toggle_tracking() {
    this.tracking = !this.tracking;
    if (this.tracking) {
      let paq = window['_paq'];
      paq.push(['forgetUserOptOut']);
    } else {
      let paq = window['_paq'];
      paq.push(['optUserOut']);
    }
  }
}
