import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
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
import { BorderButtonComponent } from './border-button/border-button.component';
import { TypeformFeedbackPageComponent } from './typeform-feedback-page/typeform-feedback-page.component';
import { FooterComponent } from './footer/footer.component';
import { TagComponent } from './tag/tag.component';
import { SharebuttonComponent } from './sharebutton/sharebutton.component';
import { DarkmodetoggleComponent } from './darkmodetoggle/darkmodetoggle.component';
import { SnackRecommendationComponent } from './snack-recommendation/snack-recommendation.component';
import { IntroComponent } from './intro/intro.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutFakeNewsComponent } from './about-fake-news/about-fake-news.component';
import { PressComponent } from './press/press.component';
import { BlogOverviewComponent } from './blog-overview/blog-overview.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { RouterModule } from '@angular/router';
import { FeaturedContentComponent } from './featured-content/featured-content.component';

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
    NoResultsPageComponent,
    BorderButtonComponent,
    TypeformFeedbackPageComponent,
    FooterComponent,
    TagComponent,
    SharebuttonComponent,
    DarkmodetoggleComponent,
    SnackRecommendationComponent,
    IntroComponent,
    AboutUsComponent,
    AboutFakeNewsComponent,
    PressComponent,
    BlogOverviewComponent,
    BlogCardComponent,
    BlogArticleComponent,
    FeaturedContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  entryComponents: [ShareMenuComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'de' }, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
