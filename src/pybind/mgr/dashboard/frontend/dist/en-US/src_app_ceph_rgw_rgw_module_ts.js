"use strict";
(self["webpackChunkceph_dashboard"] = self["webpackChunkceph_dashboard"] || []).push([["src_app_ceph_rgw_rgw_module_ts"],{

/***/ 86986:
/*!**********************************************************!*\
  !*** ./src/app/ceph/rgw/models/rgw-bucket-encryption.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwBucketEncryptionModel": () => (/* binding */ RgwBucketEncryptionModel)
/* harmony export */ });
class RgwBucketEncryptionModel {
    constructor() {
        this.kmsProviders = ['vault'];
        this.authMethods = ['token', 'agent'];
        this.secretEngines = ['kv', 'transit'];
        this.sse_s3 = 'AES256';
        this.sse_kms = 'aws:kms';
    }
}


/***/ }),

/***/ 91795:
/*!**********************************************************!*\
  !*** ./src/app/ceph/rgw/models/rgw-bucket-mfa-delete.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwBucketMfaDelete": () => (/* binding */ RgwBucketMfaDelete)
/* harmony export */ });
var RgwBucketMfaDelete;
(function (RgwBucketMfaDelete) {
    RgwBucketMfaDelete["ENABLED"] = "Enabled";
    RgwBucketMfaDelete["DISABLED"] = "Disabled";
})(RgwBucketMfaDelete || (RgwBucketMfaDelete = {}));


/***/ }),

/***/ 82152:
/*!**********************************************************!*\
  !*** ./src/app/ceph/rgw/models/rgw-bucket-versioning.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwBucketVersioning": () => (/* binding */ RgwBucketVersioning)
/* harmony export */ });
var RgwBucketVersioning;
(function (RgwBucketVersioning) {
    RgwBucketVersioning["ENABLED"] = "Enabled";
    RgwBucketVersioning["SUSPENDED"] = "Suspended";
})(RgwBucketVersioning || (RgwBucketVersioning = {}));


/***/ }),

/***/ 47804:
/*!***********************************************!*\
  !*** ./src/app/ceph/rgw/models/rgw-daemon.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwDaemon": () => (/* binding */ RgwDaemon)
/* harmony export */ });
class RgwDaemon {
}


/***/ }),

/***/ 57058:
/*!**********************************************************!*\
  !*** ./src/app/ceph/rgw/models/rgw-user-capabilities.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwUserAvailableCapability": () => (/* binding */ RgwUserAvailableCapability),
/* harmony export */   "RgwUserCapabilities": () => (/* binding */ RgwUserCapabilities)
/* harmony export */ });
var RgwUserAvailableCapability;
(function (RgwUserAvailableCapability) {
    RgwUserAvailableCapability["USERS"] = "users";
    RgwUserAvailableCapability["BUCKETS"] = "buckets";
    RgwUserAvailableCapability["METADATA"] = "metadata";
    RgwUserAvailableCapability["USAGE"] = "usage";
    RgwUserAvailableCapability["ZONE"] = "zone";
})(RgwUserAvailableCapability || (RgwUserAvailableCapability = {}));
class RgwUserCapabilities {
    static getAll() {
        return Object.values(RgwUserCapabilities.capabilities);
    }
}
RgwUserCapabilities.capabilities = RgwUserAvailableCapability;


/***/ }),

/***/ 81191:
/*!*****************************************************!*\
  !*** ./src/app/ceph/rgw/models/rgw-user-subuser.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwUserSubuser": () => (/* binding */ RgwUserSubuser)
/* harmony export */ });
class RgwUserSubuser {
}


/***/ }),

/***/ 41797:
/*!*****************************************************************************!*\
  !*** ./src/app/ceph/rgw/rgw-bucket-details/rgw-bucket-details.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwBucketDetailsComponent": () => (/* binding */ RgwBucketDetailsComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_api_rgw_bucket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/api/rgw-bucket.service */ 95152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_pipes_cd_date_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pipes/cd-date.pipe */ 96102);
/* harmony import */ var _shared_pipes_boolean_text_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pipes/boolean-text.pipe */ 68962);
/* harmony import */ var _shared_pipes_dimless_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/dimless.pipe */ 66369);







function RgwBucketDetailsComponent_ng_container_0_div_74_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RgwBucketDetailsComponent_ng_container_0_div_74_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "dimless");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r4.selection.bucket_quota.max_size), " ");
} }
function RgwBucketDetailsComponent_ng_container_0_div_74_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RgwBucketDetailsComponent_ng_container_0_div_74_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.selection.bucket_quota.max_objects, " ");
} }
function RgwBucketDetailsComponent_ng_container_0_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](2, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "table", 1)(4, "tbody")(5, "tr")(6, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](7, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "booleanText");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tr")(12, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](13, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, RgwBucketDetailsComponent_ng_container_0_div_74_td_14_Template, 2, 0, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, RgwBucketDetailsComponent_ng_container_0_div_74_td_15_Template, 3, 3, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "tr")(17, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](18, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, RgwBucketDetailsComponent_ng_container_0_div_74_td_19_Template, 2, 0, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, RgwBucketDetailsComponent_ng_container_0_div_74_td_20_Template, 2, 1, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, ctx_r1.selection.bucket_quota.enabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selection.bucket_quota.max_size <= -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selection.bucket_quota.max_size > -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selection.bucket_quota.max_objects <= -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selection.bucket_quota.max_objects > -1);
} }
function RgwBucketDetailsComponent_ng_container_0_ng_container_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr")(2, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](3, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tr")(7, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](8, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.selection.lock_mode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.selection.lock_retention_period_days);
} }
function RgwBucketDetailsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "table", 1)(2, "tbody")(3, "tr")(4, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](5, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "tr")(9, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](10, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tr")(14, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](15, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tr")(19, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](20, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "tr")(24, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](25, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "tr")(29, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](30, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "tr")(34, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](35, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "tr")(39, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](40, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "tr")(44, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](45, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "tr")(49, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](50, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](53, "cdDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "tr")(55, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](56, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "tr")(60, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](61, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "tr")(65, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](66, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "tr")(70, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](71, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, RgwBucketDetailsComponent_ng_container_0_div_74_Template, 21, 7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](76, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "table", 1)(78, "tbody")(79, "tr")(80, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](81, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](84, "booleanText");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, RgwBucketDetailsComponent_ng_container_0_ng_container_85_Template, 11, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.selection.bid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.selection.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.selection.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.selection.index_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.selection.placement_rule);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.selection.marker);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.selection.max_marker);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.selection.ver);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.selection.master_ver);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](53, 17, ctx_r0.selection.mtime));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.selection.zonegroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.selection.versioning);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.selection.encryption);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.selection.mfa_delete);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.selection.bucket_quota);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](84, 19, ctx_r0.selection.lock_enabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.selection.lock_enabled);
} }
class RgwBucketDetailsComponent {
    constructor(rgwBucketService) {
        this.rgwBucketService = rgwBucketService;
    }
    ngOnChanges() {
        if (this.selection) {
            this.rgwBucketService.get(this.selection.bid).subscribe((bucket) => {
                bucket['lock_retention_period_days'] = this.rgwBucketService.getLockDays(bucket);
                this.selection = bucket;
            });
        }
    }
}
RgwBucketDetailsComponent.ɵfac = function RgwBucketDetailsComponent_Factory(t) { return new (t || RgwBucketDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_shared_api_rgw_bucket_service__WEBPACK_IMPORTED_MODULE_0__.RgwBucketService)); };
RgwBucketDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RgwBucketDetailsComponent, selectors: [["cd-rgw-bucket-details"]], inputs: { selection: "selection" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__1 = goog.getMsg("Name");
        i18n_0 = MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__1;
    }
    else {
        i18n_0 = "Name";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8040881171107393560$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__3 = goog.getMsg("ID");
        i18n_2 = MSG_EXTERNAL_8040881171107393560$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__3;
    }
    else {
        i18n_2 = "ID";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3715596725146409911$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__5 = goog.getMsg("Owner");
        i18n_4 = MSG_EXTERNAL_3715596725146409911$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__5;
    }
    else {
        i18n_4 = "Owner";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4944981956950685098$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__7 = goog.getMsg("Index type");
        i18n_6 = MSG_EXTERNAL_4944981956950685098$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__7;
    }
    else {
        i18n_6 = "Index type";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6347226439070242084$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__9 = goog.getMsg("Placement rule");
        i18n_8 = MSG_EXTERNAL_6347226439070242084$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__9;
    }
    else {
        i18n_8 = "Placement rule";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9096098854200795278$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__11 = goog.getMsg("Marker");
        i18n_10 = MSG_EXTERNAL_9096098854200795278$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__11;
    }
    else {
        i18n_10 = "Marker";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6625889117902263980$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__13 = goog.getMsg("Maximum marker");
        i18n_12 = MSG_EXTERNAL_6625889117902263980$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__13;
    }
    else {
        i18n_12 = "Maximum marker";
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2724055831234181057$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__15 = goog.getMsg("Version");
        i18n_14 = MSG_EXTERNAL_2724055831234181057$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__15;
    }
    else {
        i18n_14 = "Version";
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1279531516871886707$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__17 = goog.getMsg("Master version");
        i18n_16 = MSG_EXTERNAL_1279531516871886707$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__17;
    }
    else {
        i18n_16 = "Master version";
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7311262168684331957$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__19 = goog.getMsg("Modification time");
        i18n_18 = MSG_EXTERNAL_7311262168684331957$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__19;
    }
    else {
        i18n_18 = "Modification time";
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_401173740087732425$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__21 = goog.getMsg("Zonegroup");
        i18n_20 = MSG_EXTERNAL_401173740087732425$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__21;
    }
    else {
        i18n_20 = "Zonegroup";
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2914579537400068937$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__23 = goog.getMsg("Versioning");
        i18n_22 = MSG_EXTERNAL_2914579537400068937$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__23;
    }
    else {
        i18n_22 = "Versioning";
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8255877266497322342$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__25 = goog.getMsg("Encryption");
        i18n_24 = MSG_EXTERNAL_8255877266497322342$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__25;
    }
    else {
        i18n_24 = "Encryption";
    } let i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5223994412907084851$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__27 = goog.getMsg("MFA Delete");
        i18n_26 = MSG_EXTERNAL_5223994412907084851$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__27;
    }
    else {
        i18n_26 = "MFA Delete";
    } let i18n_28; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2483890877898439142$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__29 = goog.getMsg("Locking");
        i18n_28 = MSG_EXTERNAL_2483890877898439142$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__29;
    }
    else {
        i18n_28 = "Locking";
    } let i18n_30; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4816216590591222133$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__31 = goog.getMsg("Enabled");
        i18n_30 = MSG_EXTERNAL_4816216590591222133$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS__31;
    }
    else {
        i18n_30 = "Enabled";
    } let i18n_32; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3048195452916484333$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS___33 = goog.getMsg("Bucket quota");
        i18n_32 = MSG_EXTERNAL_3048195452916484333$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS___33;
    }
    else {
        i18n_32 = "Bucket quota";
    } let i18n_34; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4816216590591222133$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS___35 = goog.getMsg("Enabled");
        i18n_34 = MSG_EXTERNAL_4816216590591222133$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS___35;
    }
    else {
        i18n_34 = "Enabled";
    } let i18n_36; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5921515272395118682$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS___37 = goog.getMsg("Maximum size");
        i18n_36 = MSG_EXTERNAL_5921515272395118682$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS___37;
    }
    else {
        i18n_36 = "Maximum size";
    } let i18n_38; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_868710308722667739$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS___39 = goog.getMsg("Maximum objects");
        i18n_38 = MSG_EXTERNAL_868710308722667739$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS___39;
    }
    else {
        i18n_38 = "Maximum objects";
    } let i18n_40; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_240806681889331244$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS____41 = goog.getMsg("Unlimited");
        i18n_40 = MSG_EXTERNAL_240806681889331244$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS____41;
    }
    else {
        i18n_40 = "Unlimited";
    } let i18n_42; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_240806681889331244$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS____43 = goog.getMsg("Unlimited");
        i18n_42 = MSG_EXTERNAL_240806681889331244$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS____43;
    }
    else {
        i18n_42 = "Unlimited";
    } let i18n_44; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1713271461473302108$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS___45 = goog.getMsg("Mode");
        i18n_44 = MSG_EXTERNAL_1713271461473302108$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS___45;
    }
    else {
        i18n_44 = "Mode";
    } let i18n_46; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_840951359074313455$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS___47 = goog.getMsg("Days");
        i18n_46 = MSG_EXTERNAL_840951359074313455$$SRC_APP_CEPH_RGW_RGW_BUCKET_DETAILS_RGW_BUCKET_DETAILS_COMPONENT_TS___47;
    }
    else {
        i18n_46 = "Days";
    } return [[4, "ngIf"], [1, "table", "table-striped", "table-bordered"], [1, "bold", "w-25"], i18n_0, [1, "w-75"], [1, "bold"], i18n_2, i18n_4, i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, i18n_26, i18n_28, i18n_30, i18n_32, i18n_34, i18n_36, i18n_38, i18n_40, i18n_42, i18n_44, i18n_46]; }, template: function RgwBucketDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, RgwBucketDetailsComponent_ng_container_0_Template, 86, 21, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selection);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_shared_pipes_cd_date_pipe__WEBPACK_IMPORTED_MODULE_1__.CdDatePipe, _shared_pipes_boolean_text_pipe__WEBPACK_IMPORTED_MODULE_2__.BooleanTextPipe, _shared_pipes_dimless_pipe__WEBPACK_IMPORTED_MODULE_3__.DimlessPipe], styles: ["table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJndy1idWNrZXQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6InJndy1idWNrZXQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxudGFibGUgdGQge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ 96238:
/*!***********************************************************************!*\
  !*** ./src/app/ceph/rgw/rgw-bucket-form/rgw-bucket-form.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwBucketFormComponent": () => (/* binding */ RgwBucketFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 42720);
/* harmony import */ var _app_shared_api_rgw_bucket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/rgw-bucket.service */ 95152);
/* harmony import */ var _app_shared_api_rgw_site_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/api/rgw-site.service */ 33394);
/* harmony import */ var _app_shared_api_rgw_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/api/rgw-user.service */ 59882);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 65862);
/* harmony import */ var _app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/enum/notification-type.enum */ 18001);
/* harmony import */ var _app_shared_forms_cd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/forms/cd-form */ 26624);
/* harmony import */ var _app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-builder */ 62862);
/* harmony import */ var _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/shared/forms/cd-validators */ 82723);
/* harmony import */ var _app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/shared/services/modal.service */ 63285);
/* harmony import */ var _app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/shared/services/notification.service */ 97161);
/* harmony import */ var _models_rgw_bucket_encryption__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/rgw-bucket-encryption */ 86986);
/* harmony import */ var _models_rgw_bucket_mfa_delete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../models/rgw-bucket-mfa-delete */ 91795);
/* harmony import */ var _models_rgw_bucket_versioning__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../models/rgw-bucket-versioning */ 82152);
/* harmony import */ var _rgw_config_modal_rgw_config_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../rgw-config-modal/rgw-config-modal.component */ 53228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _shared_directives_form_loading_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/directives/form-loading.directive */ 63622);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/directives/autofocus.directive */ 82945);
/* harmony import */ var _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/components/helper/helper.component */ 18372);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 30839);
/* harmony import */ var _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/pipes/upper-first.pipe */ 10545);









































function RgwBucketFormComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 9)(1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](2, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](4, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
} }
function RgwBucketFormComponent_div_0_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} }
function RgwBucketFormComponent_div_0_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} }
function RgwBucketFormComponent_div_0_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} }
function RgwBucketFormComponent_div_0_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} }
function RgwBucketFormComponent_div_0_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} }
function RgwBucketFormComponent_div_0_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} }
function RgwBucketFormComponent_div_0_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} }
function RgwBucketFormComponent_div_0_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} }
function RgwBucketFormComponent_div_0_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngValue", null);
} }
function RgwBucketFormComponent_div_0_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngValue", null);
} }
function RgwBucketFormComponent_div_0_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} if (rf & 2) {
    const owner_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("value", owner_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](owner_r23);
} }
function RgwBucketFormComponent_div_0_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} }
function RgwBucketFormComponent_div_0_ng_template_36_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngValue", null);
} }
function RgwBucketFormComponent_div_0_ng_template_36_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngValue", null);
} }
function RgwBucketFormComponent_div_0_ng_template_36_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} if (rf & 2) {
    const placementTarget_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("value", placementTarget_r28.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](placementTarget_r28.description);
} }
function RgwBucketFormComponent_div_0_ng_template_36_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} }
function RgwBucketFormComponent_div_0_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](1, RgwBucketFormComponent_div_0_ng_template_36_option_1_Template, 2, 1, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](2, RgwBucketFormComponent_div_0_ng_template_36_option_2_Template, 2, 1, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](3, RgwBucketFormComponent_div_0_ng_template_36_option_3_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](4, RgwBucketFormComponent_div_0_ng_template_36_span_4_Template, 2, 0, "span", 14);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](2);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r16.placementTargets === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r16.placementTargets !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngForOf", ctx_r16.placementTargets);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r16.bucketForm.showError("placement-target", _r1, "required"));
} }
function RgwBucketFormComponent_div_0_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](1, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementContainerEnd"]();
} }
function RgwBucketFormComponent_div_0_fieldset_39_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "fieldset")(1, "legend", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](2, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "div", 9)(4, "div", 27)(5, "div", 28)(6, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("change", function RgwBucketFormComponent_div_0_fieldset_39_Template_input_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2); return ctx_r29.setMfaDeleteValidators(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](7, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](8, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](9, "cd-helper")(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](11, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()()()();
} }
function RgwBucketFormComponent_div_0_fieldset_40_div_12_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} }
function RgwBucketFormComponent_div_0_fieldset_40_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 9)(1, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](2, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](4, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](5, RgwBucketFormComponent_div_0_fieldset_40_div_12_span_5_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](2);
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r31.bucketForm.showError("mfa-token-serial", _r1, "required"));
} }
function RgwBucketFormComponent_div_0_fieldset_40_div_13_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} }
function RgwBucketFormComponent_div_0_fieldset_40_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 9)(1, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](2, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](4, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](5, RgwBucketFormComponent_div_0_fieldset_40_div_13_span_5_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](2);
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r32.bucketForm.showError("mfa-token-pin", _r1, "required"));
} }
function RgwBucketFormComponent_div_0_fieldset_40_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "fieldset")(1, "legend", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](2, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "div", 9)(4, "div", 27)(5, "div", 28)(6, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("change", function RgwBucketFormComponent_div_0_fieldset_40_Template_input_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2); return ctx_r35.setMfaDeleteValidators(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](7, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](8, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](9, "cd-helper")(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](11, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](12, RgwBucketFormComponent_div_0_fieldset_40_div_12_Template, 6, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](13, RgwBucketFormComponent_div_0_fieldset_40_div_13_Template, 6, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r19.areMfaCredentialsRequired());
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r19.areMfaCredentialsRequired());
} }
function RgwBucketFormComponent_div_0_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 9)(1, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](2, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "div", 12)(4, "select", 83)(5, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](6, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](7, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](8, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()();
} }
function RgwBucketFormComponent_div_0_div_54_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} }
function RgwBucketFormComponent_div_0_div_54_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} }
function RgwBucketFormComponent_div_0_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 9)(1, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](3, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](4, "cd-helper");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](5, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](7, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](8, RgwBucketFormComponent_div_0_div_54_span_8_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](9, RgwBucketFormComponent_div_0_div_54_span_9_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](2);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r21.bucketForm.showError("lock_retention_period_days", _r1, "pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r21.bucketForm.showError("lock_retention_period_days", _r1, "lockDays"));
} }
function RgwBucketFormComponent_div_0_div_68_div_13_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngValue", null);
} }
function RgwBucketFormComponent_div_0_div_68_div_13_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} if (rf & 2) {
    const provider_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("value", provider_r44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](provider_r44);
} }
function RgwBucketFormComponent_div_0_div_68_div_13_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} }
function RgwBucketFormComponent_div_0_div_68_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div")(1, "div", 9)(2, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](3, 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](4, "div", 12)(5, "select", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](6, RgwBucketFormComponent_div_0_div_68_div_13_option_6_Template, 2, 1, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](7, RgwBucketFormComponent_div_0_div_68_div_13_option_7_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](8, RgwBucketFormComponent_div_0_div_68_div_13_span_8_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](2);
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("autofocus", ctx_r39.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r39.kmsProviders !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngForOf", ctx_r39.kmsProviders);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r39.bucketForm.showError("kms_provider", _r1, "required"));
} }
function RgwBucketFormComponent_div_0_div_68_div_14_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} }
function RgwBucketFormComponent_div_0_div_68_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div")(1, "div", 9)(2, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](3, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](5, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](6, RgwBucketFormComponent_div_0_div_68_div_14_span_6_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](2);
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r40.bucketForm.showError("keyId", _r1, "required"));
} }
function RgwBucketFormComponent_div_0_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div")(1, "div", 9)(2, "div", 27)(3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](4, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](5, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](6, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](7, "div", 9)(8, "div", 27)(9, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](10, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](11, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](12, 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](13, RgwBucketFormComponent_div_0_div_68_div_13_Template, 9, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](14, RgwBucketFormComponent_div_0_div_68_div_14_Template, 7, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵattribute"]("disabled", !ctx_r22.s3VaultConfig ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵattribute"]("disabled", !ctx_r22.kmsVaultConfig ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r22.bucketForm.getValue("encryption_type") === "aws:kms");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r22.bucketForm.getValue("encryption_type") === "aws:kms");
} }
const _c100 = function (a0) { return { required: a0 }; };
function RgwBucketFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 1)(1, "form", 2, 3)(3, "div", 4)(4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](7, "upperFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](9, RgwBucketFormComponent_div_0_div_9_Template, 5, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](10, "div", 9)(11, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](12, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](14, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](15, RgwBucketFormComponent_div_0_span_15_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](16, RgwBucketFormComponent_div_0_span_16_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](17, RgwBucketFormComponent_div_0_span_17_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](18, RgwBucketFormComponent_div_0_span_18_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](19, RgwBucketFormComponent_div_0_span_19_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](20, RgwBucketFormComponent_div_0_span_20_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](21, RgwBucketFormComponent_div_0_span_21_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](22, RgwBucketFormComponent_div_0_span_22_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](23, "div", 9)(24, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](25, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](26, "div", 12)(27, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](28, RgwBucketFormComponent_div_0_option_28_Template, 2, 1, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](29, RgwBucketFormComponent_div_0_option_29_Template, 2, 1, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](30, RgwBucketFormComponent_div_0_option_30_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](31, RgwBucketFormComponent_div_0_span_31_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](32, "div", 9)(33, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](34, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](35, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](36, RgwBucketFormComponent_div_0_ng_template_36_Template, 5, 4, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](38, RgwBucketFormComponent_div_0_ng_container_38_Template, 2, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](39, RgwBucketFormComponent_div_0_fieldset_39_Template, 12, 0, "fieldset", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](40, RgwBucketFormComponent_div_0_fieldset_40_Template, 14, 2, "fieldset", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](41, "fieldset")(42, "legend", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](43, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](44, "div", 9)(45, "div", 27)(46, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](47, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](48, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](49, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](50, "cd-helper")(51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](52, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](53, RgwBucketFormComponent_div_0_div_53_Template, 9, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](54, RgwBucketFormComponent_div_0_div_54_Template, 10, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](55, "fieldset")(56, "legend", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](57, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](58, "div", 9)(59, "div", 27)(60, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](61, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](62, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](63, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](64, "cd-helper")(65, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18nStart"](66, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](67, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function RgwBucketFormComponent_div_0_Template_a_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](); return ctx_r46.openConfigModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](68, RgwBucketFormComponent_div_0_div_68_Template, 15, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](69, "div", 39)(70, "cd-form-button-panel", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("submitActionEvent", function RgwBucketFormComponent_div_0_Template_cd_form_button_panel_submitActionEvent_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](); return ctx_r48.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](71, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](72, "upperFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](2);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](37);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("formGroup", ctx_r0.bucketForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](6, 31, ctx_r0.action))(_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](7, 33, ctx_r0.resource));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18nApply"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpureFunction1"](39, _c100, !ctx_r0.editing));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("readonly", ctx_r0.editing)("autofocus", !ctx_r0.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.bucketForm.showError("bid", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.bucketForm.showError("bid", _r1, "bucketNameInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.bucketForm.showError("bid", _r1, "bucketNameNotAllowed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.bucketForm.showError("bid", _r1, "containsUpperCase"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.bucketForm.showError("bid", _r1, "lowerCaseOrNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.bucketForm.showError("bid", _r1, "ipAddress"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.bucketForm.showError("bid", _r1, "onlyLowerCaseAndNumbers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.bucketForm.showError("bid", _r1, "shouldBeInRange"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("autofocus", ctx_r0.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.owners === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.owners !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngForOf", ctx_r0.owners);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.bucketForm.showError("owner", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpureFunction1"](41, _c100, !ctx_r0.editing));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.editing)("ngIfElse", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.bucketForm.getValue("lock_enabled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.bucketForm.getValue("lock_enabled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵattribute"]("disabled", !ctx_r0.kmsVaultConfig && !ctx_r0.s3VaultConfig ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r0.bucketForm.getValue("encryption_enabled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("form", ctx_r0.bucketForm)("submitText", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](71, 35, ctx_r0.action) + " " + _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](72, 37, ctx_r0.resource));
} }
class RgwBucketFormComponent extends _app_shared_forms_cd_form__WEBPACK_IMPORTED_MODULE_7__.CdForm {
    constructor(route, router, formBuilder, rgwBucketService, rgwSiteService, modalService, rgwUserService, notificationService, rgwEncryptionModal, actionLabels, changeDetectorRef) {
        super();
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.rgwBucketService = rgwBucketService;
        this.rgwSiteService = rgwSiteService;
        this.modalService = modalService;
        this.rgwUserService = rgwUserService;
        this.notificationService = notificationService;
        this.rgwEncryptionModal = rgwEncryptionModal;
        this.actionLabels = actionLabels;
        this.changeDetectorRef = changeDetectorRef;
        this.editing = false;
        this.owners = null;
        this.kmsProviders = null;
        this.placementTargets = [];
        this.isVersioningAlreadyEnabled = false;
        this.isMfaDeleteAlreadyEnabled = false;
        this.icons = _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_5__.Icons;
        this.kmsVaultConfig = false;
        this.s3VaultConfig = false;
        this.editing = this.router.url.startsWith(`/rgw/bucket/${_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__.URLVerbs.EDIT}`);
        this.action = this.editing ? this.actionLabels.EDIT : this.actionLabels.CREATE;
        this.resource = "bucket";
        this.createForm();
    }
    get isVersioningEnabled() {
        return this.bucketForm.getValue('versioning');
    }
    get isMfaDeleteEnabled() {
        return this.bucketForm.getValue('mfa-delete');
    }
    ngAfterViewChecked() {
        this.changeDetectorRef.detectChanges();
    }
    createForm() {
        const self = this;
        const lockDaysValidator = _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_9__.CdValidators.custom('lockDays', () => {
            if (!self.bucketForm || !lodash__WEBPACK_IMPORTED_MODULE_0___default().get(self.bucketForm.getRawValue(), 'lock_enabled')) {
                return false;
            }
            const lockDays = Number(self.bucketForm.getValue('lock_retention_period_days'));
            return !Number.isInteger(lockDays) || lockDays === 0;
        });
        this.bucketForm = this.formBuilder.group({
            id: [null],
            bid: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
                this.editing
                    ? []
                    : [_app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_9__.CdValidators.bucketName(), _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_9__.CdValidators.bucketExistence(false, this.rgwBucketService)]
            ],
            owner: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            kms_provider: ['vault'],
            'placement-target': [null, this.editing ? [] : [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            versioning: [null],
            'mfa-delete': [null],
            'mfa-token-serial': [''],
            'mfa-token-pin': [''],
            lock_enabled: [{ value: false, disabled: this.editing }],
            encryption_enabled: [null],
            encryption_type: [
                null,
                [
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_9__.CdValidators.requiredIf({
                        encryption_enabled: true
                    })
                ]
            ],
            keyId: [
                null,
                [
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_9__.CdValidators.requiredIf({
                        encryption_type: 'aws:kms',
                        encryption_enabled: true
                    })
                ]
            ],
            lock_mode: ['COMPLIANCE'],
            lock_retention_period_days: [0, [_app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_9__.CdValidators.number(false), lockDaysValidator]]
        });
    }
    ngOnInit() {
        const promises = {
            owners: this.rgwUserService.enumerate()
        };
        this.kmsProviders = this.rgwEncryptionModal.kmsProviders;
        this.rgwBucketService.getEncryptionConfig().subscribe((data) => {
            this.kmsVaultConfig = data[0];
            this.s3VaultConfig = data[1];
            if (this.kmsVaultConfig && this.s3VaultConfig) {
                this.bucketForm.get('encryption_type').setValue('');
            }
            else if (this.kmsVaultConfig) {
                this.bucketForm.get('encryption_type').setValue('aws:kms');
            }
            else if (this.s3VaultConfig) {
                this.bucketForm.get('encryption_type').setValue('AES256');
            }
            else {
                this.bucketForm.get('encryption_type').setValue('');
            }
        });
        if (!this.editing) {
            promises['getPlacementTargets'] = this.rgwSiteService.get('placement-targets');
        }
        // Process route parameters.
        this.route.params.subscribe((params) => {
            if (params.hasOwnProperty('bid')) {
                const bid = decodeURIComponent(params.bid);
                promises['getBid'] = this.rgwBucketService.get(bid);
            }
            (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.forkJoin)(promises).subscribe((data) => {
                // Get the list of possible owners.
                this.owners = data.owners.sort();
                // Get placement targets:
                if (data['getPlacementTargets']) {
                    const placementTargets = data['getPlacementTargets'];
                    this.zonegroup = placementTargets['zonegroup'];
                    lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(placementTargets['placement_targets'], (placementTarget) => {
                        placementTarget['description'] = `${placementTarget['name']} (${"pool"}: ${placementTarget['data_pool']})`;
                        this.placementTargets.push(placementTarget);
                    });
                    // If there is only 1 placement target, select it by default:
                    if (this.placementTargets.length === 1) {
                        this.bucketForm.get('placement-target').setValue(this.placementTargets[0]['name']);
                    }
                }
                if (data['getBid']) {
                    const bidResp = data['getBid'];
                    // Get the default values (incl. the values from disabled fields).
                    const defaults = lodash__WEBPACK_IMPORTED_MODULE_0___default().clone(this.bucketForm.getRawValue());
                    // Get the values displayed in the form. We need to do that to
                    // extract those key/value pairs from the response data, otherwise
                    // the Angular react framework will throw an error if there is no
                    // field for a given key.
                    let value = lodash__WEBPACK_IMPORTED_MODULE_0___default().pick(bidResp, lodash__WEBPACK_IMPORTED_MODULE_0___default().keys(defaults));
                    value['lock_retention_period_days'] = this.rgwBucketService.getLockDays(bidResp);
                    value['placement-target'] = bidResp['placement_rule'];
                    value['versioning'] = bidResp['versioning'] === _models_rgw_bucket_versioning__WEBPACK_IMPORTED_MODULE_14__.RgwBucketVersioning.ENABLED;
                    value['mfa-delete'] = bidResp['mfa_delete'] === _models_rgw_bucket_mfa_delete__WEBPACK_IMPORTED_MODULE_13__.RgwBucketMfaDelete.ENABLED;
                    value['encryption_enabled'] = bidResp['encryption'] === 'Enabled';
                    // Append default values.
                    value = lodash__WEBPACK_IMPORTED_MODULE_0___default().merge(defaults, value);
                    // Update the form.
                    this.bucketForm.setValue(value);
                    if (this.editing) {
                        this.isVersioningAlreadyEnabled = this.isVersioningEnabled;
                        this.isMfaDeleteAlreadyEnabled = this.isMfaDeleteEnabled;
                        this.setMfaDeleteValidators();
                        if (value['lock_enabled']) {
                            this.bucketForm.controls['versioning'].disable();
                        }
                    }
                }
                this.loadingReady();
            });
        });
    }
    goToListView() {
        this.router.navigate(['/rgw/bucket']);
    }
    submit() {
        // Exit immediately if the form isn't dirty.
        if (this.bucketForm.getValue('encryption_enabled') == null) {
            this.bucketForm.get('encryption_enabled').setValue(false);
            this.bucketForm.get('encryption_type').setValue(null);
        }
        if (this.bucketForm.pristine) {
            this.goToListView();
            return;
        }
        const values = this.bucketForm.value;
        if (this.editing) {
            // Edit
            const versioning = this.getVersioningStatus();
            const mfaDelete = this.getMfaDeleteStatus();
            this.rgwBucketService
                .update(values['bid'], values['id'], values['owner'], versioning, values['encryption_enabled'], values['encryption_type'], values['keyId'], mfaDelete, values['mfa-token-serial'], values['mfa-token-pin'], values['lock_mode'], values['lock_retention_period_days'])
                .subscribe(() => {
                this.notificationService.show(_app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_6__.NotificationType.success, "Updated Object Gateway bucket '" + values.bid + "'.");
                this.goToListView();
            }, () => {
                // Reset the 'Submit' button.
                this.bucketForm.setErrors({ cdSubmitButton: true });
            });
        }
        else {
            // Add
            this.rgwBucketService
                .create(values['bid'], values['owner'], this.zonegroup, values['placement-target'], values['lock_enabled'], values['lock_mode'], values['lock_retention_period_days'], values['encryption_enabled'], values['encryption_type'], values['keyId'])
                .subscribe(() => {
                this.notificationService.show(_app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_6__.NotificationType.success, "Created Object Gateway bucket '" + values.bid + "'");
                this.goToListView();
            }, () => {
                // Reset the 'Submit' button.
                this.bucketForm.setErrors({ cdSubmitButton: true });
            });
        }
    }
    areMfaCredentialsRequired() {
        return (this.isMfaDeleteEnabled !== this.isMfaDeleteAlreadyEnabled ||
            (this.isMfaDeleteAlreadyEnabled &&
                this.isVersioningEnabled !== this.isVersioningAlreadyEnabled));
    }
    setMfaDeleteValidators() {
        const mfaTokenSerialControl = this.bucketForm.get('mfa-token-serial');
        const mfaTokenPinControl = this.bucketForm.get('mfa-token-pin');
        if (this.areMfaCredentialsRequired()) {
            mfaTokenSerialControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required);
            mfaTokenPinControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required);
        }
        else {
            mfaTokenSerialControl.setValidators(null);
            mfaTokenPinControl.setValidators(null);
        }
        mfaTokenSerialControl.updateValueAndValidity();
        mfaTokenPinControl.updateValueAndValidity();
    }
    getVersioningStatus() {
        return this.isVersioningEnabled ? _models_rgw_bucket_versioning__WEBPACK_IMPORTED_MODULE_14__.RgwBucketVersioning.ENABLED : _models_rgw_bucket_versioning__WEBPACK_IMPORTED_MODULE_14__.RgwBucketVersioning.SUSPENDED;
    }
    getMfaDeleteStatus() {
        return this.isMfaDeleteEnabled ? _models_rgw_bucket_mfa_delete__WEBPACK_IMPORTED_MODULE_13__.RgwBucketMfaDelete.ENABLED : _models_rgw_bucket_mfa_delete__WEBPACK_IMPORTED_MODULE_13__.RgwBucketMfaDelete.DISABLED;
    }
    fileUpload(files, controlName) {
        const file = files[0];
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            const control = this.bucketForm.get(controlName);
            control.setValue(file);
            control.markAsDirty();
            control.markAsTouched();
            control.updateValueAndValidity();
        });
    }
    openConfigModal() {
        const modalRef = this.modalService.show(_rgw_config_modal_rgw_config_modal_component__WEBPACK_IMPORTED_MODULE_15__.RgwConfigModalComponent, null, { size: 'lg' });
        modalRef.componentInstance.configForm
            .get('encryptionType')
            .setValue(this.bucketForm.getValue('encryption_type'));
    }
}
RgwBucketFormComponent.ɵfac = function RgwBucketFormComponent_Factory(t) { return new (t || RgwBucketFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_28__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_28__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_8__.CdFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_app_shared_api_rgw_bucket_service__WEBPACK_IMPORTED_MODULE_1__.RgwBucketService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_app_shared_api_rgw_site_service__WEBPACK_IMPORTED_MODULE_2__.RgwSiteService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_10__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_app_shared_api_rgw_user_service__WEBPACK_IMPORTED_MODULE_3__.RgwUserService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_11__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_models_rgw_bucket_encryption__WEBPACK_IMPORTED_MODULE_12__.RgwBucketEncryptionModel), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__.ActionLabelsI18n), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_25__.ChangeDetectorRef)); };
RgwBucketFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineComponent"]({ type: RgwBucketFormComponent, selectors: [["cd-rgw-bucket-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵProvidersFeature"]([_models_rgw_bucket_encryption__WEBPACK_IMPORTED_MODULE_12__.RgwBucketEncryptionModel]), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc form title
         */
        const MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__1 = goog.getMsg("{$interpolation} {$interpolation_1}", { "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
        i18n_0 = MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__1;
    }
    else {
        i18n_0 = "" + "\uFFFD0\uFFFD" + " " + "\uFFFD1\uFFFD" + "";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__3 = goog.getMsg("Name");
        i18n_2 = MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__3;
    }
    else {
        i18n_2 = "Name";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5451140586403689891$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__5 = goog.getMsg("Name...");
        i18n_4 = MSG_EXTERNAL_5451140586403689891$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__5;
    }
    else {
        i18n_4 = "Name...";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3715596725146409911$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__7 = goog.getMsg("Owner");
        i18n_6 = MSG_EXTERNAL_3715596725146409911$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__7;
    }
    else {
        i18n_6 = "Owner";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1277893094050443940$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__9 = goog.getMsg("Placement target");
        i18n_8 = MSG_EXTERNAL_1277893094050443940$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__9;
    }
    else {
        i18n_8 = "Placement target";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2483890877898439142$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__11 = goog.getMsg("Locking");
        i18n_10 = MSG_EXTERNAL_2483890877898439142$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__11;
    }
    else {
        i18n_10 = "Locking";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4816216590591222133$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__13 = goog.getMsg("Enabled");
        i18n_12 = MSG_EXTERNAL_4816216590591222133$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__13;
    }
    else {
        i18n_12 = "Enabled";
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_371859621389610406$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__15 = goog.getMsg("Enables locking for the objects in the bucket. Locking can only be enabled while creating a bucket.");
        i18n_14 = MSG_EXTERNAL_371859621389610406$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__15;
    }
    else {
        i18n_14 = "Enables locking for the objects in the bucket. Locking can only be enabled while creating a bucket.";
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8878700331247603166$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__17 = goog.getMsg("Security");
        i18n_16 = MSG_EXTERNAL_8878700331247603166$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__17;
    }
    else {
        i18n_16 = "Security";
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8255877266497322342$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__19 = goog.getMsg("Encryption");
        i18n_18 = MSG_EXTERNAL_8255877266497322342$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__19;
    }
    else {
        i18n_18 = "Encryption";
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4027705044147424956$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__21 = goog.getMsg("Enables encryption for the objects in the bucket. To enable encryption on a bucket you need to set the configuration values for SSE-S3 or SSE-KMS. To set the configuration values {$startLink}Click here{$closeLink}", { "startLink": "\uFFFD#67\uFFFD", "closeLink": "\uFFFD/#67\uFFFD" });
        i18n_20 = MSG_EXTERNAL_4027705044147424956$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS__21;
    }
    else {
        i18n_20 = "Enables encryption for the objects in the bucket. To enable encryption on a bucket you need to set the configuration values for SSE-S3 or SSE-KMS. To set the configuration values " + "\uFFFD#67\uFFFD" + "Click here" + "\uFFFD/#67\uFFFD" + "";
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7286430803380181008$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___23 = goog.getMsg("Id");
        i18n_22 = MSG_EXTERNAL_7286430803380181008$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___23;
    }
    else {
        i18n_22 = "Id";
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___25 = goog.getMsg("This field is required.");
        i18n_24 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___25;
    }
    else {
        i18n_24 = "This field is required.";
    } let i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9013829245398353954$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___27 = goog.getMsg("Bucket names can only contain lowercase letters, numbers, periods and hyphens.");
        i18n_26 = MSG_EXTERNAL_9013829245398353954$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___27;
    }
    else {
        i18n_26 = "Bucket names can only contain lowercase letters, numbers, periods and hyphens.";
    } let i18n_28; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2404339360216552222$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___29 = goog.getMsg("The chosen name is already in use.");
        i18n_28 = MSG_EXTERNAL_2404339360216552222$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___29;
    }
    else {
        i18n_28 = "The chosen name is already in use.";
    } let i18n_30; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4249712729881266499$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___31 = goog.getMsg("Bucket names must not contain uppercase characters or underscores.");
        i18n_30 = MSG_EXTERNAL_4249712729881266499$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___31;
    }
    else {
        i18n_30 = "Bucket names must not contain uppercase characters or underscores.";
    } let i18n_32; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6733475727468566012$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___33 = goog.getMsg("Each label must start and end with a lowercase letter or a number.");
        i18n_32 = MSG_EXTERNAL_6733475727468566012$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___33;
    }
    else {
        i18n_32 = "Each label must start and end with a lowercase letter or a number.";
    } let i18n_34; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8659707323569499809$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___35 = goog.getMsg("Bucket names cannot be formatted as IP address.");
        i18n_34 = MSG_EXTERNAL_8659707323569499809$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___35;
    }
    else {
        i18n_34 = "Bucket names cannot be formatted as IP address.";
    } let i18n_36; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6709353723402492142$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___37 = goog.getMsg("Bucket labels cannot be empty and can only contain lowercase letters, numbers and hyphens.");
        i18n_36 = MSG_EXTERNAL_6709353723402492142$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___37;
    }
    else {
        i18n_36 = "Bucket labels cannot be empty and can only contain lowercase letters, numbers and hyphens.";
    } let i18n_38; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8081269462385764110$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___39 = goog.getMsg("Bucket names must be 3 to 63 characters long.");
        i18n_38 = MSG_EXTERNAL_8081269462385764110$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___39;
    }
    else {
        i18n_38 = "Bucket names must be 3 to 63 characters long.";
    } let i18n_40; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___41 = goog.getMsg("Loading...");
        i18n_40 = MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___41;
    }
    else {
        i18n_40 = "Loading...";
    } let i18n_42; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2740518733940031233$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___43 = goog.getMsg("-- Select a user --");
        i18n_42 = MSG_EXTERNAL_2740518733940031233$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___43;
    }
    else {
        i18n_42 = "-- Select a user --";
    } let i18n_44; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___45 = goog.getMsg("This field is required.");
        i18n_44 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___45;
    }
    else {
        i18n_44 = "This field is required.";
    } let i18n_46; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS____47 = goog.getMsg("Loading...");
        i18n_46 = MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS____47;
    }
    else {
        i18n_46 = "Loading...";
    } let i18n_48; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4245941931775393445$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS____49 = goog.getMsg("-- Select a placement target --");
        i18n_48 = MSG_EXTERNAL_4245941931775393445$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS____49;
    }
    else {
        i18n_48 = "-- Select a placement target --";
    } let i18n_50; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS____51 = goog.getMsg("This field is required.");
        i18n_50 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS____51;
    }
    else {
        i18n_50 = "This field is required.";
    } let i18n_52; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2914579537400068937$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___53 = goog.getMsg("Versioning");
        i18n_52 = MSG_EXTERNAL_2914579537400068937$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___53;
    }
    else {
        i18n_52 = "Versioning";
    } let i18n_54; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4816216590591222133$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___55 = goog.getMsg("Enabled");
        i18n_54 = MSG_EXTERNAL_4816216590591222133$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___55;
    }
    else {
        i18n_54 = "Enabled";
    } let i18n_56; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7191938507225980342$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___57 = goog.getMsg("Enables versioning for the objects in the bucket.");
        i18n_56 = MSG_EXTERNAL_7191938507225980342$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___57;
    }
    else {
        i18n_56 = "Enables versioning for the objects in the bucket.";
    } let i18n_58; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6281282020732717137$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___59 = goog.getMsg("Multi-Factor Authentication");
        i18n_58 = MSG_EXTERNAL_6281282020732717137$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___59;
    }
    else {
        i18n_58 = "Multi-Factor Authentication";
    } let i18n_60; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1455463055278669550$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___61 = goog.getMsg("Delete enabled");
        i18n_60 = MSG_EXTERNAL_1455463055278669550$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___61;
    }
    else {
        i18n_60 = "Delete enabled";
    } let i18n_62; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3465476368908562719$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___63 = goog.getMsg("Enables MFA (multi-factor authentication) Delete, which requires additional authentication for changing the bucket versioning state.");
        i18n_62 = MSG_EXTERNAL_3465476368908562719$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___63;
    }
    else {
        i18n_62 = "Enables MFA (multi-factor authentication) Delete, which requires additional authentication for changing the bucket versioning state.";
    } let i18n_64; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3391189294187003975$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS____65 = goog.getMsg("Token Serial Number");
        i18n_64 = MSG_EXTERNAL_3391189294187003975$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS____65;
    }
    else {
        i18n_64 = "Token Serial Number";
    } let i18n_66; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS_____67 = goog.getMsg("This field is required.");
        i18n_66 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS_____67;
    }
    else {
        i18n_66 = "This field is required.";
    } let i18n_68; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1959033156749607487$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS____69 = goog.getMsg("Token PIN");
        i18n_68 = MSG_EXTERNAL_1959033156749607487$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS____69;
    }
    else {
        i18n_68 = "Token PIN";
    } let i18n_70; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS_____71 = goog.getMsg("This field is required.");
        i18n_70 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS_____71;
    }
    else {
        i18n_70 = "This field is required.";
    } let i18n_72; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1713271461473302108$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___73 = goog.getMsg("Mode");
        i18n_72 = MSG_EXTERNAL_1713271461473302108$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___73;
    }
    else {
        i18n_72 = "Mode";
    } let i18n_74; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8321710675443660032$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___75 = goog.getMsg("Compliance");
        i18n_74 = MSG_EXTERNAL_8321710675443660032$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___75;
    }
    else {
        i18n_74 = "Compliance";
    } let i18n_76; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4263526691227932547$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___77 = goog.getMsg("Governance");
        i18n_76 = MSG_EXTERNAL_4263526691227932547$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___77;
    }
    else {
        i18n_76 = "Governance";
    } let i18n_78; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_840951359074313455$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___79 = goog.getMsg("Days");
        i18n_78 = MSG_EXTERNAL_840951359074313455$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___79;
    }
    else {
        i18n_78 = "Days";
    } let i18n_80; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3267772399910551465$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___81 = goog.getMsg("The number of days that you want to specify for the default retention period that will be applied to new objects placed in this bucket.");
        i18n_80 = MSG_EXTERNAL_3267772399910551465$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___81;
    }
    else {
        i18n_80 = "The number of days that you want to specify for the default retention period that will be applied to new objects placed in this bucket.";
    } let i18n_82; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2191011361163902177$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS____83 = goog.getMsg("The entered value must be a positive integer.");
        i18n_82 = MSG_EXTERNAL_2191011361163902177$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS____83;
    }
    else {
        i18n_82 = "The entered value must be a positive integer.";
    } let i18n_84; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3757860322493786066$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS____85 = goog.getMsg("Retention Days must be a positive integer.");
        i18n_84 = MSG_EXTERNAL_3757860322493786066$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS____85;
    }
    else {
        i18n_84 = "Retention Days must be a positive integer.";
    } let i18n_86; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2745302277336677145$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___87 = goog.getMsg("SSE-S3 Encryption");
        i18n_86 = MSG_EXTERNAL_2745302277336677145$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___87;
    }
    else {
        i18n_86 = "SSE-S3 Encryption";
    } let i18n_88; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3703623392956981911$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___89 = goog.getMsg("Connect to an external key management service");
        i18n_88 = MSG_EXTERNAL_3703623392956981911$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS___89;
    }
    else {
        i18n_88 = "Connect to an external key management service";
    } let i18n_90; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8154820533033296474$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS____91 = goog.getMsg("KMS Provider");
        i18n_90 = MSG_EXTERNAL_8154820533033296474$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS____91;
    }
    else {
        i18n_90 = "KMS Provider";
    } let i18n_92; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_634394574327617185$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS_____93 = goog.getMsg("-- Select a provider --");
        i18n_92 = MSG_EXTERNAL_634394574327617185$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS_____93;
    }
    else {
        i18n_92 = "-- Select a provider --";
    } let i18n_94; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS_____95 = goog.getMsg("This field is required.");
        i18n_94 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS_____95;
    }
    else {
        i18n_94 = "This field is required.";
    } let i18n_96; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1401651615096862249$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS____97 = goog.getMsg("Key Id ");
        i18n_96 = MSG_EXTERNAL_1401651615096862249$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS____97;
    }
    else {
        i18n_96 = "Key Id ";
    } let i18n_98; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS_____99 = goog.getMsg("This field is required.");
        i18n_98 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_BUCKET_FORM_RGW_BUCKET_FORM_COMPONENT_TS_____99;
    }
    else {
        i18n_98 = "This field is required.";
    } return [["class", "cd-col-form", 4, "cdFormLoading"], [1, "cd-col-form"], ["name", "bucketForm", "novalidate", "", 3, "formGroup"], ["frm", "ngForm"], [1, "card"], [1, "card-header"], i18n_0, [1, "card-body"], ["class", "form-group row", 4, "ngIf"], [1, "form-group", "row"], ["for", "bid", 1, "cd-col-form-label", 3, "ngClass"], i18n_2, [1, "cd-col-form-input"], ["id", "bid", "name", "bid", "type", "text", "placeholder", i18n_4, "formControlName", "bid", 1, "form-control", 3, "readonly", "autofocus"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "owner", 1, "cd-col-form-label", "required"], i18n_6, ["id", "owner", "name", "owner", "formControlName", "owner", 1, "form-select", 3, "autofocus"], [3, "ngValue", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "placement-target", 1, "cd-col-form-label", 3, "ngClass"], i18n_8, ["placementTargetSelect", ""], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [1, "cd-header"], i18n_10, [1, "cd-col-form-offset"], [1, "custom-control", "custom-checkbox"], ["id", "lock_enabled", "formControlName", "lock_enabled", "type", "checkbox", 1, "custom-control-input"], ["for", "lock_enabled", 1, "custom-control-label"], i18n_12, i18n_14, i18n_16, ["id", "encryption_enabled", "name", "encryption_enabled", "formControlName", "encryption_enabled", "type", "checkbox", 1, "form-check-input"], ["for", "encryption_enabled", 1, "form-check-label"], i18n_18, i18n_20, ["href", "#/rgw/bucket/create", 3, "click"], [1, "card-footer"], ["wrappingClass", "text-right", 3, "form", "submitText", "submitActionEvent"], ["for", "id", 1, "cd-col-form-label"], i18n_22, ["id", "id", "name", "id", "type", "text", "formControlName", "id", "readonly", "", 1, "form-control"], [1, "invalid-feedback"], i18n_24, i18n_26, i18n_28, i18n_30, i18n_32, i18n_34, i18n_36, i18n_38, [3, "ngValue"], i18n_40, i18n_42, [3, "value"], i18n_44, ["id", "placement-target", "name", "placement-target", "formControlName", "placement-target", 1, "form-select"], i18n_46, i18n_48, i18n_50, ["id", "placement-target", "name", "placement-target", "formControlName", "placement-target", "type", "text", "readonly", "", 1, "form-control"], i18n_52, ["type", "checkbox", "id", "versioning", "name", "versioning", "formControlName", "versioning", 1, "custom-control-input", 3, "change"], ["for", "versioning", 1, "custom-control-label"], i18n_54, i18n_56, i18n_58, ["type", "checkbox", "id", "mfa-delete", "name", "mfa-delete", "formControlName", "mfa-delete", 1, "custom-control-input", 3, "change"], ["for", "mfa-delete", 1, "custom-control-label"], i18n_60, i18n_62, ["for", "mfa-token-serial", 1, "cd-col-form-label"], i18n_64, ["type", "text", "id", "mfa-token-serial", "name", "mfa-token-serial", "formControlName", "mfa-token-serial", 1, "form-control"], i18n_66, ["for", "mfa-token-pin", 1, "cd-col-form-label"], i18n_68, ["type", "text", "id", "mfa-token-pin", "name", "mfa-token-pin", "formControlName", "mfa-token-pin", 1, "form-control"], i18n_70, ["for", "lock_mode", 1, "cd-col-form-label"], i18n_72, ["formControlName", "lock_mode", "name", "lock_mode", "id", "lock_mode", 1, "form-select"], ["value", "COMPLIANCE"], i18n_74, ["value", "GOVERNANCE"], i18n_76, ["for", "lock_retention_period_days", 1, "cd-col-form-label"], i18n_78, i18n_80, ["type", "number", "id", "lock_retention_period_days", "formControlName", "lock_retention_period_days", "min", "0", 1, "form-control"], i18n_82, i18n_84, [1, "custom-control", "custom-radio", "custom-control-inline", "ps-5"], ["formControlName", "encryption_type", "id", "sse_S3_enabled", "type", "radio", "name", "encryption_type", "value", "AES256", 1, "form-check-input"], ["for", "sse_S3_enabled", 1, "form-control-label"], i18n_86, ["formControlName", "encryption_type", "id", "kms_enabled", "name", "encryption_type", "value", "aws:kms", "type", "radio", 1, "form-check-input"], ["for", "kms_enabled", 1, "form-control-label"], i18n_88, ["for", "kms_provider", 1, "cd-col-form-label", "required"], i18n_90, ["id", "kms_provider", "name", "kms_provider", "formControlName", "kms_provider", 1, "form-select", 3, "autofocus"], i18n_92, i18n_94, ["for", "keyId", 1, "cd-col-form-label", "required"], i18n_96, ["id", "keyId", "name", "keyId", "type", "text", "formControlName", "keyId", 1, "form-control"], i18n_98]; }, template: function RgwBucketFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](0, RgwBucketFormComponent_div_0_Template, 73, 43, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("cdFormLoading", ctx.loading);
    } }, directives: [_shared_directives_form_loading_directive__WEBPACK_IMPORTED_MODULE_16__.FormLoadingDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatusGroup, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_17__.CdFormValidationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_18__.CdFormGroupDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_19__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_20__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgClass, _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_21__.AutofocusDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.CheckboxControlValueAccessor, _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_22__.HelperComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.RadioControlValueAccessor, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_23__.FormButtonPanelComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_29__.TitleCasePipe, _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_24__.UpperFirstPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZ3ctYnVja2V0LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 25794:
/*!***********************************************************************!*\
  !*** ./src/app/ceph/rgw/rgw-bucket-list/rgw-bucket-list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwBucketListComponent": () => (/* binding */ RgwBucketListComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 25160);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 42720);
/* harmony import */ var _app_shared_api_rgw_bucket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/rgw-bucket.service */ 95152);
/* harmony import */ var _app_shared_classes_list_with_details_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/classes/list-with-details.class */ 68136);
/* harmony import */ var _app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/components/critical-confirmation-modal/critical-confirmation-modal.component */ 30982);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/datatable/table/table.component */ 35905);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 65862);
/* harmony import */ var _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/models/cd-table-selection */ 68774);
/* harmony import */ var _app_shared_pipes_dimless_binary_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/shared/pipes/dimless-binary.pipe */ 47557);
/* harmony import */ var _app_shared_pipes_dimless_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/shared/pipes/dimless.pipe */ 66369);
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 79247);
/* harmony import */ var _app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/shared/services/modal.service */ 63285);
/* harmony import */ var _app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/shared/services/url-builder.service */ 51847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/datatable/table-actions/table-actions.component */ 94928);
/* harmony import */ var _rgw_bucket_details_rgw_bucket_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../rgw-bucket-details/rgw-bucket-details.component */ 41797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_usage_bar_usage_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/usage-bar/usage-bar.component */ 60251);




























