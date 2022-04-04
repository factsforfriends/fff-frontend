import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Fact } from './model/fact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  public getData(category?: string, limit?: number, start?: number) {
    if (!category) category = '';
    return this.httpClient
      .get(
        `https://cms.factsforfriends.de/facts?_sort=date:DESC&_limit=${
          limit ? String(limit) : ''
        }&_start=${
          start ? String(start) : ''
        }&category_contains=${category.toLowerCase()}`
      )
      .pipe(map(this.parseSnacks, this));
  }

  public getRecommendations(factId?: string) {
    let response = this.httpClient.get(
      `https://cms.factsforfriends.de/recommendations?fact=${factId}`
    );
    return response.pipe(map(this.parseRecommendations, this));
  }

  public getFeaturedSnacks() {
    let response = this.httpClient.get(
      `https://cms.factsforfriends.de/collections`
    );
    return response.pipe(map(this.parseFeaturedSnacks, this));
  }

  public getFactCount(category?: string) {
    if (!category) category = '';
    return this.httpClient.get<number>(
      `https://cms.factsforfriends.de/facts/count?category_contains=${category.toLowerCase()}`
    );
  }

  public getSearchCount(query: string, category?: string) {
    if (!category) category = '';
    return this.httpClient.get<number>(
      `https://cms.factsforfriends.de/facts/count?_q=${query}&category_contains=${category.toLowerCase()}`
    );
  }

  public search(
    query: string,
    category?: string,
    limit?: number,
    start?: number
  ) {
    if (!category) category = '';
    return this.httpClient
      .get(
        `https://cms.factsforfriends.de/facts?_q=${query}&_sort=date:DESC&category_contains=${category.toLowerCase()}&_limit=${
          limit ? String(limit) : ''
        }&_start=${start ? String(start) : ''}`
      )
      .pipe(map(this.parseSnacks, this));
  }

  public getFact(id: string) {
    return this.httpClient
      .get(`https://cms.factsforfriends.de/facts/${id}`)
      .pipe(map((fact) => this.parseSnack(fact)));
  }

  private parseSnacks(data: Array<any>) {
    let hits_count = data['found'];
    let facts: Array<Fact> = [];

    if (data) {
      data.forEach((el) => {
        let fact = this.parseSnack(el);
        facts.push(fact);
      });
    } else {
    }
    return { hits_count, facts };
  }

  private parseSnack(el: any) {
    let fact: Fact = {
      id: el['id'],
      title: el['headline'],
      text: el['snack'],
      url: el['url'],
      date: el['date'],
      category: el['category'],
    };
    // Gracefully set image_url
    if (el.hasOwnProperty('image_url')) {
      fact['image_url'] = el['image_url'];
    } else {
      // Fallback to random image
      fact['image_url'] = 'https://picsum.photos/400/300';
    }

    let factwords = [
      'Fakt:',
      'Fact:'
    ];
    for (let fw of factwords) {
      if (fact['text'].startsWith(fw)) {
        fact['textFormatted'] = fact['text'].replace(fw, '<b>' + fw + '</b>');
      }
    }
    
    if (el.hasOwnProperty('sharepic_url')) {
      fact['sharepic_url'] = el['sharepic_url'];
    }

    if (el.hasOwnProperty('claim')) {
      fact['claim'] = el['claim'];
      let claimwords = [
        'Behauptung:',
        'Claim:'
      ];
      for (let cw of claimwords) {
        if (fact['claim'].startsWith(cw)) {
          fact['claimFormatted'] = fact['claim'].replace(cw, '<b>' + cw + '</b>'
        );
      }
      }
    }

    fact['factcheckingOrganisation'] = 'Quelle';
    let factcheckers = [
      ['correctiv', 'Correctiv'],
      ['faktencheck.afp.com', 'AFP Faktencheck'],
      ['logically.ai', 'Logically'],
      ['fullfact.org', 'Fullfact'],
      ['checkyourfact.com', 'CheckYourFact'],
      ['stopfake.org', 'StopFake']
    ];
    for (let fc of factcheckers) {
      if (fact['url'].includes(fc[0])) {
        fact['factcheckingOrganisation'] = fc[1];
      }
    }
    let keywords = [
      'Falsch:',
      'Richtig:',
      'Wahr:',
      'Irreführend:',
      'Widerlegt:',
      'Bestätigt:',
      'Disproven:'
    ];
    for (let kw of keywords) {
      if (fact['title'].startsWith(kw)) {
        fact['titleFormatted'] = fact['title'].replace(kw, '<b>' + kw + '</b>');
      }
    }
    return fact;
  }

  private parseRecommendations(data: Array<any>) {
    let recomendations = data[0];

    let facts: Array<Fact> = [];

    if (recomendations['recommends']) {
      recomendations = recomendations['recommends'];

      recomendations.forEach((rec) => {
        var fact = this.parseSnack(rec);
        facts.push(fact);
      });
    }
    if (facts.length < 3) {
      throw 'Could not get 3 recommendations';
    } else {
      return facts;
    }
  }

  private parseFeaturedSnacks(data: Array<any>) {
    let collections = data;

    for (let col of collections) {
      let name = col['name']
      let validThrough = Date.parse(col['valid_through']);
      let processedFacts: Array<Fact> = [];
      let facts = col['facts'];
      if (validThrough <= Date.now()) {
        continue;
      }
      facts.forEach((f) => {
        var fact = this.parseSnack(f);
        processedFacts.push(fact);
      });

      if (processedFacts.length < 3) {
        processedFacts = [];
        continue;
      } else {
        return{'facts': processedFacts, 'name': name} 
      }
    }
    throw 'Could not get 3 recommendations';
  }
}
