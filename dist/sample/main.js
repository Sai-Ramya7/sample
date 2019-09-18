(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-details/post-details.component */ "./src/app/post-details/post-details.component.ts");
/* harmony import */ var _menus_menus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menus/menus.component */ "./src/app/menus/menus.component.ts");
/* harmony import */ var _menu_details_menu_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-details/menu-details.component */ "./src/app/menu-details/menu-details.component.ts");
/* harmony import */ var _menu_subdetails_menu_subdetails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu-subdetails/menu-subdetails.component */ "./src/app/menu-subdetails/menu-subdetails.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");










var routes = [
    { path: '', component: _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'category/:id', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"] },
    { path: 'post/:id', component: _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_5__["PostDetailsComponent"] },
    { path: 'menus', component: _menus_menus_component__WEBPACK_IMPORTED_MODULE_6__["MenusComponent"] },
    { path: 'menus/:id', component: _menu_details_menu_details_component__WEBPACK_IMPORTED_MODULE_7__["MenuDetailsComponent"] },
    { path: ':object/:id', component: _menu_subdetails_menu_subdetails_component__WEBPACK_IMPORTED_MODULE_8__["MenuSubdetailsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-home></app-home> -->\n<div>\n    <nav>\n        <a routerLink=\"/home\">home</a>&nbsp;&nbsp;\n        <!-- <a routerLink=\"/\">Menu</a>&nbsp;&nbsp; -->\n        <a routerLink=\"/\">header</a>&nbsp;&nbsp;\n        <a routerLink=\"/menus\">Menus</a>\n    </nav>\n    <router-outlet></router-outlet>\n</div>\n<!-- <app-categories></app-categories> -->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sample';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post-details/post-details.component */ "./src/app/post-details/post-details.component.ts");
/* harmony import */ var _menus_menus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menus/menus.component */ "./src/app/menus/menus.component.ts");
/* harmony import */ var _menu_details_menu_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu-details/menu-details.component */ "./src/app/menu-details/menu-details.component.ts");
/* harmony import */ var _menu_subdetails_menu_subdetails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu-subdetails/menu-subdetails.component */ "./src/app/menu-subdetails/menu-subdetails.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesComponent"],
                _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_8__["PostDetailsComponent"],
                _menus_menus_component__WEBPACK_IMPORTED_MODULE_9__["MenusComponent"],
                _menu_details_menu_details_component__WEBPACK_IMPORTED_MODULE_10__["MenuDetailsComponent"],
                _menu_subdetails_menu_subdetails_component__WEBPACK_IMPORTED_MODULE_11__["MenuSubdetailsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button (click)=\"getAllCategories()\">Fetch categories</button>\n<ul>\n  <li *ngFor=\"let category of categories\">\n    {{ category | json }}\n  </li>\n</ul>\n<div class=\"container\">\n  <table *ngIf=\"click\" class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>Id</th>\n        <th>Name</th>\n        <th>Count</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let category of categories\">\n        <td>{{ category.id }}</td>\n        <td>{{ category.name }}</td>\n        <td>{{ category.count }}</td>\n      </tr>\n    </tbody>\n  </table>\n</div> -->\n<ul>\n  <li *ngFor=\"let post of categories\">\n    <a routerLink=\"/post/{{post.id}}\">{{ post.title.rendered }}</a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/categories/categories.component.scss":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(service, route) {
        this.service = service;
        this.route = route;
        this.click = false;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.catposts();
    };
    CategoriesComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.click = true;
        this.service.getAllCategories().subscribe(function (result) {
            console.log(result);
            _this.categories = result;
        });
    };
    CategoriesComponent.prototype.catposts = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        console.log('category id:', id);
        this.service.getPostByCategory(id).subscribe(function (posts) {
            _this.categories = posts;
            console.log(_this.categories);
        });
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/categories/categories.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
    }
    ConfigService.prototype.getAllPosts = function () {
        return this.http.get('http://localhost/wordpress/wp-json/wp/v2/posts');
    };
    ConfigService.prototype.getAllCategories = function () {
        return this.http.get('http://localhost/wordpress/wp-json/wp/v2/categories');
    };
    ConfigService.prototype.getPostByCategory = function (id) {
        return this.http.get("http://localhost/wordpress/wp-json/wp/v2/posts/?categories=" + id);
    };
    ConfigService.prototype.getPostById = function (id) {
        return this.http.get("http://localhost/wordpress/wp-json/wp/v2/posts/" + id);
    };
    ConfigService.prototype.getMenus = function () {
        return this.http.get('http://localhost/wordpress/wp-json/menus/v1/menus');
    };
    ConfigService.prototype.getMenuByName = function (id) {
        return this.http.get("http://localhost/wordpress/wp-json/menus/v1/menus/" + id);
    };
    ConfigService.prototype.getMenuById = function () {
        return this.http.get('http://localhost/wordpress/wp-json/menus/v1/menus/5');
    };
    ConfigService.prototype.getcategoryById = function (id) {
        return this.http.get("http://localhost/wordpress/wp-json/wp/v2/categories/" + id);
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let item of menu; index as i\">\n    <span *ngIf=\"item.object === 'post'\">\n        <!-- routerLink=\"posts/{{item.object_id}}\"  -->\n      <a \n      (click)=\"post(item.object_id)\">\n        {{ item.title }}\n      </a>\n    </span>\n    <span *ngIf=\"item.object === 'page'\">\n      <a routerLink=\"pages/{{item.object_id}}\" (click)=\"ind(i)\">\n        {{ item.title }}\n      </a>\n    </span>\n    <span *ngIf=\"item.object === 'category'\">\n      <a routerLink=\"categories/{{item.object_id}}\" (click)=\"ind(i)\">\n        {{ item.title }}\n      </a>\n    </span>\n  </li>\n</ul>\n<!-- <ul>\n  <li *ngFor=\"let item of menu; index as i\">\n    <span [ngSwitch]=\"item.object\">\n      <p *ngSwitchCase=\"page\">\n        <a routerLink=\"pages/{{item.object_id}}\" (click)=\"ind(i)\">\n          {{ item.title }}\n        </a>\n      </p>\n      <p *ngSwitchCase=\"post\">\n        <a routerLink=\"posts/{{item.object_id}}\" (click)=\"ind(i)\">\n          {{ item.title }}\n        </a>\n      </p>\n      <p *ngSwitchDefault>\n        <a routerLink=\"categories/{{item.object_id}}\" (click)=\"ind(i)\">\n          {{ item.title }}\n        </a>\n      </p>\n    </span>\n  </li>\n</ul> -->\n<!-- <ul *ngFor=\"let item of menu; index as i\">\n  <li *ngIf=\"{{item.object}} === 'category'\">\n    <a routerLink=\"categories/{{item.object_id}}\" (click)=\"ind(i)\">\n      {{ item.title }}\n    </a>\n  </li>\n  <li *ngIf=\"{{item.object}} === 'page'\">\n      <a routerLink=\"pages/{{item.object_id}}\" (click)=\"ind(i)\">\n        {{ item.title }}\n      </a>\n  </li>\n  <li *ngIf=\"{{item.object}} === 'post'\">\n      <a routerLink=\"posts/{{item.object_id}}\" (click)=\"ind(i)\">\n        {{ item.title }}\n      </a>\n  </li>\n</ul> -->"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getMenu();
        // this.ind(i);
    };
    HeaderComponent.prototype.getMenu = function () {
        var _this = this;
        this.service.getMenuById().subscribe(function (result) {
            console.log(result);
            _this.menu = result.items;
            // if (result.items.object === 'page') {
            //   this.obj = 'pages';
            // }
            // if (result.items.object === 'post') {
            //   this.obj = 'posts';
            // }
            // if (result.items.object === 'category') {
            //   this.obj = 'categories';
            // }
            console.log('menu', _this.menu);
        });
    };
    HeaderComponent.prototype.ind = function (i) {
        console.log(i);
        localStorage.setItem('index', i);
    };
    HeaderComponent.prototype.post = function (id) {
        this.router.navigateByUrl("/post/" + id);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button (click)=\"getAllPosts()\">Fetch all posts</button>\n<ul *ngIf=\"click\">\n  <li *ngFor=\"let post of posts\">{{post | json}}</li>\n</ul>\n<div class=\"container\">\n  <table *ngIf=\"click\" class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>Id</th>\n        <th>Title</th>\n        <th>Category</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let post of posts\">\n        <td>{{ post.id }}</td>\n        <td>{{ post.title.rendered }}</td>\n        <td>{{ post.categories }}</td>\n      </tr>\n    </tbody>\n  </table>\n</div> -->\n\n<button (click)=\"getAllCategories()\">Fetch Categories</button>\n\n<ul *ngFor=\"let category of categories\">\n  <li>\n    <!-- <a routerLink=\"/category/{{category.id}}\" -->\n    <a [routerLink]=\"['/category/', category.id]\"\n    routerLinkActive=\"active\">{{ category.name }}</a>\n  </li>\n</ul>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(service) {
        this.service = service;
        this.cat = false;
        this.click = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getAllPosts = function () {
        var _this = this;
        this.click = true;
        this.service.getAllPosts().subscribe(function (result) {
            console.log(result);
            _this.posts = result;
        });
    };
    HomeComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.service.getAllCategories().subscribe(function (res) {
            console.log(res);
            _this.categories = res;
        });
    };
    HomeComponent.prototype.catposts = function (id) {
        var _this = this;
        // const name = +this.route.snapshot.paramMap.get('name');
        console.log('home', id);
        this.service.getPostByCategory(id).subscribe(function (posts) {
            _this.categories = posts;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/menu-details/menu-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/menu-details/menu-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{ menu?.name }}</h3>\n<!-- <p>\n  {{menu?.items | json}}\n</p> -->\n<ul *ngFor=\"let item of menu?.items; index as i\">\n  <li (click)=\"childItems(i)\">\n    <!-- <a routerLink=\"{{item?.object_id}}\"> -->\n      {{ item?.title }}\n    <!-- </a> -->\n  </li>\n  <div *ngIf=\"click\">\n    <ul *ngFor=\"let childItem of item.child_items\">\n      <li (click)=\"citem(childItem)\">\n        {{ childItem.title }}\n      </li> \n      <span *ngFor=\"let citem of citems?.child_items\">\n        {{ citem.title }}\n      </span>\n    </ul>\n  </div>\n</ul>\n<div *ngIf=\"citems?.child_items\">\n  <ul *ngFor=\"let citem of citems?.child_items\">\n    <li>\n      {{ citem.title }}\n    </li>\n  </ul>\n</div>\n\n<!-- netflix ---- http://127.0.0.1:4200/ -->\n"

/***/ }),

