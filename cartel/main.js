"use strict";
(self["webpackChunkcartel"] = self["webpackChunkcartel"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_pages_editable_page_editable_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/editable-page/editable-page.component */ 9247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    //PARA CARTEL SOLO SE DEJA ASI
    { path: '', pathMatch: 'full', component: _components_pages_editable_page_editable_page_component__WEBPACK_IMPORTED_MODULE_0__.EditablePageComponent },
    //PARA GENERAR EL PREVIEW DESCOMENTAR ESTE Y COMENTAR EL DE ARRIBA
    //{ path: '',  component: PreviewPageComponent },
    //{ path: 'preview',  component: PreviewPageComponent},
    //{ path: '**', redirectTo: ''},
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { useHash: true }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/services/api.service */ 2250);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AppComponent {
    constructor(apiService) {
        this.apiService = apiService;
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_components_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 3889);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wow */ 8048);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 9201);
/* harmony import */ var _components_herramienta_herramienta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/herramienta/herramienta.component */ 6307);
/* harmony import */ var _components_herramientas_formato_formato_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/herramientas/formato/formato.component */ 4975);
/* harmony import */ var _components_herramientas_file_options_file_options_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/herramientas/file-options/file-options.component */ 728);
/* harmony import */ var _components_formats_format_one_format_one_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/formats/format-one/format-one.component */ 1614);
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/banner/banner.component */ 3994);
/* harmony import */ var _components_sections_titulo_text_titulo_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sections/titulo-text/titulo-text.component */ 982);
/* harmony import */ var _components_sections_caja_texto_caja_texto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sections/caja-texto/caja-texto.component */ 4834);
/* harmony import */ var _components_formats_format_two_format_two_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/formats/format-two/format-two.component */ 5861);
/* harmony import */ var _components_formats_format_three_format_three_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/formats/format-three/format-three.component */ 3726);
/* harmony import */ var _components_herramientas_color_color_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/herramientas/color/color.component */ 4897);
/* harmony import */ var _components_sections_image_input_image_input_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sections/image-input/image-input.component */ 3436);
/* harmony import */ var _components_sections_multiimage_input_multiimage_input_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/sections/multiimage-input/multiimage-input.component */ 7232);
/* harmony import */ var _components_pages_editable_page_editable_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/editable-page/editable-page.component */ 9247);
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dialog/dialog.component */ 9509);
/* harmony import */ var _components_pages_preview_page_preview_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pages/preview-page/preview-page.component */ 8220);
/* harmony import */ var _components_image_out_image_out_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/image-out/image-out.component */ 9319);
/* harmony import */ var _components_multiimage_out_multiimage_out_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/multiimage-out/multiimage-out.component */ 9107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 2560);

 //PARA TINYMCE
 //PARA EL RUTEO

 //PARA ANIMACIONES

 //PARA HACER PETICIONES
//import { NgImageSliderComponent } from 'ng-image-slider';//PARA EL CARROUSEL



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_23__.EditorModule,
        ngx_wow__WEBPACK_IMPORTED_MODULE_2__.NgwWowModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent,
        _components_herramienta_herramienta_component__WEBPACK_IMPORTED_MODULE_4__.HerramientaComponent,
        _components_herramientas_formato_formato_component__WEBPACK_IMPORTED_MODULE_5__.FormatoComponent,
        _components_herramientas_file_options_file_options_component__WEBPACK_IMPORTED_MODULE_6__.FileOptionsComponent,
        _components_formats_format_one_format_one_component__WEBPACK_IMPORTED_MODULE_7__.FormatOneComponent,
        _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_8__.BannerComponent,
        _components_sections_titulo_text_titulo_text_component__WEBPACK_IMPORTED_MODULE_9__.TituloTextComponent,
        _components_sections_caja_texto_caja_texto_component__WEBPACK_IMPORTED_MODULE_10__.CajaTextoComponent,
        _components_formats_format_two_format_two_component__WEBPACK_IMPORTED_MODULE_11__.FormatTwoComponent,
        _components_formats_format_three_format_three_component__WEBPACK_IMPORTED_MODULE_12__.FormatThreeComponent,
        _components_herramientas_color_color_component__WEBPACK_IMPORTED_MODULE_13__.ColorComponent,
        _components_sections_image_input_image_input_component__WEBPACK_IMPORTED_MODULE_14__.ImageInputComponent,
        _components_sections_multiimage_input_multiimage_input_component__WEBPACK_IMPORTED_MODULE_15__.MultiimageInputComponent,
        _components_pages_editable_page_editable_page_component__WEBPACK_IMPORTED_MODULE_16__.EditablePageComponent,
        _components_pages_preview_page_preview_page_component__WEBPACK_IMPORTED_MODULE_18__.PreviewPageComponent,
        _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_17__.DialogComponent,
        _components_image_out_image_out_component__WEBPACK_IMPORTED_MODULE_19__.ImageOutComponent,
        _components_multiimage_out_multiimage_out_component__WEBPACK_IMPORTED_MODULE_20__.MultiimageOutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_23__.EditorModule,
        ngx_wow__WEBPACK_IMPORTED_MODULE_2__.NgwWowModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HttpClientModule] }); })();


/***/ }),

/***/ 3994:
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 3, vars: 0, consts: [[1, "banner"], [2, "text-align", "center"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: [".banner[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 7%;\r\n    background-color: #ddc2d9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJiYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRjMmQ5O1xyXG59Il19 */"] });


/***/ }),

/***/ 9509:
/*!*******************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogComponent": () => (/* binding */ DialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DialogComponent {
    constructor() { }
    ngOnInit() {
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(); };
DialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["app-dialog"]], decls: 2, vars: 0, consts: [[2, "position", "relative"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dialog works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1614:
/*!***********************************************************************!*\
  !*** ./src/app/components/formats/format-one/format-one.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatOneComponent": () => (/* binding */ FormatOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 2250);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../banner/banner.component */ 3994);
/* harmony import */ var _sections_titulo_text_titulo_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sections/titulo-text/titulo-text.component */ 982);
/* harmony import */ var _sections_caja_texto_caja_texto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sections/caja-texto/caja-texto.component */ 4834);
/* harmony import */ var _sections_image_input_image_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sections/image-input/image-input.component */ 3436);
/* harmony import */ var _sections_multiimage_input_multiimage_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sections/multiimage-input/multiimage-input.component */ 7232);
/* harmony import */ var _image_out_image_out_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../image-out/image-out.component */ 9319);
/* harmony import */ var _multiimage_out_multiimage_out_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../multiimage-out/multiimage-out.component */ 9107);










function FormatOneComponent_app_image_input_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-image-input", 31);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("urlImg", ctx_r0.graficas);
} }
function FormatOneComponent_app_image_out_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-image-out", 32);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("url", ctx_r1.graficasR[0]);
} }
function FormatOneComponent_app_image_input_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-image-input", 33);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("urlImg", ctx_r2.graficas);
} }
function FormatOneComponent_app_image_out_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-image-out", 32);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("url", ctx_r3.graficasR[1]);
} }
function FormatOneComponent_app_multiimage_input_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-multiimage-input", 34);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("paths", ctx_r4.images);
} }
function FormatOneComponent_app_multiimage_out_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-multiimage-out", 35);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isFullScreen", true)("items", ctx_r5.imagesR);
} }
//CLASE QUE TIENE EL FORMATO 1
class FormatOneComponent {
    //SE INYECTA SERVICIO
    constructor(apiS) {
        this.apiS = apiS;
        //ENTRADAS DE READONLY
        this.disabled = false; //dice si esta en modo readonly
        this.graficasR = [];
        this.imagesR = [];
        //ENTRADAS
        //COLOR DE FONDO DE TITULO
        this.titulo_bg = "";
        //COLOR DE FONDO DE SUBTITULOS
        this.subtitulos_color = "";
        //COLOR DE FONDO DE APARTADOS
        this.apartados_bg = "";
        //CUANDO SE EMITE EL READONLY
        apiS.readonly.subscribe(() => {
            //CAPTA EL MODO READONLY
            this.disabled = true;
        });
    }
    ngOnInit() {
    }
}
FormatOneComponent.ɵfac = function FormatOneComponent_Factory(t) { return new (t || FormatOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
FormatOneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: FormatOneComponent, selectors: [["app-format-one"]], inputs: { graficasR: "graficasR", imagesR: "imagesR", titulo_bg: "titulo_bg", subtitulos_color: "subtitulos_color", apartados_bg: "apartados_bg", cartel: "cartel", graficas: "graficas", images: "images" }, decls: 48, vars: 41, consts: [[2, "padding-left", "1vw", "padding-right", "1vw", "padding-top", "1vh", "padding-bottom", "1vh", "width", "100%", "height", "94%"], [2, "height", "8%"], [3, "titulo_bg", "html", "cartel"], [1, "secciones"], [2, "width", "100%", "height", "100%", "position", "relative", "padding-right", "1vw"], [2, "width", "100%", "height", "100%"], [1, "secc1"], [1, "apartado"], [2, "height", "100%", "width", "100%"], ["titulo", "Introducci\u00F3n", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], [2, "position", "relative", "height", "100%", "width", "100%"], ["titulo", "Objetivos", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], ["titulo", "Metodolog\u00EDa", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], [2, "position", "relative", "width", "100%", "height", "100%"], [1, "secc2"], [1, "apartado_res_g1_g2"], [2, "padding-bottom", "1vw", "height", "100%", "width", "100%", "position", "relative"], ["titulo", "Resultados", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], [2, "padding-bottom", "1vw", "position", "relative", "height", "100%"], ["label", "Gr\u00E1fica 1", "tipo", "GRAF1", 3, "urlImg", 4, "ngIf"], [3, "url", 4, "ngIf"], ["label", "Gr\u00E1fica 2", "tipo", "GRAF2", 3, "urlImg", 4, "ngIf"], [3, "paths", 4, "ngIf"], [3, "isFullScreen", "items", 4, "ngIf"], [2, "position", "relative", "width", "100%", "height", "100%", "padding-left", "1vw"], [1, "secc3"], [2, "height", "100%", "width", "100%", "position", "relative"], ["titulo", "Conclusi\u00F3n", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], ["titulo", "Referencias", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], ["titulo", "Datos de Contacto", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], ["titulo", "Agradecimientos", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], ["label", "Gr\u00E1fica 1", "tipo", "GRAF1", 3, "urlImg"], [3, "url"], ["label", "Gr\u00E1fica 2", "tipo", "GRAF2", 3, "urlImg"], [3, "paths"], [3, "isFullScreen", "items"]], template: function FormatOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-titulo-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "app-caja-texto", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 7)(12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "app-caja-texto", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div")(15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "app-caja-texto", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 13)(18, "div", 5)(19, "div", 14)(20, "div", 7)(21, "div", 15)(22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "app-caja-texto", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, FormatOneComponent_app_image_input_25_Template, 1, 1, "app-image-input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, FormatOneComponent_app_image_out_26_Template, 1, 1, "app-image-out", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, FormatOneComponent_app_image_input_28_Template, 1, 1, "app-image-input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, FormatOneComponent_app_image_out_29_Template, 1, 1, "app-image-out", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, FormatOneComponent_app_multiimage_input_31_Template, 1, 1, "app-multiimage-input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, FormatOneComponent_app_multiimage_out_32_Template, 1, 2, "app-multiimage-out", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 24)(34, "div", 13)(35, "div", 25)(36, "div", 7)(37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "app-caja-texto", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 7)(40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "app-caja-texto", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 7)(43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](44, "app-caja-texto", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div")(46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](47, "app-caja-texto", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("titulo_bg", ctx.titulo_bg)("html", ctx.cartel.titulo)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.intro)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.objetivos)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.metodologia)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.resultados)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.conclusion)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.referencias)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.datos_contacto)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.agradecimientos)("cartel", ctx.cartel);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__.BannerComponent, _sections_titulo_text_titulo_text_component__WEBPACK_IMPORTED_MODULE_2__.TituloTextComponent, _sections_caja_texto_caja_texto_component__WEBPACK_IMPORTED_MODULE_3__.CajaTextoComponent, _sections_image_input_image_input_component__WEBPACK_IMPORTED_MODULE_4__.ImageInputComponent, _sections_multiimage_input_multiimage_input_component__WEBPACK_IMPORTED_MODULE_5__.MultiimageInputComponent, _image_out_image_out_component__WEBPACK_IMPORTED_MODULE_6__.ImageOutComponent, _multiimage_out_multiimage_out_component__WEBPACK_IMPORTED_MODULE_7__.MultiimageOutComponent], styles: [".secciones[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    display: grid;\r\n    height: 90%;\r\n    width: 100%;\r\n    grid-template-columns: 24% auto 24%;\r\n    padding-top:10px;\r\n}\r\n\r\n.secc1[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    display: grid;\r\n    grid-template-rows: 25% 25% 50%;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.apartado[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%; \r\n    padding-bottom: 10px;\r\n}\r\n\r\n.secc2[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-rows: 80% 20%;\r\n}\r\n\r\n.secc3[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-rows: 25% 25% 25% 25%;\r\n}\r\n\r\n.apartado_res_g1_g2[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    display: grid;\r\n    grid-template-rows: auto 30% 30%;\r\n    height: 100%;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1hdC1vbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJmb3JtYXQtb25lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjY2lvbmVze1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0JSBhdXRvIDI0JTtcclxuICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbn1cclxuXHJcbi5zZWNjMXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1JSAyNSUgNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFwYXJ0YWRve1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zZWNjMntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODAlIDIwJTtcclxufVxyXG4uc2VjYzN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1JSAyNSUgMjUlIDI1JTtcclxufVxyXG5cclxuLmFwYXJ0YWRvX3Jlc19nMV9nMntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMzAlIDMwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });


/***/ }),

/***/ 3726:
/*!***************************************************************************!*\
  !*** ./src/app/components/formats/format-three/format-three.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatThreeComponent": () => (/* binding */ FormatThreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 2250);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../banner/banner.component */ 3994);
/* harmony import */ var _sections_titulo_text_titulo_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sections/titulo-text/titulo-text.component */ 982);
/* harmony import */ var _sections_caja_texto_caja_texto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sections/caja-texto/caja-texto.component */ 4834);
/* harmony import */ var _sections_image_input_image_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sections/image-input/image-input.component */ 3436);
/* harmony import */ var _image_out_image_out_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../image-out/image-out.component */ 9319);








function FormatThreeComponent_app_image_input_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-image-input", 26);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("urlImg", ctx_r0.graficas);
} }
function FormatThreeComponent_app_image_out_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-image-out", 27);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("url", ctx_r1.graficasR[0]);
} }
function FormatThreeComponent_app_image_input_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-image-input", 28);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("urlImg", ctx_r2.images);
} }
function FormatThreeComponent_app_image_out_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-image-out", 27);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("url", ctx_r3.imagesR[0].image);
} }
function FormatThreeComponent_app_image_input_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-image-input", 29);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("urlImg", ctx_r4.graficas);
} }
function FormatThreeComponent_app_image_out_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-image-out", 27);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("url", ctx_r5.graficasR[1]);
} }
function FormatThreeComponent_app_image_input_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-image-input", 30);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("urlImg", ctx_r6.images);
} }
function FormatThreeComponent_app_image_out_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-image-out", 27);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("url", ctx_r7.imagesR[1].image);
} }
class FormatThreeComponent {
    //SE INYECTA SERVICIO
    constructor(apiS) {
        this.apiS = apiS;
        //ENTRADAS DE READONLY
        this.disabled = false; //dice si esta en modo readonly
        this.graficasR = [];
        this.imagesR = [];
        //ENTRADAS
        this.titulo_bg = "";
        //COLOR DE FONDO DE SUBTITULOS
        this.subtitulos_color = "";
        //COLOR DE FONDO DE APARTADOS
        this.apartados_bg = "";
        //CUANDO SE EMITE EL READONLY
        apiS.readonly.subscribe(() => {
            this.disabled = true;
        });
    }
    ngOnInit() {
    }
}
FormatThreeComponent.ɵfac = function FormatThreeComponent_Factory(t) { return new (t || FormatThreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
FormatThreeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: FormatThreeComponent, selectors: [["app-format-three"]], inputs: { graficasR: "graficasR", imagesR: "imagesR", titulo_bg: "titulo_bg", subtitulos_color: "subtitulos_color", apartados_bg: "apartados_bg", cartel: "cartel", graficas: "graficas", images: "images" }, decls: 39, vars: 39, consts: [[2, "padding-left", "1vw", "padding-right", "1vw", "padding-top", "1vh", "padding-bottom", "1vh", "width", "100%", "height", "93%", "display", "flex", "flex-direction", "column"], [2, "height", "7%"], [3, "titulo_bg", "html", "cartel"], [1, "row", 2, "height", "16%", "margin-top", "1vh", "padding-left", "1vw", "padding-right", "1vw"], [1, "col-6", 2, "padding-right", "1vw", "padding-left", "0%"], ["titulo", "Introducci\u00F3n", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], [1, "col-6", 2, "padding-left", "1vw", "padding-right", "0vw"], ["titulo", "Metodolog\u00EDa", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], ["titulo", "Objetivos", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], [1, "col-6", 2, "padding-left", "1vw", "padding-right", "0%"], ["titulo", "Resultados", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], [1, "row", 2, "height", "15%", "margin-top", "1vh", "padding-left", "3vw", "padding-right", "3vw"], [1, "col-6", 2, "padding-right", "1vw", "padding-left", "0%", "height", "100%"], [2, "height", "100%"], ["label", "Gr\u00E1fica 1", "tipo", "GRAF1", 3, "urlImg", 4, "ngIf"], [3, "url", 4, "ngIf"], [1, "col-6", 2, "padding-left", "1vw", "padding-right", "0%", "height", "100%"], ["label", "Imagen 1", "tipo", "IMG1", 3, "urlImg", 4, "ngIf"], ["label", "Gr\u00E1fica 2", "tipo", "GRAF2", 3, "urlImg", 4, "ngIf"], ["label", "Imagen 2", "tipo", "IMG2", 3, "urlImg", 4, "ngIf"], [1, "row", 2, "flex", "auto", "padding-left", "1vw", "padding-right", "1vw", "padding-top", "1vh"], [1, "row", 2, "height", "40%", "padding-bottom", "1vh"], ["titulo", "Conclusi\u00F3n", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], ["titulo", "Referencias", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], [1, "row", 2, "height", "20%"], ["titulo", "Datos de Contacto", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], ["label", "Gr\u00E1fica 1", "tipo", "GRAF1", 3, "urlImg"], [3, "url"], ["label", "Imagen 1", "tipo", "IMG1", 3, "urlImg"], ["label", "Gr\u00E1fica 2", "tipo", "GRAF2", 3, "urlImg"], ["label", "Imagen 2", "tipo", "IMG2", 3, "urlImg"]], template: function FormatThreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-titulo-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-caja-texto", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "app-caja-texto", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3)(10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "app-caja-texto", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "app-caja-texto", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, FormatThreeComponent_app_image_input_17_Template, 1, 1, "app-image-input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, FormatThreeComponent_app_image_out_18_Template, 1, 1, "app-image-out", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 16)(20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, FormatThreeComponent_app_image_input_21_Template, 1, 1, "app-image-input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, FormatThreeComponent_app_image_out_22_Template, 1, 1, "app-image-out", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 11)(24, "div", 12)(25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, FormatThreeComponent_app_image_input_26_Template, 1, 1, "app-image-input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, FormatThreeComponent_app_image_out_27_Template, 1, 1, "app-image-out", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 16)(29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, FormatThreeComponent_app_image_input_30_Template, 1, 1, "app-image-input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, FormatThreeComponent_app_image_out_31_Template, 1, 1, "app-image-out", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 20)(33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "app-caja-texto", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "app-caja-texto", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "app-caja-texto", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("titulo_bg", ctx.titulo_bg)("html", ctx.cartel.titulo)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.intro)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.metodologia)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.objetivos)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.resultados)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.conclusion)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.referencias)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.datos_contacto)("cartel", ctx.cartel);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__.BannerComponent, _sections_titulo_text_titulo_text_component__WEBPACK_IMPORTED_MODULE_2__.TituloTextComponent, _sections_caja_texto_caja_texto_component__WEBPACK_IMPORTED_MODULE_3__.CajaTextoComponent, _sections_image_input_image_input_component__WEBPACK_IMPORTED_MODULE_4__.ImageInputComponent, _image_out_image_out_component__WEBPACK_IMPORTED_MODULE_5__.ImageOutComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtYXQtdGhyZWUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5861:
/*!***********************************************************************!*\
  !*** ./src/app/components/formats/format-two/format-two.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatTwoComponent": () => (/* binding */ FormatTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 2250);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../banner/banner.component */ 3994);
