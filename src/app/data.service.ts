import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  map
} from 'rxjs/operators';
import {
  Fact
} from './model/fact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {}

  public getData(category ? : string, limit ? : number, start ? : number) {
    if (!category) category = ""
    // return this.httpClient.get(`https://cms.factsforfriends.de/facts?_sort=date:DESC&_limit=${limit ? String(limit) : ""}&_start=${start ? String(start) : ""}&category_contains=${category.toLowerCase()}`).pipe(map(this.parseSnacks))
    return this.httpClient.get(`https://f3api.edc.li/facts?_sort=date:DESC&per_page=${limit ? String(limit) : ""}&page=${start ? String(start) : ""}&category_contains=${category.toLowerCase()}`).pipe(map(this.parseSnacks))
  }

  public getFactCount(category ? : string) {
    if (!category) category = ""
    return this.httpClient.get(`https://cms.factsforfriends.de/facts/count?category_contains=${category.toLowerCase()}`)
  }

  public getSearchCount(query: string, category ? : string) {
    if (!category) category = ""
    return this.httpClient.get(`https://cms.factsforfriends.de/facts/count?_q=${query}&category_contains=${category.toLowerCase()}`)
  }

  public search(query: string, category ? : string, limit ? : number, start ? : number) {
    if (!category) category = ""
    // return this.httpClient.get(`https://cms.factsforfriends.de/facts?_q=${query}&_sort=date:DESC&category_contains=${category.toLowerCase()}&_limit=${limit ? String(limit) : ""}&_start=${start ? String(start) : ""}`).pipe(map(this.parseSnacks))
    return this.httpClient.get(`https://f3api.edc.li/facts?_q=${query}&category_contains=${category.toLowerCase()}&per_page=${limit ? String(limit) : ""}&page=${start ? String(start) : ""}`).pipe(map(this.parseSnacks))
  }

  public getFact(id: string) {
    return this.httpClient.get(`https://cms.factsforfriends.de/facts/${id}`)
  }

  private parseSnacks(data: Array < any > ) {
    let hits_count = data['found']
    let facts: Array < Fact > = []
    data['hits'].forEach(el => {
      el = el['document']
      const fact: Fact = {
        id: el['id'],
        title: el['headline'],
        text: el['snack'],
        url: el['url'],
        date: el['date'],
        category: el['category']
      }
      // Gracefully set image_url
      if (el.hasOwnProperty('image_url')) {
        fact['image_url'] = el['image_url']
      } else {
        // Fallback to random image
        fact['image_url'] = 'https://picsum.photos/400/300'
      }
      facts.push(fact)
    });
    return {hits_count, facts}
  }

  private parseSnack(el: any) {
    const fact: Fact = {
      id: el['id'],
      title: el['headline'],
      text: el['snack'],
      url: el['url'],
      date: el['date'],
      category: el['category']
    }
    return fact
  }

}
