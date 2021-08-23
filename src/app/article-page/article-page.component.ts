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
        console.log(this.fact);
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
        this.dataService
          .getData(null, 3)
          .subscribe((response) => (this.recommendedSnacks = response.facts));
      });
    });
}

  ngOnDestroy(): void {}

  // formatText() {
  //   console.log(this.fact);
  //   // if (this.fact.claim) {
  //   //   if (this.fact.claim.startsWith('Behauptung:')) {
  //   //     this.fact.claim = this.fact.claim.replace(
  //   //       'Behauptung:',
  //   //       '<b>Behauptung:</b>'
  //   //     );
  //   //   }
  //   // }
  //   // if (this.fact.snack.startsWith('Fakt:')) {
  //   //   this.fact.snack = this.fact.snack.replace('Fakt:', '<b>Fakt:</b>');
  //   // }
  //   let keywords = [
  //     'Falsch:',
  //     'Richtig:',
  //     'Wahr:',
  //     'Irreführend:',
  //     'Widerlegt:',
  //     'Bestätigt:',
  //   ];
  //   for (let kw of keywords) {
  //     if (this.fact.headline.startsWith(kw)) {
  //       this.fact.headline = this.fact.headline.replace(
  //         kw,
  //         '<b>' + kw + '</b>'
  //       );
  //     }
  //   }
  // }
}
