import { Component, OnInit, ViewChild, ElementRef, Input, SimpleChanges, ChangeDetectorRef } from '@angular/core';
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

  searchinputMobile: ElementRef
  @ViewChild('searchinputMobile') set content(content:ElementRef){
    if(content){
      this.searchinputMobile = content;
    }
  } 
  @ViewChild('backgroundOverlay') backgroundOverlay: ElementRef
  @Input() isOpen: boolean = false;
  
  suggestions = []
  searchterm = ""
  searchTimeout
  searchbarHasFocus: boolean = false
  selectedCategory = ""
  searchCount: number

  constructor(private dataService: DataService, private analytics: AnalyticsService, private route: ActivatedRoute, private router: Router, private cdRef:ChangeDetectorRef) { }

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

  ngOnChanges(changes: SimpleChanges) {
    if(changes['isOpen'].currentValue === true){
      setTimeout(() => this.focusSearchBar(),0)
    }
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
      (data: any) => {
        this.suggestions = data['facts']
        this.searchCount = data['hits_count']
      }
    )
    // this.dataService.getSearchCount(this.searchterm, this.selectedCategory).subscribe(
    //   (count: number) => this.searchCount = count
    // )
  }

  clear() {
    this.searchterm = ""
    if (this.searchinput){
      this.searchinput.nativeElement.value = ""
    }
    if (this.searchinputMobile){
      this.searchinputMobile.nativeElement.value = ""
    }    
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
    // const searchbar = this.searchbar.nativeElement
    // const overlay = this.backgroundOverlay.nativeElement
    // overlay.style.top = "-" + searchbar.getBoundingClientRect().top + "px"
    // overlay.style.left = "-" + searchbar.getBoundingClientRect().left + "px"
  }

  hideSuggestions(): void {
    this.searchbarHasFocus = false
    if(this.searchinput){
      this.searchinput.nativeElement.blur()
    }
    if(this.searchinputMobile){
      this.searchinputMobile.nativeElement.blur()
    }
  }

  focusSearchBar(): void{
    this.searchbarHasFocus = true
    this.cdRef.detectChanges()
    setTimeout( () => {
      this.searchinputMobile.nativeElement.focus()
    }, 0);
  }
}
