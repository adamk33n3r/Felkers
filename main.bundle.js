webpackJsonp([2,5],{

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 118;


/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(138);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
            },
        ],
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_globals__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.phone = __WEBPACK_IMPORTED_MODULE_1_app_globals__["a" /* PHONE */];
    }
    AppComponent.prototype.ngOnInit = function () {
        lightbox.option({
            disableScrolling: true,
            alwaysShowNavOnTouchDevices: true,
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        $('.masthead.segment').parallax({ imageSrc: '/assets/images/masthead.png' });
        // $('.masthead.segment').visibility({
        //   once: false,
        //   onBottomPassed: () => {
        //     $('.fixed.menu').transition('fade in');
        //   },
        //   onBottomPassedReverse: () => {
        //     $('.fixed.menu').transition('fade out');
        //   },
        // });
    };
    AppComponent.prototype.sendEvent = function () {
        ga('send', 'event', 'button', 'click', 'call1');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'felk-root',
        template: __webpack_require__(204),
        styles: [__webpack_require__(194)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_semantic_ng_semantic__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng_semantic_ng_semantic__["a" /* NgSemanticModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'felk-footer',
        template: __webpack_require__(205),
        styles: [__webpack_require__(195)]
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".footer {\n  padding: 5em 0em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".footer.segment {\n  padding: 5em 0em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "#info, #info2 {\n  min-height: 300px; }\n  #info /deep/ .ui.vertical.stripe p, #info2 /deep/ .ui.vertical.stripe p {\n    font-size: 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "<!-- Fixed menu -->\n<div smDeviceVisibility=\"tablet computer\">\n  <sm-menu id='fixed-menu' class='top large hidden fixed'>\n    <div class='ui container'>\n      <!--<a sm-item href=\"/\" class='active'>Home</a>\n      <a sm-item href=\"/other\">Other</a>-->\n      <div class='item'>Felker's Tents, Tables & Chairs</div>\n      <!--<div class='item right'>\n        <a class='ui button' href='tel:555-555-5555'>Call (555) 555-5555 for a quote!</a>\n      </div>-->\n    </div>\n  </sm-menu>\n</div>\n\n<sm-segment class=\"inverted vertical masthead center aligned\">\n  <div class='ui container'>\n    <!-- Desktop Header -->\n    <div smDeviceVisibility=\"tablet computer\">\n      <sm-menu class='inverted large pointing secondary'>\n        <!--<a sm-item href=\"/\" class='active'>Home</a>\n        <a sm-item href=\"/other\">Other</a>-->\n        <!--<div class='item right'>\n          <a class='ui inverted button' href='tel:555-555-5555'>Call (555) 555-5555 for a quote!</a>\n        </div>-->\n      </sm-menu>\n    </div>\n\n    <!-- Mobile Header -->\n    <sm-menu class=\"inverted secondary\" smDeviceVisibility=\"mobile only\">\n        <!--<a sm-item icon='sidebar big' (click)=\"mobileSidebar.show({transition: 'overlay'})\"></a>\n        <sm-sidebar class=\"left vertical inverted sidebar labeled menu icon\" #mobileSidebar>\n            <a class=\"item\">\n                <i class=\"home icon\"></i> Home\n            </a>\n            <a class=\"item\">\n                <i class=\"block layout icon\"></i> Other\n            </a>\n        </sm-sidebar>-->\n    </sm-menu>\n  </div>\n  <div class=\"ui text container\">\n    <h2>\n      Felker's\n      Tents, Tables & Chairs\n    </h2>\n    <h1 class='ui inverted header'>The Tops in Tents</h1>\n    <a class='ui massive inverted button' href='tel:{{ phone }}' (click)='sendEvent()'>Call {{ phone }} for a quote!</a>\n    <!--<div class=\"ui huge primary button\">Get Started <i class=\"right arrow icon\"></i></div>-->\n  </div>\n</sm-segment>\n\n<router-outlet></router-outlet>\n\n<!-- Footer -->\n<felk-footer></felk-footer>\n"

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "<div class='ui inverted vertical footer segment'>\n  <div class='ui container'>\n    <div class='ui center aligned stackable grid'>\n      <div class='column'>\n        <h4 class='ui inverted header'>&copy; 2017 Felker's Tents, Tables & Chairs</h4>\n        <p>Crafted by <a href='http://adam-keenan.com'>Adam Keenan</a></p>\n      </div>\n    </div>\n    <!--<div class=\"ui stackable inverted divided equal height stackable grid\">\n      <div class=\"three wide column\">\n        <h4 class=\"ui inverted header\">About</h4>\n        <div class=\"ui inverted link list\">\n          <a href=\"#\" class=\"item\">Sitemap</a>\n          <a href=\"#\" class=\"item\">Contact Us</a>\n          <a href=\"#\" class=\"item\">Religious Ceremonies</a>\n          <a href=\"#\" class=\"item\">Gazebo Plans</a>\n        </div>\n      </div>\n      <div class=\"three wide column\">\n        <h4 class=\"ui inverted header\">Services</h4>\n        <div class=\"ui inverted link list\">\n          <a href=\"#\" class=\"item\">Banana Pre-Order</a>\n          <a href=\"#\" class=\"item\">DNA FAQ</a>\n          <a href=\"#\" class=\"item\">How To Access</a>\n          <a href=\"#\" class=\"item\">Favorite X-Men</a>\n        </div>\n      </div>\n      <div class=\"seven wide column\">\n        <h4 class=\"ui inverted header\">Footer Header</h4>\n        <p>Extra space for a call to action inside the footer that could help re-engage users.</p>\n      </div>\n    </div>-->\n  </div>\n</div>\n"

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "<!-- Servicing Owosso -->\n<sm-segment class='vertical stripe'>\n  <div class='ui stackable grid container'>\n    <div class='row'>\n      <div class='center aligned column'>\n        <h3 class='ui header'>Servicing the Owosso Area and Beyond</h3>\n        <p>\n        </p>\n      </div>\n    </div>\n  </div>\n</sm-segment>\n\n<!-- Photo Grid -->\n<sm-segment class='vertical stripe no-top'>\n  <div class='ui stackable grid container'>\n    <div class='row'>\n      <div class='ui grid container'>\n        <div class='eight wide column' *ngFor='let image of images'>\n          <a [href]='\"assets/images/\" + image' data-lightbox='slideshow'>\n            <img [src]='\"assets/images/\" + image' class='ui bordered rounded image'>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</sm-segment>\n\n<!-- Create picturesque environments -->\n<div id='info' class='ui middle aligned center aligned grid'>\n  <div class='row'>\n    <div class='column'>\n      <sm-segment class='vertical stripe inverted transparent-bg'>\n        <div class='ui container'>\n          <i class='camera retro icon'></i> Create picturesque scenes.\n        </div>\n      </sm-segment>\n    </div>\n  </div>\n</div>\n\n<!-- Photo Grid -->\n<sm-segment class='vertical stripe'>\n  <div class='ui stackable grid container'>\n    <div class='row'>\n      <div class='ui grid container'>\n        <div class='eight wide column' *ngFor='let image of images2'>\n          <a [href]='\"assets/images/\" + image' data-lightbox='slideshow'>\n            <img [src]='\"assets/images/\" + image' class='ui bordered rounded image'>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</sm-segment>\n\n<!-- We come to you -->\n<div id='info2' class='ui middle aligned center aligned grid'>\n  <div class='row'>\n    <div class='column'>\n      <sm-segment class='vertical stripe inverted transparent-bg'>\n        <div class='ui container'>\n          <i class='shipping icon'></i> We come to you.\n        </div>\n      </sm-segment>\n    </div>\n  </div>\n</div>\n\n<!-- Stock -->\n<sm-segment class='vertical stripe'>\n  <div class='ui stackable grid container'>\n    <div class='row'>\n      <div class='eight wide column'>\n        <h3 class='ui header'>Canopy Tents</h3>\n        <sm-list class='big relaxed animated celled'>\n          <sm-item>20x20 Yellow, Red, or Green Striped with White</sm-item>\n          <sm-item>20x30 Yellow Striped with White</sm-item>\n          <sm-item>20x40 White</sm-item>\n          <sm-item>40x40 White</sm-item>\n          <sm-item>40x60 White</sm-item>\n        </sm-list>\n      </div>\n      <div class='eight wide column'>\n        <h3 class='ui header'>Frame Tents</h3>\n        <sm-list class='big relaxed animated celled'>\n          <sm-item>20x20 White</sm-item>\n          <sm-item>20x30 White</sm-item>\n        </sm-list>\n      </div>\n    </div>\n    <div class='row'>\n      <div class='eight wide column'>\n        <h3 class='ui header'>Tables</h3>\n        <sm-list class='big relaxed animated celled'>\n          <sm-item>6ft - Beige</sm-item>\n          <sm-item>8ft - White</sm-item>\n          <sm-item>8ft - Brown</sm-item>\n          <sm-item>6ft - White Ice</sm-item>\n          <sm-item>5ft - White Round</sm-item>\n          <sm-item>33in - Hightop/Cocktail</sm-item>\n        </sm-list>\n      </div>\n      <div class='eight wide column'>\n        <h3 class='ui header'>Chairs</h3>\n        <sm-list class='big relaxed animated celled'>\n          <sm-item>White Back and Seat/White Frame</sm-item>\n          <sm-item>Off-White Back and Seat/Brown Frame</sm-item>\n        </sm-list>\n      </div>\n    </div>\n    <div class='row'>\n      <div class='center aligned column'>\n        <a class='ui massive button' href='tel:{{ phone }}' (click)='sendEvent()'>Call {{ phone }} for a quote!</a>\n      </div>\n    </div>\n  </div>\n</sm-segment>\n"

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(119);


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PHONE; });
var PHONE = '989-723-9388';
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_globals__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
        this.images = [
            'yellow_20x20.png',
            'yellow_20x20.2.png',
        ];
        this.images2 = [
            'cover5.png',
            'cover8.jpg',
        ];
        this.phone = __WEBPACK_IMPORTED_MODULE_1_app_globals__["a" /* PHONE */];
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.ngAfterViewInit = function () {
        $('#info').parallax({ imageSrc: '/assets/images/info.png' });
        $('#info2').parallax({ imageSrc: '/assets/images/trailer.png' });
    };
    HomeComponent.prototype.sendEvent = function () {
        ga('send', 'event', 'button', 'click', 'call2');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'felk-home',
        template: __webpack_require__(206),
        styles: [__webpack_require__(196)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ })

},[249]);
//# sourceMappingURL=main.bundle.js.map