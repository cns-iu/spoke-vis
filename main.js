(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!******************************************!*\
  !*** multi ./projects/spoke/src/main.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/spoke-vis/spoke-vis/website/projects/spoke/src/main.ts */"4SE4");


/***/ }),

/***/ "3EAi":
/*!*****************************************************************************************************************************!*\
  !*** ./projects/spoke/src/app/features lazy ^\.\/.*\/.*\.module$ include: \/features\/([^/]+)\/\1\.module namespace object ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"n2xq",
		"home-home-module"
	],
	"./visualizations/visualizations.module": [
		"7sVp",
		"visualizations-visualizations-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "3EAi";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "4SE4":
/*!************************************!*\
  !*** ./projects/spoke/src/main.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "r4vW");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "9GfF");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "9GfF":
/*!********************************************************!*\
  !*** ./projects/spoke/src/environments/environment.ts ***!
  \********************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    googleAnalyticsTag: 'G-1Y4KZQ0394'
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

/***/ "D6m2":
/*!***************************************************************************!*\
  !*** ./projects/spoke/src/app/core/components/header/header.component.ts ***!
  \***************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-google-analytics */ "Wdmj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");







const _c0 = function () { return { disease: "cad", food: "Sake" }; };
class HeaderComponent {
    constructor(ga) {
        this.ga = ga;
        this.menuOpen = false;
    }
    logClick(siteName) {
        this.ga.event('header_view', 'link_click', siteName);
    }
    setMenuOpen(value) {
        this.menuOpen = value;
        const label = value ? 'menu_opened' : 'menu_closed';
        this.ga.event('header_view', 'menu_toggled', label);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__["GoogleAnalyticsService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["spoke-header"]], decls: 19, vars: 7, consts: [[1, "content"], ["src", "assets/logos/logo-spoke-white-text.svg", "alt", "Spoke logo", "routerLink", "/home", 1, "logo", 3, "click"], [1, "filler"], ["mat-flat-button", "", "disableRipple", "", 1, "menu-button", 3, "matMenuTriggerFor", "menuOpened", "menuClosed"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/home", 1, "text-blue", 3, "click"], ["mat-menu-item", "", "routerLink", "/visualization/overview", 1, "text-blue", 3, "click"], ["mat-menu-item", "", "routerLink", "/visualization/overview", 1, "text-blue", 3, "queryParams"], ["mat-menu-item", "", "routerLink", "/visualization/details", 1, "text-blue", 3, "queryParams"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_1_listener() { return ctx.logClick("home_logo"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menuOpened", function HeaderComponent_Template_button_menuOpened_3_listener() { return ctx.setMenuOpen(true); })("menuClosed", function HeaderComponent_Template_button_menuClosed_3_listener() { return ctx.setMenuOpen(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_8_listener() { return ctx.logClick("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() { return ctx.logClick("overview"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Overview Visualization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Overview Visualization with Selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Detail Visualization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("menu-open", ctx.menuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 2.5rem;\n  background-color: #052049;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 90rem;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 5rem;\n  padding-right: 5rem;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 2rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  min-width: 0;\n  height: 2.5rem;\n  padding: 0;\n  background-color: #007cbe;\n  border-radius: 0;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #F2F4F6;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]:hover {\n  background-color: #005C8C;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.text-blue[_ngcontent-%COMP%] {\n  color: #052049 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUFOO0FBR0k7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFETjtBQUdNO0VBQ0UsY0FBQTtBQURSO0FBSU07RUFDRSx5QkFBQTtBQUZSO0FBTUk7RUFDRSxZQUFBO0FBSk47QUFTQTtFQUNFLHlCQUFBO0FBTkYiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMi41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQ5O1xuXG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDkwcmVtO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVyZW07XG5cbiAgICAubG9nbyB7XG4gICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLm1lbnUtYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAyLjVyZW07XG4gICAgICBtaW4td2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Y2JlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgbWF0LWljb24ge1xuICAgICAgICBjb2xvcjogI0YyRjRGNjtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDVDOEM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZpbGxlciB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuICB9XG59XG5cbi50ZXh0LWJsdWUge1xuICBjb2xvcjogIzA1MjA0OSAhaW1wb3J0YW50O1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "N6ve":
/*!************************************************************************!*\
  !*** ./projects/spoke/src/app/core/components/header/header.module.ts ***!
  \************************************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.component */ "D6m2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class HeaderModule {
}
HeaderModule.ɵfac = function HeaderModule_Factory(t) { return new (t || HeaderModule)(); };
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]] }); })();


/***/ }),

/***/ "Q8Zp":
/*!************************************************************************!*\
  !*** ./projects/spoke/src/app/core/components/footer/footer.module.ts ***!
  \************************************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component */ "Wfog");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class FooterModule {
}
FooterModule.ɵfac = function FooterModule_Factory(t) { return new (t || FooterModule)(); };
FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]] }); })();


