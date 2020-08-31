import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe(
      async paramMap => {
        this.fact = await this.dataService.getFact(
          paramMap["params"]["id"]
        ).toPromise()
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
