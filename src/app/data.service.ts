import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getData(){
    return this.httpClient.get("https://cms.factsforfriends.de/facts");
  }

  public getSuggestions(){
    return this.httpClient.get("https://cms.factsforfriends.de/facts?_limit=3");
  }
}
