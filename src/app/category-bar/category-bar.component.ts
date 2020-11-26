import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.scss']
})
export class CategoryBarComponent implements OnInit {
  selectedCategory = ""

  constructor(private titleService: Title, private analyticsService: AnalyticsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      queryParams => {
        this.selectedCategory = queryParams.get("c")
      }
    )
  }

  selectCategory(category): void {
    const queryParams: Params = { c: category };

    // track click / change of categories
    this.analyticsService.eventEmitter('select_content', 'CategoryBar', queryParams.c)

    this.router.navigate(
      [], {
        relativeTo: this.route,
        queryParams: queryParams, 
        queryParamsHandling: 'merge'
      });

      if (category != '') {
        this.titleService.setTitle(category + ' | Facts for Friends')
      } else {
        this.titleService.setTitle('Facts for Friends')
      }
  }

}
