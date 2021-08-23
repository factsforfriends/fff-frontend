import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { S3 } from '@aws-sdk/client-s3';

@Component({
  selector: 'app-share-menu',
  templateUrl: './share-menu.component.html',
  styleUrls: ['./share-menu.component.scss'],
})
export class ShareMenuComponent implements OnInit {
  // export class ShareMenuComponent implements OnInit {
  clipboard_copied: boolean = false;
  title: string = '';
  url: string;
  text: string;
  sharepic: string;
  image_url: string;
  id: string;
  isMobile: boolean;
  hasSharepic: boolean;
  image: HTMLElement;
  sharedataText: any;
  sharedataImage: any;
  navigator: any;
  iOS: boolean;

  current_selection: 'article' | 'sharepic' = 'article';

  constructor(
    public dialogRef: MatDialogRef<ShareMenuComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title;
    this.text = data.text;
    this.url = data.url;
    this.sharepic = data.sharepic;
    this.image_url = data.image_url;
    this.isMobile = data.isMobile;
    // this.isMobile = true;
    this.id = data.id;
    this.navigator = window.navigator
    this.sharedataText = {
      title: this.title,
      text: this.truncateChar(this.title + '\n' + this.text),
      url: 'https://factsforfriends.de/fact/' + this.id
    };
    this.sharedataImage = {
      title: this.title,
      text: this.truncateChar(this.title + '\n' + this.text),
      url: 'https://factsforfriends.de/fact/' + this.id
    };
  }

  ngOnInit(): void {
    if (this.sharepic === null || this.sharepic === '') {
      this.hasSharepic = false;
    } else {
      this.hasSharepic = true;
      const self = this;
      const s3 = new S3({
        region: 'eu-central-1',
        credentials: {
          accessKeyId: 'AKIA5KE74FK53QQR2MMB',
          secretAccessKey: '2nhi2x7LWWXqA9G0cV4VNvpxx8NVeGI4FBLxB6qn',
        },
      });
      var getParams = {
        Bucket: 'fff-sharepics', // your bucket name,
        // Todo: Get key from sharepic url 
        Key: this.id + '.png', // path to the object you're looking for
      };


      s3.getObject(getParams, function (err, data) {
        // Handle any error and exit
        if (err) {
          return err;
        }
        // No error happened
        // Convert Body from a Buffer to an object
        let chunks = [];
        let reader = data['Body'].getReader();
        reader.read().then(function processText({ done, value }) {
          if (done) {

            let blob = new Blob(chunks);
            let file = new File([blob], 'sharepic.png', { type: 'image/png' });
            let fileArray = [file];
            self.sharedataImage['files'] = fileArray
            console.log(self.sharedataImage);
            return;
          }
          chunks.push(value);
          return reader.read().then(processText);
        });
      });
      this.iOS = this.checkiOS()
      // this.iOS = true
    }
  }

  select(selection: 'article' | 'sharepic'): void {
    if (this.isMobile) {
      if (selection == 'article') {
        this.shareText();
      } else {
        this.share_image();
      }
    } else {
      this.current_selection = selection;
    }
  }

  truncateChar(text: string, limit: number = 280): string {
    if (!text || text.length <= limit) {
      return text;
    }

    let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
    let short_until = without_html.substring(0, limit).lastIndexOf(' ');
    return without_html.substring(0, short_until) + ' ...';
  }

  getFacebookUrl() {
    // https://stackoverflow.com/questions/20956229/has-facebook-sharer-php-changed-to-no-longer-accept-detailed-parameters
    return (
      'https://www.facebook.com/sharer/sharer.php?u=' +
      encodeURIComponent(this.url) +
      '&quote=' +
      encodeURIComponent(this.text)
    );
  }

  getWhatsAppUrl() {
    return (
      'https://api.whatsapp.com/send?text=' +
      encodeURIComponent(this.title + '\n' + this.text + '\n' + this.url)
    );
  }

  getLinkedInUrl() {
    // https://stackoverflow.com/questions/33426752/linkedin-share-post-url/61583095#61583095
    return (
      'https://www.linkedin.com/sharing/share-offsite/?url=' +
      encodeURIComponent(this.url)
    );
  }

  getTwitterUrl() {
    // truncates the text to 280 characters
    return (
      'https://twitter.com/intent/tweet?source=tweetbutton&text=' +
      encodeURIComponent(
        this.truncateChar(this.title + '\n' + this.text, 277 - this.url.length)
      ) +
      '&url=' +
      this.url
    );
  }

  getMailUrl() {
    return (
      'mailto:?body=' +
      encodeURIComponent(this.text + '\n') +
      this.url +
      '&subject=' +
      this.title
    );
  }

  getTelegramUrl() {
    return (
      'https://t.me/share/url?url=' +
      this.url +
      '&text=' +
      encodeURIComponent(this.title + '\n' + this.text)
    );
  }

  fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement('textarea');
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

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

    this.clipboard_copied = true;
  }

  close() {
    this.dialogRef.close();
  }

  share_image() {
    if (this.navigator.canShare && this.navigator.canShare({files: this.sharedataImage['files']})) {
      this.navigator
        .share(this.sharedataImage)
        .then(() => {
          console.log('Successful image share');
        })
        .catch((err) => {
          console.error('Unsuccessful share ' + err);
        });
    } else {
      console.log('System does not allow sharing');
    }
  }

  shareText() {
    console.log(this.sharedataText);
    
    if (this.navigator.share) {
      navigator
        .share(this.sharedataText)
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    }
    else{
      console.log("Cannot share text");     
    }
  }

  downloadSharepic(): void {
    let file = new File([this.sharedataImage['files'][0]], 'sharepic.png', { type: 'image/png' });
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(file);
    var tag = document.createElement('a');
    tag.href = imageUrl;
    tag.download = 'fff_sharepic';
    document.body.appendChild(tag);
    tag.click();
    document.body.removeChild(tag);
  }

  checkiOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }
  
}
