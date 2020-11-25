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

  constructor(private titleService: Title, private metaService: Meta, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap['params']['id']
    this.dataService.getFact(id).subscribe(
      fact => {
        this.fact = fact
        this.titleService.setTitle(this.fact.headline + ' | Facts for Friends')
        this.metaService.updateTag(
          { name: 'description', content: this.fact.headline }
        )
      }
    )
  }

  ngOnDestroy(): void {}

}
