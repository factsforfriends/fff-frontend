import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { BrowseComponent } from './browse/browse.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryBarComponent } from './category-bar/category-bar.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { DataService } from './data.service';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ShareMenuComponent } from './share-menu/share-menu.component';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BrowseComponent,
    FooterComponent,
    CategoryBarComponent,
    ArticleCardComponent,
    SearchbarComponent,
    ArticlePageComponent,
    ShareMenuComponent,
    PrivacyPolicyPageComponent,
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
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
