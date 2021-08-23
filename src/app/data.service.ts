import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Fact } from './model/fact.model';

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
    console.log('getting recommendations');
    let response = this.httpClient.get(
      `https://cms.factsforfriends.de/recommendations?fact=${factId}`
    );
    return response.pipe(map(this.parseRecommendations, this));
  }

  public getFactCount(category?: string) {
    if (!category) category = '';
    return this.httpClient.get(
      `https://cms.factsforfriends.de/facts/count?category_contains=${category.toLowerCase()}`
    );
  }

  public getSearchCount(query: string, category?: string) {
    if (!category) category = '';
    return this.httpClient.get(
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
    console.log(data);
    
    if (data) {
      data.forEach((el) => {
        let fact = this.parseSnack(el);
        facts.push(fact);
      });
    } else {
      console.log('no element found');
    }
    return { hits_count, facts };
  }

  private parseSnack(el: any) {
    console.log(el);
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
    if (fact['text'].startsWith('Fakt:')) {
      fact['textFormatted'] = fact['text'].replace('Fakt:', '<b>Fakt:</b>');
    }
    if (el.hasOwnProperty('sharepic_url')) {
      fact['sharepic_url'] = el['sharepic_url'];
    }
    if (el.hasOwnProperty('claim')) {
      fact['claim'] = el['claim'];
      if (fact['claim'].startsWith('Behauptung:')) {
        fact['claimFormatted'] = fact['claim'].replace(
          'Behauptung:',
          '<b>Behauptung:</b>'
        );
      }
    }
    fact['factcheckingOrganisation'] = 'Quelle';
    let factcheckers = [
      ['correctiv', 'Correctiv'],
      ['faktencheck.afp.com', 'AFP Faktencheck'],
      ['logically.ai', 'Logically'],
      ['fullfact.org', 'Fullfact'],
      ['checkyourfact.com', 'CheckYourFact'],
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
    console.log(recomendations);

    let facts: Array<Fact> = [];

    if (recomendations['recommends']) {
      recomendations = recomendations['recommends'];
      console.log(recomendations);

      recomendations.forEach((rec) => {
        var fact = this.parseSnack(rec);
        facts.push(fact);
      });
      console.log('Facts');
      console.log(facts);
    }
    if (facts.length < 3) {
      throw 'Could not get 3 recommendations';
    } else {
      return facts;
    }
  }
}
