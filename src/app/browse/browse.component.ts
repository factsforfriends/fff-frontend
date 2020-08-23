import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  facts;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.facts = this.dataService.getData()
  }

}
