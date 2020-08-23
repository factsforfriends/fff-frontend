import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  suggestions;
  searchterm = "";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.suggestions = this.dataService.getSuggestions()
  }

  onKey(evt) {
    this.searchterm = evt.target.value
  }

}
