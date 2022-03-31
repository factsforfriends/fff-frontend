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
  @Input() sharepic_url: string;

  isMobile:boolean = false; //initiate as false
  deviceInfo = null;

  constructor(private matDialog: MatDialog, private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.deviceInfo = this.deviceService.getDeviceInfo();
  }

  share(){
    // Tracking of click
    let paq = window["_paq"];
    paq.push(['trackEvent', 'Fact Preview', 'Open Share Menu', this.title]);

    const dialogConfig = new MatDialogConfig();
    dialogConfig["data"] = {
      url: 'https://factsforfriends.de/fact/' + this.id,
      title: this.title,
      text: this.text,
      sharepic: this.sharepic_url,
      id: this.id,
      image_url: this.image_url
    }
    dialogConfig["data"]["isMobile"] = (this.deviceService.isMobile() || this.deviceService.isTablet()) ? true : false
    this.matDialog.open(ShareMenuComponent, dialogConfig);
  }
}
