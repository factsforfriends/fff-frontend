import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ShareMenuComponent } from '../share-menu/share-menu.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit, AfterViewInit {
  @ViewChild('textElement') textElement: ElementRef
  @Input() title;
  @Input() text;
  @Input() url;
  @Input() date;
  @Input() category;
  @Input() index;
  @Input() id;

  @Input() compact: boolean = false;

  isOverflown: boolean = false

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.isOverflown = this.checkIfOverflown(this.textElement.nativeElement)
  }

  share(): void {
    if (navigator.share) {
      navigator.share({
          title: this.title,
          text: this.text,
          url: 'https://factsforfriends.de/snack/' + this.id
        }).then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing:', error));
    } else {
      const dialogConfig = new MatDialogConfig();
      dialogConfig["data"] = {
        url: this.url
      }
      const dialogRef = this.matDialog.open(ShareMenuComponent, dialogConfig);
    }
  }

  checkIfOverflown(element): boolean {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth
  }

}
