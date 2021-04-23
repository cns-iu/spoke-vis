(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "IKrm":
/*!****************************************************************!*\
  !*** ./projects/spoke/src/app/features/home/home.component.ts ***!
  \****************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-google-analytics */ "Wdmj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HomeComponent {
    constructor(ga) {
        this.ga = ga;
    }
    logClick(siteName) {
        this.ga.event('home_view', 'link_click', siteName);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__["GoogleAnalyticsService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["spoke-home"]], decls: 40, vars: 0, consts: [[1, "white-space"], [1, "background-box"], [1, "inner-box"], [1, "content"], [1, "title"], [1, "text"], ["rel", "noopener", "target", "_blank", "href", "https://spoke.ucsf.edu/", 3, "click"], [1, "columns-container"], [1, "left-column"], ["rel", "noopener", "target", "_blank", "href", "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2033569&HistoricalAwards=false", 3, "click"], ["routerLink", "/visualization/overview", 1, "go-to-button", 3, "click"], [1, "right-column"], ["src", "assets/images/network-image.png", "alt", "An image of an example network"], [1, "logos"], ["rel", "noopener", "target", "_blank", "href", "https://www.nsf.gov", 3, "click"], ["src", "assets/logos/NSF_4-Color_bitmap_Logo-sm.svg", "alt", "NSF logo"], ["rel", "noopener", "target", "_blank", "href", "https://ncats.nih.gov", 3, "click"], ["src", "assets/logos/ncats-logo.png", "alt", "NIH logo"], ["rel", "noopener", "target", "_blank", "href", "https://www.ucsf.edu", 3, "click"], ["src", "assets/logos/ucsf-logo.svg", "alt", "UCSF logo"], ["rel", "noopener", "target", "_blank", "href", "https://cns.iu.edu", 3, "click"], ["src", "assets/logos/cns-logo.svg", "alt", "CNS logo"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Envisioning SPOKE: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 3M Nodes and 30M Edges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " The Scalable Precision Medicine Oriented Knowledge Engine (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_10_listener() { return ctx.logClick("spoke.ucsf.edu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SPOKE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ") graph federates about 19 open datasets into a public data commons of health relevant knowledge. This site lets users explore the massive SPOKE knowledge graph. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " The site was designed for two user groups: (1) novice users interested to understand the coverage and quality of SPOKE data and (2) expert users interested to analyze and optimize the interlinked knowledge graphs in SPOKE. The overview visualization shows the different entity type and their diverse interlinkages. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " This project is funded by NSF award ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_21_listener() { return ctx.logClick("nsf_award"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "2033569");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " SPOKE is a fully interactive tool for exploring the interconnections between data. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_27_listener() { return ctx.logClick("spoke_visualization"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Go To SPOKE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_32_listener() { return ctx.logClick("www.nsf.gov"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_34_listener() { return ctx.logClick("ncats.nih.gov"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_36_listener() { return ctx.logClick("www.ucsf.edu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_38_listener() { return ctx.logClick("cns.iu.edu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #F2F4F6;\n  overflow-y: scroll;\n  font-family: \u2018Roboto\u2019, sans-serif;\n}\n[_nghost-%COMP%]   .white-space[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2.5rem;\n  background-color: white;\n}\n[_nghost-%COMP%]   .background-box[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 90rem;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 9rem;\n  background-image: url('img-banner-network.jpg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: top center;\n}\n[_nghost-%COMP%]   .background-box[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%] {\n  max-width: 66rem;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: white;\n}\n[_nghost-%COMP%]   .background-box[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 7.125rem;\n  margin-bottom: 2.25rem;\n}\n[_nghost-%COMP%]   .background-box[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  line-height: 4rem;\n  margin-bottom: 3.75rem;\n  color: #052049;\n  font-family: \u2018EB Garamond\u2019, serif;\n}\n[_nghost-%COMP%]   .background-box[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-bottom: 5rem;\n  font-size: 1rem;\n  line-height: 1.875rem;\n  position: relative;\n}\n[_nghost-%COMP%]   .background-box[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007cbe;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .background-box[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #005C8C;\n}\n[_nghost-%COMP%]   .background-box[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .columns-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .background-box[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .columns-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%] {\n  width: 60%;\n}\n[_nghost-%COMP%]   .background-box[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .columns-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .go-to-button[_ngcontent-%COMP%] {\n  background-color: #007cbe;\n  color: #F2F4F6;\n  height: 2.5rem;\n  margin-top: 2.5rem;\n  cursor: pointer;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-top: 0.3rem;\n}\n[_nghost-%COMP%]   .background-box[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .columns-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .go-to-button[_ngcontent-%COMP%]:hover {\n  background-color: #005C8C;\n}\n[_nghost-%COMP%]   .background-box[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .columns-container[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%] {\n  width: 35%;\n  padding-top: 2.5rem;\n}\n[_nghost-%COMP%]   .background-box[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .columns-container[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n[_nghost-%COMP%]   .background-box[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 5rem;\n  width: 100%;\n  height: 2.5rem;\n}\n[_nghost-%COMP%]   .background-box[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBRUY7QUFBRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFFSjtBQUNFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0NBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUFDSjtBQUNJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQ047QUFDTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUNSO0FBQ1E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QUFDVjtBQUVRO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFBVjtBQUVVO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBQVo7QUFFWTtFQUNFLGNBQUE7QUFBZDtBQUlVO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBRlo7QUFJWTtFQUNFLFVBQUE7QUFGZDtBQUljO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUFnQiwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDaEIsb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBRGhCO0FBR2dCO0VBQ0UseUJBQUE7QUFEbEI7QUFNWTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQUpkO0FBTWM7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUpoQjtBQVVRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBUlY7QUFVVTtFQUNFLGNBQUE7QUFSWiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjRGNjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBmb250LWZhbWlseTog4oCYUm9ib3Rv4oCZLCBzYW5zLXNlcmlmO1xuXG4gIC53aGl0ZS1zcGFjZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICAuYmFja2dyb3VuZC1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogOTByZW07XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiA5cmVtO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9zcmMvYXNzZXRzL2ltYWdlcy9pbWctYmFubmVyLW5ldHdvcmsuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcblxuICAgIC5pbm5lci1ib3gge1xuICAgICAgbWF4LXdpZHRoOiA2NnJlbTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogNy4xMjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIuMjVyZW07XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNHJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzLjc1cmVtO1xuICAgICAgICAgIGNvbG9yOiAjMDUyMDQ5O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiDigJhFQiBHYXJhbW9uZOKAmSwgc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS44NzVyZW07XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogIzAwN2NiZTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDA1QzhDO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb2x1bW5zLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICAubGVmdC1jb2x1bW4ge1xuICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuXG4gICAgICAgICAgICAgIC5nby10by1idXR0b24ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdjYmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNGMkY0RjY7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMi41cmVtO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjt3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAuM3JlbTtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNUM4QztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJpZ2h0LWNvbHVtbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzNSU7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG5cbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubG9nb3Mge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgcGFkZGluZy10b3A6IDVyZW07XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "WmRT":
/*!********************************************************************!*\
  !*** ./projects/spoke/src/app/features/home/state/state.module.ts ***!
  \********************************************************************/
/*! exports provided: StateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateModule", function() { return StateModule; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const STATES = [];
class StateModule {
}
StateModule.ɵfac = function StateModule_Factory(t) { return new (t || StateModule)(); };
StateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StateModule });
StateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _ngxs_store__WEBPACK_IMPORTED_MODULE_0__["NgxsModule"].forFeature(STATES),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StateModule, { imports: [_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["ɵbc"]] }); })();


/***/ }),

/***/ "iUYP":
/*!*********************************************************************!*\
  !*** ./projects/spoke/src/app/features/home/home-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "IKrm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




/**
 * Subroutes
 */
const ROUTES = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(ROUTES)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "n2xq":
/*!*************************************************************!*\
  !*** ./projects/spoke/src/app/features/home/home.module.ts ***!
  \*************************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ "iUYP");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "IKrm");
/* harmony import */ var _state_state_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/state.module */ "WmRT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"],
            _state_state_module__WEBPACK_IMPORTED_MODULE_3__["StateModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"],
        _state_state_module__WEBPACK_IMPORTED_MODULE_3__["StateModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map