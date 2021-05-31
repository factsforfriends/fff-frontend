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
  factcheckingOrganisation: string = "Quelle";


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
            if(this.fact.url.includes('correctiv')){
              this.factcheckingOrganisation = "Correctiv";
            }
            if(this.fact.url.includes('faktencheck.afp.com')){
              this.factcheckingOrganisation = "AFP Faktencheck";
            }
            if(this.fact.url.includes('logically.ai')){
              this.factcheckingOrganisation = "Logically";
            }
            if(this.fact.url.includes('fullfact.org')){
              this.factcheckingOrganisation = "Fullfact";
            }
            if(this.fact.url.includes('checkyourfact.com')){
              this.factcheckingOrganisation = "CheckYourFact";
            }
          }
        )
    )
    
  }

  ngOnDestroy(): void {}

}
