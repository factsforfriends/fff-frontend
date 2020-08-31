import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  facts;
  selectedCategory;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      queryParams => {
        if (this.selectedCategory != queryParams.get("c")) {
          this.selectedCategory = queryParams.get("c")
          
          this.facts = this.dataService.getData(this.selectedCategory)
        }
      }
    )
  }

}
