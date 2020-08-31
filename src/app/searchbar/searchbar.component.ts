import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @ViewChild('searchbar') searchbar: ElementRef
  @ViewChild('searchinput') searchinput: ElementRef
  @ViewChild('backgroundOverlay') backgroundOverlay: ElementRef
  suggestions = []
  searchterm = ""
  searchTimeout
  searchbarHasFocus: boolean = false
  selectedCategory = ""

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      queryParams => {
        if (this.selectedCategory != queryParams.get("c")) {
          this.selectedCategory = queryParams.get("c")
        }
      }
    )
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
    this.dataService.search(this.searchterm, this.selectedCategory, 3).subscribe(
      (data: Array<any>) => {
        this.suggestions = data
      }
    )
  }

  clear() {
    this.searchterm = ""
    this.searchinput.nativeElement.value = ""
    this.hideSuggestions()
  }

  onFocus(): void {
    this.searchbarHasFocus = true
    const searchbar = this.searchbar.nativeElement
    const overlay = this.backgroundOverlay.nativeElement
    overlay.style.top = "-" + searchbar.getBoundingClientRect().top + "px"
    overlay.style.left = "-" + searchbar.getBoundingClientRect().left + "px"
  }

  hideSuggestions(): void {
    this.searchbarHasFocus = false
  }
 
}
