import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @ViewChild('searchbar') searchbar: ElementRef
  @ViewChild('backgroundOverlay') backgroundOverlay: ElementRef
  suggestions = []
  searchterm = ""
  searchTimeout
  searchbarHasFocus: boolean = false

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
        this.suggestions = data
      }
    )
  }

  onFocus(): void {
    this.searchbarHasFocus = true
    const searchbar = this.searchbar.nativeElement
    const overlay = this.backgroundOverlay.nativeElement
    overlay.style.top = "-" + searchbar.getBoundingClientRect().top + "px"
    overlay.style.left = "-" + searchbar.getBoundingClientRect().left + "px"
  }

  onBlur(): void {
    this.searchbarHasFocus = false
  }
 
}
