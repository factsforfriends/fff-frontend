import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit, OnDestroy {
  fact
  subscription: Subscription
  recommendedSnacks: Array<any>

  constructor(private titleService: Title, private metaService: Meta, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => 
        this.dataService.getFact(params['id']).subscribe(
          fact => {
            this.fact = fact
            this.titleService.setTitle(this.fact.headline + ' | Facts for Friends')
            this.metaService.updateTag(
              { name: 'description', content: this.fact.headline }
            )
            this.dataService.getData(null, 3).subscribe(response => this.recommendedSnacks = response.facts)
          }
        )
    )
  }

  ngOnDestroy(): void {}

}
