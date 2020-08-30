import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { ArticlePageComponent } from './article-page/article-page.component';

const routes: Routes = [
  { path: '', component: BrowseComponent },
  { path: 'fact/:id', component: ArticlePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
