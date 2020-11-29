import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-results-page',
  templateUrl: './no-results-page.component.html',
  styleUrls: ['./no-results-page.component.scss']
})
export class NoResultsPageComponent implements OnInit {
  @Input() searchterm: string;

  constructor() { }

  ngOnInit(): void {
  }

}