const _c0 = ["bucketSizeTpl"];
const _c1 = ["bucketObjectTpl"];
function RgwBucketListComponent_ng_template_4_cd_usage_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "cd-usage-bar", 8);
} if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("total", row_r5.bucket_quota.max_size)("used", row_r5.bucket_size);
} }
function RgwBucketListComponent_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵi18n"](0, 9);
} }
function RgwBucketListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, RgwBucketListComponent_ng_template_4_cd_usage_bar_0_Template, 1, 2, "cd-usage-bar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, RgwBucketListComponent_ng_template_4_ng_template_1_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const row_r5 = ctx.row;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", row_r5.bucket_quota.max_size > 0 && row_r5.bucket_quota.enabled)("ngIfElse", _r7);
} }
function RgwBucketListComponent_ng_template_6_cd_usage_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "cd-usage-bar", 12);
} if (rf & 2) {
    const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("total", row_r10.bucket_quota.max_objects)("used", row_r10.num_objects)("isBinary", false);
} }
function RgwBucketListComponent_ng_template_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵi18n"](0, 13);
} }
function RgwBucketListComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, RgwBucketListComponent_ng_template_6_cd_usage_bar_0_Template, 1, 3, "cd-usage-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, RgwBucketListComponent_ng_template_6_ng_template_1_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const row_r10 = ctx.row;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", row_r10.bucket_quota.max_objects > 0 && row_r10.bucket_quota.enabled)("ngIfElse", _r12);
} }
const BASE_URL = 'rgw/bucket';
class RgwBucketListComponent extends _app_shared_classes_list_with_details_class__WEBPACK_IMPORTED_MODULE_2__.ListWithDetails {
    constructor(authStorageService, dimlessBinaryPipe, dimlessPipe, rgwBucketService, modalService, urlBuilder, actionLabels, ngZone) {
        super(ngZone);
        this.authStorageService = authStorageService;
        this.dimlessBinaryPipe = dimlessBinaryPipe;
        this.dimlessPipe = dimlessPipe;
        this.rgwBucketService = rgwBucketService;
        this.modalService = modalService;
        this.urlBuilder = urlBuilder;
        this.actionLabels = actionLabels;
        this.ngZone = ngZone;
        this.columns = [];
        this.buckets = [];
        this.selection = new _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_7__.CdTableSelection();
    }
    ngOnInit() {
        this.permission = this.authStorageService.getPermissions().rgw;
        this.columns = [
            {
                name: "Name",
                prop: 'bid',
                flexGrow: 2
            },
            {
                name: "Owner",
                prop: 'owner',
                flexGrow: 2.5
            },
            {
                name: "Used Capacity",
                prop: 'bucket_size',
                flexGrow: 0.6,
                pipe: this.dimlessBinaryPipe
            },
            {
                name: "Capacity Limit %",
                prop: 'size_usage',
                cellTemplate: this.bucketSizeTpl,
                flexGrow: 0.8
            },
            {
                name: "Objects",
                prop: 'num_objects',
                flexGrow: 0.6,
                pipe: this.dimlessPipe
            },
            {
                name: "Object Limit %",
                prop: 'object_usage',
                cellTemplate: this.bucketObjectTpl,
                flexGrow: 0.8
            }
        ];
        const getBucketUri = () => this.selection.first() && `${encodeURIComponent(this.selection.first().bid)}`;
        const addAction = {
            permission: 'create',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_6__.Icons.add,
            routerLink: () => this.urlBuilder.getCreate(),
            name: this.actionLabels.CREATE,
            canBePrimary: (selection) => !selection.hasSelection
        };
        const editAction = {
            permission: 'update',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_6__.Icons.edit,
            routerLink: () => this.urlBuilder.getEdit(getBucketUri()),
            name: this.actionLabels.EDIT
        };
        const deleteAction = {
            permission: 'delete',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_6__.Icons.destroy,
            click: () => this.deleteAction(),
            disable: () => !this.selection.hasSelection,
            name: this.actionLabels.DELETE,
            canBePrimary: (selection) => selection.hasMultiSelection
        };
        this.tableActions = [addAction, editAction, deleteAction];
        this.setTableRefreshTimeout();
    }
    transformBucketData() {
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.buckets, (bucketKey) => {
            const maxBucketSize = bucketKey['bucket_quota']['max_size'];
            const maxBucketObjects = bucketKey['bucket_quota']['max_objects'];
            bucketKey['bucket_size'] = 0;
            bucketKey['num_objects'] = 0;
            if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isEmpty(bucketKey['usage'])) {
                bucketKey['bucket_size'] = bucketKey['usage']['rgw.main']['size_actual'];
                bucketKey['num_objects'] = bucketKey['usage']['rgw.main']['num_objects'];
            }
            bucketKey['size_usage'] =
                maxBucketSize > 0 ? bucketKey['bucket_size'] / maxBucketSize : undefined;
            bucketKey['object_usage'] =
                maxBucketObjects > 0 ? bucketKey['num_objects'] / maxBucketObjects : undefined;
        });
    }
    getBucketList(context) {
        this.setTableRefreshTimeout();
        this.rgwBucketService.list(true).subscribe((resp) => {
            this.buckets = resp;
            this.transformBucketData();
        }, () => {
            context.error();
        });
    }
    updateSelection(selection) {
        this.selection = selection;
    }
    deleteAction() {
        this.modalService.show(_app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_3__.CriticalConfirmationModalComponent, {
            itemDescription: this.selection.hasSingleSelection ? "bucket" : "buckets",
            itemNames: this.selection.selected.map((bucket) => bucket['bid']),
            submitActionObservable: () => {
                return new rxjs__WEBPACK_IMPORTED_MODULE_17__.Observable((observer) => {
                    // Delete all selected data table rows.
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.forkJoin)(this.selection.selected.map((bucket) => {
                        return this.rgwBucketService.delete(bucket.bid);
                    })).subscribe({
                        error: (error) => {
                            // Forward the error to the observer.
                            observer.error(error);
                            // Reload the data table content because some deletions might
                            // have been executed successfully in the meanwhile.
                            this.table.refreshBtn();
                        },
                        complete: () => {
                            // Notify the observer that we are done.
                            observer.complete();
                            // Reload the data table content.
                            this.table.refreshBtn();
                        }
                    });
                });
            }
        });
    }
}
RgwBucketListComponent.ɵfac = function RgwBucketListComponent_Factory(t) { return new (t || RgwBucketListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_10__.AuthStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_app_shared_pipes_dimless_binary_pipe__WEBPACK_IMPORTED_MODULE_8__.DimlessBinaryPipe), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_app_shared_pipes_dimless_pipe__WEBPACK_IMPORTED_MODULE_9__.DimlessPipe), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_app_shared_api_rgw_bucket_service__WEBPACK_IMPORTED_MODULE_1__.RgwBucketService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_11__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_12__.URLBuilderService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__.ActionLabelsI18n), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgZone)); };
RgwBucketListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: RgwBucketListComponent, selectors: [["cd-rgw-bucket-list"]], viewQuery: function RgwBucketListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.bucketSizeTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.bucketObjectTpl = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵProvidersFeature"]([{ provide: _app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_12__.URLBuilderService, useValue: new _app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_12__.URLBuilderService(BASE_URL) }]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 9, consts: function () { let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2378102027773585685$$SRC_APP_CEPH_RGW_RGW_BUCKET_LIST_RGW_BUCKET_LIST_COMPONENT_TS___3 = goog.getMsg("No Limit");
        i18n_2 = MSG_EXTERNAL_2378102027773585685$$SRC_APP_CEPH_RGW_RGW_BUCKET_LIST_RGW_BUCKET_LIST_COMPONENT_TS___3;
    }
    else {
        i18n_2 = "No Limit";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2378102027773585685$$SRC_APP_CEPH_RGW_RGW_BUCKET_LIST_RGW_BUCKET_LIST_COMPONENT_TS___5 = goog.getMsg("No Limit");
        i18n_4 = MSG_EXTERNAL_2378102027773585685$$SRC_APP_CEPH_RGW_RGW_BUCKET_LIST_RGW_BUCKET_LIST_COMPONENT_TS___5;
    }
    else {
        i18n_4 = "No Limit";
    } return [["columnMode", "flex", "selectionType", "multiClick", "identifier", "bid", 3, "autoReload", "data", "columns", "hasDetails", "status", "setExpandedRow", "updateSelection", "fetchData"], ["table", ""], [1, "table-actions", 3, "permission", "selection", "tableActions"], ["cdTableDetail", "", 3, "selection"], ["bucketSizeTpl", ""], ["bucketObjectTpl", ""], [3, "total", "used", 4, "ngIf", "ngIfElse"], ["noSizeQuota", ""], [3, "total", "used"], i18n_2, [3, "total", "used", "isBinary", 4, "ngIf", "ngIfElse"], ["noObjectQuota", ""], [3, "total", "used", "isBinary"], i18n_4]; }, template: function RgwBucketListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "cd-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("setExpandedRow", function RgwBucketListComponent_Template_cd_table_setExpandedRow_0_listener($event) { return ctx.setExpandedRow($event); })("updateSelection", function RgwBucketListComponent_Template_cd_table_updateSelection_0_listener($event) { return ctx.updateSelection($event); })("fetchData", function RgwBucketListComponent_Template_cd_table_fetchData_0_listener($event) { return ctx.getBucketList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "cd-table-actions", 2)(3, "cd-rgw-bucket-details", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, RgwBucketListComponent_ng_template_4_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, RgwBucketListComponent_ng_template_6_Template, 3, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("autoReload", false)("data", ctx.buckets)("columns", ctx.columns)("hasDetails", true)("status", ctx.tableStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("permission", ctx.permission)("selection", ctx.selection)("tableActions", ctx.tableActions);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("selection", ctx.expandedRow);
    } }, directives: [_app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_13__.TableActionsComponent, _rgw_bucket_details_rgw_bucket_details_component__WEBPACK_IMPORTED_MODULE_14__.RgwBucketDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _shared_components_usage_bar_usage_bar_component__WEBPACK_IMPORTED_MODULE_15__.UsageBarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZ3ctYnVja2V0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 53228:
/*!*************************************************************************!*\
  !*** ./src/app/ceph/rgw/rgw-config-modal/rgw-config-modal.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwConfigModalComponent": () => (/* binding */ RgwConfigModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_shared_api_rgw_bucket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/rgw-bucket.service */ 95152);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/enum/notification-type.enum */ 18001);
/* harmony import */ var _app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-builder */ 62862);
/* harmony import */ var _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/forms/cd-validators */ 82723);
/* harmony import */ var _app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/services/notification.service */ 97161);
/* harmony import */ var _models_rgw_bucket_encryption__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/rgw-bucket-encryption */ 86986);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/helper/helper.component */ 18372);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 30839);





























function RgwConfigModalComponent_div_18_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngValue", null);
} }
function RgwConfigModalComponent_div_18_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const provider_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", provider_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](provider_r14);
} }
function RgwConfigModalComponent_div_18_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function RgwConfigModalComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 7)(2, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](3, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 24)(5, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, RgwConfigModalComponent_div_18_option_6_Template, 2, 1, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, RgwConfigModalComponent_div_18_option_7_Template, 2, 2, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, RgwConfigModalComponent_div_18_span_8_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.kmsProviders !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.kmsProviders);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.configForm.showError("kms_provider", _r0, "required"));
} }
function RgwConfigModalComponent_div_19_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngValue", null);
} }
function RgwConfigModalComponent_div_19_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const auth_method_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", auth_method_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](auth_method_r18);
} }
function RgwConfigModalComponent_div_19_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function RgwConfigModalComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 7)(2, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](3, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 24)(5, "select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, RgwConfigModalComponent_div_19_option_6_Template, 2, 1, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, RgwConfigModalComponent_div_19_option_7_Template, 2, 2, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, RgwConfigModalComponent_div_19_span_8_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.authMethods !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.authMethods);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.configForm.showError("auth_method", _r0, "required"));
} }
function RgwConfigModalComponent_div_20_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngValue", null);
} }
function RgwConfigModalComponent_div_20_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const secret_engine_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", secret_engine_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](secret_engine_r22);
} }
function RgwConfigModalComponent_div_20_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function RgwConfigModalComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 7)(2, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](3, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 24)(5, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, RgwConfigModalComponent_div_20_option_6_Template, 2, 1, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, RgwConfigModalComponent_div_20_option_7_Template, 2, 2, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, RgwConfigModalComponent_div_20_span_8_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r3.secretEngines !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r3.secretEngines);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r3.configForm.showError("secret_engine", _r0, "required"));
} }
function RgwConfigModalComponent_div_21_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function RgwConfigModalComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 7)(2, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](3, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, RgwConfigModalComponent_div_21_span_6_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r4.configForm.showError("secret_path", _r0, "required"));
} }
function RgwConfigModalComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 7)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](3, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} }
function RgwConfigModalComponent_div_23_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function RgwConfigModalComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 7)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](3, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, RgwConfigModalComponent_div_23_span_6_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r6.configForm.showError("address", _r0, "required"));
} }
function RgwConfigModalComponent_div_24_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function RgwConfigModalComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 7)(1, "label", 55)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](3, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 24)(5, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function RgwConfigModalComponent_div_24_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r26.fileUpload($event.target.files, "token"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, RgwConfigModalComponent_div_24_span_6_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r7.configForm.showError("token", _r0, "required"));
} }
function RgwConfigModalComponent_div_25_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function RgwConfigModalComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 7)(2, "label", 59)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](4, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "cd-helper");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](6, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 24)(8, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function RgwConfigModalComponent_div_25_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r29.fileUpload($event.target.files, "ssl_cert"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, RgwConfigModalComponent_div_25_span_9_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r8.configForm.showError("ssl_cert", _r0, "required"));
} }
function RgwConfigModalComponent_div_26_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function RgwConfigModalComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 7)(2, "label", 64)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](4, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "cd-helper");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](6, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 24)(8, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function RgwConfigModalComponent_div_26_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r32.fileUpload($event.target.files, "client_cert"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, RgwConfigModalComponent_div_26_span_9_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r9.configForm.showError("client_cert", _r0, "required"));
} }
function RgwConfigModalComponent_div_27_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function RgwConfigModalComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 7)(2, "label", 69)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](4, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "cd-helper");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](6, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 24)(8, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function RgwConfigModalComponent_div_27_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r35.fileUpload($event.target.files, "client_key"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, RgwConfigModalComponent_div_27_span_9_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r10.configForm.showError("client_key", _r0, "required"));
} }
class RgwConfigModalComponent {
    constructor(formBuilder, activeModal, router, actionLabels, rgwBucketService, rgwEncryptionModal, notificationService) {
        this.formBuilder = formBuilder;
        this.activeModal = activeModal;
        this.router = router;
        this.actionLabels = actionLabels;
        this.rgwBucketService = rgwBucketService;
        this.rgwEncryptionModal = rgwEncryptionModal;
        this.notificationService = notificationService;
        this.vaultAddress = /^((https?:\/\/)|(www.))(?:([a-zA-Z]+)|(\d+\.\d+.\d+.\d+)):\d{4}$/;
        this.submitAction = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.createForm();
    }
    ngOnInit() {
        this.kmsProviders = this.rgwEncryptionModal.kmsProviders;
        this.authMethods = this.rgwEncryptionModal.authMethods;
        this.secretEngines = this.rgwEncryptionModal.secretEngines;
    }
    createForm() {
        this.configForm = this.formBuilder.group({
            address: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('vaultPattern', (value) => {
                        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isEmpty(value)) {
                            return false;
                        }
                        return !this.vaultAddress.test(value);
                    })
                ]
            ],
            kms_provider: ['vault', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            encryptionType: ['aws:kms', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            auth_method: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            secret_engine: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
            secret_path: ['/'],
            namespace: [null],
            token: [
                null,
                [
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.requiredIf({
                        auth_method: 'token'
                    })
                ]
            ],
            ssl_cert: [null, _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.sslCert()],
            client_cert: [null, _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.pemCert()],
            client_key: [null, _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.sslPrivKey()],
            kmsEnabled: [{ value: false }],
            s3Enabled: [{ value: false }]
        });
    }
    fileUpload(files, controlName) {
        const file = files[0];
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            const control = this.configForm.get(controlName);
            control.setValue(file);
            control.markAsDirty();
            control.markAsTouched();
            control.updateValueAndValidity();
        });
    }
    onSubmit() {
        const values = this.configForm.value;
        this.rgwBucketService
            .setEncryptionConfig(values['encryptionType'], values['kms_provider'], values['auth_method'], values['secret_engine'], values['secret_path'], values['namespace'], values['address'], values['token'], values['owner'], values['ssl_cert'], values['client_cert'], values['client_key'])
            .subscribe({
            next: () => {
                this.notificationService.show(_app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__.NotificationType.success, "Updated RGW Encryption Configuration values");
            },
            error: (error) => {
                this.notificationService.show(_app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__.NotificationType.error, error);
                this.configForm.setErrors({ cdSubmitButton: true });
            },
            complete: () => {
                this.activeModal.close();
                this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                this.router.onSameUrlNavigation = 'reload';
                this.router.navigate([this.router.url]);
            }
        });
    }
}
RgwConfigModalComponent.ɵfac = function RgwConfigModalComponent_Factory(t) { return new (t || RgwConfigModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_4__.CdFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__.ActionLabelsI18n), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_api_rgw_bucket_service__WEBPACK_IMPORTED_MODULE_1__.RgwBucketService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_models_rgw_bucket_encryption__WEBPACK_IMPORTED_MODULE_7__.RgwBucketEncryptionModel), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService)); };
RgwConfigModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: RgwConfigModalComponent, selectors: [["cd-rgw-config-modal"]], outputs: { submitAction: "submitAction" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵProvidersFeature"]([_models_rgw_bucket_encryption__WEBPACK_IMPORTED_MODULE_7__.RgwBucketEncryptionModel])], decls: 30, vars: 14, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc form title
         */
        const MSG_EXTERNAL_6587271048433412813$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS_1 = goog.getMsg("Update RGW Encryption Configurations");
        i18n_0 = MSG_EXTERNAL_6587271048433412813$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "Update RGW Encryption Configurations";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8358388827744192621$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS_3 = goog.getMsg("Encryption Type");
        i18n_2 = MSG_EXTERNAL_8358388827744192621$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "Encryption Type";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2745302277336677145$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS_5 = goog.getMsg("SSE-S3 Encryption");
        i18n_4 = MSG_EXTERNAL_2745302277336677145$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "SSE-S3 Encryption";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2469171658885802924$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS_7 = goog.getMsg("SSE-KMS Encryption");
        i18n_6 = MSG_EXTERNAL_2469171658885802924$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "SSE-KMS Encryption";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5133287481383359596$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__9 = goog.getMsg("Key management service provider");
        i18n_8 = MSG_EXTERNAL_5133287481383359596$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__9;
    }
    else {
        i18n_8 = "Key management service provider";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_634394574327617185$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___11 = goog.getMsg("-- Select a provider --");
        i18n_10 = MSG_EXTERNAL_634394574327617185$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___11;
    }
    else {
        i18n_10 = "-- Select a provider --";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___13 = goog.getMsg("This field is required.");
        i18n_12 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___13;
    }
    else {
        i18n_12 = "This field is required.";
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5161459699960713360$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__15 = goog.getMsg("Authentication Method");
        i18n_14 = MSG_EXTERNAL_5161459699960713360$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__15;
    }
    else {
        i18n_14 = "Authentication Method";
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5981315972339169965$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___17 = goog.getMsg("-- Select a method --");
        i18n_16 = MSG_EXTERNAL_5981315972339169965$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___17;
    }
    else {
        i18n_16 = "-- Select a method --";
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___19 = goog.getMsg("This field is required.");
        i18n_18 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___19;
    }
    else {
        i18n_18 = "This field is required.";
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2309054511008088416$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__21 = goog.getMsg("Secret Engine");
        i18n_20 = MSG_EXTERNAL_2309054511008088416$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__21;
    }
    else {
        i18n_20 = "Secret Engine";
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5981315972339169965$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___23 = goog.getMsg("-- Select a method --");
        i18n_22 = MSG_EXTERNAL_5981315972339169965$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___23;
    }
    else {
        i18n_22 = "-- Select a method --";
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___25 = goog.getMsg("This field is required.");
        i18n_24 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___25;
    }
    else {
        i18n_24 = "This field is required.";
    } let i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7622506483366810463$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__27 = goog.getMsg("Secret Path ");
        i18n_26 = MSG_EXTERNAL_7622506483366810463$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__27;
    }
    else {
        i18n_26 = "Secret Path ";
    } let i18n_28; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___29 = goog.getMsg("This field is required.");
        i18n_28 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___29;
    }
    else {
        i18n_28 = "This field is required.";
    } let i18n_30; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5717093645717358574$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__31 = goog.getMsg("Namespace ");
        i18n_30 = MSG_EXTERNAL_5717093645717358574$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__31;
    }
    else {
        i18n_30 = "Namespace ";
    } let i18n_32; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6137480457202483305$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__33 = goog.getMsg("Vault Address ");
        i18n_32 = MSG_EXTERNAL_6137480457202483305$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__33;
    }
    else {
        i18n_32 = "Vault Address ";
    } let i18n_34; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___35 = goog.getMsg("This field is required.");
        i18n_34 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___35;
    }
    else {
        i18n_34 = "This field is required.";
    } let i18n_36; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3039940756451018621$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__37 = goog.getMsg("Token");
        i18n_36 = MSG_EXTERNAL_3039940756451018621$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__37;
    }
    else {
        i18n_36 = "Token";
    } let i18n_38; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___39 = goog.getMsg("This field is required.");
        i18n_38 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___39;
    }
    else {
        i18n_38 = "This field is required.";
    } let i18n_40; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2305474695066783826$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__41 = goog.getMsg("CA Certificate");
        i18n_40 = MSG_EXTERNAL_2305474695066783826$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__41;
    }
    else {
        i18n_40 = "CA Certificate";
    } let i18n_42; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2542310435779389885$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__43 = goog.getMsg("The SSL certificate in PEM format.");
        i18n_42 = MSG_EXTERNAL_2542310435779389885$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__43;
    }
    else {
        i18n_42 = "The SSL certificate in PEM format.";
    } let i18n_44; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___45 = goog.getMsg("This field is required.");
        i18n_44 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___45;
    }
    else {
        i18n_44 = "This field is required.";
    } let i18n_46; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9030336811208796738$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__47 = goog.getMsg("Client Certificate");
        i18n_46 = MSG_EXTERNAL_9030336811208796738$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__47;
    }
    else {
        i18n_46 = "Client Certificate";
    } let i18n_48; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6860017323000930145$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__49 = goog.getMsg("The Client certificate in PEM format.");
        i18n_48 = MSG_EXTERNAL_6860017323000930145$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__49;
    }
    else {
        i18n_48 = "The Client certificate in PEM format.";
    } let i18n_50; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___51 = goog.getMsg("This field is required.");
        i18n_50 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___51;
    }
    else {
        i18n_50 = "This field is required.";
    } let i18n_52; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6472480362253483341$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__53 = goog.getMsg("Client Private Key");
        i18n_52 = MSG_EXTERNAL_6472480362253483341$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__53;
    }
    else {
        i18n_52 = "Client Private Key";
    } let i18n_54; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3861429997794024275$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__55 = goog.getMsg("The Client Private Key in PEM format.");
        i18n_54 = MSG_EXTERNAL_3861429997794024275$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS__55;
    }
    else {
        i18n_54 = "The Client Private Key in PEM format.";
    } let i18n_56; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___57 = goog.getMsg("This field is required.");
        i18n_56 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_CONFIG_MODAL_RGW_CONFIG_MODAL_COMPONENT_TS___57;
    }
    else {
        i18n_56 = "This field is required.";
    } return [[3, "modalRef"], [1, "modal-title"], i18n_0, [1, "modal-content"], ["name", "configForm", 3, "formGroup"], ["frm", "ngForm"], [1, "modal-body"], [1, "form-group", "row"], ["for", "encryptionType", 1, "cd-col-form-label", "required"], i18n_2, [1, "col-md-auto", "custom-checkbox", "form-check-inline", "ms-3"], ["formControlName", "encryptionType", "id", "s3Enabled", "type", "radio", "name", "encryptionType", "value", "AES256", 1, "form-check-input"], ["for", "s3Enabled", 1, "custom-check-label"], i18n_4, [1, "col-md-auto", "custom-checkbox", "form-check-inline"], ["formControlName", "encryptionType", "id", "kmsEnabled", "name", "encryptionType", "value", "aws:kms", "type", "radio", 1, "form-check-input"], ["for", "kmsEnabled", 1, "custom-check-label"], i18n_6, [4, "ngIf"], ["class", "form-group row", 4, "ngIf"], [1, "modal-footer"], [3, "submitText", "form", "submitActionEvent"], ["for", "kms_provider", 1, "cd-col-form-label", "required"], i18n_8, [1, "cd-col-form-input"], ["id", "kms_provider", "name", "kms_provider", "formControlName", "kms_provider", 1, "form-select"], [3, "ngValue", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], [3, "ngValue"], i18n_10, [3, "value"], [1, "invalid-feedback"], i18n_12, ["for", "auth_method", 1, "cd-col-form-label", "required"], i18n_14, ["id", "auth_method", "name", "auth_method", "formControlName", "auth_method", 1, "form-select"], i18n_16, i18n_18, ["for", "secret_engine", 1, "cd-col-form-label", "required"], i18n_20, ["id", "secret_engine", "name", "secret_engine", "formControlName", "secret_engine", 1, "form-select"], i18n_22, i18n_24, ["for", "secret_path", 1, "cd-col-form-label"], i18n_26, ["id", "secret_path", "name", "secret_path", "type", "text", "formControlName", "secret_path", 1, "form-control"], i18n_28, ["for", "namespace", 1, "cd-col-form-label"], i18n_30, ["id", "namespace", "name", "namespace", "type", "text", "formControlName", "namespace", 1, "form-control"], ["for", "address", 1, "cd-col-form-label", "required"], i18n_32, ["id", "address", "name", "address", "formControlName", "address", 1, "form-control"], i18n_34, ["for", "token", 1, "cd-col-form-label", "required"], i18n_36, ["type", "file", "formControlName", "token", 3, "change"], i18n_38, ["for", "ssl_cert", 1, "cd-col-form-label"], i18n_40, i18n_42, ["type", "file", "formControlName", "ssl_cert", 3, "change"], i18n_44, ["for", "client_cert", 1, "cd-col-form-label"], i18n_46, i18n_48, ["type", "file", "formControlName", "client_cert", 3, "change"], i18n_50, ["for", "client_key", 1, "cd-col-form-label"], i18n_52, i18n_54, ["type", "file", 3, "change"], i18n_56]; }, template: function RgwConfigModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "cd-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "form", 4, 5)(6, "div", 6)(7, "div", 7)(8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](9, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](13, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](17, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, RgwConfigModalComponent_div_18_Template, 9, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, RgwConfigModalComponent_div_19_Template, 9, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](20, RgwConfigModalComponent_div_20_Template, 9, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](21, RgwConfigModalComponent_div_21_Template, 7, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](22, RgwConfigModalComponent_div_22_Template, 6, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](23, RgwConfigModalComponent_div_23_Template, 7, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](24, RgwConfigModalComponent_div_24_Template, 7, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, RgwConfigModalComponent_div_25_Template, 10, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](26, RgwConfigModalComponent_div_26_Template, 10, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](27, RgwConfigModalComponent_div_27_Template, 10, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 20)(29, "cd-form-button-panel", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("submitActionEvent", function RgwConfigModalComponent_Template_cd_form_button_panel_submitActionEvent_29_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.configForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.configForm.getValue("encryptionType") === "aws:kms" || ctx.configForm.getValue("encryptionType") === "AES256");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.configForm.getValue("encryptionType") === "aws:kms" || ctx.configForm.getValue("encryptionType") === "AES256");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.configForm.getValue("encryptionType") === "aws:kms" || ctx.configForm.getValue("encryptionType") === "AES256");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.configForm.getValue("encryptionType") === "aws:kms" || ctx.configForm.getValue("encryptionType") === "AES256");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.configForm.getValue("encryptionType") === "aws:kms" || ctx.configForm.getValue("encryptionType") === "AES256");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.configForm.getValue("encryptionType") === "aws:kms" || ctx.configForm.getValue("encryptionType") === "AES256");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.configForm.getValue("auth_method") === "token");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.configForm.getValue("encryptionType") === "aws:kms" || ctx.configForm.getValue("encryptionType") === "AES256");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.configForm.getValue("encryptionType") === "aws:kms" || ctx.configForm.getValue("encryptionType") === "AES256");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.configForm.getValue("encryptionType") === "aws:kms" || ctx.configForm.getValue("encryptionType") === "AES256");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("submitText", ctx.actionLabels.SUBMIT)("form", ctx.configForm);
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_9__.CdFormValidationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_10__.CdFormGroupDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_11__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RadioControlValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_12__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_13__.HelperComponent, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_14__.FormButtonPanelComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZ3ctY29uZmlnLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 86873:
/*!*****************************************************************************!*\
  !*** ./src/app/ceph/rgw/rgw-daemon-details/rgw-daemon-details.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwDaemonDetailsComponent": () => (/* binding */ RgwDaemonDetailsComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_ceph_rgw_models_rgw_daemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/ceph/rgw/models/rgw-daemon */ 47804);
/* harmony import */ var _app_shared_api_rgw_daemon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/api/rgw-daemon.service */ 20523);
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 79247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_directives_stateful_tab_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/stateful-tab.directive */ 59376);
/* harmony import */ var _shared_datatable_table_key_value_table_key_value_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/datatable/table-key-value/table-key-value.component */ 61350);
/* harmony import */ var _performance_counter_table_performance_counter_table_performance_counter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../performance-counter/table-performance-counter/table-performance-counter.component */ 15903);
/* harmony import */ var _shared_components_grafana_grafana_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/grafana/grafana.component */ 76317);













function RgwDaemonDetailsComponent_ng_container_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "cd-table-key-value", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("fetchData", function RgwDaemonDetailsComponent_ng_container_0_ng_template_6_Template_cd_table_key_value_fetchData_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r5.getMetaData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r2.metadata);
} }
function RgwDaemonDetailsComponent_ng_container_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "cd-table-performance-counter", 12);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("serviceId", ctx_r3.serviceMapId);
} }
function RgwDaemonDetailsComponent_ng_container_0_ng_container_11_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "cd-grafana", 15);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("grafanaPath", "rgw-instance-detail?var-rgw_servers=rgw." + ctx_r7.serviceId)("type", "metrics");
} }
function RgwDaemonDetailsComponent_ng_container_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, RgwDaemonDetailsComponent_ng_container_0_ng_container_11_ng_template_3_Template, 1, 2, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
function RgwDaemonDetailsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "nav", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](5, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, RgwDaemonDetailsComponent_ng_container_0_ng_template_6_Template, 1, 1, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](7, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](9, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, RgwDaemonDetailsComponent_ng_container_0_ng_template_10_Template, 1, 1, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, RgwDaemonDetailsComponent_ng_container_0_ng_container_11_Template, 4, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.grafanaPermission.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngbNavOutlet", _r1);
} }
class RgwDaemonDetailsComponent {
    constructor(rgwDaemonService, authStorageService) {
        this.rgwDaemonService = rgwDaemonService;
        this.authStorageService = authStorageService;
        this.serviceId = '';
        this.serviceMapId = '';
        this.grafanaPermission = this.authStorageService.getPermissions().grafana;
    }
    ngOnChanges() {
        if (this.selection) {
            this.serviceId = this.selection.id;
            this.serviceMapId = this.selection.service_map_id;
        }
    }
    getMetaData() {
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isEmpty(this.serviceId)) {
            return;
        }
        this.rgwDaemonService.get(this.serviceId).subscribe((resp) => {
            this.metadata = resp['rgw_metadata'];
        });
    }
}
RgwDaemonDetailsComponent.ɵfac = function RgwDaemonDetailsComponent_Factory(t) { return new (t || RgwDaemonDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_shared_api_rgw_daemon_service__WEBPACK_IMPORTED_MODULE_2__.RgwDaemonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_3__.AuthStorageService)); };
RgwDaemonDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: RgwDaemonDetailsComponent, selectors: [["cd-rgw-daemon-details"]], inputs: { selection: "selection" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5028777105388019087$$SRC_APP_CEPH_RGW_RGW_DAEMON_DETAILS_RGW_DAEMON_DETAILS_COMPONENT_TS__1 = goog.getMsg("Details");
        i18n_0 = MSG_EXTERNAL_5028777105388019087$$SRC_APP_CEPH_RGW_RGW_DAEMON_DETAILS_RGW_DAEMON_DETAILS_COMPONENT_TS__1;
    }
    else {
        i18n_0 = "Details";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7348998912668568937$$SRC_APP_CEPH_RGW_RGW_DAEMON_DETAILS_RGW_DAEMON_DETAILS_COMPONENT_TS__3 = goog.getMsg("Performance Counters");
        i18n_2 = MSG_EXTERNAL_7348998912668568937$$SRC_APP_CEPH_RGW_RGW_DAEMON_DETAILS_RGW_DAEMON_DETAILS_COMPONENT_TS__3;
    }
    else {
        i18n_2 = "Performance Counters";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9041763226911499160$$SRC_APP_CEPH_RGW_RGW_DAEMON_DETAILS_RGW_DAEMON_DETAILS_COMPONENT_TS___5 = goog.getMsg("Performance Details");
        i18n_4 = MSG_EXTERNAL_9041763226911499160$$SRC_APP_CEPH_RGW_RGW_DAEMON_DETAILS_RGW_DAEMON_DETAILS_COMPONENT_TS___5;
    }
    else {
        i18n_4 = "Performance Details";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1124988716203675083$$SRC_APP_CEPH_RGW_RGW_DAEMON_DETAILS_RGW_DAEMON_DETAILS_COMPONENT_TS____7 = goog.getMsg("RGW instance details");
        i18n_6 = MSG_EXTERNAL_1124988716203675083$$SRC_APP_CEPH_RGW_RGW_DAEMON_DETAILS_RGW_DAEMON_DETAILS_COMPONENT_TS____7;
    }
    else {
        i18n_6 = "RGW instance details";
    } return [[4, "ngIf"], ["ngbNav", "", "cdStatefulTab", "rgw-daemon-details", 1, "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", "details"], ["ngbNavLink", ""], i18n_0, ["ngbNavContent", ""], ["ngbNavItem", "performance-counters"], i18n_2, ["ngbNavItem", "performance-details", 4, "ngIf"], [3, "ngbNavOutlet"], [3, "data", "fetchData"], ["serviceType", "rgw", 3, "serviceId"], ["ngbNavItem", "performance-details"], i18n_4, ["title", i18n_6, "uid", "x5ARzZtmk", "grafanaStyle", "one", 3, "grafanaPath", "type"]]; }, template: function RgwDaemonDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, RgwDaemonDetailsComponent_ng_container_0_Template, 13, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selection);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNav, _shared_directives_stateful_tab_directive__WEBPACK_IMPORTED_MODULE_4__.StatefulTabDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavContent, _shared_datatable_table_key_value_table_key_value_component__WEBPACK_IMPORTED_MODULE_5__.TableKeyValueComponent, _performance_counter_table_performance_counter_table_performance_counter_component__WEBPACK_IMPORTED_MODULE_6__.TablePerformanceCounterComponent, _shared_components_grafana_grafana_component__WEBPACK_IMPORTED_MODULE_7__.GrafanaComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZ3ctZGFlbW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 84017:
