webpackJsonp(["config.module"],{

/***/ "../../../../../src/app/pages/home/csa/config/config.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " \r\n.the-legend {\r\n    border-style: none;\r\n    border-width: 0px;\r\n    font-size: 15px;\r\n    line-height: 20px;\r\n    margin-bottom: 31px;\r\n    width: 22%;\r\n    padding: 11px 10px;\r\n    border: 1px solid #103a71;\r\n    text-align: center;\r\n    height: 45px;\r\n    background: #103a71;\r\n    color: white;\r\n    font-family:Raleway;\r\n}\r\n\r\n.icon-congif{\r\n    margin-left: 10px;\r\n    font-size:20px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.the-fieldset {\r\n    border: 1px solid #103a71;\r\n    padding: 10px;\r\n}\r\n.form-control{\r\n    width:70%;\r\n    font-family: Raleway;\r\n}\r\n\r\n.nav-tabs{\r\n    border-bottom:0 solid #ddd;\r\n}\r\n.btn-add{\r\n    background:#103a71;\r\n    color: white;\r\n    font-family: Raleway;\r\n    border: 1px solid #103a71;\r\n}\r\n.btn-clear{\r\n    background:red;\r\n    color: white;\r\n    font-family: Raleway;\r\n    border: 1px solid red;\r\n}\r\n.btn-clear:hover{\r\n    background: rgba(0,0,0,0);\r\n\tcolor: red;\r\n\tbox-shadow: inset 0 0 0 3px red;\r\n}\r\n\r\n.btn-add[disabled]:hover{\r\n    background:#103a71;\r\n    color: white;\r\n    font-weight: 700;\r\n}\r\n\r\n.btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus {\r\n    outline: 0px auto -webkit-focus-ring-\r\n}\r\n\r\ninput[type=checkbox] {\r\n    zoom: 1.5;\r\n    margin: 0px 0 0;\r\n    margin-left: -13px;\r\n    \r\n}\r\n\r\ninput[type=\"checkbox\"]:before{\r\n    border: 1px solid #106ABE!important;\r\n    background: #FFF;\r\n}\r\n\r\ninput[type=\"checkbox\"]:after{\r\n    border: 1px solid #0C44BD!important;\r\n    background: #FFF;\r\n}\r\n\r\n.form-group{\r\n    font-family:Raleway;\r\n    font-size: 12px;\r\n    margin-left: 30px;\r\n}\r\n\r\n.checkbox-inline{\r\n    padding-left:45px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/csa/config/config.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <!-- <div class=\"row\">\r\n    <div class=\"col-sm-offset-2 col-sm-10\"> -->\r\n  <!-- </div>\r\n  </div> -->\r\n  <fieldset class=\"the-fieldset\">\r\n    <legend class=\"the-legend\">CONFIGURATION\r\n      <span class=\"icon-congif\">\r\n        <i class=\"glyphicon glyphicon-screenshot\"></i>\r\n      </span>\r\n    </legend>\r\n\r\n\r\n    <form class=\"form-horizontal\" [formGroup]=\"configForm\" (submit)=\"submitConfig()\">\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"unit\">UNIT </label>\r\n        <div class=\"col-sm-10\">\r\n          <select class=\"form-control\" name=\"unit\" formControlName=\"unitId\" (ngModelChange)=\"getStakeholder($event)\">\r\n            <option *ngFor=\"let unit of units;let u = index;\" [value]=\"unit.departmentId\">{{unit.department}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"stachholder\">STAKEHOLDER: </label>\r\n        <div class=\"col-sm-10\">\r\n          <select class=\"form-control\" name=\"stackholder\" formControlName=\"stackholderId\">\r\n            <option *ngFor=\"let stackholder of stackholders;let s = index;\" [value]=\"stackholder.stackholderId\">{{stackholder.stackholder}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\">TOUCHPOINT</label>\r\n        <div class=\"col-sm-10\" formArrayName=\"touchpoints\">\r\n          <ul class=\"nav nav-tabs\">\r\n            <li [ngClass]=\"{'active': tab == configForm.controls.touchpoints['controls'].length - 1}\" *ngFor=\"let tp of configForm.controls.touchpoints['controls'];let tab=index;\">\r\n              <a data-toggle=\"tab\" [attr.data-target]=\"'#tab'+tab\">TouchPoint {{tab+1}}\r\n                <button type=\"button\" class=\"close\" style=\"padding-left:5px;\" (click)=\"removeTouchPoint(tab)\">&times;</button>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <button type=\"button\" class=\"btn btn-default btn-add\" (click)=\"addTouchPoint()\" [disabled]=\"configForm.controls.touchpoints.invalid\">ADD</button>\r\n            </li>\r\n          </ul>\r\n          <div class=\"tab-content\" style=\"padding: 20px 10px 0px 10px;\">\r\n            <div [attr.id]=\"'tab'+t\" class=\"tab-pane fade\" [ngClass]=\"{'in active': t == configForm.controls.touchpoints['controls'].length - 1}\"\r\n              *ngFor=\"let tp of configForm.controls.touchpoints['controls'];let t=index;\" [formGroupName]=\"t\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label col-sm-2\" style=\"text-align:left\">TOUCHPOINT </label>\r\n                <div class=\"col-sm-10\">\r\n                  <textarea class=\"form-control\" formControlName=\"touchpoint\"></textarea>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label col-sm-2\" style=\"text-align:left\">EXPERIENCE </label>\r\n                <div class=\"col-sm-10\">\r\n                  <textarea class=\"form-control\" formControlName=\"experience\"></textarea>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\" style=\"margin-bottom:25px;\">\r\n                <label class=\"control-label col-sm-2\" style=\"text-align:left\">CHANNEL </label>\r\n                <div class=\"col-sm-10\">\r\n                  <ng-container *ngFor=\"let channel of channels;let c = index;\">\r\n                    <label class=\"checkbox-inline\">\r\n                      <input class=\"checkboxes\" type=\"checkbox\" name=\"channel\" (change)=\"getChannels(tp,channel.id,$event.target.checked)\">{{channel.channel}}\r\n                    </label>\r\n                    <br *ngIf=\"c==channels.length/2  - 1\">\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label col-sm-2\" style=\"text-align:left\">DATA SOURCE </label>\r\n                <div class=\"col-sm-10\">\r\n                  <ng-container *ngFor=\"let dataSource of dataSources;let d = index;\">\r\n                    <label class=\"checkbox-inline\">\r\n                      <input class=\"checkboxes\" type=\"checkbox\" name=\"dataSource\" (change)=\"getdataSources(tp,t,dataSource.id,$event.target.checked)\">{{dataSource.dataSource}}\r\n                    </label>\r\n                    <br *ngIf=\"d==dataSources.length/2 - 1\">\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" *ngIf=\"surveyDataSource[t]\">\r\n                <label class=\"control-label col-sm-2\" style=\"text-align:left\">Survey Title</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input class=\"form-control\" type=\"text\" formControlName=\"surveyTitle\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <div class=\"col-sm-offset-2 col-sm-8\">\r\n          <button type=\"submit\" class=\"btn btn-default btn-add\" [disabled]=\"configForm.invalid\">SUBMIT</button>\r\n          <button type=\"button\" class=\"btn btn-default btn-clear\" (click)=\"clearConfigForm()\">CLEAR</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </fieldset>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/home/csa/config/config.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__("../../../../../src/app/pages/home/csa/config/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigComponent = (function () {
    function ConfigComponent(fb, cs, _location) {
        this.fb = fb;
        this.cs = cs;
        this._location = _location;
        this.units = [];
        this.stackholders = [];
        this.channels = [];
        this.dataSources = [];
        this.surveyDataSource = [];
        this.selectedChannel = {};
        this.selectedDs = {};
        this.checkedChannels = [];
        this.checkedDataSources = [];
        this.configForm = this.fb.group({
            unitId: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            stackholderId: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            touchpoints: this.fb.array([this.fb.group({
                    touchpoint: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
                    experience: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
                    channelIds: this.fb.array([]),
                    dataSourceIds: this.fb.array([])
                })])
        });
        this.getPrerequisite();
    }
    ConfigComponent.prototype.getPrerequisite = function () {
        var _this = this;
        this.cs.getPrerequisite().subscribe(function (response) {
            _this.units = response.units;
            _this.stackholders = response.stackholders;
            _this.channels = response.channels;
            _this.dataSources = response.dataSources;
        });
    };
    ConfigComponent.prototype.getStakeholder = function (unitId) {
        var _this = this;
        this.cs.getStakeholder(unitId).subscribe(function (response) {
            _this.stackholders = response;
        });
    };
    ConfigComponent.prototype.removeTouchPoint = function (index) {
        var touchpoints = this.configForm.controls["touchpoints"];
        touchpoints.removeAt(index);
    };
    ConfigComponent.prototype.addTouchPoint = function () {
        var touchpoints = this.configForm.controls["touchpoints"];
        touchpoints.push(this.setTouchPoint());
    };
    ConfigComponent.prototype.setTouchPoint = function () {
        return this.fb.group({
            touchpoint: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            experience: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            channelIds: this.fb.array([]),
            dataSourceIds: this.fb.array([])
        });
    };
    ConfigComponent.prototype.clearConfigForm = function () {
        this.configForm.reset();
        $('.checkboxes').prop('checked', false);
        // document.getElementById('checkboxes').checked = false;
    };
    ConfigComponent.prototype.getChannels = function (touchPoint, channel, isChecked) {
        var formArray = touchPoint.controls.channelIds;
        if (isChecked) {
            formArray.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](channel));
        }
        else {
            var index = formArray.controls.findIndex(function (x) { return x.value == channel; });
            formArray.removeAt(index);
        }
    };
    ConfigComponent.prototype.getdataSources = function (touchPoint, index, dataSource, isChecked) {
        var formArray = touchPoint.controls.dataSourceIds;
        var touchPointControl = touchPoint;
        if (isChecked) {
            formArray.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](dataSource));
            if (dataSource == 3) {
                touchPointControl.addControl('surveyTitle', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''));
                this.surveyDataSource[index] = true;
            }
        }
        else {
            if (dataSource == 3) {
                if (touchPointControl.contains('surveyTitle'))
                    touchPointControl.removeControl('surveyTitle');
                this.surveyDataSource[index] = false;
            }
            var indx = formArray.controls.findIndex(function (x) { return x.value == dataSource; });
            formArray.removeAt(indx);
        }
    };
    ConfigComponent.prototype.submitConfig = function () {
        var _this = this;
        console.log(this.configForm.value);
        this.cs.postAudit(this.configForm.value).subscribe(function (response) {
            console.log(response);
            _this._location.back();
        });
    };
    return ConfigComponent;
}());
ConfigComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'config',
        template: __webpack_require__("../../../../../src/app/pages/home/csa/config/config.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/csa/config/config.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _c || Object])
], ConfigComponent);

