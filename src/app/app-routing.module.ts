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
import { CareersComponent } from './careers/careers.component';
import { CareerDetailsComponent } from './career-details/career-details.component';

const routes: Routes = [
  // { path: '', component: HeaderComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent,
    children: [
      { path: 'posts', component: PostsComponent },
      { path: 'posts/:id', component: PostDetailsComponent },

      { path: 'categories', component: CategoriesComponent },
      { path: 'categories/:id', component: CategoryDetailsComponent },

      { path: 'pages', component: PagesComponent },
      { path: 'pages/:id', component: PageDetailsComponent },

      { path: 'careers', component: CareersComponent },
      { path: 'careers/:id', component: CareerDetailsComponent }
    ]
  },
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