/* harmony import */ var _sections_titulo_text_titulo_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sections/titulo-text/titulo-text.component */ 982);
/* harmony import */ var _sections_caja_texto_caja_texto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sections/caja-texto/caja-texto.component */ 4834);
/* harmony import */ var _sections_image_input_image_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sections/image-input/image-input.component */ 3436);
/* harmony import */ var _sections_multiimage_input_multiimage_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sections/multiimage-input/multiimage-input.component */ 7232);
/* harmony import */ var _image_out_image_out_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../image-out/image-out.component */ 9319);
/* harmony import */ var _multiimage_out_multiimage_out_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../multiimage-out/multiimage-out.component */ 9107);










function FormatTwoComponent_app_image_input_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-image-input", 27);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("urlImg", ctx_r0.graficas);
} }
function FormatTwoComponent_app_image_out_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-image-out", 28);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("url", ctx_r1.graficasR[0]);
} }
function FormatTwoComponent_app_image_input_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-image-input", 29);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("urlImg", ctx_r2.graficas);
} }
function FormatTwoComponent_app_image_out_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-image-out", 28);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("url", ctx_r3.graficasR[1]);
} }
function FormatTwoComponent_app_multiimage_input_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-multiimage-input", 30);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("paths", ctx_r4.images);
} }
function FormatTwoComponent_app_multiimage_out_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-multiimage-out", 31);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isFullScreen", true)("items", ctx_r5.imagesR);
} }
class FormatTwoComponent {
    constructor(apiS) {
        this.apiS = apiS;
        //ENTRADAS DE READONLY
        this.disabled = false; //dice si esta en modo readonly
        this.graficasR = [];
        this.imagesR = [];
        //ENTRADAS
        this.titulo_bg = "";
        //COLOR DE FONDO DE SUBTITULOS
        this.subtitulos_color = "";
        //COLOR DE FONDO DE APARTADOS
        this.apartados_bg = "";
        //CUANDO SE EMITE EL READONLY
        apiS.readonly.subscribe(() => {
            this.disabled = true;
            console.log("poner disable");
        });
    }
    ngOnInit() {
    }
}
FormatTwoComponent.ɵfac = function FormatTwoComponent_Factory(t) { return new (t || FormatTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
FormatTwoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: FormatTwoComponent, selectors: [["app-format-two"]], inputs: { graficasR: "graficasR", imagesR: "imagesR", titulo_bg: "titulo_bg", subtitulos_color: "subtitulos_color", apartados_bg: "apartados_bg", cartel: "cartel", graficas: "graficas", images: "images" }, decls: 33, vars: 37, consts: [[2, "padding-left", "1vw", "padding-right", "1vw", "padding-top", "1vh", "padding-bottom", "1vh", "width", "100%", "height", "93%"], [2, "height", "8%"], [3, "titulo_bg", "html", "cartel"], [1, "intro"], ["titulo", "Introducci\u00F3n", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], [1, "objetivos"], ["titulo", "Objetivos", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], [1, "secciones"], [1, "secc1"], [1, "apartado"], [2, "height", "100%", "width", "100%", "display", "grid", "grid-template-rows", "50% 50"], [2, "height", "100%", "padding-bottom", "1vw"], ["label", "Gr\u00E1fica 1", "tipo", "GRAF1", 3, "urlImg", 4, "ngIf"], [3, "url", 4, "ngIf"], [2, "height", "100%"], ["label", "Gr\u00E1fica 2", "tipo", "GRAF2", 3, "urlImg", 4, "ngIf"], [1, "overflow-auto", "apartado", 2, "width", "100%", "height", "100%"], [3, "paths", 4, "ngIf"], [3, "isFullScreen", "items", 4, "ngIf"], [1, "secc2"], ["titulo", "Metodolog\u00EDa", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], [2, "background-color", "azure"], ["titulo", "Resultados", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], [1, "secc3"], ["titulo", "Conclusi\u00F3n", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], ["titulo", "Referencias", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], ["titulo", "Datos de Contacto", 3, "subtitulos_color", "apartados_bg", "html", "cartel"], ["label", "Gr\u00E1fica 1", "tipo", "GRAF1", 3, "urlImg"], [3, "url"], ["label", "Gr\u00E1fica 2", "tipo", "GRAF2", 3, "urlImg"], [3, "paths"], [3, "isFullScreen", "items"]], template: function FormatTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-titulo-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-caja-texto", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "app-caja-texto", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, FormatTwoComponent_app_image_input_13_Template, 1, 1, "app-image-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, FormatTwoComponent_app_image_out_14_Template, 1, 1, "app-image-out", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, FormatTwoComponent_app_image_input_16_Template, 1, 1, "app-image-input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, FormatTwoComponent_app_image_out_17_Template, 1, 1, "app-image-out", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, FormatTwoComponent_app_multiimage_input_19_Template, 1, 1, "app-multiimage-input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, FormatTwoComponent_app_multiimage_out_20_Template, 1, 2, "app-multiimage-out", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 19)(22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "app-caja-texto", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "app-caja-texto", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 23)(27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "app-caja-texto", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "app-caja-texto", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "app-caja-texto", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("titulo_bg", ctx.titulo_bg)("html", ctx.cartel.titulo)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.intro)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.objetivos)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.metodologia)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.resultados)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.conclusion)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.referencias)("cartel", ctx.cartel);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("subtitulos_color", ctx.subtitulos_color)("apartados_bg", ctx.apartados_bg)("html", ctx.cartel.datos_contacto)("cartel", ctx.cartel);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__.BannerComponent, _sections_titulo_text_titulo_text_component__WEBPACK_IMPORTED_MODULE_2__.TituloTextComponent, _sections_caja_texto_caja_texto_component__WEBPACK_IMPORTED_MODULE_3__.CajaTextoComponent, _sections_image_input_image_input_component__WEBPACK_IMPORTED_MODULE_4__.ImageInputComponent, _sections_multiimage_input_multiimage_input_component__WEBPACK_IMPORTED_MODULE_5__.MultiimageInputComponent, _image_out_image_out_component__WEBPACK_IMPORTED_MODULE_6__.ImageOutComponent, _multiimage_out_multiimage_out_component__WEBPACK_IMPORTED_MODULE_7__.MultiimageOutComponent], styles: [".intro[_ngcontent-%COMP%], .objetivos[_ngcontent-%COMP%]{\r\n    margin-top: 1vh;\r\n    height: 10%;\r\n}\r\n\r\n.secciones[_ngcontent-%COMP%]{\r\n    padding-top: 1vh;\r\n    height: 71%;\r\n    width: 100%;\r\n    \r\n    display: grid;\r\n    grid-template-columns: 27% auto 27%;\r\n}\r\n\r\n.secc1[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    padding-right: 5px;\r\n    display: grid;\r\n    grid-template-rows: 50% auto;\r\n}\r\n\r\n.secc2[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-rows: 45% auto;\r\n}\r\n\r\n.secc3[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    padding-left: 5px;\r\n    display: grid;\r\n    grid-template-rows: 40% 40% auto;\r\n}\r\n\r\n.apartado[_ngcontent-%COMP%]{\r\n    margin-bottom: 1vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1hdC10d28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7O0lBRVgsYUFBYTtJQUNiLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImZvcm1hdC10d28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRybywgLm9iamV0aXZvc3tcclxuICAgIG1hcmdpbi10b3A6IDF2aDtcclxuICAgIGhlaWdodDogMTAlO1xyXG59XHJcblxyXG4uc2VjY2lvbmVze1xyXG4gICAgcGFkZGluZy10b3A6IDF2aDtcclxuICAgIGhlaWdodDogNzElO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI3JSBhdXRvIDI3JTtcclxufVxyXG5cclxuLnNlY2Mxe1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgYXV0bztcclxufVxyXG5cclxuLnNlY2Mye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NSUgYXV0bztcclxufVxyXG4uc2VjYzN7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDAlIDQwJSBhdXRvO1xyXG59XHJcblxyXG4uYXBhcnRhZG97XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6307:
/*!*****************************************************************!*\
  !*** ./src/app/components/herramienta/herramienta.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HerramientaComponent": () => (/* binding */ HerramientaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _herramientas_formato_formato_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../herramientas/formato/formato.component */ 4975);
/* harmony import */ var _herramientas_file_options_file_options_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../herramientas/file-options/file-options.component */ 728);
/* harmony import */ var _herramientas_color_color_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../herramientas/color/color.component */ 4897);






function HerramientaComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-file-options");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HerramientaComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "app-formato", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("eventoDaFormato", function HerramientaComponent_div_7_div_2_Template_app_formato_eventoDaFormato_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.enviarFormato($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function HerramientaComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "app-color", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("eventColor", function HerramientaComponent_div_7_div_3_Template_app_color_eventColor_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.enviarColor($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function HerramientaComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HerramientaComponent_div_7_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, HerramientaComponent_div_7_div_2_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, HerramientaComponent_div_7_div_3_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.nombre_herramienta == "File");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.nombre_herramienta == "Formato");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.nombre_herramienta == "Color");
} }
class HerramientaComponent {
    constructor() {
        this.isCollapse = false;
        this.nombre_herramienta = "";
        //EVENTO PARA ENVIAR FORMATO
        this.eventFormato = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        //EVENTO PARA ENVIAR COLORES
        this.eventColor = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
    }
    //FUNCION QUE DESPLIEGA EL CONTENIDO DE LA HERRAMIENTA
    desplegar() {
        this.isCollapse = !this.isCollapse;
    }
    //FUNCION QUE ENVIA EL FORMATO AL SIDEBAR
    enviarFormato(formato) {
        this.eventFormato.emit(formato);
    }
    //FUNCION QUE ENVIA EL COLOR AL SIDEBAR
    enviarColor(color) {
        this.eventColor.emit(color);
    }
}
HerramientaComponent.ɵfac = function HerramientaComponent_Factory(t) { return new (t || HerramientaComponent)(); };
HerramientaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HerramientaComponent, selectors: [["app-herramienta"]], inputs: { nombre_herramienta: "nombre_herramienta" }, outputs: { eventFormato: "eventFormato", eventColor: "eventColor" }, decls: 8, vars: 2, consts: [[1, "row", "mt-3", "mx-0"], [1, "row", "head", 3, "click"], [1, "col-2"], [1, "bi", "bi-caret-right", "m-3"], [1, "col-auto"], ["class", "contenido fadeIn animated", 4, "ngIf"], [1, "contenido", "fadeIn", "animated"], [4, "ngIf"], [3, "eventoDaFormato"], [3, "eventColor"]], template: function HerramientaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HerramientaComponent_Template_div_click_1_listener() { return ctx.desplegar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, HerramientaComponent_div_7_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.nombre_herramienta);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCollapse);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _herramientas_formato_formato_component__WEBPACK_IMPORTED_MODULE_0__.FormatoComponent, _herramientas_file_options_file_options_component__WEBPACK_IMPORTED_MODULE_1__.FileOptionsComponent, _herramientas_color_color_component__WEBPACK_IMPORTED_MODULE_2__.ColorComponent], styles: [".head[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.contenido[_ngcontent-%COMP%]{\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcnJhbWllbnRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6ImhlcnJhbWllbnRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29udGVuaWRve1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 4897:
/*!******************************************************************!*\
  !*** ./src/app/components/herramientas/color/color.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorComponent": () => (/* binding */ ColorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _interface_color_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interface/color.class */ 5362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);