var _a, _b, _c;
//# sourceMappingURL=config.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/csa/config/config.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModule", function() { return ConfigModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_component__ = __webpack_require__("../../../../../src/app/pages/home/csa/config/config.component.ts");
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




// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { CommonModule } from "@angular/common";
// import { HttpModule } from "@angular/http";
var ConfigModule = (function () {
    function ConfigModule() {
    }
    return ConfigModule;
}());
ConfigModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__config_component__["a" /* ConfigComponent */]
        ],
        imports: [
            // FormsModule, ReactiveFormsModule, CommonModule,HttpModule,
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_2__config_component__["a" /* ConfigComponent */],
                    children: []
                }
            ])
        ],
    }),
    __metadata("design:paramtypes", [])
], ConfigModule);

//# sourceMappingURL=config.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/csa/config/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
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







var ConfigService = (function () {
    function ConfigService(http) {
        this.http = http;
    }
    ConfigService.prototype.getPrerequisite = function () {
        return this.http.get("https://hamdan-nxtlife.ind-cloud.everdata.com/api/prerequisite")
            .map(this.extractData)
            .catch(this.handleError);
    };
    ConfigService.prototype.getStakeholder = function (unitId) {
        return this.http.get("https://hamdan-nxtlife.ind-cloud.everdata.com/api/employee/csa/unit/" + unitId + "/stackholders")
            .map(this.extractData)
            .catch(this.handleError);
    };
    ConfigService.prototype.postAudit = function (data) {
        return this.http.post("https://hamdan-nxtlife.ind-cloud.everdata.com/api/employee/csa/audit", data)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ConfigService.prototype.getAudits = function () {
        return this.http.get("https://hamdan-nxtlife.ind-cloud.everdata.com/api/employee/csa/audit")
            .map(this.extractData)
            .catch(this.handleError);
    };
    ConfigService.prototype.extractData = function (res) {
        if (res.status === 204) {
            return res;
        }
        var body = res.json();
        return body || {};
    };
    ConfigService.prototype.handleError = function (error) {
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
    return ConfigService;
}());
ConfigService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__shared_shared_service__["a" /* CustomHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_shared_service__["a" /* CustomHttpService */]) === "function" && _a || Object])
], ConfigService);

var _a;
//# sourceMappingURL=config.service.js.map

/***/ })

});
//# sourceMappingURL=config.module.chunk.js.map