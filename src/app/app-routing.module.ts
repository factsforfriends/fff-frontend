import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';
import { ImprintPageComponent } from './imprint-page/imprint-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { TypeformFeedbackPageComponent } from './typeform-feedback-page/typeform-feedback-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutFakeNewsComponent } from './about-fake-news/about-fake-news.component';
import { PressComponent } from './press/press.component';
import { BlogOverviewComponent } from './blog-overview/blog-overview.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';

const routes: Routes = [
  { path: '', component: BrowseComponent },
  { path: 'fact/:id', component: ArticlePageComponent },
  { path: 'feedback', component: TypeformFeedbackPageComponent },
  { path: 'privacy-policy', component: PrivacyPolicyPageComponent },
  { path: 'imprint', component: ImprintPageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'about-desinfo', component: AboutFakeNewsComponent },
  { path: 'press', component: PressComponent },
  { path: 'blog', component: BlogOverviewComponent },
  { path: 'blog/:id', component: BlogArticleComponent },
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  // ...any other options you'd like to use
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