/*!***********************************************************************!*\
  !*** ./src/app/ceph/rgw/rgw-daemon-list/rgw-daemon-list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwDaemonListComponent": () => (/* binding */ RgwDaemonListComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_api_rgw_daemon_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/api/rgw-daemon.service */ 20523);
/* harmony import */ var _app_shared_api_rgw_site_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/rgw-site.service */ 33394);
/* harmony import */ var _app_shared_classes_list_with_details_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/classes/list-with-details.class */ 68136);
/* harmony import */ var _app_shared_pipes_ceph_short_version_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/pipes/ceph-short-version.pipe */ 58111);
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 79247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/datatable/table/table.component */ 35905);
/* harmony import */ var _rgw_daemon_details_rgw_daemon_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rgw-daemon-details/rgw-daemon-details.component */ 86873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_grafana_grafana_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/grafana/grafana.component */ 76317);















function RgwDaemonListComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "cd-table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("setExpandedRow", function RgwDaemonListComponent_ng_template_5_Template_cd_table_setExpandedRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r4.setExpandedRow($event); })("fetchData", function RgwDaemonListComponent_ng_template_5_Template_cd_table_fetchData_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r6.getDaemonList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "cd-rgw-daemon-details", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r1.daemons)("columns", ctx_r1.columns)("hasDetails", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selection", ctx_r1.expandedRow);
} }
function RgwDaemonListComponent_ng_container_6_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "cd-grafana", 11);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("grafanaPath", "rgw-overview?")("type", "metrics");
} }
function RgwDaemonListComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, RgwDaemonListComponent_ng_container_6_ng_template_3_Template, 1, 2, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
function RgwDaemonListComponent_ng_container_7_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "cd-grafana", 13);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("grafanaPath", "radosgw-sync-overview?")("type", "metrics");
} }
function RgwDaemonListComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, RgwDaemonListComponent_ng_container_7_ng_template_3_Template, 1, 2, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
class RgwDaemonListComponent extends _app_shared_classes_list_with_details_class__WEBPACK_IMPORTED_MODULE_2__.ListWithDetails {
    constructor(rgwDaemonService, authStorageService, cephShortVersionPipe, rgwSiteService) {
        super();
        this.rgwDaemonService = rgwDaemonService;
        this.authStorageService = authStorageService;
        this.cephShortVersionPipe = cephShortVersionPipe;
        this.rgwSiteService = rgwSiteService;
        this.columns = [];
        this.daemons = [];
        this.updateDaemons = (daemons) => {
            this.daemons = daemons;
        };
    }
    ngOnInit() {
        this.grafanaPermission = this.authStorageService.getPermissions().grafana;
        this.columns = [
            {
                name: "ID",
                prop: 'id',
                flexGrow: 2
            },
            {
                name: "Hostname",
                prop: 'server_hostname',
                flexGrow: 2
            },
            {
                name: "Zone",
                prop: 'zone_name',
                flexGrow: 2
            },
            {
                name: "Zone Group",
                prop: 'zonegroup_name',
                flexGrow: 2
            },
            {
                name: "Realm",
                prop: 'realm_name',
                flexGrow: 2
            },
            {
                name: "Version",
                prop: 'version',
                flexGrow: 1,
                pipe: this.cephShortVersionPipe
            }
        ];
        this.rgwSiteService
            .get('realms')
            .subscribe((realms) => (this.isMultiSite = realms.length > 0));
    }
    getDaemonList(context) {
        this.rgwDaemonService.list().subscribe(this.updateDaemons, () => {
            context.error();
        });
    }
}
RgwDaemonListComponent.ɵfac = function RgwDaemonListComponent_Factory(t) { return new (t || RgwDaemonListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_shared_api_rgw_daemon_service__WEBPACK_IMPORTED_MODULE_0__.RgwDaemonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_4__.AuthStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_shared_pipes_ceph_short_version_pipe__WEBPACK_IMPORTED_MODULE_3__.CephShortVersionPipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_shared_api_rgw_site_service__WEBPACK_IMPORTED_MODULE_1__.RgwSiteService)); };
RgwDaemonListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: RgwDaemonListComponent, selectors: [["cd-rgw-daemon-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6175860291889803960$$SRC_APP_CEPH_RGW_RGW_DAEMON_LIST_RGW_DAEMON_LIST_COMPONENT_TS_1 = goog.getMsg("Daemons List");
        i18n_0 = MSG_EXTERNAL_6175860291889803960$$SRC_APP_CEPH_RGW_RGW_DAEMON_LIST_RGW_DAEMON_LIST_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "Daemons List";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4352555506458562289$$SRC_APP_CEPH_RGW_RGW_DAEMON_LIST_RGW_DAEMON_LIST_COMPONENT_TS__3 = goog.getMsg("Overall Performance");
        i18n_2 = MSG_EXTERNAL_4352555506458562289$$SRC_APP_CEPH_RGW_RGW_DAEMON_LIST_RGW_DAEMON_LIST_COMPONENT_TS__3;
    }
    else {
        i18n_2 = "Overall Performance";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7831962171209425627$$SRC_APP_CEPH_RGW_RGW_DAEMON_LIST_RGW_DAEMON_LIST_COMPONENT_TS___5 = goog.getMsg("RGW overview");
        i18n_4 = MSG_EXTERNAL_7831962171209425627$$SRC_APP_CEPH_RGW_RGW_DAEMON_LIST_RGW_DAEMON_LIST_COMPONENT_TS___5;
    }
    else {
        i18n_4 = "RGW overview";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5434435064320012065$$SRC_APP_CEPH_RGW_RGW_DAEMON_LIST_RGW_DAEMON_LIST_COMPONENT_TS__7 = goog.getMsg("Sync Performance");
        i18n_6 = MSG_EXTERNAL_5434435064320012065$$SRC_APP_CEPH_RGW_RGW_DAEMON_LIST_RGW_DAEMON_LIST_COMPONENT_TS__7;
    }
    else {
        i18n_6 = "Sync Performance";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8268596536429252392$$SRC_APP_CEPH_RGW_RGW_DAEMON_LIST_RGW_DAEMON_LIST_COMPONENT_TS___9 = goog.getMsg("Radosgw sync overview");
        i18n_8 = MSG_EXTERNAL_8268596536429252392$$SRC_APP_CEPH_RGW_RGW_DAEMON_LIST_RGW_DAEMON_LIST_COMPONENT_TS___9;
    }
    else {
        i18n_8 = "Radosgw sync overview";
    } return [["ngbNav", "", 1, "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", ""], ["ngbNavLink", ""], i18n_0, ["ngbNavContent", ""], ["ngbNavItem", "", 4, "ngIf"], [3, "ngbNavOutlet"], ["columnMode", "flex", 3, "data", "columns", "hasDetails", "setExpandedRow", "fetchData"], ["cdTableDetail", "", 3, "selection"], i18n_2, ["title", i18n_4, "uid", "WAkugZpiz", "grafanaStyle", "two", 3, "grafanaPath", "type"], i18n_6, ["title", i18n_8, "uid", "rgw-sync-overview", "grafanaStyle", "two", 3, "grafanaPath", "type"]]; }, template: function RgwDaemonListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, RgwDaemonListComponent_ng_template_5_Template, 2, 4, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, RgwDaemonListComponent_ng_container_6_Template, 4, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, RgwDaemonListComponent_ng_container_7_Template, 4, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "div", 7);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.grafanaPermission.read);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.grafanaPermission.read && ctx.isMultiSite);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngbNavOutlet", _r0);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavContent, _shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _rgw_daemon_details_rgw_daemon_details_component__WEBPACK_IMPORTED_MODULE_6__.RgwDaemonDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_grafana_grafana_component__WEBPACK_IMPORTED_MODULE_7__.GrafanaComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZ3ctZGFlbW9uLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 76953:
/*!*******************************************************************************************!*\
  !*** ./src/app/ceph/rgw/rgw-user-capability-modal/rgw-user-capability-modal.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwUserCapabilityModalComponent": () => (/* binding */ RgwUserCapabilityModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-builder */ 62862);
/* harmony import */ var _models_rgw_user_capabilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/rgw-user-capabilities */ 57058);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/directives/autofocus.directive */ 82945);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 30839);
/* harmony import */ var _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/pipes/upper-first.pipe */ 10545);





















function RgwUserCapabilityModalComponent_input_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "input", 22);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("readonly", true);
} }
function RgwUserCapabilityModalComponent_select_14_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](1, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", null);
} }
function RgwUserCapabilityModalComponent_select_14_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", type_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](type_r8);
} }
function RgwUserCapabilityModalComponent_select_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, RgwUserCapabilityModalComponent_select_14_option_1_Template, 2, 1, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, RgwUserCapabilityModalComponent_select_14_option_2_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.types !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r2.types);
} }
function RgwUserCapabilityModalComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](1, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function RgwUserCapabilityModalComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perm_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", perm_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", perm_r9, " ");
} }
function RgwUserCapabilityModalComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](1, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
const _c14 = function (a0) { return { "required": a0 }; };
const _c15 = function () { return ["read", "write", "*"]; };
class RgwUserCapabilityModalComponent {
    constructor(formBuilder, activeModal, actionLabels) {
        this.formBuilder = formBuilder;
        this.activeModal = activeModal;
        this.actionLabels = actionLabels;
        /**
         * The event that is triggered when the 'Add' or 'Update' button
         * has been pressed.
         */
        this.submitAction = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
        this.editing = true;
        this.types = [];
        this.resource = "capability";
        this.createForm();
    }
    createForm() {
        this.formGroup = this.formBuilder.group({
            type: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            perm: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]]
        });
    }
    /**
     * Set the 'editing' flag. If set to TRUE, the modal dialog is in 'Edit' mode,
     * otherwise in 'Add' mode. According to the mode the dialog and its controls
     * behave different.
     * @param {boolean} viewing
     */
    setEditing(editing = true) {
        this.editing = editing;
        this.action = this.editing ? this.actionLabels.EDIT : this.actionLabels.ADD;
    }
    /**
     * Set the values displayed in the dialog.
     */
    setValues(type, perm) {
        this.formGroup.setValue({
            type: type,
            perm: perm
        });
    }
    /**
     * Set the current capabilities of the user.
     */
    setCapabilities(capabilities) {
        // Parse the configured capabilities to get a list of types that
        // should be displayed.
        const usedTypes = [];
        capabilities.forEach((capability) => {
            usedTypes.push(capability.type);
        });
        this.types = [];
        _models_rgw_user_capabilities__WEBPACK_IMPORTED_MODULE_3__.RgwUserCapabilities.getAll().forEach((type) => {
            if (lodash__WEBPACK_IMPORTED_MODULE_0___default().indexOf(usedTypes, type) === -1) {
                this.types.push(type);
            }
        });
    }
    onSubmit() {
        const capability = this.formGroup.value;
        this.submitAction.emit(capability);
        this.activeModal.close();
    }
}
RgwUserCapabilityModalComponent.ɵfac = function RgwUserCapabilityModalComponent_Factory(t) { return new (t || RgwUserCapabilityModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_2__.CdFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__.ActionLabelsI18n)); };
RgwUserCapabilityModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: RgwUserCapabilityModalComponent, selectors: [["cd-rgw-user-capability-modal"]], outputs: { submitAction: "submitAction" }, decls: 29, vars: 24, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc form title
         */
        const MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_RGW_RGW_USER_CAPABILITY_MODAL_RGW_USER_CAPABILITY_MODAL_COMPONENT_TS_1 = goog.getMsg("{$interpolation} {$interpolation_1}", { "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
        i18n_0 = MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_RGW_RGW_USER_CAPABILITY_MODAL_RGW_USER_CAPABILITY_MODAL_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "" + "\uFFFD0\uFFFD" + " " + "\uFFFD1\uFFFD" + "";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8650499415827640724$$SRC_APP_CEPH_RGW_RGW_USER_CAPABILITY_MODAL_RGW_USER_CAPABILITY_MODAL_COMPONENT_TS_3 = goog.getMsg("Type");
        i18n_2 = MSG_EXTERNAL_8650499415827640724$$SRC_APP_CEPH_RGW_RGW_USER_CAPABILITY_MODAL_RGW_USER_CAPABILITY_MODAL_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "Type";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_837553826328586238$$SRC_APP_CEPH_RGW_RGW_USER_CAPABILITY_MODAL_RGW_USER_CAPABILITY_MODAL_COMPONENT_TS_5 = goog.getMsg("Permission");
        i18n_4 = MSG_EXTERNAL_837553826328586238$$SRC_APP_CEPH_RGW_RGW_USER_CAPABILITY_MODAL_RGW_USER_CAPABILITY_MODAL_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "Permission";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1496173861467679461$$SRC_APP_CEPH_RGW_RGW_USER_CAPABILITY_MODAL_RGW_USER_CAPABILITY_MODAL_COMPONENT_TS_7 = goog.getMsg("-- Select a permission --");
        i18n_6 = MSG_EXTERNAL_1496173861467679461$$SRC_APP_CEPH_RGW_RGW_USER_CAPABILITY_MODAL_RGW_USER_CAPABILITY_MODAL_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "-- Select a permission --";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8784435280015379295$$SRC_APP_CEPH_RGW_RGW_USER_CAPABILITY_MODAL_RGW_USER_CAPABILITY_MODAL_COMPONENT_TS___9 = goog.getMsg("-- Select a type --");
        i18n_8 = MSG_EXTERNAL_8784435280015379295$$SRC_APP_CEPH_RGW_RGW_USER_CAPABILITY_MODAL_RGW_USER_CAPABILITY_MODAL_COMPONENT_TS___9;
    }
    else {
        i18n_8 = "-- Select a type --";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_CAPABILITY_MODAL_RGW_USER_CAPABILITY_MODAL_COMPONENT_TS__11 = goog.getMsg("This field is required.");
        i18n_10 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_CAPABILITY_MODAL_RGW_USER_CAPABILITY_MODAL_COMPONENT_TS__11;
    }
    else {
        i18n_10 = "This field is required.";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_CAPABILITY_MODAL_RGW_USER_CAPABILITY_MODAL_COMPONENT_TS__13 = goog.getMsg("This field is required.");
        i18n_12 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_CAPABILITY_MODAL_RGW_USER_CAPABILITY_MODAL_COMPONENT_TS__13;
    }
    else {
        i18n_12 = "This field is required.";
    } return [[3, "modalRef"], [1, "modal-title"], i18n_0, [1, "modal-content"], ["novalidate", "", 3, "formGroup"], ["frm", "ngForm"], [1, "modal-body"], [1, "form-group", "row"], ["for", "type", 1, "cd-col-form-label", 3, "ngClass"], i18n_2, [1, "cd-col-form-input"], ["id", "type", "class", "form-control", "type", "text", "formControlName", "type", 3, "readonly", 4, "ngIf"], ["id", "type", "class", "form-select", "formControlName", "type", "autofocus", "", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "perm", 1, "cd-col-form-label", "required"], i18n_4, ["id", "perm", "formControlName", "perm", 1, "form-select"], [3, "ngValue"], i18n_6, [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], [3, "form", "submitText", "submitActionEvent"], ["id", "type", "type", "text", "formControlName", "type", 1, "form-control", 3, "readonly"], ["id", "type", "formControlName", "type", "autofocus", "", 1, "form-select"], [3, "ngValue", 4, "ngIf"], i18n_8, [3, "value"], [1, "invalid-feedback"], i18n_10, i18n_12]; }, template: function RgwUserCapabilityModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "cd-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "upperFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "form", 4, 5)(8, "div", 6)(9, "div", 7)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, RgwUserCapabilityModalComponent_input_13_Template, 1, 1, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, RgwUserCapabilityModalComponent_select_14_Template, 3, 2, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, RgwUserCapabilityModalComponent_span_15_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 7)(17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](18, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 10)(20, "select", 16)(21, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](22, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, RgwUserCapabilityModalComponent_option_23_Template, 2, 2, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, RgwUserCapabilityModalComponent_span_24_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 20)(26, "cd-form-button-panel", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("submitActionEvent", function RgwUserCapabilityModalComponent_Template_cd_form_button_panel_submitActionEvent_26_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](27, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](28, "upperFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 13, ctx.action))(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 15, ctx.resource));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nApply"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](21, _c14, !ctx.editing));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.editing);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.editing);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.formGroup.showError("type", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](23, _c15));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.formGroup.showError("perm", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("form", ctx.formGroup)("submitText", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](27, 17, ctx.action) + " " + _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](28, 19, ctx.resource));
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_5__.CdFormValidationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_6__.CdFormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_7__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_8__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_9__.AutofocusDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_10__.FormButtonPanelComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.TitleCasePipe, _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_11__.UpperFirstPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZ3ctdXNlci1jYXBhYmlsaXR5LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 87404:
/*!*************************************************************************!*\
  !*** ./src/app/ceph/rgw/rgw-user-details/rgw-user-details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwUserDetailsComponent": () => (/* binding */ RgwUserDetailsComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_shared_api_rgw_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/rgw-user.service */ 59882);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 65862);
/* harmony import */ var _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/models/cd-table-selection */ 68774);
/* harmony import */ var _app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/services/modal.service */ 63285);
/* harmony import */ var _rgw_user_s3_key_modal_rgw_user_s3_key_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rgw-user-s3-key-modal/rgw-user-s3-key-modal.component */ 51115);
/* harmony import */ var _rgw_user_swift_key_modal_rgw_user_swift_key_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rgw-user-swift-key-modal/rgw-user-swift-key-modal.component */ 84149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_directives_stateful_tab_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/directives/stateful-tab.directive */ 59376);
/* harmony import */ var _shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/datatable/table/table.component */ 35905);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_pipes_boolean_text_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/pipes/boolean-text.pipe */ 68962);
/* harmony import */ var _shared_pipes_map_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/pipes/map.pipe */ 78877);
/* harmony import */ var _shared_pipes_join_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/pipes/join.pipe */ 86969);
/* harmony import */ var _shared_pipes_dimless_binary_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/pipes/dimless-binary.pipe */ 47557);




















const _c0 = ["accessKeyTpl"];
const _c1 = ["secretKeyTpl"];
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](2, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r5.user.email);
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_tr_42_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subuser_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", subuser_r12.id, " (", subuser_r12.permissions, ") ");
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_tr_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](2, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_tr_42_div_4_Template, 2, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r6.user.subusers);
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_tr_43_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cap_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", cap_r14.type, " (", cap_r14.perm, ") ");
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_tr_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](2, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_tr_43_div_4_Template, 2, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r7.user.caps);
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_tr_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](2, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "join");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 1, ctx_r8.user.mfa_ids));
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_45_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_45_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](1, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_45_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "dimlessBinary");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, ctx_r17.user.user_quota.max_size), " ");
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_45_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_45_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](1, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_45_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r20.user.user_quota.max_objects, " ");
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](2, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "table", 9)(4, "tbody")(5, "tr")(6, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](7, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](10, "booleanText");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "tr")(12, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](13, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_45_td_14_Template, 2, 0, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_45_td_15_Template, 2, 0, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_45_td_16_Template, 3, 3, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "tr")(18, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](19, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_45_td_20_Template, 2, 0, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_45_td_21_Template, 2, 0, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_45_td_22_Template, 2, 1, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](10, 7, ctx_r9.user.user_quota.enabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r9.user.user_quota.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r9.user.user_quota.enabled && ctx_r9.user.user_quota.max_size <= -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r9.user.user_quota.enabled && ctx_r9.user.user_quota.max_size > -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r9.user.user_quota.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r9.user.user_quota.enabled && ctx_r9.user.user_quota.max_objects <= -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r9.user.user_quota.enabled && ctx_r9.user.user_quota.max_objects > -1);
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_46_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_46_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](1, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_46_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "dimlessBinary");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, ctx_r23.user.bucket_quota.max_size), " ");
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_46_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_46_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](1, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_46_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r26.user.bucket_quota.max_objects, " ");
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](2, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "table", 9)(4, "tbody")(5, "tr")(6, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](7, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](10, "booleanText");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "tr")(12, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](13, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_46_td_14_Template, 2, 0, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_46_td_15_Template, 2, 0, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_46_td_16_Template, 3, 3, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "tr")(18, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](19, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_46_td_20_Template, 2, 0, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_46_td_21_Template, 2, 0, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_46_td_22_Template, 2, 1, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](10, 7, ctx_r10.user.bucket_quota.enabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r10.user.bucket_quota.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r10.user.bucket_quota.enabled && ctx_r10.user.bucket_quota.max_size <= -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r10.user.bucket_quota.enabled && ctx_r10.user.bucket_quota.max_size > -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r10.user.bucket_quota.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r10.user.bucket_quota.enabled && ctx_r10.user.bucket_quota.max_objects <= -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r10.user.bucket_quota.enabled && ctx_r10.user.bucket_quota.max_objects > -1);
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "table", 9)(2, "tbody")(3, "tr")(4, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](5, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "tr")(9, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](10, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "tr")(14, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](15, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "tr")(19, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](20, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_tr_23_Template, 5, 1, "tr", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "tr")(25, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](26, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](29, "booleanText");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "tr")(31, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](32, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](35, "booleanText");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "tr")(37, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](38, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](41, "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](42, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_tr_42_Template, 5, 1, "tr", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](43, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_tr_43_Template, 5, 1, "tr", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](44, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_tr_44_Template, 6, 3, "tr", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](45, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_45_Template, 23, 9, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](46, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_div_46_Template, 23, 9, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r4.user.tenant);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r4.user.user_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r4.user.uid);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r4.user.display_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.user.email == null ? null : ctx_r4.user.email.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](29, 13, ctx_r4.user.suspended));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](35, 15, ctx_r4.user.system === "true"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](41, 17, ctx_r4.user.max_buckets, ctx_r4.maxBucketsMap));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.user.subusers && ctx_r4.user.subusers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.user.caps && ctx_r4.user.caps.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.user.mfa_ids == null ? null : ctx_r4.user.mfa_ids.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.user.user_quota);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.user.bucket_quota);
} }
function RgwUserDetailsComponent_ng_container_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, RgwUserDetailsComponent_ng_container_0_ng_template_6_div_0_Template, 47, 20, "div", 0);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.user);
} }
const _c54 = function (a0) { return [a0]; };
function RgwUserDetailsComponent_ng_container_0_ng_container_7_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "cd-table", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("updateSelection", function RgwUserDetailsComponent_ng_container_0_ng_container_7_ng_template_3_Template_cd_table_updateSelection_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r28.updateKeysSelection($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 40)(2, "div", 41)(3, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RgwUserDetailsComponent_ng_container_0_ng_container_7_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return ctx_r30.showKeyModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](6, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", ctx_r27.keys)("columns", ctx_r27.keysColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r27.keysSelection.hasSingleSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](4, _c54, ctx_r27.icons.show));
} }
function RgwUserDetailsComponent_ng_container_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](2, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, RgwUserDetailsComponent_ng_container_0_ng_container_7_ng_template_3_Template, 7, 6, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} }
function RgwUserDetailsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "nav", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](5, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, RgwUserDetailsComponent_ng_container_0_ng_template_6_Template, 1, 1, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, RgwUserDetailsComponent_ng_container_0_ng_container_7_Template, 4, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.keys.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngbNavOutlet", _r1);
} }
class RgwUserDetailsComponent {
    constructor(rgwUserService, modalService) {
        this.rgwUserService = rgwUserService;
        this.modalService = modalService;
        // Keys tab
        this.keys = [];
        this.keysColumns = [];
        this.keysSelection = new _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_3__.CdTableSelection();
        this.icons = _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__.Icons;
    }
    ngOnInit() {
        this.keysColumns = [
            {
                name: "Username",
                prop: 'username',
                flexGrow: 1
            },
            {
                name: "Type",
                prop: 'type',
                flexGrow: 1
            }
        ];
        this.maxBucketsMap = {
            '-1': "Disabled",
            0: "Unlimited"
        };
    }
    ngOnChanges() {
        if (this.selection) {
            this.user = this.selection;
            // Sort subusers and capabilities.
            this.user.subusers = lodash__WEBPACK_IMPORTED_MODULE_0___default().sortBy(this.user.subusers, 'id');
            this.user.caps = lodash__WEBPACK_IMPORTED_MODULE_0___default().sortBy(this.user.caps, 'type');
            // Load the user/bucket quota of the selected user.
            this.rgwUserService.getQuota(this.user.uid).subscribe((resp) => {
                lodash__WEBPACK_IMPORTED_MODULE_0___default().extend(this.user, resp);
            });
            // Process the keys.
            this.keys = [];
            if (this.user.keys) {
                this.user.keys.forEach((key) => {
                    this.keys.push({
                        id: this.keys.length + 1,
                        type: 'S3',
                        username: key.user,
                        ref: key
                    });
                });
            }
            if (this.user.swift_keys) {
                this.user.swift_keys.forEach((key) => {
                    this.keys.push({
                        id: this.keys.length + 1,
                        type: 'Swift',
                        username: key.user,
                        ref: key
                    });
                });
            }
            this.keys = lodash__WEBPACK_IMPORTED_MODULE_0___default().sortBy(this.keys, 'user');
        }
    }
    updateKeysSelection(selection) {
        this.keysSelection = selection;
    }
    showKeyModal() {
        const key = this.keysSelection.first();
        const modalRef = this.modalService.show(key.type === 'S3' ? _rgw_user_s3_key_modal_rgw_user_s3_key_modal_component__WEBPACK_IMPORTED_MODULE_5__.RgwUserS3KeyModalComponent : _rgw_user_swift_key_modal_rgw_user_swift_key_modal_component__WEBPACK_IMPORTED_MODULE_6__.RgwUserSwiftKeyModalComponent);
        switch (key.type) {
            case 'S3':
                modalRef.componentInstance.setViewing();
                modalRef.componentInstance.setValues(key.ref.user, key.ref.access_key, key.ref.secret_key);
                break;
            case 'Swift':
                modalRef.componentInstance.setValues(key.ref.user, key.ref.secret_key);
                break;
        }
    }
}
RgwUserDetailsComponent.ɵfac = function RgwUserDetailsComponent_Factory(t) { return new (t || RgwUserDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_shared_api_rgw_user_service__WEBPACK_IMPORTED_MODULE_1__.RgwUserService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__.ModalService)); };
RgwUserDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: RgwUserDetailsComponent, selectors: [["cd-rgw-user-details"]], viewQuery: function RgwUserDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.accessKeyTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.secretKeyTpl = _t.first);
    } }, inputs: { selection: "selection" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: function () { let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5028777105388019087$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS__3 = goog.getMsg("Details");
        i18n_2 = MSG_EXTERNAL_5028777105388019087$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS__3;
    }
    else {
        i18n_2 = "Details";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4363143805416924501$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS____5 = goog.getMsg("Tenant");
        i18n_4 = MSG_EXTERNAL_4363143805416924501$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS____5;
    }
    else {
        i18n_4 = "Tenant";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2128755808672960949$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS____7 = goog.getMsg("User ID");
        i18n_6 = MSG_EXTERNAL_2128755808672960949$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS____7;
    }
    else {
        i18n_6 = "User ID";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5248717555542428023$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS____9 = goog.getMsg("Username");
        i18n_8 = MSG_EXTERNAL_5248717555542428023$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS____9;
    }
    else {
        i18n_8 = "Username";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8301535046747035390$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS____11 = goog.getMsg("Full name");
        i18n_10 = MSG_EXTERNAL_8301535046747035390$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS____11;
    }
    else {
        i18n_10 = "Full name";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5851424994801012357$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS____13 = goog.getMsg("Suspended");
        i18n_12 = MSG_EXTERNAL_5851424994801012357$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS____13;
    }
    else {
        i18n_12 = "Suspended";
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_29832309535656200$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS____15 = goog.getMsg("System");
        i18n_14 = MSG_EXTERNAL_29832309535656200$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS____15;
    }
    else {
        i18n_14 = "System";
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_394399240244610442$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS____17 = goog.getMsg("Maximum buckets");
        i18n_16 = MSG_EXTERNAL_394399240244610442$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS____17;
    }
    else {
        i18n_16 = "Maximum buckets";
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3967269098753656610$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____19 = goog.getMsg("Email address");
        i18n_18 = MSG_EXTERNAL_3967269098753656610$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____19;
    }
    else {
        i18n_18 = "Email address";
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_456730418941209$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____21 = goog.getMsg("Subusers");
        i18n_20 = MSG_EXTERNAL_456730418941209$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____21;
    }
    else {
        i18n_20 = "Subusers";
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2680037700420002636$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____23 = goog.getMsg("Capabilities");
        i18n_22 = MSG_EXTERNAL_2680037700420002636$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____23;
    }
    else {
        i18n_22 = "Capabilities";
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1512746142227363718$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____25 = goog.getMsg("MFAs(Id)");
        i18n_24 = MSG_EXTERNAL_1512746142227363718$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____25;
    }
    else {
        i18n_24 = "MFAs(Id)";
    } let i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5261714758222747685$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____27 = goog.getMsg("User quota");
        i18n_26 = MSG_EXTERNAL_5261714758222747685$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____27;
    }
    else {
        i18n_26 = "User quota";
    } let i18n_28; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4816216590591222133$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____29 = goog.getMsg("Enabled");
        i18n_28 = MSG_EXTERNAL_4816216590591222133$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____29;
    }
    else {
        i18n_28 = "Enabled";
    } let i18n_30; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5921515272395118682$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____31 = goog.getMsg("Maximum size");
        i18n_30 = MSG_EXTERNAL_5921515272395118682$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____31;
    }
    else {
        i18n_30 = "Maximum size";
    } let i18n_32; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_868710308722667739$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____33 = goog.getMsg("Maximum objects");
        i18n_32 = MSG_EXTERNAL_868710308722667739$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____33;
    }
    else {
        i18n_32 = "Maximum objects";
    } let i18n_34; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_240806681889331244$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS______35 = goog.getMsg("Unlimited");
        i18n_34 = MSG_EXTERNAL_240806681889331244$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS______35;
    }
    else {
        i18n_34 = "Unlimited";
    } let i18n_36; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_240806681889331244$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS______37 = goog.getMsg("Unlimited");
        i18n_36 = MSG_EXTERNAL_240806681889331244$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS______37;
    }
    else {
        i18n_36 = "Unlimited";
    } let i18n_38; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3048195452916484333$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____39 = goog.getMsg("Bucket quota");
        i18n_38 = MSG_EXTERNAL_3048195452916484333$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____39;
    }
    else {
        i18n_38 = "Bucket quota";
    } let i18n_40; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4816216590591222133$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____41 = goog.getMsg("Enabled");
        i18n_40 = MSG_EXTERNAL_4816216590591222133$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____41;
    }
    else {
        i18n_40 = "Enabled";
    } let i18n_42; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5921515272395118682$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____43 = goog.getMsg("Maximum size");
        i18n_42 = MSG_EXTERNAL_5921515272395118682$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____43;
    }
    else {
        i18n_42 = "Maximum size";
    } let i18n_44; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_868710308722667739$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____45 = goog.getMsg("Maximum objects");
        i18n_44 = MSG_EXTERNAL_868710308722667739$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS_____45;
    }
    else {
        i18n_44 = "Maximum objects";
    } let i18n_46; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_240806681889331244$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS______47 = goog.getMsg("Unlimited");
        i18n_46 = MSG_EXTERNAL_240806681889331244$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS______47;
    }
    else {
        i18n_46 = "Unlimited";
    } let i18n_48; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_240806681889331244$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS______49 = goog.getMsg("Unlimited");
        i18n_48 = MSG_EXTERNAL_240806681889331244$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS______49;
    }
    else {
        i18n_48 = "Unlimited";
    } let i18n_50; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2850704758582178666$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS___51 = goog.getMsg("Keys");
        i18n_50 = MSG_EXTERNAL_2850704758582178666$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS___51;
    }
    else {
        i18n_50 = "Keys";
    } let i18n_52; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8461842260159597706$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS____53 = goog.getMsg("Show");
        i18n_52 = MSG_EXTERNAL_8461842260159597706$$SRC_APP_CEPH_RGW_RGW_USER_DETAILS_RGW_USER_DETAILS_COMPONENT_TS____53;
    }
    else {
        i18n_52 = "Show";
    } return [[4, "ngIf"], ["ngbNav", "", "cdStatefulTab", "rgw-user-details", 1, "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", "details"], ["ngbNavLink", ""], i18n_2, ["ngbNavContent", ""], ["ngbNavItem", "keys", 4, "ngIf"], [3, "ngbNavOutlet"], [1, "table", "table-striped", "table-bordered"], [1, "bold", "w-25"], i18n_4, [1, "w-75"], i18n_6, i18n_8, [1, "bold"], i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, [4, "ngFor", "ngForOf"], i18n_22, i18n_24, i18n_26, i18n_28, i18n_30, i18n_32, i18n_34, i18n_36, i18n_38, i18n_40, i18n_42, i18n_44, i18n_46, i18n_48, ["ngbNavItem", "keys"], i18n_50, ["columnMode", "flex", "selectionType", "multi", "forceIdentifier", "true", 3, "data", "columns", "updateSelection"], [1, "table-actions"], ["dropdown", "", 1, "btn-group"], ["type", "button", 1, "btn", "btn-accent", 3, "disabled", "click"], [3, "ngClass"], i18n_52]; }, template: function RgwUserDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, RgwUserDetailsComponent_ng_container_0_Template, 9, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.selection);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbNav, _shared_directives_stateful_tab_directive__WEBPACK_IMPORTED_MODULE_7__.StatefulTabDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbNavContent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_8__.TableComponent, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_9__.FormInputDisableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbNavOutlet], pipes: [_shared_pipes_boolean_text_pipe__WEBPACK_IMPORTED_MODULE_10__.BooleanTextPipe, _shared_pipes_map_pipe__WEBPACK_IMPORTED_MODULE_11__.MapPipe, _shared_pipes_join_pipe__WEBPACK_IMPORTED_MODULE_12__.JoinPipe, _shared_pipes_dimless_binary_pipe__WEBPACK_IMPORTED_MODULE_13__.DimlessBinaryPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZ3ctdXNlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 88279:
/*!*******************************************************************!*\
  !*** ./src/app/ceph/rgw/rgw-user-form/rgw-user-form.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwUserFormComponent": () => (/* binding */ RgwUserFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ 42720);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ 76461);