class ColorComponent {
    constructor() {
        //CONTIENE EL COLOR CAMBIADO DEPENDIENDO EL COMPONENTE 
        this.color = ["", "", "", ""]; //0:fondo,1:titulo,2:subtítulo,3:apartados
        this.eventColor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
    //FUNCION QUE CAMBIA EL COLOR, emite el color obtenido
    cambiarColor(index) {
        this.eventColor.emit(new _interface_color_class__WEBPACK_IMPORTED_MODULE_0__.Color(this.color[index], index));
    }
}
ColorComponent.ɵfac = function ColorComponent_Factory(t) { return new (t || ColorComponent)(); };
ColorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ColorComponent, selectors: [["app-color"]], outputs: { eventColor: "eventColor" }, decls: 18, vars: 4, consts: [[1, "list-group"], [1, "list-group-item", 2, "text-align", "center"], [1, "row", "justify-content-center"], ["type", "color", 1, "form-control", "form-control-color", 3, "ngModel", "input", "ngModelChange"]], template: function ColorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Color del lienzo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ColorComponent_Template_input_input_5_listener() { return ctx.cambiarColor(0); })("ngModelChange", function ColorComponent_Template_input_ngModelChange_5_listener($event) { return (ctx.color[0] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Fondo del t\u00EDtulo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2)(9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ColorComponent_Template_input_input_9_listener() { return ctx.cambiarColor(1); })("ngModelChange", function ColorComponent_Template_input_ngModelChange_9_listener($event) { return (ctx.color[1] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Fondo de subt\u00EDtulos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2)(13, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ColorComponent_Template_input_input_13_listener() { return ctx.cambiarColor(2); })("ngModelChange", function ColorComponent_Template_input_ngModelChange_13_listener($event) { return (ctx.color[2] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Fondo de apartados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 2)(17, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ColorComponent_Template_input_input_17_listener() { return ctx.cambiarColor(3); })("ngModelChange", function ColorComponent_Template_input_ngModelChange_17_listener($event) { return (ctx.color[3] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.color[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.color[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.color[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.color[3]);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xvci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 728:
/*!********************************************************************************!*\
  !*** ./src/app/components/herramientas/file-options/file-options.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileOptionsComponent": () => (/* binding */ FileOptionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 2250);


class FileOptionsComponent {
    //INYECTA SEVICIO
    constructor(apiS) {
        this.apiS = apiS;
    }
    ngOnInit() {
    }
    // FUNCION QUE EMITE LA SEÑAL DE GUARDADO 
    emitSave() {
        //emite señal de guardado
        this.apiS.servicioGuardado();
    }
    // FUNCION QUE EMITE LA SEÑAL DE preview 
    emitPreview() {
        //emite señal de guardado
        this.apiS.servicioPreview();
    }
    // FUNCION QUE EMITE LA SEÑAL DE FINALIZADO/PUBLICAR 
    emitFinalize() {
        //emite señal de guardado
        this.apiS.servicioFinalize();
    }
}
FileOptionsComponent.ɵfac = function FileOptionsComponent_Factory(t) { return new (t || FileOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
FileOptionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FileOptionsComponent, selectors: [["app-file-options"]], decls: 8, vars: 0, consts: [[1, "list-group"], [1, "list-group-item", "options", 3, "click"]], template: function FileOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileOptionsComponent_Template_button_click_2_listener() { return ctx.emitPreview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileOptionsComponent_Template_button_click_4_listener() { return ctx.emitSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileOptionsComponent_Template_button_click_6_listener() { return ctx.emitFinalize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Finalizar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLW9wdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 4975:
/*!**********************************************************************!*\
  !*** ./src/app/components/herramientas/formato/formato.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatoComponent": () => (/* binding */ FormatoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 2250);



class FormatoComponent {
    constructor(apiService) {
        this.apiService = apiService;
        //EVENTO QUE EMITIRA EL TIPO DE FORMATO
        this.eventoDaFormato = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
    onclick(tipo, element) {
        // var formatos:HTMLCollectionOf<Element>=document.getElementsByClassName("options");
        // for(let i=0;i<formatos.length;i++){
        //   formatos.item(i)?.setAttribute("style","background-color:'white';");
        // }
        // element.style.backgroundColor="#d8bfd5"
        //SE EMITE EL TIPO DE FORMATO QUE SELECCIONÓ
        this.eventoDaFormato.emit(tipo);
        //ACTUALIZA LOS DATOS
        this.apiService.servicioActualiza();
        console.log("formato actual forms " + tipo);
    }
}
FormatoComponent.ɵfac = function FormatoComponent_Factory(t) { return new (t || FormatoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
FormatoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormatoComponent, selectors: [["app-formato"]], outputs: { eventoDaFormato: "eventoDaFormato" }, decls: 11, vars: 0, consts: [[1, "list-group"], [1, "list-group-item", "options", 3, "click"], ["formato1", ""], ["formato2", ""], ["formato3", ""]], template: function FormatoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "button", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormatoComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onclick("f1", _r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Formato1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 1, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormatoComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onclick("f2", _r1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Formato2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 1, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormatoComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onclick("f3", _r2)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Formato3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtYXRvLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 9319:
/*!*************************************************************!*\
  !*** ./src/app/components/image-out/image-out.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageOutComponent": () => (/* binding */ ImageOutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ImageOutComponent {
    constructor() {
        //ES EL LINK DE LA IMAGEN DEL COMPONENTE
        this.url = "https://images.hola.com/imagenes/mascotas/20221020219416/razas-perros-toy/1-154-385/razas-de-perro-toy-t.jpg";
    }
    ngOnInit() {
    }
}
ImageOutComponent.ɵfac = function ImageOutComponent_Factory(t) { return new (t || ImageOutComponent)(); };
ImageOutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageOutComponent, selectors: [["app-image-out"]], inputs: { url: "url" }, decls: 2, vars: 1, consts: [[2, "height", "100%", "margin-left", "auto", "margin-right", "auto", "width", "80%"], [2, "height", "100%", "object-fit", "contain", 3, "src"]], template: function ImageOutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS1vdXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5362:
/*!*****************************************************!*\
  !*** ./src/app/components/interface/color.class.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color)
/* harmony export */ });
class Color {
    constructor(color, index) {
        this.color = "";
        this.index = 0;
        this.color = color;
        this.index = index;
    }
}


/***/ }),

/***/ 9107:
/*!***********************************************************************!*\
  !*** ./src/app/components/multiimage-out/multiimage-out.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiimageOutComponent": () => (/* binding */ MultiimageOutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) { return { "background-image": a0, "margin-left": a1 }; };
function MultiimageOutComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const section_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, "url(" + section_r2.image + ")", section_r2.marginLeft + "%"));
} }
function MultiimageOutComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiimageOutComponent_div_9_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.setCurrentPosition(item_r3.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "minHeight": a0 }; };
class MultiimageOutComponent {
    constructor() {
        /*
        Input Properties
      
         */
        this.height = 500; //por defecto 500px
        this.isFullScreen = false;
        this.items = []; //los items de carrousel
        //VARIABLES POR DEFECTO
        this.finalHeight = 0; //el final height que se usará
        this.currentPosition = 0;
    }
    ngOnInit() {
        this.finalHeight = this.isFullScreen ? '100%' : `${this.height}px`;
        console.log("height" + this.finalHeight);
        this.items.map((i, index) => {
            i.id = index; //se enumaeran
            i.marginLeft = 0; //sin margin
        });
    }
    //asigna la posicion actual que muestra el carrousel
    setCurrentPosition(position) {
        this.currentPosition = position;
        this.items.find(i => i.id === 0).marginLeft = -100 * position; //es la posicion de acuerdo al tamaño del ancho 100%
    }
    //muestra la posicion siguiente 
    setNext() {
        let finalPercentage = 0;
        let nextPosition = this.currentPosition + 1;
        //siempre debe estar en el rango de la cantidad de items
        if (nextPosition <= this.items.length - 1) {
            finalPercentage = -100 * nextPosition;
        }
        else {
            //si supera se va a la primera posicion
            nextPosition = 0;
        }
        //se asigna al item 0
        this.items.find(i => i.id === 0).marginLeft = finalPercentage;
        this.currentPosition = nextPosition;
    }
    //PARA EL REGRESO DE FLECHA
    setBack() {
        let finalPercentage = 0;
        let backPosition = this.currentPosition - 1;
        if (backPosition >= 0) {
            finalPercentage = -100 * backPosition;
        }
        else {
            //manda a la ultima posicion
            backPosition = this.items.length - 1;
            finalPercentage = -100 * backPosition;
        }
        //se asigna el desplazamiento
        this.items.find(i => i.id === 0).marginLeft = finalPercentage;
        this.currentPosition = backPosition;
    }
}
MultiimageOutComponent.ɵfac = function MultiimageOutComponent_Factory(t) { return new (t || MultiimageOutComponent)(); };
MultiimageOutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultiimageOutComponent, selectors: [["app-multiimage-out"]], inputs: { height: "height", isFullScreen: "isFullScreen", items: "items" }, decls: 10, vars: 5, consts: [[1, "dsc-carousel", 3, "ngStyle"], [1, "dsc-carousel__btns"], [1, "bi", "bi-circle-left", 3, "click"], [1, "bi", "bi-chewron-circle-right", 3, "click"], [1, "dsc-carousel__content"], [4, "ngFor", "ngForOf"], [1, "dsc-carousel__steps"], ["class", "dsc-carousel__steps-step", 3, "click", 4, "ngFor", "ngForOf"], [1, "dsc-carousel__content-item", 3, "ngStyle"], [1, "dsc-carousel__steps-step", 3, "click"]], template: function MultiimageOutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiimageOutComponent_Template_i_click_2_listener() { return ctx.setBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiimageOutComponent_Template_i_click_4_listener() { return ctx.setNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MultiimageOutComponent_ng_container_7_Template, 2, 4, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MultiimageOutComponent_div_9_Template, 1, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.finalHeight));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: [".dsc-carousel[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    \r\n}\r\n.dsc-carousel[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(0, 0, 0, 0.48);\r\n}\r\n.dsc-carousel__content[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    width: 100%;\r\n    align-self: stretch;\r\n    display: flex;\r\n    overflow: hidden;\r\n}\r\n.dsc-carousel__content-item[_ngcontent-%COMP%] {\r\n    float: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    min-width: 100%;\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: 1s all ease-in;\r\n}\r\n.dsc-carousel__content-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-weight: 900;\r\n    text-transform: uppercase;\r\n    z-index: 1;\r\n}\r\n.dsc-carousel__content-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #ff8000;\r\n}\r\n.dsc-carousel__content-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    z-index: 1;\r\n    color: white;\r\n    font-weight: 500;\r\n    font-size: 20px;\r\n}\r\n.dsc-carousel__btns[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 90%;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.dsc-carousel__btns[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\r\n    opacity: 0.7;\r\n    color: #fff;\r\n    font-size: 45px;\r\n    cursor: pointer;\r\n    justify-content: space-between;\r\n}\r\n.dsc-carousel__btns[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:hover {\r\n    opacity: 1;\r\n}\r\n.dsc-carousel__steps[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 40px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.dsc-carousel__steps-step[_ngcontent-%COMP%] {\r\n    height: 8px;\r\n    width: 25px;\r\n    margin: 0 5px;\r\n    border-radius: 5px;\r\n    border: 1px solid rgba(255, 255, 255, 0.7);\r\n    cursor: pointer;\r\n    transition: 0.75s all ease-in-out;\r\n}\r\n.dsc-carousel__steps-step[_ngcontent-%COMP%]:hover, .dsc-carousel__steps-step-active[_ngcontent-%COMP%] {\r\n    opacity: 0.7;\r\n    background: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11bHRpaW1hZ2Utb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQyxlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6Im11bHRpaW1hZ2Utb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHNjLWNhcm91c2VsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZjgwMDA7ICAqL1xyXG59XHJcbi5kc2MtY2Fyb3VzZWw6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40OCk7XHJcbn1cclxuLmRzYy1jYXJvdXNlbF9fY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uZHNjLWNhcm91c2VsX19jb250ZW50LWl0ZW0ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMXMgYWxsIGVhc2UtaW47XHJcbn1cclxuLmRzYy1jYXJvdXNlbF9fY29udGVudC1pdGVtIGgxIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4uZHNjLWNhcm91c2VsX19jb250ZW50LWl0ZW0gaDEgc3BhbiB7XHJcbiAgICBjb2xvcjogI2ZmODAwMDtcclxufVxyXG4uZHNjLWNhcm91c2VsX19jb250ZW50LWl0ZW0gcCB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uZHNjLWNhcm91c2VsX19idG5zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5kc2MtY2Fyb3VzZWxfX2J0bnMgPiBpIHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5kc2MtY2Fyb3VzZWxfX2J0bnMgPiBpOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuLmRzYy1jYXJvdXNlbF9fc3RlcHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmRzYy1jYXJvdXNlbF9fc3RlcHMtc3RlcCB7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNzVzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG4uZHNjLWNhcm91c2VsX19zdGVwcy1zdGVwOmhvdmVyLCAuZHNjLWNhcm91c2VsX19zdGVwcy1zdGVwLWFjdGl2ZSB7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9247:
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/editable-page/editable-page.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditablePageComponent": () => (/* binding */ EditablePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-wow */ 8048);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ 2250);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ 9201);
/* harmony import */ var _formats_format_one_format_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../formats/format-one/format-one.component */ 1614);
/* harmony import */ var _formats_format_two_format_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../formats/format-two/format-two.component */ 5861);
/* harmony import */ var _formats_format_three_format_three_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../formats/format-three/format-three.component */ 3726);










function EditablePageComponent_app_format_one_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-format-one", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("titulo_bg", ctx_r0.color[1])("subtitulos_color", ctx_r0.color[2])("apartados_bg", ctx_r0.color[3])("cartel", ctx_r0.cartel)("graficas", ctx_r0.graficas)("images", ctx_r0.images);
} }
function EditablePageComponent_app_format_two_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-format-two", 9);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("titulo_bg", ctx_r1.color[1])("subtitulos_color", ctx_r1.color[2])("apartados_bg", ctx_r1.color[3])("cartel", ctx_r1.cartel)("graficas", ctx_r1.graficas)("images", ctx_r1.images);
} }
function EditablePageComponent_app_format_three_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-format-three", 9);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("titulo_bg", ctx_r2.color[1])("subtitulos_color", ctx_r2.color[2])("apartados_bg", ctx_r2.color[3])("cartel", ctx_r2.cartel)("graficas", ctx_r2.graficas)("images", ctx_r2.images);
} }
class EditablePageComponent {
    //ANIMACIONES Y SERVICIOS DE API Y DIALOG PARA PONER EL NOMBRE
    constructor(_wowService, apiService, route) {
        this._wowService = _wowService;
        this.apiService = apiService;
        this.route = route;
        this.title = 'cartel';
        //FORMATO ACTUAL QUE ELIGE LA PERSONA
        this.formato_actual = "f1";
        //EL  NOMBRE DEL CARTEL
        this.nombre = "";
        //LOS COLORES DE FONDO QUE PUEDE EDITAR POR DEFECTO
        this.color = ["", "#8CBDB9", "#BFDAD7", ""];
        // DIV POR DEFAULT TODOS LOS TITULOS TIENEN ESTE POR DEFAULT DE INICIO ABAJO SE ACOMPLETA
        this.html = "<div id='cont' style='position:absolute;width:100%;color:black;font-size:1.5vw;' >";
        //GRAFICAS E IMAGENES DEL CARTEL SERAN LLENADAS POSTERIORMENTE
        this.graficas = ["", ""];
        this.images = [];
        //=======================================================GUARDADO===============================
        apiService.guardado.subscribe(
        //CUANDO SE CAPTA EL GUARDADO
        () => {
            //SI YA LE PUSO NOMBRE AL CARTEL
            if (this.nombre != "") {
                //SE ACTUALIZA EL CARTEL CON LOS COLORES,NOMBRE
                this.cartel.formato = this.formato_actual;
                let colors = btoa(this.color.toString()); //se encriptan el array de los colores 
                this.cartel.colores = colors;
                this.cartel.nombre = this.nombre;
                this.cartel.imagenes = this.images.toString();
                this.cartel.graficas = this.graficas.toString();
                //SE LLAMA A LA API PARA QUE GUARDE EL CARTEL
                apiService.guardarCartel(this.cartel).subscribe({
                    next: data => {
                        console.log("res:\n" + data);
                    },
                    error: error => {
                        console.error('There was an error!', error);
                    }
                });
            }
            else {
                //SI NO TIENE NOMBRE SE AVISA
                window.alert("Tu documento requiere un nombre!");
            }
        });
        //===========================================FINALIZADO=========================================================
        //AL RECIBIR LA SEÑAL DE FINALIZADO
        apiService.finalize.subscribe(() => {
            if (this.nombre != "") {
                //SE ACTUALIZA EL CARTEL CON LOS COLORES,NOMBRE
                this.cartel.formato = this.formato_actual;
                let colors = btoa(this.color.toString()); //se encriptan el array de los colores 
                this.cartel.colores = colors;
                this.cartel.nombre = this.nombre;
                //SE ENVIA EL CARTEL A FINALIZAR Y SI AUN NO EXISTE LO INSERTA YA PUBLICADO
                apiService.actualizaCartel(this.cartel).subscribe();
            }
            else {
                //SI NO TIENE NOMBRE SE AVISA
                window.alert("Tu documento requiere un nombre!");
            }
        });
        //=======================================================PREVIEW=================================================
        //CONTADOR YA QUE CUANDO SE DA PREVIEW TODOS LOS COMPONENTES ENVIAN LA SEÑAL Y HASTA QUE EL ULTIMO LO HAGA SE ENVIAN TODOS
        let cont = 0;
        //EVENTO CUANDO LE DA A PREVIEW 
        apiService.enviar.subscribe(() => {
            cont += 1;
            console.log(cont);
            if (cont == 13) {
                //SE ACTUALIZA EL CARTEL
                this.cartel.formato = this.formato_actual;
                let colors = btoa(this.color.toString()); //se encriptan el array de los colores 
                this.cartel.colores = colors;
                this.cartel.graficas = this.graficas.toString();
                this.cartel.imagenes = this.images.toString();
                //SE PONE LA REDIRECCION PRINCIPAL
                // const url = this.route.serializeUrl(
                //   this.route.createUrlTree(['/#/preview'],{queryParams:{
                //     cartel: JSON.stringify(this.cartel).replace(/%/g,"/37").replace(/&/g,"/38")
                //   }})
                // );
                const url = 'http://localhost/cartel/preview/#/?cartel=' + JSON.stringify(this.cartel).replace(/%/g, "/37").replace(/&/g, "/38");
                //SE REMPLAZA EL % POR SU CODIGO 
                //console.log(JSON.stringify(this.cartel).replace(/%/g,"/37"));
                //window.open(url+"?cartel="+JSON.stringify(this.cartel).replace(/%/g,"/37").replace(/&/g,"/38"));
                console.log("redir " + url);
                window.open(url);
                //route.navigate(['/preview',{cartel: this.cartel}]);
                cont = 0;
            }
        });
    }
    get wowService() {
        return this._wowService;
    }
    set wowService(value) {
        this._wowService = value;
    }
    ngOnInit() {
        //INICIA EL SERVICIO WOW
        this.wowService.init();
        //AQUI SE ELIGE CUAL ES EL FORMATO ACTUAL DEPENDIENDO DE SI EN LA URL SE TRAJO UN ID, DE LO CONTRARIO SE MUESTRA EL QUE HAY POR DEFECTO
        //FORMATO POR DEFAULT
        this.cartel = {
            nombre: this.nombre,
            id: -1,
            colores: "",
            formato: "f1",
            titulo: "<div id='cont' style='position:absolute;width:100%;color:white;font-size:35pt;' >Escribe tu título</div>",
            intro: this.html + "Escribe tu intro</div>",
            objetivos: this.html + "Escribe tus objetivos</div>",
            metodologia: this.html + "Escribe tu metodología</div>",
            resultados: this.html + "Escribe tus resultados</div>",
            conclusion: this.html + "Escribe tu conclusion</div>",
            referencias: this.html + "Escribe tus referencias</div>",
            datos_contacto: this.html + "Escribe tus datos</div>",
            agradecimientos: this.html + "Escribe tus agradecimientos</div>",
            imagenes: "" + this.images.toString(),
            graficas: "" + this.graficas.toString()
        };
    }
    //FUNCION OBTIENE LO QUE LLEGO DE SIDEBAR Y LO CAMBIA
    cambiarFormato(formato) {
        this.formato_actual = formato;
        console.log("formato actual " + this.formato_actual);
    }
    // FUNCION QUE OBTIENE EL COLOR DEL SIDEBAR PARA CAMBIARLO
    cambiarColor(color) {
        this.color[color.index] = color.color;
    }
}
EditablePageComponent.ɵfac = function EditablePageComponent_Factory(t) { return new (t || EditablePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_0__.NgwWowService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
EditablePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: EditablePageComponent, selectors: [["app-editable-page"]], decls: 12, vars: 6, consts: [[3, "eventoFormato", "eventoColor"], [1, "row", "justify-content-center"], [1, "col-6"], [1, "input-group", "pt-4"], ["type", "text", "placeholder", "Escribe un nombre identificador de tu versi\u00F3n", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "contenedor-paginas"], [1, "pagina"], [1, "body-formato"], ["class", "fadeIn animated", 3, "titulo_bg", "subtitulos_color", "apartados_bg", "cartel", "graficas", "images", 4, "ngIf"], [1, "fadeIn", "animated", 3, "titulo_bg", "subtitulos_color", "apartados_bg", "cartel", "graficas", "images"]], template: function EditablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("eventoFormato", function EditablePageComponent_Template_app_sidebar_eventoFormato_0_listener($event) { return ctx.cambiarFormato($event); })("eventoColor", function EditablePageComponent_Template_app_sidebar_eventoColor_0_listener($event) { return ctx.cambiarColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EditablePageComponent_Template_input_ngModelChange_4_listener($event) { return ctx.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5)(6, "div", 1)(7, "div", 6)(8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, EditablePageComponent_app_format_one_9_Template, 1, 6, "app-format-one", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, EditablePageComponent_app_format_two_10_Template, 1, 6, "app-format-two", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, EditablePageComponent_app_format_three_11_Template, 1, 6, "app-format-three", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"]("background-color:" + ctx.color[0] + ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formato_actual == "f1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formato_actual == "f2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formato_actual == "f3");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _formats_format_one_format_one_component__WEBPACK_IMPORTED_MODULE_3__.FormatOneComponent, _formats_format_two_format_two_component__WEBPACK_IMPORTED_MODULE_4__.FormatTwoComponent, _formats_format_three_format_three_component__WEBPACK_IMPORTED_MODULE_5__.FormatThreeComponent], styles: [".contenedor-paginas[_ngcontent-%COMP%]{\r\n    padding-top: 8vh;\r\n}\r\n.pagina[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    border: 1px solid #C0A9BD;\r\n    width: 90vw;\r\n    padding-top: 150%;\r\n}\r\n\r\n.body-formato[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 0;\r\n    top: 0;\r\n    left: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRhYmxlLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0Esc0NBQXNDO0FBQ3RDO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixNQUFNO0lBQ04sT0FBTztBQUNYIiwiZmlsZSI6ImVkaXRhYmxlLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lZG9yLXBhZ2luYXN7XHJcbiAgICBwYWRkaW5nLXRvcDogOHZoO1xyXG59XHJcbi5wYWdpbmF7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzBBOUJEO1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUwJTtcclxufVxyXG4vKiBFU1RFIFNFIE1PRElGSUNBUkEgSlVOVE8gQUwgQ09MT1IgKi9cclxuLmJvZHktZm9ybWF0b3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8220:
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/preview-page/preview-page.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewPageComponent": () => (/* binding */ PreviewPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 2250);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _formats_format_one_format_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../formats/format-one/format-one.component */ 1614);
/* harmony import */ var _formats_format_two_format_two_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../formats/format-two/format-two.component */ 5861);
/* harmony import */ var _formats_format_three_format_three_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../formats/format-three/format-three.component */ 3726);







function PreviewPageComponent_div_0_app_format_one_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-format-one", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("titulo_bg", ctx_r1.color[1])("subtitulos_color", ctx_r1.color[2])("apartados_bg", ctx_r1.color[3])("cartel", ctx_r1.cartel)("graficasR", ctx_r1.graficas)("imagesR", ctx_r1.images);
} }
function PreviewPageComponent_div_0_app_format_two_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-format-two", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("titulo_bg", ctx_r2.color[1])("subtitulos_color", ctx_r2.color[2])("apartados_bg", ctx_r2.color[3])("cartel", ctx_r2.cartel)("graficasR", ctx_r2.graficas)("imagesR", ctx_r2.images);
} }
function PreviewPageComponent_div_0_app_format_three_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-format-three", 6);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("titulo_bg", ctx_r3.color[1])("subtitulos_color", ctx_r3.color[2])("apartados_bg", ctx_r3.color[3])("cartel", ctx_r3.cartel)("graficasR", ctx_r3.graficas)("imagesR", ctx_r3.images);
} }
function PreviewPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PreviewPageComponent_div_0_app_format_one_4_Template, 1, 6, "app-format-one", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, PreviewPageComponent_div_0_app_format_two_5_Template, 1, 6, "app-format-two", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, PreviewPageComponent_div_0_app_format_three_6_Template, 1, 6, "app-format-three", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"]("background-color:" + ctx_r0.color[0] + ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.cartel.formato == "f1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.cartel.formato == "f2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.cartel.formato == "f3");
} }
class PreviewPageComponent {
    constructor(activatedR, apiServ) {
        this.activatedR = activatedR;
        this.apiServ = apiServ;
        this.graficas = [];
        this.images = [];
        this.color = ["", "#8CBDB9", "#BFDAD7", ""];
        //SE OBTIENEN LOS PARAMETROS DEL URL PARA PLASMAR EL PREVIEW
        activatedR.queryParams.subscribe(params => {
            //SE REMPLAZA EL CODIGO POR EL %
            this.cartel = JSON.parse(params['cartel'].replace(/\/37/g, "%").replace(/\/38/g, "&"));
            this.graficas = this.cartel.graficas.split(",");
            //se obtienen imagenes carrousel y se pushean como CarrouselItem
            let imgs = this.cartel.imagenes.split(",");
            let count = 1;
            for (const image in imgs) {
                if (Object.prototype.hasOwnProperty.call(imgs, image)) {
                    let carrItem = { id: count, image: imgs[image] };
                    this.images.push(carrItem);
                    count += 1;
                }
            }
            //SE OBTIENE COLOR EL INDICE 0 DE COLORES ES UN ARRAY EN FORMA STRING
            let colores = this.cartel.colores.split(",");
            colores[0] = atob(colores[0]);
            this.color = colores[0].split(",");
        });
        //SE EMITE EL SERVICIO MODO READONLY UNA VEZ CARGARON TODOS LOS ELEMENTOS
        apiServ.loaded.subscribe(() => {
            this.apiServ.servicioReadonly();
        });
    }
    ngOnInit() {
    }
}
PreviewPageComponent.ɵfac = function PreviewPageComponent_Factory(t) { return new (t || PreviewPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
PreviewPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PreviewPageComponent, selectors: [["app-preview-page"]], decls: 1, vars: 1, consts: [["class", "contenedor-paginas", 4, "ngIf"], [1, "contenedor-paginas"], [1, "row", "justify-content-center"], [1, "pagina"], [1, "body-formato"], ["class", "fadeIn animated", 3, "titulo_bg", "subtitulos_color", "apartados_bg", "cartel", "graficasR", "imagesR", 4, "ngIf"], [1, "fadeIn", "animated", 3, "titulo_bg", "subtitulos_color", "apartados_bg", "cartel", "graficasR", "imagesR"]], template: function PreviewPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, PreviewPageComponent_div_0_Template, 7, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cartel != null);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _formats_format_one_format_one_component__WEBPACK_IMPORTED_MODULE_1__.FormatOneComponent, _formats_format_two_format_two_component__WEBPACK_IMPORTED_MODULE_2__.FormatTwoComponent, _formats_format_three_format_three_component__WEBPACK_IMPORTED_MODULE_3__.FormatThreeComponent], styles: [".contenedor-paginas[_ngcontent-%COMP%]{\r\n    padding-top: 0vh;\r\n}\r\n.pagina[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    border: 1px solid #C0A9BD;\r\n    width: 100vw;\r\n    padding-top: 150%;\r\n}\r\n\r\n.body-formato[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 0;\r\n    top: 0;\r\n    left: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXZpZXctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQSxzQ0FBc0M7QUFDdEM7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLE1BQU07SUFDTixPQUFPO0FBQ1giLCJmaWxlIjoicHJldmlldy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVuZWRvci1wYWdpbmFze1xyXG4gICAgcGFkZGluZy10b3A6IDB2aDtcclxufVxyXG4ucGFnaW5he1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0MwQTlCRDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHBhZGRpbmctdG9wOiAxNTAlO1xyXG59XHJcbi8qIEVTVEUgU0UgTU9ESUZJQ0FSQSBKVU5UTyBBTCBDT0xPUiAqL1xyXG4uYm9keS1mb3JtYXRve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 4834:
/*!************************************************************************!*\
  !*** ./src/app/components/sections/caja-texto/caja-texto.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CajaTextoComponent": () => (/* binding */ CajaTextoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 2250);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 3889);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




