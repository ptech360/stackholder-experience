webpackJsonp(["view.rank.module"],{

/***/ "../../../../../src/app/pages/home/rank/rank.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankService; });
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







var RankService = (function () {
    function RankService(http) {
        this.http = http;
    }
    RankService.prototype.getPrerequisite = function () {
        return this.http.get("https://hamdan-nxtlife.ind-cloud.everdata.com/api/prerequisite")
            .map(this.extractData)
            .catch(this.handleError);
    };
    RankService.prototype.getJourneyForRank = function (stakeholderId) {
        return this.http.get("https://hamdan-nxtlife.ind-cloud.everdata.com/api/employee/stackholder/" + stakeholderId + "/touchpoints")
            .map(this.extractData)
            .catch(this.handleError);
    };
    RankService.prototype.getRankedJourney = function (stakeholderId) {
        return this.http.get("https://hamdan-nxtlife.ind-cloud.everdata.com/api/employee/stackholder/" + stakeholderId + "/journey")
            .map(this.extractData)
            .catch(this.handleError);
    };
    RankService.prototype.saveRanking = function (stakeholderId, data) {
        return this.http.put("https://hamdan-nxtlife.ind-cloud.everdata.com/api/employee/stackholder/" + stakeholderId + "/journey", data)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RankService.prototype.getRiskReport = function () {
        return this.http.get("https://hamdan-nxtlife.ind-cloud.everdata.com/api/employee/report/risk")
            .map(this.extractData)
            .catch(this.handleError);
    };
    RankService.prototype.getPlannerReport = function () {
        return this.http.get("https://hamdan-nxtlife.ind-cloud.everdata.com/api/employee/report/planner")
            .map(this.extractData)
            .catch(this.handleError);
    };
    RankService.prototype.getFindingsReport = function () {
        return this.http.get("https://hamdan-nxtlife.ind-cloud.everdata.com/api/employee/report/findings")
            .map(this.extractData)
            .catch(this.handleError);
    };
    RankService.prototype.extractData = function (res) {
        if (res.status === 204) {
            return res;
        }
        var body = res.json();
        return body || {};
    };
    RankService.prototype.handleError = function (error) {
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
    return RankService;
}());
RankService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__shared_shared_service__["a" /* CustomHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_shared_service__["a" /* CustomHttpService */]) === "function" && _a || Object])
], RankService);