/***/ }),

/***/ "Wfog":
/*!***************************************************************************!*\
  !*** ./projects/spoke/src/app/core/components/footer/footer.component.ts ***!
  \***************************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["spoke-footer"]], decls: 3, vars: 0, consts: [[1, "content"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A9 2021 Spoke. All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 2.5rem;\n  background-color: #052049;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 90rem;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 5rem;\n  padding-right: 5rem;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  color: #F2F4F6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDRSxjQUFBO0FBQU4iLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMi41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDQ5O1xuXG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDkwcmVtO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVyZW07XG5cbiAgICAuY29weXJpZ2h0IHtcbiAgICAgIGNvbG9yOiAjRjJGNEY2O1xuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "iKf1":
/*!***********************************************************!*\
  !*** ./projects/spoke/src/app/core/state/state.module.ts ***!
  \***********************************************************/
/*! exports provided: StateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateModule", function() { return StateModule; });
/* harmony import */ var _ngxs_labs_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs-labs/data */ "szHl");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/logger-plugin */ "/wON");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/router-plugin */ "TkeJ");
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/storage-plugin */ "2jgc");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "9GfF");
/* harmony import */ var _router_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router.state */ "s7H+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");













/**
 * Root states available to the entire application
 */
const ROOT_STATES = [];
const EXTENSIONS = [
    _router_state__WEBPACK_IMPORTED_MODULE_6__["RouterState"] // Not a true state class - only a wrapper around the router plugin
];
class StateModule {
}
StateModule.ɵfac = function StateModule_Factory(t) { return new (t || StateModule)(); };
StateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: StateModule });
StateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forRoot(ROOT_STATES, {
                developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
            }),
            _ngxs_labs_data__WEBPACK_IMPORTED_MODULE_0__["NgxsDataPluginModule"].forRoot(EXTENSIONS),
            _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__["NgxsRouterPluginModule"].forRoot(),
            /**
             * Switch from NgxsStoragePlugin to @Persistence decorator from NgxsDataPluginModule (requires ngxs-labs/data@5)
             * See: https://github.com/ngxs-labs/data/blob/master/docs/pages/persistence-state.md
             */
            _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_3__["NgxsStoragePluginModule"].forRoot({
                key: []
            }),
            /** --- Additional plugins goes here --- */
            /** Logger must be last to capture all events */
            _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_1__["NgxsLoggerPluginModule"].forRoot({
                collapsed: true,
                disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](StateModule, { imports: [_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["ɵk"], _ngxs_labs_data__WEBPACK_IMPORTED_MODULE_0__["NgxsDataPluginModule"], _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__["NgxsRouterPluginModule"], _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_3__["NgxsStoragePluginModule"], _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_1__["NgxsLoggerPluginModule"]] }); })();


/***/ }),

/***/ "j5Af":
/*!****************************************************!*\
  !*** ./projects/spoke/src/app/core/core.module.ts ***!
  \****************************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-google-analytics */ "Wdmj");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.module */ "Q8Zp");
/* harmony import */ var _components_header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.module */ "N6ve");
/* harmony import */ var _state_state_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/state.module */ "iKf1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_0__["NgxGoogleAnalyticsModule"].forRoot(''),
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_0__["NgxGoogleAnalyticsRouterModule"].forRoot({}),
            _state_state_module__WEBPACK_IMPORTED_MODULE_3__["StateModule"],
            _components_header_header_module__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"],
            _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__["FooterModule"],
        ], _components_header_header_module__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"],
        _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__["FooterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CoreModule, { imports: [ngx_google_analytics__WEBPACK_IMPORTED_MODULE_0__["NgxGoogleAnalyticsModule"], ngx_google_analytics__WEBPACK_IMPORTED_MODULE_0__["NgxGoogleAnalyticsRouterModule"], _state_state_module__WEBPACK_IMPORTED_MODULE_3__["StateModule"],
        _components_header_header_module__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"],
        _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__["FooterModule"]], exports: [_components_header_header_module__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"],
        _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__["FooterModule"]] }); })();


/***/ }),

/***/ "r4vW":
/*!**********************************************!*\
  !*** ./projects/spoke/src/app/app.module.ts ***!
  \**********************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-google-analytics */ "Wdmj");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "9GfF");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "rTas");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "tzGU");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "j5Af");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__["NgxGoogleAnalyticsModule"].forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].googleAnalyticsTag),
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__["NgxGoogleAnalyticsRouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__["NgxGoogleAnalyticsModule"], ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__["NgxGoogleAnalyticsRouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]] }); })();


/***/ }),

/***/ "rTas":
/*!******************************************************!*\
  !*** ./projects/spoke/src/app/app-routing.module.ts ***!
  \******************************************************/
