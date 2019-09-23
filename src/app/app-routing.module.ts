import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { MenuSubdetailsComponent } from './menu-subdetails/menu-subdetails.component';
import { MenusComponent } from './menus/menus.component';
import { PagesComponent } from './pages/pages.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { PageDetailsComponent } from './page-details/page-details.component';

const routes: Routes = [
  // { path: '', component: HeaderComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/posts', component: PostsComponent },
  { path: 'home/categories', component: CategoriesComponent },
  { path: 'home/pages', component: PagesComponent },
  { path: 'home/posts/:id', component: PostDetailsComponent },
  { path: 'home/categories/:id', component: CategoryDetailsComponent },
  { path: 'home/pages/:id', component: PageDetailsComponent },
  { path: 'category/:id', component: CategoriesComponent },
  { path: 'menus', component: MenusComponent },
  { path: 'menus/:id', component: MenuDetailsComponent },
  { path: ':object/:id', component: MenuSubdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