/***/ "./src/app/menu-details/menu-details.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/menu-details/menu-details.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUtZGV0YWlscy9tZW51LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/menu-details/menu-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/menu-details/menu-details.component.ts ***!
  \********************************************************/
/*! exports provided: MenuDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDetailsComponent", function() { return MenuDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MenuDetailsComponent = /** @class */ (function () {
    function MenuDetailsComponent(service, route) {
        this.service = service;
        this.route = route;
        this.click = false;
    }
    MenuDetailsComponent.prototype.ngOnInit = function () {
        this.getMenuByName();
    };
    MenuDetailsComponent.prototype.getMenuByName = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.service.getMenuByName(id).subscribe(function (result) {
            _this.menu = result;
            console.log('menu', result);
            console.log('sub', result.items);
            console.log('abc', _this.citems);
        });
    };
    MenuDetailsComponent.prototype.childItems = function (x) {
        this.click = true;
        this.menuItem = x;
        console.log('menu item:', this.menuItem);
    };
    MenuDetailsComponent.prototype.citem = function (childItem) {
        console.log('ccitem', childItem);
        this.citems = childItem;
    };
    MenuDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-details',
            template: __webpack_require__(/*! ./menu-details.component.html */ "./src/app/menu-details/menu-details.component.html"),
            styles: [__webpack_require__(/*! ./menu-details.component.scss */ "./src/app/menu-details/menu-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MenuDetailsComponent);
    return MenuDetailsComponent;
}());



/***/ }),