/*! exports provided: moduleNameForFeature, createFeatureLoader, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleNameForFeature", function() { return moduleNameForFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFeatureLoader", function() { return createFeatureLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




/**
 * Turns a kebab case (lower-case-hyphenated) feature name into
 * a Pascal case (UpperCasedFirstLetter) name with a 'Module' suffix added.
 * For routes generated/conforming to our naming convertion the resulting
 * name is the name of the main module exported by the feature.
 *
 * @param feature Kebab case name of feature
 * @returns Pascal case name with a 'Module' suffix
 */
function moduleNameForFeature(feature) {
    const toUpperCase = (text) => text.slice(-1).toUpperCase();
    return feature.replace(/^\w|-\w/g, toUpperCase) + 'Module';
}
/**
 * Creates a callback that when invoked loads the specified feature
 * module in the features directory.
 *
 * @param feature Feature to load
 * @param module Module name if it differce from the standard naming convention
 * @returns The loader callback
 */
/* istanbul ignore next */
function createFeatureLoader(feature, module) {
    const moduleProp = module !== null && module !== void 0 ? module : moduleNameForFeature(feature);
    return () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        // This uses magic webpack comments
        // See: https://webpack.js.org/api/module-methods/#import-1
        const chunk = yield __webpack_require__("3EAi")(`./${feature}/${feature}.module`);
        return chunk === null || chunk === void 0 ? void 0 : chunk[moduleProp];
    });
}
/**
 * Root routes
 */
const ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        loadChildren: createFeatureLoader('home')
    },
    {
        path: 'visualization',
        loadChildren: createFeatureLoader('visualizations')
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(ROUTES)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "s7H+":
/*!***********************************************************!*\
  !*** ./projects/spoke/src/app/core/state/router.state.ts ***!
  \***********************************************************/
/*! exports provided: RouterState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterState", function() { return RouterState; });
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/router-plugin */ "TkeJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");





/**
 * Wrapper for @ngxs/router-plugin:RouterState
 * Implements much of the same interface as @ngxs-labs/data:AbstractRepository
 */
class RouterState {
    /**
     * Initializes the state
     *
     * @param route The currently active route
     * @param store The global state store
     */
    constructor(route, store) {
        this.route = route;
        this.store = store;
        /**
         * State name
         */
        this.name = 'router';
        /**
         * Default state value
         */
        this.initialState = undefined;
    }
    /**
     * State datastream
     */
    get state$() {
        return this.store.select(_ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_0__["RouterState"].state).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((state) => !!state));
    }
    /**
     * Current state value
     */
    get snapshot() {
        return this.store.selectSnapshot(_ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_0__["RouterState"].state);
    }
    /**
     * Gets the current state
     *
     * @returns The current state
     */
    getState() {
        return this.snapshot;
    }
    /**
     * Dispatches one or more actions on the store
     *
     * @param actions Actions to dispatch
     * @returns An observable that completes when the actions have been dispatched
     */
    dispatch(actions) {
        return this.store.dispatch(actions);
    }
    /**
     * Resets the router state
     */
    reset() {
        // Intentionally blank
    }
    /**
     * Navigate to a new url
     *
     * @param path Url path segments
     * @param queryParams Query parameters
     * @param extras Additional options
     */
    navigate(path, queryParams, extras = {}) {
        const relativeTo = extras.relativeTo === 'current' ? this.route : extras.relativeTo;
        this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_0__["Navigate"](path, queryParams, Object.assign(Object.assign({}, extras), { relativeTo })));
    }
    /**
     * Adds and updates query parameters for the current route
     *
     * @param queryParams Parameters to add and update
     */
    addQueryParams(queryParams) {
        this.navigate([], queryParams, {
            relativeTo: 'current',
            queryParamsHandling: 'merge',
            preserveFragment: true,
            replaceUrl: true
        });
    }
}
RouterState.ɵfac = function RouterState_Factory(t) { return new (t || RouterState)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
RouterState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RouterState, factory: RouterState.ɵfac });


/***/ }),

/***/ "tzGU":
/*!*************************************************!*\
  !*** ./projects/spoke/src/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-google-analytics */ "Wdmj");
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/components/header/header.component */ "D6m2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/footer/footer.component */ "Wfog");







class AppComponent {
    constructor(elementRef, ga) {
        const container = elementRef.nativeElement;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(container, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((event) => {
            const label = `${event.clientX}_${event.clientY}_${container.clientWidth}_${container.clientHeight}`;
            ga.event('webpage', 'mousemove', label);
        })).subscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_3__["GoogleAnalyticsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["spoke-root"]], decls: 4, vars: 0, consts: [[1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "spoke-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "spoke-footer");
    } }, directives: [_core_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: calc(100% - 5rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLHlCQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5jb250ZW50IHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDVyZW0pO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map