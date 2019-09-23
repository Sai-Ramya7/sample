import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { MenusComponent } from './menus/menus.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { MenuSubdetailsComponent } from './menu-subdetails/menu-subdetails.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { PagesComponent } from './pages/pages.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { PageDetailsComponent } from './page-details/page-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    PostDetailsComponent,
    MenusComponent,
    MenuDetailsComponent,
    MenuSubdetailsComponent,
    HeaderComponent,
    PostsComponent,
    PagesComponent,
    CategoryDetailsComponent,
    PageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
