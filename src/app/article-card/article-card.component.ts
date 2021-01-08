import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ShareMenuComponent } from '../share-menu/share-menu.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit, AfterViewInit {
  @ViewChild('textElement') textElement: ElementRef
  @Input() title: string;
  @Input() text: string;
  @Input() url: string;
  @Input() date: string;
  @Input() category: string;
  @Input() index: number;
  @Input() id: string;
  @Input() image_url: string;

  @Input() compact: boolean = false;

  isOverflown: boolean = false

  constructor(private matDialog: MatDialog, private analytics: AnalyticsService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    // set timeout to circumvent error: Expression has changed after it was checked
    setTimeout(() => {
      if (this.textElement)
      this.isOverflown = this.checkIfOverflown(this.textElement.nativeElement)
    }, 0)
  }

  truncateChar(text: string, limit: number = 280): string {
    if(!text || text.length <= limit )
    {
        return text;
    }

    let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
    let short_until = without_html.substring(0, limit).lastIndexOf(" ");
    return without_html.substring(0, short_until)+ " ..."; 
  }

  share(): void {
    if (navigator.share) {
      navigator.share({
          title: this.title,
          text: this.truncateChar(this.title + '\n' + this.text),
          url: 'https://factsforfriends.de/fact/' + this.id
        }).then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing:', error));
    } else {
      const dialogConfig = new MatDialogConfig();
      
      dialogConfig["data"] = {
        url: 'https://factsforfriends.de/fact/' + this.id,
        title: this.title,
        text: this.text
      }
      const dialogRef = this.matDialog.open(ShareMenuComponent, dialogConfig);
    }
  }

  checkIfOverflown(element): boolean {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth
  }

}
