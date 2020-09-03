import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  facts;
  selectedCategory;
  searchterm;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      queryParams => {
        const q = queryParams.get("q")
        const c = queryParams.get("c")

        if (q != this.searchterm || c != this.selectedCategory) {
          this.searchterm = q
          this.selectedCategory = c
          this.fetch(q, c)
        }
      }
    )

    const q = this.route.snapshot.queryParamMap.get("q")
    const c = this.route.snapshot.queryParamMap.get("c")
    this.fetch(q, c)
  }

  fetch(q: string, c: string) {
    if (q) {
      this.facts = this.dataService.search(q, c)
    } else {
      this.facts = this.dataService.getData(c)
    }
  }

  clearSearch() {
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: {"q": ""}, 
        queryParamsHandling: 'merge',
      })
  }

}
