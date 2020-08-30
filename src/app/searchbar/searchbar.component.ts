import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  suggestions = []
  searchterm = ""
  searchTimeout

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    
  }

  onKey(evt) {
    this.searchterm = evt.target.value

    clearTimeout(this.searchTimeout)
    this.searchTimeout = setTimeout(
      () => {
        this.triggerSearch()
      },
      500
    )
  }

  triggerSearch() {
    this.dataService.search(this.searchterm, 3).subscribe(
      (data: Array<any>) => {
        console.log(data)
        this.suggestions = data
      }
    )
  }

}
