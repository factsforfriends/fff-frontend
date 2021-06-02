import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ShareMenuComponent } from '../share-menu/share-menu.component';
import { DeviceDetectorService } from 'ngx-device-detector';

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

  isMobile:boolean = false; //initiate as false
  deviceInfo = null;

  constructor(private matDialog: MatDialog, private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.deviceInfo = this.deviceService.getDeviceInfo();
      const isMobile = this.deviceService.isMobile();
      const isTablet = this.deviceService.isTablet();
      const isDesktopDevice = this.deviceService.isDesktop();

  }

  share(): void {
    if (navigator.share && (this.deviceService.isMobile() || this.deviceService.isTablet())) {
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
        text: this.text,
        sharepic: this.image_url
      }
      const dialogRef = this.matDialog.open(ShareMenuComponent, dialogConfig);
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
}