/***/ "./src/app/menu-subdetails/menu-subdetails.component.html":
/*!****************************************************************!*\
  !*** ./src/app/menu-subdetails/menu-subdetails.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngFor=\"let item of menu\">\n  {{ item.object_id }} &nbsp; {{ item.ID }} &nbsp; {{ item.title }}\n  <span *ngIf=\"item.child_items\">\n    <ul>\n      <li *ngFor=\"let childitem of item.child_items\">\n        {{ childitem.object_id }} &nbsp; {{ childitem.ID }}\n          &nbsp; {{ childitem.title }}\n      </li>\n    </ul>\n  </span>\n</div> -->\n<div>\n  {{ menu?.ID }} &nbsp; {{ menu?.object_id }} &nbsp; {{ menu?.title }}\n  <ul>\n    <li *ngFor=\"let item of menu?.child_items\">\n      {{ item.object_id }} &nbsp; {{ item.title }}\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/menu-subdetails/menu-subdetails.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/menu-subdetails/menu-subdetails.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUtc3ViZGV0YWlscy9tZW51LXN1YmRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/menu-subdetails/menu-subdetails.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/menu-subdetails/menu-subdetails.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuSubdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSubdetailsComponent", function() { return MenuSubdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



var MenuSubdetailsComponent = /** @class */ (function () {
    function MenuSubdetailsComponent(service) {
        this.service = service;
        this.ind = localStorage.getItem('index');
    }
    MenuSubdetailsComponent.prototype.ngOnInit = function () {
        this.getMenuById();
        console.log('index', this.ind);
    };
    MenuSubdetailsComponent.prototype.getMenuById = function () {
        var _this = this;
        this.service.getMenuById().subscribe(function (result) {
            _this.menu = result.items[_this.ind];
            console.log('sub menu:', _this.menu);
        });
    };
    MenuSubdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-subdetails',
            template: __webpack_require__(/*! ./menu-subdetails.component.html */ "./src/app/menu-subdetails/menu-subdetails.component.html"),
            styles: [__webpack_require__(/*! ./menu-subdetails.component.scss */ "./src/app/menu-subdetails/menu-subdetails.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], MenuSubdetailsComponent);
    return MenuSubdetailsComponent;
}());



/***/ }),