var _a;
//# sourceMappingURL=rank.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/rank/view/view.rank.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list{\r\n  list-style: none;\r\n  text-align: initial;\r\n}\r\n\r\n.list{\r\n  list-style: none;\r\n  padding: 0px;\r\n}\r\n\r\n.two-list{\r\n  list-style: none;\r\n  text-align: initial;\r\n  margin-top: 8px;\r\n}\r\n.form-group{\r\n  font-family: Raleway;\r\n  margin-bottom: 85px;\r\n  margin-top: 35px;\r\n}\r\n\r\n.margin-top{\r\n  margin-top:25px;\r\n  background: #103a71;\r\n  color: white;\r\n  padding: 15px;\r\n  font-family: Raleway;\r\n}\r\n.margin-top>i{\r\n  padding-left: 7px;\r\n}\r\n\r\n\r\n.panel-default{\r\n  border-color: #ffffff;\r\n}\r\n.no-gap{\r\n  padding:0px;\r\n}\r\n\r\n.panel-default>.panel-heading {\r\n  color: #fff;\r\n  background-color: #29aecc;\r\n  border-color: #29aecc;;\r\n  font-family: Raleway;\r\n  text-align:left;\r\n}\r\n\r\n.btn-edit{\r\n  background: #29aecc;\r\n  border-color: #29aecc;\r\n  padding-left: 5px;\r\n  margin-left: 7px;\r\n}\r\n\r\n.btn-edit>i{\r\n  color: white;\r\n}\r\n.btn-edit>i:hover{\r\ncolor:red;\r\n}\r\n\r\n\r\n.table-bordered{\r\n  border-color:#29aecc;\r\n  font-family: Raleway;\r\n  text-align: center;\r\n}\r\n.table-bordered>thead{\r\n  background: #103a71;\r\n  color: white;\r\n}\r\n\r\n\r\n.table-bordered>tbody>tr>td, .table-bordered>tbody>tr>th, .table-bordered>tfoot>tr>td, .table-bordered>tfoot>tr>th, .table-bordered>thead>tr>td, .table-bordered>thead>tr>th{\r\n  border-color:#29aecc; \r\n  text-align: center;\r\n}\r\n.btn-submit{\r\n  background-color: #103a71;\r\n  border-color: #103a71;\r\n  font-family: Raleway;\r\n  font-weight: 700;\r\n  float: right;\r\n}\r\n\r\n.btn-submit:hover{\r\n  background-color: rgba(0,0,0,0);\r\n\tcolor: #103a71;\r\n  box-shadow: inset 0 0 0 3px #103a71;\r\n  font-weight: 700;\r\n}\r\n.table-finding{\r\n  height: 100px;\r\n}\r\n\r\n.table-finding td{\r\n  border: 1px solid gray;\r\n}\r\n.no-padding{\r\n    padding: 0px;\r\n    border-bottom: 0px;\r\n}\r\n.table-finding>thead{\r\n  background: white;\r\n  color:black;\r\n  font-weight: 700;\r\n}\r\n.table-bordered {\r\n  border: 0 solid #ddd;\r\n}\r\n\r\n.panel-default>.panel-heading>.badge\r\n{\r\n  padding:4px 8px;\r\n  font-size:13px;\r\n  text-align:left;\r\n  background-color: #103a71;\r\n}\r\n.glyphicon-folder-open{\r\n  color: #103a71;\r\n}\r\n\r\n.glyphicon-folder-open:hover{\r\n  color: red;\r\n}\r\n\r\n.text-head{\r\n  color:#103a71!important;\r\n  font-family:Raleway!important;\r\n  padding-left: 17px;\r\n  padding-bottom: 14px;\r\n}\r\n\r\n.tab-pane .text-head:hover{\r\n  text-decoration: underline;\r\n  color: red;\r\n}\r\n.arrow-come:before{\r\n    font-family: FontAwesome;\r\n    content: \"\\F063   \";\r\n    position: absolute;\r\n    /* top: 7px; */\r\n    left: -35px;\r\n    transition: all 200ms ease;\r\n\r\n}\r\n.arrow-come:hover:before {\r\n  left: 490px;\r\n  font-size:20px;\r\n  color:#103a71!important;\r\n}\r\n\r\n/* new code */\r\n\r\n\r\n/* @import url(http://fonts.googleapis.com/css?family=Raleway); */\r\n#cssmenu,\r\n#cssmenu ul,\r\n#cssmenu ul li,\r\n#cssmenu ul li a {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  list-style: none;\r\n  line-height: 1;\r\n  display: block;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  font-family: Raleway;\r\n}\r\n#cssmenu:after,\r\n#cssmenu > ul:after {\r\n  content: \".\";\r\n  display: block;\r\n  clear: both;\r\n  visibility: hidden;\r\n  line-height: 0;\r\n  height: 0;\r\n}\r\n#cssmenu {\r\n  width: auto;\r\n  border-bottom: 3px solid #29aecc;\r\n  font-family: Raleway, sans-serif;\r\n  line-height: 1;\r\n}\r\n#cssmenu ul {\r\n  background: #ffffff;\r\n}\r\n#cssmenu > ul > li {\r\n  float: left;\r\n}\r\n#cssmenu.align-center > ul {\r\n  font-size: 0;\r\n  text-align: center;\r\n}\r\n#cssmenu.align-center > ul > li {\r\n  display: inline-block;\r\n  float: none;\r\n}\r\n#cssmenu.align-right > ul > li {\r\n  float: right;\r\n}\r\n#cssmenu.align-right > ul > li > a {\r\n  margin-right: 0;\r\n  margin-left: -4px;\r\n}\r\n#cssmenu > ul > li > a {\r\n  z-index: 2;\r\n  padding: 18px 25px 12px 25px;\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  color: #444444;\r\n  transition: all .2s ease;\r\n  margin-right: -4px;\r\n}\r\n#cssmenu > ul > li.active > a,\r\n#cssmenu > ul > li:hover > a,\r\n#cssmenu > ul > li > a:hover {\r\n  color: #ffffff;\r\n}\r\n#cssmenu > ul > li > a:after {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  z-index: -1;\r\n  width: 100%;\r\n  height: 120%;\r\n  border-top-left-radius: 8px;\r\n  border-top-right-radius: 8px;\r\n  content: \"\";\r\n  transition: all .2s ease;\r\n  -webkit-transform: perspective(5px) rotateX(2deg);\r\n  -webkit-transform-origin: bottom;\r\n  -moz-transform: perspective(5px) rotateX(2deg);\r\n  -moz-transform-origin: bottom;\r\n  transform: perspective(5px) rotateX(2deg);\r\n  transform-origin: bottom;\r\n}\r\n#cssmenu > ul > li.active > a:after,\r\n#cssmenu > ul > li:hover > a:after,\r\n#cssmenu > ul > li > a:hover:after {\r\n  background-color: #103a71;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/rank/view/view.rank.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!-- new code -->\r\n  <div>\r\n    <div id=\"cssmenu\" class=\"align-center\">\r\n      <ul>\r\n        <li class=\"active\">\r\n          <a data-toggle=\"tab\" href=\"#menu2\" click=\"getRiskReport()\">RISK REGISTER</a>\r\n        </li>\r\n        <li>\r\n          <a data-toggle=\"tab\" href=\"#menu3\" (click)=\"getPlannerReport()\">STRATEGIC PLANNING</a>\r\n        </li>\r\n        <li>\r\n          <a data-toggle=\"tab\" href=\"#menu4\" (click)=\"getFindinsReport()\">ALL FINDINGS</a>\r\n        </li>\r\n        <li>\r\n          <a data-toggle=\"tab\" href=\"#menu1\">RANKED JOURNEY</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"tab-content\">\r\n      <div id=\"menu2\" class=\"tab-pane fade in active\">\r\n        <br>\r\n        <table class=\"table table-bordered table-hover\">\r\n          <thead>\r\n            <tr>\r\n              <td>UNIT</td>\r\n              <td>STAKEHOLDER</td>\r\n              <td>TOUCHPOINT</td>\r\n              <td>EXPERIENCE</td>\r\n              <td>FINDING</td>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let report of reports;let r = index;\">\r\n              <td>{{report.department}}</td>\r\n              <td>{{report.stackholder}}</td>\r\n              <td>{{report.touchpoint}}</td>\r\n              <td>{{report.experience}}</td>\r\n              <td style=\"text-align:left;\">\r\n                <label>Finding :</label> {{report.finding}}\r\n                <br>\r\n                <label>Category :</label> {{report.category}}\r\n                <br>\r\n                <label>Source Required :</label> {{report.sourceRequired}}\r\n                <br>\r\n                <label>Improvements :</label> {{report.improvements}}\r\n                <br>\r\n                <label>Deadline :</label> {{report.deadline}}\r\n                <br>\r\n                <label>Responsible Staff :</label>\r\n                <span *ngFor=\"let rsr of report.responsibleRole;let st=index;\">{{st+1}}.{{rsr.department}}:{{rsr.role}}<br></span>\r\n                <span *ngFor=\"let staff of report.responsibleStaff;let em = index;\">{{em+1}}.{{staff.firstName}} {{staff.lastName}}<br></span>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div id=\"menu3\" class=\"tab-pane fade\">\r\n        <br>\r\n        <table class=\"table table-bordered table-hover\">\r\n          <thead>\r\n            <tr>\r\n              <td>UNIT</td>\r\n              <td>STAKEHOLDER</td>\r\n              <td>TOUCHPOINT</td>\r\n              <td>EXPERIENCE</td>\r\n              <td>FINDING</td>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let report of reports;let r = index;\">\r\n              <td>{{report.department}}</td>\r\n              <td>{{report.stackholder}}</td>\r\n              <td>{{report.touchpoint}}</td>\r\n              <td>{{report.experience}}</td>\r\n              <td style=\"text-align:left;\">\r\n                <label>Finding :</label> {{report.finding}}\r\n                <br>\r\n                <label>Category :</label> {{report.category}}\r\n                <br>\r\n                <label>Source Required :</label> {{report.sourceRequired}}\r\n                <br>\r\n                <label>Improvements :</label> {{report.improvements}}\r\n                <br>\r\n                <label>Deadline :</label> {{report.deadline}}\r\n                <br>\r\n                <label>Responsible Staff :</label>\r\n                <span *ngFor=\"let rsr of report.responsibleRole;let st=index;\">{{st+1}}.{{rsr.department}}:{{rsr.role}}<br></span>\r\n                <span *ngFor=\"let staff of report.responsibleStaff;let em = index;\">{{em+1}}.{{staff.firstName}} {{staff.lastName}}<br></span>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div id=\"menu4\" class=\"tab-pane fade\">\r\n        <br>\r\n        <table class=\"table table-bordered table-hover\">\r\n          <thead>\r\n            <tr>\r\n              <td>UNIT</td>\r\n              <td>STAKEHOLDER</td>\r\n              <td>TOUCHPOINT</td>\r\n              <td>EXPERIENCE</td>\r\n              <td>FINDINGS</td>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let report of reports;let r = index;\">\r\n              <td>{{report.department}}</td>\r\n              <td>{{report.stackholder}}</td>\r\n              <td>{{report.touchpoint}}</td>\r\n              <td>{{report.experience}}</td>\r\n              <td style=\"text-align:left;\">\r\n                <label>Finding :</label> {{report.finding}}\r\n                <br>\r\n                <label>Category :</label> {{report.category}}\r\n                <br>\r\n                <label>Source Required :</label> {{report.sourceRequired}}\r\n                <br>\r\n                <label>Improvements :</label> {{report.improvements}}\r\n                <br>\r\n                <label>Deadline :</label> {{report.deadline}}\r\n                <br>\r\n                <label>Responsible Staff :</label>\r\n                <span *ngFor=\"let rsr of report.responsibleRole;let st=index;\">{{st+1}}.{{rsr.department}}:{{rsr.role}}<br></span>\r\n                <span *ngFor=\"let staff of report.responsibleStaff;let em = index;\">{{em+1}}.{{staff.firstName}} {{staff.lastName}}<br></span>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div id=\"menu1\" class=\"tab-pane fade\">\r\n        <h3 class=\"text-head\">Ranked Journey Of Touchpoints</h3>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label col-sm-3 col-lg-3 col-md-3\"> CHOOSE STAKEHOLDER </label>\r\n          <div class=\"col-sm-9 col-lg-9 col-md-9\">\r\n            <select class=\"form-control\" [(ngModel)]=\"stakeholderId\" (ngModelChange)=\"getRankingTable($event)\" (click)=\"edit=false\">\r\n              <option *ngFor=\"let stackholder of stackholders;let s = index;\" [value]=\"stackholder.stackholderId\">{{stackholder.stackholder}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"tableData.length\">\r\n          <div class=\"panel-body\">\r\n            <table class=\"table table-bordered\">\r\n              <thead>\r\n                <tr>\r\n                  <th>TOUCHPOINTS</th>\r\n                  <th>UNITS</th>\r\n                  <th>CHANNELS</th>                  \r\n                  <th>EXPERIENCE</th>\r\n                  <th>DATA SOURCE</th>\r\n                  <th>RANK\r\n                    <button (click)=\"edit=true\" class=\"btn-edit\">\r\n                      <i class=\"glyphicon glyphicon-pencil\"></i>\r\n                    </button>\r\n                    <button *ngIf=\"edit\" (click)=\"edit=false\" class=\"btn-edit\">\r\n                      <i class=\"glyphicon glyphicon-remove\"></i>\r\n                    </button>\r\n                  </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let data of tableData;let d=index;\">\r\n                <tr>\r\n                  <td rowspan=\"1\">{{data.touchpoint}}</td>\r\n                  <td rowspan=\"1\">{{data.department}}</td>\r\n                  <td rowspan=\"1\">\r\n                    <ul class=\"list\">\r\n                      <li style=\"float:left\" *ngFor=\"let channel of data.channels;let c = index;\">{{channel.channel}}\r\n                        <span *ngIf=\"c!=data.channels.length-1\">,</span>\r\n                      </li>\r\n                    </ul>\r\n                  </td>\r\n                  <td rowspan=\"1\">{{data.experience}}</td>\r\n                  <td rowspan=\"1\">\r\n                    <ul class=\"list\">\r\n                      <li style=\"float:left\" *ngFor=\"let dataSource of data.dataSources;let d = index;\">{{dataSource.dataSource}}\r\n                        <span *ngIf=\"d!=data.dataSources.length-1\">,</span>\r\n                      </li>\r\n                      <li *ngIf=\"!data.dataSources.length\">None</li>\r\n                    </ul><br>\r\n                    <span style=\"cursor:pointer;\" *ngIf=\"data.findings.length\" class=\"glyphicon glyphicon-folder-open\" (click)=\"showFinding[d] = !showFinding[d]\">\r\n\r\n                    </span>\r\n                  </td>\r\n                  <td rowspan=\"1\">\r\n                    <span *ngIf=\"!edit\">{{data.rank}}</span>\r\n                    <input type=\"number\" [attr.id]=\"'rank' + d\" style=\"width:40px;\" [(ngModel)]=\"checkValue[d]\" (keyup)=\"validateRank($event,d,inp)\"\r\n                      (click)=\"validateRank($event,d,inp)\" #inp [attr.min]=\"1\" [attr.max]=\"tableData.length\" *ngIf=\"edit\">\r\n                  </td>\r\n                </tr>\r\n                <tr *ngIf=\"data.findings.length && showFinding[d]\">\r\n                  <td></td>\r\n                  <td colspan=\"4\">\r\n                    <div class=\"panel panel-default\" *ngFor=\"let find of data.findings;let f =index;\">\r\n                      <div class=\"panel-heading\">\r\n                        <div class=\"badge badge-numbering\">{{(f+1)}}\r\n                          <br>\r\n                        </div> {{find.finding}}</div>\r\n                      <div class=\"panel-body no-gap\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                            <table class=\"table table-finding table-bordered\">\r\n                              <thead>\r\n                                <tr>\r\n                                  <th width=\"10%\">CATEGORY</th>\r\n                                  <th width=\"10%\">IMPROVEMENTS</th>\r\n                                  <th width=\"10%\">RESPONSIBLE STAFF</th>\r\n                                  <th width=\"10%\">ROOT CAUSE</th>\r\n                                  <th width=\"10%\">SOURCE REQUIRED</th>\r\n                                </tr>\r\n                              </thead>\r\n                              <tbody>\r\n                                <tr>\r\n                                  <td>{{find.category}}</td>\r\n                                  <td>{{find.improvements}}</td>\r\n                                  <td>\r\n                                    <span *ngFor=\"let rsr of find.responsibleRole;let st=index;\">{{rsr.department}}:{{rsr.role}}</span>\r\n                                    <span *ngFor=\"let staff of find.responsibleStaff;let em = index;\">{{staff.firstName}} {{staff.lastName}}</span>\r\n                                  </td>\r\n                                  <td>{{find.rootCause}}</td>\r\n                                  <td>{{find.sourceRequired}}</td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </td>\r\n                  <td></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <button type=\"button\" (click)=\"submitRank()\" class=\"btn btn-primary btn-submit\" [disabled]=\"isDisable()\" *ngIf=\"edit\">SUBMIT</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/home/rank/view/view.rank.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewRankComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rank_service__ = __webpack_require__("../../../../../src/app/pages/home/rank/rank.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewRankComponent = (function () {
    function ViewRankComponent(rs) {
        this.rs = rs;
        this.submitDisabled = true;
        this.tableData = [];
        this.showFinding = [];
        this.reports = [];
        this.checkValue = [];
        this.getPrerequisite();
        this.getRiskReport();
    }
    ViewRankComponent.prototype.getRiskReport = function () {
        var _this = this;
        this.rs.getRiskReport().subscribe(function (response) {
            _this.reports = response;
        });
    };
    ViewRankComponent.prototype.getFindinsReport = function () {
        var _this = this;
        this.rs.getFindingsReport().subscribe(function (response) {
            _this.reports = response;
        });
    };
    ViewRankComponent.prototype.getPlannerReport = function () {
        var _this = this;
        this.rs.getPlannerReport().subscribe(function (response) {
            _this.reports = response;
        });
    };
    ViewRankComponent.prototype.getRankingTable = function (event) {
        var _this = this;
        this.rs.getRankedJourney(event).subscribe(function (response) {
            console.log(_this.tableData.length);
            for (var i = 0; i < response.length; i++) {
                _this.showFinding[i] = false;
            }
            if (response.status == 204) {
                alert("there is not ranked any touchpoints corresponding to this stakeholder");
                _this.tableData = [];
            }
            else {
                console.log(_this.showFinding);
                _this.tableData = response;
                _this.tableData.forEach(function (element, index) {
                    _this.checkValue[index] = element.rank;
                });
            }
        });
    };
    ViewRankComponent.prototype.getPrerequisite = function () {
        var _this = this;
        this.rs.getPrerequisite().subscribe(function (response) {
            if (response.status == 204) {
                _this.stackholders = [];
            }
            else
                _this.stackholders = response.stackholders;
        });
    };
    // validateRank(event:any,index:any): any {
    //   console.log(this.checkValue);
    //   if(this.checkValue.indexOf(event.srcElement.value)===-1){
    //     $('#' + event.srcElement.id).css({ 'border': '1px solid black' });
    //   }else{
    //     $('#' + event.srcElement.id).css({ 'border': '1px solid red' });
    //   }
    //   if (event.srcElement.value > this.tableData.length) {
    //     $('#' + event.srcElement.id).css({ 'border': '1px solid red' });
    //   }
    //   this.checkValue[index]=event.srcElement.value;
    //   this.isDisable();
    // }
    // isDisable(){
    //   this.tableData.forEach(element => {
    //     if(this.checkValue.indexOf(element.rank)!=-1){
    //       this.submitDisabled = true;
    //       return;
    //       }else if(element.rank>this.tableData.length){
    //         this.submitDisabled = true;
    //         return;
    //       }
    //     this.submitDisabled = false;
    //   });
    // }
    ViewRankComponent.prototype.isDisable = function () {
        for (var i = 0; i < this.tableData.length; i++) {
            if (document.getElementById("rank" + i).style.borderColor == 'red') {
                // this.submitDisabled = true;
                return true;
            }
        }
        return false;
        // this.submitDisabled = false;
    };
    ViewRankComponent.prototype.validateRank = function (event, index, inp) {
        var _this = this;
        // console.log('index' + this.checkValue.indexOf(inp.value));
        if (inp.value == '' || ((this.checkValue.filter(function (value) { return value == inp.value; }).length) == 1 && inp.value >= 1 && inp.value <= this.tableData.length)) {
            $('#' + inp.id).css({ 'border': '1px solid black' });
        }
        else {
            $('#' + inp.id).css({ 'border': '1px solid red' });
        }
        var _loop_1 = function (i) {
            if (document.getElementById("rank" + i).style.borderColor == 'red') {
                // var element = document.getElementById(`rank${i}`);
                // console.log(this.checkValue[i]);
                if ((this_1.checkValue.filter(function (value) { return value == _this.checkValue[i]; }).length) == 1 && this_1.checkValue[i] >= 1 && this_1.checkValue[i] <= this_1.tableData.length) {
                    $('#rank' + i).css({ 'border': '1px solid black' });
                }
                else {
                    $('#rank' + i).css({ 'border': '1px solid red' });
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.tableData.length; i++) {
            _loop_1(i);
        }
    };
    ViewRankComponent.prototype.submitRank = function () {
        var _this = this;
        var touchPointRank = [];
        console.log(this.tableData);
        this.tableData.forEach(function (element, index) {
            touchPointRank.push({
                touchpointId: element.touchpointId,
                rank: _this.checkValue[index]
            });
        });
        this.rs.saveRanking(this.stakeholderId, touchPointRank).subscribe(function (response) {
            // console.log(response);
            _this.tableData = response;
            _this.tableData.forEach(function (element, index) {
                _this.checkValue[index] = element.rank;
            });
            _this.edit = false;
        });
    };
    return ViewRankComponent;
}());
ViewRankComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'view-rank',
        template: __webpack_require__("../../../../../src/app/pages/home/rank/view/view.rank.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/rank/view/view.rank.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__rank_service__["a" /* RankService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__rank_service__["a" /* RankService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__rank_service__["a" /* RankService */]) === "function" && _a || Object])
], ViewRankComponent);

var _a;
//# sourceMappingURL=view.rank.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/rank/view/view.rank.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRankModule", function() { return ViewRankModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_rank_component__ = __webpack_require__("../../../../../src/app/pages/home/rank/view/view.rank.component.ts");
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




var ViewRankModule = (function () {
    function ViewRankModule() {
    }
    return ViewRankModule;
}());
ViewRankModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__view_rank_component__["a" /* ViewRankComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_2__view_rank_component__["a" /* ViewRankComponent */]
                }
            ])
        ],
    }),
    __metadata("design:paramtypes", [])
], ViewRankModule);

//# sourceMappingURL=view.rank.module.js.map

/***/ })

});
//# sourceMappingURL=view.rank.module.chunk.js.map