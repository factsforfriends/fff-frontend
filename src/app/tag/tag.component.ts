import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input() category: string;
  link: string

  constructor() { }

  ngOnInit(): void {
    this.link = '/?c=' + this.category;
  }

}
