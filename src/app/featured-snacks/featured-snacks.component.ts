import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-featured-snacks',
  templateUrl: './featured-snacks.component.html',
  styleUrls: ['./featured-snacks.component.scss'],
})
export class FeaturedSnacksComponent implements OnInit {
  cards: Array<any> = undefined;
  @Input() title: string;
  @Input() browse_page: boolean = false;
  @Input() set facts(facts: Array<any>) {
    if (facts){
      this.cards = facts.slice(0, 3)    
      for(let card of this.cards){
        card.categories = card.category.split(',')
        for(let c in card.categories){
          c = c.trim()
        }  
      }
    console.log(this.cards);
    }
    else{
      false;
    }
  }

  constructor() {}

  ngOnInit(): void {
    console.log(this.cards);
  }

  getTitle(): string {
    return this.title;
  }
}
