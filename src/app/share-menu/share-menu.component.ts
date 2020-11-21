import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-share-menu',
  templateUrl: './share-menu.component.html',
  styleUrls: ['./share-menu.component.scss']
})
export class ShareMenuComponent implements OnInit {
  clipboard_copied: boolean = false
  title:string = ''
  url:string

  constructor(
    public dialogRef: MatDialogRef<ShareMenuComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
      this.title = data.title;
      this.url = 'https://factsforfriends.de/fact/' + data.id;
    }

  ngOnInit(): void {

  }

  getFacebookUrl() {
    // https://stackoverflow.com/questions/20956229/has-facebook-sharer-php-changed-to-no-longer-accept-detailed-parameters
    return "https://www.facebook.com/sharer/sharer.php?u="+this.url+"&title="+this.title
  }

  getWhatsAppUrl() {
    return "https://api.whatsapp.com/send?text="+this.title+" "+this.url
  }

  getLinkedInUrl() {
    // https://stackoverflow.com/questions/33426752/linkedin-share-post-url/61583095#61583095
    return "https://www.linkedin.com/sharing/share-offsite/?url="+this.url
  }

  getTwitterUrl() {
    return "https://twitter.com/intent/tweet?source=tweetbutton&text="+this.title+"&url="+this.url
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
