webpackJsonp(["audits.module"],{

/***/ "../../../../../src/app/pages/home/csa/audits/audits.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  color: #414141;\r\n  text-align: center;\r\n  font-weight: 100;\r\n  font-size: 38px;\r\n}\r\n\r\n.fa-plus {\r\n  padding: 5px;\r\n  font-weight: 200px;\r\n}\r\n\r\n.btn-new {\r\n  position: relative;\r\n  display: block;\r\n  margin: 30px auto;\r\n  padding: 7px 10px;\r\n  font-size: 15px;\r\n  overflow: hidden;\r\n  padding-right: 21px;\r\n  border-width: 0;\r\n  outline: none;\r\n  border-radius: 0px;\r\n  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\r\n  background-color: #103a71;\r\n  color: white;\r\n}\r\n\r\n.btn-new:before {\r\n  font-family: FontAwesome;\r\n  content: \"\\F067\";\r\n  position: absolute;\r\n  top: 7px;\r\n  left: -35px;\r\n  transition: all 200ms ease;\r\n}\r\n\r\n.btn-new:hover:before {\r\n  left: 152px;\r\n}\r\n\r\n.btn-new.active.focus,\r\n.btn-new.active:focus,\r\n.btn-new.active:hover,\r\n.btn-new:active.focus,\r\n.btn-new:active:focus,\r\n.btn-new:active:hover {\r\n  color: white;\r\n  background-color: #103a71;\r\n  border-color: #103a71;\r\n}\r\n\r\n.btn-new:active:focus,\r\n.btn-new:focus {\r\n  outline: 0px auto -webkit-focus-ring-color;\r\n  outline-offset: 0px;\r\n}\r\n\r\n.thead-dark {\r\n  background: #103a71;\r\n  color: white;\r\n  font-size: 15px;\r\n  font-family: Raleway;\r\n  font-weight: 100;\r\n}\r\n\r\n.badge {\r\n  border-radius: 0px;\r\n  cursor: pointer;\r\n  background-color: #103a71;\r\n  margin-top: 3px;\r\n}\r\n\r\n.badge:hover {\r\n  color: #ff5931;\r\n}\r\n\r\n.width-size {\r\n  width: 17%;\r\n}\r\n\r\n.thead-dark th {\r\n  text-align: center;\r\n}\r\n\r\n.table-bordered tbody+tbody {\r\n  border-top: 0px;\r\n}\r\n\r\ntbody td {\r\n  vertical-align: middle;\r\n}\r\n\r\n.table-bordered {\r\n  border: 1px solid #092a55;\r\n}\r\n\r\n.table-bordered th {\r\n  border: 1px solid #092a55;\r\n}\r\n\r\ntbody td[rowspan] {\r\n  vertical-align: middle;\r\n  text-align: center;\r\n}\r\n\r\n.table-gap {\r\n  background-color: #29aecc;\r\n  padding-top: 0px;\r\n  padding-bottom: 4px\r\n}\r\n\r\n.list{\r\n  list-style: none;\r\n  padding: 0px;\r\n}\r\n\r\n.list li {\r\n  list-style: none;\r\n  text-align: initial;\r\n}\r\n\r\n.detail-content {\r\n  border-radius: 10px;\r\n  border: 4px solid #103a71;\r\n  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);\r\n}\r\n\r\n.modal-title {\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.modal-header {\r\n  background: #103a71;\r\n  width: 32%;\r\n  margin: auto;\r\n  border-radius: 10px;\r\n  margin-top: -20px;\r\n  padding: 8px;\r\n}\r\n\r\n.modal-title {\r\n  text-align: center;\r\n  color: white;\r\n  font-family: Raleway;\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n}\r\n\r\n.modal-body {\r\n  padding: 15px;\r\n  font-family: Raleway;\r\n  font-size: 14px;\r\n}\r\n\r\n.btn-submit {\r\n  color: #fff;\r\n  background-color: #103a71;\r\n  border-color: #ffffff;\r\n  border-radius: 7px;\r\n}\r\n\r\n.btn-submit:hover {\r\n  background: rgba(0, 0, 0, 0);\r\n  color: #103a71;\r\n  box-shadow: inset 0 0 0 3px #103a71;\r\n}\r\n\r\n.btn-submit:focus {\r\n  outline: -webkit-focus-ring-color auto 0px;\r\n}\r\n\r\n.btn-close {\r\n  color: white;\r\n  background-color: red;\r\n  border-color: red;\r\n  border-radius: 8px;\r\n  font-family: Raleway;\r\n}\r\n\r\n.btn-close:hover {\r\n  background: white;\r\n  color: red;\r\n  box-shadow: inset 0 0 0 3px red;\r\n  font-family: Raleway;\r\n}\r\n\r\n.btn-close:focus {\r\n  outline: -webkit-focus-ring-color auto 0px;\r\n}\r\n\r\n.close {\r\n  opacity: 1;\r\n  color: #103a71;\r\n  margin-right: 10px;\r\n}\r\n\r\n.close:hover {\r\n  color: red;\r\n}\r\n\r\n\r\n/* .assign-img{\r\n    width:30%;\r\n    cursor: pointer;\r\n} */\r\n\r\n.glyphicon-arrow-right {\r\n  padding-left: 5px;\r\n}\r\n\r\n.glyphicon-arrow-right:hover {\r\n  color: #ff5931;\r\n}\r\n\r\n.table>tbody+tbody {\r\n  border-top: 0px solid #ddd;\r\n}\r\n\r\n.width-smart {\r\n  width: 15%;\r\n  text-transform: capitaliz;\r\n}\r\n\r\n\r\n\r\n.flex-box-audit {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-line-pack: stretch;\r\n        align-content: stretch;\r\n    /* text-align: center; */\r\n  }\r\n  \r\n  .unit {\r\n    background-color: white;\r\n    padding: 10px;\r\n    /* margin:2px 2px 0 0; */\r\n    outline: 2px solid #eaeaea;\r\n    width: 20%;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n  }\r\n  \r\n  .stackholder {\r\n    /* margin:2px 2px 0 0; */\r\n    outline: 2px solid #eaeaea;\r\n    width: 80%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n  }\r\n  \r\n  .stackholder-1 {\r\n    background-color: white;\r\n    padding: 10px;\r\n    /* margin:0px 2px 2px 0; */\r\n    outline: 2px solid #eaeaea;\r\n    width: 20%;\r\n  }\r\n  \r\n  .stackholder-2 {\r\n    /* margin:2px 2px 0 0; */\r\n    outline: 2px solid #eaeaea;\r\n    width: 80%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n  }\r\n  \r\n  .flex-col {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n  \r\n  .item {\r\n    background-color: white;\r\n    padding: 10px;\r\n    /* margin:2px 2px 0 0; */\r\n    outline: 2px solid #eaeaea;\r\n    width: 20%;\r\n  }\r\n  .item-l {\r\n    background-color: white;\r\n    padding: 10px;\r\n    /* margin:2px 2px 0 0; */\r\n    outline: 2px solid #eaeaea;\r\n    width: 40%;\r\n  }\r\n  .flex-box-row {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-line-pack: stretch;\r\n        align-content: stretch;\r\n    height: 100%;\r\n  }\r\n  \r\n  .table {\r\n    width: 100%;\r\n    height: 100%;\r\n    /* display: table; */\r\n    margin-bottom: 0px!important;\r\n  }\r\n  \r\n  .table span {\r\n    /* display: table-cell; */\r\n    vertical-align: middle;\r\n  }\r\n  \r\n  .head .item, .head .stackholder-1, .head .unit, .head .item-l{\r\n      background:#0f3a70;\r\n      color:white;\r\n      vertical-align: initial;\r\n  }\r\n  \r\n  .badge-secondary{\r\n      display: block;\r\n      width: 100px;\r\n      margin-left: 50%;\r\n      -webkit-transform: translate(-50%);\r\n              transform: translate(-50%);\r\n  }\r\n  .box-modal{\r\n    right: 535px;\r\n    position: absolute;\r\n    top: 0px;\r\n  }\r\n  .relative{\r\n      position:relative;\r\n  }\r\n  .bottom-highlight{\r\n      border-bottom:8px solid #2aaecc;\r\n  }\r\n  .add-button{\r\n    position: relative;\r\n    height: 100px;\r\n  }\r\n\r\n  .add-button .btn{\r\n    position: absolute;\r\n    right:15px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/csa/audits/audits.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"add-button\">\r\n    <button  class=\"btn btn-default pull-right btn-new\" routerLink=\"/home/csa/config\">ADD TOUCH POINT</button>  \r\n</div>\r\n<!---->\r\n<!-- Modal -->\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content detail-content\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">ASSIGN UNIT</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">UNIT</label>\r\n          <select class=\"form-control\" name=\"unit\" [(ngModel)]=\"selectedunitId\" (ngModelChange)=\"getEmployees($event)\">\r\n            <option *ngFor=\"let unit of units;let u = index;\" [value]=\"unit.departmentId\">{{unit.department}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">EMPLOYEES</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"selectedEmployees\" multiple>\r\n            <option *ngFor=\"let emp of employees;let e=index;\" [value]=\"emp.id\">\r\n              {{emp.firstName}} {{emp.lastName}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-success btn-submit\" (click)=\"assignUnit()\">SUBMIT</button>\r\n        <button type=\"button\" class=\"btn btn-default btn-close\" data-dismiss=\"modal\">CLOSE</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- new code -->\r\n<div class=\"container-fluid\">\r\n<div class=\"flex-box-audit head bottom-highlight text-center\">\r\n  <div class=\"unit\">\r\n    <div class=\"table\">\r\n      <span>UNIT</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"stackholder\">\r\n    <div class=\"flex-box-audit\">\r\n      <div class=\"stackholder-1\">\r\n        <div class=\"table\">\r\n          <span>STAKEHOLDER</span>\r\n        </div>        \r\n      </div>\r\n      <div class=\"stackholder-2\">\r\n        <div class=\"flex-box-row\">\r\n          <div class=\"item\">\r\n            <div class=\"table\">\r\n              <span>TOUCHPOINT</span>\r\n            </div>              \r\n          </div>\r\n          <div class=\"item\">\r\n            <div class=\"table\">\r\n              <span>CHANNEL</span>\r\n            </div>                \r\n          </div>\r\n          <div class=\"item-l\">\r\n            <div class=\"table\">\r\n              <span>EXPERIENCE</span>\r\n            </div>              \r\n          </div>\r\n          <div class=\"item\">\r\n            <div class=\"table\">\r\n              <span>DATA SOURCE</span>\r\n            </div>                \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"flex-box-audit bottom-highlight\" *ngFor=\"let audit of audits;let a=index;\">\r\n  <div class=\"unit\">\r\n    <div class=\"table  text-center\">\r\n      {{audit.department}}\r\n        <div class=\"badge badge-secondary\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"selectedUnit = audit.departmentId\">Assign<i class=\"glyphicon glyphicon-arrow-right\"></i></div>    \r\n    </div>\r\n  </div>\r\n  <div class=\"stackholder\">\r\n    <div class=\"flex-box-audit\" *ngFor=\"let stackholder of audit.stackholders; let s=index\">\r\n      <div class=\"stackholder-1\">\r\n        {{stackholder.stackholder}}\r\n      </div>\r\n      <div class=\"stackholder-2\">\r\n        <div class=\"flex-box-row\" *ngFor=\"let tp of stackholder.touchpoints; let t=index\">\r\n          <div class=\"item\">\r\n            {{tp.touchpoint}}\r\n          </div>\r\n          <div class=\"item\">\r\n            <ul class=\"list\">\r\n              <li style=\"float:left\" *ngFor=\"let channel of tp.channels;let c = index;\">{{channel.channel}}\r\n                <span *ngIf=\"c!=tp.channels.length-1\">,</span>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"item-l\">\r\n            {{tp.experience}}\r\n          </div>\r\n          <div class=\"item\">\r\n            <ul class=\"list\">\r\n              <li style=\"float:left\" *ngFor=\"let dataSource of tp.dataSources;let d = index;\">{{dataSource.dataSource}}\r\n                <span *ngIf=\"dataSource.dataSourceId==3\">:{{tp.surveyTitle}}</span>\r\n                <span *ngIf=\"d!=tp.dataSources.length-1\">,</span>\r\n              </li>\r\n              <li *ngIf=\"!tp.dataSources.length\">None</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/csa/audits/audits.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audits_service__ = __webpack_require__("../../../../../src/app/pages/home/csa/audits/audits.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuditsComponent = (function () {
    function AuditsComponent(as) {
        this.as = as;
        this.units = [];
        this.audits = [];
        this.getAudits();
        this.getPrerequisite();
    }
    AuditsComponent.prototype.getAudits = function () {
        var _this = this;
        this.as.getAudits().subscribe(function (response) {
            if (response.status == 204) {
                _this.audits = [];
            }
            else {
                _this.audits = response;
            }
        });
    };
    AuditsComponent.prototype.getEmployees = function (unitId) {
        var _this = this;
        this.as.getEmployees(unitId).subscribe(function (response) {
            if (response.status == 204) {
                _this.employees = [];
            }
            else {
                _this.employees = response;
            }
        });
    };
    AuditsComponent.prototype.getPrerequisite = function () {
        var _this = this;
        this.as.getPrerequisite().subscribe(function (response) {
            if (response.status == 204) {
                _this.units = [];
            }
            else {
                _this.units = response.units;
            }
        });
    };
    AuditsComponent.prototype.assignUnit = function () {
        this.as.assignUnit(this.selectedUnit, this.selectedEmployees).subscribe(function (response) {
            $('#myModal').modal('hide');
        }, function (error) {
            alert("This unit can not be assigned caused either already assigned to this Employee or other issue");
        });
    };
    AuditsComponent.prototype.getRowSpan = function (array) {
        var rowSpan = 1;
        rowSpan += array.length;
        array.forEach(function (element) {
            rowSpan += element.channels.length;
            // rowSpan += element.dataSources.length;
        });
        if (rowSpan == 1)
            return rowSpan + 1;
        return rowSpan;
    };
    AuditsComponent.prototype.getRowSpanOfStakeholder = function (array) {
        var rowSpan = 1;
        rowSpan += array.length;
        array.forEach(function (element) {
            rowSpan += element.touchpoints.length;
            element.touchpoints.forEach(function (innerElement) {
                rowSpan += innerElement.channels.length;
            });
        });
        if (rowSpan == 1)
            return rowSpan + 1;
        return rowSpan;
    };
    AuditsComponent.prototype.getRowSpanOfTouchPoint = function (tp) {
        if (tp.channels.length > tp.dataSources.length)
            return tp.channels.length + 2;
        else
            return tp.dataSources.length + 2;
    };
    return AuditsComponent;
}());
AuditsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'audit',
        template: __webpack_require__("../../../../../src/app/pages/home/csa/audits/audits.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/csa/audits/audits.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__audits_service__["a" /* AuditService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__audits_service__["a" /* AuditService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__audits_service__["a" /* AuditService */]) === "function" && _a || Object])
], AuditsComponent);

var _a;
//# sourceMappingURL=audits.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/csa/audits/audits.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditsModule", function() { return AuditsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audits_component__ = __webpack_require__("../../../../../src/app/pages/home/csa/audits/audits.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuditsModule = (function () {
    function AuditsModule() {
    }
    return AuditsModule;
}());
AuditsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__audits_component__["a" /* AuditsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_2__audits_component__["a" /* AuditsComponent */],
                }
            ])
        ],
    }),
    __metadata("design:paramtypes", [])
], AuditsModule);