/* harmony import */ var _app_shared_api_rgw_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/rgw-user.service */ 59882);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 65862);
/* harmony import */ var _app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/enum/notification-type.enum */ 18001);
/* harmony import */ var _app_shared_forms_cd_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/forms/cd-form */ 26624);
/* harmony import */ var _app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-builder */ 62862);
/* harmony import */ var _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/forms/cd-validators */ 82723);
/* harmony import */ var _app_shared_services_formatter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/shared/services/formatter.service */ 28211);
/* harmony import */ var _app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/shared/services/modal.service */ 63285);
/* harmony import */ var _app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/shared/services/notification.service */ 97161);
/* harmony import */ var _models_rgw_user_capabilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/rgw-user-capabilities */ 57058);
/* harmony import */ var _rgw_user_capability_modal_rgw_user_capability_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../rgw-user-capability-modal/rgw-user-capability-modal.component */ 76953);
/* harmony import */ var _rgw_user_s3_key_modal_rgw_user_s3_key_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../rgw-user-s3-key-modal/rgw-user-s3-key-modal.component */ 51115);
/* harmony import */ var _rgw_user_subuser_modal_rgw_user_subuser_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../rgw-user-subuser-modal/rgw-user-subuser-modal.component */ 23050);
/* harmony import */ var _rgw_user_swift_key_modal_rgw_user_swift_key_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../rgw-user-swift-key-modal/rgw-user-swift-key-modal.component */ 84149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _shared_directives_form_loading_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/directives/form-loading.directive */ 63622);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/directives/autofocus.directive */ 82945);
/* harmony import */ var _shared_directives_password_button_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/directives/password-button.directive */ 4416);
/* harmony import */ var _shared_components_copy2clipboard_button_copy2clipboard_button_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/components/copy2clipboard-button/copy2clipboard-button.component */ 58039);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_directives_dimless_binary_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/directives/dimless-binary.directive */ 17932);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 30839);
/* harmony import */ var _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/pipes/upper-first.pipe */ 10545);
/* harmony import */ var ngx_pipe_function__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-pipe-function */ 47434);









































