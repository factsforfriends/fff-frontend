import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

import { AnalyticsService } from '../analytics.service';
import { share } from 'rxjs/operators';

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
  sharepic:string
  id:string
  isMobile:boolean

  current_selection: "article" | "sharepic" = "article"

  constructor(
    private analytics: AnalyticsService,
    public dialogRef: MatDialogRef<ShareMenuComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) 
    {
      this.title = data.title;
      this.text = data.text;
      this.url = data.url;
      this.sharepic = data.sharepic;
      // this.sharepic = "http://localhost:4200/assets/logos/wir_vs_virus.png";
      this.isMobile = data.isMobile;
      // this.isMobile = true;
      this.id = data.id;
    }

  ngOnInit(): void {
  }

  select(selection: "article" | "sharepic"): void {
    if(this.isMobile){
      if(selection == "article"){
        this.shareText();
      }
      else{
        this.share_image();
      }
    }
    else{
      this.current_selection = selection
    }
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
    return "https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(this.url)+"&quote="+encodeURIComponent(this.text)
  }

  getWhatsAppUrl() {
    return "https://api.whatsapp.com/send?text="+encodeURIComponent(this.title+"\n"+this.text+"\n"+this.url)
  }

  getLinkedInUrl() {
    // https://stackoverflow.com/questions/33426752/linkedin-share-post-url/61583095#61583095   
    return "https://www.linkedin.com/sharing/share-offsite/?url="+encodeURIComponent(this.url)
  }

  getTwitterUrl() {
    // truncates the text to 280 characters
    return "https://twitter.com/intent/tweet?source=tweetbutton&text="+encodeURIComponent(this.truncateChar(this.title+"\n"+this.text, 277-this.url.length))+"&url="+this.url
  }

  getMailUrl() {
    return "mailto:?body="+encodeURIComponent(this.text+"\n")+this.url+"&subject="+this.title
  }

  getTelegramUrl(){
    return "https://t.me/share/url?url="+this.url+"&text="+encodeURIComponent(this.title+"\n"+this.text)
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

  share_image() {
    let navigator: any;
    navigator = window.navigator;
    fetch(this.sharepic)
      .then(function(response) {
        return response.blob()})
      .then(function(blob) {
        let file = new File([blob], "sharepic.jpg", { type: blob.type });
        let fileArray = [file];
        console.log(fileArray);
        let data = {              
          text: 'some_text',
          files: fileArray,
          title: 'some_title',
          url: 'some_url'
        }
        if (navigator.canShare && navigator.canShare({files: fileArray}))
        {        
          navigator
            .share(data)
            .then(() => {console.log('Successful image share')})
            .catch(err => {
              console.error("Unsuccessful share " + err);
            });
        }    
        else{
          console.log("Cannot share")
        }
    })
  }

  shareText(){
  if (navigator.share && this.isMobile) {
      navigator.share({
          title: this.title,
          text: this.truncateChar(this.title + '\n' + this.text),
          url: 'https://factsforfriends.de/fact/' + this.id
        }).then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing:', error));
    } 
  }

  downloadSharepic():void{
    // var link = document.createElement("a");
    // link.download = "fff_sharepic.jpg";
    // link.href = this.sharepic;
    // link.target = "_blank";
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    
    fetch(this.sharepic)
      .then(function(response) {
        return response.blob()})
      .then(function(blob) {
        let file = new File([blob], "sharepic.jpg", { type: blob.type });
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = "fff_sharepic";
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
      });
    }

    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", this.sharepic, true);
    // xhr.responseType = "blob";
    // xhr.onload = function(){
    //     var urlCreator = window.URL || window.webkitURL;
    //     var imageUrl = urlCreator.createObjectURL(this.response);
    //     var tag = document.createElement('a');
    //     tag.href = imageUrl;
    //     tag.download = "fff_sharepic";
    //     document.body.appendChild(tag);
    //     tag.click();
    //     document.body.removeChild(tag);
    // }
    // xhr.send();
  // }

}
