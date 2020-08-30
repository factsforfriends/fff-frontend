import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input() title;
  @Input() text;
  @Input() url;
  @Input() date;
  @Input() category;
  @Input() index;

  constructor() { }

  ngOnInit(): void {
  }

  share(): void {
    // if mobile
    // => trigger native share menu

    // else
    // => open modal for desktop use
  }

}
