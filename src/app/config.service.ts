import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(public http: HttpClient) { }

  getAllPosts() {
    return this.http.get('http://localhost/wordpress/wp-json/wp/v2/posts');
  }
  getAllCategories() {
    return this.http.get('http://localhost/wordpress/wp-json/wp/v2/categories');
  }
  getPostByCategory(id) {
    return this.http.get(`http://localhost/wordpress/wp-json/wp/v2/posts/?categories=${id}`);
  }
  getPostById(id) {
    return this.http.get(`http://localhost/wordpress/wp-json/wp/v2/posts/${id}`);
  }
  getMenus() {
    return this.http.get('http://localhost/wordpress/wp-json/menus/v1/menus');
  }
  getMenuByName(id) {
    return this.http.get(`http://localhost/wordpress/wp-json/menus/v1/menus/${id}`);
  }
  getMenuById() {
    return this.http.get('http://localhost/wordpress/wp-json/menus/v1/menus/5');
  }
  getcategoryById(id) {
    return this.http.get(`http://localhost/wordpress/wp-json/wp/v2/categories/${id}`);
  }
  getAllPages() {
    return this.http.get('http://localhost/wordpress/wp-json/wp/v2/pages');
  }
}