function RgwUserFormComponent_div_0_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_div_23_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_div_23_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 8)(1, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](4, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](5, RgwUserFormComponent_div_0_div_23_span_5_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](6, RgwUserFormComponent_div_0_div_23_span_6_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](2);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("readonly", ctx_r5.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r5.userForm.showError("tenant", _r1, "pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r5.userForm.showError("tenant", _r1, "notUnique"));
} }
function RgwUserFormComponent_div_0_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_div_49_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_div_49_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](1, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](3, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](4, RgwUserFormComponent_div_0_div_49_span_4_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](5, RgwUserFormComponent_div_0_div_49_span_5_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](2);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r10.userForm.showError("max_buckets", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r10.userForm.showError("max_buckets", _r1, "min"));
} }
function RgwUserFormComponent_div_0_fieldset_56_div_9_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_fieldset_56_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 8)(1, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "div", 11)(4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](5, "input", 73)(6, "button", 74)(7, "cd-copy-2-clipboard-button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](8, RgwUserFormComponent_div_0_fieldset_56_div_9_span_8_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](2);
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r27.userForm.showError("access_key", _r1, "required"));
} }
function RgwUserFormComponent_div_0_fieldset_56_div_10_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_fieldset_56_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 8)(1, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "div", 11)(4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](5, "input", 79)(6, "button", 80)(7, "cd-copy-2-clipboard-button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](8, RgwUserFormComponent_div_0_fieldset_56_div_10_span_8_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](2);
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r28.userForm.showError("secret_key", _r1, "required"));
} }
function RgwUserFormComponent_div_0_fieldset_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "fieldset")(1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "div", 8)(4, "div", 14)(5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](6, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](7, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](8, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](9, RgwUserFormComponent_div_0_fieldset_56_div_9_Template, 9, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](10, RgwUserFormComponent_div_0_fieldset_56_div_10_Template, 9, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx_r11.editing && !ctx_r11.userForm.getValue("generate_key"));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx_r11.editing && !ctx_r11.userForm.getValue("generate_key"));
} }
function RgwUserFormComponent_div_0_fieldset_57_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 93)(1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
} }
const _c74 = function (a0) { return [a0]; };
function RgwUserFormComponent_div_0_fieldset_57_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span")(1, "div", 72)(2, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](4, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](5, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](6, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](7, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](8, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function RgwUserFormComponent_div_0_fieldset_57_span_6_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r36); const i_r34 = restoredCtx.index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3); return ctx_r35.showSubuserModal(i_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](9, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](10, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function RgwUserFormComponent_div_0_fieldset_57_span_6_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r36); const i_r34 = restoredCtx.index; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3); return ctx_r37.deleteSubuser(i_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](11, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](12, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subuser_r33 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassMap"](ctx_r32.icons.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("value", subuser_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassMap"](ctx_r32.icons.share);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("value", "full-control" === subuser_r33.permissions ? "full" : subuser_r33.permissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](10, _c74, ctx_r32.icons.edit));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](12, _c74, ctx_r32.icons.destroy));
} }
function RgwUserFormComponent_div_0_fieldset_57_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "fieldset")(1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "div", 84)(4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](5, RgwUserFormComponent_div_0_fieldset_57_span_5_Template, 3, 0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](6, RgwUserFormComponent_div_0_fieldset_57_span_6_Template, 13, 14, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](7, "div", 87)(8, "div", 88)(9, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function RgwUserFormComponent_div_0_fieldset_57_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2); return ctx_r38.showSubuserModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](10, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](12, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](14, "upperFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](15, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r12.subusers.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngForOf", ctx_r12.subusers);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](9, _c74, ctx_r12.icons.add));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](13, 5, ctx_r12.actionLabels.CREATE))(_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](14, 7, ctx_r12.subuserLabel));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18nApply"](12);
} }
function RgwUserFormComponent_div_0_fieldset_58_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 93)(1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
} }
function RgwUserFormComponent_div_0_fieldset_58_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span")(1, "div", 72)(2, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](4, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](5, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function RgwUserFormComponent_div_0_fieldset_58_span_8_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r47); const i_r45 = restoredCtx.index; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3); return ctx_r46.showS3KeyModal(i_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](6, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](7, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function RgwUserFormComponent_div_0_fieldset_58_span_8_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r47); const i_r45 = restoredCtx.index; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3); return ctx_r48.deleteS3Key(i_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](8, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](9, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r44 = ctx.$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassMap"](ctx_r41.icons.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("value", key_r44.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](6, _c74, ctx_r41.icons.show));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](8, _c74, ctx_r41.icons.destroy));
} }
function RgwUserFormComponent_div_0_fieldset_58_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 93)(1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
} }
function RgwUserFormComponent_div_0_fieldset_58_span_24_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span")(1, "div", 72)(2, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](4, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](5, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function RgwUserFormComponent_div_0_fieldset_58_span_24_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r52); const i_r50 = restoredCtx.index; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3); return ctx_r51.showSwiftKeyModal(i_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](6, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](7, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r49 = ctx.$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassMap"](ctx_r43.icons.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("value", key_r49.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](5, _c74, ctx_r43.icons.show));
} }
function RgwUserFormComponent_div_0_fieldset_58_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "fieldset")(1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "div", 8)(4, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](5, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](7, RgwUserFormComponent_div_0_fieldset_58_span_7_Template, 3, 0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](8, RgwUserFormComponent_div_0_fieldset_58_span_8_Template, 10, 10, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](9, "div", 87)(10, "div", 88)(11, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function RgwUserFormComponent_div_0_fieldset_58_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2); return ctx_r53.showS3KeyModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](12, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](14, 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](15, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](16, "upperFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](17, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](18, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](19, "div", 8)(20, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](21, 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](22, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](23, RgwUserFormComponent_div_0_fieldset_58_span_23_Template, 3, 0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](24, RgwUserFormComponent_div_0_fieldset_58_span_24_Template, 8, 7, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r13.s3Keys.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngForOf", ctx_r13.s3Keys);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](11, _c74, ctx_r13.icons.add));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](15, 7, ctx_r13.actionLabels.CREATE))(_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](16, 9, ctx_r13.s3keyLabel));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18nApply"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r13.swiftKeys.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngForOf", ctx_r13.swiftKeys);
} }
function RgwUserFormComponent_div_0_fieldset_59_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 93)(1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
} }
function RgwUserFormComponent_div_0_fieldset_59_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span")(1, "div", 72)(2, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](4, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](5, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function RgwUserFormComponent_div_0_fieldset_59_span_6_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r60); const i_r58 = restoredCtx.index; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3); return ctx_r59.showCapabilityModal(i_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](6, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](7, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function RgwUserFormComponent_div_0_fieldset_59_span_6_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r60); const i_r58 = restoredCtx.index; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3); return ctx_r61.deleteCapability(i_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](8, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](9, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cap_r57 = ctx.$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassMap"](ctx_r56.icons.share);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate2"]("value", "", cap_r57.type, ":", cap_r57.perm, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](7, _c74, ctx_r56.icons.edit));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](9, _c74, ctx_r56.icons.destroy));
} }
function RgwUserFormComponent_div_0_fieldset_59_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "fieldset")(1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "div", 8)(4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](5, RgwUserFormComponent_div_0_fieldset_59_span_5_Template, 3, 0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](6, RgwUserFormComponent_div_0_fieldset_59_span_6_Template, 10, 11, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](7, "div", 87)(8, "div", 88)(9, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function RgwUserFormComponent_div_0_fieldset_59_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2); return ctx_r62.showCapabilityModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](10, "pipeFunction");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](11, "pipeFunction");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](12, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](14, 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](15, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](16, "upperFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](17, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r14.capabilities.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngForOf", ctx_r14.capabilities);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind2"](10, 7, ctx_r14.capabilities, ctx_r14.hasAllCapabilities))("disableTooltip", !_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind2"](11, 10, ctx_r14.capabilities, ctx_r14.hasAllCapabilities));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](17, _c74, ctx_r14.icons.add));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](15, 13, ctx_r14.actionLabels.ADD))(_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](16, 15, ctx_r14.capabilityLabel));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18nApply"](14);
} }
function RgwUserFormComponent_div_0_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 8)(1, "div", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](3, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](4, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](5, 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()()();
} }
function RgwUserFormComponent_div_0_div_70_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_div_70_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 8)(1, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](4, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](5, RgwUserFormComponent_div_0_div_70_span_5_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](6, RgwUserFormComponent_div_0_div_70_span_6_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](2);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r16.userForm.showError("user_quota_max_size", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r16.userForm.showError("user_quota_max_size", _r1, "quotaMaxSize"));
} }
function RgwUserFormComponent_div_0_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 8)(1, "div", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](3, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](4, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](5, 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()()();
} }
function RgwUserFormComponent_div_0_div_72_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_div_72_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 8)(1, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](4, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](5, RgwUserFormComponent_div_0_div_72_span_5_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](6, RgwUserFormComponent_div_0_div_72_span_6_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](2);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r18.userForm.showError("user_quota_max_objects", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r18.userForm.showError("user_quota_max_objects", _r1, "min"));
} }
function RgwUserFormComponent_div_0_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 8)(1, "div", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](3, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](4, "label", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](5, 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()()();
} }
function RgwUserFormComponent_div_0_div_83_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_div_83_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 8)(1, "label", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](4, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](5, RgwUserFormComponent_div_0_div_83_span_5_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](6, RgwUserFormComponent_div_0_div_83_span_6_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](2);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r20.userForm.showError("bucket_quota_max_size", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r20.userForm.showError("bucket_quota_max_size", _r1, "quotaMaxSize"));
} }
function RgwUserFormComponent_div_0_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 8)(1, "div", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](3, "input", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](4, "label", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](5, 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()()();
} }
function RgwUserFormComponent_div_0_div_85_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_div_85_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RgwUserFormComponent_div_0_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 8)(1, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](4, "input", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](5, RgwUserFormComponent_div_0_div_85_span_5_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](6, RgwUserFormComponent_div_0_div_85_span_6_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](2);
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r22.userForm.showError("bucket_quota_max_objects", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r22.userForm.showError("bucket_quota_max_objects", _r1, "min"));
} }
const _c137 = function (a0) { return { "required": a0 }; };
function RgwUserFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 1)(1, "form", 2, 3)(3, "div", 4)(4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](7, "upperFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](11, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](13, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](14, RgwUserFormComponent_div_0_span_14_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](15, RgwUserFormComponent_div_0_span_15_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](16, RgwUserFormComponent_div_0_span_16_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](17, "div", 8)(18, "div", 14)(19, "div", 15)(20, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function RgwUserFormComponent_div_0_Template_input_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](); return ctx_r72.updateFieldsWhenTenanted(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](21, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](22, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](23, RgwUserFormComponent_div_0_div_23_Template, 7, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](24, "div", 8)(25, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](26, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](27, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](28, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](29, RgwUserFormComponent_div_0_span_29_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](30, RgwUserFormComponent_div_0_span_30_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](31, "div", 8)(32, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](33, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](34, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](35, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](36, RgwUserFormComponent_div_0_span_36_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](37, RgwUserFormComponent_div_0_span_37_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](38, "div", 8)(39, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](40, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](41, "div", 11)(42, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("change", function RgwUserFormComponent_div_0_Template_select_change_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r73); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](); return ctx_r74.onMaxBucketsModeChange($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](43, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](44, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](45, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](46, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](47, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](48, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](49, RgwUserFormComponent_div_0_div_49_Template, 6, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](50, "div", 8)(51, "div", 14)(52, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](53, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](54, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](55, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](56, RgwUserFormComponent_div_0_fieldset_56_Template, 11, 2, "fieldset", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](57, RgwUserFormComponent_div_0_fieldset_57_Template, 16, 11, "fieldset", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](58, RgwUserFormComponent_div_0_fieldset_58_Template, 25, 13, "fieldset", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](59, RgwUserFormComponent_div_0_fieldset_59_Template, 18, 19, "fieldset", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](60, "fieldset")(61, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](62, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](63, "div", 8)(64, "div", 14)(65, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](66, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](67, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](68, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](69, RgwUserFormComponent_div_0_div_69_Template, 6, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](70, RgwUserFormComponent_div_0_div_70_Template, 7, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](71, RgwUserFormComponent_div_0_div_71_Template, 6, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](72, RgwUserFormComponent_div_0_div_72_Template, 7, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](73, "fieldset")(74, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](75, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](76, "div", 8)(77, "div", 14)(78, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](79, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](80, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](81, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](82, RgwUserFormComponent_div_0_div_82_Template, 6, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](83, RgwUserFormComponent_div_0_div_83_Template, 7, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](84, RgwUserFormComponent_div_0_div_84_Template, 6, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](85, RgwUserFormComponent_div_0_div_85_Template, 7, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](86, "div", 47)(87, "cd-form-button-panel", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("submitActionEvent", function RgwUserFormComponent_div_0_Template_cd_form_button_panel_submitActionEvent_87_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r73); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](); return ctx_r75.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](88, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](89, "upperFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("formGroup", ctx_r0.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](6, 30, ctx_r0.action))(_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](7, 32, ctx_r0.resource));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18nApply"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](38, _c137, !ctx_r0.editing));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("readonly", ctx_r0.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r0.userForm.showError("user_id", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r0.userForm.showError("user_id", _r1, "pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx_r0.userForm.getValue("show_tenant") && ctx_r0.userForm.showError("user_id", _r1, "notUnique"));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r0.userForm.getValue("show_tenant"));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](40, _c137, !ctx_r0.editing));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r0.userForm.showError("display_name", _r1, "pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r0.userForm.showError("display_name", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r0.userForm.showError("email", _r1, "email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r0.userForm.showError("email", _r1, "notUnique"));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", 1 == ctx_r0.userForm.get("max_buckets_mode").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx_r0.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r0.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r0.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r0.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r0.userForm.controls.user_quota_enabled.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r0.userForm.controls.user_quota_enabled.value && !ctx_r0.userForm.getValue("user_quota_max_size_unlimited"));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r0.userForm.controls.user_quota_enabled.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r0.userForm.controls.user_quota_enabled.value && !ctx_r0.userForm.getValue("user_quota_max_objects_unlimited"));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r0.userForm.controls.bucket_quota_enabled.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r0.userForm.controls.bucket_quota_enabled.value && !ctx_r0.userForm.getValue("bucket_quota_max_size_unlimited"));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r0.userForm.controls.bucket_quota_enabled.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r0.userForm.controls.bucket_quota_enabled.value && !ctx_r0.userForm.getValue("bucket_quota_max_objects_unlimited"));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("form", ctx_r0.userForm)("submitText", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](88, 34, ctx_r0.action) + " " + _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](89, 36, ctx_r0.resource));
} }
class RgwUserFormComponent extends _app_shared_forms_cd_form__WEBPACK_IMPORTED_MODULE_5__.CdForm {
    constructor(formBuilder, route, router, rgwUserService, modalService, notificationService, actionLabels) {
        super();
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.rgwUserService = rgwUserService;
        this.modalService = modalService;
        this.notificationService = notificationService;
        this.actionLabels = actionLabels;
        this.editing = false;
        this.submitObservables = [];
        this.icons = _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_3__.Icons;
        this.subusers = [];
        this.s3Keys = [];
        this.swiftKeys = [];
        this.capabilities = [];
        this.showTenant = false;
        this.previousTenant = null;
        this.resource = "user";
        this.subuserLabel = "subuser";
        this.s3keyLabel = "S3 Key";
        this.capabilityLabel = "capability";
        this.editing = this.router.url.startsWith(`/rgw/user/${_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__.URLVerbs.EDIT}`);
        this.action = this.editing ? this.actionLabels.EDIT : this.actionLabels.CREATE;
        this.createForm();
    }
    createForm() {
        this.userForm = this.formBuilder.group({
            // General
            user_id: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_28__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.Validators.pattern(/^[a-zA-Z0-9!@#%^&*()_-]+$/)],
                this.editing
                    ? []
                    : [
                        _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_7__.CdValidators.unique(this.rgwUserService.exists, this.rgwUserService, () => this.userForm.getValue('tenant'))
                    ]
            ],
            show_tenant: [this.editing],
            tenant: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_28__.Validators.pattern(/^[a-zA-Z0-9!@#%^&*()_-]+$/)],
                this.editing
                    ? []
                    : [
                        _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_7__.CdValidators.unique(this.rgwUserService.exists, this.rgwUserService, () => this.userForm.getValue('user_id'), true)
                    ]
            ],
            display_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_28__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.Validators.pattern(/^[a-zA-Z0-9!@#%^&*()_ -]+$/)]],
            email: [
                null,
                [_app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_7__.CdValidators.email],
                [_app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_7__.CdValidators.unique(this.rgwUserService.emailExists, this.rgwUserService)]
            ],
            max_buckets_mode: [1],
            max_buckets: [
                1000,
                [_app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_7__.CdValidators.requiredIf({ max_buckets_mode: '1' }), _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_7__.CdValidators.number(false)]
            ],
            suspended: [false],
            // S3 key
            generate_key: [true],
            access_key: [null, [_app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_7__.CdValidators.requiredIf({ generate_key: false })]],
            secret_key: [null, [_app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_7__.CdValidators.requiredIf({ generate_key: false })]],
            // User quota
            user_quota_enabled: [false],
            user_quota_max_size_unlimited: [true],
            user_quota_max_size: [
                null,
                [
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_7__.CdValidators.composeIf({
                        user_quota_enabled: true,
                        user_quota_max_size_unlimited: false
                    }, [_angular_forms__WEBPACK_IMPORTED_MODULE_28__.Validators.required, this.quotaMaxSizeValidator])
                ]
            ],
            user_quota_max_objects_unlimited: [true],
            user_quota_max_objects: [
                null,
                [
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_7__.CdValidators.requiredIf({
                        user_quota_enabled: true,
                        user_quota_max_objects_unlimited: false
                    })
                ]
            ],
            // Bucket quota
            bucket_quota_enabled: [false],
            bucket_quota_max_size_unlimited: [true],
            bucket_quota_max_size: [
                null,
                [
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_7__.CdValidators.composeIf({
                        bucket_quota_enabled: true,
                        bucket_quota_max_size_unlimited: false
                    }, [_angular_forms__WEBPACK_IMPORTED_MODULE_28__.Validators.required, this.quotaMaxSizeValidator])
                ]
            ],
            bucket_quota_max_objects_unlimited: [true],
            bucket_quota_max_objects: [
                null,
                [
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_7__.CdValidators.requiredIf({
                        bucket_quota_enabled: true,
                        bucket_quota_max_objects_unlimited: false
                    })
                ]
            ]
        });
    }
    ngOnInit() {
        // Process route parameters.
        this.route.params.subscribe((params) => {
            if (!params.hasOwnProperty('uid')) {
                this.loadingReady();
                return;
            }
            const uid = decodeURIComponent(params.uid);
            // Load the user and quota information.
            const observables = [];
            observables.push(this.rgwUserService.get(uid));
            observables.push(this.rgwUserService.getQuota(uid));
            (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.forkJoin)(observables).subscribe((resp) => {
                // Get the default values.
                const defaults = lodash__WEBPACK_IMPORTED_MODULE_0___default().clone(this.userForm.value);
                // Extract the values displayed in the form.
                let value = lodash__WEBPACK_IMPORTED_MODULE_0___default().pick(resp[0], lodash__WEBPACK_IMPORTED_MODULE_0___default().keys(this.userForm.value));
                // Map the max. buckets values.
                switch (value['max_buckets']) {
                    case -1:
                        value['max_buckets_mode'] = -1;
                        value['max_buckets'] = '';
                        break;
                    case 0:
                        value['max_buckets_mode'] = 0;
                        value['max_buckets'] = '';
                        break;
                    default:
                        value['max_buckets_mode'] = 1;
                        break;
                }
                // Map the quota values.
                ['user', 'bucket'].forEach((type) => {
                    const quota = resp[1][type + '_quota'];
                    value[type + '_quota_enabled'] = quota.enabled;
                    if (quota.max_size < 0) {
                        value[type + '_quota_max_size_unlimited'] = true;
                        value[type + '_quota_max_size'] = null;
                    }
                    else {
                        value[type + '_quota_max_size_unlimited'] = false;
                        value[type + '_quota_max_size'] = `${quota.max_size} B`;
                    }
                    if (quota.max_objects < 0) {
                        value[type + '_quota_max_objects_unlimited'] = true;
                        value[type + '_quota_max_objects'] = null;
                    }
                    else {
                        value[type + '_quota_max_objects_unlimited'] = false;
                        value[type + '_quota_max_objects'] = quota.max_objects;
                    }
                });
                // Merge with default values.
                value = lodash__WEBPACK_IMPORTED_MODULE_0___default().merge(defaults, value);
                // Update the form.
                this.userForm.setValue(value);
                // Get the sub users.
                this.subusers = resp[0].subusers;
                // Get the keys.
                this.s3Keys = resp[0].keys;
                this.swiftKeys = resp[0].swift_keys;
                // Process the capabilities.
                const mapPerm = { 'read, write': '*' };
                resp[0].caps.forEach((cap) => {
                    if (cap.perm in mapPerm) {
                        cap.perm = mapPerm[cap.perm];
                    }
                });
                this.capabilities = resp[0].caps;
                this.loadingReady();
            }, () => {
                this.loadingError();
            });
        });
    }
    goToListView() {
        this.router.navigate(['/rgw/user']);
    }
    onSubmit() {
        let notificationTitle;
        // Exit immediately if the form isn't dirty.
        if (this.userForm.pristine) {
            this.goToListView();
            return;
        }
        const uid = this.getUID();
        if (this.editing) {
            // Edit
            if (this._isGeneralDirty()) {
                const args = this._getUpdateArgs();
                this.submitObservables.push(this.rgwUserService.update(uid, args));
            }
            notificationTitle = "Updated Object Gateway user '" + uid + "'";
        }
        else {
            // Add
            const args = this._getCreateArgs();
            this.submitObservables.push(this.rgwUserService.create(args));
            notificationTitle = "Created Object Gateway user '" + uid + "'";
        }
        // Check if user quota has been modified.
        if (this._isUserQuotaDirty()) {
            const userQuotaArgs = this._getUserQuotaArgs();
            this.submitObservables.push(this.rgwUserService.updateQuota(uid, userQuotaArgs));
        }
        // Check if bucket quota has been modified.
        if (this._isBucketQuotaDirty()) {
            const bucketQuotaArgs = this._getBucketQuotaArgs();
            this.submitObservables.push(this.rgwUserService.updateQuota(uid, bucketQuotaArgs));
        }
        // Finally execute all observables one by one in serial.
        (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.concat)(...this.submitObservables).subscribe({
            error: () => {
                // Reset the 'Submit' button.
                this.userForm.setErrors({ cdSubmitButton: true });
            },
            complete: () => {
                this.notificationService.show(_app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_4__.NotificationType.success, notificationTitle);
                this.goToListView();
            }
        });
    }
    updateFieldsWhenTenanted() {
        this.showTenant = this.userForm.getValue('show_tenant');
        if (!this.showTenant) {
            this.userForm.get('user_id').markAsUntouched();
            this.userForm.get('tenant').patchValue(this.previousTenant);
        }
        else {
            this.userForm.get('user_id').markAsTouched();
            this.previousTenant = this.userForm.get('tenant').value;
            this.userForm.get('tenant').patchValue(null);
        }
    }
    getUID() {
        var _a;
        let uid = this.userForm.getValue('user_id');
        const tenant = (_a = this.userForm) === null || _a === void 0 ? void 0 : _a.getValue('tenant');
        if (tenant && tenant.length > 0) {
            uid = `${this.userForm.getValue('tenant')}$${uid}`;
        }
        return uid;
    }
    /**
     * Validate the quota maximum size, e.g. 1096, 1K, 30M or 1.9MiB.
     */
    quotaMaxSizeValidator(control) {
        if ((0,_app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_7__.isEmptyInputValue)(control.value)) {
            return null;
        }
        const m = RegExp('^(\\d+(\\.\\d+)?)\\s*(B|K(B|iB)?|M(B|iB)?|G(B|iB)?|T(B|iB)?)?$', 'i').exec(control.value);
        if (m === null) {
            return { quotaMaxSize: true };
        }
        const bytes = new _app_shared_services_formatter_service__WEBPACK_IMPORTED_MODULE_8__.FormatterService().toBytes(control.value);
        return bytes < 1024 ? { quotaMaxSize: true } : null;
    }
    /**
     * Add/Update a subuser.
     */
    setSubuser(subuser, index) {
        const mapPermissions = {
            'full-control': 'full',
            'read-write': 'readwrite'
        };
        const uid = this.getUID();
        const args = {
            subuser: subuser.id,
            access: subuser.permissions in mapPermissions
                ? mapPermissions[subuser.permissions]
                : subuser.permissions,
            key_type: 'swift',
            secret_key: subuser.secret_key,
            generate_secret: subuser.generate_secret ? 'true' : 'false'
        };
        this.submitObservables.push(this.rgwUserService.createSubuser(uid, args));
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isNumber(index)) {
            // Modify
            // Create an observable to modify the subuser when the form is submitted.
            this.subusers[index] = subuser;
        }
        else {
            // Add
            // Create an observable to add the subuser when the form is submitted.
            this.subusers.push(subuser);
            // Add a Swift key. If the secret key is auto-generated, then visualize
            // this to the user by displaying a notification instead of the key.
            this.swiftKeys.push({
                user: subuser.id,
                secret_key: subuser.generate_secret ? 'Apply your changes first...' : subuser.secret_key
            });
        }
        // Mark the form as dirty to be able to submit it.
        this.userForm.markAsDirty();
    }
    /**
     * Delete a subuser.
     * @param {number} index The subuser to delete.
     */
    deleteSubuser(index) {
        const subuser = this.subusers[index];
        // Create an observable to delete the subuser when the form is submitted.
        this.submitObservables.push(this.rgwUserService.deleteSubuser(this.getUID(), subuser.id));
        // Remove the associated S3 keys.
        this.s3Keys = this.s3Keys.filter((key) => {
            return key.user !== subuser.id;
        });
        // Remove the associated Swift keys.
        this.swiftKeys = this.swiftKeys.filter((key) => {
            return key.user !== subuser.id;
        });
        // Remove the subuser to update the UI.
        this.subusers.splice(index, 1);
        // Mark the form as dirty to be able to submit it.
        this.userForm.markAsDirty();
    }
    /**
     * Add/Update a capability.
     */
    setCapability(cap, index) {
        const uid = this.getUID();
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isNumber(index)) {
            // Modify
            const oldCap = this.capabilities[index];
            // Note, the RadosGW Admin OPS API does not support the modification of
            // user capabilities. Because of that it is necessary to delete it and
            // then to re-add the capability with its new value/permission.
            this.submitObservables.push(this.rgwUserService.deleteCapability(uid, oldCap.type, oldCap.perm));
            this.submitObservables.push(this.rgwUserService.addCapability(uid, cap.type, cap.perm));
            this.capabilities[index] = cap;
        }
        else {
            // Add
            // Create an observable to add the capability when the form is submitted.
            this.submitObservables.push(this.rgwUserService.addCapability(uid, cap.type, cap.perm));
            this.capabilities = [...this.capabilities, cap]; // Notify Angular CD
        }
        // Mark the form as dirty to be able to submit it.
        this.userForm.markAsDirty();
    }
    /**
     * Delete the given capability:
     * - Delete it from the local array to update the UI
     * - Create an observable that will be executed on form submit
     * @param {number} index The capability to delete.
     */
    deleteCapability(index) {
        const cap = this.capabilities[index];
        // Create an observable to delete the capability when the form is submitted.
        this.submitObservables.push(this.rgwUserService.deleteCapability(this.getUID(), cap.type, cap.perm));
        // Remove the capability to update the UI.
        this.capabilities.splice(index, 1);
        this.capabilities = [...this.capabilities]; // Notify Angular CD
        // Mark the form as dirty to be able to submit it.
        this.userForm.markAsDirty();
    }
    hasAllCapabilities(capabilities) {
        return !lodash__WEBPACK_IMPORTED_MODULE_0___default().difference(_models_rgw_user_capabilities__WEBPACK_IMPORTED_MODULE_11__.RgwUserCapabilities.getAll(), lodash__WEBPACK_IMPORTED_MODULE_0___default().map(capabilities, 'type')).length;
    }
    /**
     * Add/Update a S3 key.
     */
    setS3Key(key, index) {
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isNumber(index)) {
            // Modify
            // Nothing to do here at the moment.
        }
        else {
            // Add
            // Split the key's user name into its user and subuser parts.
            const userMatches = key.user.match(/([^:]+)(:(.+))?/);
            // Create an observable to add the S3 key when the form is submitted.
            const uid = userMatches[1];
            const args = {
                subuser: userMatches[2] ? userMatches[3] : '',
                generate_key: key.generate_key ? 'true' : 'false'
            };
            if (args['generate_key'] === 'false') {
                if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isNil(key.access_key)) {
                    args['access_key'] = key.access_key;
                }
                if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isNil(key.secret_key)) {
                    args['secret_key'] = key.secret_key;
                }
            }
            this.submitObservables.push(this.rgwUserService.addS3Key(uid, args));
            // If the access and the secret key are auto-generated, then visualize
            // this to the user by displaying a notification instead of the key.
            this.s3Keys.push({
                user: key.user,
                access_key: key.generate_key ? 'Apply your changes first...' : key.access_key,
                secret_key: key.generate_key ? 'Apply your changes first...' : key.secret_key
            });
        }
        // Mark the form as dirty to be able to submit it.
        this.userForm.markAsDirty();
    }
    /**
     * Delete a S3 key.
     * @param {number} index The S3 key to delete.
     */
    deleteS3Key(index) {
        const key = this.s3Keys[index];
        // Create an observable to delete the S3 key when the form is submitted.
        this.submitObservables.push(this.rgwUserService.deleteS3Key(this.getUID(), key.access_key));
        // Remove the S3 key to update the UI.
        this.s3Keys.splice(index, 1);
        // Mark the form as dirty to be able to submit it.
        this.userForm.markAsDirty();
    }
    /**
     * Show the specified subuser in a modal dialog.
     * @param {number | undefined} index The subuser to show.
     */
    showSubuserModal(index) {
        const uid = this.getUID();
        const modalRef = this.modalService.show(_rgw_user_subuser_modal_rgw_user_subuser_modal_component__WEBPACK_IMPORTED_MODULE_14__.RgwUserSubuserModalComponent);
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isNumber(index)) {
            // Edit
            const subuser = this.subusers[index];
            modalRef.componentInstance.setEditing();
            modalRef.componentInstance.setValues(uid, subuser.id, subuser.permissions);
        }
        else {
            // Add
            modalRef.componentInstance.setEditing(false);
            modalRef.componentInstance.setValues(uid);
            modalRef.componentInstance.setSubusers(this.subusers);
        }
        modalRef.componentInstance.submitAction.subscribe((subuser) => {
            this.setSubuser(subuser, index);
        });
    }
    /**
     * Show the specified S3 key in a modal dialog.
     * @param {number | undefined} index The S3 key to show.
     */
    showS3KeyModal(index) {
        const modalRef = this.modalService.show(_rgw_user_s3_key_modal_rgw_user_s3_key_modal_component__WEBPACK_IMPORTED_MODULE_13__.RgwUserS3KeyModalComponent);
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isNumber(index)) {
            // View
            const key = this.s3Keys[index];
            modalRef.componentInstance.setViewing();
            modalRef.componentInstance.setValues(key.user, key.access_key, key.secret_key);
        }
        else {
            // Add
            const candidates = this._getS3KeyUserCandidates();
            modalRef.componentInstance.setViewing(false);
            modalRef.componentInstance.setUserCandidates(candidates);
            modalRef.componentInstance.submitAction.subscribe((key) => {
                this.setS3Key(key);
            });
        }
    }
    /**
     * Show the specified Swift key in a modal dialog.
     * @param {number} index The Swift key to show.
     */
    showSwiftKeyModal(index) {
        const modalRef = this.modalService.show(_rgw_user_swift_key_modal_rgw_user_swift_key_modal_component__WEBPACK_IMPORTED_MODULE_15__.RgwUserSwiftKeyModalComponent);
        const key = this.swiftKeys[index];
        modalRef.componentInstance.setValues(key.user, key.secret_key);
    }
    /**
     * Show the specified capability in a modal dialog.
     * @param {number | undefined} index The S3 key to show.
     */
    showCapabilityModal(index) {
        const modalRef = this.modalService.show(_rgw_user_capability_modal_rgw_user_capability_modal_component__WEBPACK_IMPORTED_MODULE_12__.RgwUserCapabilityModalComponent);
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isNumber(index)) {
            // Edit
            const cap = this.capabilities[index];
            modalRef.componentInstance.setEditing();
            modalRef.componentInstance.setValues(cap.type, cap.perm);
        }
        else {
            // Add
            modalRef.componentInstance.setEditing(false);
            modalRef.componentInstance.setCapabilities(this.capabilities);
        }
        modalRef.componentInstance.submitAction.subscribe((cap) => {
            this.setCapability(cap, index);
        });
    }
    /**
     * Check if the general user settings (display name, email, ...) have been modified.
     * @return {Boolean} Returns TRUE if the general user settings have been modified.
     */
    _isGeneralDirty() {
        return ['display_name', 'email', 'max_buckets_mode', 'max_buckets', 'suspended'].some((path) => {
            return this.userForm.get(path).dirty;
        });
    }
    /**
     * Check if the user quota has been modified.
     * @return {Boolean} Returns TRUE if the user quota has been modified.
     */
    _isUserQuotaDirty() {
        return [
            'user_quota_enabled',
            'user_quota_max_size_unlimited',
            'user_quota_max_size',
            'user_quota_max_objects_unlimited',
            'user_quota_max_objects'
        ].some((path) => {
            return this.userForm.get(path).dirty;
        });
    }
    /**
     * Check if the bucket quota has been modified.
     * @return {Boolean} Returns TRUE if the bucket quota has been modified.
     */
    _isBucketQuotaDirty() {
        return [
            'bucket_quota_enabled',
            'bucket_quota_max_size_unlimited',
            'bucket_quota_max_size',
            'bucket_quota_max_objects_unlimited',
            'bucket_quota_max_objects'
        ].some((path) => {
            return this.userForm.get(path).dirty;
        });
    }
    /**
     * Helper function to get the arguments of the API request when a new
     * user is created.
     */
    _getCreateArgs() {
        const result = {
            uid: this.getUID(),
            display_name: this.userForm.getValue('display_name'),
            suspended: this.userForm.getValue('suspended'),
            email: '',
            max_buckets: this.userForm.getValue('max_buckets'),
            generate_key: this.userForm.getValue('generate_key'),
            access_key: '',
            secret_key: ''
        };
        const email = this.userForm.getValue('email');
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isString(email) && email.length > 0) {
            lodash__WEBPACK_IMPORTED_MODULE_0___default().merge(result, { email: email });
        }
        const generateKey = this.userForm.getValue('generate_key');
        if (!generateKey) {
            lodash__WEBPACK_IMPORTED_MODULE_0___default().merge(result, {
                generate_key: false,
                access_key: this.userForm.getValue('access_key'),
                secret_key: this.userForm.getValue('secret_key')
            });
        }
        const maxBucketsMode = parseInt(this.userForm.getValue('max_buckets_mode'), 10);
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().includes([-1, 0], maxBucketsMode)) {
            // -1 => Disable bucket creation.
            //  0 => Unlimited bucket creation.
            lodash__WEBPACK_IMPORTED_MODULE_0___default().merge(result, { max_buckets: maxBucketsMode });
        }
        return result;
    }
    /**
     * Helper function to get the arguments for the API request when the user
     * configuration has been modified.
     */
    _getUpdateArgs() {
        const result = {};
        const keys = ['display_name', 'email', 'max_buckets', 'suspended'];
        for (const key of keys) {
            result[key] = this.userForm.getValue(key);
        }
        const maxBucketsMode = parseInt(this.userForm.getValue('max_buckets_mode'), 10);
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().includes([-1, 0], maxBucketsMode)) {
            // -1 => Disable bucket creation.
            //  0 => Unlimited bucket creation.
            result['max_buckets'] = maxBucketsMode;
        }
        return result;
    }
    /**
     * Helper function to get the arguments for the API request when the user
     * quota configuration has been modified.
     */
    _getUserQuotaArgs() {
        const result = {
            quota_type: 'user',
            enabled: this.userForm.getValue('user_quota_enabled'),
            max_size_kb: -1,
            max_objects: -1
        };
        if (!this.userForm.getValue('user_quota_max_size_unlimited')) {
            // Convert the given value to bytes.
            const bytes = new _app_shared_services_formatter_service__WEBPACK_IMPORTED_MODULE_8__.FormatterService().toBytes(this.userForm.getValue('user_quota_max_size'));
            // Finally convert the value to KiB.
            result['max_size_kb'] = (bytes / 1024).toFixed(0);
        }
        if (!this.userForm.getValue('user_quota_max_objects_unlimited')) {
            result['max_objects'] = this.userForm.getValue('user_quota_max_objects');
        }
        return result;
    }
    /**
     * Helper function to get the arguments for the API request when the bucket
     * quota configuration has been modified.
     */
    _getBucketQuotaArgs() {
        const result = {
            quota_type: 'bucket',
            enabled: this.userForm.getValue('bucket_quota_enabled'),
            max_size_kb: -1,
            max_objects: -1
        };
        if (!this.userForm.getValue('bucket_quota_max_size_unlimited')) {
            // Convert the given value to bytes.
            const bytes = new _app_shared_services_formatter_service__WEBPACK_IMPORTED_MODULE_8__.FormatterService().toBytes(this.userForm.getValue('bucket_quota_max_size'));
            // Finally convert the value to KiB.
            result['max_size_kb'] = (bytes / 1024).toFixed(0);
        }
        if (!this.userForm.getValue('bucket_quota_max_objects_unlimited')) {
            result['max_objects'] = this.userForm.getValue('bucket_quota_max_objects');
        }
        return result;
    }
    /**
     * Helper method to get the user candidates for S3 keys.
     * @returns {Array} Returns a list of user identifiers.
     */
    _getS3KeyUserCandidates() {
        let result = [];
        // Add the current user id.
        const uid = this.getUID();
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isString(uid) && !lodash__WEBPACK_IMPORTED_MODULE_0___default().isEmpty(uid)) {
            result.push(uid);
        }
        // Append the subusers.
        this.subusers.forEach((subUser) => {
            result.push(subUser.id);
        });
        // Note that it's possible to create multiple S3 key pairs for a user,
        // thus we append already configured users, too.
        this.s3Keys.forEach((key) => {
            result.push(key.user);
        });
        result = lodash__WEBPACK_IMPORTED_MODULE_0___default().uniq(result);
        return result;
    }
    onMaxBucketsModeChange(mode) {
        if (mode === '1') {
            // If 'Custom' mode is selected, then ensure that the form field
            // 'Max. buckets' contains a valid value. Set it to default if
            // necessary.
            if (!this.userForm.get('max_buckets').valid) {
                this.userForm.patchValue({
                    max_buckets: 1000
                });
            }
        }
    }
}
RgwUserFormComponent.ɵfac = function RgwUserFormComponent_Factory(t) { return new (t || RgwUserFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_6__.CdFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_31__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_31__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_api_rgw_user_service__WEBPACK_IMPORTED_MODULE_1__.RgwUserService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_10__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__.ActionLabelsI18n)); };
RgwUserFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineComponent"]({ type: RgwUserFormComponent, selectors: [["cd-rgw-user-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc form title
         */
        const MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__1 = goog.getMsg("{$interpolation} {$interpolation_1}", { "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
        i18n_0 = MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__1;
    }
    else {
        i18n_0 = "" + "\uFFFD0\uFFFD" + " " + "\uFFFD1\uFFFD" + "";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2128755808672960949$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__3 = goog.getMsg("User ID");
        i18n_2 = MSG_EXTERNAL_2128755808672960949$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__3;
    }
    else {
        i18n_2 = "User ID";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1017586902408131806$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__5 = goog.getMsg("Show Tenant");
        i18n_4 = MSG_EXTERNAL_1017586902408131806$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__5;
    }
    else {
        i18n_4 = "Show Tenant";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8301535046747035390$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__7 = goog.getMsg("Full name");
        i18n_6 = MSG_EXTERNAL_8301535046747035390$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__7;
    }
    else {
        i18n_6 = "Full name";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3967269098753656610$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__9 = goog.getMsg("Email address");
        i18n_8 = MSG_EXTERNAL_3967269098753656610$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__9;
    }
    else {
        i18n_8 = "Email address";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4208300173682032371$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__11 = goog.getMsg("Max. buckets");
        i18n_10 = MSG_EXTERNAL_4208300173682032371$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__11;
    }
    else {
        i18n_10 = "Max. buckets";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5769292297914455214$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__13 = goog.getMsg("Disabled");
        i18n_12 = MSG_EXTERNAL_5769292297914455214$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__13;
    }
    else {
        i18n_12 = "Disabled";
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_240806681889331244$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__15 = goog.getMsg("Unlimited");
        i18n_14 = MSG_EXTERNAL_240806681889331244$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__15;
    }
    else {
        i18n_14 = "Unlimited";
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7590013429208346303$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__17 = goog.getMsg("Custom");
        i18n_16 = MSG_EXTERNAL_7590013429208346303$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__17;
    }
    else {
        i18n_16 = "Custom";
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5851424994801012357$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__19 = goog.getMsg("Suspended");
        i18n_18 = MSG_EXTERNAL_5851424994801012357$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__19;
    }
    else {
        i18n_18 = "Suspended";
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5261714758222747685$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__21 = goog.getMsg("User quota");
        i18n_20 = MSG_EXTERNAL_5261714758222747685$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__21;
    }
    else {
        i18n_20 = "User quota";
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4816216590591222133$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__23 = goog.getMsg("Enabled");
        i18n_22 = MSG_EXTERNAL_4816216590591222133$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__23;
    }
    else {
        i18n_22 = "Enabled";
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3048195452916484333$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__25 = goog.getMsg("Bucket quota");
        i18n_24 = MSG_EXTERNAL_3048195452916484333$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__25;
    }
    else {
        i18n_24 = "Bucket quota";
    } let i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4816216590591222133$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__27 = goog.getMsg("Enabled");
        i18n_26 = MSG_EXTERNAL_4816216590591222133$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS__27;
    }
    else {
        i18n_26 = "Enabled";
    } let i18n_28; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___29 = goog.getMsg("This field is required.");
        i18n_28 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___29;
    }
    else {
        i18n_28 = "This field is required.";
    } let i18n_30; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6799055650932155327$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___31 = goog.getMsg("The value is not valid.");
        i18n_30 = MSG_EXTERNAL_6799055650932155327$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___31;
    }
    else {
        i18n_30 = "The value is not valid.";
    } let i18n_32; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2703772363194936790$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___33 = goog.getMsg("The chosen user ID is already in use.");
        i18n_32 = MSG_EXTERNAL_2703772363194936790$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___33;
    }
    else {
        i18n_32 = "The chosen user ID is already in use.";
    } let i18n_34; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4363143805416924501$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___35 = goog.getMsg("Tenant");
        i18n_34 = MSG_EXTERNAL_4363143805416924501$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___35;
    }
    else {
        i18n_34 = "Tenant";
    } let i18n_36; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6799055650932155327$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____37 = goog.getMsg("The value is not valid.");
        i18n_36 = MSG_EXTERNAL_6799055650932155327$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____37;
    }
    else {
        i18n_36 = "The value is not valid.";
    } let i18n_38; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4920776341181535287$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____39 = goog.getMsg("The chosen user ID exists in this tenant.");
        i18n_38 = MSG_EXTERNAL_4920776341181535287$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____39;
    }
    else {
        i18n_38 = "The chosen user ID exists in this tenant.";
    } let i18n_40; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6799055650932155327$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___41 = goog.getMsg("The value is not valid.");
        i18n_40 = MSG_EXTERNAL_6799055650932155327$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___41;
    }
    else {
        i18n_40 = "The value is not valid.";
    } let i18n_42; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___43 = goog.getMsg("This field is required.");
        i18n_42 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___43;
    }
    else {
        i18n_42 = "This field is required.";
    } let i18n_44; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6523332409956309908$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___45 = goog.getMsg("This is not a valid email address.");
        i18n_44 = MSG_EXTERNAL_6523332409956309908$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___45;
    }
    else {
        i18n_44 = "This is not a valid email address.";
    } let i18n_46; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2810417837351415641$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___47 = goog.getMsg("The chosen email address is already in use.");
        i18n_46 = MSG_EXTERNAL_2810417837351415641$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___47;
    }
    else {
        i18n_46 = "The chosen email address is already in use.";
    } let i18n_48; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____49 = goog.getMsg("This field is required.");
        i18n_48 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____49;
    }
    else {
        i18n_48 = "This field is required.";
    } let i18n_50; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6745070507286309866$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____51 = goog.getMsg("The entered value must be >= 1.");
        i18n_50 = MSG_EXTERNAL_6745070507286309866$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____51;
    }
    else {
        i18n_50 = "The entered value must be >= 1.";
    } let i18n_52; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7193083486810209470$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___53 = goog.getMsg("S3 key");
        i18n_52 = MSG_EXTERNAL_7193083486810209470$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___53;
    }
    else {
        i18n_52 = "S3 key";
    } let i18n_54; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1254954206625106737$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___55 = goog.getMsg("Auto-generate key");
        i18n_54 = MSG_EXTERNAL_1254954206625106737$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___55;
    }
    else {
        i18n_54 = "Auto-generate key";
    } let i18n_56; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1956226327175747295$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____57 = goog.getMsg("Access key");
        i18n_56 = MSG_EXTERNAL_1956226327175747295$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____57;
    }
    else {
        i18n_56 = "Access key";
    } let i18n_58; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS_____59 = goog.getMsg("This field is required.");
        i18n_58 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS_____59;
    }
    else {
        i18n_58 = "This field is required.";
    } let i18n_60; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5500685598594641035$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____61 = goog.getMsg("Secret key");
        i18n_60 = MSG_EXTERNAL_5500685598594641035$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____61;
    }
    else {
        i18n_60 = "Secret key";
    } let i18n_62; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS_____63 = goog.getMsg("This field is required.");
        i18n_62 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS_____63;
    }
    else {
        i18n_62 = "This field is required.";
    } let i18n_64; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_456730418941209$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___65 = goog.getMsg("Subusers");
        i18n_64 = MSG_EXTERNAL_456730418941209$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___65;
    }
    else {
        i18n_64 = "Subusers";
    } let i18n_66; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1583566138208458440$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___67 = goog.getMsg("{$interpolation} {$interpolation_1}", { "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
        i18n_66 = MSG_EXTERNAL_1583566138208458440$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___67;
    }
    else {
        i18n_66 = "" + "\uFFFD0\uFFFD" + " " + "\uFFFD1\uFFFD" + "";
    } let i18n_68; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_72170783287713585$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____69 = goog.getMsg("There are no subusers.");
        i18n_68 = MSG_EXTERNAL_72170783287713585$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____69;
    }
    else {
        i18n_68 = "There are no subusers.";
    } let i18n_70; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7585826646011739428$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____71 = goog.getMsg("Edit");
        i18n_70 = MSG_EXTERNAL_7585826646011739428$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____71;
    }
    else {
        i18n_70 = "Edit";
    } let i18n_72; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7022070615528435141$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____73 = goog.getMsg("Delete");
        i18n_72 = MSG_EXTERNAL_7022070615528435141$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____73;
    }
    else {
        i18n_72 = "Delete";
    } let i18n_75; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2850704758582178666$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___76 = goog.getMsg("Keys");
        i18n_75 = MSG_EXTERNAL_2850704758582178666$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___76;
    }
    else {
        i18n_75 = "Keys";
    } let i18n_77; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_500125802698921621$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___78 = goog.getMsg("S3");
        i18n_77 = MSG_EXTERNAL_500125802698921621$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___78;
    }
    else {
        i18n_77 = "S3";
    } let i18n_79; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7680029331402768973$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___80 = goog.getMsg("{$interpolation} {$interpolation_1}", { "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
        i18n_79 = MSG_EXTERNAL_7680029331402768973$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___80;
    }
    else {
        i18n_79 = "" + "\uFFFD0\uFFFD" + " " + "\uFFFD1\uFFFD" + "";
    } let i18n_81; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2333781235372559025$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___82 = goog.getMsg("Swift");
        i18n_81 = MSG_EXTERNAL_2333781235372559025$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___82;
    }
    else {
        i18n_81 = "Swift";
    } let i18n_83; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5820752306168855018$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____84 = goog.getMsg("There are no keys.");
        i18n_83 = MSG_EXTERNAL_5820752306168855018$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____84;
    }
    else {
        i18n_83 = "There are no keys.";
    } let i18n_85; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8461842260159597706$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____86 = goog.getMsg("Show");
        i18n_85 = MSG_EXTERNAL_8461842260159597706$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____86;
    }
    else {
        i18n_85 = "Show";
    } let i18n_87; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7022070615528435141$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____88 = goog.getMsg("Delete");
        i18n_87 = MSG_EXTERNAL_7022070615528435141$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____88;
    }
    else {
        i18n_87 = "Delete";
    } let i18n_89; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5820752306168855018$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____90 = goog.getMsg("There are no keys.");
        i18n_89 = MSG_EXTERNAL_5820752306168855018$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____90;
    }
    else {
        i18n_89 = "There are no keys.";
    } let i18n_91; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8461842260159597706$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____92 = goog.getMsg("Show");
        i18n_91 = MSG_EXTERNAL_8461842260159597706$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____92;
    }
    else {
        i18n_91 = "Show";
    } let i18n_93; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2680037700420002636$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___94 = goog.getMsg("Capabilities");
        i18n_93 = MSG_EXTERNAL_2680037700420002636$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___94;
    }
    else {
        i18n_93 = "Capabilities";
    } let i18n_95; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2155114225350038108$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___96 = goog.getMsg("All capabilities are already added.");
        i18n_95 = MSG_EXTERNAL_2155114225350038108$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___96;
    }
    else {
        i18n_95 = "All capabilities are already added.";
    } let i18n_97; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_278921168029275828$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___98 = goog.getMsg("{$interpolation} {$interpolation_1}", { "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
        i18n_97 = MSG_EXTERNAL_278921168029275828$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___98;
    }
    else {
        i18n_97 = "" + "\uFFFD0\uFFFD" + " " + "\uFFFD1\uFFFD" + "";
    } let i18n_99; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9048701928821244844$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____100 = goog.getMsg("There are no capabilities.");
        i18n_99 = MSG_EXTERNAL_9048701928821244844$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____100;
    }
    else {
        i18n_99 = "There are no capabilities.";
    } let i18n_101; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7585826646011739428$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____102 = goog.getMsg("Edit");
        i18n_101 = MSG_EXTERNAL_7585826646011739428$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____102;
    }
    else {
        i18n_101 = "Edit";
    } let i18n_103; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7022070615528435141$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____104 = goog.getMsg("Delete");
        i18n_103 = MSG_EXTERNAL_7022070615528435141$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____104;
    }
    else {
        i18n_103 = "Delete";
    } let i18n_105; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4687757029350138833$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___106 = goog.getMsg("Unlimited size");
        i18n_105 = MSG_EXTERNAL_4687757029350138833$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___106;
    }
    else {
        i18n_105 = "Unlimited size";
    } let i18n_107; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7527895478393240905$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___108 = goog.getMsg("Max. size");
        i18n_107 = MSG_EXTERNAL_7527895478393240905$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___108;
    }
    else {
        i18n_107 = "Max. size";
    } let i18n_109; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____110 = goog.getMsg("This field is required.");
        i18n_109 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____110;
    }
    else {
        i18n_109 = "This field is required.";
    } let i18n_111; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6799055650932155327$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____112 = goog.getMsg("The value is not valid.");
        i18n_111 = MSG_EXTERNAL_6799055650932155327$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____112;
    }
    else {
        i18n_111 = "The value is not valid.";
    } let i18n_113; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7805775243912737348$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___114 = goog.getMsg("Unlimited objects");
        i18n_113 = MSG_EXTERNAL_7805775243912737348$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___114;
    }
    else {
        i18n_113 = "Unlimited objects";
    } let i18n_115; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8311652196658879211$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___116 = goog.getMsg("Max. objects");
        i18n_115 = MSG_EXTERNAL_8311652196658879211$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___116;
    }
    else {
        i18n_115 = "Max. objects";
    } let i18n_117; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____118 = goog.getMsg("This field is required.");
        i18n_117 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____118;
    }
    else {
        i18n_117 = "This field is required.";
    } let i18n_119; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4107488674570665853$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____120 = goog.getMsg("The entered value must be >= 0.");
        i18n_119 = MSG_EXTERNAL_4107488674570665853$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____120;
    }
    else {
        i18n_119 = "The entered value must be >= 0.";
    } let i18n_121; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4687757029350138833$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___122 = goog.getMsg("Unlimited size");
        i18n_121 = MSG_EXTERNAL_4687757029350138833$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___122;
    }
    else {
        i18n_121 = "Unlimited size";
    } let i18n_123; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7527895478393240905$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___124 = goog.getMsg("Max. size");
        i18n_123 = MSG_EXTERNAL_7527895478393240905$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___124;
    }
    else {
        i18n_123 = "Max. size";
    } let i18n_125; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____126 = goog.getMsg("This field is required.");
        i18n_125 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____126;
    }
    else {
        i18n_125 = "This field is required.";
    } let i18n_127; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6799055650932155327$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____128 = goog.getMsg("The value is not valid.");
        i18n_127 = MSG_EXTERNAL_6799055650932155327$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____128;
    }
    else {
        i18n_127 = "The value is not valid.";
    } let i18n_129; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7805775243912737348$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___130 = goog.getMsg("Unlimited objects");
        i18n_129 = MSG_EXTERNAL_7805775243912737348$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___130;
    }
    else {
        i18n_129 = "Unlimited objects";
    } let i18n_131; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8311652196658879211$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___132 = goog.getMsg("Max. objects");
        i18n_131 = MSG_EXTERNAL_8311652196658879211$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS___132;
    }
    else {
        i18n_131 = "Max. objects";
    } let i18n_133; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____134 = goog.getMsg("This field is required.");
        i18n_133 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____134;
    }
    else {
        i18n_133 = "This field is required.";
    } let i18n_135; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4107488674570665853$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____136 = goog.getMsg("The entered value must be >= 0.");
        i18n_135 = MSG_EXTERNAL_4107488674570665853$$SRC_APP_CEPH_RGW_RGW_USER_FORM_RGW_USER_FORM_COMPONENT_TS____136;
    }
    else {
        i18n_135 = "The entered value must be >= 0.";
    } return [["class", "cd-col-form", 4, "cdFormLoading"], [1, "cd-col-form"], ["novalidate", "", 3, "formGroup"], ["frm", "ngForm"], [1, "card"], [1, "card-header"], i18n_0, [1, "card-body"], [1, "form-group", "row"], ["for", "user_id", 1, "cd-col-form-label", 3, "ngClass"], i18n_2, [1, "cd-col-form-input"], ["id", "user_id", "type", "text", "formControlName", "user_id", 1, "form-control", 3, "readonly"], ["class", "invalid-feedback", 4, "ngIf"], [1, "cd-col-form-offset"], [1, "custom-control", "custom-checkbox"], ["id", "show_tenant", "type", "checkbox", "formControlName", "show_tenant", 1, "custom-control-input", 3, "readonly", "click"], ["for", "show_tenant", 1, "custom-control-label"], i18n_4, ["class", "form-group row", 4, "ngIf"], ["for", "display_name", 1, "cd-col-form-label", 3, "ngClass"], i18n_6, ["id", "display_name", "type", "text", "formControlName", "display_name", 1, "form-control"], ["for", "email", 1, "cd-col-form-label"], i18n_8, ["id", "email", "type", "text", "formControlName", "email", 1, "form-control"], ["for", "max_buckets_mode", 1, "cd-col-form-label"], i18n_10, ["formControlName", "max_buckets_mode", "name", "max_buckets_mode", "id", "max_buckets_mode", 1, "form-select", 3, "change"], ["value", "-1"], i18n_12, ["value", "0"], i18n_14, ["value", "1"], i18n_16, ["id", "suspended", "type", "checkbox", "formControlName", "suspended", 1, "custom-control-input"], ["for", "suspended", 1, "custom-control-label"], i18n_18, [4, "ngIf"], i18n_20, ["id", "user_quota_enabled", "type", "checkbox", "formControlName", "user_quota_enabled", 1, "custom-control-input"], ["for", "user_quota_enabled", 1, "custom-control-label"], i18n_22, i18n_24, ["id", "bucket_quota_enabled", "type", "checkbox", "formControlName", "bucket_quota_enabled", 1, "custom-control-input"], ["for", "bucket_quota_enabled", 1, "custom-control-label"], i18n_26, [1, "card-footer"], ["wrappingClass", "text-right", 3, "form", "submitText", "submitActionEvent"], [1, "invalid-feedback"], i18n_28, i18n_30, i18n_32, ["for", "tenant", 1, "cd-col-form-label"], i18n_34, ["id", "tenant", "type", "text", "formControlName", "tenant", "autofocus", "", 1, "form-control", 3, "readonly"], i18n_36, i18n_38, i18n_40, i18n_42, i18n_44, i18n_46, [1, "cd-col-form-label"], ["id", "max_buckets", "type", "number", "formControlName", "max_buckets", "min", "1", 1, "form-control"], i18n_48, i18n_50, i18n_52, ["id", "generate_key", "type", "checkbox", "formControlName", "generate_key", 1, "custom-control-input"], ["for", "generate_key", 1, "custom-control-label"], i18n_54, ["for", "access_key", 1, "cd-col-form-label", "required"], i18n_56, [1, "input-group"], ["id", "access_key", "type", "password", "formControlName", "access_key", 1, "form-control"], ["type", "button", "cdPasswordButton", "access_key", 1, "btn", "btn-light"], ["source", "access_key"], i18n_58, ["for", "secret_key", 1, "cd-col-form-label", "required"], i18n_60, ["id", "secret_key", "type", "password", "formControlName", "secret_key", 1, "form-control"], ["type", "button", "cdPasswordButton", "secret_key", 1, "btn", "btn-light"], ["source", "secret_key"], i18n_62, i18n_64, [1, "row"], ["class", "no-border", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "row", "my-2"], [1, "col-12"], ["type", "button", 1, "btn", "btn-light", "float-end", "tc_addSubuserButton", 3, "click"], [3, "ngClass"], i18n_66, [1, "help-block"], [1, "no-border"], [1, "form-text", "text-muted"], i18n_68, [1, "input-group-text"], ["type", "text", "readonly", "", 1, "cd-form-control", 3, "value"], ["type", "button", "ngbTooltip", i18n_70, 1, "btn", "btn-light", "tc_showSubuserButton", 3, "click"], ["type", "button", "ngbTooltip", i18n_72, 1, "btn", "btn-light", "tc_deleteSubuserButton", 3, "click"], i18n_75, i18n_77, ["type", "button", 1, "btn", "btn-light", "float-end", "tc_addS3KeyButton", 3, "click"], i18n_79, i18n_81, i18n_83, ["type", "button", "ngbTooltip", i18n_85, 1, "btn", "btn-light", "tc_showS3KeyButton", 3, "click"], ["type", "button", "ngbTooltip", i18n_87, 1, "btn", "btn-light", "tc_deleteS3KeyButton", 3, "click"], i18n_89, ["type", "button", "ngbTooltip", i18n_91, 1, "btn", "btn-light", "tc_showSwiftKeyButton", 3, "click"], i18n_93, ["type", "button", "ngbTooltip", i18n_95, "triggers", "pointerenter:pointerleave", 1, "btn", "btn-light", "float-end", "tc_addCapButton", 3, "disabled", "disableTooltip", "click"], i18n_97, i18n_99, ["type", "button", "ngbTooltip", i18n_101, 1, "btn", "btn-light", "tc_editCapButton", 3, "click"], ["type", "button", "ngbTooltip", i18n_103, 1, "btn", "btn-light", "tc_deleteCapButton", 3, "click"], ["id", "user_quota_max_size_unlimited", "type", "checkbox", "formControlName", "user_quota_max_size_unlimited", 1, "custom-control-input"], ["for", "user_quota_max_size_unlimited", 1, "custom-control-label"], i18n_105, ["for", "user_quota_max_size", 1, "cd-col-form-label", "required"], i18n_107, ["id", "user_quota_max_size", "type", "text", "formControlName", "user_quota_max_size", "cdDimlessBinary", "", 1, "form-control"], i18n_109, i18n_111, ["id", "user_quota_max_objects_unlimited", "type", "checkbox", "formControlName", "user_quota_max_objects_unlimited", 1, "custom-control-input"], ["for", "user_quota_max_objects_unlimited", 1, "custom-control-label"], i18n_113, ["for", "user_quota_max_objects", 1, "cd-col-form-label", "required"], i18n_115, ["id", "user_quota_max_objects", "type", "number", "formControlName", "user_quota_max_objects", "min", "0", 1, "form-control"], i18n_117, i18n_119, ["id", "bucket_quota_max_size_unlimited", "type", "checkbox", "formControlName", "bucket_quota_max_size_unlimited", 1, "custom-control-input"], ["for", "bucket_quota_max_size_unlimited", 1, "custom-control-label"], i18n_121, ["for", "bucket_quota_max_size", 1, "cd-col-form-label", "required"], i18n_123, ["id", "bucket_quota_max_size", "type", "text", "formControlName", "bucket_quota_max_size", "cdDimlessBinary", "", 1, "form-control"], i18n_125, i18n_127, ["id", "bucket_quota_max_objects_unlimited", "type", "checkbox", "formControlName", "bucket_quota_max_objects_unlimited", 1, "custom-control-input"], ["for", "bucket_quota_max_objects_unlimited", 1, "custom-control-label"], i18n_129, ["for", "bucket_quota_max_objects", 1, "cd-col-form-label", "required"], i18n_131, ["id", "bucket_quota_max_objects", "type", "number", "formControlName", "bucket_quota_max_objects", "min", "0", 1, "form-control"], i18n_133, i18n_135]; }, template: function RgwUserFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, RgwUserFormComponent_div_0_Template, 90, 42, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("cdFormLoading", ctx.loading);
    } }, directives: [_shared_directives_form_loading_directive__WEBPACK_IMPORTED_MODULE_16__.FormLoadingDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgControlStatusGroup, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_17__.CdFormValidationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_18__.CdFormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_32__.NgClass, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_19__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_20__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_32__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.CheckboxControlValueAccessor, _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_21__.AutofocusDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.MinValidator, _shared_directives_password_button_directive__WEBPACK_IMPORTED_MODULE_22__.PasswordButtonDirective, _shared_components_copy2clipboard_button_copy2clipboard_button_component__WEBPACK_IMPORTED_MODULE_23__.Copy2ClipboardButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_32__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__.NgbTooltip, _shared_directives_dimless_binary_directive__WEBPACK_IMPORTED_MODULE_24__.DimlessBinaryDirective, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_25__.FormButtonPanelComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_32__.TitleCasePipe, _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_26__.UpperFirstPipe, ngx_pipe_function__WEBPACK_IMPORTED_MODULE_34__.PipeFunction], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZ3ctdXNlci1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 79869:
