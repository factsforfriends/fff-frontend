import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';
import { ImprintPageComponent } from './imprint-page/imprint-page.component';
import { MissionPageComponent } from './mission-page/mission-page.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { FakeNewsPageComponent } from './fake-news-page/fake-news-page.component';

const routes: Routes = [
  { path: '', component: BrowseComponent },
  { path: 'fact/:id', component: ArticlePageComponent},
  { path: 'mission', component: MissionPageComponent},
  { path: 'team', component: TeamPageComponent},
  { path: 'fake-news', component: FakeNewsPageComponent},
  { path: 'privacy-policy', component: PrivacyPolicyPageComponent },
  { path: 'imprint', component: ImprintPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
