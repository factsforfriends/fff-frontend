import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darkmodetoggle',
  templateUrl: './darkmodetoggle.component.html',
  styleUrls: ['./darkmodetoggle.component.scss']
})
export class DarkmodetoggleComponent implements OnInit {
  current: 'dark' | 'light' = undefined

  constructor() { }

  ngOnInit(): void {
    if (localStorage.theme && localStorage.theme == "dark") {
      this.current = 'dark'
    } else {
      this.current = 'light'
    }
  }

  toggle(): void {
    // Track the click
    let paq = window["_paq"];
    if (localStorage.theme && localStorage.theme == "dark") {
      paq.push(['trackEvent', 'Switch mode', 'Light Mode']);
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      localStorage.setItem("theme", "light")
      this.current = 'light'
    } else {
      paq.push(['trackEvent', 'Switch mode', 'Dark Mode']);
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "dark")
      this.current = 'dark'
    }
  }

}
