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
    this.route.params.subscribe((params) =>
      this.dataService.getFact(params['id']).subscribe((fact) => {
        this.fact = fact;
        this.titleService.setTitle(this.fact.headline + ' | Facts for Friends');
        this.metaService.updateTag({
          name: 'description',
          content: this.fact.headline,
        });
        this.metaService.updateTag({
          property: 'og:title',
          content: this.fact.headline,
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
        if (this.fact.url.includes('correctiv')) {
          this.factcheckingOrganisation = 'Correctiv';
        }
        if (this.fact.url.includes('faktencheck.afp.com')) {
          this.factcheckingOrganisation = 'AFP Faktencheck';
        }
        if (this.fact.url.includes('logically.ai')) {
          this.factcheckingOrganisation = 'Logically';
        }
        if (this.fact.url.includes('fullfact.org')) {
          this.factcheckingOrganisation = 'Fullfact';
        }
        if (this.fact.url.includes('checkyourfact.com')) {
          this.factcheckingOrganisation = 'CheckYourFact';
        }

        this.formatText();
      })
    );
  }

  ngOnDestroy(): void {}

  formatText() {
    console.log(this.fact);
    if (this.fact.claim) {
      if (this.fact.claim.startsWith('Behauptung:')) {
        this.fact.claim = this.fact.claim.replace(
          'Behauptung:',
          '<b>Behauptung:</b>'
        );
      }
    }
    if (this.fact.snack.startsWith('Fakt:')) {
      this.fact.snack = this.fact.snack.replace('Fakt:', '<b>Fakt:</b>');
    }
    let keywords = ["Falsch:", "Richtig:", "Wahr:", "Irreführend:", "Widerlegt:", "Bestätigt:"];
    for(let kw of keywords){
      if(this.fact.headline.startsWith(kw)){
        this.fact.headline = this.fact.headline.replace(kw, '<b>'+kw+'</b>')
      }
    }
  }
}
