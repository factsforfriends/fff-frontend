import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-border-button',
  templateUrl: './border-button.component.html',
  styleUrls: ['./border-button.component.scss']
})
export class BorderButtonComponent implements OnInit {
  @Input() label: string = "Feedback geben";
  @Input() form: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
