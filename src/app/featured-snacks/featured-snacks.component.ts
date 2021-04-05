import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-snacks',
  templateUrl: './featured-snacks.component.html',
  styleUrls: ['./featured-snacks.component.scss']
})
export class FeaturedSnacksComponent implements OnInit {
  @Input() title: string;
  @Input() set facts(facts: Array<any>) {
    facts ? this.cards = facts.slice(0, 3) : false
  }
  cards: Array<any> = undefined

  constructor() { }

  ngOnInit(): void {
  }

}
