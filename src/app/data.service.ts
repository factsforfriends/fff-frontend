import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getData(category?: string) {
    if (!category) category = ""
    return this.httpClient.get(`https://cms.factsforfriends.de/facts?category_contains=${category.toLowerCase()}`)
  }

  public search(query: string, category?: string, limit?: number) {
    if (!category) category = ""
    // connect query with category using AND does not work with strapi.io at the moment, future version of strapi will support this
    return this.httpClient.get(`https://cms.factsforfriends.de/facts?_q=${query}&category_contains=${category.toLowerCase()}&_limit=${limit}`)
  }

  public getFact(id: string) {
    return this.httpClient.get(`https://cms.factsforfriends.de/facts/${id}`)
  }
}
