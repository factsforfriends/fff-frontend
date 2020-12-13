import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

import { AnalyticsService } from '../analytics.service';

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
  searchCount: number

  constructor(private dataService: DataService, private analytics: AnalyticsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      queryParams => {
        const q = queryParams.get("q")
        const c = queryParams.get("c")
        this.searchterm = q
        this.selectedCategory = c

        if (q == "") {
          this.clear()
        }
      }
    )
  }

  onKey(evt) {
    if (evt.code === "Enter") {
      this.goToSearchResults()
    } else {
      this.searchterm = evt.target.value
      clearTimeout(this.searchTimeout)
      this.searchTimeout = setTimeout(
        () => {
          this.triggerSearch()
        },
        500
      )
    }

  }

  goToSearchResults() {
    this.analytics.eventEmitter('search', {'search_term': this.searchterm})
    this.router.navigate(
      ['/'], 
      {
        queryParams: {"q": this.searchterm}, 
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      })
    this.hideSuggestions()
  }

  triggerSearch() {
    this.dataService.search(this.searchterm, this.selectedCategory, 3).subscribe(
      (data: Array<any>) => {
        this.suggestions = data
      }
    )
    this.dataService.getSearchCount(this.searchterm, this.selectedCategory).subscribe(
      (count: number) => this.searchCount = count
    )
  }

  clear() {
    this.searchterm = ""
    this.searchinput.nativeElement.value = ""

    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: {"q": ""}, 
        queryParamsHandling: 'merge',
      })

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
    this.searchinput.nativeElement.blur()
  }
 
}