/*!*******************************************************************!*\
  !*** ./src/app/ceph/rgw/rgw-user-list/rgw-user-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwUserListComponent": () => (/* binding */ RgwUserListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 25160);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 42720);
/* harmony import */ var _app_shared_api_rgw_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/api/rgw-user.service */ 59882);
/* harmony import */ var _app_shared_classes_list_with_details_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/classes/list-with-details.class */ 68136);
/* harmony import */ var _app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/components/critical-confirmation-modal/critical-confirmation-modal.component */ 30982);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/datatable/table/table.component */ 35905);
/* harmony import */ var _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/enum/cell-template.enum */ 99466);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 65862);
/* harmony import */ var _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/models/cd-table-selection */ 68774);
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 79247);
/* harmony import */ var _app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/shared/services/modal.service */ 63285);
/* harmony import */ var _app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/shared/services/url-builder.service */ 51847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/datatable/table-actions/table-actions.component */ 94928);
/* harmony import */ var _rgw_user_details_rgw_user_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../rgw-user-details/rgw-user-details.component */ 87404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_usage_bar_usage_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/usage-bar/usage-bar.component */ 60251);
























const _c0 = ["userSizeTpl"];
const _c1 = ["userObjectTpl"];
function RgwUserListComponent_ng_template_4_cd_usage_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "cd-usage-bar", 8);
} if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("total", row_r5.user_quota.max_size)("used", row_r5.stats.size_actual);
} }
function RgwUserListComponent_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](0, 9);
} }
function RgwUserListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, RgwUserListComponent_ng_template_4_cd_usage_bar_0_Template, 1, 2, "cd-usage-bar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, RgwUserListComponent_ng_template_4_ng_template_1_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const row_r5 = ctx.row;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r5.user_quota.max_size > 0 && row_r5.user_quota.enabled)("ngIfElse", _r7);
} }
function RgwUserListComponent_ng_template_6_cd_usage_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "cd-usage-bar", 12);
} if (rf & 2) {
    const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("total", row_r10.user_quota.max_objects)("used", row_r10.stats.num_objects)("isBinary", false);
} }
function RgwUserListComponent_ng_template_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](0, 13);
} }
function RgwUserListComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, RgwUserListComponent_ng_template_6_cd_usage_bar_0_Template, 1, 3, "cd-usage-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, RgwUserListComponent_ng_template_6_ng_template_1_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const row_r10 = ctx.row;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", row_r10.user_quota.max_objects > 0 && row_r10.user_quota.enabled)("ngIfElse", _r12);
} }
const BASE_URL = 'rgw/user';
class RgwUserListComponent extends _app_shared_classes_list_with_details_class__WEBPACK_IMPORTED_MODULE_1__.ListWithDetails {
    constructor(authStorageService, rgwUserService, modalService, urlBuilder, actionLabels, ngZone) {
        super(ngZone);
        this.authStorageService = authStorageService;
        this.rgwUserService = rgwUserService;
        this.modalService = modalService;
        this.urlBuilder = urlBuilder;
        this.actionLabels = actionLabels;
        this.ngZone = ngZone;
        this.columns = [];
        this.users = [];
        this.selection = new _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_7__.CdTableSelection();
    }
    ngOnInit() {
        this.permission = this.authStorageService.getPermissions().rgw;
        this.columns = [
            {
                name: "Username",
                prop: 'uid',
                flexGrow: 1
            },
            {
                name: "Tenant",
                prop: 'tenant',
                flexGrow: 1
            },
            {
                name: "Full name",
                prop: 'display_name',
                flexGrow: 1
            },
            {
                name: "Email address",
                prop: 'email',
                flexGrow: 1
            },
            {
                name: "Suspended",
                prop: 'suspended',
                flexGrow: 1,
                cellClass: 'text-center',
                cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_5__.CellTemplate.checkIcon
            },
            {
                name: "Max. buckets",
                prop: 'max_buckets',
                flexGrow: 1,
                cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_5__.CellTemplate.map,
                customTemplateConfig: {
                    '-1': "Disabled",
                    0: "Unlimited"
                }
            },
            {
                name: "Capacity Limit %",
                prop: 'size_usage',
                cellTemplate: this.userSizeTpl,
                flexGrow: 0.8
            },
            {
                name: "Object Limit %",
                prop: 'object_usage',
                cellTemplate: this.userObjectTpl,
                flexGrow: 0.8
            }
        ];
        const getUserUri = () => this.selection.first() && `${encodeURIComponent(this.selection.first().uid)}`;
        const addAction = {
            permission: 'create',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_6__.Icons.add,
            routerLink: () => this.urlBuilder.getCreate(),
            name: this.actionLabels.CREATE,
            canBePrimary: (selection) => !selection.hasSelection
        };
        const editAction = {
            permission: 'update',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_6__.Icons.edit,
            routerLink: () => this.urlBuilder.getEdit(getUserUri()),
            name: this.actionLabels.EDIT
        };
        const deleteAction = {
            permission: 'delete',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_6__.Icons.destroy,
            click: () => this.deleteAction(),
            disable: () => !this.selection.hasSelection,
            name: this.actionLabels.DELETE,
            canBePrimary: (selection) => selection.hasMultiSelection
        };
        this.tableActions = [addAction, editAction, deleteAction];
        this.setTableRefreshTimeout();
    }
    getUserList(context) {
        this.setTableRefreshTimeout();
        this.rgwUserService.list().subscribe((resp) => {
            this.users = resp;
        }, () => {
            context.error();
        });
    }
    updateSelection(selection) {
        this.selection = selection;
    }
    deleteAction() {
        this.modalService.show(_app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_2__.CriticalConfirmationModalComponent, {
            itemDescription: this.selection.hasSingleSelection ? "user" : "users",
            itemNames: this.selection.selected.map((user) => user['uid']),
            submitActionObservable: () => {
                return new rxjs__WEBPACK_IMPORTED_MODULE_15__.Observable((observer) => {
                    // Delete all selected data table rows.
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.forkJoin)(this.selection.selected.map((user) => {
                        return this.rgwUserService.delete(user.uid);
                    })).subscribe({
                        error: (error) => {
                            // Forward the error to the observer.
                            observer.error(error);
                            // Reload the data table content because some deletions might
                            // have been executed successfully in the meanwhile.
                            this.table.refreshBtn();
                        },
                        complete: () => {
                            // Notify the observer that we are done.
                            observer.complete();
                            // Reload the data table content.
                            this.table.refreshBtn();
                        }
                    });
                });
            }
        });
    }
}
RgwUserListComponent.ɵfac = function RgwUserListComponent_Factory(t) { return new (t || RgwUserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_8__.AuthStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_shared_api_rgw_user_service__WEBPACK_IMPORTED_MODULE_0__.RgwUserService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_10__.URLBuilderService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__.ActionLabelsI18n), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgZone)); };
RgwUserListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: RgwUserListComponent, selectors: [["cd-rgw-user-list"]], viewQuery: function RgwUserListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_4__.TableComponent, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.userSizeTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.userObjectTpl = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵProvidersFeature"]([{ provide: _app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_10__.URLBuilderService, useValue: new _app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_10__.URLBuilderService(BASE_URL) }]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 9, consts: function () { let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2378102027773585685$$SRC_APP_CEPH_RGW_RGW_USER_LIST_RGW_USER_LIST_COMPONENT_TS___3 = goog.getMsg("No Limit");
        i18n_2 = MSG_EXTERNAL_2378102027773585685$$SRC_APP_CEPH_RGW_RGW_USER_LIST_RGW_USER_LIST_COMPONENT_TS___3;
    }
    else {
        i18n_2 = "No Limit";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2378102027773585685$$SRC_APP_CEPH_RGW_RGW_USER_LIST_RGW_USER_LIST_COMPONENT_TS___5 = goog.getMsg("No Limit");
        i18n_4 = MSG_EXTERNAL_2378102027773585685$$SRC_APP_CEPH_RGW_RGW_USER_LIST_RGW_USER_LIST_COMPONENT_TS___5;
    }
    else {
        i18n_4 = "No Limit";
    } return [["columnMode", "flex", "selectionType", "multiClick", "identifier", "uid", 3, "autoReload", "data", "columns", "hasDetails", "status", "setExpandedRow", "updateSelection", "fetchData"], ["table", ""], [1, "table-actions", 3, "permission", "selection", "tableActions"], ["cdTableDetail", "", 3, "selection"], ["userSizeTpl", ""], ["userObjectTpl", ""], [3, "total", "used", 4, "ngIf", "ngIfElse"], ["noSizeQuota", ""], [3, "total", "used"], i18n_2, [3, "total", "used", "isBinary", 4, "ngIf", "ngIfElse"], ["noObjectQuota", ""], [3, "total", "used", "isBinary"], i18n_4]; }, template: function RgwUserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "cd-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("setExpandedRow", function RgwUserListComponent_Template_cd_table_setExpandedRow_0_listener($event) { return ctx.setExpandedRow($event); })("updateSelection", function RgwUserListComponent_Template_cd_table_updateSelection_0_listener($event) { return ctx.updateSelection($event); })("fetchData", function RgwUserListComponent_Template_cd_table_fetchData_0_listener($event) { return ctx.getUserList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "cd-table-actions", 2)(3, "cd-rgw-user-details", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, RgwUserListComponent_ng_template_4_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, RgwUserListComponent_ng_template_6_Template, 3, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("autoReload", false)("data", ctx.users)("columns", ctx.columns)("hasDetails", true)("status", ctx.tableStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("permission", ctx.permission)("selection", ctx.selection)("tableActions", ctx.tableActions);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("selection", ctx.expandedRow);
    } }, directives: [_app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_4__.TableComponent, _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_11__.TableActionsComponent, _rgw_user_details_rgw_user_details_component__WEBPACK_IMPORTED_MODULE_12__.RgwUserDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _shared_components_usage_bar_usage_bar_component__WEBPACK_IMPORTED_MODULE_13__.UsageBarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZ3ctdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 51115:
/*!***********************************************************************************!*\
  !*** ./src/app/ceph/rgw/rgw-user-s3-key-modal/rgw-user-s3-key-modal.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwUserS3KeyModalComponent": () => (/* binding */ RgwUserS3KeyModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-builder */ 62862);
/* harmony import */ var _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/forms/cd-validators */ 82723);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/directives/autofocus.directive */ 82945);
/* harmony import */ var _shared_directives_password_button_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/directives/password-button.directive */ 4416);
/* harmony import */ var _shared_components_copy2clipboard_button_copy2clipboard_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/copy2clipboard-button/copy2clipboard-button.component */ 58039);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 30839);
/* harmony import */ var _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/pipes/upper-first.pipe */ 10545);























function RgwUserS3KeyModalComponent_input_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "input", 17);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
} }
function RgwUserS3KeyModalComponent_select_14_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", null);
} }
function RgwUserS3KeyModalComponent_select_14_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userCandidate_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", userCandidate_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](userCandidate_r9);
} }
function RgwUserS3KeyModalComponent_select_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, RgwUserS3KeyModalComponent_select_14_option_1_Template, 2, 1, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, RgwUserS3KeyModalComponent_select_14_option_2_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.userCandidates !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r2.userCandidates);
} }
function RgwUserS3KeyModalComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](1, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RgwUserS3KeyModalComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 7)(1, "div", 26)(2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](5, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
} }
function RgwUserS3KeyModalComponent_div_17_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](1, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
const _c14 = function (a0) { return { "required": a0 }; };
function RgwUserS3KeyModalComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 7)(1, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](2, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 10)(4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "input", 34)(6, "button", 35)(7, "cd-copy-2-clipboard-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, RgwUserS3KeyModalComponent_div_17_span_8_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](3, _c14, !ctx_r5.viewing));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", ctx_r5.viewing);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formGroup.showError("access_key", _r0, "required"));
} }
function RgwUserS3KeyModalComponent_div_18_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](1, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RgwUserS3KeyModalComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 7)(1, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](2, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 10)(4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "input", 40)(6, "button", 41)(7, "cd-copy-2-clipboard-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, RgwUserS3KeyModalComponent_div_18_span_8_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](3, _c14, !ctx_r6.viewing));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", ctx_r6.viewing);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r6.formGroup.showError("secret_key", _r0, "required"));
} }
class RgwUserS3KeyModalComponent {
    constructor(formBuilder, activeModal, actionLabels) {
        this.formBuilder = formBuilder;
        this.activeModal = activeModal;
        this.actionLabels = actionLabels;
        /**
         * The event that is triggered when the 'Add' button as been pressed.
         */
        this.submitAction = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
        this.viewing = true;
        this.userCandidates = [];
        this.resource = "S3 Key";
        this.createForm();
    }
    createForm() {
        this.formGroup = this.formBuilder.group({
            user: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            generate_key: [true],
            access_key: [null, [_app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_3__.CdValidators.requiredIf({ generate_key: false })]],
            secret_key: [null, [_app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_3__.CdValidators.requiredIf({ generate_key: false })]]
        });
    }
    /**
     * Set the 'viewing' flag. If set to TRUE, the modal dialog is in 'View' mode,
     * otherwise in 'Add' mode. According to the mode the dialog and its controls
     * behave different.
     * @param {boolean} viewing
     */
    setViewing(viewing = true) {
        this.viewing = viewing;
        this.action = this.viewing ? this.actionLabels.SHOW : this.actionLabels.CREATE;
    }
    /**
     * Set the values displayed in the dialog.
     */
    setValues(user, access_key, secret_key) {
        this.formGroup.setValue({
            user: user,
            generate_key: lodash__WEBPACK_IMPORTED_MODULE_0___default().isEmpty(access_key),
            access_key: access_key,
            secret_key: secret_key
        });
    }
    /**
     * Set the user candidates displayed in the 'Username' dropdown box.
     */
    setUserCandidates(candidates) {
        this.userCandidates = candidates;
    }
    onSubmit() {
        const key = this.formGroup.value;
        this.submitAction.emit(key);
        this.activeModal.close();
    }
}
RgwUserS3KeyModalComponent.ɵfac = function RgwUserS3KeyModalComponent_Factory(t) { return new (t || RgwUserS3KeyModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_2__.CdFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__.ActionLabelsI18n)); };
RgwUserS3KeyModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: RgwUserS3KeyModalComponent, selectors: [["cd-rgw-user-s3-key-modal"]], outputs: { submitAction: "submitAction" }, decls: 23, vars: 24, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc form title
         */
        const MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_RGW_RGW_USER_S3_KEY_MODAL_RGW_USER_S3_KEY_MODAL_COMPONENT_TS_1 = goog.getMsg("{$interpolation} {$interpolation_1}", { "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
        i18n_0 = MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_RGW_RGW_USER_S3_KEY_MODAL_RGW_USER_S3_KEY_MODAL_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "" + "\uFFFD0\uFFFD" + " " + "\uFFFD1\uFFFD" + "";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5248717555542428023$$SRC_APP_CEPH_RGW_RGW_USER_S3_KEY_MODAL_RGW_USER_S3_KEY_MODAL_COMPONENT_TS_3 = goog.getMsg("Username");
        i18n_2 = MSG_EXTERNAL_5248717555542428023$$SRC_APP_CEPH_RGW_RGW_USER_S3_KEY_MODAL_RGW_USER_S3_KEY_MODAL_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "Username";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2916809944497740057$$SRC_APP_CEPH_RGW_RGW_USER_S3_KEY_MODAL_RGW_USER_S3_KEY_MODAL_COMPONENT_TS___5 = goog.getMsg("-- Select a username --");
        i18n_4 = MSG_EXTERNAL_2916809944497740057$$SRC_APP_CEPH_RGW_RGW_USER_S3_KEY_MODAL_RGW_USER_S3_KEY_MODAL_COMPONENT_TS___5;
    }
    else {
        i18n_4 = "-- Select a username --";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_S3_KEY_MODAL_RGW_USER_S3_KEY_MODAL_COMPONENT_TS__7 = goog.getMsg("This field is required.");
        i18n_6 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_S3_KEY_MODAL_RGW_USER_S3_KEY_MODAL_COMPONENT_TS__7;
    }
    else {
        i18n_6 = "This field is required.";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1254954206625106737$$SRC_APP_CEPH_RGW_RGW_USER_S3_KEY_MODAL_RGW_USER_S3_KEY_MODAL_COMPONENT_TS__9 = goog.getMsg("Auto-generate key");
        i18n_8 = MSG_EXTERNAL_1254954206625106737$$SRC_APP_CEPH_RGW_RGW_USER_S3_KEY_MODAL_RGW_USER_S3_KEY_MODAL_COMPONENT_TS__9;
    }
    else {
        i18n_8 = "Auto-generate key";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1956226327175747295$$SRC_APP_CEPH_RGW_RGW_USER_S3_KEY_MODAL_RGW_USER_S3_KEY_MODAL_COMPONENT_TS__11 = goog.getMsg("Access key");
        i18n_10 = MSG_EXTERNAL_1956226327175747295$$SRC_APP_CEPH_RGW_RGW_USER_S3_KEY_MODAL_RGW_USER_S3_KEY_MODAL_COMPONENT_TS__11;
    }
    else {
        i18n_10 = "Access key";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_S3_KEY_MODAL_RGW_USER_S3_KEY_MODAL_COMPONENT_TS___13 = goog.getMsg("This field is required.");
        i18n_12 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_S3_KEY_MODAL_RGW_USER_S3_KEY_MODAL_COMPONENT_TS___13;
    }
    else {
        i18n_12 = "This field is required.";
    } let i18n_15; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5500685598594641035$$SRC_APP_CEPH_RGW_RGW_USER_S3_KEY_MODAL_RGW_USER_S3_KEY_MODAL_COMPONENT_TS__16 = goog.getMsg("Secret key");
        i18n_15 = MSG_EXTERNAL_5500685598594641035$$SRC_APP_CEPH_RGW_RGW_USER_S3_KEY_MODAL_RGW_USER_S3_KEY_MODAL_COMPONENT_TS__16;
    }
    else {
        i18n_15 = "Secret key";
    } let i18n_17; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_S3_KEY_MODAL_RGW_USER_S3_KEY_MODAL_COMPONENT_TS___18 = goog.getMsg("This field is required.");
        i18n_17 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_S3_KEY_MODAL_RGW_USER_S3_KEY_MODAL_COMPONENT_TS___18;
    }
    else {
        i18n_17 = "This field is required.";
    } return [[3, "modalRef"], [1, "modal-title"], i18n_0, [1, "modal-content"], ["novalidate", "", 3, "formGroup"], ["frm", "ngForm"], [1, "modal-body"], [1, "form-group", "row"], ["for", "user", 1, "cd-col-form-label", 3, "ngClass"], i18n_2, [1, "cd-col-form-input"], ["id", "user", "class", "form-control", "type", "text", "formControlName", "user", 3, "readonly", 4, "ngIf"], ["id", "user", "class", "form-control", "formControlName", "user", "autofocus", "", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "form-group row", 4, "ngIf"], [1, "modal-footer"], [3, "form", "submitText", "showSubmit", "submitActionEvent"], ["id", "user", "type", "text", "formControlName", "user", 1, "form-control", 3, "readonly"], ["id", "user", "formControlName", "user", "autofocus", "", 1, "form-control"], [3, "ngValue", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngValue"], i18n_4, [3, "value"], [1, "invalid-feedback"], i18n_6, [1, "cd-col-form-offset"], [1, "custom-control", "custom-checkbox"], ["id", "generate_key", "type", "checkbox", "formControlName", "generate_key", 1, "custom-control-input"], ["for", "generate_key", 1, "custom-control-label"], i18n_8, ["for", "access_key", 1, "cd-col-form-label", 3, "ngClass"], i18n_10, [1, "input-group"], ["id", "access_key", "type", "password", "formControlName", "access_key", 1, "form-control", 3, "readonly"], ["type", "button", "cdPasswordButton", "access_key", 1, "btn", "btn-light"], ["source", "access_key"], i18n_12, ["for", "secret_key", 1, "cd-col-form-label", 3, "ngClass"], i18n_15, ["id", "secret_key", "type", "password", "formControlName", "secret_key", 1, "form-control", 3, "readonly"], ["type", "button", "cdPasswordButton", "secret_key", 1, "btn", "btn-light"], ["source", "secret_key"], i18n_17]; }, template: function RgwUserS3KeyModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "cd-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "upperFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "form", 4, 5)(8, "div", 6)(9, "div", 7)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, RgwUserS3KeyModalComponent_input_13_Template, 1, 1, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, RgwUserS3KeyModalComponent_select_14_Template, 3, 2, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, RgwUserS3KeyModalComponent_span_15_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, RgwUserS3KeyModalComponent_div_16_Template, 6, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, RgwUserS3KeyModalComponent_div_17_Template, 9, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, RgwUserS3KeyModalComponent_div_18_Template, 9, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 15)(20, "cd-form-button-panel", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("submitActionEvent", function RgwUserS3KeyModalComponent_Template_cd_form_button_panel_submitActionEvent_20_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](21, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](22, "upperFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 14, ctx.action))(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 16, ctx.resource));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18nApply"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](22, _c14, !ctx.viewing));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.viewing);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.viewing);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.formGroup.showError("user", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.viewing);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.formGroup.getValue("generate_key"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.formGroup.getValue("generate_key"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("form", ctx.formGroup)("submitText", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](21, 18, ctx.action) + " " + _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](22, 20, ctx.resource))("showSubmit", !ctx.viewing);
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_5__.CdFormValidationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_6__.CdFormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_7__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_8__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.SelectControlValueAccessor, _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_9__.AutofocusDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.CheckboxControlValueAccessor, _shared_directives_password_button_directive__WEBPACK_IMPORTED_MODULE_10__.PasswordButtonDirective, _shared_components_copy2clipboard_button_copy2clipboard_button_component__WEBPACK_IMPORTED_MODULE_11__.Copy2ClipboardButtonComponent, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_12__.FormButtonPanelComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.TitleCasePipe, _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_13__.UpperFirstPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZ3ctdXNlci1zMy1rZXktbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 23050:
/*!*************************************************************************************!*\
  !*** ./src/app/ceph/rgw/rgw-user-subuser-modal/rgw-user-subuser-modal.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwUserSubuserModalComponent": () => (/* binding */ RgwUserSubuserModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-builder */ 62862);
