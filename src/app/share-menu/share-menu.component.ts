import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-share-menu',
  templateUrl: './share-menu.component.html',
  styleUrls: ['./share-menu.component.scss']
})
export class ShareMenuComponent implements OnInit {
  clipboard_copied: boolean = false
  title:string = ''
  url:string
  text:string

  constructor(
    private analytics: AnalyticsService,
    public dialogRef: MatDialogRef<ShareMenuComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
      this.title = data.title;
      this.text = data.text;
      this.url = data.url;
    }

  ngOnInit(): void {

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

  getFacebookUrl() {
    // https://stackoverflow.com/questions/20956229/has-facebook-sharer-php-changed-to-no-longer-accept-detailed-parameters
    return "https://www.facebook.com/sharer/sharer.php?u="+this.url+"&title="+this.title
  }

  getWhatsAppUrl() {
    return "https://api.whatsapp.com/send?text="+encodeURIComponent(this.truncateChar(this.title+"\n"+this.text)+"\n"+this.url)
  }

  getLinkedInUrl() {
    // https://stackoverflow.com/questions/33426752/linkedin-share-post-url/61583095#61583095
    return "https://www.linkedin.com/sharing/share-offsite/?url="+this.url
  }

  getTwitterUrl() {
    // truncates the text to 280 characters
    return "https://twitter.com/intent/tweet?source=tweetbutton&text="+encodeURIComponent(this.truncateChar(this.title+"\n"+this.text, 277-this.url.length))+"&url="+this.url
  }

  emitShareEvent(method) {
    this.analytics.eventEmitter('share', {method: method, content_type: 'FactSnack', content_id: this.url})
  }

  fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
  
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
  }
  
  copyTextToClipboard(text) {
    this.emitShareEvent('clipboard')
    if (!navigator.clipboard) {
      this.fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text);

    this.clipboard_copied = true
  }

  close() {
    this.dialogRef.close();
  }

}
