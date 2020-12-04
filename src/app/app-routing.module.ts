import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';
import { ImprintPageComponent } from './imprint-page/imprint-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { TypeformFeedbackPageComponent } from './typeform-feedback-page/typeform-feedback-page.component';

const routes: Routes = [
  { path: '', component: BrowseComponent },
  { path: 'fact/:id', component: ArticlePageComponent},
  { path: 'feedback', component: TypeformFeedbackPageComponent},
  { path: 'about', component: ContentPageComponent},
  { path: 'privacy-policy', component: PrivacyPolicyPageComponent },
  { path: 'imprint', component: ImprintPageComponent }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
  // ...any other options you'd like to use
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
