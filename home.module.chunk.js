webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".first-nav{\r\n  background: #103a71;\r\n  border-bottom: 4px solid #29aecc;\r\n  height: 48px;\r\n  border-radius: 0px;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.first-nav .nav>li>a{\r\n  background-color: transparent;\r\n  color: #f1f7ff;\r\n}\r\n\r\n.first-nav .nav>li>a:focus, .first-nav .nav>li>a:hover {\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n  color: white;\r\n}\r\n\r\n.second-nav-bar{\r\n  /* border: 1px solid #ebebeb; */\r\n  border-top: none;\r\n  height: 55px;\r\n  margin-top: 50px;\r\n}\r\n.second-nav-bar a img {\r\n  margin-left: 11px;\r\n  width: 345px;\r\n  height: auto;\r\n}\r\n\r\n.second-nav-bar ul{\r\n  right: 15px;\r\n  bottom: 0;\r\n  position: absolute;\r\n}\r\n\r\n.second-nav-bar>ul>li>a:focus, .second-nav-bar>ul>li>a:hover, .second-nav-bar>ul>li.active>a {\r\n  text-decoration: none;\r\n  background-color: #103a71;\r\n  color: white;\r\n}\r\n\r\n.navbar-login{\r\n    width: 305px;\r\n    padding: 10px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\n.navbar-login-session{\r\n    padding: 10px;\r\n    padding-bottom: 0px;\r\n    padding-top: 0px;\r\n}\r\n\r\n.icon-size{\r\n    font-size: 87px;\r\n}\r\n\r\n\r\n\r\n/* new code */\r\n\r\n.navbar-brand img{\r\n width: 335px;\r\n}\r\n\r\n.new-nav-bar{\r\n border: 1px solid #ebebeb;\r\n margin-top:50px;\r\n}\r\n\r\n.csa-detail{\r\n  text-align:center;\r\n  font-size: 30px;\r\n  padding-bottom: 8px;\r\n  padding-top: 8px;\r\n  border-left: 1px solid #ebebeb;\r\n  /* border-right: 1px solid #ebebeb; */\r\n  color:#ff5931;\r\n  /* margin-left: 10px;\r\n  margin-right: 10px; */\r\n  cursor: pointer;\r\n  transition: 0.5s color;\r\n}\r\n\r\n\r\n\r\n/* .csa-detail:visited{\r\n  border-bottom: 2px solid red;\r\n} */\r\n\r\n.csa-detail:focus{\r\n    outline: -webkit-focus-ring-color auto 0px;\r\n    outline-color: -webkit-focus-ring-color;\r\n    outline-style: auto;\r\n    outline-width: 0px;\r\n}\r\n/* .csa-detail:hover{\r\n  color: blue;\r\n} */\r\n\r\n.data-img{\r\n  width:25%;\r\n}\r\n\r\n/* .csa-detail:hover img {\r\n  animation-name: vanish;\r\n  animation-duration: 1s;\r\n  animation-iteration-count: 1;\r\n} */\r\n\r\n\r\n\r\n.report-detail{\r\n  text-align:center;\r\n  font-size: 30px;\r\n  padding-bottom: 8px;\r\n  padding-top: 8px;\r\n  border-left: 1px solid #ebebeb;\r\n  /* border-right: 1px solid #ebebeb; */\r\n  color:#ff5931;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  cursor: pointer;\r\n  transition: 0.5s color;\r\n}\r\n.report-detail:hover{\r\n  color:blue;\r\n}\r\n.report-detail:focus{\r\n      outline: -webkit-focus-ring-color auto 0px;\r\n      outline-color: -webkit-focus-ring-color;\r\n      outline-style: auto;\r\n      outline-width: 0px;\r\n  }\r\n.font-detail{\r\n  color:#103a72;\r\n  font-weight: 600;\r\n  font-family: Raleway;  \r\n}\r\n\r\n.glyphicon-list-alt{\r\n top: 10px;\r\n}\r\n.glyphicon-folder-open{\r\ntop:10px;\r\n}\r\n\r\n.glyphicon-file{\r\ntop: 10px;\r\n}\r\n\r\n@-webkit-keyframes bounce {\r\n\t0%, 20%, 60%, 100% {\r\n\t\t-webkit-transform: translateY(0);\r\n\t\ttransform: translateY(0);\r\n\t}\r\n\r\n\t40% {\r\n\t\t-webkit-transform: translateY(-20px);\r\n\t\ttransform: translateY(-20px);\r\n\t}\r\n\r\n\t80% {\r\n\t\t-webkit-transform: translateY(-10px);\r\n\t\ttransform: translateY(-10px);\r\n\t}\r\n}\r\n\r\n@keyframes bounce {\r\n\t0%, 20%, 60%, 100% {\r\n\t\t-webkit-transform: translateY(0);\r\n\t\ttransform: translateY(0);\r\n\t}\r\n\r\n\t40% {\r\n\t\t-webkit-transform: translateY(-20px);\r\n\t\ttransform: translateY(-20px);\r\n\t}\r\n\r\n\t80% {\r\n\t\t-webkit-transform: translateY(-10px);\r\n\t\ttransform: translateY(-10px);\r\n\t}\r\n}\r\n\r\n.csa-detail:hover{\r\n  -webkit-animation:bounce 1s;\r\n          animation:bounce 1s;\r\n}\r\n\r\n.effect:hover{\r\n  -webkit-animation:bounce 1s;\r\n          animation:bounce 1s; \r\n}\r\n.sub-menu{\r\n  width:200px;\r\n   margin:20px;\r\n   background:white;\r\n    position: absolute;\r\n    /* z-index: 1; */\r\n    left:-10px;\r\n    top:83px;\r\n}\r\n\r\n.data-detail{\r\n  text-align:center;\r\n  font-size: 20px;\r\n  padding-top:8px;\r\n  /* border-right: 1px solid #ebebeb; */\r\n  color: #103a72;\r\n  margin: auto;\r\n  display: block;\r\n  cursor: pointer;\r\n  transition: 0.5s color;\r\n  font-family: Raleway;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  box-shadow: 0px 0px rgba(0,0,0,.175);\r\n}\r\n\r\n.data-detail ,open>.sub-menu:hover{\r\n display: block;\r\n}\r\n\r\n/* .data-detail:hover{\r\n  background: grey;\r\n} */\r\n\r\n\r\n.data-detail:focus{\r\n      outline: -webkit-focus-ring-color auto 0px;\r\n      outline-color: -webkit-focus-ring-color;\r\n      outline-style: auto;\r\n      outline-width: 0px;\r\n  }\r\n\r\n.data-detail img{\r\n  width:40%;\r\n}\r\n\r\n.data-text{\r\n  font-size:12px!important;\r\n  font-weight: 600px;\r\n}\r\n\r\n.activeComponent{\r\n  padding: 0px;\r\n  border-bottom: 2px solid #29aecc;\r\n  transition:0.3s ease-in;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar first-nav navbar-fixed-top\">\r\n        <div class=\"container-fluid\">\r\n            <!-- <div class=\"navbar-header\">\r\n          <a class=\"navbar-brand\" href=\"#\">WebSiteName</a>\r\n        </div>\r\n        <ul class=\"nav navbar-nav\">\r\n          <li class=\"active\"><a href=\"#\">Home</a></li>\r\n          <li><a href=\"#\">Page 1</a></li>\r\n          <li><a href=\"#\">Page 2</a></li>\r\n        </ul> -->\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                  <span class=\"glyphicon glyphicon-user\"></span> \r\n                  <strong>Pankaj</strong>\r\n                  <span class=\"glyphicon glyphicon-chevron-down\"></span>\r\n              </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li>\r\n                            <div class=\"navbar-login\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-4\">\r\n                                        <p class=\"text-center\">\r\n                                            <span class=\"glyphicon glyphicon-user icon-size\"></span>\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"col-lg-8\">\r\n                                        <p class=\"text-left\"><strong>{{userDetails.firstName}} {{userDetails.lastName}}</strong></p>\r\n                                        <p class=\"text-left small\">{{userDetails.email}}</p>\r\n                                        <p class=\"text-left\">\r\n                                            <a href=\"#\" class=\"btn btn-primary btn-block btn-sm\">Profile</a>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li>\r\n                            <div class=\"navbar-login navbar-login-session\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-12\">\r\n                                        <p>\r\n                                            <a href=\"#\" class=\"btn btn-danger btn-block\" (click)=\"logout()\">Logout</a>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n    <!-- <nav class=\"navbar second-nav-bar container\">\r\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"assets\\images\\HBMSU-home.jpg\"></a>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li routerLinkActive=\"active\" ><a [routerLink]=\"['./csa']\">Csa</a></li>\r\n      <li routerLinkActive=\"active\" ><a [routerLink]=\"['./de']\">Data Entry</a></li>\r\n      <li routerLinkActive=\"active\" ><a [routerLink]=\"['./report']\">Reports</a></li>\r\n    </ul>\r\n    </nav> -->\r\n    <!-- new code -->\r\n    \r\n    <nav class=\"navbar new-nav-bar container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                    <a class=\"navbar-brand\" href=\"#\"><img src=\"assets\\images\\HBMSU-home.jpg\"></a>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 co-sm-4 col-xs-4\" routerLinkActive=\"activeComponent\" style=\"padding: 0px;\" >\r\n                    <div class=\"csa-detail\"  [routerLink]=\"['./csa']\" (click)=\"activateComponent('csa')\">\r\n                        <img src=\"assets\\images\\data.png\" class=\"data-img\"/>\r\n                        <h5 class=\"font-detail\">CSA</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 co-sm-4 col-xs-4 \" routerLinkActive=\"activeComponent\"  style=\"padding: 0px;\" >\r\n                    <div class=\"csa-detail\" [routerLink]=\"['./de']\" (click)=\"activateComponent('de')\">\r\n                        <img src=\"assets\\images\\data1.png\" class=\"data-img\"/>\r\n                        <h5 class=\"font-detail\">DATA ENTRY</h5>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"col-lg-2 col-md-2 co-sm-4 col-xs-4\" routerLinkActive=\"activeComponent\"  style=\"padding: 0px;\" >\r\n                    <div class=\"csa-detail\" [routerLink]=\"['./rank']\">\r\n                        <img src=\"assets\\images\\report.png\" class=\"data-img\"/>\r\n                        <h5 class=\"font-detail\">Ranking</h5>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"col-lg-2 col-md-2 co-sm-4 col-xs-4\"  routerLinkActive=\"activeComponent\"  style=\"padding: 0px;\" >\r\n                    <div class=\"csa-detail\" [routerLink]=\"['./report']\" (click)=\"activateComponent('reports')\">\r\n                        <img src=\"assets\\images\\report.png\" class=\"data-img\"/>\r\n                       <h5 class=\"font-detail\">REPORTS</h5>\r\n                    </div>\r\n                </div>\r\n           </div>\r\n         </nav>\r\n    <router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_service__ = __webpack_require__("../../../../../src/app/pages/shared/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_common_service__ = __webpack_require__("../../../../../src/app/pages/shared/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function HomeComponent(storage, router) {
        this.storage = storage;
        this.router = router;
        this.userDetails = this.storage.getData('userDetails');
        this.activeComponent = 'csa';
    }
    HomeComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    HomeComponent.prototype.activateComponent = function (activeComponent) {
        this.activeComponent = activeComponent;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_shared_service__["a" /* CustomHttpService */], __WEBPACK_IMPORTED_MODULE_2__shared_common_service__["a" /* StorageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_common_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_common_service__["a" /* StorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/pages/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                {
                    path: '',
                    redirectTo: 'csa',
                    pathMatch: 'full'
                },
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */],
                    children: [
                        {
                            path: 'csa',
                            loadChildren: 'app/pages/home/csa/csa.module#CSAModule'
                        },
                        {
                            path: 'de',
                            loadChildren: 'app/pages/home/de/de.module#DEModule'
                        },
                        {
                            path: 'report',
                            loadChildren: 'app/pages/home/rank/view/view.rank.module#ViewRankModule'
                        },
                    ]
                }
            ])
        ],
    }),
    __metadata("design:paramtypes", [])
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map