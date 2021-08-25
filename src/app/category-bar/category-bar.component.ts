import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.scss']
})
export class CategoryBarComponent implements OnInit {
  selectedCategory = ""

  constructor(private titleService: Title, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      queryParams => {
        this.selectedCategory = queryParams.get("c")
      }
    )
  }

  selectCategory(category): void {
    // Track the click
    let paq = window["_paq"];
    if (category != '') {
      paq.push(['trackEvent', 'Category Menu', 'Select category', 'Kategorie: ' + category]);
    } else {
      paq.push(['trackEvent', 'Category Menu', 'Select category', 'Kategorie: Alle']);
    }
    

    const queryParams: Params = { c: category };

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