class CajaTextoComponent {
    //html: string = "<div id='cont' style='position:absolute;width:100%;color:black;font-size:1.5vw;' >Escribe tu apartado</div>";
    constructor(apiService) {
        this.apiService = apiService;
        //ES LA ENTRADA DEL COLOR QUE TENDRA EN CABECERA Y DE FONDO
        this.titulo = "Apartado";
        this.subtitulos_color = "";
        this.apartados_bg = "";
        //LA ENTRADA DE HTML CORRESPONDIENTE y del cartel
        this.html = "";
        this.disabled = false;
        //CUANDO SE VA A DAR PREVIEW SE ACTUALIZA
        apiService.preview.subscribe(() => {
            this.cambio(1);
        });
        //CUANDO SE VA A DAR ACTUALIZAR SE ACTUALIZA
        apiService.actualizar.subscribe(() => {
            this.cambio(0);
        });
        //CUANDO SE VA A DAR GUARDAR SE ACTUALIZA
        apiService.guardado.subscribe(() => {
            this.cambio(0);
        });
        //CUANDO SE EMITE EL READONLY
        apiService.readonly.subscribe(() => {
            this.disabled = true;
        });
    }
    ngOnInit() {
        this.configureTinyMce();
    }
    configureTinyMce() {
        this.tinyMceConfig = {
            inline: true,
            initialValue: "",
            disabled: true,
            plugins: ['autoresize', 'link'],
            content_style: `
      .mce-content-body{
        position:absolute;
        width:100%;
        height: 100%;
        padding:5px;
      }
      p {
        padding: 0;
        margin: 0px 0;
      }
      `,
            menubar: false,
            toolbar: "fontsize| styles | bold italic forecolor | \
      alignleft aligncenter alignright alignjustify | link"
        };
    }
    cambio(tipo) {
        //this.html=this.html;
        if (this.titulo == "Introducción") {
            this.cartel.intro = this.html;
        }
        if (this.titulo == "Objetivos") {
            this.cartel.objetivos = this.html;
        }
        if (this.titulo == "Conclusión") {
            this.cartel.conclusion = this.html;
        }
        if (this.titulo == "Metodología") {
            this.cartel.metodologia = this.html;
        }
        if (this.titulo == "Resultados") {
            this.cartel.resultados = this.html;
        }
        if (this.titulo == "Referencias") {
            this.cartel.referencias = this.html;
        }
        if (this.titulo == "Datos de Contacto") {
            this.cartel.datos_contacto = this.html;
        }
        if (this.titulo == "Agradecimientos") {
            this.cartel.agradecimientos = this.html;
        }
        //AVISA QUE SE VAN A ENVIAR
        if (tipo == 1)
            this.apiService.servicioEnviar();
    }
}
CajaTextoComponent.ɵfac = function CajaTextoComponent_Factory(t) { return new (t || CajaTextoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
CajaTextoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CajaTextoComponent, selectors: [["app-caja-texto"]], inputs: { titulo: "titulo", subtitulos_color: "subtitulos_color", apartados_bg: "apartados_bg", html: "html", cartel: "cartel" }, decls: 8, vars: 8, consts: [[1, "caja"], [1, "titulo"], [2, "position", "relative", "height", "100%", "width", "100%", "align-items", "center", "text-align", "center"], [1, "restante"], [1, "contenido"], ["apiKey", "dyal385wlvsx071fkvr2nzs6llostwantfqy5z03rd1zehf2", 2, "height", "100%", "width", "100%", 3, "disabled", "ngModel", "init", "ngModelChange"]], template: function CajaTextoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "editor", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CajaTextoComponent_Template_editor_ngModelChange_7_listener($event) { return ctx.html = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"]("background-color:" + ctx.subtitulos_color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"]("background-color:" + ctx.apartados_bg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabled)("ngModel", ctx.html)("init", ctx.tinyMceConfig);
    } }, dependencies: [_tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_2__.EditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: [".caja[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: white;\r\n    border-radius: 12px 12px 12px 12px;\r\n    box-shadow: 2px 2px 8px 4px #888888;\r\n    overflow: hidden;\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.titulo[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 100%;\r\n    background-color: #BFDAD7;\r\n    padding-left: 3px;\r\n    padding-right: 3px;\r\n    padding-top: 10px;\r\n    padding-bottom: 5px;\r\n    color: rgb(57, 57, 57);\r\n}\r\n.contenido[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: hidden;\r\n}\r\n.restante[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    flex: auto;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    font-size: 1.8vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhamEtdGV4dG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsbUNBQW1DO0lBQ25DLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImNhamEtdGV4dG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWphe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAxMnB4IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDhweCA0cHggIzg4ODg4ODtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi50aXR1bG97XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCRkRBRDc7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIGNvbG9yOiByZ2IoNTcsIDU3LCA1Nyk7XHJcbn1cclxuLmNvbnRlbmlkb3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnJlc3RhbnRle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleDogYXV0bztcclxufVxyXG5cclxuaDN7XHJcbiAgICBmb250LXNpemU6IDEuOHZ3O1xyXG59Il19 */"] });


/***/ }),

/***/ 3436:
/*!**************************************************************************!*\
  !*** ./src/app/components/sections/image-input/image-input.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageInputComponent": () => (/* binding */ ImageInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 2250);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);



class ImageInputComponent {
    //SE INYECTA LA API SERVICE
    constructor(apiService) {
        this.apiService = apiService;
        //EL TIPO DE URL DE LA VARIABLE
        this.tipo = "";
        //INPUT DE LA LABEL
        this.label = "";
        this.url = "";
        //SE ESTÁ A LA ESCUCHA DEL EVENTO PREVIEW QUE ES CUANDO DAN CLIC EN PREVIEW
        apiService.preview.subscribe(() => {
            //SE MANDA A LLAMAR LA FUNCION DE CAMBIO YA QUE SE LLAMARA MUCHAS VECES 
            this.cambio(1);
        });
        //CUANDO SE VA A DAR ACTUALIZAR SE ACTUALIZA
        apiService.actualizar.subscribe(() => {
            this.cambio(0);
        });
        //CUANDO SE VA A DAR GUARDAR SE ACTUALIZA
        apiService.guardado.subscribe(() => {
            this.cambio(0);
        });
    }
    ngOnInit() {
        //SI ES LA GRAFICA O IMAGE #1
        if (this.tipo == "GRAF1" || this.tipo == "IMG1") {
            this.url = this.urlImg[0];
        }
        //SI ES LA GRAFICA O IMAGE #2
        if (this.tipo == "GRAF2" || this.tipo == "IMG2")
            this.url = this.urlImg[1];
    }
    cambio(tipo) {
        //EL CARTEL QUE VIENE DESDE EL INICIO SE MODIFICA PARA ASIGNARLE LA URL
        //DEPENDIENDO DEL FORMATO SE AÑADE UNA U OTRA
        //TODO IF CON EL FORMATO Y SI ES GRAFICA O IMAGEN
        //SI ES LA GRAFICA O IMAGE #1
        if (this.tipo == "GRAF1" || this.tipo == "IMG1") {
            //DEBE APLICAR CON TODOS LOS LINKS
            if (this.url.includes('https://drive.google.com/')) {
                //SE OBTIENE EL ID DE LA URL
                const regex = /\/d\/(.*?)\//;
                const match = this.url.match(regex);
                const id = match && match[1];
                //SE GENERA EL NUEVO LINK
                this.url = 'https://drive.google.com/uc?export=view&id=' + id;
            }
            this.urlImg[0] = this.url;
            console.log("CAMBIO GRAF");
        }
        //SI ES LA GRAFICA O IMAGE #2
        if (this.tipo == "GRAF2" || this.tipo == "IMG2") {
            //DEBE APLICAR CON TODOS LOS LINKS
            if (this.url.includes('https://drive.google.com/')) {
                //SE OBTIENE EL ID DE LA URL
                const regex = /\/d\/(.*?)\//;
                const match = this.url.match(regex);
                const id = match && match[1];
                //SE GENERA EL NUEVO LINK
                this.url = 'https://drive.google.com/uc?export=view&id=' + id;
            }
            this.urlImg[1] = this.url;
        }
        // this.cartel.titulo=this.url;
        // //ENVIA SEÑAL QUE YA EVIE LOS DATOS PARA EL PREVIEW
        if (tipo == 1)
            this.apiService.servicioEnviar();
    }
}
ImageInputComponent.ɵfac = function ImageInputComponent_Factory(t) { return new (t || ImageInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
ImageInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ImageInputComponent, selectors: [["app-image-input"]], inputs: { tipo: "tipo", urlImg: "urlImg", cartel: "cartel", label: "label" }, decls: 7, vars: 2, consts: [[1, "border-input"], [1, "row", "m-0", "justify-content-center", 2, "height", "100%", "width", "100%"], [1, "col-6", 2, "height", "100%"], [1, "align-middle", 2, "height", "100%", "padding-top", "50%"], [1, "row", "justify-content-center"], ["type", "url", "placeholder", "Pega la URL de imagen", 1, "form-control", 3, "ngModel", "ngModelChange"]], template: function ImageInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ImageInputComponent_Template_input_ngModelChange_6_listener($event) { return ctx.url = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.url);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], styles: [".image-input[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.border-input[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 10px 10px 10px 10px;\r\n    border: 1px dashed rgb(140, 140, 140);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLWlucHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGtDQUFrQztJQUNsQyxxQ0FBcUM7QUFDekMiLCJmaWxlIjoiaW1hZ2UtaW5wdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1pbnB1dHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5ib3JkZXItaW5wdXR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiKDE0MCwgMTQwLCAxNDApO1xyXG59Il19 */"] });


/***/ }),

/***/ 7232:
/*!************************************************************************************!*\
  !*** ./src/app/components/sections/multiimage-input/multiimage-input.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiimageInputComponent": () => (/* binding */ MultiimageInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 2250);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




function MultiimageInputComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 12)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15)(5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiimageInputComponent_div_14_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const index_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.removeImage(index_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const url_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", url_r1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class MultiimageInputComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.url = ""; //LA URL QUE SE AÑADE
        this.paths = []; //LOS LINKS TOTALES
        //SE ESTÁ A LA ESCUCHA DEL EVENTO PREVIEW QUE ES CUANDO DAN CLIC EN PREVIEW
        apiService.preview.subscribe(() => {
            //SE MANDA A LLAMAR LA FUNCION DE CAMBIO YA QUE SE LLAMARA MUCHAS VECES 
            this.cambio(1);
        });
        //CUANDO SE VA A DAR ACTUALIZAR SE ACTUALIZA
        apiService.actualizar.subscribe(() => {
            this.cambio(0);
        });
        //CUANDO SE VA A DAR GUARDAR SE ACTUALIZA
        apiService.guardado.subscribe(() => {
            this.cambio(0);
        });
    }
    ngOnInit() {
    }
    addImage() {
        if (this.url != "") {
            //si la foto es de drive
            //DEBE APLICAR CON TODOS LOS LINKS
            if (this.url.includes('https://drive.google.com/')) {
                //SE OBTIENE EL ID DE LA URL
                const regex = /\/d\/(.*?)\//;
                const match = this.url.match(regex);
                const id = match && match[1];
                //SE GENERA EL NUEVO LINK
                this.url = 'https://drive.google.com/uc?export=view&id=' + id;
            }
            this.paths.push(this.url);
        }
    }
    removeImage(index) {
        this.paths.splice(index, 1);
        console.log(this.paths);
    }
    cambio(tipo) {
        // //ENVIA SEÑAL QUE YA EVIE LOS DATOS PARA EL PREVIEW
        if (tipo == 1)
            this.apiService.servicioEnviar();
    }
}
MultiimageInputComponent.ɵfac = function MultiimageInputComponent_Factory(t) { return new (t || MultiimageInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
MultiimageInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MultiimageInputComponent, selectors: [["app-multiimage-input"]], inputs: { paths: "paths" }, decls: 15, vars: 2, consts: [[1, "border-input"], [1, "row", "m-0", "justify-content-center", 2, "height", "100%", "width", "100%"], [1, "col-8", 2, "height", "100%"], [1, "align-middle", 2, "height", "100%", "padding-top", "5%", "display", "flex", "flex-direction", "column"], [1, "row", "justify-content-center", 2, "height", "auto"], [1, "row", "m-0", 2, "height", "auto"], [1, "col-9"], ["type", "url", "placeholder", "Pega la URL de imagen", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-auto", "m-0", "p-0"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "overflow-auto"], [4, "ngFor", "ngForOf"], [1, "row", "m-0"], [1, "col-9", "justify-content-center"], ["alt", "", "height", "60px", 3, "src"], [1, "col"]], template: function MultiimageInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Carousel de im\u00E1genes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MultiimageInputComponent_Template_input_ngModelChange_8_listener($event) { return ctx.url = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiimageInputComponent_Template_button_click_10_listener() { return ctx.addImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MultiimageInputComponent_div_14_Template, 8, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.paths);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: [".image-input[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.border-input[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 10px 10px 10px 10px;\r\n    border: 1px dashed rgb(140, 140, 140);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11bHRpaW1hZ2UtaW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLHFDQUFxQztBQUN6QyIsImZpbGUiOiJtdWx0aWltYWdlLWlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtaW5wdXR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uYm9yZGVyLWlucHV0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYigxNDAsIDE0MCwgMTQwKTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 982:
/*!**************************************************************************!*\
  !*** ./src/app/components/sections/titulo-text/titulo-text.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TituloTextComponent": () => (/* binding */ TituloTextComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 2250);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 3889);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);





class TituloTextComponent {
    //html: string = "<div id='cont' style='position:absolute;width:100%;color:white;font-size:35pt;' >Escribe tu título</div>";
    constructor(apiService) {
        this.apiService = apiService;
        //INPUT DEL COLOR DE BACKGROUND DE TITULO
        this.titulo_bg = "";
        //INPUT DE LA PLANTILLA
        this.html = "";
        //VARIABLE QUE PONE EN READONLY EL TINY
        this.disabled = false;
        //CUANDO SE VA A DAR PREVIEW SE ACTUALIZA
        apiService.preview.subscribe(() => {
            this.cambio(1);
        });
        //CUANDO SE VA A DAR ACTUALIZAR SE ACTUALIZA
        apiService.actualizar.subscribe(() => {
            this.cambio(0);
        });
        //CUANDO SE VA A DAR GUARDADO SE ACTUALIZA
        apiService.guardado.subscribe(() => {
            this.cambio(0);
        });
        //CUANDO SE EMITE EL READONLY
        apiService.readonly.subscribe(() => {
            this.disabled = true;
            console.log("poner disable");
        });
    }
    ngOnInit() {
        //CONFIGURACION DEL TINYMCE EDITOS
        this.configureTinyMce();
        //SE AVIZA QUE YA SE CARGO 
        this.apiService.servicioLoaded();
    }
    configureTinyMce() {
        this.tinyMceConfig = {
            inline: true,
            initialValue: "",
            disabled: true,
            plugins: ['autoresize'],
            content_style: `
      .mce-content-body{
        overflow: hidden;
        height: 100%;
        padding:10px;
      }
      `,
            menubar: false,
            toolbar: "fontsize| styles | bold italic forecolor | \
      alignleft aligncenter alignright alignjustify "
        };
    }
    cambio(tipo) {
        this.cartel.titulo = this.html;
        //ENVIA SEÑAL QUE YA EVIE LOS DATOS
        if (tipo == 1)
            this.apiService.servicioEnviar();
    }
}
TituloTextComponent.ɵfac = function TituloTextComponent_Factory(t) { return new (t || TituloTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
TituloTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TituloTextComponent, selectors: [["app-titulo-text"]], inputs: { titulo_bg: "titulo_bg", html: "html", cartel: "cartel" }, decls: 3, vars: 5, consts: [[1, "titulo"], [2, "position", "relative", "height", "100%", "width", "100%"], ["apiKey", "dyal385wlvsx071fkvr2nzs6llostwantfqy5z03rd1zehf2", 2, "height", "100%", "width", "100%", 3, "disabled", "ngModel", "init", "ngModelChange"]], template: function TituloTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "editor", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TituloTextComponent_Template_editor_ngModelChange_2_listener($event) { return ctx.html = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"]("background-color:" + ctx.titulo_bg + ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabled)("ngModel", ctx.html)("init", ctx.tinyMceConfig);
    } }, dependencies: [_tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_2__.EditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: [".titulo[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 100%;\r\n    \r\n    border-radius: 12px 12px 12px 12px;\r\n    padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpdHVsby10ZXh0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCIiwiZmlsZSI6InRpdHVsby10ZXh0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxve1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjOENCREI5OyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDEycHggMTJweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 2250:
/*!****************************************************!*\
  !*** ./src/app/components/services/api.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);





class ApiService {
    //SE INYECTA SERVICIO PARA HACER POST 
    constructor(http) {
        this.http = http;
        //URLS PARA SERVICIOS
        this.core = "http://localhost/Cartel/api/";
        this.save = "guardar.php";
        this.update = "actualizar.php";
        //EVENTOS QUE SE EMITEN PARA AVISAR QUE SE QUIERE REALIZAR UNA PREVIEW,GUARDAR,ENVIAR DATOS O ACTUALIZAR EN LA BASE DE DATOS
        this.guardado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); //PARA CUANDO SE DESEA GUARDAR 
        this.finalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); //PARA CUANDO SE DESEA FINALIZAR 
        this.preview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.actualizar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.enviar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.readonly = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    //EMITE LA SEÑAL DE ACTUALIZADO
    servicioActualiza() {
        this.actualizar.emit(true);
    }
    //EMITE LA SEÑAL DE GUARDADO
    servicioGuardado() {
        this.guardado.emit(true);
    }
    //EMITE LA SEÑAL DE FINALIZADO/PUBLICAR
    servicioFinalize() {
        this.finalize.emit(true);
    }
    //EMITE LA SEÑAL DE MOSTRAR PREVIEW
    servicioPreview() {
        this.preview.emit(true);
    }
    //EMITE SEÑAL QUE LOS DATOS ESTAN LISTOS PARA ENVIAR
    servicioEnviar() {
        this.enviar.emit(true);
    }
    //EMITE SI ESTA EN MODO READ ONLY
    servicioReadonly() {
        this.readonly.emit(true);
    }
    //EMITE QUE YA SE CREO TODO
    servicioLoaded() {
        this.loaded.emit(true);
    }
    //OBTIENE EL SERVICIO PARA GUARDAR EN LA BASE DE DATOS
    guardarCartel(cartel_) {
        const url = `${this.core}${this.save}` + "?cartel=" + encodeURIComponent(JSON.stringify(cartel_));
        console.log(url);
        return this.http.get(url);
    }
    //OBTENE EL SERVICIO PARA FINALIZAR EL CARTEL EN LA BASE DE DATOS
    actualizaCartel(cartel_) {
        const url = `${this.core}${this.update}` + "?cartel=" + encodeURIComponent(JSON.stringify(cartel_));
        console.log(url);
        return this.http.get(url);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9201:
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _herramienta_herramienta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../herramienta/herramienta.component */ 6307);




function SidebarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-herramienta", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-herramienta", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventFormato", function SidebarComponent_div_0_Template_app_herramienta_eventFormato_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.enviarFormato($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-herramienta", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventColor", function SidebarComponent_div_0_Template_app_herramienta_eventColor_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.enviarColor($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function SidebarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.collapseBar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SidebarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.collapseBar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SidebarComponent {
    constructor() {
        this.isCollapsed = false;
        //EVENTO QUE ENVIA EL FORMATO
        this.eventoFormato = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        //EVENTO QUE ENVIA COLOR
        this.eventoColor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
    collapseBar() {
        this.isCollapsed = !this.isCollapsed;
    }
    //FUNCION QUE ENVIA EL FORMATO AL APPCOMPONENT
    enviarFormato(formato) {
        this.eventoFormato.emit(formato);
    }
    //FUNCION QUE ENVIA EL FORMATO AL APPCOMPONENT
    enviarColor(color) {
        this.eventoColor.emit(color);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], outputs: { eventoFormato: "eventoFormato", eventoColor: "eventoColor" }, decls: 3, vars: 3, consts: [["id", "sidebar", "class", "sidebar-body fadeInLeft animated", 4, "ngIf"], ["id", "btn-sidebar", "class", "button-cierre bounceIn animated", 3, "click", 4, "ngIf"], ["id", "btn-sidebar-abre", "class", "button-abre bounceIn animated", 3, "click", 4, "ngIf"], ["id", "sidebar", 1, "sidebar-body", "fadeInLeft", "animated"], ["nombre_herramienta", "File"], ["nombre_herramienta", "Formato", 3, "eventFormato"], ["nombre_herramienta", "Color", 3, "eventColor"], ["id", "btn-sidebar", 1, "button-cierre", "bounceIn", "animated", 3, "click"], [1, "bi", "bi-arrow-left", 2, "font-size", "25px"], ["id", "btn-sidebar-abre", 1, "button-abre", "bounceIn", "animated", 3, "click"], [1, "bi", "bi-arrow-right", 2, "font-size", "25px"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SidebarComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidebarComponent_div_2_Template, 2, 0, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCollapsed);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _herramienta_herramienta_component__WEBPACK_IMPORTED_MODULE_0__.HerramientaComponent], styles: ["@charset \"UTF-8\";\n\n[_ngcontent-%COMP%]:root {\n  --animate-duration: 1s;\n  --animate-delay: 1s;\n  --animate-repeat: 1;\n}\n.animate__animated[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n  animation-duration: var(--animate-duration);\n  animation-fill-mode: both;\n}\n.animate__animated.animate__infinite[_ngcontent-%COMP%] {\n  animation-iteration-count: infinite;\n}\n.animate__animated.animate__repeat-1[_ngcontent-%COMP%] {\n  animation-iteration-count: 1;\n  animation-iteration-count: var(--animate-repeat);\n}\n.animate__animated.animate__repeat-2[_ngcontent-%COMP%] {\n  animation-iteration-count: calc(1 * 2);\n  animation-iteration-count: calc(var(--animate-repeat) * 2);\n}\n.animate__animated.animate__repeat-3[_ngcontent-%COMP%] {\n  animation-iteration-count: calc(1 * 3);\n  animation-iteration-count: calc(var(--animate-repeat) * 3);\n}\n.animate__animated.animate__delay-1s[_ngcontent-%COMP%] {\n  animation-delay: 1s;\n  animation-delay: var(--animate-delay);\n}\n.animate__animated.animate__delay-2s[_ngcontent-%COMP%] {\n  animation-delay: calc(1s * 2);\n  animation-delay: calc(var(--animate-delay) * 2);\n}\n.animate__animated.animate__delay-3s[_ngcontent-%COMP%] {\n  animation-delay: calc(1s * 3);\n  animation-delay: calc(var(--animate-delay) * 3);\n}\n.animate__animated.animate__delay-4s[_ngcontent-%COMP%] {\n  animation-delay: calc(1s * 4);\n  animation-delay: calc(var(--animate-delay) * 4);\n}\n.animate__animated.animate__delay-5s[_ngcontent-%COMP%] {\n  animation-delay: calc(1s * 5);\n  animation-delay: calc(var(--animate-delay) * 5);\n}\n.animate__animated.animate__faster[_ngcontent-%COMP%] {\n  animation-duration: calc(1s / 2);\n  animation-duration: calc(var(--animate-duration) / 2);\n}\n.animate__animated.animate__fast[_ngcontent-%COMP%] {\n  animation-duration: calc(1s * 0.8);\n  animation-duration: calc(var(--animate-duration) * 0.8);\n}\n.animate__animated.animate__slow[_ngcontent-%COMP%] {\n  animation-duration: calc(1s * 2);\n  animation-duration: calc(var(--animate-duration) * 2);\n}\n.animate__animated.animate__slower[_ngcontent-%COMP%] {\n  animation-duration: calc(1s * 3);\n  animation-duration: calc(var(--animate-duration) * 3);\n}\n@media print, (prefers-reduced-motion: reduce) {\n  .animate__animated[_ngcontent-%COMP%] {\n    animation-duration: 1ms !important;\n    transition-duration: 1ms !important;\n    animation-iteration-count: 1 !important;\n  }\n\n  .animate__animated[class*='Out'][_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n}\n\n@keyframes bounce {\n  from,\n  20%,\n  53%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 0, 0);\n  }\n\n  40%,\n  43% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -30px, 0) scaleY(1.1);\n  }\n\n  70% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -15px, 0) scaleY(1.05);\n  }\n\n  80% {\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 0, 0) scaleY(0.95);\n  }\n\n  90% {\n    transform: translate3d(0, -4px, 0) scaleY(1.02);\n  }\n}\n.animate__bounce[_ngcontent-%COMP%] {\n  animation-name: bounce;\n  transform-origin: center bottom;\n}\n@keyframes flash {\n  from,\n  50%,\n  to {\n    opacity: 1;\n  }\n\n  25%,\n  75% {\n    opacity: 0;\n  }\n}\n.animate__flash[_ngcontent-%COMP%] {\n  animation-name: flash;\n}\n\n@keyframes pulse {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.animate__pulse[_ngcontent-%COMP%] {\n  animation-name: pulse;\n  animation-timing-function: ease-in-out;\n}\n@keyframes rubberBand {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    transform: scale3d(0.95, 1.05, 1);\n  }\n\n  75% {\n    transform: scale3d(1.05, 0.95, 1);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.animate__rubberBand[_ngcontent-%COMP%] {\n  animation-name: rubberBand;\n}\n@keyframes shakeX {\n  from,\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translate3d(10px, 0, 0);\n  }\n}\n.animate__shakeX[_ngcontent-%COMP%] {\n  animation-name: shakeX;\n}\n@keyframes shakeY {\n  from,\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translate3d(0, -10px, 0);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translate3d(0, 10px, 0);\n  }\n}\n.animate__shakeY[_ngcontent-%COMP%] {\n  animation-name: shakeY;\n}\n@keyframes headShake {\n  0% {\n    transform: translateX(0);\n  }\n\n  6.5% {\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    transform: translateX(0);\n  }\n}\n.animate__headShake[_ngcontent-%COMP%] {\n  animation-timing-function: ease-in-out;\n  animation-name: headShake;\n}\n@keyframes swing {\n  20% {\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n.animate__swing[_ngcontent-%COMP%] {\n  transform-origin: top center;\n  animation-name: swing;\n}\n@keyframes tada {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%,\n  20% {\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%,\n  60%,\n  80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.animate__tada[_ngcontent-%COMP%] {\n  animation-name: tada;\n}\n\n@keyframes wobble {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  15% {\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__wobble[_ngcontent-%COMP%] {\n  animation-name: wobble;\n}\n@keyframes jello {\n  from,\n  11.1%,\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  22.2% {\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n.animate__jello[_ngcontent-%COMP%] {\n  animation-name: jello;\n  transform-origin: center;\n}\n@keyframes heartBeat {\n  0% {\n    transform: scale(1);\n  }\n\n  14% {\n    transform: scale(1.3);\n  }\n\n  28% {\n    transform: scale(1);\n  }\n\n  42% {\n    transform: scale(1.3);\n  }\n\n  70% {\n    transform: scale(1);\n  }\n}\n.animate__heartBeat[_ngcontent-%COMP%] {\n  animation-name: heartBeat;\n  animation-duration: calc(1s * 1.3);\n  animation-duration: calc(var(--animate-duration) * 1.3);\n  animation-timing-function: ease-in-out;\n}\n\n@keyframes backInDown {\n  0% {\n    transform: translateY(-1200px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  80% {\n    transform: translateY(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.animate__backInDown[_ngcontent-%COMP%] {\n  animation-name: backInDown;\n}\n@keyframes backInLeft {\n  0% {\n    transform: translateX(-2000px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  80% {\n    transform: translateX(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.animate__backInLeft[_ngcontent-%COMP%] {\n  animation-name: backInLeft;\n}\n@keyframes backInRight {\n  0% {\n    transform: translateX(2000px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  80% {\n    transform: translateX(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.animate__backInRight[_ngcontent-%COMP%] {\n  animation-name: backInRight;\n}\n@keyframes backInUp {\n  0% {\n    transform: translateY(1200px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  80% {\n    transform: translateY(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.animate__backInUp[_ngcontent-%COMP%] {\n  animation-name: backInUp;\n}\n\n@keyframes backOutDown {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  20% {\n    transform: translateY(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    transform: translateY(700px) scale(0.7);\n    opacity: 0.7;\n  }\n}\n.animate__backOutDown[_ngcontent-%COMP%] {\n  animation-name: backOutDown;\n}\n@keyframes backOutLeft {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  20% {\n    transform: translateX(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    transform: translateX(-2000px) scale(0.7);\n    opacity: 0.7;\n  }\n}\n.animate__backOutLeft[_ngcontent-%COMP%] {\n  animation-name: backOutLeft;\n}\n@keyframes backOutRight {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  20% {\n    transform: translateX(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    transform: translateX(2000px) scale(0.7);\n    opacity: 0.7;\n  }\n}\n.animate__backOutRight[_ngcontent-%COMP%] {\n  animation-name: backOutRight;\n}\n@keyframes backOutUp {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  20% {\n    transform: translateY(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    transform: translateY(-700px) scale(0.7);\n    opacity: 0.7;\n  }\n}\n.animate__backOutUp[_ngcontent-%COMP%] {\n  animation-name: backOutUp;\n}\n\n@keyframes bounceIn {\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  20% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    transform: scale3d(0.97, 0.97, 0.97);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n.animate__bounceIn[_ngcontent-%COMP%] {\n  animation-duration: calc(1s * 0.75);\n  animation-duration: calc(var(--animate-duration) * 0.75);\n  animation-name: bounceIn;\n}\n@keyframes bounceInDown {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0) scaleY(3);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0) scaleY(0.9);\n  }\n\n  75% {\n    transform: translate3d(0, -10px, 0) scaleY(0.95);\n  }\n\n  90% {\n    transform: translate3d(0, 5px, 0) scaleY(0.985);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__bounceInDown[_ngcontent-%COMP%] {\n  animation-name: bounceInDown;\n}\n@keyframes bounceInLeft {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0) scaleX(3);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0) scaleX(1);\n  }\n\n  75% {\n    transform: translate3d(-10px, 0, 0) scaleX(0.98);\n  }\n\n  90% {\n    transform: translate3d(5px, 0, 0) scaleX(0.995);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__bounceInLeft[_ngcontent-%COMP%] {\n  animation-name: bounceInLeft;\n}\n@keyframes bounceInRight {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0) scaleX(3);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0) scaleX(1);\n  }\n\n  75% {\n    transform: translate3d(10px, 0, 0) scaleX(0.98);\n  }\n\n  90% {\n    transform: translate3d(-5px, 0, 0) scaleX(0.995);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__bounceInRight[_ngcontent-%COMP%] {\n  animation-name: bounceInRight;\n}\n@keyframes bounceInUp {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0) scaleY(5);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  75% {\n    transform: translate3d(0, 10px, 0) scaleY(0.95);\n  }\n\n  90% {\n    transform: translate3d(0, -5px, 0) scaleY(0.985);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__bounceInUp[_ngcontent-%COMP%] {\n  animation-name: bounceInUp;\n}\n\n@keyframes bounceOut {\n  20% {\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  50%,\n  55% {\n    opacity: 1;\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n}\n.animate__bounceOut[_ngcontent-%COMP%] {\n  animation-duration: calc(1s * 0.75);\n  animation-duration: calc(var(--animate-duration) * 0.75);\n  animation-name: bounceOut;\n}\n@keyframes bounceOutDown {\n  20% {\n    transform: translate3d(0, 10px, 0) scaleY(0.985);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0) scaleY(3);\n  }\n}\n.animate__bounceOutDown[_ngcontent-%COMP%] {\n  animation-name: bounceOutDown;\n}\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0) scaleX(0.9);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0) scaleX(2);\n  }\n}\n.animate__bounceOutLeft[_ngcontent-%COMP%] {\n  animation-name: bounceOutLeft;\n}\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0) scaleX(0.9);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0) scaleX(2);\n  }\n}\n.animate__bounceOutRight[_ngcontent-%COMP%] {\n  animation-name: bounceOutRight;\n}\n@keyframes bounceOutUp {\n  20% {\n    transform: translate3d(0, -10px, 0) scaleY(0.985);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0) scaleY(0.9);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0) scaleY(3);\n  }\n}\n.animate__bounceOutUp[_ngcontent-%COMP%] {\n  animation-name: bounceOutUp;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n.animate__fadeIn[_ngcontent-%COMP%] {\n  animation-name: fadeIn;\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInDown[_ngcontent-%COMP%] {\n  animation-name: fadeInDown;\n}\n@keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInDownBig[_ngcontent-%COMP%] {\n  animation-name: fadeInDownBig;\n}\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInLeft[_ngcontent-%COMP%] {\n  animation-name: fadeInLeft;\n}\n@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInLeftBig[_ngcontent-%COMP%] {\n  animation-name: fadeInLeftBig;\n}\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInRight[_ngcontent-%COMP%] {\n  animation-name: fadeInRight;\n}\n@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInRightBig[_ngcontent-%COMP%] {\n  animation-name: fadeInRightBig;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInUp[_ngcontent-%COMP%] {\n  animation-name: fadeInUp;\n}\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInUpBig[_ngcontent-%COMP%] {\n  animation-name: fadeInUpBig;\n}\n@keyframes fadeInTopLeft {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInTopLeft[_ngcontent-%COMP%] {\n  animation-name: fadeInTopLeft;\n}\n@keyframes fadeInTopRight {\n  from {\n    opacity: 0;\n    transform: translate3d(100%, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInTopRight[_ngcontent-%COMP%] {\n  animation-name: fadeInTopRight;\n}\n@keyframes fadeInBottomLeft {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInBottomLeft[_ngcontent-%COMP%] {\n  animation-name: fadeInBottomLeft;\n}\n@keyframes fadeInBottomRight {\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInBottomRight[_ngcontent-%COMP%] {\n  animation-name: fadeInBottomRight;\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n.animate__fadeOut[_ngcontent-%COMP%] {\n  animation-name: fadeOut;\n}\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n.animate__fadeOutDown[_ngcontent-%COMP%] {\n  animation-name: fadeOutDown;\n}\n@keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n.animate__fadeOutDownBig[_ngcontent-%COMP%] {\n  animation-name: fadeOutDownBig;\n}\n@keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n.animate__fadeOutLeft[_ngcontent-%COMP%] {\n  animation-name: fadeOutLeft;\n}\n@keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n.animate__fadeOutLeftBig[_ngcontent-%COMP%] {\n  animation-name: fadeOutLeftBig;\n}\n@keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n.animate__fadeOutRight[_ngcontent-%COMP%] {\n  animation-name: fadeOutRight;\n}\n@keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n.animate__fadeOutRightBig[_ngcontent-%COMP%] {\n  animation-name: fadeOutRightBig;\n}\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n.animate__fadeOutUp[_ngcontent-%COMP%] {\n  animation-name: fadeOutUp;\n}\n@keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n.animate__fadeOutUpBig[_ngcontent-%COMP%] {\n  animation-name: fadeOutUpBig;\n}\n@keyframes fadeOutTopLeft {\n  from {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(-100%, -100%, 0);\n  }\n}\n.animate__fadeOutTopLeft[_ngcontent-%COMP%] {\n  animation-name: fadeOutTopLeft;\n}\n@keyframes fadeOutTopRight {\n  from {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(100%, -100%, 0);\n  }\n}\n.animate__fadeOutTopRight[_ngcontent-%COMP%] {\n  animation-name: fadeOutTopRight;\n}\n@keyframes fadeOutBottomRight {\n  from {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 100%, 0);\n  }\n}\n.animate__fadeOutBottomRight[_ngcontent-%COMP%] {\n  animation-name: fadeOutBottomRight;\n}\n@keyframes fadeOutBottomLeft {\n  from {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(-100%, 100%, 0);\n  }\n}\n.animate__fadeOutBottomLeft[_ngcontent-%COMP%] {\n  animation-name: fadeOutBottomLeft;\n}\n\n@keyframes flip {\n  from {\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg);\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg);\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg);\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);\n    animation-timing-function: ease-in;\n  }\n}\n.animate__animated.animate__flip[_ngcontent-%COMP%] {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  animation-name: flip;\n}\n@keyframes flipInX {\n  from {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n}\n.animate__flipInX[_ngcontent-%COMP%] {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  animation-name: flipInX;\n}\n@keyframes flipInY {\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n}\n.animate__flipInY[_ngcontent-%COMP%] {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  animation-name: flipInY;\n}\n@keyframes flipOutX {\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n.animate__flipOutX[_ngcontent-%COMP%] {\n  animation-duration: calc(1s * 0.75);\n  animation-duration: calc(var(--animate-duration) * 0.75);\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n@keyframes flipOutY {\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n.animate__flipOutY[_ngcontent-%COMP%] {\n  animation-duration: calc(1s * 0.75);\n  animation-duration: calc(var(--animate-duration) * 0.75);\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  animation-name: flipOutY;\n}\n\n@keyframes lightSpeedInRight {\n  from {\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: skewX(-5deg);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__lightSpeedInRight[_ngcontent-%COMP%] {\n  animation-name: lightSpeedInRight;\n  animation-timing-function: ease-out;\n}\n@keyframes lightSpeedInLeft {\n  from {\n    transform: translate3d(-100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n\n  60% {\n    transform: skewX(-20deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: skewX(5deg);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__lightSpeedInLeft[_ngcontent-%COMP%] {\n  animation-name: lightSpeedInLeft;\n  animation-timing-function: ease-out;\n}\n@keyframes lightSpeedOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n.animate__lightSpeedOutRight[_ngcontent-%COMP%] {\n  animation-name: lightSpeedOutRight;\n  animation-timing-function: ease-in;\n}\n@keyframes lightSpeedOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(-100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n}\n.animate__lightSpeedOutLeft[_ngcontent-%COMP%] {\n  animation-name: lightSpeedOutLeft;\n  animation-timing-function: ease-in;\n}\n\n@keyframes rotateIn {\n  from {\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.animate__rotateIn[_ngcontent-%COMP%] {\n  animation-name: rotateIn;\n  transform-origin: center;\n}\n@keyframes rotateInDownLeft {\n  from {\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.animate__rotateInDownLeft[_ngcontent-%COMP%] {\n  animation-name: rotateInDownLeft;\n  transform-origin: left bottom;\n}\n@keyframes rotateInDownRight {\n  from {\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.animate__rotateInDownRight[_ngcontent-%COMP%] {\n  animation-name: rotateInDownRight;\n  transform-origin: right bottom;\n}\n@keyframes rotateInUpLeft {\n  from {\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.animate__rotateInUpLeft[_ngcontent-%COMP%] {\n  animation-name: rotateInUpLeft;\n  transform-origin: left bottom;\n}\n@keyframes rotateInUpRight {\n  from {\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.animate__rotateInUpRight[_ngcontent-%COMP%] {\n  animation-name: rotateInUpRight;\n  transform-origin: right bottom;\n}\n\n@keyframes rotateOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n.animate__rotateOut[_ngcontent-%COMP%] {\n  animation-name: rotateOut;\n  transform-origin: center;\n}\n@keyframes rotateOutDownLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n.animate__rotateOutDownLeft[_ngcontent-%COMP%] {\n  animation-name: rotateOutDownLeft;\n  transform-origin: left bottom;\n}\n@keyframes rotateOutDownRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n.animate__rotateOutDownRight[_ngcontent-%COMP%] {\n  animation-name: rotateOutDownRight;\n  transform-origin: right bottom;\n}\n@keyframes rotateOutUpLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n.animate__rotateOutUpLeft[_ngcontent-%COMP%] {\n  animation-name: rotateOutUpLeft;\n  transform-origin: left bottom;\n}\n@keyframes rotateOutUpRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n.animate__rotateOutUpRight[_ngcontent-%COMP%] {\n  animation-name: rotateOutUpRight;\n  transform-origin: right bottom;\n}\n\n@keyframes hinge {\n  0% {\n    animation-timing-function: ease-in-out;\n  }\n\n  20%,\n  60% {\n    transform: rotate3d(0, 0, 1, 80deg);\n    animation-timing-function: ease-in-out;\n  }\n\n  40%,\n  80% {\n    transform: rotate3d(0, 0, 1, 60deg);\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n.animate__hinge[_ngcontent-%COMP%] {\n  animation-duration: calc(1s * 2);\n  animation-duration: calc(var(--animate-duration) * 2);\n  animation-name: hinge;\n  transform-origin: top left;\n}\n@keyframes jackInTheBox {\n  from {\n    opacity: 0;\n    transform: scale(0.1) rotate(30deg);\n    transform-origin: center bottom;\n  }\n\n  50% {\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.animate__jackInTheBox[_ngcontent-%COMP%] {\n  animation-name: jackInTheBox;\n}\n\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__rollIn[_ngcontent-%COMP%] {\n  animation-name: rollIn;\n}\n\n@keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n.animate__rollOut[_ngcontent-%COMP%] {\n  animation-name: rollOut;\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n.animate__zoomIn[_ngcontent-%COMP%] {\n  animation-name: zoomIn;\n}\n@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n.animate__zoomInDown[_ngcontent-%COMP%] {\n  animation-name: zoomInDown;\n}\n@keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n.animate__zoomInLeft[_ngcontent-%COMP%] {\n  animation-name: zoomInLeft;\n}\n@keyframes zoomInRight {\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n.animate__zoomInRight[_ngcontent-%COMP%] {\n  animation-name: zoomInRight;\n}\n@keyframes zoomInUp {\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n.animate__zoomInUp[_ngcontent-%COMP%] {\n  animation-name: zoomInUp;\n}\n\n@keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n.animate__zoomOut[_ngcontent-%COMP%] {\n  animation-name: zoomOut;\n}\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n.animate__zoomOutDown[_ngcontent-%COMP%] {\n  animation-name: zoomOutDown;\n  transform-origin: center bottom;\n}\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n  }\n}\n.animate__zoomOutLeft[_ngcontent-%COMP%] {\n  animation-name: zoomOutLeft;\n  transform-origin: left center;\n}\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n  }\n}\n.animate__zoomOutRight[_ngcontent-%COMP%] {\n  animation-name: zoomOutRight;\n  transform-origin: right center;\n}\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n.animate__zoomOutUp[_ngcontent-%COMP%] {\n  animation-name: zoomOutUp;\n  transform-origin: center bottom;\n}\n\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__slideInDown[_ngcontent-%COMP%] {\n  animation-name: slideInDown;\n}\n@keyframes slideInLeft {\n  from {\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__slideInLeft[_ngcontent-%COMP%] {\n  animation-name: slideInLeft;\n}\n@keyframes slideInRight {\n  from {\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__slideInRight[_ngcontent-%COMP%] {\n  animation-name: slideInRight;\n}\n@keyframes slideInUp {\n  from {\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__slideInUp[_ngcontent-%COMP%] {\n  animation-name: slideInUp;\n}\n\n@keyframes slideOutDown {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n.animate__slideOutDown[_ngcontent-%COMP%] {\n  animation-name: slideOutDown;\n}\n@keyframes slideOutLeft {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n.animate__slideOutLeft[_ngcontent-%COMP%] {\n  animation-name: slideOutLeft;\n}\n@keyframes slideOutRight {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n.animate__slideOutRight[_ngcontent-%COMP%] {\n  animation-name: slideOutRight;\n}\n@keyframes slideOutUp {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n.animate__slideOutUp[_ngcontent-%COMP%] {\n  animation-name: slideOutUp;\n}\n.sidebar-body[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    display: block;\r\n    width: 20vw;\r\n    height: 100%;\r\n    background-color: #C0A9BD;\r\n    color: white;\r\n    z-index: 100;\r\n    padding-top: 3vh;\r\n    padding-bottom: 3vh;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\n.button-cierre[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    left: 20vw;\r\n    background-color: #b09bae;\r\n    border-radius: 0px 10px 10px 0px;\r\n    padding: 5px;\r\n    top: 1vh;\r\n    cursor: pointer;\r\n    color: white;\r\n    z-index: 99;\r\n    display: block;\r\n}\n.button-abre[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    display: block;\r\n    left: 0vw;\r\n    background-color: #b09bae;\r\n    border-radius: 0px 10px 10px 0px;\r\n    padding: 5px;\r\n    top: 1vh;\r\n    cursor: pointer;\r\n    color: white;\r\n    z-index: 99;\r\n}\n.button-cierre[_ngcontent-%COMP%]:hover{\r\n    background-color: #9e8b9c;\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hbmltYXRlLmNzcy9hbmltYXRlLmNzcyIsInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBQzs7Ozs7O0VBTWY7QUFDRjtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFFRSxzQkFBc0I7RUFFdEIsMkNBQTJDO0VBRTNDLHlCQUF5QjtBQUMzQjtBQUNBO0VBRUUsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFFRSw0QkFBNEI7RUFFNUIsZ0RBQWdEO0FBQ2xEO0FBQ0E7RUFFRSxzQ0FBc0M7RUFFdEMsMERBQTBEO0FBQzVEO0FBQ0E7RUFFRSxzQ0FBc0M7RUFFdEMsMERBQTBEO0FBQzVEO0FBQ0E7RUFFRSxtQkFBbUI7RUFFbkIscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFFRSw2QkFBNkI7RUFFN0IsK0NBQStDO0FBQ2pEO0FBQ0E7RUFFRSw2QkFBNkI7RUFFN0IsK0NBQStDO0FBQ2pEO0FBQ0E7RUFFRSw2QkFBNkI7RUFFN0IsK0NBQStDO0FBQ2pEO0FBQ0E7RUFFRSw2QkFBNkI7RUFFN0IsK0NBQStDO0FBQ2pEO0FBQ0E7RUFFRSxnQ0FBZ0M7RUFFaEMscURBQXFEO0FBQ3ZEO0FBQ0E7RUFFRSxrQ0FBa0M7RUFFbEMsdURBQXVEO0FBQ3pEO0FBQ0E7RUFFRSxnQ0FBZ0M7RUFFaEMscURBQXFEO0FBQ3ZEO0FBQ0E7RUFFRSxnQ0FBZ0M7RUFFaEMscURBQXFEO0FBQ3ZEO0FBQ0E7RUFDRTtJQUVFLGtDQUFrQztJQUVsQyxtQ0FBbUM7SUFFbkMsdUNBQXVDO0VBQ3pDOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFDQSx1QkFBdUI7QUF1Q3ZCO0VBQ0U7Ozs7SUFLRSw4REFBOEQ7SUFFOUQsK0JBQStCO0VBQ2pDOztFQUVBOztJQUdFLGlFQUFpRTtJQUVqRSwrQ0FBK0M7RUFDakQ7O0VBRUE7SUFFRSxpRUFBaUU7SUFF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QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixRQUFRO0lBQ1IsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osUUFBUTtJQUNSLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7LyohXG4gKiBhbmltYXRlLmNzcyAtIGh0dHBzOi8vYW5pbWF0ZS5zdHlsZS9cbiAqIFZlcnNpb24gLSA0LjEuMVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIC0gaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAyMCBBbmltYXRlLmNzc1xuICovXG46cm9vdCB7XG4gIC0tYW5pbWF0ZS1kdXJhdGlvbjogMXM7XG4gIC0tYW5pbWF0ZS1kZWxheTogMXM7XG4gIC0tYW5pbWF0ZS1yZXBlYXQ6IDE7XG59XG4uYW5pbWF0ZV9fYW5pbWF0ZWQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1hbmltYXRlLWR1cmF0aW9uKTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1hbmltYXRlLWR1cmF0aW9uKTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2luZmluaXRlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fcmVwZWF0LTEge1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogdmFyKC0tYW5pbWF0ZS1yZXBlYXQpO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiB2YXIoLS1hbmltYXRlLXJlcGVhdCk7XG59XG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fcmVwZWF0LTIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGNhbGMoMSAqIDIpO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBjYWxjKDEgKiAyKTtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBjYWxjKHZhcigtLWFuaW1hdGUtcmVwZWF0KSAqIDIpO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBjYWxjKHZhcigtLWFuaW1hdGUtcmVwZWF0KSAqIDIpO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX3JlcGVhdC0zIHtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBjYWxjKDEgKiAzKTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogY2FsYygxICogMyk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogY2FsYyh2YXIoLS1hbmltYXRlLXJlcGVhdCkgKiAzKTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogY2FsYyh2YXIoLS1hbmltYXRlLXJlcGVhdCkgKiAzKTtcbn1cbi5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19kZWxheS0xcyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IHZhcigtLWFuaW1hdGUtZGVsYXkpO1xuICBhbmltYXRpb24tZGVsYXk6IHZhcigtLWFuaW1hdGUtZGVsYXkpO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2RlbGF5LTJzIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGMoMXMgKiAyKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDFzICogMik7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLWFuaW1hdGUtZGVsYXkpICogMik7XG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSAqIDIpO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2RlbGF5LTNzIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGMoMXMgKiAzKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDFzICogMyk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLWFuaW1hdGUtZGVsYXkpICogMyk7XG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSAqIDMpO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2RlbGF5LTRzIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGMoMXMgKiA0KTtcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDFzICogNCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLWFuaW1hdGUtZGVsYXkpICogNCk7XG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSAqIDQpO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2RlbGF5LTVzIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGMoMXMgKiA1KTtcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDFzICogNSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLWFuaW1hdGUtZGVsYXkpICogNSk7XG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSAqIDUpO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2Zhc3RlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzIC8gMik7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygxcyAvIDIpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSAvIDIpO1xuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgLyAyKTtcbn1cbi5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19mYXN0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgKiAwLjgpO1xuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgKiAwLjgpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSAqIDAuOCk7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSAqIDAuOCk7XG59XG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fc2xvdyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMik7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygxcyAqIDIpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSAqIDIpO1xuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAyKTtcbn1cbi5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19zbG93ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygxcyAqIDMpO1xuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgKiAzKTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAzKTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pICogMyk7XG59XG5AbWVkaWEgcHJpbnQsIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLmFuaW1hdGVfX2FuaW1hdGVkIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMW1zICFpbXBvcnRhbnQ7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxbXMgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDFtcyAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFtcyAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbmltYXRlX19hbmltYXRlZFtjbGFzcyo9J091dCddIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4vKiBBdHRlbnRpb24gc2Vla2VycyAgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2Uge1xuICBmcm9tLFxuICAyMCUsXG4gIDUzJSxcbiAgdG8ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cblxuICA0MCUsXG4gIDQzJSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApIHNjYWxlWSgxLjEpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApIHNjYWxlWSgxLjEpO1xuICB9XG5cbiAgNzAlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTVweCwgMCkgc2NhbGVZKDEuMDUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApIHNjYWxlWSgxLjA1KTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZVkoMC45NSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZVkoMC45NSk7XG4gIH1cblxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNHB4LCAwKSBzY2FsZVkoMS4wMik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNHB4LCAwKSBzY2FsZVkoMS4wMik7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYm91bmNlIHtcbiAgZnJvbSxcbiAgMjAlLFxuICA1MyUsXG4gIHRvIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgNDAlLFxuICA0MyUge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKSBzY2FsZVkoMS4xKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKSBzY2FsZVkoMS4xKTtcbiAgfVxuXG4gIDcwJSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApIHNjYWxlWSgxLjA1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKSBzY2FsZVkoMS4wNSk7XG4gIH1cblxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGVZKDAuOTUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGVZKDAuOTUpO1xuICB9XG5cbiAgOTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTRweCwgMCkgc2NhbGVZKDEuMDIpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTRweCwgMCkgc2NhbGVZKDEuMDIpO1xuICB9XG59XG4uYW5pbWF0ZV9fYm91bmNlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlO1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxhc2gge1xuICBmcm9tLFxuICA1MCUsXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMjUlLFxuICA3NSUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmxhc2gge1xuICBmcm9tLFxuICA1MCUsXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMjUlLFxuICA3NSUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5hbmltYXRlX19mbGFzaCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsYXNoO1xuICBhbmltYXRpb24tbmFtZTogZmxhc2g7XG59XG4vKiBvcmlnaW5hbGx5IGF1dGhvcmVkIGJ5IE5pY2sgUGV0dGl0IC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2twZXR0aXQvZ2xpZGUgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzZSB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxufVxuLmFuaW1hdGVfX3B1bHNlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcHVsc2U7XG4gIGFuaW1hdGlvbi1uYW1lOiBwdWxzZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcnViYmVyQmFuZCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxuXG4gIDMwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4yNSwgMC43NSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMjUsIDAuNzUsIDEpO1xuICB9XG5cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjc1LCAxLjI1LCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XG4gIH1cblxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMTUsIDAuODUsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjE1LCAwLjg1LCAxKTtcbiAgfVxuXG4gIDY1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45NSwgMS4wNSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOTUsIDEuMDUsIDEpO1xuICB9XG5cbiAgNzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAwLjk1LCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMC45NSwgMSk7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJ1YmJlckJhbmQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gIH1cblxuICAzMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMjUsIDAuNzUsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjI1LCAwLjc1LCAxKTtcbiAgfVxuXG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNzUsIDEuMjUsIDEpO1xuICB9XG5cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjE1LCAwLjg1LCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xNSwgMC44NSwgMSk7XG4gIH1cblxuICA2NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuOTUsIDEuMDUsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjk1LCAxLjA1LCAxKTtcbiAgfVxuXG4gIDc1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMC45NSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDAuOTUsIDEpO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxufVxuLmFuaW1hdGVfX3J1YmJlckJhbmQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBydWJiZXJCYW5kO1xuICBhbmltYXRpb24tbmFtZTogcnViYmVyQmFuZDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzaGFrZVgge1xuICBmcm9tLFxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cblxuICAxMCUsXG4gIDMwJSxcbiAgNTAlLFxuICA3MCUsXG4gIDkwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcbiAgfVxuXG4gIDIwJSxcbiAgNDAlLFxuICA2MCUsXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2hha2VYIHtcbiAgZnJvbSxcbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgMTAlLFxuICAzMCUsXG4gIDUwJSxcbiAgNzAlLFxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XG4gIH1cblxuICAyMCUsXG4gIDQwJSxcbiAgNjAlLFxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fc2hha2VYIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2hha2VYO1xuICBhbmltYXRpb24tbmFtZTogc2hha2VYO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNoYWtlWSB7XG4gIGZyb20sXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuXG4gIDEwJSxcbiAgMzAlLFxuICA1MCUsXG4gIDcwJSxcbiAgOTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xuICB9XG5cbiAgMjAlLFxuICA0MCUsXG4gIDYwJSxcbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzaGFrZVkge1xuICBmcm9tLFxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cblxuICAxMCUsXG4gIDMwJSxcbiAgNTAlLFxuICA3MCUsXG4gIDkwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcbiAgfVxuXG4gIDIwJSxcbiAgNDAlLFxuICA2MCUsXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19zaGFrZVkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzaGFrZVk7XG4gIGFuaW1hdGlvbi1uYW1lOiBzaGFrZVk7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgaGVhZFNoYWtlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuXG4gIDYuNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZVkoLTlkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKTtcbiAgfVxuXG4gIDE4LjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpIHJvdGF0ZVkoN2RlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgcm90YXRlWSg3ZGVnKTtcbiAgfVxuXG4gIDMxLjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgcm90YXRlWSgtNWRlZyk7XG4gIH1cblxuICA0My41JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KSByb3RhdGVZKDNkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyk7XG4gIH1cblxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBoZWFkU2hha2Uge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG5cbiAgNi41JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZVkoLTlkZWcpO1xuICB9XG5cbiAgMTguNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgcm90YXRlWSg3ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpO1xuICB9XG5cbiAgMzEuNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZVkoLTVkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKTtcbiAgfVxuXG4gIDQzLjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCkgcm90YXRlWSgzZGVnKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG4uYW5pbWF0ZV9faGVhZFNoYWtlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGhlYWRTaGFrZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGhlYWRTaGFrZTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzd2luZyB7XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDE1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDE1ZGVnKTtcbiAgfVxuXG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0xMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtMTBkZWcpO1xuICB9XG5cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2luZyB7XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDE1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDE1ZGVnKTtcbiAgfVxuXG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0xMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtMTBkZWcpO1xuICB9XG5cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAwZGVnKTtcbiAgfVxufVxuLmFuaW1hdGVfX3N3aW5nIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzd2luZztcbiAgYW5pbWF0aW9uLW5hbWU6IHN3aW5nO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHRhZGEge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gIH1cblxuICAxMCUsXG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjksIDAuOSwgMC45KSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XG4gIH1cblxuICAzMCUsXG4gIDUwJSxcbiAgNzAlLFxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIDNkZWcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcbiAgfVxuXG4gIDQwJSxcbiAgNjAlLFxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyB0YWRhIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICB9XG5cbiAgMTAlLFxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xuICB9XG5cbiAgMzAlLFxuICA1MCUsXG4gIDcwJSxcbiAgOTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XG4gIH1cblxuICA0MCUsXG4gIDYwJSxcbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gIH1cbn1cbi5hbmltYXRlX190YWRhIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogdGFkYTtcbiAgYW5pbWF0aW9uLW5hbWU6IHRhZGE7XG59XG4vKiBvcmlnaW5hbGx5IGF1dGhvcmVkIGJ5IE5pY2sgUGV0dGl0IC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2twZXR0aXQvZ2xpZGUgKi9cbkAtd2Via2l0LWtleWZyYW1lcyB3b2JibGUge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuXG4gIDE1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcbiAgfVxuXG4gIDMwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDNkZWcpO1xuICB9XG5cbiAgNDUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xuICB9XG5cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAyZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMmRlZyk7XG4gIH1cblxuICA3NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTFkZWcpO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHdvYmJsZSB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgMTUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xuICB9XG5cbiAgMzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XG4gIH1cblxuICA0NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XG4gIH1cblxuICA2MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDJkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAyZGVnKTtcbiAgfVxuXG4gIDc1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTFkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMWRlZyk7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX193b2JibGUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB3b2JibGU7XG4gIGFuaW1hdGlvbi1uYW1lOiB3b2JibGU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgamVsbG8ge1xuICBmcm9tLFxuICAxMS4xJSxcbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgMjIuMiUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMTIuNWRlZykgc2tld1koLTEyLjVkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKTtcbiAgfVxuXG4gIDMzLjMlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goNi4yNWRlZykgc2tld1koNi4yNWRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3WCg2LjI1ZGVnKSBza2V3WSg2LjI1ZGVnKTtcbiAgfVxuXG4gIDQ0LjQlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpO1xuICB9XG5cbiAgNTUuNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyk7XG4gIH1cblxuICA2Ni42JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0wLjc4MTI1ZGVnKSBza2V3WSgtMC43ODEyNWRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMC43ODEyNWRlZykgc2tld1koLTAuNzgxMjVkZWcpO1xuICB9XG5cbiAgNzcuNyUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgwLjM5MDYyNWRlZykgc2tld1koMC4zOTA2MjVkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tld1goMC4zOTA2MjVkZWcpIHNrZXdZKDAuMzkwNjI1ZGVnKTtcbiAgfVxuXG4gIDg4LjglIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTAuMTk1MzEyNWRlZykgc2tld1koLTAuMTk1MzEyNWRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBqZWxsbyB7XG4gIGZyb20sXG4gIDExLjElLFxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cblxuICAyMi4yJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0xMi41ZGVnKSBza2V3WSgtMTIuNWRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMTIuNWRlZykgc2tld1koLTEyLjVkZWcpO1xuICB9XG5cbiAgMzMuMyUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCg2LjI1ZGVnKSBza2V3WSg2LjI1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpO1xuICB9XG5cbiAgNDQuNCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyk7XG4gIH1cblxuICA1NS41JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKTtcbiAgfVxuXG4gIDY2LjYlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTAuNzgxMjVkZWcpIHNrZXdZKC0wLjc4MTI1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0wLjc4MTI1ZGVnKSBza2V3WSgtMC43ODEyNWRlZyk7XG4gIH1cblxuICA3Ny43JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDAuMzkwNjI1ZGVnKSBza2V3WSgwLjM5MDYyNWRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgwLjM5MDYyNWRlZykgc2tld1koMC4zOTA2MjVkZWcpO1xuICB9XG5cbiAgODguOCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0wLjE5NTMxMjVkZWcpIHNrZXdZKC0wLjE5NTMxMjVkZWcpO1xuICB9XG59XG4uYW5pbWF0ZV9famVsbG8ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBqZWxsbztcbiAgYW5pbWF0aW9uLW5hbWU6IGplbGxvO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGhlYXJ0QmVhdCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuXG4gIDE0JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICB9XG5cbiAgMjglIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuXG4gIDQyJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICB9XG5cbiAgNzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBoZWFydEJlYXQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cblxuICAxNCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgfVxuXG4gIDI4JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cblxuICA0MiUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgfVxuXG4gIDcwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi5hbmltYXRlX19oZWFydEJlYXQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBoZWFydEJlYXQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBoZWFydEJlYXQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMS4zKTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMS4zKTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAxLjMpO1xuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAxLjMpO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cbi8qIEJhY2sgZW50cmFuY2VzICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmFja0luRG93biB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTIwMHB4KSBzY2FsZSgwLjcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTIwMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgwLjcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBiYWNrSW5Eb3duIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMjAwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMjAwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uYW5pbWF0ZV9fYmFja0luRG93biB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJhY2tJbkRvd247XG4gIGFuaW1hdGlvbi1uYW1lOiBiYWNrSW5Eb3duO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJhY2tJbkxlZnQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmFja0luTGVmdCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwMHB4KSBzY2FsZSgwLjcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmFuaW1hdGVfX2JhY2tJbkxlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBiYWNrSW5MZWZ0O1xuICBhbmltYXRpb24tbmFtZTogYmFja0luTGVmdDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBiYWNrSW5SaWdodCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmFja0luUmlnaHQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwMHB4KSBzY2FsZSgwLjcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uYW5pbWF0ZV9fYmFja0luUmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBiYWNrSW5SaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJhY2tJblJpZ2h0O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJhY2tJblVwIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyMDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTIwMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgwLjcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBiYWNrSW5VcCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMjAwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyMDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5hbmltYXRlX19iYWNrSW5VcCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJhY2tJblVwO1xuICBhbmltYXRpb24tbmFtZTogYmFja0luVXA7XG59XG4vKiBCYWNrIGV4aXRzICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmFja091dERvd24ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgwLjcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxufVxuQGtleWZyYW1lcyBiYWNrT3V0RG93biB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG4uYW5pbWF0ZV9fYmFja091dERvd24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBiYWNrT3V0RG93bjtcbiAgYW5pbWF0aW9uLW5hbWU6IGJhY2tPdXREb3duO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJhY2tPdXRMZWZ0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJhY2tPdXRMZWZ0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG4uYW5pbWF0ZV9fYmFja091dExlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBiYWNrT3V0TGVmdDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJhY2tPdXRMZWZ0O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJhY2tPdXRSaWdodCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmFja091dFJpZ2h0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxufVxuLmFuaW1hdGVfX2JhY2tPdXRSaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJhY2tPdXRSaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJhY2tPdXRSaWdodDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBiYWNrT3V0VXAge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgwLjcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTcwMHB4KSBzY2FsZSgwLjcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzAwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJhY2tPdXRVcCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzAwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03MDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbn1cbi5hbmltYXRlX19iYWNrT3V0VXAge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBiYWNrT3V0VXA7XG4gIGFuaW1hdGlvbi1uYW1lOiBiYWNrT3V0VXA7XG59XG4vKiBCb3VuY2luZyBlbnRyYW5jZXMgICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW4ge1xuICBmcm9tLFxuICAyMCUsXG4gIDQwJSxcbiAgNjAlLFxuICA4MCUsXG4gIHRvIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICB9XG5cbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xuICB9XG5cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XG4gIH1cblxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjksIDAuOSwgMC45KTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjAzLCAxLjAzLCAxLjAzKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wMywgMS4wMywgMS4wMyk7XG4gIH1cblxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuOTcsIDAuOTcsIDAuOTcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjk3LCAwLjk3LCAwLjk3KTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBib3VuY2VJbiB7XG4gIGZyb20sXG4gIDIwJSxcbiAgNDAlLFxuICA2MCUsXG4gIDgwJSxcbiAgdG8ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gIH1cblxuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XG4gIH1cblxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcbiAgfVxuXG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDMsIDEuMDMsIDEuMDMpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjAzLCAxLjAzLCAxLjAzKTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45NywgMC45NywgMC45Nyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOTcsIDAuOTcsIDAuOTcpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICB9XG59XG4uYW5pbWF0ZV9fYm91bmNlSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygxcyAqIDAuNzUpO1xuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgKiAwLjc1KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAwLjc1KTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pICogMC43NSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW47XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5Eb3duIHtcbiAgZnJvbSxcbiAgNjAlLFxuICA3NSUsXG4gIDkwJSxcbiAgdG8ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gIH1cblxuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMDBweCwgMCkgc2NhbGVZKDMpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMDBweCwgMCkgc2NhbGVZKDMpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyNXB4LCAwKSBzY2FsZVkoMC45KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDI1cHgsIDApIHNjYWxlWSgwLjkpO1xuICB9XG5cbiAgNzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHNjYWxlWSgwLjk1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSBzY2FsZVkoMC45NSk7XG4gIH1cblxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApIHNjYWxlWSgwLjk4NSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApIHNjYWxlWSgwLjk4NSk7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYm91bmNlSW5Eb3duIHtcbiAgZnJvbSxcbiAgNjAlLFxuICA3NSUsXG4gIDkwJSxcbiAgdG8ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gIH1cblxuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMDBweCwgMCkgc2NhbGVZKDMpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMDBweCwgMCkgc2NhbGVZKDMpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyNXB4LCAwKSBzY2FsZVkoMC45KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDI1cHgsIDApIHNjYWxlWSgwLjkpO1xuICB9XG5cbiAgNzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHNjYWxlWSgwLjk1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSBzY2FsZVkoMC45NSk7XG4gIH1cblxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApIHNjYWxlWSgwLjk4NSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApIHNjYWxlWSgwLjk4NSk7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19ib3VuY2VJbkRvd24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbkRvd247XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbkRvd247XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5MZWZ0IHtcbiAgZnJvbSxcbiAgNjAlLFxuICA3NSUsXG4gIDkwJSxcbiAgdG8ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gIH1cblxuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwMDBweCwgMCwgMCkgc2NhbGVYKDMpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwMDBweCwgMCwgMCkgc2NhbGVYKDMpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNXB4LCAwLCAwKSBzY2FsZVgoMSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNXB4LCAwLCAwKSBzY2FsZVgoMSk7XG4gIH1cblxuICA3NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCkgc2NhbGVYKDAuOTgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApIHNjYWxlWCgwLjk4KTtcbiAgfVxuXG4gIDkwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgMCwgMCkgc2NhbGVYKDAuOTk1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgMCwgMCkgc2NhbGVYKDAuOTk1KTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBib3VuY2VJbkxlZnQge1xuICBmcm9tLFxuICA2MCUsXG4gIDc1JSxcbiAgOTAlLFxuICB0byB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgfVxuXG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAwMHB4LCAwLCAwKSBzY2FsZVgoMyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAwMHB4LCAwLCAwKSBzY2FsZVgoMyk7XG4gIH1cblxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI1cHgsIDAsIDApIHNjYWxlWCgxKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI1cHgsIDAsIDApIHNjYWxlWCgxKTtcbiAgfVxuXG4gIDc1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKSBzY2FsZVgoMC45OCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCkgc2NhbGVYKDAuOTgpO1xuICB9XG5cbiAgOTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKSBzY2FsZVgoMC45OTUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKSBzY2FsZVgoMC45OTUpO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fYm91bmNlSW5MZWZ0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5MZWZ0O1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5MZWZ0O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluUmlnaHQge1xuICBmcm9tLFxuICA2MCUsXG4gIDc1JSxcbiAgOTAlLFxuICB0byB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgfVxuXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwMDBweCwgMCwgMCkgc2NhbGVYKDMpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAwMHB4LCAwLCAwKSBzY2FsZVgoMyk7XG4gIH1cblxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNXB4LCAwLCAwKSBzY2FsZVgoMSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjVweCwgMCwgMCkgc2NhbGVYKDEpO1xuICB9XG5cbiAgNzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCkgc2NhbGVYKDAuOTgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCkgc2NhbGVYKDAuOTgpO1xuICB9XG5cbiAgOTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTVweCwgMCwgMCkgc2NhbGVYKDAuOTk1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01cHgsIDAsIDApIHNjYWxlWCgwLjk5NSk7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYm91bmNlSW5SaWdodCB7XG4gIGZyb20sXG4gIDYwJSxcbiAgNzUlLFxuICA5MCUsXG4gIHRvIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICB9XG5cbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAwMHB4LCAwLCAwKSBzY2FsZVgoMyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMDAwcHgsIDAsIDApIHNjYWxlWCgzKTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1cHgsIDAsIDApIHNjYWxlWCgxKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNXB4LCAwLCAwKSBzY2FsZVgoMSk7XG4gIH1cblxuICA3NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKSBzY2FsZVgoMC45OCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKSBzY2FsZVgoMC45OCk7XG4gIH1cblxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNXB4LCAwLCAwKSBzY2FsZVgoMC45OTUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTVweCwgMCwgMCkgc2NhbGVYKDAuOTk1KTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2JvdW5jZUluUmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5SaWdodDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJblVwIHtcbiAgZnJvbSxcbiAgNjAlLFxuICA3NSUsXG4gIDkwJSxcbiAgdG8ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gIH1cblxuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAzMDAwcHgsIDApIHNjYWxlWSg1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDMwMDBweCwgMCkgc2NhbGVZKDUpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgc2NhbGVZKDAuOSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgc2NhbGVZKDAuOSk7XG4gIH1cblxuICA3NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSBzY2FsZVkoMC45NSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSBzY2FsZVkoMC45NSk7XG4gIH1cblxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNXB4LCAwKSBzY2FsZVkoMC45ODUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTVweCwgMCkgc2NhbGVZKDAuOTg1KTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBib3VuY2VJblVwIHtcbiAgZnJvbSxcbiAgNjAlLFxuICA3NSUsXG4gIDkwJSxcbiAgdG8ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gIH1cblxuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAzMDAwcHgsIDApIHNjYWxlWSg1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDMwMDBweCwgMCkgc2NhbGVZKDUpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgc2NhbGVZKDAuOSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgc2NhbGVZKDAuOSk7XG4gIH1cblxuICA3NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSBzY2FsZVkoMC45NSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSBzY2FsZVkoMC45NSk7XG4gIH1cblxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNXB4LCAwKSBzY2FsZVkoMC45ODUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTVweCwgMCkgc2NhbGVZKDAuOTg1KTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2JvdW5jZUluVXAge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcbn1cbi8qIEJvdW5jaW5nIGV4aXRzICAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZU91dCB7XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpO1xuICB9XG5cbiAgNTAlLFxuICA1NSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZU91dCB7XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpO1xuICB9XG5cbiAgNTAlLFxuICA1NSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xuICB9XG59XG4uYW5pbWF0ZV9fYm91bmNlT3V0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgKiAwLjc1KTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMC43NSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pICogMC43NSk7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSAqIDAuNzUpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlT3V0RG93biB7XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHNjYWxlWSgwLjk4NSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSBzY2FsZVkoMC45ODUpO1xuICB9XG5cbiAgNDAlLFxuICA0NSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKSBzY2FsZVkoMC45KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKSBzY2FsZVkoMC45KTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApIHNjYWxlWSgzKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCkgc2NhbGVZKDMpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZU91dERvd24ge1xuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSBzY2FsZVkoMC45ODUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgc2NhbGVZKDAuOTg1KTtcbiAgfVxuXG4gIDQwJSxcbiAgNDUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgc2NhbGVZKDAuOSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgc2NhbGVZKDAuOSk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKSBzY2FsZVkoMyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApIHNjYWxlWSgzKTtcbiAgfVxufVxuLmFuaW1hdGVfX2JvdW5jZU91dERvd24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXREb3duO1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0RG93bjtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXRMZWZ0IHtcbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMHB4LCAwLCAwKSBzY2FsZVgoMC45KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwcHgsIDAsIDApIHNjYWxlWCgwLjkpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApIHNjYWxlWCgyKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApIHNjYWxlWCgyKTtcbiAgfVxufVxuQGtleWZyYW1lcyBib3VuY2VPdXRMZWZ0IHtcbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMHB4LCAwLCAwKSBzY2FsZVgoMC45KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwcHgsIDAsIDApIHNjYWxlWCgwLjkpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApIHNjYWxlWCgyKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApIHNjYWxlWCgyKTtcbiAgfVxufVxuLmFuaW1hdGVfX2JvdW5jZU91dExlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXRMZWZ0O1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0TGVmdDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXRSaWdodCB7XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwcHgsIDAsIDApIHNjYWxlWCgwLjkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwcHgsIDAsIDApIHNjYWxlWCgwLjkpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCkgc2NhbGVYKDIpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKSBzY2FsZVgoMik7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYm91bmNlT3V0UmlnaHQge1xuICAyMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMHB4LCAwLCAwKSBzY2FsZVgoMC45KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMHB4LCAwLCAwKSBzY2FsZVgoMC45KTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApIHNjYWxlWCgyKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCkgc2NhbGVYKDIpO1xuICB9XG59XG4uYW5pbWF0ZV9fYm91bmNlT3V0UmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXRSaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dFJpZ2h0O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZU91dFVwIHtcbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHNjYWxlWSgwLjk4NSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgc2NhbGVZKDAuOTg1KTtcbiAgfVxuXG4gIDQwJSxcbiAgNDUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKSBzY2FsZVkoMC45KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwcHgsIDApIHNjYWxlWSgwLjkpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApIHNjYWxlWSgzKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApIHNjYWxlWSgzKTtcbiAgfVxufVxuQGtleWZyYW1lcyBib3VuY2VPdXRVcCB7XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSBzY2FsZVkoMC45ODUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHNjYWxlWSgwLjk4NSk7XG4gIH1cblxuICA0MCUsXG4gIDQ1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCkgc2NhbGVZKDAuOSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKSBzY2FsZVkoMC45KTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKSBzY2FsZVkoMyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKSBzY2FsZVkoMyk7XG4gIH1cbn1cbi5hbmltYXRlX19ib3VuY2VPdXRVcCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dFVwO1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0VXA7XG59XG4vKiBGYWRpbmcgZW50cmFuY2VzICAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2ZhZGVJbkRvd24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duQmlnIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd25CaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlSW5Eb3duQmlnIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bkJpZztcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd25CaWc7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluTGVmdCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbkxlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2ZhZGVJbkxlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5MZWZ0O1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluTGVmdDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5MZWZ0QmlnIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbkxlZnRCaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlSW5MZWZ0QmlnIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluTGVmdEJpZztcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnRCaWc7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluUmlnaHQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluUmlnaHQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlSW5SaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluUmlnaHRCaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0QmlnIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2ZhZGVJblJpZ2h0QmlnIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHRCaWc7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodEJpZztcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5VcCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5VcCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2ZhZGVJblVwIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluVXA7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5VcEJpZyB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluVXBCaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fZmFkZUluVXBCaWcge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcEJpZztcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwQmlnO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblRvcExlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIC0xMDAlLCAwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5Ub3BMZWZ0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAtMTAwJSwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlSW5Ub3BMZWZ0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluVG9wTGVmdDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblRvcExlZnQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluVG9wUmlnaHQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAtMTAwJSwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluVG9wUmlnaHQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAtMTAwJSwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlSW5Ub3BSaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblRvcFJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluVG9wUmlnaHQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluQm90dG9tTGVmdCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAxMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAxMDAlLCAwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5Cb3R0b21MZWZ0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDEwMCUsIDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fZmFkZUluQm90dG9tTGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkJvdHRvbUxlZnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Cb3R0b21MZWZ0O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkJvdHRvbVJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAxMDAlLCAwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5Cb3R0b21SaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMTAwJSwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlSW5Cb3R0b21SaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkJvdHRvbVJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluQm90dG9tUmlnaHQ7XG59XG4vKiBGYWRpbmcgZXhpdHMgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlT3V0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dERvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZU91dERvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlT3V0RG93biB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXREb3duO1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dERvd247XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dERvd25CaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXREb3duQmlnIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2ZhZGVPdXREb3duQmlnIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dERvd25CaWc7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0RG93bkJpZztcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0TGVmdCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXRMZWZ0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlT3V0TGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRMZWZ0O1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dExlZnQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dExlZnRCaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZU91dExlZnRCaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlT3V0TGVmdEJpZyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRMZWZ0QmlnO1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dExlZnRCaWc7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXRSaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2ZhZGVPdXRSaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRSaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRSaWdodDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0UmlnaHRCaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXRSaWdodEJpZyB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlT3V0UmlnaHRCaWcge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0UmlnaHRCaWc7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0UmlnaHRCaWc7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZU91dFVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlT3V0VXAge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXA7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXA7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFVwQmlnIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXRVcEJpZyB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2ZhZGVPdXRVcEJpZyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRVcEJpZztcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRVcEJpZztcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0VG9wTGVmdCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgLTEwMCUsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXRUb3BMZWZ0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAtMTAwJSwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlT3V0VG9wTGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRUb3BMZWZ0O1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dFRvcExlZnQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFRvcFJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgLTEwMCUsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXRUb3BSaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIC0xMDAlLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2ZhZGVPdXRUb3BSaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRUb3BSaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRUb3BSaWdodDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0Qm90dG9tUmlnaHQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAxMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDEwMCUsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXRCb3R0b21SaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMTAwJSwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlT3V0Qm90dG9tUmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0Qm90dG9tUmlnaHQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0Qm90dG9tUmlnaHQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dEJvdHRvbUxlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMTAwJSwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZU91dEJvdHRvbUxlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMTAwJSwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlT3V0Qm90dG9tTGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRCb3R0b21MZWZ0O1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dEJvdHRvbUxlZnQ7XG59XG4vKiBGbGlwcGVycyAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXAge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGUzZCgwLCAxLCAwLCAtMzYwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG5cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMTUwcHgpXG4gICAgICByb3RhdGUzZCgwLCAxLCAwLCAtMTkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxuICAgICAgcm90YXRlM2QoMCwgMSwgMCwgLTE5MGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuXG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxuICAgICAgcm90YXRlM2QoMCwgMSwgMCwgLTE3MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweClcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIC0xNzBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG5cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMC45NSwgMC45NSwgMC45NSkgdHJhbnNsYXRlM2QoMCwgMCwgMClcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMC45NSwgMC45NSwgMC45NSkgdHJhbnNsYXRlM2QoMCwgMCwgMClcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGUzZCgwLCAxLCAwLCAwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDApIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZsaXAge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGUzZCgwLCAxLCAwLCAtMzYwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG5cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMTUwcHgpXG4gICAgICByb3RhdGUzZCgwLCAxLCAwLCAtMTkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxuICAgICAgcm90YXRlM2QoMCwgMSwgMCwgLTE5MGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuXG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxuICAgICAgcm90YXRlM2QoMCwgMSwgMCwgLTE3MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweClcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIC0xNzBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG5cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMC45NSwgMC45NSwgMC45NSkgdHJhbnNsYXRlM2QoMCwgMCwgMClcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMC45NSwgMC45NSwgMC45NSkgdHJhbnNsYXRlM2QoMCwgMCwgMClcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGUzZCgwLCAxLCAwLCAwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDApIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG59XG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZmxpcCB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmxpcDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZsaXA7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxpcEluWCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDkwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC0yMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgfVxuXG4gIDYwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAxMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgMTBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTVkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC01ZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZsaXBJblgge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtMjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC0yMGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cblxuICA2MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgMTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDEwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC01ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtNWRlZyk7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcbiAgfVxufVxuLmFuaW1hdGVfX2ZsaXBJblgge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbGlwSW5YO1xuICBhbmltYXRpb24tbmFtZTogZmxpcEluWDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmbGlwSW5ZIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMjBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG5cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDEwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAxMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtNWRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTVkZWcpO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmxpcEluWSB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDkwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC0yMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgfVxuXG4gIDYwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAxMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgMTBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTVkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC01ZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xuICB9XG59XG4uYW5pbWF0ZV9fZmxpcEluWSB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsaXBJblk7XG4gIGFuaW1hdGlvbi1uYW1lOiBmbGlwSW5ZO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXBPdXRYIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcbiAgfVxuXG4gIDMwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtMjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC0yMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBmbGlwT3V0WCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XG4gIH1cblxuICAzMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtMjBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5hbmltYXRlX19mbGlwT3V0WCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMC43NSk7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygxcyAqIDAuNzUpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSAqIDAuNzUpO1xuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAwLjc1KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmxpcE91dFg7XG4gIGFuaW1hdGlvbi1uYW1lOiBmbGlwT3V0WDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmbGlwT3V0WSB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XG4gIH1cblxuICAzMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTE1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTVkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmxpcE91dFkge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xuICB9XG5cbiAgMzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC0xNWRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTE1ZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDkwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uYW5pbWF0ZV9fZmxpcE91dFkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygxcyAqIDAuNzUpO1xuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgKiAwLjc1KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAwLjc1KTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pICogMC43NSk7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsaXBPdXRZO1xuICBhbmltYXRpb24tbmFtZTogZmxpcE91dFk7XG59XG4vKiBMaWdodHNwZWVkICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgbGlnaHRTcGVlZEluUmlnaHQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgc2tld1goLTMwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKC0zMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDYwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDIwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxpZ2h0U3BlZWRJblJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKC0zMGRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSBza2V3WCgtMzBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA2MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgyMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgyMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC01ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC01ZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2xpZ2h0U3BlZWRJblJpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbGlnaHRTcGVlZEluUmlnaHQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkSW5SaWdodDtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbGlnaHRTcGVlZEluTGVmdCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgc2tld1goMzBkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHNrZXdYKDMwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0yMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDVkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tld1goNWRlZyk7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGlnaHRTcGVlZEluTGVmdCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgc2tld1goMzBkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHNrZXdYKDMwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0yMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDVkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tld1goNWRlZyk7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19saWdodFNwZWVkSW5MZWZ0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbGlnaHRTcGVlZEluTGVmdDtcbiAgYW5pbWF0aW9uLW5hbWU6IGxpZ2h0U3BlZWRJbkxlZnQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGxpZ2h0U3BlZWRPdXRSaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKDMwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKDMwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxpZ2h0U3BlZWRPdXRSaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKDMwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKDMwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uYW5pbWF0ZV9fbGlnaHRTcGVlZE91dFJpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbGlnaHRTcGVlZE91dFJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogbGlnaHRTcGVlZE91dFJpZ2h0O1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbGlnaHRTcGVlZE91dExlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgc2tld1goLTMwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSBza2V3WCgtMzBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGlnaHRTcGVlZE91dExlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgc2tld1goLTMwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSBza2V3WCgtMzBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5hbmltYXRlX19saWdodFNwZWVkT3V0TGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGxpZ2h0U3BlZWRPdXRMZWZ0O1xuICBhbmltYXRpb24tbmFtZTogbGlnaHRTcGVlZE91dExlZnQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbn1cbi8qIFJvdGF0aW5nIGVudHJhbmNlcyAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZUluIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0yMDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTIwMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZUluIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0yMDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTIwMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uYW5pbWF0ZV9fcm90YXRlSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVJbjtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZUluRG93bkxlZnQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZUluRG93bkxlZnQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uYW5pbWF0ZV9fcm90YXRlSW5Eb3duTGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluRG93bkxlZnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVJbkRvd25MZWZ0O1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJbkRvd25SaWdodCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZUluRG93blJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5hbmltYXRlX19yb3RhdGVJbkRvd25SaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluRG93blJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlSW5Eb3duUmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlSW5VcExlZnQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhdGVJblVwTGVmdCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uYW5pbWF0ZV9fcm90YXRlSW5VcExlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVJblVwTGVmdDtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluVXBMZWZ0O1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJblVwUmlnaHQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC05MGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZUluVXBSaWdodCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTkwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5hbmltYXRlX19yb3RhdGVJblVwUmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVJblVwUmlnaHQ7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVJblVwUmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG59XG4vKiBSb3RhdGluZyBleGl0cyAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDIwMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAyMDBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm90YXRlT3V0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMjAwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDIwMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLmFuaW1hdGVfX3JvdGF0ZU91dCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dDtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVPdXREb3duTGVmdCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZU91dERvd25MZWZ0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5hbmltYXRlX19yb3RhdGVPdXREb3duTGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dERvd25MZWZ0O1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0RG93bkxlZnQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dERvd25SaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm90YXRlT3V0RG93blJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLmFuaW1hdGVfX3JvdGF0ZU91dERvd25SaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dERvd25SaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dERvd25SaWdodDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVPdXRVcExlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZU91dFVwTGVmdCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5hbmltYXRlX19yb3RhdGVPdXRVcExlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXRVcExlZnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXRVcExlZnQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dFVwUmlnaHQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA5MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA5MGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhdGVPdXRVcFJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgOTBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5hbmltYXRlX19yb3RhdGVPdXRVcFJpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlT3V0VXBSaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dFVwUmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG59XG4vKiBTcGVjaWFscyAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGhpbmdlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAyMCUsXG4gIDYwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDgwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgNDAlLFxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA2MGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA3MDBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA3MDBweCwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBoaW5nZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgMjAlLFxuICA2MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA4MGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgfVxuXG4gIDQwJSxcbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNjBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNzAwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNzAwcHgsIDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5hbmltYXRlX19oaW5nZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMik7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygxcyAqIDIpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSAqIDIpO1xuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAyKTtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogaGluZ2U7XG4gIGFuaW1hdGlvbi1uYW1lOiBoaW5nZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgamFja0luVGhlQm94IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xKSByb3RhdGUoMzBkZWcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKSByb3RhdGUoMzBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICB9XG5cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgfVxuXG4gIDcwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGphY2tJblRoZUJveCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMSkgcm90YXRlKDMwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSkgcm90YXRlKDMwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gIH1cblxuICA3MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLmFuaW1hdGVfX2phY2tJblRoZUJveCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGphY2tJblRoZUJveDtcbiAgYW5pbWF0aW9uLW5hbWU6IGphY2tJblRoZUJveDtcbn1cbi8qIG9yaWdpbmFsbHkgYXV0aG9yZWQgYnkgTmljayBQZXR0aXQgLSBodHRwczovL2dpdGh1Yi5jb20vbmlja3BldHRpdC9nbGlkZSAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHJvbGxJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMTIwZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvbGxJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMTIwZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fcm9sbEluIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm9sbEluO1xuICBhbmltYXRpb24tbmFtZTogcm9sbEluO1xufVxuLyogb3JpZ2luYWxseSBhdXRob3JlZCBieSBOaWNrIFBldHRpdCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrcGV0dGl0L2dsaWRlICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm9sbE91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDEyMGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm9sbE91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDEyMGRlZyk7XG4gIH1cbn1cbi5hbmltYXRlX19yb2xsT3V0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm9sbE91dDtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvbGxPdXQ7XG59XG4vKiBab29taW5nIGVudHJhbmNlcyAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xuICB9XG5cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHpvb21JbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xuICB9XG5cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uYW5pbWF0ZV9fem9vbUluIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbUluO1xuICBhbmltYXRpb24tbmFtZTogem9vbUluO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbkRvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIC0xMDAwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAtMTAwMHB4LCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHpvb21JbkRvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIC0xMDAwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAtMTAwMHB4LCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICB9XG59XG4uYW5pbWF0ZV9fem9vbUluRG93biB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21JbkRvd247XG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW5Eb3duO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbkxlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKC0xMDAwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgtMTAwMHB4LCAwLCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHpvb21JbkxlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKC0xMDAwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgtMTAwMHB4LCAwLCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICB9XG59XG4uYW5pbWF0ZV9fem9vbUluTGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21JbkxlZnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW5MZWZ0O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JblJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgxMDAwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgxMDAwcHgsIDAsIDApO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gIH1cblxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyB6b29tSW5SaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMTAwMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMTAwMHB4LCAwLCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XG4gIH1cbn1cbi5hbmltYXRlX196b29tSW5SaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21JblJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogem9vbUluUmlnaHQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbUluVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIDEwMDBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIDEwMDBweCwgMCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCAtNjBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHpvb21JblVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAxMDAwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAxMDAwcHgsIDApO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gIH1cblxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoMCwgLTYwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCAtNjBweCwgMCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcbiAgfVxufVxuLmFuaW1hdGVfX3pvb21JblVwIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbUluVXA7XG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW5VcDtcbn1cbi8qIFpvb21pbmcgZXhpdHMgKi9cbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyB6b29tT3V0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLmFuaW1hdGVfX3pvb21PdXQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0O1xuICBhbmltYXRpb24tbmFtZTogem9vbU91dDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0RG93biB7XG4gIDQwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCAtNjBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHpvb21PdXREb3duIHtcbiAgNDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoMCwgLTYwcHgsIDApO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XG4gIH1cbn1cbi5hbmltYXRlX196b29tT3V0RG93biB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21PdXREb3duO1xuICBhbmltYXRpb24tbmFtZTogem9vbU91dERvd247XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0TGVmdCB7XG4gIDQwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCg0MnB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoNDJweCwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xKSB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSkgdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgem9vbU91dExlZnQge1xuICA0MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoNDJweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDQycHgsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMSkgdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpIHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fem9vbU91dExlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0TGVmdDtcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21PdXRMZWZ0O1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0UmlnaHQge1xuICA0MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoLTQycHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xKSB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKSB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHpvb21PdXRSaWdodCB7XG4gIDQwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKC00MnB4LCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjEpIHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpIHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX196b29tT3V0UmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0UmlnaHQ7XG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0UmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbU91dFVwIHtcbiAgNDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgem9vbU91dFVwIHtcbiAgNDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XG4gIH1cbn1cbi5hbmltYXRlX196b29tT3V0VXAge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0VXA7XG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0VXA7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbn1cbi8qIFNsaWRpbmcgZW50cmFuY2VzICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19zbGlkZUluRG93biB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Eb3duO1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkRvd247XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19zbGlkZUluTGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5MZWZ0O1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkxlZnQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fc2xpZGVJblJpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVJblJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVJblJpZ2h0O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlSW5VcCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX3NsaWRlSW5VcCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5VcDtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5VcDtcbn1cbi8qIFNsaWRpbmcgZXhpdHMgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dERvd24ge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVPdXREb3duIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fc2xpZGVPdXREb3duIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVPdXREb3duO1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVPdXREb3duO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlT3V0TGVmdCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlT3V0TGVmdCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fc2xpZGVPdXRMZWZ0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVPdXRMZWZ0O1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVPdXRMZWZ0O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlT3V0UmlnaHQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVPdXRSaWdodCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX3NsaWRlT3V0UmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dFJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVPdXRSaWdodDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dFVwIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVPdXRVcCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fc2xpZGVPdXRVcCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0VXA7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dFVwO1xufVxuIiwiQGltcG9ydCBcIn5hbmltYXRlLmNzcy9hbmltYXRlLmNzc1wiO1xyXG5cclxuLnNpZGViYXItYm9keXtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzBBOUJEO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgcGFkZGluZy10b3A6IDN2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzdmg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmJ1dHRvbi1jaWVycmV7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAyMHZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IwOWJhZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdG9wOiAxdmg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5idXR0b24tYWJyZXtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGVmdDogMHZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IwOWJhZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdG9wOiAxdmg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxufVxyXG4uYnV0dG9uLWNpZXJyZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZThiOWM7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map