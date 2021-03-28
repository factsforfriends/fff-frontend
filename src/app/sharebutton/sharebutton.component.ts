import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ShareMenuComponent } from '../share-menu/share-menu.component';

@Component({
  selector: 'app-sharebutton',
  templateUrl: './sharebutton.component.html',
  styleUrls: ['./sharebutton.component.scss']
})
export class SharebuttonComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() url: string;
  @Input() date: string;
  @Input() category: string;
  @Input() index: number;
  @Input() id: string;
  @Input() image_url: string;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  share(): void {
    // if (navigator.share) {
    //   navigator.share({
    //       title: this.title,
    //       text: this.truncateChar(this.title + '\n' + this.text),
    //       url: 'https://factsforfriends.de/fact/' + this.id
    //     }).then(() => console.log('Successful share'))
    //     .catch(error => console.log('Error sharing:', error));
    // } else {
      const dialogConfig = new MatDialogConfig();
      
      dialogConfig["data"] = {
        url: 'https://factsforfriends.de/fact/' + this.id,
        title: this.title,
        text: this.text,
        sharepic: this.image_url
      }
      const dialogRef = this.matDialog.open(ShareMenuComponent, dialogConfig);
    // }
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

}
