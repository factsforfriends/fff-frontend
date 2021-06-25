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
  @Input() set facts(facts: Array<any>) {
    facts ? (this.cards = facts.slice(0, 3)) : false;
    // ToDo: Fix error 'Cannot read property 'length' of undefined' - Has no impact on functionality
    let keywords = [
      'Falsch:',
      'Richtig:',
      'Wahr:',
      'Irreführend:',
      'Widerlegt:',
      'Bestätigt:',
    ];

    for (let i = 0; i < this.cards.length; i++) {
      let card = this.cards[i];
      for (let kw of keywords) {
        if (card.title.startsWith(kw)) {
          card.title = card.title.replace(kw, '<b>' + kw + '</b>');
        }
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
