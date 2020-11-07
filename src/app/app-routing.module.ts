import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';
import { ImprintPageComponent } from './imprint-page/imprint-page.component';
import { ContentPageComponent } from './content-page/content-page.component';

const routes: Routes = [
  { path: '', component: BrowseComponent },
  { path: 'fact/:id', component: ArticlePageComponent},
  { path: 'about', component: ContentPageComponent},
  { path: 'privacy-policy', component: PrivacyPolicyPageComponent },
  { path: 'imprint', component: ImprintPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