//# sourceMappingURL=audits.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/csa/audits/audits.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_service__ = __webpack_require__("../../../../../src/app/pages/shared/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuditService = (function () {
    function AuditService(http) {
        this.http = http;
    }
    AuditService.prototype.getAudits = function () {
        return this.http.get("https://hamdan-nxtlife.ind-cloud.everdata.com/api/employee/csa/audits")
            .map(this.extractData)
            .catch(this.handleError);
    };
    AuditService.prototype.getEmployees = function (unitId) {
        return this.http.get("https://hamdan-nxtlife.ind-cloud.everdata.com/api/employee/unit/" + unitId + "/employees")
            .map(this.extractData)
            .catch(this.handleError);
    };
    AuditService.prototype.getPrerequisite = function () {
        return this.http.get("https://hamdan-nxtlife.ind-cloud.everdata.com/api/prerequisite")
            .map(this.extractData)
            .catch(this.handleError);
    };
    AuditService.prototype.assignUnit = function (unitId, employeeIds) {
        return this.http.post("https://hamdan-nxtlife.ind-cloud.everdata.com/api/employee/csa/assign/unit/" + unitId + "/de", { de: employeeIds });
    };
    AuditService.prototype.extractData = function (res) {
        if (res.status === 204) {
            return res;
        }
        var body = res.json();
        return body || {};
    };
    AuditService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
            if (error.status === 0) {
                errMsg = error.status + " - \"Something is wrong..\"";
            }
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    return AuditService;
}());
AuditService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__shared_shared_service__["a" /* CustomHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_shared_service__["a" /* CustomHttpService */]) === "function" && _a || Object])
], AuditService);

var _a;
//# sourceMappingURL=audits.service.js.map

/***/ })

});
//# sourceMappingURL=audits.module.chunk.js.map