import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { BrowseComponent } from './browse/browse.component';
import { CategoryBarComponent } from './category-bar/category-bar.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { DataService } from './data.service';
import { AnalyticsService } from './analytics.service';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ShareMenuComponent } from './share-menu/share-menu.component';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';
import { ImprintPageComponent } from './imprint-page/imprint-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { NoResultsPageComponent } from './no-results-page/no-results-page.component';
import { LOCALE_ID } from '@angular/core';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeDe, localeDeExtra);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BrowseComponent,
    CategoryBarComponent,
    ArticleCardComponent,
    SearchbarComponent,
    ArticlePageComponent,
    ShareMenuComponent,
    PrivacyPolicyPageComponent,
    ImprintPageComponent,
    ContentPageComponent,
    BackButtonComponent,
    NoResultsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    ShareMenuComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "de" },
    DataService,
    AnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
