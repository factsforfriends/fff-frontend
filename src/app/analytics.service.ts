import { Injectable } from '@angular/core';

declare let gtag:Function;

@Injectable({
  providedIn: 'root'
})

// from https://medium.com/madhash/how-to-properly-add-google-analytics-tracking-to-your-angular-web-app-bc7750713c9e
export class AnalyticsService {
  constructor() { }

  public eventEmitter( 
    eventAction: string, 
    eventParams: object){ 
         gtag('event', eventAction, eventParams)
    }
}
