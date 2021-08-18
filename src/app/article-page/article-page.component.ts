import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
})
export class ArticlePageComponent implements OnInit, OnDestroy {
  fact;
  subscription: Subscription;
  recommendedSnacks: Array<any>;
  factcheckingOrganisation: string = 'Quelle';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.dataService.getFact(params['id']).subscribe((fact) => {
        this.fact = fact;
        this.titleService.setTitle(this.fact.title + ' | Facts for Friends');
        this.metaService.updateTag({
          name: 'description',
          content: this.fact.title,
        });
        this.metaService.updateTag({
          property: 'og:title',
          content: this.fact.title,
        });
        this.metaService.updateTag({
          property: 'og:description',
          content: this.fact.title,
        });
        this.metaService.updateTag({
          property: 'og:url',
          content: this.fact.url,
        });
        // Try to get recommended snacks
        this.dataService.getRecommendations(fact.id).subscribe(
          (response) => {
            this.recommendedSnacks = response;
          },
          (_error) => {
            // Fallback, if recommended snacks can't be loaded
            this.dataService.getFeaturedSnacks().subscribe((response) => {
              this.recommendedSnacks = response.facts;
            })
          }
        );
      });
    });
  }

  ngOnDestroy(): void {}
}