/* harmony import */ var _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/forms/cd-validators */ 82723);
/* harmony import */ var _models_rgw_user_subuser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/rgw-user-subuser */ 81191);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/directives/autofocus.directive */ 82945);
/* harmony import */ var _shared_directives_password_button_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/directives/password-button.directive */ 4416);
/* harmony import */ var _shared_components_copy2clipboard_button_copy2clipboard_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/copy2clipboard-button/copy2clipboard-button.component */ 58039);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 30839);
/* harmony import */ var _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/pipes/upper-first.pipe */ 10545);
























function RgwUserSubuserModalComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function RgwUserSubuserModalComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function RgwUserSubuserModalComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perm_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", perm_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", perm_r6, " ");
} }
function RgwUserSubuserModalComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function RgwUserSubuserModalComponent_fieldset_34_div_9_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function RgwUserSubuserModalComponent_fieldset_34_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 7)(1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](2, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 10)(4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "input", 44)(6, "button", 45)(7, "cd-copy-2-clipboard-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, RgwUserSubuserModalComponent_fieldset_34_div_9_span_8_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r7.formGroup.showError("secret_key", _r0, "required"));
} }
function RgwUserSubuserModalComponent_fieldset_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "fieldset")(1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](2, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 7)(4, "div", 35)(5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](8, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, RgwUserSubuserModalComponent_fieldset_34_div_9_Template, 9, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r5.editing && !ctx_r5.formGroup.getValue("generate_secret"));
} }
const _c28 = function (a0) { return { "required": a0 }; };
const _c29 = function () { return ["read", "write"]; };
class RgwUserSubuserModalComponent {
    constructor(formBuilder, bsModalRef, actionLabels) {
        this.formBuilder = formBuilder;
        this.bsModalRef = bsModalRef;
        this.actionLabels = actionLabels;
        /**
         * The event that is triggered when the 'Add' or 'Update' button
         * has been pressed.
         */
        this.submitAction = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.editing = true;
        this.subusers = [];
        this.resource = "Subuser";
        this.createForm();
    }
    createForm() {
        this.formGroup = this.formBuilder.group({
            uid: [null],
            subuid: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, this.subuserValidator()]],
            perm: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
            // Swift key
            generate_secret: [true],
            secret_key: [null, [_app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_3__.CdValidators.requiredIf({ generate_secret: false })]]
        });
    }
    /**
     * Validates whether the subuser already exists.
     */
    subuserValidator() {
        const self = this;
        return (control) => {
            if (self.editing) {
                return null;
            }
            if ((0,_app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_3__.isEmptyInputValue)(control.value)) {
                return null;
            }
            const found = self.subusers.some((subuser) => {
                return lodash__WEBPACK_IMPORTED_MODULE_0___default().isEqual(self.getSubuserName(subuser.id), control.value);
            });
            return found ? { subuserIdExists: true } : null;
        };
    }
    /**
     * Get the subuser name.
     * Examples:
     *   'johndoe' => 'johndoe'
     *   'janedoe:xyz' => 'xyz'
     * @param {string} value The value to process.
     * @returns {string} Returns the user ID.
     */
    getSubuserName(value) {
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isEmpty(value)) {
            return value;
        }
        const matches = value.match(/([^:]+)(:(.+))?/);
        return lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(matches[3]) ? matches[1] : matches[3];
    }
    /**
     * Set the 'editing' flag. If set to TRUE, the modal dialog is in 'Edit' mode,
     * otherwise in 'Add' mode. According to the mode the dialog and its controls
     * behave different.
     * @param {boolean} viewing
     */
    setEditing(editing = true) {
        this.editing = editing;
        this.action = this.editing ? this.actionLabels.EDIT : this.actionLabels.CREATE;
    }
    /**
     * Set the values displayed in the dialog.
     */
    setValues(uid, subuser = '', permissions = '') {
        this.formGroup.setValue({
            uid: uid,
            subuid: this.getSubuserName(subuser),
            perm: permissions,
            generate_secret: true,
            secret_key: null
        });
    }
    /**
     * Set the current capabilities of the user.
     */
    setSubusers(subusers) {
        this.subusers = subusers;
    }
    onSubmit() {
        // Get the values from the form and create an object that is sent
        // by the triggered submit action event.
        const values = this.formGroup.value;
        const subuser = new _models_rgw_user_subuser__WEBPACK_IMPORTED_MODULE_4__.RgwUserSubuser();
        subuser.id = `${values.uid}:${values.subuid}`;
        subuser.permissions = values.perm;
        subuser.generate_secret = values.generate_secret;
        subuser.secret_key = values.secret_key;
        this.submitAction.emit(subuser);
        this.bsModalRef.close();
    }
}
RgwUserSubuserModalComponent.ɵfac = function RgwUserSubuserModalComponent_Factory(t) { return new (t || RgwUserSubuserModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_2__.CdFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__.ActionLabelsI18n)); };
RgwUserSubuserModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: RgwUserSubuserModalComponent, selectors: [["cd-rgw-user-subuser-modal"]], outputs: { submitAction: "submitAction" }, decls: 39, vars: 26, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc form title
         */
        const MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS_1 = goog.getMsg("{$interpolation} {$interpolation_1}", { "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
        i18n_0 = MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "" + "\uFFFD0\uFFFD" + " " + "\uFFFD1\uFFFD" + "";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5248717555542428023$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS_3 = goog.getMsg("Username");
        i18n_2 = MSG_EXTERNAL_5248717555542428023$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "Username";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5091031285775138345$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS_5 = goog.getMsg("Subuser");
        i18n_4 = MSG_EXTERNAL_5091031285775138345$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "Subuser";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_837553826328586238$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS_7 = goog.getMsg("Permission");
        i18n_6 = MSG_EXTERNAL_837553826328586238$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "Permission";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1496173861467679461$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS_9 = goog.getMsg("-- Select a permission --");
        i18n_8 = MSG_EXTERNAL_1496173861467679461$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS_9;
    }
    else {
        i18n_8 = "-- Select a permission --";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6418324027599056238$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS_11 = goog.getMsg("read, write");
        i18n_10 = MSG_EXTERNAL_6418324027599056238$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS_11;
    }
    else {
        i18n_10 = "read, write";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_268166731974484199$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS_13 = goog.getMsg("full");
        i18n_12 = MSG_EXTERNAL_268166731974484199$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS_13;
    }
    else {
        i18n_12 = "full";
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS__15 = goog.getMsg("This field is required.");
        i18n_14 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS__15;
    }
    else {
        i18n_14 = "This field is required.";
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8445703423987154938$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS__17 = goog.getMsg("The chosen subuser ID is already in use.");
        i18n_16 = MSG_EXTERNAL_8445703423987154938$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS__17;
    }
    else {
        i18n_16 = "The chosen subuser ID is already in use.";
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS__19 = goog.getMsg("This field is required.");
        i18n_18 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS__19;
    }
    else {
        i18n_18 = "This field is required.";
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8401417382184049672$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS__21 = goog.getMsg("Swift key");
        i18n_20 = MSG_EXTERNAL_8401417382184049672$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS__21;
    }
    else {
        i18n_20 = "Swift key";
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5790909936027274012$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS__23 = goog.getMsg("Auto-generate secret");
        i18n_22 = MSG_EXTERNAL_5790909936027274012$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS__23;
    }
    else {
        i18n_22 = "Auto-generate secret";
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5500685598594641035$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS___25 = goog.getMsg("Secret key");
        i18n_24 = MSG_EXTERNAL_5500685598594641035$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS___25;
    }
    else {
        i18n_24 = "Secret key";
    } let i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS____27 = goog.getMsg("This field is required.");
        i18n_26 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_RGW_RGW_USER_SUBUSER_MODAL_RGW_USER_SUBUSER_MODAL_COMPONENT_TS____27;
    }
    else {
        i18n_26 = "This field is required.";
    } return [[3, "modalRef"], [1, "modal-title"], i18n_0, [1, "modal-content"], ["novalidate", "", 3, "formGroup"], ["frm", "ngForm"], [1, "modal-body"], [1, "form-group", "row"], ["for", "uid", 1, "cd-col-form-label"], i18n_2, [1, "cd-col-form-input"], ["id", "uid", "type", "text", "formControlName", "uid", 1, "form-control", 3, "readonly"], ["for", "subuid", 1, "cd-col-form-label", 3, "ngClass"], i18n_4, ["id", "subuid", "type", "text", "formControlName", "subuid", "autofocus", "", 1, "form-control", 3, "readonly"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "perm", 1, "cd-col-form-label", "required"], i18n_6, ["id", "perm", "formControlName", "perm", 1, "form-select"], [3, "ngValue"], i18n_8, [3, "value", 4, "ngFor", "ngForOf"], ["value", "read-write"], i18n_10, ["value", "full-control"], i18n_12, [4, "ngIf"], [1, "modal-footer"], [3, "form", "submitText", "submitActionEvent"], [1, "invalid-feedback"], i18n_14, i18n_16, [3, "value"], i18n_18, i18n_20, [1, "cd-col-form-offset"], [1, "custom-control", "custom-checkbox"], ["id", "generate_secret", "type", "checkbox", "formControlName", "generate_secret", 1, "custom-control-input"], ["for", "generate_secret", 1, "custom-control-label"], i18n_22, ["class", "form-group row", 4, "ngIf"], ["for", "secret_key", 1, "cd-col-form-label", "required"], i18n_24, [1, "input-group"], ["id", "secret_key", "type", "password", "formControlName", "secret_key", 1, "form-control"], ["type", "button", "cdPasswordButton", "secret_key", 1, "btn", "btn-light"], ["source", "secret_key"], i18n_26]; }, template: function RgwUserSubuserModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "cd-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "upperFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "form", 4, 5)(8, "div", 6)(9, "div", 7)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 7)(15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](16, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, RgwUserSubuserModalComponent_span_19_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](20, RgwUserSubuserModalComponent_span_20_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 7)(22, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](23, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "div", 10)(25, "select", 18)(26, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](27, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](28, RgwUserSubuserModalComponent_option_28_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](30, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](32, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](33, RgwUserSubuserModalComponent_span_33_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](34, RgwUserSubuserModalComponent_fieldset_34_Template, 10, 1, "fieldset", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "div", 27)(36, "cd-form-button-panel", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("submitActionEvent", function RgwUserSubuserModalComponent_Template_cd_form_button_panel_submitActionEvent_36_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](37, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](38, "upperFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("modalRef", ctx.bsModalRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 15, ctx.action))(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 17, ctx.resource));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18nApply"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](23, _c28, !ctx.editing));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("readonly", ctx.editing);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.formGroup.showError("subuid", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.formGroup.showError("subuid", _r0, "subuserIdExists"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](25, _c29));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.formGroup.showError("perm", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.editing);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("form", ctx.formGroup)("submitText", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](37, 19, ctx.action) + " " + _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](38, 21, ctx.resource));
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_6__.CdFormValidationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_7__.CdFormGroupDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_8__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_9__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_10__.AutofocusDirective, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.CheckboxControlValueAccessor, _shared_directives_password_button_directive__WEBPACK_IMPORTED_MODULE_11__.PasswordButtonDirective, _shared_components_copy2clipboard_button_copy2clipboard_button_component__WEBPACK_IMPORTED_MODULE_12__.Copy2ClipboardButtonComponent, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_13__.FormButtonPanelComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.TitleCasePipe, _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_14__.UpperFirstPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZ3ctdXNlci1zdWJ1c2VyLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 84149:
/*!*****************************************************************************************!*\
  !*** ./src/app/ceph/rgw/rgw-user-swift-key-modal/rgw-user-swift-key-modal.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwUserSwiftKeyModalComponent": () => (/* binding */ RgwUserSwiftKeyModalComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _shared_directives_password_button_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/password-button.directive */ 4416);
/* harmony import */ var _shared_components_copy2clipboard_button_copy2clipboard_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/copy2clipboard-button/copy2clipboard-button.component */ 58039);
/* harmony import */ var _shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/back-button/back-button.component */ 13472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/pipes/upper-first.pipe */ 10545);















class RgwUserSwiftKeyModalComponent {
    constructor(activeModal, actionLabels) {
        this.activeModal = activeModal;
        this.actionLabels = actionLabels;
        this.resource = "Swift Key";
        this.action = this.actionLabels.SHOW;
    }
    /**
     * Set the values displayed in the dialog.
     */
    setValues(user, secret_key) {
        this.user = user;
        this.secret_key = secret_key;
    }
}
RgwUserSwiftKeyModalComponent.ɵfac = function RgwUserSwiftKeyModalComponent_Factory(t) { return new (t || RgwUserSwiftKeyModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.ActionLabelsI18n)); };
RgwUserSwiftKeyModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: RgwUserSwiftKeyModalComponent, selectors: [["cd-rgw-user-swift-key-modal"]], decls: 23, vars: 11, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc form title
         */
        const MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_RGW_RGW_USER_SWIFT_KEY_MODAL_RGW_USER_SWIFT_KEY_MODAL_COMPONENT_TS_1 = goog.getMsg("{$interpolation} {$interpolation_1}", { "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
        i18n_0 = MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_RGW_RGW_USER_SWIFT_KEY_MODAL_RGW_USER_SWIFT_KEY_MODAL_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "" + "\uFFFD0\uFFFD" + " " + "\uFFFD1\uFFFD" + "";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5248717555542428023$$SRC_APP_CEPH_RGW_RGW_USER_SWIFT_KEY_MODAL_RGW_USER_SWIFT_KEY_MODAL_COMPONENT_TS_3 = goog.getMsg("Username");
        i18n_2 = MSG_EXTERNAL_5248717555542428023$$SRC_APP_CEPH_RGW_RGW_USER_SWIFT_KEY_MODAL_RGW_USER_SWIFT_KEY_MODAL_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "Username";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5500685598594641035$$SRC_APP_CEPH_RGW_RGW_USER_SWIFT_KEY_MODAL_RGW_USER_SWIFT_KEY_MODAL_COMPONENT_TS_5 = goog.getMsg("Secret key");
        i18n_4 = MSG_EXTERNAL_5500685598594641035$$SRC_APP_CEPH_RGW_RGW_USER_SWIFT_KEY_MODAL_RGW_USER_SWIFT_KEY_MODAL_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "Secret key";
    } return [[3, "modalRef"], [1, "modal-title"], i18n_0, [1, "modal-content"], [1, "modal-body"], ["novalidate", ""], [1, "form-group", "row"], ["for", "user", 1, "cd-col-form-label"], i18n_2, [1, "cd-col-form-input"], ["id", "user", "name", "user", "type", "text", 1, "form-control", 3, "readonly", "ngModel", "ngModelChange"], ["for", "secret_key", 1, "cd-col-form-label"], i18n_4, [1, "input-group"], ["id", "secret_key", "name", "secret_key", "type", "password", 1, "form-control", 3, "ngModel", "readonly", "ngModelChange"], ["type", "button", "cdPasswordButton", "secret_key", 1, "btn", "btn-light"], ["source", "secret_key"], [1, "modal-footer"], [3, "backAction"]]; }, template: function RgwUserSwiftKeyModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "cd-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "upperFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 4)(7, "form", 5)(8, "div", 6)(9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 9)(12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RgwUserSwiftKeyModalComponent_Template_input_ngModelChange_12_listener($event) { return ctx.user = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 6)(14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](15, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 9)(17, "div", 13)(18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RgwUserSwiftKeyModalComponent_Template_input_ngModelChange_18_listener($event) { return ctx.secret_key = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "button", 15)(20, "cd-copy-2-clipboard-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 17)(22, "cd-back-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("backAction", function RgwUserSwiftKeyModalComponent_Template_cd_back_button_backAction_22_listener() { return ctx.activeModal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 7, ctx.action))(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 9, ctx.resource));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nApply"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("readonly", true)("ngModel", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.secret_key)("readonly", true);
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_2__.CdFormGroupDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_3__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_4__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _shared_directives_password_button_directive__WEBPACK_IMPORTED_MODULE_5__.PasswordButtonDirective, _shared_components_copy2clipboard_button_copy2clipboard_button_component__WEBPACK_IMPORTED_MODULE_6__.Copy2ClipboardButtonComponent, _shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_7__.BackButtonComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.TitleCasePipe, _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_8__.UpperFirstPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZ3ctdXNlci1zd2lmdC1rZXktbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 12053:
/*!****************************************!*\
  !*** ./src/app/ceph/rgw/rgw.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwModule": () => (/* binding */ RgwModule),
/* harmony export */   "RoutedRgwModule": () => (/* binding */ RoutedRgwModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var ngx_pipe_function__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-pipe-function */ 47434);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/shared.module */ 44466);
/* harmony import */ var _performance_counter_performance_counter_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../performance-counter/performance-counter.module */ 66265);
/* harmony import */ var _rgw_bucket_details_rgw_bucket_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rgw-bucket-details/rgw-bucket-details.component */ 41797);
/* harmony import */ var _rgw_bucket_form_rgw_bucket_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rgw-bucket-form/rgw-bucket-form.component */ 96238);
/* harmony import */ var _rgw_bucket_list_rgw_bucket_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rgw-bucket-list/rgw-bucket-list.component */ 25794);
/* harmony import */ var _rgw_config_modal_rgw_config_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rgw-config-modal/rgw-config-modal.component */ 53228);
/* harmony import */ var _rgw_daemon_details_rgw_daemon_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rgw-daemon-details/rgw-daemon-details.component */ 86873);
/* harmony import */ var _rgw_daemon_list_rgw_daemon_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rgw-daemon-list/rgw-daemon-list.component */ 84017);
/* harmony import */ var _rgw_user_capability_modal_rgw_user_capability_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rgw-user-capability-modal/rgw-user-capability-modal.component */ 76953);
/* harmony import */ var _rgw_user_details_rgw_user_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rgw-user-details/rgw-user-details.component */ 87404);
/* harmony import */ var _rgw_user_form_rgw_user_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rgw-user-form/rgw-user-form.component */ 88279);
/* harmony import */ var _rgw_user_list_rgw_user_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rgw-user-list/rgw-user-list.component */ 79869);
/* harmony import */ var _rgw_user_s3_key_modal_rgw_user_s3_key_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rgw-user-s3-key-modal/rgw-user-s3-key-modal.component */ 51115);
/* harmony import */ var _rgw_user_subuser_modal_rgw_user_subuser_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rgw-user-subuser-modal/rgw-user-subuser-modal.component */ 23050);
/* harmony import */ var _rgw_user_swift_key_modal_rgw_user_swift_key_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rgw-user-swift-key-modal/rgw-user-swift-key-modal.component */ 84149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 18259);























class RgwModule {
}
RgwModule.ɵfac = function RgwModule_Factory(t) { return new (t || RgwModule)(); };
RgwModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: RgwModule });
RgwModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
            _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
            _performance_counter_performance_counter_module__WEBPACK_IMPORTED_MODULE_2__.PerformanceCounterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbNavModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbTooltipModule,
            ngx_pipe_function__WEBPACK_IMPORTED_MODULE_21__.NgxPipeFunctionModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](RgwModule, { declarations: [_rgw_daemon_list_rgw_daemon_list_component__WEBPACK_IMPORTED_MODULE_8__.RgwDaemonListComponent,
        _rgw_daemon_details_rgw_daemon_details_component__WEBPACK_IMPORTED_MODULE_7__.RgwDaemonDetailsComponent,
        _rgw_bucket_form_rgw_bucket_form_component__WEBPACK_IMPORTED_MODULE_4__.RgwBucketFormComponent,
        _rgw_bucket_list_rgw_bucket_list_component__WEBPACK_IMPORTED_MODULE_5__.RgwBucketListComponent,
        _rgw_bucket_details_rgw_bucket_details_component__WEBPACK_IMPORTED_MODULE_3__.RgwBucketDetailsComponent,
        _rgw_user_list_rgw_user_list_component__WEBPACK_IMPORTED_MODULE_12__.RgwUserListComponent,
        _rgw_user_details_rgw_user_details_component__WEBPACK_IMPORTED_MODULE_10__.RgwUserDetailsComponent,
        _rgw_bucket_form_rgw_bucket_form_component__WEBPACK_IMPORTED_MODULE_4__.RgwBucketFormComponent,
        _rgw_user_form_rgw_user_form_component__WEBPACK_IMPORTED_MODULE_11__.RgwUserFormComponent,
        _rgw_user_swift_key_modal_rgw_user_swift_key_modal_component__WEBPACK_IMPORTED_MODULE_15__.RgwUserSwiftKeyModalComponent,
        _rgw_user_s3_key_modal_rgw_user_s3_key_modal_component__WEBPACK_IMPORTED_MODULE_13__.RgwUserS3KeyModalComponent,
        _rgw_user_capability_modal_rgw_user_capability_modal_component__WEBPACK_IMPORTED_MODULE_9__.RgwUserCapabilityModalComponent,
        _rgw_user_subuser_modal_rgw_user_subuser_modal_component__WEBPACK_IMPORTED_MODULE_14__.RgwUserSubuserModalComponent,
        _rgw_config_modal_rgw_config_modal_component__WEBPACK_IMPORTED_MODULE_6__.RgwConfigModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _performance_counter_performance_counter_module__WEBPACK_IMPORTED_MODULE_2__.PerformanceCounterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbNavModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbTooltipModule,
        ngx_pipe_function__WEBPACK_IMPORTED_MODULE_21__.NgxPipeFunctionModule], exports: [_rgw_daemon_list_rgw_daemon_list_component__WEBPACK_IMPORTED_MODULE_8__.RgwDaemonListComponent,
        _rgw_daemon_details_rgw_daemon_details_component__WEBPACK_IMPORTED_MODULE_7__.RgwDaemonDetailsComponent,
        _rgw_bucket_form_rgw_bucket_form_component__WEBPACK_IMPORTED_MODULE_4__.RgwBucketFormComponent,
        _rgw_bucket_list_rgw_bucket_list_component__WEBPACK_IMPORTED_MODULE_5__.RgwBucketListComponent,
        _rgw_bucket_details_rgw_bucket_details_component__WEBPACK_IMPORTED_MODULE_3__.RgwBucketDetailsComponent,
        _rgw_user_list_rgw_user_list_component__WEBPACK_IMPORTED_MODULE_12__.RgwUserListComponent,
        _rgw_user_details_rgw_user_details_component__WEBPACK_IMPORTED_MODULE_10__.RgwUserDetailsComponent] }); })();
const routes = [
    {
        path: '' // Required for a clean reload on daemon selection.
    },
    { path: 'daemon', component: _rgw_daemon_list_rgw_daemon_list_component__WEBPACK_IMPORTED_MODULE_8__.RgwDaemonListComponent, data: { breadcrumbs: 'Daemons' } },
    {
        path: 'user',
        data: { breadcrumbs: 'Users' },
        children: [
            { path: '', component: _rgw_user_list_rgw_user_list_component__WEBPACK_IMPORTED_MODULE_12__.RgwUserListComponent },
            {
                path: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.URLVerbs.CREATE,
                component: _rgw_user_form_rgw_user_form_component__WEBPACK_IMPORTED_MODULE_11__.RgwUserFormComponent,
                data: { breadcrumbs: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.ActionLabels.CREATE }
            },
            {
                path: `${_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.URLVerbs.EDIT}/:uid`,
                component: _rgw_user_form_rgw_user_form_component__WEBPACK_IMPORTED_MODULE_11__.RgwUserFormComponent,
                data: { breadcrumbs: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.ActionLabels.EDIT }
            }
        ]
    },
    {
        path: 'bucket',
        data: { breadcrumbs: 'Buckets' },
        children: [
            { path: '', component: _rgw_bucket_list_rgw_bucket_list_component__WEBPACK_IMPORTED_MODULE_5__.RgwBucketListComponent },
            {
                path: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.URLVerbs.CREATE,
                component: _rgw_bucket_form_rgw_bucket_form_component__WEBPACK_IMPORTED_MODULE_4__.RgwBucketFormComponent,
                data: { breadcrumbs: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.ActionLabels.CREATE }
            },
            {
                path: `${_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.URLVerbs.EDIT}/:bid`,
                component: _rgw_bucket_form_rgw_bucket_form_component__WEBPACK_IMPORTED_MODULE_4__.RgwBucketFormComponent,
                data: { breadcrumbs: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.ActionLabels.EDIT }
            }
        ]
    }
];
class RoutedRgwModule {
}
RoutedRgwModule.ɵfac = function RoutedRgwModule_Factory(t) { return new (t || RoutedRgwModule)(); };
RoutedRgwModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: RoutedRgwModule });
RoutedRgwModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[RgwModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule.forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](RoutedRgwModule, { imports: [RgwModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule] }); })();


/***/ }),

/***/ 59882:
/*!************************************************!*\
  !*** ./src/app/shared/api/rgw-user.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RgwUserService": () => (/* binding */ RgwUserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 93690);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 42720);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 85816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 67202);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var _app_shared_api_rgw_daemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/rgw-daemon.service */ 20523);
/* harmony import */ var _app_shared_decorators_cd_encode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/decorators/cd-encode */ 93523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 18259);










let RgwUserService = class RgwUserService {
    constructor(http, rgwDaemonService) {
        this.http = http;
        this.rgwDaemonService = rgwDaemonService;
        this.url = 'api/rgw/user';
    }
    /**
     * Get the list of users.
     * @return {Observable<Object[]>}
     */
    list() {
        return this.enumerate().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((uids) => {
            if (uids.length > 0) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)(uids.map((uid) => {
                    return this.get(uid);
                }));
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
        }));
    }
    /**
     * Get the list of usernames.
     * @return {Observable<string[]>}
     */
    enumerate() {
        return this.rgwDaemonService.request((params) => {
            return this.http.get(this.url, { params: params });
        });
    }
    enumerateEmail() {
        return this.rgwDaemonService.request((params) => {
            return this.http.get(`${this.url}/get_emails`, { params: params });
        });
    }
    get(uid) {
        return this.rgwDaemonService.request((params) => {
            return this.http.get(`${this.url}/${uid}`, { params: params });
        });
    }
    getQuota(uid) {
        return this.rgwDaemonService.request((params) => {
            return this.http.get(`${this.url}/${uid}/quota`, { params: params });
        });
    }
    create(args) {
        return this.rgwDaemonService.request((params) => {
            lodash__WEBPACK_IMPORTED_MODULE_0___default().keys(args).forEach((key) => {
                params = params.append(key, args[key]);
            });
            return this.http.post(this.url, null, { params: params });
        });
    }
    update(uid, args) {
        return this.rgwDaemonService.request((params) => {
            lodash__WEBPACK_IMPORTED_MODULE_0___default().keys(args).forEach((key) => {
                params = params.append(key, args[key]);
            });
            return this.http.put(`${this.url}/${uid}`, null, { params: params });
        });
    }
    updateQuota(uid, args) {
        return this.rgwDaemonService.request((params) => {
            lodash__WEBPACK_IMPORTED_MODULE_0___default().keys(args).forEach((key) => {
                params = params.append(key, args[key]);
            });
            return this.http.put(`${this.url}/${uid}/quota`, null, { params: params });
        });
    }
    delete(uid) {
        return this.rgwDaemonService.request((params) => {
            return this.http.delete(`${this.url}/${uid}`, { params: params });
        });
    }
    createSubuser(uid, args) {
        return this.rgwDaemonService.request((params) => {
            lodash__WEBPACK_IMPORTED_MODULE_0___default().keys(args).forEach((key) => {
                params = params.append(key, args[key]);
            });
            return this.http.post(`${this.url}/${uid}/subuser`, null, { params: params });
        });
    }
    deleteSubuser(uid, subuser) {
        return this.rgwDaemonService.request((params) => {
            return this.http.delete(`${this.url}/${uid}/subuser/${subuser}`, { params: params });
        });
    }
    addCapability(uid, type, perm) {
        return this.rgwDaemonService.request((params) => {
            params = params.append('type', type);
            params = params.append('perm', perm);
            return this.http.post(`${this.url}/${uid}/capability`, null, { params: params });
        });
    }
    deleteCapability(uid, type, perm) {
        return this.rgwDaemonService.request((params) => {
            params = params.append('type', type);
            params = params.append('perm', perm);
            return this.http.delete(`${this.url}/${uid}/capability`, { params: params });
        });
    }
    addS3Key(uid, args) {
        return this.rgwDaemonService.request((params) => {
            params = params.append('key_type', 's3');
            lodash__WEBPACK_IMPORTED_MODULE_0___default().keys(args).forEach((key) => {
                params = params.append(key, args[key]);
            });
            return this.http.post(`${this.url}/${uid}/key`, null, { params: params });
        });
    }
    deleteS3Key(uid, accessKey) {
        return this.rgwDaemonService.request((params) => {
            params = params.append('key_type', 's3');
            params = params.append('access_key', accessKey);
            return this.http.delete(`${this.url}/${uid}/key`, { params: params });
        });
    }
    /**
     * Check if the specified user ID exists.
     * @param {string} uid The user ID to check.
     * @return {Observable<boolean>}
     */
    exists(uid) {
        return this.get(uid).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mapTo)(true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
            if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isFunction(error.preventDefault)) {
                error.preventDefault();
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false);
        }));
    }
    // Using @cdEncodeNot would be the preferred way here, but this
    // causes an error: https://tracker.ceph.com/issues/37505
    // Use decodeURIComponent as workaround.
    // emailExists(@cdEncodeNot email: string): Observable<boolean> {
    emailExists(email) {
        email = decodeURIComponent(email);
        return this.enumerateEmail().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((resp) => {
            const index = lodash__WEBPACK_IMPORTED_MODULE_0___default().indexOf(resp, email);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(-1 !== index);
        }));
    }
};
RgwUserService.ɵfac = function RgwUserService_Factory(t) { return new (t || RgwUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_app_shared_api_rgw_daemon_service__WEBPACK_IMPORTED_MODULE_1__.RgwDaemonService)); };
RgwUserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: RgwUserService, factory: RgwUserService.ɵfac, providedIn: 'root' });
RgwUserService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    _app_shared_decorators_cd_encode__WEBPACK_IMPORTED_MODULE_2__.cdEncode,
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient, _app_shared_api_rgw_daemon_service__WEBPACK_IMPORTED_MODULE_1__.RgwDaemonService])
], RgwUserService);



/***/ })

}]);
//# sourceMappingURL=src_app_ceph_rgw_rgw_module_ts.js.map