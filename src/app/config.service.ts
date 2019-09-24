import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(public http: HttpClient) { }

  getAllPosts() {
    return this.http.get('http://zestard.com/wp-json/wp/v2/posts');
    // return this.http.get('http://127.0.0.1/wordpress/wp-json/wp/v2/posts');
  }
  getPostById(id) {
    return this.http.get(`http://zestard.com/wp-json/wp/v2/posts/${id}`);
  }
  getAllCategories() {
    return this.http.get('http://zestard.com/wp-json/wp/v2/categories');
  }
  getCategoryById(id) {
    return this.http.get(`http://zestard.com/wp-json/wp/v2/categories/${id}`);
  }
  getAllPages() {
    return this.http.get('http://zestard.com/wp-json/wp/v2/pages');
  }
  getPageById(id) {
    return this.http.get(`http://zestard.com/wp-json/wp/v2/pages/${id}`);
  }
  getPostByCategory(id) {
    return this.http.get(`http://zestard.com/wp-json/wp/v2/posts/?categories=${id}`);
  }
  getMenus() {
    return this.http.get('http://127.0.0.1/wordpress/wp-json/menus/v1/menus');
  }
  getMenuByName(id) {
    return this.http.get(`http://127.0.0.1/wordpress/wp-json/menus/v1/menus/${id}`);
  }
  getMenuById() {
    return this.http.get('http://zestard.com/wp-json/menus/v1/menus/5');
  }
  getcategoryById(id) {
    return this.http.get(`http://zestard.com/wp-json/wp/v2/categories/${id}`);
  }
  getcareers() {
    return this.http.get('http://zestard.com/wp-json/wp/v2/career');
  }
  getCareerById(id) {
    return this.http.get(`http://zestard.com/wp-json/wp/v2/career/${id}`);
  }
}
