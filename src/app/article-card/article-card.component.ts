import { Component, OnInit, Input } from '@angular/core';
import { ShareMenuComponent } from '../share-menu/share-menu.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

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

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  share(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig["data"] = {
      url: this.url
    }
    const dialogRef = this.matDialog.open(ShareMenuComponent, dialogConfig);
  }

}