/***/ "./src/app/menus/menus.component.html":
/*!********************************************!*\
  !*** ./src/app/menus/menus.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let menu of menus\">{{ menu | json }}</li>\n</ul>\n<div class=\"container\">\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>Id</th>\n        <th>MenuName</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let menu of menus\">\n        <td>\n          <a routerLink=\"{{menu.term_id}}\">\n            {{ menu.term_id }}\n          </a>\n        </td>\n        <td>{{ menu.name }}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/menus/menus.component.scss":
/*!********************************************!*\
  !*** ./src/app/menus/menus.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnVzL21lbnVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/menus/menus.component.ts":
/*!******************************************!*\
  !*** ./src/app/menus/menus.component.ts ***!
  \******************************************/
/*! exports provided: MenusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusComponent", function() { return MenusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



var MenusComponent = /** @class */ (function () {
    function MenusComponent(service) {
        this.service = service;
    }
    MenusComponent.prototype.ngOnInit = function () {
        this.getMenus();
    };
    MenusComponent.prototype.getMenus = function () {
        var _this = this;
        this.service.getMenus().subscribe(function (result) {
            _this.menus = result;
            console.log(result);
        });
    };
    MenusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menus',
            template: __webpack_require__(/*! ./menus.component.html */ "./src/app/menus/menus.component.html"),
            styles: [__webpack_require__(/*! ./menus.component.scss */ "./src/app/menus/menus.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], MenusComponent);
    return MenusComponent;
}());



/***/ }),

/***/ "./src/app/post-details/post-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/post-details/post-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>{{ postDetails?.title.rendered }}</h3>\n  <span>Image:\n    <div [innerHtml]=\"postDetails?.content.rendered\"\n    width=\"150px\" height=\"150px\"></div>\n  </span>\n  <div *ngIf=\"postDetails?.fimg_url\">\n    <span>Featured_image:\n      <br>\n      <img src=\"{{ postDetails?.fimg_url }}\" alt=\"img\">\n    </span>\n  </div>\n  <span>Excerpt:\n    <div [innerHtml]=\"postDetails?.excerpt.rendered\"></div>\n  </span>\n  <span>Created Date: {{ postDetails?.date }}</span>\n  <br>\n  <span>Updated Date: {{ postDetails?.modified }}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/post-details/post-details.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/post-details/post-details.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtZGV0YWlscy9wb3N0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/post-details/post-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/post-details/post-details.component.ts ***!
  \********************************************************/
/*! exports provided: PostDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsComponent", function() { return PostDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PostDetailsComponent = /** @class */ (function () {
    function PostDetailsComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    PostDetailsComponent.prototype.ngOnInit = function () {
        this.getPostDetails();
    };
    PostDetailsComponent.prototype.getPostDetails = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        console.log('post Id:', id);
        this.service.getPostById(id).subscribe(function (result) {
            _this.postDetails = result;
            console.log(result);
        });
    };
    PostDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-details',
            template: __webpack_require__(/*! ./post-details.component.html */ "./src/app/post-details/post-details.component.html"),
            styles: [__webpack_require__(/*! ./post-details.component.scss */ "./src/app/post-details/post-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PostDetailsComponent);
    return PostDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/zestard4/z-130/wp/sample/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map