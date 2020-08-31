import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.scss']
})
export class CategoryBarComponent implements OnInit {
  selectedCategory = ""

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      queryParams => {
        this.selectedCategory = queryParams.get("c")
      }
    )
  }

  selectCategory(category): void {
    const queryParams: Params = { c: category };

    this.router.navigate(
      [], {
        relativeTo: this.route,
        queryParams: queryParams, 
        queryParamsHandling: 'merge'
      });
  }

}
