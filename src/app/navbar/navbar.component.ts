import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() MenuOpen: boolean = false;

  constructor() { }

  openMenu(){
    return this.MenuOpen = true;
  }

  closeMenu(){
    return this.MenuOpen = false;
  }

  ngOnInit(): void {
  }

}
