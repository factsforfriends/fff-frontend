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

  public search(query: string, limit?: number) {
    return this.httpClient.get(`https://cms.factsforfriends.de/facts?_q=${query}&_limit=${limit}`)
  }
}
