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
    return this.httpClient.get(`https://cms.factsforfriends.de/facts?_sort=date:DESC&_limit=${limit ? String(limit) : ""}&_start=${start ? String(start) : ""}&category_contains=${category.toLowerCase()}`).pipe(map(this.parseSnacks))
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
    return this.httpClient.get(`https://cms.factsforfriends.de/facts?_q=${query}&_sort=date:DESC&category_contains=${category.toLowerCase()}&_limit=${limit ? String(limit) : ""}&_start=${start ? String(start) : ""}`).pipe(map(this.parseSnacks))
  }

  public getFact(id: string) {
    return this.httpClient.get(`https://cms.factsforfriends.de/facts/${id}`)
  }

  private parseSnacks(data: Array < any > ) {
    let facts: Array < Fact > = []
    data.forEach(el => {
      const fact: Fact = {
        id: el['id'],
        title: el['headline'],
        text: el['snack'],
        url: el['url'],
        date: el['date'],
        category: el['category']
      }
      facts.push(fact)
    });
    return facts
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
