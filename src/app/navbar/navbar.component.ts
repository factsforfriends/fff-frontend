import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() MenuOpen = false;
  public page: string;
  public location: Location;
  public searchOpen: boolean;


  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit(): void{
    console.log(this.location.path());
  }

  openMenu(): boolean{
    return this.MenuOpen = true;
  }

  closeMenu(): boolean{
    return this.MenuOpen = false;
  }

  toggleSearch(): void{
    this.MenuOpen = false;
    this.searchOpen = true;
  }
}
