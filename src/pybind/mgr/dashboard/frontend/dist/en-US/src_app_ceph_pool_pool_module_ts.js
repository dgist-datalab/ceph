"use strict";
(self["webpackChunkceph_dashboard"] = self["webpackChunkceph_dashboard"] || []).push([["src_app_ceph_pool_pool_module_ts"],{

/***/ 34363:
/*!************************************************************************************!*\
  !*** ./src/app/ceph/pool/crush-rule-form-modal/crush-rule-form-modal.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrushRuleFormModalComponent": () => (/* binding */ CrushRuleFormModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_shared_api_crush_rule_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/crush-rule.service */ 83608);
/* harmony import */ var _app_shared_classes_crush_node_selection_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/classes/crush.node.selection.class */ 60228);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-builder */ 62862);
/* harmony import */ var _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/forms/cd-validators */ 82723);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 32337);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/directives/autofocus.directive */ 82945);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/helper/helper.component */ 18372);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 30839);
/* harmony import */ var _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/pipes/upper-first.pipe */ 10545);




























function CrushRuleFormModalComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function CrushRuleFormModalComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function CrushRuleFormModalComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function CrushRuleFormModalComponent_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function CrushRuleFormModalComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bucket_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngValue", bucket_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", bucket_r11.name, " ");
} }
function CrushRuleFormModalComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function CrushRuleFormModalComponent_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function CrushRuleFormModalComponent_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const domain_r12 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngValue", domain_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"](" ", domain_r12, " ( ", ctx_r8.failureDomains[domain_r12].length, " ) ");
} }
function CrushRuleFormModalComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function CrushRuleFormModalComponent_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deviceClass_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngValue", deviceClass_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", deviceClass_r13, " ");
} }
class CrushRuleFormModalComponent extends _app_shared_classes_crush_node_selection_class__WEBPACK_IMPORTED_MODULE_2__.CrushNodeSelectionClass {
    constructor(formBuilder, activeModal, taskWrapper, crushRuleService, actionLabels) {
        super();
        this.formBuilder = formBuilder;
        this.activeModal = activeModal;
        this.taskWrapper = taskWrapper;
        this.crushRuleService = crushRuleService;
        this.actionLabels = actionLabels;
        this.submitAction = new _angular_core__WEBPACK_IMPORTED_MODULE_17__.EventEmitter();
        this.tooltips = this.crushRuleService.formTooltips;
        this.action = this.actionLabels.CREATE;
        this.resource = "Crush Rule";
        this.createForm();
    }
    createForm() {
        this.form = this.formBuilder.group({
            // name: string
            name: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern('[A-Za-z0-9_-]+'),
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('uniqueName', (value) => this.names && this.names.indexOf(value) !== -1)
                ]
            ],
            // root: CrushNode
            root: null,
            // failure_domain: string
            failure_domain: '',
            // device_class: string
            device_class: '' // Replaced with device type if only one exists beneath domain
        });
    }
    ngOnInit() {
        this.crushRuleService
            .getInfo()
            .subscribe(({ names, nodes }) => {
            this.initCrushNodeSelection(nodes, this.form.get('root'), this.form.get('failure_domain'), this.form.get('device_class'));
            this.names = names;
        });
    }
    onSubmit() {
        if (this.form.invalid) {
            this.form.setErrors({ cdSubmitButton: true });
            return;
        }
        const rule = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(this.form.value);
        rule.root = rule.root.name;
        if (rule.device_class === '') {
            delete rule.device_class;
        }
        this.taskWrapper
            .wrapTaskAroundCall({
            task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_6__.FinishedTask('crushRule/create', rule),
            call: this.crushRuleService.create(rule)
        })
            .subscribe({
            error: () => {
                this.form.setErrors({ cdSubmitButton: true });
            },
            complete: () => {
                this.activeModal.close();
                this.submitAction.emit(rule);
            }
        });
    }
}
CrushRuleFormModalComponent.ɵfac = function CrushRuleFormModalComponent_Factory(t) { return new (t || CrushRuleFormModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_4__.CdFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_7__.TaskWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_app_shared_api_crush_rule_service__WEBPACK_IMPORTED_MODULE_1__.CrushRuleService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__.ActionLabelsI18n)); };
CrushRuleFormModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({ type: CrushRuleFormModalComponent, selectors: [["cd-crush-rule-form-modal"]], outputs: { submitAction: "submitAction" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵInheritDefinitionFeature"]], decls: 55, vars: 27, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc form title
         */
        const MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_1 = goog.getMsg("{$interpolation} {$interpolation_1}", { "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
        i18n_0 = MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "" + "\uFFFD0\uFFFD" + " " + "\uFFFD1\uFFFD" + "";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_3 = goog.getMsg("Name");
        i18n_2 = MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "Name";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9169367680120922814$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_5 = goog.getMsg("Root");
        i18n_4 = MSG_EXTERNAL_9169367680120922814$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "Root";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4525362715759041227$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_7 = goog.getMsg("Failure domain type");
        i18n_6 = MSG_EXTERNAL_4525362715759041227$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "Failure domain type";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7136079353894161076$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_9 = goog.getMsg("Device class");
        i18n_8 = MSG_EXTERNAL_7136079353894161076$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_9;
    }
    else {
        i18n_8 = "Device class";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8075138605974581038$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_11 = goog.getMsg("Let Ceph decide");
        i18n_10 = MSG_EXTERNAL_8075138605974581038$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS_11;
    }
    else {
        i18n_10 = "Let Ceph decide";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS__13 = goog.getMsg("This field is required!");
        i18n_12 = MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS__13;
    }
    else {
        i18n_12 = "This field is required!";
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1576206503438015503$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS__15 = goog.getMsg("The name can only consist of alphanumeric characters, dashes and underscores.");
        i18n_14 = MSG_EXTERNAL_1576206503438015503$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS__15;
    }
    else {
        i18n_14 = "The name can only consist of alphanumeric characters, dashes and underscores.";
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1951556666035670157$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS__17 = goog.getMsg("The chosen erasure code profile name is already in use.");
        i18n_16 = MSG_EXTERNAL_1951556666035670157$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS__17;
    }
    else {
        i18n_16 = "The chosen erasure code profile name is already in use.";
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS__19 = goog.getMsg("Loading...");
        i18n_18 = MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS__19;
    }
    else {
        i18n_18 = "Loading...";
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS__21 = goog.getMsg("This field is required!");
        i18n_20 = MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS__21;
    }
    else {
        i18n_20 = "This field is required!";
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS__23 = goog.getMsg("Loading...");
        i18n_22 = MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS__23;
    }
    else {
        i18n_22 = "Loading...";
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS__25 = goog.getMsg("This field is required!");
        i18n_24 = MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_CRUSH_RULE_FORM_MODAL_CRUSH_RULE_FORM_MODAL_COMPONENT_TS__25;
    }
    else {
        i18n_24 = "This field is required!";
    } return [[3, "modalRef"], [1, "modal-title"], i18n_0, [1, "modal-content"], ["novalidate", "", 3, "formGroup"], ["frm", "ngForm"], [1, "modal-body"], [1, "form-group", "row"], ["for", "name", 1, "cd-col-form-label"], i18n_2, [1, "required"], [1, "cd-col-form-input"], ["type", "text", "id", "name", "name", "name", "placeholder", "Name...", "formControlName", "name", "autofocus", "", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "root", 1, "cd-col-form-label"], i18n_4, [3, "html"], ["id", "root", "name", "root", "formControlName", "root", 1, "form-select"], ["ngValue", "", 4, "ngIf"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "failure_domain", 1, "cd-col-form-label"], i18n_6, ["id", "failure_domain", "name", "failure_domain", "formControlName", "failure_domain", 1, "form-select"], ["for", "device_class", 1, "cd-col-form-label"], i18n_8, ["id", "device_class", "name", "device_class", "formControlName", "device_class", 1, "form-select"], ["ngValue", ""], i18n_10, [1, "modal-footer"], [3, "form", "submitText", "submitActionEvent"], [1, "invalid-feedback"], i18n_12, i18n_14, i18n_16, i18n_18, [3, "ngValue"], i18n_20, i18n_22, i18n_24]; }, template: function CrushRuleFormModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "cd-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](4, "upperFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "form", 4, 5)(8, "div", 6)(9, "div", 7)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](16, CrushRuleFormModalComponent_span_16_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](17, CrushRuleFormModalComponent_span_17_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](18, CrushRuleFormModalComponent_span_18_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "div", 7)(20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](22, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](23, "cd-helper", 16)(24, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "div", 11)(26, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](27, CrushRuleFormModalComponent_option_27_Template, 2, 0, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](28, CrushRuleFormModalComponent_option_28_Template, 2, 2, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](29, CrushRuleFormModalComponent_span_29_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "div", 7)(31, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](33, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](34, "cd-helper", 16)(35, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](36, "div", 11)(37, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](38, CrushRuleFormModalComponent_option_38_Template, 2, 0, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](39, CrushRuleFormModalComponent_option_39_Template, 2, 3, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](40, CrushRuleFormModalComponent_span_40_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](41, "div", 7)(42, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](44, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](45, "cd-helper", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](46, "div", 11)(47, "select", 25)(48, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](49, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](50, CrushRuleFormModalComponent_option_50_Template, 2, 2, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](51, "div", 28)(52, "cd-form-button-panel", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("submitActionEvent", function CrushRuleFormModalComponent_Template_cd_form_button_panel_submitActionEvent_52_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](53, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](54, "upperFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 19, ctx.action))(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](4, 21, ctx.resource));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18nApply"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.form.showError("name", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.form.showError("name", _r0, "pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.form.showError("name", _r0, "uniqueName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("html", ctx.tooltips.root);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.buckets);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.buckets);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.form.showError("root", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("html", ctx.tooltips.failure_domain);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.failureDomains);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.failureDomainKeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.form.showError("failure_domain", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("html", ctx.tooltips.device_class);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.devices);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("form", ctx.form)("submitText", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](53, 23, ctx.action) + " " + _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](54, 25, ctx.resource));
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_9__.CdFormValidationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_10__.CdFormGroupDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_11__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_12__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_13__.AutofocusDirective, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_14__.HelperComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_15__.FormButtonPanelComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.TitleCasePipe, _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_16__.UpperFirstPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcnVzaC1ydWxlLWZvcm0tbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 28109:
/*!**************************************************************************************************!*\
  !*** ./src/app/ceph/pool/erasure-code-profile-form/erasure-code-profile-form-modal.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErasureCodeProfileFormModalComponent": () => (/* binding */ ErasureCodeProfileFormModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _app_shared_api_erasure_code_profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/api/erasure-code-profile.service */ 73345);
/* harmony import */ var _app_shared_classes_crush_node_selection_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/classes/crush.node.selection.class */ 60228);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 65862);
/* harmony import */ var _app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-builder */ 62862);
/* harmony import */ var _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/forms/cd-validators */ 82723);
/* harmony import */ var _app_shared_models_erasure_code_profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/models/erasure-code-profile */ 58102);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 32337);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/directives/autofocus.directive */ 82945);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/helper/helper.component */ 18372);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 30839);
/* harmony import */ var _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/pipes/upper-first.pipe */ 10545);





























function ErasureCodeProfileFormModalComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const plugin_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngValue", plugin_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", plugin_r28, " ");
} }
function ErasureCodeProfileFormModalComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nExp"](ctx_r9.deviceCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nApply"](1);
} }
function ErasureCodeProfileFormModalComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nExp"](ctx_r12.lrcMultiK);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nApply"](1);
} }
function ErasureCodeProfileFormModalComponent_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nExp"](ctx_r15.deviceCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nApply"](1);
} }
function ErasureCodeProfileFormModalComponent_div_50_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_div_50_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 7)(1, "label", 62)(2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](3, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "cd-helper", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, ErasureCodeProfileFormModalComponent_div_50_span_7_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, ErasureCodeProfileFormModalComponent_div_50_span_8_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("html", ctx_r16.tooltips.plugins.shec.c);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r16.form.showError("c", _r0, "min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r16.form.showError("c", _r0, "cGreaterM"));
} }
function ErasureCodeProfileFormModalComponent_div_51_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_div_51_ng_container_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nExp"](ctx_r35.getDMin())(ctx_r35.getDMax());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nApply"](1);
} }
function ErasureCodeProfileFormModalComponent_div_51_ng_container_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nExp"](ctx_r36.getDMax());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nApply"](1);
} }
function ErasureCodeProfileFormModalComponent_div_51_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ErasureCodeProfileFormModalComponent_div_51_ng_container_11_span_1_Template, 2, 2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ErasureCodeProfileFormModalComponent_div_51_ng_container_11_span_2_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r32.getDMin() < ctx_r32.getDMax());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r32.getDMin() === ctx_r32.getDMax());
} }
function ErasureCodeProfileFormModalComponent_div_51_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nExp"](ctx_r33.getDMin());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nApply"](1);
} }
function ErasureCodeProfileFormModalComponent_div_51_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nExp"](ctx_r34.getDMax());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nApply"](1);
} }
function ErasureCodeProfileFormModalComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 7)(1, "label", 67)(2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](3, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "cd-helper", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 10)(6, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](7, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ErasureCodeProfileFormModalComponent_div_51_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r37.toggleDCalc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](9, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, ErasureCodeProfileFormModalComponent_div_51_span_10_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](11, ErasureCodeProfileFormModalComponent_div_51_ng_container_11_Template, 3, 2, "ng-container", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](12, ErasureCodeProfileFormModalComponent_div_51_span_12_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](13, ErasureCodeProfileFormModalComponent_div_51_span_13_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("html", ctx_r17.tooltips.plugins.clay.d);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", ctx_r17.dCalc ? ctx_r17.icons.unlock : ctx_r17.icons.lock);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r17.dCalc);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r17.dCalc);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r17.form.showError("d", _r0, "dMin"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r17.form.showError("d", _r0, "dMax"));
} }
function ErasureCodeProfileFormModalComponent_div_52_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_div_52_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_div_52_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 7)(1, "label", 79)(2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](3, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "cd-helper", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, ErasureCodeProfileFormModalComponent_div_52_span_7_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, ErasureCodeProfileFormModalComponent_div_52_span_8_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, ErasureCodeProfileFormModalComponent_div_52_span_9_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](11, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("html", ctx_r18.tooltips.plugins.lrc.l);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r18.form.showError("l", _r0, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r18.form.showError("l", _r0, "min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r18.form.showError("l", _r0, "unequal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nExp"](ctx_r18.lrcGroups);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nApply"](11);
} }
function ErasureCodeProfileFormModalComponent_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const domain_r42 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngValue", domain_r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" ", domain_r42, " ( ", ctx_r20.failureDomains[domain_r42].length, " ) ");
} }
function ErasureCodeProfileFormModalComponent_div_62_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_div_62_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_div_62_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const domain_r46 = ctx.$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngValue", domain_r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" ", domain_r46, " ( ", ctx_r45.failureDomains[domain_r46].length, " ) ");
} }
function ErasureCodeProfileFormModalComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 7)(1, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](3, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "cd-helper", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 10)(6, "select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, ErasureCodeProfileFormModalComponent_div_62_option_7_Template, 2, 0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, ErasureCodeProfileFormModalComponent_div_62_option_8_Template, 2, 0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, ErasureCodeProfileFormModalComponent_div_62_option_9_Template, 2, 3, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("html", ctx_r21.tooltips.plugins.lrc.crushLocality);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r21.failureDomains);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r21.failureDomainKeys.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r21.failureDomainKeys);
} }
function ErasureCodeProfileFormModalComponent_div_63_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const plugin_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngValue", plugin_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", plugin_r48, " ");
} }
const _c90 = function (a0, a1, a2) { return [a0, a1, a2]; };
function ErasureCodeProfileFormModalComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 7)(1, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](3, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "cd-helper", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 10)(6, "select", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, ErasureCodeProfileFormModalComponent_div_63_option_7_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("html", ctx_r22.tooltips.plugins.clay.scalar_mds);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction3"](2, _c90, ctx_r22.PLUGIN.JERASURE, ctx_r22.PLUGIN.ISA, ctx_r22.PLUGIN.SHEC));
} }
function ErasureCodeProfileFormModalComponent_div_64_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technique_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngValue", technique_r50);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", technique_r50, " ");
} }
function ErasureCodeProfileFormModalComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 7)(1, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](3, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "cd-helper", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 10)(6, "select", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, ErasureCodeProfileFormModalComponent_div_64_option_7_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("html", ctx_r23.tooltips.plugins[ctx_r23.plugin].technique);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r23.techniques);
} }
function ErasureCodeProfileFormModalComponent_div_65_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 7)(1, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](3, 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "cd-helper", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, ErasureCodeProfileFormModalComponent_div_65_span_7_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("html", ctx_r24.tooltips.plugins.jerasure.packetSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r24.form.showError("packetSize", _r0, "min"));
} }
function ErasureCodeProfileFormModalComponent_option_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ErasureCodeProfileFormModalComponent_option_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bucket_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngValue", bucket_r52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", bucket_r52.name, " ");
} }
function ErasureCodeProfileFormModalComponent_option_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deviceClass_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngValue", deviceClass_r53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", deviceClass_r53, " ");
} }
class ErasureCodeProfileFormModalComponent extends _app_shared_classes_crush_node_selection_class__WEBPACK_IMPORTED_MODULE_1__.CrushNodeSelectionClass {
    constructor(formBuilder, activeModal, taskWrapper, ecpService, actionLabels) {
        super();
        this.formBuilder = formBuilder;
        this.activeModal = activeModal;
        this.taskWrapper = taskWrapper;
        this.ecpService = ecpService;
        this.actionLabels = actionLabels;
        this.submitAction = new _angular_core__WEBPACK_IMPORTED_MODULE_18__.EventEmitter();
        this.tooltips = this.ecpService.formTooltips;
        this.PLUGIN = {
            LRC: 'lrc',
            SHEC: 'shec',
            CLAY: 'clay',
            JERASURE: 'jerasure',
            ISA: 'isa' // Intel Storage Acceleration
        };
        this.plugin = this.PLUGIN.JERASURE;
        this.icons = _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_3__.Icons;
        this.action = this.actionLabels.CREATE;
        this.resource = "EC Profile";
        this.createForm();
        this.setJerasureDefaults();
    }
    createForm() {
        this.form = this.formBuilder.group({
            name: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.pattern('[A-Za-z0-9_-]+'),
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('uniqueName', (value) => this.names && this.names.indexOf(value) !== -1)
                ]
            ],
            plugin: [this.PLUGIN.JERASURE, [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
            k: [
                4,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required,
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('max', () => this.baseValueValidation(true)),
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('unequal', (v) => this.lrcDataValidation(v)),
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('kLowerM', (v) => this.shecDataValidation(v))
                ]
            ],
            m: [
                2,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('max', () => this.baseValueValidation())]
            ],
            crushFailureDomain: '',
            crushRoot: null,
            crushDeviceClass: '',
            directory: '',
            // Only for 'jerasure', 'clay' and 'isa' use
            technique: 'reed_sol_van',
            // Only for 'jerasure' use
            packetSize: [2048],
            // Only for 'lrc' use
            l: [
                3,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required,
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('unequal', (v) => this.lrcLocalityValidation(v))
                ]
            ],
            crushLocality: '',
            // Only for 'shec' use
            c: [
                2,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required,
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('cGreaterM', (v) => this.shecDurabilityValidation(v))
                ]
            ],
            // Only for 'clay' use
            d: [
                5,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required,
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('dMin', (v) => this.dMinValidation(v)),
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_5__.CdValidators.custom('dMax', (v) => this.dMaxValidation(v))
                ]
            ],
            scalar_mds: [this.PLUGIN.JERASURE, [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]] // jerasure or isa or shec
        });
        this.toggleDCalc();
        this.form.get('k').valueChanges.subscribe(() => this.updateValidityOnChange(['m', 'l', 'd']));
        this.form
            .get('m')
            .valueChanges.subscribe(() => this.updateValidityOnChange(['k', 'l', 'c', 'd']));
        this.form.get('l').valueChanges.subscribe(() => this.updateValidityOnChange(['k', 'm']));
        this.form.get('plugin').valueChanges.subscribe((plugin) => this.onPluginChange(plugin));
        this.form.get('scalar_mds').valueChanges.subscribe(() => this.setClayDefaultsForScalar());
    }
    baseValueValidation(dataChunk = false) {
        return this.validValidation(() => {
            return (this.getKMSum() > this.deviceCount &&
                this.form.getValue('k') > this.form.getValue('m') === dataChunk);
        });
    }
    validValidation(fn, plugin) {
        if (!this.form || plugin ? this.plugin !== plugin : false) {
            return false;
        }
        return fn();
    }
    getKMSum() {
        return this.form.getValue('k') + this.form.getValue('m');
    }
    lrcDataValidation(k) {
        return this.validValidation(() => {
            const m = this.form.getValue('m');
            const l = this.form.getValue('l');
            const km = k + m;
            this.lrcMultiK = k / (km / l);
            return k % (km / l) !== 0;
        }, 'lrc');
    }
    shecDataValidation(k) {
        return this.validValidation(() => {
            const m = this.form.getValue('m');
            return m > k;
        }, 'shec');
    }
    lrcLocalityValidation(l) {
        return this.validValidation(() => {
            const value = this.getKMSum();
            this.lrcGroups = l > 0 ? value / l : 0;
            return l > 0 && value % l !== 0;
        }, 'lrc');
    }
    shecDurabilityValidation(c) {
        return this.validValidation(() => {
            const m = this.form.getValue('m');
            return c > m;
        }, 'shec');
    }
    dMinValidation(d) {
        return this.validValidation(() => this.getDMin() > d, 'clay');
    }
    getDMin() {
        return this.form.getValue('k') + 1;
    }
    dMaxValidation(d) {
        return this.validValidation(() => d > this.getDMax(), 'clay');
    }
    getDMax() {
        const m = this.form.getValue('m');
        const k = this.form.getValue('k');
        return k + m - 1;
    }
    toggleDCalc() {
        this.dCalc = !this.dCalc;
        this.form.get('d')[this.dCalc ? 'disable' : 'enable']();
        this.calculateD();
    }
    calculateD() {
        if (this.plugin !== this.PLUGIN.CLAY || !this.dCalc) {
            return;
        }
        this.form.silentSet('d', this.getDMax());
    }
    updateValidityOnChange(names) {
        names.forEach((name) => {
            if (name === 'd') {
                this.calculateD();
            }
            this.form.get(name).updateValueAndValidity({ emitEvent: false });
        });
    }
    onPluginChange(plugin) {
        this.plugin = plugin;
        if (plugin === this.PLUGIN.JERASURE) {
            this.setJerasureDefaults();
        }
        else if (plugin === this.PLUGIN.LRC) {
            this.setLrcDefaults();
        }
        else if (plugin === this.PLUGIN.ISA) {
            this.setIsaDefaults();
        }
        else if (plugin === this.PLUGIN.SHEC) {
            this.setShecDefaults();
        }
        else if (plugin === this.PLUGIN.CLAY) {
            this.setClayDefaults();
        }
        this.updateValidityOnChange(['m']); // Triggers k, m, c, d and l
    }
    setJerasureDefaults() {
        this.techniques = [
            'reed_sol_van',
            'reed_sol_r6_op',
            'cauchy_orig',
            'cauchy_good',
            'liberation',
            'blaum_roth',
            'liber8tion'
        ];
        this.setDefaults({
            k: 4,
            m: 2,
            technique: 'reed_sol_van'
        });
    }
    setLrcDefaults() {
        this.setDefaults({
            k: 4,
            m: 2,
            l: 3
        });
    }
    setIsaDefaults() {
        /**
         * Actually k and m are not required - but they will be set to the default values in case
         * if they are not set, therefore it's fine to mark them as required in order to get
         * strange values that weren't set.
         */
        this.techniques = ['reed_sol_van', 'cauchy'];
        this.setDefaults({
            k: 7,
            m: 3,
            technique: 'reed_sol_van'
        });
    }
    setShecDefaults() {
        /**
         * Actually k, c and m are not required - but they will be set to the default values in case
         * if they are not set, therefore it's fine to mark them as required in order to get
         * strange values that weren't set.
         */
        this.setDefaults({
            k: 4,
            m: 3,
            c: 2
        });
    }
    setClayDefaults() {
        /**
         * Actually d and scalar_mds are not required - but they will be set to show the default values
         * in case if they are not set, therefore it's fine to mark them as required in order to not get
         * strange values that weren't set.
         *
         * As d would be set to the value k+m-1 for the greatest savings, the form will
         * automatically update d if the automatic calculation is activated (default).
         */
        this.setDefaults({
            k: 4,
            m: 2,
            // d: 5, <- Will be automatically update to 5
            scalar_mds: this.PLUGIN.JERASURE
        });
        this.setClayDefaultsForScalar();
    }
    setClayDefaultsForScalar() {
        const plugin = this.form.getValue('scalar_mds');
        let defaultTechnique = 'reed_sol_van';
        if (plugin === this.PLUGIN.JERASURE) {
            this.techniques = [
                'reed_sol_van',
                'reed_sol_r6_op',
                'cauchy_orig',
                'cauchy_good',
                'liber8tion'
            ];
        }
        else if (plugin === this.PLUGIN.ISA) {
            this.techniques = ['reed_sol_van', 'cauchy'];
        }
        else {
            // this.PLUGIN.SHEC
            defaultTechnique = 'single';
            this.techniques = ['single', 'multiple'];
        }
        this.setDefaults({ technique: defaultTechnique });
    }
    setDefaults(defaults) {
        Object.keys(defaults).forEach((controlName) => {
            const control = this.form.get(controlName);
            const value = control.value;
            /**
             * As k, m, c and l are now set touched and dirty on the beginning, plugin change will
             * overwrite their values as we can't determine if the user has changed anything.
             * k and m can have two default values where as l and c can only have one,
             * so there is no need to overwrite them.
             */
            const overwrite = control.pristine ||
                (controlName === 'technique' && !this.techniques.includes(value)) ||
                (controlName === 'k' && [4, 7].includes(value)) ||
                (controlName === 'm' && [2, 3].includes(value));
            if (overwrite) {
                control.setValue(defaults[controlName]); // also validates new value
            }
            else {
                control.updateValueAndValidity();
            }
        });
    }
    ngOnInit() {
        this.ecpService
            .getInfo()
            .subscribe(({ plugins, names, directory, nodes }) => {
            this.initCrushNodeSelection(nodes, this.form.get('crushRoot'), this.form.get('crushFailureDomain'), this.form.get('crushDeviceClass'));
            this.plugins = plugins;
            this.names = names;
            this.form.silentSet('directory', directory);
            this.preValidateNumericInputFields();
        });
    }
    /**
     * This allows k, m, l and c to be validated instantly on change, before the
     * fields got changed before by the user.
     */
    preValidateNumericInputFields() {
        const kml = ['k', 'm', 'l', 'c', 'd'].map((name) => this.form.get(name));
        kml.forEach((control) => {
            control.markAsTouched();
            control.markAsDirty();
        });
        kml[1].updateValueAndValidity(); // Update validity of k, m, c, d and l
    }
    onSubmit() {
        if (this.form.invalid) {
            this.form.setErrors({ cdSubmitButton: true });
            return;
        }
        const profile = this.createJson();
        this.taskWrapper
            .wrapTaskAroundCall({
            task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_7__.FinishedTask('ecp/create', { name: profile.name }),
            call: this.ecpService.create(profile)
        })
            .subscribe({
            error: () => {
                this.form.setErrors({ cdSubmitButton: true });
            },
            complete: () => {
                this.activeModal.close();
                this.submitAction.emit(profile);
            }
        });
    }
    createJson() {
        const pluginControls = {
            technique: [this.PLUGIN.ISA, this.PLUGIN.JERASURE, this.PLUGIN.CLAY],
            packetSize: [this.PLUGIN.JERASURE],
            l: [this.PLUGIN.LRC],
            crushLocality: [this.PLUGIN.LRC],
            c: [this.PLUGIN.SHEC],
            d: [this.PLUGIN.CLAY],
            scalar_mds: [this.PLUGIN.CLAY]
        };
        const ecp = new _app_shared_models_erasure_code_profile__WEBPACK_IMPORTED_MODULE_6__.ErasureCodeProfile();
        const plugin = this.form.getValue('plugin');
        Object.keys(this.form.controls)
            .filter((name) => {
            const pluginControl = pluginControls[name];
            const value = this.form.getValue(name);
            const usable = (pluginControl && pluginControl.includes(plugin)) || !pluginControl;
            return usable && value && value !== '';
        })
            .forEach((name) => {
            this.extendJson(name, ecp);
        });
        return ecp;
    }
    extendJson(name, ecp) {
        const differentApiAttributes = {
            crushFailureDomain: 'crush-failure-domain',
            crushRoot: 'crush-root',
            crushDeviceClass: 'crush-device-class',
            packetSize: 'packetsize',
            crushLocality: 'crush-locality'
        };
        const value = this.form.getValue(name);
        ecp[differentApiAttributes[name] || name] = name === 'crushRoot' ? value.name : value;
    }
}
ErasureCodeProfileFormModalComponent.ɵfac = function ErasureCodeProfileFormModalComponent_Factory(t) { return new (t || ErasureCodeProfileFormModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_4__.CdFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_8__.TaskWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_app_shared_api_erasure_code_profile_service__WEBPACK_IMPORTED_MODULE_0__.ErasureCodeProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__.ActionLabelsI18n)); };
ErasureCodeProfileFormModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: ErasureCodeProfileFormModalComponent, selectors: [["cd-erasure-code-profile-form-modal"]], outputs: { submitAction: "submitAction" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]], decls: 98, vars: 53, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc form title
         */
        const MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_1 = goog.getMsg("{$interpolation} {$interpolation_1}", { "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
        i18n_0 = MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "" + "\uFFFD0\uFFFD" + " " + "\uFFFD1\uFFFD" + "";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_3 = goog.getMsg("Name");
        i18n_2 = MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "Name";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4562362040556606648$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_5 = goog.getMsg("Plugin");
        i18n_4 = MSG_EXTERNAL_4562362040556606648$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "Plugin";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7955887200666997467$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_7 = goog.getMsg("Data chunks (k)");
        i18n_6 = MSG_EXTERNAL_7955887200666997467$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "Data chunks (k)";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1471879088759639523$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_9 = goog.getMsg("Coding chunks (m)");
        i18n_8 = MSG_EXTERNAL_1471879088759639523$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_9;
    }
    else {
        i18n_8 = "Coding chunks (m)";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5489807080482456498$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_11 = goog.getMsg("Crush failure domain");
        i18n_10 = MSG_EXTERNAL_5489807080482456498$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_11;
    }
    else {
        i18n_10 = "Crush failure domain";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6046264436151872561$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_13 = goog.getMsg("Crush root");
        i18n_12 = MSG_EXTERNAL_6046264436151872561$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_13;
    }
    else {
        i18n_12 = "Crush root";
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2641000698188090134$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_15 = goog.getMsg("Crush device class");
        i18n_14 = MSG_EXTERNAL_2641000698188090134$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_15;
    }
    else {
        i18n_14 = "Crush device class";
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8075138605974581038$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_17 = goog.getMsg("Let Ceph decide");
        i18n_16 = MSG_EXTERNAL_8075138605974581038$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_17;
    }
    else {
        i18n_16 = "Let Ceph decide";
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6229695115677974088$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_19 = goog.getMsg("Available OSDs: {$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_18 = MSG_EXTERNAL_6229695115677974088$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_19;
    }
    else {
        i18n_18 = "Available OSDs: " + "\uFFFD0\uFFFD" + "";
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5256256049865563765$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_21 = goog.getMsg("Directory");
        i18n_20 = MSG_EXTERNAL_5256256049865563765$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS_21;
    }
    else {
        i18n_20 = "Directory";
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__23 = goog.getMsg("This field is required!");
        i18n_22 = MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__23;
    }
    else {
        i18n_22 = "This field is required!";
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1576206503438015503$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__25 = goog.getMsg("The name can only consist of alphanumeric characters, dashes and underscores.");
        i18n_24 = MSG_EXTERNAL_1576206503438015503$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__25;
    }
    else {
        i18n_24 = "The name can only consist of alphanumeric characters, dashes and underscores.";
    } let i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1951556666035670157$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__27 = goog.getMsg("The chosen erasure code profile name is already in use.");
        i18n_26 = MSG_EXTERNAL_1951556666035670157$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__27;
    }
    else {
        i18n_26 = "The chosen erasure code profile name is already in use.";
    } let i18n_28; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__29 = goog.getMsg("Loading...");
        i18n_28 = MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__29;
    }
    else {
        i18n_28 = "Loading...";
    } let i18n_30; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__31 = goog.getMsg("This field is required!");
        i18n_30 = MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__31;
    }
    else {
        i18n_30 = "This field is required!";
    } let i18n_32; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__33 = goog.getMsg("This field is required!");
        i18n_32 = MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__33;
    }
    else {
        i18n_32 = "This field is required!";
    } let i18n_34; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8474704684464173948$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__35 = goog.getMsg("Must be equal to or greater than 2.");
        i18n_34 = MSG_EXTERNAL_8474704684464173948$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__35;
    }
    else {
        i18n_34 = "Must be equal to or greater than 2.";
    } let i18n_36; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3359836088137801733$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__37 = goog.getMsg("Chunks (k+m) have exceeded the available OSDs of {$interpolation}.", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_36 = MSG_EXTERNAL_3359836088137801733$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__37;
    }
    else {
        i18n_36 = "Chunks (k+m) have exceeded the available OSDs of " + "\uFFFD0\uFFFD" + ".";
    } let i18n_38; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3917858926503912155$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__39 = goog.getMsg("For an equal distribution k has to be a multiple of (k+m)/l.");
        i18n_38 = MSG_EXTERNAL_3917858926503912155$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__39;
    }
    else {
        i18n_38 = "For an equal distribution k has to be a multiple of (k+m)/l.";
    } let i18n_40; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9208623611694278127$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__41 = goog.getMsg("K has to be equal to or greater than m in order to recover data correctly through c.");
        i18n_40 = MSG_EXTERNAL_9208623611694278127$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__41;
    }
    else {
        i18n_40 = "K has to be equal to or greater than m in order to recover data correctly through c.";
    } let i18n_42; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2764950342107258730$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__43 = goog.getMsg("Distribution factor: {$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_42 = MSG_EXTERNAL_2764950342107258730$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__43;
    }
    else {
        i18n_42 = "Distribution factor: " + "\uFFFD0\uFFFD" + "";
    } let i18n_44; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__45 = goog.getMsg("This field is required!");
        i18n_44 = MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__45;
    }
    else {
        i18n_44 = "This field is required!";
    } let i18n_46; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5366066218193149651$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__47 = goog.getMsg("Must be equal to or greater than 1.");
        i18n_46 = MSG_EXTERNAL_5366066218193149651$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__47;
    }
    else {
        i18n_46 = "Must be equal to or greater than 1.";
    } let i18n_48; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3359836088137801733$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__49 = goog.getMsg("Chunks (k+m) have exceeded the available OSDs of {$interpolation}.", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_48 = MSG_EXTERNAL_3359836088137801733$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__49;
    }
    else {
        i18n_48 = "Chunks (k+m) have exceeded the available OSDs of " + "\uFFFD0\uFFFD" + ".";
    } let i18n_50; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1759957197988313421$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__51 = goog.getMsg("Durability estimator (c)");
        i18n_50 = MSG_EXTERNAL_1759957197988313421$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__51;
    }
    else {
        i18n_50 = "Durability estimator (c)";
    } let i18n_52; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5366066218193149651$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___53 = goog.getMsg("Must be equal to or greater than 1.");
        i18n_52 = MSG_EXTERNAL_5366066218193149651$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___53;
    }
    else {
        i18n_52 = "Must be equal to or greater than 1.";
    } let i18n_54; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8961048959373432308$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___55 = goog.getMsg("C has to be equal to or lower than m as m defines the amount of chunks that can be used.");
        i18n_54 = MSG_EXTERNAL_8961048959373432308$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___55;
    }
    else {
        i18n_54 = "C has to be equal to or lower than m as m defines the amount of chunks that can be used.";
    } let i18n_56; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2038593409574317326$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__57 = goog.getMsg("Helper chunks (d)");
        i18n_56 = MSG_EXTERNAL_2038593409574317326$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__57;
    }
    else {
        i18n_56 = "Helper chunks (d)";
    } let i18n_58; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1704211354004450752$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__59 = goog.getMsg("Set d manually or use the plugin's default calculation that maximizes d.");
        i18n_58 = MSG_EXTERNAL_1704211354004450752$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__59;
    }
    else {
        i18n_58 = "Set d manually or use the plugin's default calculation that maximizes d.";
    } let i18n_60; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1888025761663541097$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___61 = goog.getMsg("D is automatically updated on k and m changes");
        i18n_60 = MSG_EXTERNAL_1888025761663541097$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___61;
    }
    else {
        i18n_60 = "D is automatically updated on k and m changes";
    } let i18n_62; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7955996980541003424$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS____63 = goog.getMsg("D can be set from {$interpolation} to {$interpolation_1}", { "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
        i18n_62 = MSG_EXTERNAL_7955996980541003424$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS____63;
    }
    else {
        i18n_62 = "D can be set from " + "\uFFFD0\uFFFD" + " to " + "\uFFFD1\uFFFD" + "";
    } let i18n_64; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5777341828354086382$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS____65 = goog.getMsg("D can only be set to {$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_64 = MSG_EXTERNAL_5777341828354086382$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS____65;
    }
    else {
        i18n_64 = "D can only be set to " + "\uFFFD0\uFFFD" + "";
    } let i18n_66; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5713559827745087589$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___67 = goog.getMsg("D has to be greater than k ({$interpolation}).", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_66 = MSG_EXTERNAL_5713559827745087589$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___67;
    }
    else {
        i18n_66 = "D has to be greater than k (" + "\uFFFD0\uFFFD" + ").";
    } let i18n_68; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7286956565403634147$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___69 = goog.getMsg("D has to be lower than k + m ({$interpolation}).", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_68 = MSG_EXTERNAL_7286956565403634147$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___69;
    }
    else {
        i18n_68 = "D has to be lower than k + m (" + "\uFFFD0\uFFFD" + ").";
    } let i18n_70; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5810495024055124667$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__71 = goog.getMsg("Locality (l)");
        i18n_70 = MSG_EXTERNAL_5810495024055124667$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__71;
    }
    else {
        i18n_70 = "Locality (l)";
    } let i18n_72; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1697705454616708510$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__73 = goog.getMsg("Locality groups: {$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_72 = MSG_EXTERNAL_1697705454616708510$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__73;
    }
    else {
        i18n_72 = "Locality groups: " + "\uFFFD0\uFFFD" + "";
    } let i18n_74; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___75 = goog.getMsg("This field is required!");
        i18n_74 = MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___75;
    }
    else {
        i18n_74 = "This field is required!";
    } let i18n_76; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5366066218193149651$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___77 = goog.getMsg("Must be equal to or greater than 1.");
        i18n_76 = MSG_EXTERNAL_5366066218193149651$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___77;
    }
    else {
        i18n_76 = "Must be equal to or greater than 1.";
    } let i18n_78; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2767541069843337993$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___79 = goog.getMsg("Can't split up chunks (k+m) correctly with the current locality.");
        i18n_78 = MSG_EXTERNAL_2767541069843337993$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___79;
    }
    else {
        i18n_78 = "Can't split up chunks (k+m) correctly with the current locality.";
    } let i18n_80; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__81 = goog.getMsg("Loading...");
        i18n_80 = MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__81;
    }
    else {
        i18n_80 = "Loading...";
    } let i18n_82; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4728165402618807403$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__83 = goog.getMsg("Crush Locality");
        i18n_82 = MSG_EXTERNAL_4728165402618807403$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__83;
    }
    else {
        i18n_82 = "Crush Locality";
    } let i18n_84; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___85 = goog.getMsg("Loading...");
        i18n_84 = MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___85;
    }
    else {
        i18n_84 = "Loading...";
    } let i18n_86; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6252070156626006029$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___87 = goog.getMsg("None");
        i18n_86 = MSG_EXTERNAL_6252070156626006029$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___87;
    }
    else {
        i18n_86 = "None";
    } let i18n_88; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_236060313699362274$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__89 = goog.getMsg("Scalar mds");
        i18n_88 = MSG_EXTERNAL_236060313699362274$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__89;
    }
    else {
        i18n_88 = "Scalar mds";
    } let i18n_91; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3248445660509657942$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__92 = goog.getMsg("Technique");
        i18n_91 = MSG_EXTERNAL_3248445660509657942$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__92;
    }
    else {
        i18n_91 = "Technique";
    } let i18n_93; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8649008147509815275$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__94 = goog.getMsg("Packetsize");
        i18n_93 = MSG_EXTERNAL_8649008147509815275$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__94;
    }
    else {
        i18n_93 = "Packetsize";
    } let i18n_95; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5366066218193149651$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___96 = goog.getMsg("Must be equal to or greater than 1.");
        i18n_95 = MSG_EXTERNAL_5366066218193149651$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS___96;
    }
    else {
        i18n_95 = "Must be equal to or greater than 1.";
    } let i18n_97; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__98 = goog.getMsg("Loading...");
        i18n_97 = MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_POOL_ERASURE_CODE_PROFILE_FORM_ERASURE_CODE_PROFILE_FORM_MODAL_COMPONENT_TS__98;
    }
    else {
        i18n_97 = "Loading...";
    } return [[3, "modalRef"], [1, "modal-title"], i18n_0, [1, "modal-content"], ["novalidate", "", 3, "formGroup"], ["frm", "ngForm"], [1, "modal-body"], [1, "form-group", "row"], ["for", "name", 1, "cd-col-form-label"], i18n_2, [1, "cd-col-form-input"], ["type", "text", "id", "name", "name", "name", "placeholder", "Name...", "formControlName", "name", "autofocus", "", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "plugin", 1, "cd-col-form-label"], [1, "required"], i18n_4, [3, "html"], ["id", "plugin", "name", "plugin", "formControlName", "plugin", 1, "form-select"], ["ngValue", "", 4, "ngIf"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "k", 1, "cd-col-form-label"], i18n_6, ["type", "number", "id", "k", "name", "k", "ng-model", "$ctrl.erasureCodeProfile.k", "placeholder", "Data chunks...", "formControlName", "k", "min", "2", 1, "form-control"], ["class", "form-text text-muted", 4, "ngIf"], ["for", "m", 1, "cd-col-form-label"], i18n_8, ["type", "number", "id", "m", "name", "m", "placeholder", "Coding chunks...", "formControlName", "m", "min", "1", 1, "form-control"], ["class", "form-group row", 4, "ngIf"], ["for", "crushFailureDomain", 1, "cd-col-form-label"], i18n_10, ["id", "crushFailureDomain", "name", "crushFailureDomain", "formControlName", "crushFailureDomain", 1, "form-select"], ["for", "crushRoot", 1, "cd-col-form-label"], i18n_12, ["id", "crushRoot", "name", "crushRoot", "formControlName", "crushRoot", 1, "form-select"], ["for", "crushDeviceClass", 1, "cd-col-form-label"], i18n_14, ["id", "crushDeviceClass", "name", "crushDeviceClass", "formControlName", "crushDeviceClass", 1, "form-select"], ["ngValue", ""], i18n_16, [1, "form-text", "text-muted"], i18n_18, ["for", "directory", 1, "cd-col-form-label"], i18n_20, ["type", "text", "id", "directory", "name", "directory", "placeholder", "Path...", "formControlName", "directory", 1, "form-control"], [1, "modal-footer"], [3, "form", "submitText", "submitActionEvent"], [1, "invalid-feedback"], i18n_22, i18n_24, i18n_26, i18n_28, [3, "ngValue"], i18n_30, i18n_32, i18n_34, i18n_36, i18n_38, i18n_40, i18n_42, i18n_44, i18n_46, i18n_48, ["for", "c", 1, "cd-col-form-label"], i18n_50, ["type", "number", "id", "c", "name", "c", "placeholder", "Coding chunks...", "formControlName", "c", "min", "1", 1, "form-control"], i18n_52, i18n_54, ["for", "d", 1, "cd-col-form-label"], i18n_56, [1, "input-group"], ["type", "number", "id", "d", "name", "d", "placeholder", "Helper chunks...", "formControlName", "d", 1, "form-control"], ["id", "d-calc-btn", "ngbTooltip", i18n_58, "type", "button", 1, "btn", "btn-light", 3, "click"], ["aria-hidden", "true", 3, "ngClass"], [4, "ngIf"], i18n_60, i18n_62, i18n_64, i18n_66, i18n_68, ["for", "l", 1, "cd-col-form-label"], i18n_70, ["type", "number", "id", "l", "name", "l", "placeholder", "Coding chunks...", "formControlName", "l", "min", "1", 1, "form-control"], i18n_72, i18n_74, i18n_76, i18n_78, i18n_80, ["for", "crushLocality", 1, "cd-col-form-label"], i18n_82, ["id", "crushLocality", "name", "crushLocality", "formControlName", "crushLocality", 1, "form-select"], i18n_84, i18n_86, ["for", "scalar_mds", 1, "cd-col-form-label"], i18n_88, ["id", "scalar_mds", "name", "scalar_mds", "formControlName", "scalar_mds", 1, "form-select"], ["for", "technique", 1, "cd-col-form-label"], i18n_91, ["id", "technique", "name", "technique", "formControlName", "technique", 1, "form-select"], ["for", "packetSize", 1, "cd-col-form-label"], i18n_93, ["type", "number", "id", "packetSize", "name", "packetSize", "placeholder", "Packetsize...", "formControlName", "packetSize", "min", "1", 1, "form-control"], i18n_95, i18n_97]; }, template: function ErasureCodeProfileFormModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "cd-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "upperFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "form", 4, 5)(8, "div", 6)(9, "div", 7)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](14, ErasureCodeProfileFormModalComponent_span_14_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, ErasureCodeProfileFormModalComponent_span_15_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](16, ErasureCodeProfileFormModalComponent_span_16_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "div", 7)(18, "label", 13)(19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](20, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](21, "cd-helper", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "div", 10)(23, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](24, ErasureCodeProfileFormModalComponent_option_24_Template, 2, 0, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](25, ErasureCodeProfileFormModalComponent_option_25_Template, 2, 2, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](26, ErasureCodeProfileFormModalComponent_span_26_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "div", 7)(28, "label", 20)(29, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](30, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](31, "cd-helper", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](33, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](34, ErasureCodeProfileFormModalComponent_span_34_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](35, ErasureCodeProfileFormModalComponent_span_35_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](36, ErasureCodeProfileFormModalComponent_span_36_Template, 2, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](37, ErasureCodeProfileFormModalComponent_span_37_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](38, ErasureCodeProfileFormModalComponent_span_38_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](39, ErasureCodeProfileFormModalComponent_span_39_Template, 2, 1, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](40, "div", 7)(41, "label", 24)(42, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](43, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](44, "cd-helper", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](46, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](47, ErasureCodeProfileFormModalComponent_span_47_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](48, ErasureCodeProfileFormModalComponent_span_48_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](49, ErasureCodeProfileFormModalComponent_span_49_Template, 2, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](50, ErasureCodeProfileFormModalComponent_div_50_Template, 9, 3, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](51, ErasureCodeProfileFormModalComponent_div_51_Template, 14, 6, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](52, ErasureCodeProfileFormModalComponent_div_52_Template, 12, 5, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](53, "div", 7)(54, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](56, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](57, "cd-helper", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](58, "div", 10)(59, "select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](60, ErasureCodeProfileFormModalComponent_option_60_Template, 2, 0, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](61, ErasureCodeProfileFormModalComponent_option_61_Template, 2, 3, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](62, ErasureCodeProfileFormModalComponent_div_62_Template, 10, 4, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](63, ErasureCodeProfileFormModalComponent_div_63_Template, 8, 6, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](64, ErasureCodeProfileFormModalComponent_div_64_Template, 8, 2, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](65, ErasureCodeProfileFormModalComponent_div_65_Template, 8, 2, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](66, "div", 7)(67, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](69, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](70, "cd-helper", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](71, "div", 10)(72, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](73, ErasureCodeProfileFormModalComponent_option_73_Template, 2, 0, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](74, ErasureCodeProfileFormModalComponent_option_74_Template, 2, 2, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](75, "div", 7)(76, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](78, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](79, "cd-helper", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](80, "div", 10)(81, "select", 36)(82, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](83, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](84, ErasureCodeProfileFormModalComponent_option_84_Template, 2, 2, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](85, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](86, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](87, "div", 7)(88, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](90, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](91, "cd-helper", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](92, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](93, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](94, "div", 44)(95, "cd-form-button-panel", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("submitActionEvent", function ErasureCodeProfileFormModalComponent_Template_cd_form_button_panel_submitActionEvent_95_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](96, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](97, "upperFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 41, ctx.action))(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 43, ctx.resource));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nApply"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.form.showError("name", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.form.showError("name", _r0, "pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.form.showError("name", _r0, "uniqueName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("html", ctx.tooltips.plugins[ctx.plugin].description);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.plugins);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.plugins);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.form.showError("name", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("html", ctx.tooltips.k);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.form.showError("k", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.form.showError("k", _r0, "min"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.form.showError("k", _r0, "max"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.form.showError("k", _r0, "unequal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.form.showError("k", _r0, "kLowerM"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.plugin === "lrc");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("html", ctx.tooltips.m);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.form.showError("m", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.form.showError("m", _r0, "min"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.form.showError("m", _r0, "max"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.plugin === "shec");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.plugin === "clay");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.plugin === ctx.PLUGIN.LRC);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("html", ctx.tooltips.crushFailureDomain);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.failureDomains);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.failureDomainKeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.plugin === ctx.PLUGIN.LRC);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.PLUGIN.CLAY === ctx.plugin);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction3"](49, _c90, ctx.PLUGIN.JERASURE, ctx.PLUGIN.ISA, ctx.PLUGIN.CLAY).includes(ctx.plugin));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.plugin === ctx.PLUGIN.JERASURE);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("html", ctx.tooltips.crushRoot);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.buckets);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.buckets);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("html", ctx.tooltips.crushDeviceClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.devices);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nExp"](ctx.deviceCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18nApply"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("html", ctx.tooltips.directory);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("form", ctx.form)("submitText", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](96, 45, ctx.action) + " " + _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](97, 47, ctx.resource));
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_10__.CdFormValidationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_11__.CdFormGroupDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_12__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_13__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControlName, _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_14__.AutofocusDirective, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_15__.HelperComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.MinValidator, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_16__.FormButtonPanelComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.TitleCasePipe, _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_17__.UpperFirstPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcmFzdXJlLWNvZGUtcHJvZmlsZS1mb3JtLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 69094:
/*!******************************************************************!*\
  !*** ./src/app/ceph/pool/pool-details/pool-details.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoolDetailsComponent": () => (/* binding */ PoolDetailsComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/pool.service */ 80842);
/* harmony import */ var _app_shared_classes_cd_helper_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/classes/cd-helper.class */ 51295);
/* harmony import */ var _app_shared_models_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/models/permissions */ 56797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_directives_stateful_tab_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/stateful-tab.directive */ 59376);
/* harmony import */ var _shared_datatable_table_key_value_table_key_value_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/datatable/table-key-value/table-key-value.component */ 61350);
/* harmony import */ var _shared_components_grafana_grafana_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/grafana/grafana.component */ 76317);
/* harmony import */ var _block_rbd_configuration_list_rbd_configuration_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../block/rbd-configuration-list/rbd-configuration-list.component */ 56467);
/* harmony import */ var _shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/datatable/table/table.component */ 35905);













function PoolDetailsComponent_ng_container_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "cd-table-key-value", 12);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("renderObjects", true)("data", ctx_r2.poolDetails)("autoReload", false);
} }
function PoolDetailsComponent_ng_container_0_ng_container_7_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "cd-grafana", 15);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("grafanaPath", "ceph-pool-detail?var-pool_name=", ctx_r6.selection.pool_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", "metrics");
} }
function PoolDetailsComponent_ng_container_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](2, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, PoolDetailsComponent_ng_container_0_ng_container_7_ng_template_3_Template, 1, 2, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function PoolDetailsComponent_ng_container_0_ng_container_8_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "cd-rbd-configuration-table", 18);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx_r7.selectedPoolConfiguration);
} }
function PoolDetailsComponent_ng_container_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](2, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, PoolDetailsComponent_ng_container_0_ng_container_8_ng_template_3_Template, 1, 1, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function PoolDetailsComponent_ng_container_0_ng_container_9_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "cd-table", 21);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx_r8.cacheTiers)("columns", ctx_r8.cacheTierColumns)("autoSave", false);
} }
function PoolDetailsComponent_ng_container_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](2, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, PoolDetailsComponent_ng_container_0_ng_container_9_ng_template_3_Template, 1, 3, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function PoolDetailsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nav", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, PoolDetailsComponent_ng_container_0_ng_template_6_Template, 1, 3, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, PoolDetailsComponent_ng_container_0_ng_container_7_Template, 4, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, PoolDetailsComponent_ng_container_0_ng_container_8_Template, 4, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, PoolDetailsComponent_ng_container_0_ng_container_9_Template, 4, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.permissions.grafana.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.selection.type === "replicated");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx_r0.selection["tiers"] == null ? null : ctx_r0.selection["tiers"].length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbNavOutlet", _r1);
} }
class PoolDetailsComponent {
    constructor(poolService) {
        this.poolService = poolService;
        this.cacheTierColumns = [];
        // 'stats' won't be shown as the pure stat numbers won't tell the user much,
        // if they are not converted or used in a chart (like the ones available in the pool listing)
        this.omittedPoolAttributes = ['cdExecuting', 'cdIsBinary', 'stats'];
        this.cacheTierColumns = [
            {
                prop: 'pool_name',
                name: "Name",
                flexGrow: 3
            },
            {
                prop: 'cache_mode',
                name: "Cache Mode",
                flexGrow: 2
            },
            {
                prop: 'cache_min_evict_age',
                name: "Min Evict Age",
                flexGrow: 2
            },
            {
                prop: 'cache_min_flush_age',
                name: "Min Flush Age",
                flexGrow: 2
            },
            {
                prop: 'target_max_bytes',
                name: "Target Max Bytes",
                flexGrow: 2
            },
            {
                prop: 'target_max_objects',
                name: "Target Max Objects",
                flexGrow: 2
            }
        ];
    }
    ngOnChanges() {
        if (this.selection) {
            this.poolService
                .getConfiguration(this.selection.pool_name)
                .subscribe((poolConf) => {
                _app_shared_classes_cd_helper_class__WEBPACK_IMPORTED_MODULE_2__.CdHelperClass.updateChanged(this, { selectedPoolConfiguration: poolConf });
            });
            _app_shared_classes_cd_helper_class__WEBPACK_IMPORTED_MODULE_2__.CdHelperClass.updateChanged(this, {
                poolDetails: lodash__WEBPACK_IMPORTED_MODULE_0___default().omit(this.selection, this.omittedPoolAttributes)
            });
        }
    }
}
PoolDetailsComponent.ɵfac = function PoolDetailsComponent_Factory(t) { return new (t || PoolDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_1__.PoolService)); };
PoolDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: PoolDetailsComponent, selectors: [["cd-pool-details"]], inputs: { cacheTiers: "cacheTiers", permissions: "permissions", selection: "selection" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5028777105388019087$$SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS__1 = goog.getMsg("Details");
        i18n_0 = MSG_EXTERNAL_5028777105388019087$$SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS__1;
    }
    else {
        i18n_0 = "Details";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9041763226911499160$$SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS___3 = goog.getMsg("Performance Details");
        i18n_2 = MSG_EXTERNAL_9041763226911499160$$SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS___3;
    }
    else {
        i18n_2 = "Performance Details";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4382964053540797190$$SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS____5 = goog.getMsg("Pool details");
        i18n_4 = MSG_EXTERNAL_4382964053540797190$$SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS____5;
    }
    else {
        i18n_4 = "Pool details";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3008420115644088420$$SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS___7 = goog.getMsg("Configuration");
        i18n_6 = MSG_EXTERNAL_3008420115644088420$$SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS___7;
    }
    else {
        i18n_6 = "Configuration";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4064628532851090088$$SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS___9 = goog.getMsg("Cache Tiers Details");
        i18n_8 = MSG_EXTERNAL_4064628532851090088$$SRC_APP_CEPH_POOL_POOL_DETAILS_POOL_DETAILS_COMPONENT_TS___9;
    }
    else {
        i18n_8 = "Cache Tiers Details";
    } return [["cdTableDetail", "", 4, "ngIf"], ["cdTableDetail", ""], ["ngbNav", "", "cdStatefulTab", "pool-details", 1, "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", "details"], ["ngbNavLink", ""], i18n_0, ["ngbNavContent", ""], ["ngbNavItem", "performance-details", 4, "ngIf"], ["ngbNavItem", "configuration", 4, "ngIf"], ["ngbNavItem", "cache-tiers-details", 4, "ngIf"], [3, "ngbNavOutlet"], [3, "renderObjects", "data", "autoReload"], ["ngbNavItem", "performance-details"], i18n_2, ["title", i18n_4, "uid", "-xyV8KCiz", "grafanaStyle", "three", 3, "grafanaPath", "type"], ["ngbNavItem", "configuration"], i18n_6, [3, "data"], ["ngbNavItem", "cache-tiers-details"], i18n_8, ["columnMode", "flex", 3, "data", "columns", "autoSave"]]; }, template: function PoolDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, PoolDetailsComponent_ng_container_0_Template, 11, 4, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selection);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNav, _shared_directives_stateful_tab_directive__WEBPACK_IMPORTED_MODULE_4__.StatefulTabDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavContent, _shared_datatable_table_key_value_table_key_value_component__WEBPACK_IMPORTED_MODULE_5__.TableKeyValueComponent, _shared_components_grafana_grafana_component__WEBPACK_IMPORTED_MODULE_6__.GrafanaComponent, _block_rbd_configuration_list_rbd_configuration_list_component__WEBPACK_IMPORTED_MODULE_7__.RbdConfigurationListComponent, _shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_8__.TableComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb29sLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 17361:
/*!*******************************************************!*\
  !*** ./src/app/ceph/pool/pool-form/pool-form-data.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoolFormData": () => (/* binding */ PoolFormData)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _app_shared_components_select_select_messages_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/components/select/select-messages.model */ 7022);


class PoolFormData {
    constructor() {
        this.erasureInfo = false;
        this.crushInfo = false;
        this.pgs = 1;
        this.poolTypes = ['erasure', 'replicated'];
        this.applications = {
            selected: [],
            default: ['cephfs', 'rbd', 'rgw'],
            available: [],
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[A-Za-z0-9_]+'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(128)],
            messages: new _app_shared_components_select_select_messages_model__WEBPACK_IMPORTED_MODULE_0__.SelectMessages({
                empty: "No applications added",
                selectionLimit: {
                    text: "Applications limit reached",
                    tooltip: "A pool can only have up to four applications definitions."
                },
                customValidations: {
                    pattern: "Allowed characters '_a-zA-Z0-9'",
                    maxlength: "Maximum length is 128 characters"
                },
                filter: "Filter or add applications'",
                add: "Add application"
            })
        };
    }
}


/***/ }),

/***/ 94012:
/*!************************************************************!*\
  !*** ./src/app/ceph/pool/pool-form/pool-form.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoolFormComponent": () => (/* binding */ PoolFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! rxjs */ 13413);
/* harmony import */ var _app_core_error_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/core/error/error */ 26504);
/* harmony import */ var _app_shared_api_crush_rule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/api/crush-rule.service */ 83608);
/* harmony import */ var _app_shared_api_erasure_code_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/api/erasure-code-profile.service */ 73345);
/* harmony import */ var _app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/api/pool.service */ 80842);
/* harmony import */ var _app_shared_classes_crush_node_selection_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/classes/crush.node.selection.class */ 60228);
/* harmony import */ var _app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/components/critical-confirmation-modal/critical-confirmation-modal.component */ 30982);
/* harmony import */ var _app_shared_components_select_select_option_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/components/select/select-option.model */ 14745);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 65862);
/* harmony import */ var _app_shared_forms_cd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/shared/forms/cd-form */ 26624);
/* harmony import */ var _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-group */ 95463);
/* harmony import */ var _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/shared/forms/cd-validators */ 82723);
/* harmony import */ var _app_shared_models_configuration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/shared/models/configuration */ 30633);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_pipes_dimless_binary_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/app/shared/pipes/dimless-binary.pipe */ 47557);
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 79247);
/* harmony import */ var _app_shared_services_formatter_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~/app/shared/services/formatter.service */ 28211);
/* harmony import */ var _app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~/app/shared/services/modal.service */ 63285);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 32337);
/* harmony import */ var _crush_rule_form_modal_crush_rule_form_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../crush-rule-form-modal/crush-rule-form-modal.component */ 34363);
/* harmony import */ var _erasure_code_profile_form_erasure_code_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../erasure-code-profile-form/erasure-code-profile-form-modal.component */ 28109);
/* harmony import */ var _pool_form_data__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pool-form-data */ 17361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _shared_directives_form_loading_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/directives/form-loading.directive */ 63622);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../shared/directives/autofocus.directive */ 82945);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_doc_doc_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../shared/components/doc/doc.component */ 30490);
/* harmony import */ var _shared_components_select_badges_select_badges_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../shared/components/select-badges/select-badges.component */ 60192);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_datatable_table_key_value_table_key_value_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../shared/datatable/table-key-value/table-key-value.component */ 61350);
/* harmony import */ var _shared_directives_dimless_binary_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../shared/directives/dimless-binary.directive */ 17932);
/* harmony import */ var _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../shared/components/helper/helper.component */ 18372);
/* harmony import */ var _block_rbd_configuration_form_rbd_configuration_form_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../block/rbd-configuration-form/rbd-configuration-form.component */ 44509);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 30839);
/* harmony import */ var _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../shared/pipes/upper-first.pipe */ 10545);
























































const _c0 = ["crushInfoTabs"];
const _c1 = ["crushDeletionBtn"];
const _c2 = ["ecpInfoTabs"];
const _c3 = ["ecpDeletionBtn"];
function PoolFormComponent_div_0_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const poolType_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("value", poolType_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", poolType_r13, " ");
} }
function PoolFormComponent_div_0_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_div_27_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mode_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("value", mode_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", mode_r18, " ");
} }
function PoolFormComponent_div_0_div_27_div_7_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_div_27_div_7_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_div_27_div_7_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_div_27_div_7_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_div_27_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 8)(1, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](2, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](3, "div", 11)(4, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("focus", function PoolFormComponent_div_0_div_27_div_7_Template_input_focus_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](3); return ctx_r23.externalPgChange = false; })("blur", function PoolFormComponent_div_0_div_27_div_7_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](3); return ctx_r25.alignPgs(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](5, PoolFormComponent_div_0_div_27_div_7_span_5_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](6, PoolFormComponent_div_0_div_27_div_7_span_6_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](7, PoolFormComponent_div_0_div_27_div_7_span_7_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](8, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](9, "cd-doc", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](10, PoolFormComponent_div_0_div_27_div_7_span_10_Template, 2, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵreference"](2);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r15.form.showError("pgNum", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r15.form.showError("pgNum", _r1, "min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r15.form.showError("pgNum", _r1, "34"));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r15.externalPgChange);
} }
function PoolFormComponent_div_0_div_27_div_8_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 41)(1, "ul", 66)(2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](3, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](5, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18nExp"](ctx_r26.getMinSize());
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18nApply"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18nExp"](ctx_r26.getMaxSize());
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18nApply"](5);
} }
function PoolFormComponent_div_0_div_27_div_8_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18nExp"](ctx_r27.getMinSize())(ctx_r27.getMaxSize());
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18nApply"](1);
} }
function PoolFormComponent_div_0_div_27_div_8_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_div_27_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 8)(1, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](2, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](4, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](5, PoolFormComponent_div_0_div_27_div_8_span_5_Template, 6, 2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](6, PoolFormComponent_div_0_div_27_div_8_span_6_Template, 2, 2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](7, PoolFormComponent_div_0_div_27_div_8_span_7_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵreference"](2);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("max", ctx_r16.getMaxSize())("min", ctx_r16.getMinSize());
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r16.form.showError("size", _r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r16.form.showError("size", _r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r16.form.getValue("size") === 1);
} }
function PoolFormComponent_div_0_div_27_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 8)(1, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](2, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](3, "div", 11)(4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](5, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](6, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](7, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()()();
} }
function PoolFormComponent_div_0_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div")(1, "div", 8)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](3, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](4, "div", 11)(5, "select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](6, PoolFormComponent_div_0_div_27_option_6_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](7, PoolFormComponent_div_0_div_27_div_7_Template, 11, 4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](8, PoolFormComponent_div_0_div_27_div_8_Template, 8, 5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](9, PoolFormComponent_div_0_div_27_div_9_Template, 8, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngForOf", ctx_r8.pgAutoscaleModes);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r8.form.getValue("pgAutoscaleMode") !== "on");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r8.isReplicated);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r8.info.is_all_bluestore && ctx_r8.isErasure);
} }
function PoolFormComponent_div_0_i_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "i", 78);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵclassMapInterpolate1"]("", ctx_r9.icons.warning, " icon-warning-color");
} }
function PoolFormComponent_div_0_div_34_div_3_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_div_34_div_3_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngValue", null);
} }
function PoolFormComponent_div_0_div_34_div_3_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngValue", null);
} }
function PoolFormComponent_div_0_div_34_div_3_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ecp_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngValue", ecp_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", ecp_r39.name, " ");
} }
const _c84 = function (a0) { return [a0]; };
function PoolFormComponent_div_0_div_34_div_3_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function PoolFormComponent_div_0_div_34_div_3_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](4); return ctx_r40.addErasureCodeProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction1"](1, _c84, ctx_r36.icons.add));
} }
function PoolFormComponent_div_0_div_34_div_3_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "button", 97, 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function PoolFormComponent_div_0_div_34_div_3_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](4); return ctx_r43.deleteErasureCodeProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](2, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction1"](1, _c84, ctx_r37.icons.trash));
} }
const _c89 = function () { return ["name"]; };
function PoolFormComponent_div_0_div_34_div_3_span_14_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "cd-table-key-value", 109);
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("renderObjects", true)("hideKeys", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction0"](4, _c89))("data", ctx_r46.form.getValue("erasureProfile"))("autoReload", false);
} }
function PoolFormComponent_div_0_div_34_div_3_span_14_ng_template_10_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_div_34_div_3_span_14_ng_template_10_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pool_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", pool_r52, " ");
} }
function PoolFormComponent_div_0_div_34_div_3_span_14_ng_template_10_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](1, PoolFormComponent_div_0_div_34_div_3_span_14_ng_template_10_ul_2_li_1_Template, 2, 1, "li", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngForOf", ctx_r50.ecpUsage);
} }
function PoolFormComponent_div_0_div_34_div_3_span_14_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](0, PoolFormComponent_div_0_div_34_div_3_span_14_ng_template_10_ng_template_0_Template, 2, 0, "ng-template", null, 110, _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](2, PoolFormComponent_div_0_div_34_div_3_span_14_ng_template_10_ul_2_Template, 2, 1, "ul", 111);
} if (rf & 2) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵreference"](1);
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r47.ecpUsage)("ngIfElse", _r48);
} }
function PoolFormComponent_div_0_div_34_div_3_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 99)(1, "nav", 100, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementContainerStart"](3, 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](4, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](5, 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](6, PoolFormComponent_div_0_div_34_div_3_span_14_ng_template_6_Template, 1, 5, "ng-template", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementContainerStart"](7, 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](8, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](9, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](10, PoolFormComponent_div_0_div_34_div_3_span_14_ng_template_10_Template, 3, 2, "ng-template", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](11, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngbNavOutlet", _r45);
} }
const _c92 = function (a0) { return { "active": a0 }; };
function PoolFormComponent_div_0_div_34_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 8)(1, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](2, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](3, "div", 11)(4, "div", 82)(5, "select", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](6, PoolFormComponent_div_0_div_34_div_3_option_6_Template, 2, 0, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](7, PoolFormComponent_div_0_div_34_div_3_option_7_Template, 2, 1, "option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](8, PoolFormComponent_div_0_div_34_div_3_option_8_Template, 2, 1, "option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](9, PoolFormComponent_div_0_div_34_div_3_option_9_Template, 2, 2, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](10, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function PoolFormComponent_div_0_div_34_div_3_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](3); return ctx_r53.data.erasureInfo = !ctx_r53.data.erasureInfo; });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](11, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](12, PoolFormComponent_div_0_div_34_div_3_button_12_Template, 2, 3, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](13, PoolFormComponent_div_0_div_34_div_3_button_13_Template, 3, 3, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](14, PoolFormComponent_div_0_div_34_div_3_span_14_Template, 12, 1, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", !ctx_r29.ecProfiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r29.ecProfiles && ctx_r29.ecProfiles.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r29.ecProfiles && ctx_r29.ecProfiles.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngForOf", ctx_r29.ecProfiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction1"](9, _c92, ctx_r29.data.erasureInfo));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction1"](11, _c84, ctx_r29.icons.questionCircle));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", !ctx_r29.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", !ctx_r29.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r29.data.erasureInfo && ctx_r29.form.getValue("erasureProfile"));
} }
function PoolFormComponent_div_0_div_34_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 8)(1, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](2, 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](3, "div", 11)(4, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](5, 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
} }
function PoolFormComponent_div_0_div_34_div_5_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 55)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](2, 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_div_34_div_5_div_6_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rule_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngValue", rule_r64);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", rule_r64.rule_name, " ");
} }
function PoolFormComponent_div_0_div_34_div_5_div_6_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function PoolFormComponent_div_0_div_34_div_5_div_6_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5); return ctx_r65.addCrushRule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction1"](1, _c84, ctx_r59.icons.add));
} }
function PoolFormComponent_div_0_div_34_div_5_div_6_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "button", 126, 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function PoolFormComponent_div_0_div_34_div_5_div_6_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5); return ctx_r68.deleteCrushRule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](2, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction1"](1, _c84, ctx_r60.icons.trash));
} }
const _c113 = function () { return ["steps", "type", "rule_name"]; };
function PoolFormComponent_div_0_div_34_div_5_div_6_div_10_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "cd-table-key-value", 109);
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("renderObjects", false)("hideKeys", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction0"](4, _c113))("data", ctx_r71.form.getValue("crushRule"))("autoReload", false);
} }
function PoolFormComponent_div_0_div_34_div_5_div_6_div_10_ng_template_10_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r75 = ctx.$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", ctx_r74.describeCrushStep(step_r75), " ");
} }
function PoolFormComponent_div_0_div_34_div_5_div_6_div_10_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](1, PoolFormComponent_div_0_div_34_div_5_div_6_div_10_ng_template_10_li_1_Template, 2, 1, "li", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngForOf", ctx_r72.form.get("crushRule").value.steps);
} }
function PoolFormComponent_div_0_div_34_div_5_div_6_div_10_ng_template_14_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_div_34_div_5_div_6_div_10_ng_template_14_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pool_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", pool_r80, " ");
} }
function PoolFormComponent_div_0_div_34_div_5_div_6_div_10_ng_template_14_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](1, PoolFormComponent_div_0_div_34_div_5_div_6_div_10_ng_template_14_ul_2_li_1_Template, 2, 1, "li", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngForOf", ctx_r78.crushUsage);
} }
function PoolFormComponent_div_0_div_34_div_5_div_6_div_10_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](0, PoolFormComponent_div_0_div_34_div_5_div_6_div_10_ng_template_14_ng_template_0_Template, 2, 0, "ng-template", null, 135, _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](2, PoolFormComponent_div_0_div_34_div_5_div_6_div_10_ng_template_14_ul_2_Template, 2, 1, "ul", 111);
} if (rf & 2) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵreference"](1);
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r73.crushUsage)("ngIfElse", _r76);
} }
function PoolFormComponent_div_0_div_34_div_5_div_6_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 128)(1, "nav", 100, 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementContainerStart"](3, 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](4, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](5, 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](6, PoolFormComponent_div_0_div_34_div_5_div_6_div_10_ng_template_6_Template, 1, 5, "ng-template", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementContainerStart"](7, 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](8, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](9, 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](10, PoolFormComponent_div_0_div_34_div_5_div_6_div_10_ng_template_10_Template, 2, 1, "ng-template", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementContainerStart"](11, 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](12, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](13, 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](14, PoolFormComponent_div_0_div_34_div_5_div_6_div_10_ng_template_14_Template, 3, 2, "ng-template", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](15, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngbNavOutlet", _r70);
} }
function PoolFormComponent_div_0_div_34_div_5_div_6_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_div_34_div_5_div_6_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_div_34_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div")(1, "div", 120)(2, "select", 121)(3, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](4, 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](5, PoolFormComponent_div_0_div_34_div_5_div_6_option_5_Template, 2, 2, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](6, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function PoolFormComponent_div_0_div_34_div_5_div_6_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](4); return ctx_r81.data.crushInfo = !ctx_r81.data.crushInfo; });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](7, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](8, PoolFormComponent_div_0_div_34_div_5_div_6_button_8_Template, 2, 3, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](9, PoolFormComponent_div_0_div_34_div_5_div_6_button_9_Template, 3, 3, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](10, PoolFormComponent_div_0_div_34_div_5_div_6_div_10_Template, 16, 1, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](11, PoolFormComponent_div_0_div_34_div_5_div_6_span_11_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](12, PoolFormComponent_div_0_div_34_div_5_div_6_span_12_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](3);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵreference"](2);
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngForOf", ctx_r57.current.rules);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction1"](9, _c92, ctx_r57.data.crushInfo));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction1"](11, _c84, ctx_r57.icons.questionCircle));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r57.isReplicated && !ctx_r57.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r57.isReplicated && !ctx_r57.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r57.data.crushInfo && ctx_r57.form.getValue("crushRule"));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r57.form.showError("crushRule", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r57.form.showError("crushRule", _r1, "tooFewOsds"));
} }
function PoolFormComponent_div_0_div_34_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 8)(1, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](2, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](4, PoolFormComponent_div_0_div_34_div_5_ng_template_4_Template, 4, 0, "ng-template", null, 118, _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](6, PoolFormComponent_div_0_div_34_div_5_div_6_Template, 13, 13, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵreference"](5);
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r31.current.rules.length > 0)("ngIfElse", _r55);
} }
function PoolFormComponent_div_0_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div")(1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](2, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](3, PoolFormComponent_div_0_div_34_div_3_Template, 15, 13, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](4, PoolFormComponent_div_0_div_34_div_4_Template, 6, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](5, PoolFormComponent_div_0_div_34_div_5_Template, 7, 2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r10.isErasure);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r10.isErasure && !ctx_r10.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r10.isReplicated || ctx_r10.editing);
} }
function PoolFormComponent_div_0_div_35_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mode_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("value", mode_r85);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", mode_r85, " ");
} }
function PoolFormComponent_div_0_div_35_div_9_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_div_35_div_9_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_div_35_div_9_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const algorithm_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("value", algorithm_r94);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", algorithm_r94, " ");
} }
function PoolFormComponent_div_0_div_35_div_9_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_div_35_div_9_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_div_35_div_9_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_div_35_div_9_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_div_35_div_9_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_div_35_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div")(1, "div", 8)(2, "label", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](3, 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](4, "div", 11)(5, "select", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](6, PoolFormComponent_div_0_div_35_div_9_option_6_Template, 2, 0, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](7, PoolFormComponent_div_0_div_35_div_9_option_7_Template, 2, 0, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](8, PoolFormComponent_div_0_div_35_div_9_option_8_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](9, "div", 8)(10, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](11, 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](13, "input", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](14, PoolFormComponent_div_0_div_35_div_9_span_14_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](15, PoolFormComponent_div_0_div_35_div_9_span_15_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](16, "div", 8)(17, "label", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](18, 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](20, "input", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](21, PoolFormComponent_div_0_div_35_div_9_span_21_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](22, PoolFormComponent_div_0_div_35_div_9_span_22_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](23, "div", 8)(24, "label", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](25, 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](26, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](27, "input", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](28, PoolFormComponent_div_0_div_35_div_9_span_28_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵreference"](2);
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", !ctx_r84.info.compression_algorithms);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r84.info.compression_algorithms && ctx_r84.info.compression_algorithms.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngForOf", ctx_r84.info.compression_algorithms);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r84.form.showError("minBlobSize", _r1, "min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r84.form.showError("minBlobSize", _r1, "maximum"));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r84.form.showError("maxBlobSize", _r1, "min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r84.form.showError("maxBlobSize", _r1, "minimum"));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r84.form.showError("ratio", _r1, "min") || ctx_r84.form.showError("ratio", _r1, "max"));
} }
function PoolFormComponent_div_0_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 139)(1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](2, 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](3, "div", 8)(4, "label", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](5, 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](6, "div", 11)(7, "select", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](8, PoolFormComponent_div_0_div_35_option_8_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](9, PoolFormComponent_div_0_div_35_div_9_Template, 29, 8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngForOf", ctx_r11.info.compression_modes);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r11.hasCompressionEnabled());
} }
function PoolFormComponent_div_0_span_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](1, 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
} }
function PoolFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 1)(1, "form", 2, 3)(3, "div", 4)(4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipe"](7, "upperFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](11, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](13, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](14, PoolFormComponent_div_0_span_14_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](15, PoolFormComponent_div_0_span_15_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](16, PoolFormComponent_div_0_span_16_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](17, PoolFormComponent_div_0_span_17_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](18, "div", 8)(19, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](20, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](21, "div", 11)(22, "select", 16)(23, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](24, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](25, PoolFormComponent_div_0_option_25_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](26, PoolFormComponent_div_0_span_26_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](27, PoolFormComponent_div_0_div_27_Template, 10, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](28, "div", 8)(29, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](30, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](31, "div", 11)(32, "cd-select-badges", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("selection", function PoolFormComponent_div_0_Template_cd_select_badges_selection_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](); return ctx_r95.appSelection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](33, PoolFormComponent_div_0_i_33_Template, 1, 3, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](34, PoolFormComponent_div_0_div_34_Template, 6, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](35, PoolFormComponent_div_0_div_35_Template, 10, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](36, "div")(37, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](38, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](39, "div", 8)(40, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementContainerStart"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](42, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](43, "cd-helper")(44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](45, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](48, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](49, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](50, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](51, "div", 8)(52, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementContainerStart"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](54, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](55, "cd-helper")(56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](57, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](58, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18n"](60, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](61, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](62, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](63, PoolFormComponent_div_0_span_63_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](64, "div", 37)(65, "cd-rbd-configuration-form", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("changes", function PoolFormComponent_div_0_Template_cd_rbd_configuration_form_changes_65_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r96); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](); return ctx_r97.currentConfigurationValues = $event(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](66, "div", 39)(67, "cd-form-button-panel", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("submitActionEvent", function PoolFormComponent_div_0_Template_cd_form_button_panel_submitActionEvent_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r96); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"](); return ctx_r98.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipe"](68, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipe"](69, "upperFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipeBind1"](6, 25, ctx_r0.action))(_angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipeBind1"](7, 27, ctx_r0.resource));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵi18nApply"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r0.form.showError("name", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r0.form.showError("name", _r1, "uniqueName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r0.form.showError("name", _r1, "rbdPool"));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r0.form.showError("name", _r1, "pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngForOf", ctx_r0.data.poolTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r0.form.showError("poolType", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r0.isReplicated || ctx_r0.isErasure);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("customBadges", true)("customBadgeValidators", ctx_r0.data.applications.validators)("messages", ctx_r0.data.applications.messages)("data", ctx_r0.data.applications.selected)("options", ctx_r0.data.applications.available)("selectionLimit", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r0.data.applications.selected <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r0.isErasure || ctx_r0.isReplicated);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r0.info.is_all_bluestore);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx_r0.form.showError("max_objects", _r1, "min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("hidden", ctx_r0.isErasure || ctx_r0.data.applications.selected.indexOf("rbd") === -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("form", ctx_r0.form)("initializeData", ctx_r0.initializeConfigData);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("form", ctx_r0.form)("submitText", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipeBind1"](68, 29, ctx_r0.action) + " " + _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpipeBind1"](69, 31, ctx_r0.resource));
} }
class PoolFormComponent extends _app_shared_forms_cd_form__WEBPACK_IMPORTED_MODULE_10__.CdForm {
    constructor(dimlessBinaryPipe, route, router, modalService, poolService, authStorageService, formatter, taskWrapper, ecpService, crushRuleService, actionLabels) {
        super();
        this.dimlessBinaryPipe = dimlessBinaryPipe;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.poolService = poolService;
        this.authStorageService = authStorageService;
        this.formatter = formatter;
        this.taskWrapper = taskWrapper;
        this.ecpService = ecpService;
        this.crushRuleService = crushRuleService;
        this.actionLabels = actionLabels;
        this.editing = false;
        this.isReplicated = false;
        this.isErasure = false;
        this.data = new _pool_form_data__WEBPACK_IMPORTED_MODULE_22__.PoolFormData();
        this.externalPgChange = false;
        this.current = {
            rules: []
        };
        this.initializeConfigData = new rxjs__WEBPACK_IMPORTED_MODULE_38__.ReplaySubject(1);
        this.currentConfigurationValues = {};
        this.icons = _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_9__.Icons;
        this.crushUsage = undefined; // Will only be set if a rule is used by some pool
        this.ecpUsage = undefined; // Will only be set if a rule is used by some pool
        this.crushRuleMaxSize = 10;
        this.editing = this.router.url.startsWith(`/pool/${_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__.URLVerbs.EDIT}`);
        this.action = this.editing ? this.actionLabels.EDIT : this.actionLabels.CREATE;
        this.resource = "pool";
        this.authenticate();
        this.createForm();
    }
    authenticate() {
        this.permission = this.authStorageService.getPermissions().pool;
        if (!this.permission.read ||
            (!this.permission.update && this.editing) ||
            (!this.permission.create && !this.editing)) {
            throw new _app_core_error_error__WEBPACK_IMPORTED_MODULE_1__.DashboardNotFoundError();
        }
    }
    createForm() {
        const compressionForm = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_11__.CdFormGroup({
            mode: new _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormControl('none'),
            algorithm: new _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormControl(''),
            minBlobSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormControl('', {
                updateOn: 'blur'
            }),
            maxBlobSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormControl('', {
                updateOn: 'blur'
            }),
            ratio: new _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormControl('', {
                updateOn: 'blur'
            })
        });
        this.form = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_11__.CdFormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_39__.Validators.pattern(/^[.A-Za-z0-9_/-]+$/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_39__.Validators.required,
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('rbdPool', () => {
                        return (this.form &&
                            this.form.getValue('name').includes('/') &&
                            this.data &&
                            this.data.applications.selected.indexOf('rbd') !== -1);
                    })
                ]
            }),
            poolType: new _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_39__.Validators.required]
            }),
            crushRule: new _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormControl(null, {
                validators: [
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('tooFewOsds', (rule) => this.info && rule && this.info.osd_count < 1),
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('required', (rule) => this.isReplicated && this.info.crush_rules_replicated.length > 0 && !rule)
                ]
            }),
            size: new _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormControl('', {
                updateOn: 'blur'
            }),
            erasureProfile: new _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormControl(null),
            pgNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_39__.Validators.required]
            }),
            pgAutoscaleMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormControl(null),
            ecOverwrites: new _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormControl(false),
            compression: compressionForm,
            max_bytes: new _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormControl(''),
            max_objects: new _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormControl(0)
        }, [_app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('form', () => null)]);
    }
    ngOnInit() {
        this.poolService.getInfo().subscribe((info) => {
            this.initInfo(info);
            if (this.editing) {
                this.initEditMode();
            }
            else {
                this.setAvailableApps();
                this.loadingReady();
            }
            this.listenToChanges();
            this.setComplexValidators();
        });
    }
    initInfo(info) {
        this.pgAutoscaleModes = info.pg_autoscale_modes;
        this.form.silentSet('pgAutoscaleMode', info.pg_autoscale_default_mode);
        this.form.silentSet('algorithm', info.bluestore_compression_algorithm);
        this.info = info;
        this.initEcp(info.erasure_code_profiles);
    }
    initEcp(ecProfiles) {
        this.setListControlStatus('erasureProfile', ecProfiles);
        this.ecProfiles = ecProfiles;
    }
    /**
     * Used to update the crush rule or erasure code profile listings.
     *
     * If only one rule or profile exists it will be selected.
     * If nothing exists null will be selected.
     * If more than one rule or profile exists the listing will be enabled,
     * otherwise disabled.
     */
    setListControlStatus(controlName, arr) {
        const control = this.form.get(controlName);
        const value = control.value;
        if (arr.length === 1 && (!value || !lodash__WEBPACK_IMPORTED_MODULE_0___default().isEqual(value, arr[0]))) {
            control.setValue(arr[0]);
        }
        else if (arr.length === 0 && value) {
            control.setValue(null);
        }
        if (arr.length <= 1) {
            if (control.enabled) {
                control.disable();
            }
        }
        else if (control.disabled) {
            control.enable();
        }
    }
    initEditMode() {
        this.disableForEdit();
        this.routeParamsSubscribe = this.route.params.subscribe((param) => this.poolService.get(param.name).subscribe((pool) => {
            this.data.pool = pool;
            this.initEditFormData(pool);
            this.loadingReady();
        }));
    }
    disableForEdit() {
        ['poolType', 'crushRule', 'size', 'erasureProfile', 'ecOverwrites'].forEach((controlName) => this.form.get(controlName).disable());
    }
    initEditFormData(pool) {
        this.initializeConfigData.next({
            initialData: pool.configuration,
            sourceType: _app_shared_models_configuration__WEBPACK_IMPORTED_MODULE_13__.RbdConfigurationSourceField.pool
        });
        this.poolTypeChange(pool.type);
        const rules = this.info.crush_rules_replicated.concat(this.info.crush_rules_erasure);
        const dataMap = {
            name: pool.pool_name,
            poolType: pool.type,
            crushRule: rules.find((rule) => rule.rule_name === pool.crush_rule),
            size: pool.size,
            erasureProfile: this.ecProfiles.find((ecp) => ecp.name === pool.erasure_code_profile),
            pgAutoscaleMode: pool.pg_autoscale_mode,
            pgNum: pool.pg_num,
            ecOverwrites: pool.flags_names.includes('ec_overwrites'),
            mode: pool.options.compression_mode,
            algorithm: pool.options.compression_algorithm,
            minBlobSize: this.dimlessBinaryPipe.transform(pool.options.compression_min_blob_size),
            maxBlobSize: this.dimlessBinaryPipe.transform(pool.options.compression_max_blob_size),
            ratio: pool.options.compression_required_ratio,
            max_bytes: this.dimlessBinaryPipe.transform(pool.quota_max_bytes),
            max_objects: pool.quota_max_objects
        };
        Object.keys(dataMap).forEach((controlName) => {
            const value = dataMap[controlName];
            if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(value) && value !== '') {
                this.form.silentSet(controlName, value);
            }
        });
        this.data.pgs = this.form.getValue('pgNum');
        this.setAvailableApps(this.data.applications.default.concat(pool.application_metadata));
        this.data.applications.selected = pool.application_metadata;
    }
    setAvailableApps(apps = this.data.applications.default) {
        this.data.applications.available = lodash__WEBPACK_IMPORTED_MODULE_0___default().uniq(apps.sort()).map((x) => new _app_shared_components_select_select_option_model__WEBPACK_IMPORTED_MODULE_7__.SelectOption(false, x, ''));
    }
    listenToChanges() {
        this.listenToChangesDuringAddEdit();
        if (!this.editing) {
            this.listenToChangesDuringAdd();
        }
    }
    listenToChangesDuringAddEdit() {
        this.form.get('pgNum').valueChanges.subscribe((pgs) => {
            const change = pgs - this.data.pgs;
            if (Math.abs(change) !== 1 || pgs === 2) {
                this.data.pgs = pgs;
                return;
            }
            this.doPgPowerJump(change);
        });
    }
    doPgPowerJump(jump) {
        const power = this.calculatePgPower() + jump;
        this.setPgs(jump === -1 ? Math.round(power) : Math.floor(power));
    }
    calculatePgPower(pgs = this.form.getValue('pgNum')) {
        return Math.log(pgs) / Math.log(2);
    }
    setPgs(power) {
        const pgs = Math.pow(2, power < 0 ? 0 : power); // Set size the nearest accurate size.
        this.data.pgs = pgs;
        this.form.silentSet('pgNum', pgs);
    }
    listenToChangesDuringAdd() {
        this.form.get('poolType').valueChanges.subscribe((poolType) => {
            this.poolTypeChange(poolType);
        });
        this.form.get('crushRule').valueChanges.subscribe((rule) => {
            // The crush rule can only be changed if type 'replicated' is set.
            if (this.crushDeletionBtn && this.crushDeletionBtn.isOpen()) {
                this.crushDeletionBtn.close();
            }
            if (!rule) {
                return;
            }
            this.setCorrectMaxSize(rule);
            this.crushRuleIsUsedBy(rule.rule_name);
            this.replicatedRuleChange();
            this.pgCalc();
        });
        this.form.get('size').valueChanges.subscribe(() => {
            // The size can only be changed if type 'replicated' is set.
            this.pgCalc();
        });
        this.form.get('erasureProfile').valueChanges.subscribe((profile) => {
            // The ec profile can only be changed if type 'erasure' is set.
            if (this.ecpDeletionBtn && this.ecpDeletionBtn.isOpen()) {
                this.ecpDeletionBtn.close();
            }
            if (!profile) {
                return;
            }
            this.ecpIsUsedBy(profile.name);
            this.pgCalc();
        });
        this.form.get('mode').valueChanges.subscribe(() => {
            ['minBlobSize', 'maxBlobSize', 'ratio'].forEach((name) => {
                this.form.get(name).updateValueAndValidity({ emitEvent: false });
            });
        });
        this.form.get('minBlobSize').valueChanges.subscribe(() => {
            this.form.get('maxBlobSize').updateValueAndValidity({ emitEvent: false });
        });
        this.form.get('maxBlobSize').valueChanges.subscribe(() => {
            this.form.get('minBlobSize').updateValueAndValidity({ emitEvent: false });
        });
    }
    poolTypeChange(poolType) {
        if (poolType === 'replicated') {
            this.setTypeBooleans(true, false);
        }
        else if (poolType === 'erasure') {
            this.setTypeBooleans(false, true);
        }
        else {
            this.setTypeBooleans(false, false);
        }
        if (!poolType || !this.info) {
            this.current.rules = [];
            return;
        }
        const rules = this.info['crush_rules_' + poolType] || [];
        this.current.rules = rules;
        if (this.editing) {
            return;
        }
        if (this.isReplicated) {
            this.setListControlStatus('crushRule', rules);
        }
        this.replicatedRuleChange();
        this.pgCalc();
    }
    setTypeBooleans(replicated, erasure) {
        this.isReplicated = replicated;
        this.isErasure = erasure;
    }
    replicatedRuleChange() {
        if (!this.isReplicated) {
            return;
        }
        const control = this.form.get('size');
        let size = this.form.getValue('size') || 3;
        const min = this.getMinSize();
        const max = this.getMaxSize();
        if (size < min) {
            size = min;
        }
        else if (size > max) {
            size = max;
        }
        if (size !== control.value) {
            this.form.silentSet('size', size);
        }
    }
    getMinSize() {
        if (!this.info || this.info.osd_count < 1) {
            return 0;
        }
        return 1;
    }
    getMaxSize() {
        const rule = this.form.getValue('crushRule');
        if (!this.info) {
            return 0;
        }
        if (!rule) {
            const osds = this.info.osd_count;
            const defaultSize = 3;
            return Math.min(osds, defaultSize);
        }
        return rule.usable_size;
    }
    pgCalc() {
        const poolType = this.form.getValue('poolType');
        if (!this.info || this.form.get('pgNum').dirty || !poolType) {
            return;
        }
        const pgMax = this.info.osd_count * 100;
        const pgs = this.isReplicated ? this.replicatedPgCalc(pgMax) : this.erasurePgCalc(pgMax);
        if (!pgs) {
            return;
        }
        const oldValue = this.data.pgs;
        this.alignPgs(pgs);
        const newValue = this.data.pgs;
        if (!this.externalPgChange) {
            this.externalPgChange = oldValue !== newValue;
        }
    }
    setCorrectMaxSize(rule = this.form.getValue('crushRule')) {
        if (!rule) {
            return;
        }
        const domains = _app_shared_classes_crush_node_selection_class__WEBPACK_IMPORTED_MODULE_5__.CrushNodeSelectionClass.searchFailureDomains(this.info.nodes, rule.steps[0].item_name);
        const currentDomain = domains[rule.steps[1].type];
        const usable = currentDomain ? currentDomain.length : this.crushRuleMaxSize;
        rule.usable_size = Math.min(usable, this.crushRuleMaxSize);
    }
    replicatedPgCalc(pgs) {
        const sizeControl = this.form.get('size');
        const size = sizeControl.value;
        return sizeControl.valid && size > 0 ? pgs / size : 0;
    }
    erasurePgCalc(pgs) {
        const ecpControl = this.form.get('erasureProfile');
        const ecp = ecpControl.value;
        return (ecpControl.valid || ecpControl.disabled) && ecp ? pgs / (ecp.k + ecp.m) : 0;
    }
    alignPgs(pgs = this.form.getValue('pgNum')) {
        this.setPgs(Math.round(this.calculatePgPower(pgs < 1 ? 1 : pgs)));
    }
    setComplexValidators() {
        if (this.editing) {
            this.form
                .get('name')
                .setValidators([
                this.form.get('name').validator,
                _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('uniqueName', (name) => this.data.pool &&
                    this.info &&
                    this.info.pool_names.indexOf(name) !== -1 &&
                    this.info.pool_names.indexOf(name) !==
                        this.info.pool_names.indexOf(this.data.pool.pool_name))
            ]);
        }
        else {
            _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.validateIf(this.form.get('size'), () => this.isReplicated, [
                _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('min', (value) => this.form.getValue('size') && value < this.getMinSize()),
                _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('max', (value) => this.form.getValue('size') && this.getMaxSize() < value)
            ]);
            this.form
                .get('name')
                .setValidators([
                this.form.get('name').validator,
                _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('uniqueName', (name) => this.info && this.info.pool_names.indexOf(name) !== -1)
            ]);
        }
        this.setCompressionValidators();
    }
    setCompressionValidators() {
        _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.validateIf(this.form.get('minBlobSize'), () => this.hasCompressionEnabled(), [
            _angular_forms__WEBPACK_IMPORTED_MODULE_39__.Validators.min(0),
            _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('maximum', (size) => this.oddBlobSize(size, this.form.getValue('maxBlobSize')))
        ]);
        _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.validateIf(this.form.get('maxBlobSize'), () => this.hasCompressionEnabled(), [
            _angular_forms__WEBPACK_IMPORTED_MODULE_39__.Validators.min(0),
            _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.custom('minimum', (size) => this.oddBlobSize(this.form.getValue('minBlobSize'), size))
        ]);
        _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_12__.CdValidators.validateIf(this.form.get('ratio'), () => this.hasCompressionEnabled(), [
            _angular_forms__WEBPACK_IMPORTED_MODULE_39__.Validators.min(0),
            _angular_forms__WEBPACK_IMPORTED_MODULE_39__.Validators.max(1)
        ]);
    }
    oddBlobSize(minimum, maximum) {
        const min = this.formatter.toBytes(minimum);
        const max = this.formatter.toBytes(maximum);
        return Boolean(min && max && min >= max);
    }
    hasCompressionEnabled() {
        return this.form.getValue('mode') && this.form.get('mode').value.toLowerCase() !== 'none';
    }
    describeCrushStep(step) {
        return [
            step.op.replace('_', ' '),
            step.item_name || '',
            step.type ? step.num + ' type ' + step.type : ''
        ].join(' ');
    }
    addErasureCodeProfile() {
        this.addModal(_erasure_code_profile_form_erasure_code_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_21__.ErasureCodeProfileFormModalComponent, (name) => this.reloadECPs(name));
    }
    addModal(modalComponent, reload) {
        this.hideOpenTooltips();
        const modalRef = this.modalService.show(modalComponent);
        modalRef.componentInstance.submitAction.subscribe((item) => {
            reload(item.name);
        });
    }
    hideOpenTooltips() {
        const hideTooltip = (btn) => btn && btn.isOpen() && btn.close();
        hideTooltip(this.ecpDeletionBtn);
        hideTooltip(this.crushDeletionBtn);
    }
    reloadECPs(profileName) {
        this.reloadList({
            newItemName: profileName,
            getInfo: () => this.ecpService.list(),
            initInfo: (profiles) => this.initEcp(profiles),
            findNewItem: () => this.ecProfiles.find((p) => p.name === profileName),
            controlName: 'erasureProfile'
        });
    }
    reloadList({ newItemName, getInfo, initInfo, findNewItem, controlName }) {
        if (this.modalSubscription) {
            this.modalSubscription.unsubscribe();
        }
        getInfo().subscribe((items) => {
            initInfo(items);
            if (!newItemName) {
                return;
            }
            const item = findNewItem();
            if (item) {
                this.form.get(controlName).setValue(item);
            }
        });
    }
    deleteErasureCodeProfile() {
        this.deletionModal({
            value: this.form.getValue('erasureProfile'),
            usage: this.ecpUsage,
            deletionBtn: this.ecpDeletionBtn,
            dataName: 'erasureInfo',
            getTabs: () => this.ecpInfoTabs,
            tabPosition: 'used-by-pools',
            nameAttribute: 'name',
            itemDescription: "erasure code profile",
            reloadFn: () => this.reloadECPs(),
            deleteFn: (name) => this.ecpService.delete(name),
            taskName: 'ecp/delete'
        });
    }
    deletionModal({ value, usage, deletionBtn, dataName, getTabs, tabPosition, nameAttribute, itemDescription, reloadFn, deleteFn, taskName }) {
        if (!value) {
            return;
        }
        if (usage) {
            deletionBtn.animation = false;
            deletionBtn.toggle();
            this.data[dataName] = true;
            setTimeout(() => {
                const tabs = getTabs();
                if (tabs) {
                    tabs.select(tabPosition);
                }
            }, 50);
            return;
        }
        const name = value[nameAttribute];
        this.modalService.show(_app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_6__.CriticalConfirmationModalComponent, {
            itemDescription,
            itemNames: [name],
            submitActionObservable: () => {
                const deletion = deleteFn(name);
                deletion.subscribe(() => reloadFn());
                return this.taskWrapper.wrapTaskAroundCall({
                    task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_14__.FinishedTask(taskName, { name: name }),
                    call: deletion
                });
            }
        });
    }
    addCrushRule() {
        this.addModal(_crush_rule_form_modal_crush_rule_form_modal_component__WEBPACK_IMPORTED_MODULE_20__.CrushRuleFormModalComponent, (name) => this.reloadCrushRules(name));
    }
    reloadCrushRules(ruleName) {
        this.reloadList({
            newItemName: ruleName,
            getInfo: () => this.poolService.getInfo(),
            initInfo: (info) => {
                this.initInfo(info);
                this.poolTypeChange('replicated');
            },
            findNewItem: () => this.info.crush_rules_replicated.find((rule) => rule.rule_name === ruleName),
            controlName: 'crushRule'
        });
    }
    deleteCrushRule() {
        this.deletionModal({
            value: this.form.getValue('crushRule'),
            usage: this.crushUsage,
            deletionBtn: this.crushDeletionBtn,
            dataName: 'crushInfo',
            getTabs: () => this.crushInfoTabs,
            tabPosition: 'used-by-pools',
            nameAttribute: 'rule_name',
            itemDescription: "crush rule",
            reloadFn: () => this.reloadCrushRules(),
            deleteFn: (name) => this.crushRuleService.delete(name),
            taskName: 'crushRule/delete'
        });
    }
    crushRuleIsUsedBy(ruleName) {
        this.crushUsage = ruleName ? this.info.used_rules[ruleName] : undefined;
    }
    ecpIsUsedBy(profileName) {
        this.ecpUsage = profileName ? this.info.used_profiles[profileName] : undefined;
    }
    submit() {
        if (this.form.invalid) {
            this.form.setErrors({ cdSubmitButton: true });
            return;
        }
        const pool = { pool: this.form.getValue('name') };
        this.assignFormFields(pool, [
            { externalFieldName: 'pool_type', formControlName: 'poolType' },
            {
                externalFieldName: 'pg_autoscale_mode',
                formControlName: 'pgAutoscaleMode',
                editable: true
            },
            {
                externalFieldName: 'pg_num',
                formControlName: 'pgNum',
                replaceFn: (value) => (this.form.getValue('pgAutoscaleMode') === 'on' ? 1 : value),
                editable: true
            },
            this.isReplicated
                ? { externalFieldName: 'size', formControlName: 'size' }
                : {
                    externalFieldName: 'erasure_code_profile',
                    formControlName: 'erasureProfile',
                    attr: 'name'
                },
            {
                externalFieldName: 'rule_name',
                formControlName: 'crushRule',
                replaceFn: (value) => (this.isReplicated ? value && value.rule_name : undefined)
            },
            {
                externalFieldName: 'quota_max_bytes',
                formControlName: 'max_bytes',
                replaceFn: this.formatter.toBytes,
                editable: true,
                resetValue: this.editing ? 0 : undefined
            },
            {
                externalFieldName: 'quota_max_objects',
                formControlName: 'max_objects',
                editable: true,
                resetValue: this.editing ? 0 : undefined
            }
        ]);
        if (this.info.is_all_bluestore) {
            this.assignFormField(pool, {
                externalFieldName: 'flags',
                formControlName: 'ecOverwrites',
                replaceFn: () => (this.isErasure ? ['ec_overwrites'] : undefined)
            });
            if (this.form.getValue('mode') !== 'none') {
                this.assignFormFields(pool, [
                    {
                        externalFieldName: 'compression_mode',
                        formControlName: 'mode',
                        editable: true,
                        replaceFn: (value) => this.hasCompressionEnabled() && value
                    },
                    {
                        externalFieldName: 'compression_algorithm',
                        formControlName: 'algorithm',
                        editable: true
                    },
                    {
                        externalFieldName: 'compression_min_blob_size',
                        formControlName: 'minBlobSize',
                        replaceFn: this.formatter.toBytes,
                        editable: true,
                        resetValue: 0
                    },
                    {
                        externalFieldName: 'compression_max_blob_size',
                        formControlName: 'maxBlobSize',
                        replaceFn: this.formatter.toBytes,
                        editable: true,
                        resetValue: 0
                    },
                    {
                        externalFieldName: 'compression_required_ratio',
                        formControlName: 'ratio',
                        editable: true,
                        resetValue: 0
                    }
                ]);
            }
            else if (this.editing) {
                this.assignFormFields(pool, [
                    {
                        externalFieldName: 'compression_mode',
                        formControlName: 'mode',
                        editable: true,
                        replaceFn: () => 'unset' // Is used if no compression is set
                    },
                    {
                        externalFieldName: 'srcpool',
                        formControlName: 'name',
                        editable: true,
                        replaceFn: () => this.data.pool.pool_name
                    }
                ]);
            }
        }
        const apps = this.data.applications.selected;
        if (apps.length > 0 || this.editing) {
            pool['application_metadata'] = apps;
        }
        // Only collect configuration data for replicated pools, as QoS cannot be configured on EC
        // pools. EC data pools inherit their settings from the corresponding replicated metadata pool.
        if (this.isReplicated && !lodash__WEBPACK_IMPORTED_MODULE_0___default().isEmpty(this.currentConfigurationValues)) {
            pool['configuration'] = this.currentConfigurationValues;
        }
        this.triggerApiTask(pool);
    }
    /**
     * Retrieves the values for the given form field descriptions and assigns the values to the given
     * object. This method differentiates between `add` and `edit` mode and acts differently on one or
     * the other.
     */
    assignFormFields(pool, formFieldDescription) {
        formFieldDescription.forEach((item) => this.assignFormField(pool, item));
    }
    /**
     * Retrieves the value for the given form field description and assigns the values to the given
     * object. This method differentiates between `add` and `edit` mode and acts differently on one or
     * the other.
     */
    assignFormField(pool, { externalFieldName, formControlName, attr, replaceFn, editable, resetValue }) {
        if (this.editing && (!editable || this.form.get(formControlName).pristine)) {
            return;
        }
        const value = this.form.getValue(formControlName);
        let apiValue = replaceFn ? replaceFn(value) : attr ? lodash__WEBPACK_IMPORTED_MODULE_0___default().get(value, attr) : value;
        if (!value || !apiValue) {
            if (editable && !lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(resetValue)) {
                apiValue = resetValue;
            }
            else {
                return;
            }
        }
        pool[externalFieldName] = apiValue;
    }
    triggerApiTask(pool) {
        this.taskWrapper
            .wrapTaskAroundCall({
            task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_14__.FinishedTask('pool/' + (this.editing ? _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__.URLVerbs.EDIT : _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__.URLVerbs.CREATE), {
                pool_name: pool.hasOwnProperty('srcpool') ? pool.srcpool : pool.pool
            }),
            call: this.poolService[this.editing ? _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__.URLVerbs.UPDATE : _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__.URLVerbs.CREATE](pool)
        })
            .subscribe({
            error: (resp) => {
                if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isObject(resp.error) && resp.error.code === '34') {
                    this.form.get('pgNum').setErrors({ '34': true });
                }
                this.form.setErrors({ cdSubmitButton: true });
            },
            complete: () => this.router.navigate(['/pool'])
        });
    }
    appSelection() {
        this.form.get('name').updateValueAndValidity({ emitEvent: false, onlySelf: true });
    }
}
PoolFormComponent.ɵfac = function PoolFormComponent_Factory(t) { return new (t || PoolFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](_app_shared_pipes_dimless_binary_pipe__WEBPACK_IMPORTED_MODULE_15__.DimlessBinaryPipe), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_40__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_40__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_18__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](_app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_4__.PoolService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_16__.AuthStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](_app_shared_services_formatter_service__WEBPACK_IMPORTED_MODULE_17__.FormatterService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_19__.TaskWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](_app_shared_api_erasure_code_profile_service__WEBPACK_IMPORTED_MODULE_3__.ErasureCodeProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](_app_shared_api_crush_rule_service__WEBPACK_IMPORTED_MODULE_2__.CrushRuleService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__.ActionLabelsI18n)); };
PoolFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineComponent"]({ type: PoolFormComponent, selectors: [["cd-pool-form"]], viewQuery: function PoolFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵloadQuery"]()) && (ctx.crushInfoTabs = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵloadQuery"]()) && (ctx.crushDeletionBtn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵloadQuery"]()) && (ctx.ecpInfoTabs = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵloadQuery"]()) && (ctx.ecpDeletionBtn = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: function () { let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Example: Create Pool
         * @meaning form title
         */
        const MSG_EXTERNAL_formTitle$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__5 = goog.getMsg("{$interpolation} {$interpolation_1}", { "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
        i18n_4 = MSG_EXTERNAL_formTitle$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__5;
    }
    else {
        i18n_4 = "" + "\uFFFD0\uFFFD" + " " + "\uFFFD1\uFFFD" + "";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__7 = goog.getMsg("Name");
        i18n_6 = MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__7;
    }
    else {
        i18n_6 = "Name";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5451140586403689891$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__9 = goog.getMsg("Name...");
        i18n_8 = MSG_EXTERNAL_5451140586403689891$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__9;
    }
    else {
        i18n_8 = "Name...";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9172197321150709390$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__11 = goog.getMsg("Pool type");
        i18n_10 = MSG_EXTERNAL_9172197321150709390$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__11;
    }
    else {
        i18n_10 = "Pool type";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1562903615362783646$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__13 = goog.getMsg("-- Select a pool type --");
        i18n_12 = MSG_EXTERNAL_1562903615362783646$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__13;
    }
    else {
        i18n_12 = "-- Select a pool type --";
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6658000829978978023$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__15 = goog.getMsg("Applications");
        i18n_14 = MSG_EXTERNAL_6658000829978978023$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__15;
    }
    else {
        i18n_14 = "Applications";
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6814278963931082774$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__17 = goog.getMsg("Pools should be associated with an application tag");
        i18n_16 = MSG_EXTERNAL_6814278963931082774$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__17;
    }
    else {
        i18n_16 = "Pools should be associated with an application tag";
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8133124082907931904$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__19 = goog.getMsg("Quotas");
        i18n_18 = MSG_EXTERNAL_8133124082907931904$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__19;
    }
    else {
        i18n_18 = "Quotas";
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3747015173044998769$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__21 = goog.getMsg("Max bytes");
        i18n_20 = MSG_EXTERNAL_3747015173044998769$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__21;
    }
    else {
        i18n_20 = "Max bytes";
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1598148565161940221$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__23 = goog.getMsg("Leave it blank or specify 0 to disable this quota.");
        i18n_22 = MSG_EXTERNAL_1598148565161940221$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__23;
    }
    else {
        i18n_22 = "Leave it blank or specify 0 to disable this quota.";
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4793948312117174353$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__25 = goog.getMsg("A valid quota should be greater than 0.");
        i18n_24 = MSG_EXTERNAL_4793948312117174353$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__25;
    }
    else {
        i18n_24 = "A valid quota should be greater than 0.";
    } let i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2739243284262593813$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__27 = goog.getMsg("e.g., 10GiB");
        i18n_26 = MSG_EXTERNAL_2739243284262593813$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__27;
    }
    else {
        i18n_26 = "e.g., 10GiB";
    } let i18n_28; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8598004196729643782$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__29 = goog.getMsg("Max objects");
        i18n_28 = MSG_EXTERNAL_8598004196729643782$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__29;
    }
    else {
        i18n_28 = "Max objects";
    } let i18n_30; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1598148565161940221$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__31 = goog.getMsg("Leave it blank or specify 0 to disable this quota.");
        i18n_30 = MSG_EXTERNAL_1598148565161940221$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__31;
    }
    else {
        i18n_30 = "Leave it blank or specify 0 to disable this quota.";
    } let i18n_32; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4793948312117174353$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__33 = goog.getMsg("A valid quota should be greater than 0.");
        i18n_32 = MSG_EXTERNAL_4793948312117174353$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS__33;
    }
    else {
        i18n_32 = "A valid quota should be greater than 0.";
    } let i18n_34; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___35 = goog.getMsg("This field is required!");
        i18n_34 = MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___35;
    }
    else {
        i18n_34 = "This field is required!";
    } let i18n_36; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8856591561953003570$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___37 = goog.getMsg("The chosen Ceph pool name is already in use.");
        i18n_36 = MSG_EXTERNAL_8856591561953003570$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___37;
    }
    else {
        i18n_36 = "The chosen Ceph pool name is already in use.";
    } let i18n_38; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4019421115201218895$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___39 = goog.getMsg("It's not possible to create an RBD pool with '/' in the name. Please change the name or remove 'rbd' from the applications list.");
        i18n_38 = MSG_EXTERNAL_4019421115201218895$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___39;
    }
    else {
        i18n_38 = "It's not possible to create an RBD pool with '/' in the name. Please change the name or remove 'rbd' from the applications list.";
    } let i18n_40; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6150797013332470255$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___41 = goog.getMsg("Pool name can only contain letters, numbers, '.', '-', '_' or '/'.");
        i18n_40 = MSG_EXTERNAL_6150797013332470255$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___41;
    }
    else {
        i18n_40 = "Pool name can only contain letters, numbers, '.', '-', '_' or '/'.";
    } let i18n_42; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___43 = goog.getMsg("This field is required!");
        i18n_42 = MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___43;
    }
    else {
        i18n_42 = "This field is required!";
    } let i18n_44; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8225008431655447514$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___45 = goog.getMsg("PG Autoscale");
        i18n_44 = MSG_EXTERNAL_8225008431655447514$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___45;
    }
    else {
        i18n_44 = "PG Autoscale";
    } let i18n_46; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3752428261896460601$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____47 = goog.getMsg("Placement groups");
        i18n_46 = MSG_EXTERNAL_3752428261896460601$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____47;
    }
    else {
        i18n_46 = "Placement groups";
    } let i18n_48; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6631156531520249661$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____49 = goog.getMsg("Calculation help");
        i18n_48 = MSG_EXTERNAL_6631156531520249661$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____49;
    }
    else {
        i18n_48 = "Calculation help";
    } let i18n_50; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____51 = goog.getMsg("This field is required!");
        i18n_50 = MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____51;
    }
    else {
        i18n_50 = "This field is required!";
    } let i18n_52; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5406317697422969407$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____53 = goog.getMsg("At least one placement group is needed!");
        i18n_52 = MSG_EXTERNAL_5406317697422969407$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____53;
    }
    else {
        i18n_52 = "At least one placement group is needed!";
    } let i18n_54; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5229921545530078803$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____55 = goog.getMsg("Your cluster can't handle this many PGs. Please recalculate the PG amount needed.");
        i18n_54 = MSG_EXTERNAL_5229921545530078803$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____55;
    }
    else {
        i18n_54 = "Your cluster can't handle this many PGs. Please recalculate the PG amount needed.";
    } let i18n_56; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1689749228990488417$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____57 = goog.getMsg("The current PGs settings were calculated for you, you should make sure the values suit your needs before submit.");
        i18n_56 = MSG_EXTERNAL_1689749228990488417$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____57;
    }
    else {
        i18n_56 = "The current PGs settings were calculated for you, you should make sure the values suit your needs before submit.";
    } let i18n_58; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_752603623252877510$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____59 = goog.getMsg("Replicated size");
        i18n_58 = MSG_EXTERNAL_752603623252877510$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____59;
    }
    else {
        i18n_58 = "Replicated size";
    } let i18n_60; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8024883227048914975$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____61 = goog.getMsg("Minimum: {$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_60 = MSG_EXTERNAL_8024883227048914975$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____61;
    }
    else {
        i18n_60 = "Minimum: " + "\uFFFD0\uFFFD" + "";
    } let i18n_62; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_590459149466870284$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____63 = goog.getMsg("Maximum: {$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_62 = MSG_EXTERNAL_590459149466870284$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____63;
    }
    else {
        i18n_62 = "Maximum: " + "\uFFFD0\uFFFD" + "";
    } let i18n_64; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7377369889112759555$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____65 = goog.getMsg("The size specified is out of range. A value from {$interpolation} to {$interpolation_1} is usable.", { "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
        i18n_64 = MSG_EXTERNAL_7377369889112759555$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____65;
    }
    else {
        i18n_64 = "The size specified is out of range. A value from " + "\uFFFD0\uFFFD" + " to " + "\uFFFD1\uFFFD" + " is usable.";
    } let i18n_66; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6448090406949650356$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____67 = goog.getMsg("A size of 1 will not create a replication of the object. The 'Replicated size' includes the object itself.");
        i18n_66 = MSG_EXTERNAL_6448090406949650356$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____67;
    }
    else {
        i18n_66 = "A size of 1 will not create a replication of the object. The 'Replicated size' includes the object itself.";
    } let i18n_68; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2870788902465061969$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____69 = goog.getMsg("Flags");
        i18n_68 = MSG_EXTERNAL_2870788902465061969$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____69;
    }
    else {
        i18n_68 = "Flags";
    } let i18n_70; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2339012409163744944$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____71 = goog.getMsg("EC Overwrites");
        i18n_70 = MSG_EXTERNAL_2339012409163744944$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____71;
    }
    else {
        i18n_70 = "EC Overwrites";
    } let i18n_72; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4223321256203872325$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___73 = goog.getMsg("CRUSH");
        i18n_72 = MSG_EXTERNAL_4223321256203872325$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___73;
    }
    else {
        i18n_72 = "CRUSH";
    } let i18n_74; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6153130195101626553$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____75 = goog.getMsg("Erasure code profile");
        i18n_74 = MSG_EXTERNAL_6153130195101626553$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____75;
    }
    else {
        i18n_74 = "Erasure code profile";
    } let i18n_76; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6905261999855103308$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____77 = goog.getMsg("This profile can't be deleted as it is in use.");
        i18n_76 = MSG_EXTERNAL_6905261999855103308$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____77;
    }
    else {
        i18n_76 = "This profile can't be deleted as it is in use.";
    } let i18n_78; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____79 = goog.getMsg("Loading...");
        i18n_78 = MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____79;
    }
    else {
        i18n_78 = "Loading...";
    } let i18n_80; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5674504811107661466$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____81 = goog.getMsg("-- No erasure code profile available --");
        i18n_80 = MSG_EXTERNAL_5674504811107661466$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____81;
    }
    else {
        i18n_80 = "-- No erasure code profile available --";
    } let i18n_82; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4561644255051104925$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____83 = goog.getMsg("-- Select an erasure code profile --");
        i18n_82 = MSG_EXTERNAL_4561644255051104925$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____83;
    }
    else {
        i18n_82 = "-- Select an erasure code profile --";
    } let i18n_85; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4915431133669985304$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____86 = goog.getMsg("Profile");
        i18n_85 = MSG_EXTERNAL_4915431133669985304$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____86;
    }
    else {
        i18n_85 = "Profile";
    } let i18n_87; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6388596708833227105$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____88 = goog.getMsg("Used by pools");
        i18n_87 = MSG_EXTERNAL_6388596708833227105$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____88;
    }
    else {
        i18n_87 = "Used by pools";
    } let i18n_90; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7364943935614077636$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_______91 = goog.getMsg("Profile is not in use.");
        i18n_90 = MSG_EXTERNAL_7364943935614077636$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_______91;
    }
    else {
        i18n_90 = "Profile is not in use.";
    } let i18n_93; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2316779381850545017$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____94 = goog.getMsg("Crush ruleset");
        i18n_93 = MSG_EXTERNAL_2316779381850545017$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____94;
    }
    else {
        i18n_93 = "Crush ruleset";
    } let i18n_95; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_491350185559594401$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____96 = goog.getMsg("A new crush ruleset will be implicitly created.");
        i18n_95 = MSG_EXTERNAL_491350185559594401$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____96;
    }
    else {
        i18n_95 = "A new crush ruleset will be implicitly created.";
    } let i18n_97; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2316779381850545017$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____98 = goog.getMsg("Crush ruleset");
        i18n_97 = MSG_EXTERNAL_2316779381850545017$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____98;
    }
    else {
        i18n_97 = "Crush ruleset";
    } let i18n_99; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2479750831776663300$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____100 = goog.getMsg("There are no rules.");
        i18n_99 = MSG_EXTERNAL_2479750831776663300$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____100;
    }
    else {
        i18n_99 = "There are no rules.";
    } let i18n_101; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4463049516277766604$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____102 = goog.getMsg("-- Select a crush rule --");
        i18n_101 = MSG_EXTERNAL_4463049516277766604$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____102;
    }
    else {
        i18n_101 = "-- Select a crush rule --";
    } let i18n_103; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1472531588308219240$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____104 = goog.getMsg("Placement and\n                          replication strategies or distribution policies that allow to\n                          specify how CRUSH places data replicas.");
        i18n_103 = MSG_EXTERNAL_1472531588308219240$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____104;
    }
    else {
        i18n_103 = "Placement and\n                          replication strategies or distribution policies that allow to\n                          specify how CRUSH places data replicas.";
    } let i18n_105; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2703635065523295547$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____106 = goog.getMsg("This rule can't be deleted as it is in use.");
        i18n_105 = MSG_EXTERNAL_2703635065523295547$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____106;
    }
    else {
        i18n_105 = "This rule can't be deleted as it is in use.";
    } let i18n_107; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5675468447288802964$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS______108 = goog.getMsg("Crush rule");
        i18n_107 = MSG_EXTERNAL_5675468447288802964$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS______108;
    }
    else {
        i18n_107 = "Crush rule";
    } let i18n_109; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8605423809073301009$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS______110 = goog.getMsg("Crush steps");
        i18n_109 = MSG_EXTERNAL_8605423809073301009$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS______110;
    }
    else {
        i18n_109 = "Crush steps";
    } let i18n_111; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6388596708833227105$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS______112 = goog.getMsg("Used by pools");
        i18n_111 = MSG_EXTERNAL_6388596708833227105$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS______112;
    }
    else {
        i18n_111 = "Used by pools";
    } let i18n_114; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1616247679170810690$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS________115 = goog.getMsg("Rule is not in use.");
        i18n_114 = MSG_EXTERNAL_1616247679170810690$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS________115;
    }
    else {
        i18n_114 = "Rule is not in use.";
    } let i18n_116; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS______117 = goog.getMsg("This field is required!");
        i18n_116 = MSG_EXTERNAL_751124305869330542$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS______117;
    }
    else {
        i18n_116 = "This field is required!";
    } let i18n_118; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_983890247184422369$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS______119 = goog.getMsg("The rule can't be used in the current cluster as it has too few OSDs to meet the minimum required OSD by this rule.");
        i18n_118 = MSG_EXTERNAL_983890247184422369$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS______119;
    }
    else {
        i18n_118 = "The rule can't be used in the current cluster as it has too few OSDs to meet the minimum required OSD by this rule.";
    } let i18n_120; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3454103840680130627$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___121 = goog.getMsg("Compression");
        i18n_120 = MSG_EXTERNAL_3454103840680130627$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___121;
    }
    else {
        i18n_120 = "Compression";
    } let i18n_122; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1713271461473302108$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___123 = goog.getMsg("Mode");
        i18n_122 = MSG_EXTERNAL_1713271461473302108$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___123;
    }
    else {
        i18n_122 = "Mode";
    } let i18n_124; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4824444844546691624$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____125 = goog.getMsg("Algorithm");
        i18n_124 = MSG_EXTERNAL_4824444844546691624$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____125;
    }
    else {
        i18n_124 = "Algorithm";
    } let i18n_126; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6531705700837194039$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____127 = goog.getMsg("Minimum blob size");
        i18n_126 = MSG_EXTERNAL_6531705700837194039$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____127;
    }
    else {
        i18n_126 = "Minimum blob size";
    } let i18n_128; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3306182187316635998$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____129 = goog.getMsg("e.g., 128KiB");
        i18n_128 = MSG_EXTERNAL_3306182187316635998$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____129;
    }
    else {
        i18n_128 = "e.g., 128KiB";
    } let i18n_130; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9193074744671457730$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____131 = goog.getMsg("Maximum blob size");
        i18n_130 = MSG_EXTERNAL_9193074744671457730$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____131;
    }
    else {
        i18n_130 = "Maximum blob size";
    } let i18n_132; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7605449430433614156$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____133 = goog.getMsg("e.g., 512KiB");
        i18n_132 = MSG_EXTERNAL_7605449430433614156$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____133;
    }
    else {
        i18n_132 = "e.g., 512KiB";
    } let i18n_134; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1712198024026254502$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____135 = goog.getMsg("Ratio");
        i18n_134 = MSG_EXTERNAL_1712198024026254502$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____135;
    }
    else {
        i18n_134 = "Ratio";
    } let i18n_136; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8574097368330241033$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____137 = goog.getMsg("Compression ratio");
        i18n_136 = MSG_EXTERNAL_8574097368330241033$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS____137;
    }
    else {
        i18n_136 = "Compression ratio";
    } let i18n_138; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____139 = goog.getMsg("Loading...");
        i18n_138 = MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____139;
    }
    else {
        i18n_138 = "Loading...";
    } let i18n_140; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1965973164609184105$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____141 = goog.getMsg("-- No erasure compression algorithm available --");
        i18n_140 = MSG_EXTERNAL_1965973164609184105$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____141;
    }
    else {
        i18n_140 = "-- No erasure compression algorithm available --";
    } let i18n_142; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5098375923930423409$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____143 = goog.getMsg("Value should be greater than 0");
        i18n_142 = MSG_EXTERNAL_5098375923930423409$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____143;
    }
    else {
        i18n_142 = "Value should be greater than 0";
    } let i18n_144; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2571669501100650073$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____145 = goog.getMsg("Value should be less than the maximum blob size");
        i18n_144 = MSG_EXTERNAL_2571669501100650073$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____145;
    }
    else {
        i18n_144 = "Value should be less than the maximum blob size";
    } let i18n_146; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5098375923930423409$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____147 = goog.getMsg("Value should be greater than 0");
        i18n_146 = MSG_EXTERNAL_5098375923930423409$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____147;
    }
    else {
        i18n_146 = "Value should be greater than 0";
    } let i18n_148; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1889107216619939776$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____149 = goog.getMsg("Value should be greater than the minimum blob size");
        i18n_148 = MSG_EXTERNAL_1889107216619939776$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____149;
    }
    else {
        i18n_148 = "Value should be greater than the minimum blob size";
    } let i18n_150; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1115761569439758411$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____151 = goog.getMsg("Value should be between 0.0 and 1.0");
        i18n_150 = MSG_EXTERNAL_1115761569439758411$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS_____151;
    }
    else {
        i18n_150 = "Value should be between 0.0 and 1.0";
    } let i18n_152; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5025817128790551445$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___153 = goog.getMsg("The value should be greater or equal to 0");
        i18n_152 = MSG_EXTERNAL_5025817128790551445$$SRC_APP_CEPH_POOL_POOL_FORM_POOL_FORM_COMPONENT_TS___153;
    }
    else {
        i18n_152 = "The value should be greater or equal to 0";
    } return [["class", "cd-col-form", 4, "cdFormLoading"], [1, "cd-col-form"], ["name", "form", "novalidate", "", 3, "formGroup"], ["formDir", "ngForm"], [1, "card"], [1, "card-header"], i18n_4, [1, "card-body"], [1, "form-group", "row"], ["for", "name", 1, "cd-col-form-label", "required"], i18n_6, [1, "cd-col-form-input"], ["id", "name", "name", "name", "type", "text", "placeholder", i18n_8, "formControlName", "name", "autofocus", "", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "poolType", 1, "cd-col-form-label", "required"], i18n_10, ["id", "poolType", "formControlName", "poolType", "name", "poolType", 1, "form-select"], ["ngValue", ""], i18n_12, [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["for", "applications", 1, "cd-col-form-label"], i18n_14, ["id", "applications", 3, "customBadges", "customBadgeValidators", "messages", "data", "options", "selectionLimit", "selection"], ["title", i18n_16, 3, "class", 4, "ngIf"], ["formGroupName", "compression", 4, "ngIf"], i18n_18, ["for", "max_bytes", 1, "cd-col-form-label"], i18n_20, i18n_22, i18n_24, ["id", "max_bytes", "name", "max_bytes", "type", "text", "formControlName", "max_bytes", "placeholder", i18n_26, "defaultUnit", "GiB", "cdDimlessBinary", "", 1, "form-control"], ["for", "max_objects", 1, "cd-col-form-label"], i18n_28, i18n_30, i18n_32, ["id", "max_objects", "min", "0", "name", "max_objects", "type", "number", "formControlName", "max_objects", 1, "form-control"], [3, "hidden"], [3, "form", "initializeData", "changes"], [1, "card-footer"], ["wrappingClass", "text-right", 3, "form", "submitText", "submitActionEvent"], [1, "invalid-feedback"], i18n_34, i18n_36, i18n_38, i18n_40, [3, "value"], i18n_42, ["for", "pgAutoscaleMode", 1, "cd-col-form-label"], i18n_44, ["id", "pgAutoscaleMode", "name", "pgAutoscaleMode", "formControlName", "pgAutoscaleMode", 1, "form-select"], ["class", "form-group row", 4, "ngIf"], ["for", "pgNum", 1, "cd-col-form-label", "required"], i18n_46, ["id", "pgNum", "name", "pgNum", "formControlName", "pgNum", "min", "1", "type", "number", "required", "", 1, "form-control", 3, "focus", "blur"], [1, "form-text", "text-muted"], ["section", "pgs", "docText", i18n_48], ["class", "form-text text-muted", 4, "ngIf"], i18n_50, i18n_52, i18n_54, i18n_56, ["for", "size", 1, "cd-col-form-label", "required"], i18n_58, ["id", "size", "name", "size", "type", "number", "formControlName", "size", 1, "form-control", 3, "max", "min"], ["class", "text-warning-dark", 4, "ngIf"], [1, "list-inline"], i18n_60, i18n_62, i18n_64, [1, "text-warning-dark"], i18n_66, [1, "cd-col-form-label"], i18n_68, [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "ec-overwrites", "formControlName", "ecOverwrites", 1, "custom-control-input"], ["for", "ec-overwrites", 1, "custom-control-label"], i18n_70, ["title", i18n_16], i18n_72, ["for", "erasureProfile", 1, "cd-col-form-label"], i18n_74, [1, "input-group", "mb-1"], ["id", "erasureProfile", "name", "erasureProfile", "formControlName", "erasureProfile", 1, "form-select"], ["ngValue", "", 4, "ngIf"], [3, "ngValue", 4, "ngIf"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["id", "ecp-info-button", "type", "button", 1, "btn", "btn-light", 3, "ngClass", "click"], ["aria-hidden", "true", 3, "ngClass"], ["class", "btn btn-light", "type", "button", 3, "click", 4, "ngIf"], ["class", "btn btn-light", "type", "button", "ngbTooltip", i18n_76, "triggers", "manual", 3, "click", 4, "ngIf"], ["class", "form-text text-muted", "id", "ecp-info-block", 4, "ngIf"], i18n_78, [3, "ngValue"], i18n_80, i18n_82, ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "button", "ngbTooltip", i18n_76, "triggers", "manual", 1, "btn", "btn-light", 3, "click"], ["ecpDeletionBtn", "ngbTooltip"], ["id", "ecp-info-block", 1, "form-text", "text-muted"], ["ngbNav", "", 1, "nav-tabs"], ["ecpInfoTabs", "ngbNav"], ["ngbNavItem", "ecp-info"], ["ngbNavLink", ""], i18n_85, ["ngbNavContent", ""], ["ngbNavItem", "used-by-pools"], i18n_87, [3, "ngbNavOutlet"], [3, "renderObjects", "hideKeys", "data", "autoReload"], ["ecpIsNotUsed", ""], [4, "ngIf", "ngIfElse"], i18n_90, [4, "ngFor", "ngForOf"], ["for", "crushRule", 1, "cd-col-form-label"], i18n_93, i18n_95, i18n_97, ["noRules", ""], i18n_99, [1, "input-group"], ["id", "crushRule", "formControlName", "crushRule", "name", "crushSet", 1, "form-select"], i18n_101, ["id", "crush-info-button", "type", "button", "ngbTooltip", i18n_103, 1, "btn", "btn-light", 3, "ngClass", "click"], ["class", "btn btn-light", "type", "button", "ngbTooltip", i18n_105, "triggers", "manual", 3, "click", 4, "ngIf"], ["class", "form-text text-muted", "id", "crush-info-block", 4, "ngIf"], ["type", "button", "ngbTooltip", i18n_105, "triggers", "manual", 1, "btn", "btn-light", 3, "click"], ["crushDeletionBtn", "ngbTooltip"], ["id", "crush-info-block", 1, "form-text", "text-muted"], ["crushInfoTabs", "ngbNav"], ["ngbNavItem", "crush-rule-info"], i18n_107, ["ngbNavItem", "crush-rule-steps"], i18n_109, i18n_111, ["ruleIsNotUsed", ""], i18n_114, i18n_116, i18n_118, ["formGroupName", "compression"], i18n_120, ["for", "mode", 1, "cd-col-form-label"], i18n_122, ["id", "mode", "name", "mode", "formControlName", "mode", 1, "form-select"], ["for", "algorithm", 1, "cd-col-form-label"], i18n_124, ["id", "algorithm", "name", "algorithm", "formControlName", "algorithm", 1, "form-select"], ["for", "minBlobSize", 1, "cd-col-form-label"], i18n_126, ["id", "minBlobSize", "name", "minBlobSize", "formControlName", "minBlobSize", "type", "text", "min", "0", "placeholder", i18n_128, "defaultUnit", "KiB", "cdDimlessBinary", "", 1, "form-control"], ["for", "maxBlobSize", 1, "cd-col-form-label"], i18n_130, ["id", "maxBlobSize", "type", "text", "min", "0", "formControlName", "maxBlobSize", "placeholder", i18n_132, "defaultUnit", "KiB", "cdDimlessBinary", "", 1, "form-control"], ["for", "ratio", 1, "cd-col-form-label"], i18n_134, ["id", "ratio", "name", "ratio", "formControlName", "ratio", "type", "number", "min", "0", "max", "1", "step", "0.1", "placeholder", i18n_136, 1, "form-control"], i18n_138, i18n_140, i18n_142, i18n_144, i18n_146, i18n_148, i18n_150, i18n_152]; }, template: function PoolFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](0, PoolFormComponent_div_0_Template, 70, 33, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("cdFormLoading", ctx.loading);
    } }, directives: [_shared_directives_form_loading_directive__WEBPACK_IMPORTED_MODULE_23__.FormLoadingDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_39__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_39__.NgControlStatusGroup, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_24__.CdFormValidationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_25__.CdFormGroupDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_26__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_39__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_27__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_39__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormControlName, _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_28__.AutofocusDirective, _angular_common__WEBPACK_IMPORTED_MODULE_41__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_39__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_39__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_39__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_41__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_39__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_39__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_39__.RequiredValidator, _shared_components_doc_doc_component__WEBPACK_IMPORTED_MODULE_29__.DocComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_39__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_39__.CheckboxControlValueAccessor, _shared_components_select_badges_select_badges_component__WEBPACK_IMPORTED_MODULE_30__.SelectBadgesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_41__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_42__.NgbTooltip, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_42__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_42__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_42__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_42__.NgbNavContent, _shared_datatable_table_key_value_table_key_value_component__WEBPACK_IMPORTED_MODULE_31__.TableKeyValueComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_42__.NgbNavOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormGroupName, _shared_directives_dimless_binary_directive__WEBPACK_IMPORTED_MODULE_32__.DimlessBinaryDirective, _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_33__.HelperComponent, _block_rbd_configuration_form_rbd_configuration_form_component__WEBPACK_IMPORTED_MODULE_34__.RbdConfigurationFormComponent, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_35__.FormButtonPanelComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_41__.TitleCasePipe, _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_36__.UpperFirstPipe], styles: [".icon-warning-color[_ngcontent-%COMP%] {\n  margin-left: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvb2wtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoicG9vbC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24td2FybmluZy1jb2xvciB7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 98586:
/*!************************************************************!*\
  !*** ./src/app/ceph/pool/pool-list/pool-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoolListComponent": () => (/* binding */ PoolListComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/operators */ 85816);
/* harmony import */ var _app_ceph_shared_pg_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/ceph/shared/pg-category.service */ 3765);
/* harmony import */ var _app_shared_api_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/api/configuration.service */ 64724);
/* harmony import */ var _app_shared_api_erasure_code_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/api/erasure-code-profile.service */ 73345);
/* harmony import */ var _app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/api/pool.service */ 80842);
/* harmony import */ var _app_shared_classes_list_with_details_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/classes/list-with-details.class */ 68136);
/* harmony import */ var _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/classes/table-status-view-cache */ 69158);
/* harmony import */ var _app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/components/critical-confirmation-modal/critical-confirmation-modal.component */ 30982);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/datatable/table/table.component */ 35905);
/* harmony import */ var _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/shared/enum/cell-template.enum */ 99466);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 65862);
/* harmony import */ var _app_shared_enum_view_cache_status_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/shared/enum/view-cache-status.enum */ 91801);
/* harmony import */ var _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/shared/models/cd-table-selection */ 68774);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_pipes_dimless_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/app/shared/pipes/dimless.pipe */ 66369);
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 79247);
/* harmony import */ var _app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~/app/shared/services/modal.service */ 63285);
/* harmony import */ var _app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~/app/shared/services/task-list.service */ 38047);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 32337);
/* harmony import */ var _app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ~/app/shared/services/url-builder.service */ 51847);
/* harmony import */ var _pool__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../pool */ 84779);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/datatable/table-actions/table-actions.component */ 94928);
/* harmony import */ var _pool_details_pool_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../pool-details/pool-details.component */ 69094);
/* harmony import */ var _shared_directives_auth_storage_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/directives/auth-storage.directive */ 23240);
/* harmony import */ var _shared_components_grafana_grafana_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../shared/components/grafana/grafana.component */ 76317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_usage_bar_usage_bar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/components/usage-bar/usage-bar.component */ 60251);












































const _c0 = ["poolUsageTpl"];
const _c1 = ["poolConfigurationSourceTpl"];
function PoolListComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "cd-table", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("fetchData", function PoolListComponent_ng_template_5_Template_cd_table_fetchData_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](); return ctx_r6.taskListService.fetch(); })("setExpandedRow", function PoolListComponent_ng_template_5_Template_cd_table_setExpandedRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](); return ctx_r8.setExpandedRow($event); })("updateSelection", function PoolListComponent_ng_template_5_Template_cd_table_updateSelection_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](); return ctx_r9.updateSelection($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](2, "cd-table-actions", 11)(3, "cd-pool-details", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("data", ctx_r1.pools)("columns", ctx_r1.columns)("hasDetails", true)("status", ctx_r1.tableStatus)("autoReload", -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("permission", ctx_r1.permissions.pool)("selection", ctx_r1.selection)("tableActions", ctx_r1.tableActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("selection", ctx_r1.expandedRow)("permissions", ctx_r1.permissions)("cacheTiers", ctx_r1.cacheTiers);
} }
function PoolListComponent_ng_container_6_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "cd-grafana", 14);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("grafanaPath", "ceph-pools-overview?")("type", "metrics");
} }
function PoolListComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](3, PoolListComponent_ng_container_6_ng_template_3_Template, 1, 2, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
} }
function PoolListComponent_ng_template_8_cd_usage_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "cd-usage-bar", 16);
} if (rf & 2) {
    const row_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("total", row_r11.stats.bytes_used.latest + row_r11.stats.avail_raw.latest)("used", row_r11.stats.bytes_used.latest)("title", row_r11.pool_name);
} }
function PoolListComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, PoolListComponent_ng_template_8_cd_usage_bar_0_Template, 1, 3, "cd-usage-bar", 15);
} if (rf & 2) {
    const row_r11 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", row_r11.stats == null ? null : row_r11.stats.avail_raw == null ? null : row_r11.stats.avail_raw.latest);
} }
const BASE_URL = 'pool';
class PoolListComponent extends _app_shared_classes_list_with_details_class__WEBPACK_IMPORTED_MODULE_5__.ListWithDetails {
    constructor(poolService, taskWrapper, ecpService, authStorageService, taskListService, modalService, pgCategoryService, dimlessPipe, urlBuilder, configurationService, actionLabels) {
        super();
        this.poolService = poolService;
        this.taskWrapper = taskWrapper;
        this.ecpService = ecpService;
        this.authStorageService = authStorageService;
        this.taskListService = taskListService;
        this.modalService = modalService;
        this.pgCategoryService = pgCategoryService;
        this.dimlessPipe = dimlessPipe;
        this.urlBuilder = urlBuilder;
        this.configurationService = configurationService;
        this.actionLabels = actionLabels;
        this.selection = new _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_13__.CdTableSelection();
        this.executingTasks = [];
        this.tableStatus = new _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_6__.TableStatusViewCache();
        this.cacheTiers = [];
        this.monAllowPoolDelete = false;
        this.permissions = this.authStorageService.getPermissions();
        this.tableActions = [
            {
                permission: 'create',
                icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_11__.Icons.add,
                routerLink: () => this.urlBuilder.getCreate(),
                name: this.actionLabels.CREATE
            },
            {
                permission: 'update',
                icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_11__.Icons.edit,
                routerLink: () => this.urlBuilder.getEdit(encodeURIComponent(this.selection.first().pool_name)),
                name: this.actionLabels.EDIT
            },
            {
                permission: 'delete',
                icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_11__.Icons.destroy,
                click: () => this.deletePoolModal(),
                name: this.actionLabels.DELETE,
                disable: this.getDisableDesc.bind(this)
            }
        ];
        // Note, we need read permissions to get the 'mon_allow_pool_delete'
        // configuration option.
        if (this.permissions.configOpt.read) {
            this.configurationService.get('mon_allow_pool_delete').subscribe((data) => {
                if (lodash__WEBPACK_IMPORTED_MODULE_0___default().has(data, 'value')) {
                    const monSection = lodash__WEBPACK_IMPORTED_MODULE_0___default().find(data.value, (v) => {
                        return v.section === 'mon';
                    }) || { value: false };
                    this.monAllowPoolDelete = monSection.value === 'true' ? true : false;
                }
            });
        }
    }
    ngOnInit() {
        const compare = (prop, pool1, pool2) => lodash__WEBPACK_IMPORTED_MODULE_0___default().get(pool1, prop) > lodash__WEBPACK_IMPORTED_MODULE_0___default().get(pool2, prop) ? 1 : -1;
        this.columns = [
            {
                prop: 'pool_name',
                name: "Name",
                flexGrow: 4,
                cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_10__.CellTemplate.executing
            },
            {
                prop: 'data_protection',
                name: "Data Protection",
                cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_10__.CellTemplate.badge,
                customTemplateConfig: {
                    class: 'badge-background-gray'
                },
                flexGrow: 1.3
            },
            {
                prop: 'application_metadata',
                name: "Applications",
                cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_10__.CellTemplate.badge,
                customTemplateConfig: {
                    class: 'badge-background-primary'
                },
                flexGrow: 1.5
            },
            {
                prop: 'pg_status',
                name: "PG Status",
                flexGrow: 1.2,
                cellClass: ({ row, column, value }) => {
                    return this.getPgStatusCellClass(row, column, value);
                }
            },
            {
                prop: 'crush_rule',
                name: "Crush Ruleset",
                isHidden: true,
                flexGrow: 2
            },
            {
                name: "Usage",
                prop: 'usage',
                cellTemplate: this.poolUsageTpl,
                flexGrow: 1.2
            },
            {
                prop: 'stats.rd_bytes.rates',
                name: "Read bytes",
                comparator: (_valueA, _valueB, rowA, rowB) => compare('stats.rd_bytes.latest', rowA, rowB),
                cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_10__.CellTemplate.sparkline,
                flexGrow: 1.5
            },
            {
                prop: 'stats.wr_bytes.rates',
                name: "Write bytes",
                comparator: (_valueA, _valueB, rowA, rowB) => compare('stats.wr_bytes.latest', rowA, rowB),
                cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_10__.CellTemplate.sparkline,
                flexGrow: 1.5
            },
            {
                prop: 'stats.rd.rate',
                name: "Read ops",
                flexGrow: 1,
                pipe: this.dimlessPipe,
                cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_10__.CellTemplate.perSecond
            },
            {
                prop: 'stats.wr.rate',
                name: "Write ops",
                flexGrow: 1,
                pipe: this.dimlessPipe,
                cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_10__.CellTemplate.perSecond
            }
        ];
        this.taskListService.init(() => this.ecpService.list().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.mergeMap)((ecProfileList) => {
            this.ecProfileList = ecProfileList;
            return this.poolService.getList();
        })), undefined, (pools) => {
            this.pools = this.transformPoolsData(pools);
            this.tableStatus = new _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_6__.TableStatusViewCache();
        }, () => {
            this.table.reset(); // Disable loading indicator.
            this.tableStatus = new _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_6__.TableStatusViewCache(_app_shared_enum_view_cache_status_enum__WEBPACK_IMPORTED_MODULE_12__.ViewCacheStatus.ValueException);
        }, (task) => task.name.startsWith(`${BASE_URL}/`), (pool, task) => task.metadata['pool_name'] === pool.pool_name, { default: (metadata) => new _pool__WEBPACK_IMPORTED_MODULE_21__.Pool(metadata['pool_name']) });
    }
    updateSelection(selection) {
        this.selection = selection;
    }
    deletePoolModal() {
        const name = this.selection.first().pool_name;
        this.modalService.show(_app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_7__.CriticalConfirmationModalComponent, {
            itemDescription: 'Pool',
            itemNames: [name],
            submitActionObservable: () => this.taskWrapper.wrapTaskAroundCall({
                task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_14__.FinishedTask(`${BASE_URL}/${_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__.URLVerbs.DELETE}`, { pool_name: name }),
                call: this.poolService.delete(name)
            })
        });
    }
    getPgStatusCellClass(_row, _column, value) {
        return {
            'text-right': true,
            [`pg-${this.pgCategoryService.getTypeByStates(value)}`]: true
        };
    }
    getErasureCodeProfile(erasureCodeProfile) {
        let ecpInfo = '';
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.ecProfileList, (ecpKey) => {
            if (ecpKey['name'] === erasureCodeProfile) {
                ecpInfo = `EC: ${ecpKey['k']}+${ecpKey['m']}`;
            }
        });
        return ecpInfo;
    }
    transformPoolsData(pools) {
        const requiredStats = [
            'bytes_used',
            'max_avail',
            'avail_raw',
            'percent_used',
            'rd_bytes',
            'wr_bytes',
            'rd',
            'wr'
        ];
        const emptyStat = { latest: 0, rate: 0, rates: [] };
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(pools, (pool) => {
            pool['pg_status'] = this.transformPgStatus(pool['pg_status']);
            const stats = {};
            lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(requiredStats, (stat) => {
                stats[stat] = pool.stats && pool.stats[stat] ? pool.stats[stat] : emptyStat;
            });
            pool['stats'] = stats;
            pool['usage'] = stats.percent_used.latest;
            if (!pool.cdExecuting &&
                pool.pg_num + pool.pg_placement_num !== pool.pg_num_target + pool.pg_placement_num_target) {
                pool['cdExecuting'] = 'Updating';
            }
            ['rd_bytes', 'wr_bytes'].forEach((stat) => {
                pool.stats[stat].rates = pool.stats[stat].rates.map((point) => point[1]);
            });
            pool.cdIsBinary = true;
            if (pool['type'] === 'erasure') {
                const erasureCodeProfile = pool['erasure_code_profile'];
                pool['data_protection'] = this.getErasureCodeProfile(erasureCodeProfile);
            }
            if (pool['type'] === 'replicated') {
                pool['data_protection'] = `replica: ×${pool['size']}`;
            }
        });
        return pools;
    }
    transformPgStatus(pgStatus) {
        const strings = [];
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(pgStatus, (count, state) => {
            strings.push(`${count} ${state}`);
        });
        return strings.join(', ');
    }
    getSelectionTiers() {
        if (typeof this.expandedRow !== 'undefined') {
            const cacheTierIds = this.expandedRow['tiers'];
            this.cacheTiers = this.pools.filter((pool) => cacheTierIds.includes(pool.pool));
        }
    }
    getDisableDesc() {
        var _a;
        if ((_a = this.selection) === null || _a === void 0 ? void 0 : _a.hasSelection) {
            if (!this.monAllowPoolDelete) {
                return "Pool deletion is disabled by the mon_allow_pool_delete configuration setting.";
            }
            return false;
        }
        return true;
    }
    setExpandedRow(expandedRow) {
        super.setExpandedRow(expandedRow);
        this.getSelectionTiers();
    }
}
PoolListComponent.ɵfac = function PoolListComponent_Factory(t) { return new (t || PoolListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_4__.PoolService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_19__.TaskWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_api_erasure_code_profile_service__WEBPACK_IMPORTED_MODULE_3__.ErasureCodeProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_16__.AuthStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_18__.TaskListService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_17__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_ceph_shared_pg_category_service__WEBPACK_IMPORTED_MODULE_1__.PgCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_pipes_dimless_pipe__WEBPACK_IMPORTED_MODULE_15__.DimlessPipe), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_20__.URLBuilderService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_api_configuration_service__WEBPACK_IMPORTED_MODULE_2__.ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_8__.ActionLabelsI18n)); };
PoolListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineComponent"]({ type: PoolListComponent, selectors: [["cd-pool-list"]], viewQuery: function PoolListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_9__.TableComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.poolUsageTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.poolConfigurationSourceTpl = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵProvidersFeature"]([
            _app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_18__.TaskListService,
            { provide: _app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_20__.URLBuilderService, useValue: new _app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_20__.URLBuilderService(BASE_URL) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 2, consts: function () { let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2795615137353856148$$SRC_APP_CEPH_POOL_POOL_LIST_POOL_LIST_COMPONENT_TS_3 = goog.getMsg("Pools List");
        i18n_2 = MSG_EXTERNAL_2795615137353856148$$SRC_APP_CEPH_POOL_POOL_LIST_POOL_LIST_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "Pools List";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4352555506458562289$$SRC_APP_CEPH_POOL_POOL_LIST_POOL_LIST_COMPONENT_TS__5 = goog.getMsg("Overall Performance");
        i18n_4 = MSG_EXTERNAL_4352555506458562289$$SRC_APP_CEPH_POOL_POOL_LIST_POOL_LIST_COMPONENT_TS__5;
    }
    else {
        i18n_4 = "Overall Performance";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6164763932138779244$$SRC_APP_CEPH_POOL_POOL_LIST_POOL_LIST_COMPONENT_TS___7 = goog.getMsg("Ceph pools overview");
        i18n_6 = MSG_EXTERNAL_6164763932138779244$$SRC_APP_CEPH_POOL_POOL_LIST_POOL_LIST_COMPONENT_TS___7;
    }
    else {
        i18n_6 = "Ceph pools overview";
    } return [["ngbNav", "", 1, "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", ""], ["ngbNavLink", ""], i18n_2, ["ngbNavContent", ""], ["ngbNavItem", "", 4, "cdScope"], [3, "ngbNavOutlet"], ["poolUsageTpl", ""], ["id", "pool-list", "selectionType", "single", 3, "data", "columns", "hasDetails", "status", "autoReload", "fetchData", "setExpandedRow", "updateSelection"], ["table", ""], ["id", "pool-list-actions", 1, "table-actions", 3, "permission", "selection", "tableActions"], ["cdTableDetail", "", "id", "pool-list-details", 3, "selection", "permissions", "cacheTiers"], i18n_4, ["title", i18n_6, "uid", "z99hzWtmk", "grafanaStyle", "two", 3, "grafanaPath", "type"], ["decimals", "2", 3, "total", "used", "title", 4, "ngIf"], ["decimals", "2", 3, "total", "used", "title"]]; }, template: function PoolListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "nav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](5, PoolListComponent_ng_template_5_Template, 4, 11, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](6, PoolListComponent_ng_container_6_Template, 4, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](8, PoolListComponent_ng_template_8_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("cdScope", "grafana");
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngbNavOutlet", _r0);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__.NgbNavContent, _app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_9__.TableComponent, _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_22__.TableActionsComponent, _pool_details_pool_details_component__WEBPACK_IMPORTED_MODULE_23__.PoolDetailsComponent, _shared_directives_auth_storage_directive__WEBPACK_IMPORTED_MODULE_24__.AuthStorageDirective, _shared_components_grafana_grafana_component__WEBPACK_IMPORTED_MODULE_25__.GrafanaComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__.NgbNavOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgIf, _shared_components_usage_bar_usage_bar_component__WEBPACK_IMPORTED_MODULE_26__.UsageBarComponent], styles: ["cd-pool-list .pg-clean {\n  color: #008a00;\n}\n  cd-pool-list .pg-working {\n  color: #25828e;\n}\n  cd-pool-list .pg-warning {\n  color: #d48200;\n}\n  cd-pool-list .pg-unknown {\n  color: #dc3545;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0eWxlcy92ZW5kb3IvX3ZhcmlhYmxlcy5zY3NzIiwicG9vbC1saXN0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzL2RlZmF1bHRzL19ib290c3RyYXAtZGVmYXVsdHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztDQUFBO0FBTUE7Ozs7Ozs7OztDQUFBO0FDSEU7RUFDRSxjQ2lCSTtBREpSO0FBVkU7RUFDRSxjQ2tCTTtBRE5WO0FBVEU7RUFDRSxjQ1FLO0FER1Q7QUFSRTtFQUNFLGNDRUU7QURRTiIsImZpbGUiOiJwb29sLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBWZW5kb3Igc3BlY2lmaWMgdmFyaWFibGVzXG5cbkV4YW1wbGU6XG4kbXktYWNjZW50LWNvbG9yOiAjYTE4ZmZmXG4qL1xuXG4vKiBCb290c3RyYXAgdmFyaWFibGVzIHRoYXQgYXJlIGFscmVhZHkgZGVmaW5lZCBjYW4gYmUgb3ZlcnJpZGRlbiB1c2luZyBjb25maWd1cmF0aW9uOlxuaHR0cHM6Ly9zYXNzLWxhbmcuY29tL2RvY3VtZW50YXRpb24vYXQtcnVsZXMvZm9yd2FyZCNjb25maWd1cmluZy1tb2R1bGVzXG5cbkV4YW1wbGU6XG5AZm9yd2FyZCAnLi4vZGVmYXVsdHMvYm9vdHN0cmFwLWRlZmF1bHRzJyB3aXRoIChcbiAgJHRoZW1lLWNvbG9yczogKFxuICAgICdhY2NlbnQnOiAkbXktYWNjZW50LWNvbG9yXG4gIClcbik7XG4qL1xuQGZvcndhcmQgJy4uL2RlZmF1bHRzL2Jvb3RzdHJhcC1kZWZhdWx0cyc7XG4iLCJAdXNlICcuL3NyYy9zdHlsZXMvdmVuZG9yL3ZhcmlhYmxlcycgYXMgdnY7XG5cbjo6bmctZGVlcCBjZC1wb29sLWxpc3Qge1xuICAucGctY2xlYW4ge1xuICAgIGNvbG9yOiB2di4kc3VjY2VzcztcbiAgfVxuXG4gIC5wZy13b3JraW5nIHtcbiAgICBjb2xvcjogdnYuJHByaW1hcnk7XG4gIH1cblxuICAucGctd2FybmluZyB7XG4gICAgY29sb3I6IHZ2LiR3YXJuaW5nO1xuICB9XG5cbiAgLnBnLXVua25vd24ge1xuICAgIGNvbG9yOiB2di4kZGFuZ2VyO1xuICB9XG59XG4iLCIvLyBDb2xvciBzeXN0ZW1cblxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk1MDU3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAjMDAwICFkZWZhdWx0O1xuXG4kYmx1ZTogIzAwN2JmZiAhZGVmYXVsdDtcbiRpbmRpZ286ICM2NjEwZjIgIWRlZmF1bHQ7XG4kcHVycGxlOiAjNmY0MmMxICFkZWZhdWx0O1xuJHBpbms6ICNhOTQ0NDIgIWRlZmF1bHQ7XG4kcmVkOiAjZGMzNTQ1ICFkZWZhdWx0O1xuJG9yYW5nZTogI2ZkN2UxNCAhZGVmYXVsdDtcbiR5ZWxsb3c6ICNkNDgyMDAgIWRlZmF1bHQ7XG4kZ3JlZW46ICMwMDhhMDAgIWRlZmF1bHQ7XG4kdGVhbDogIzIwYzk5NyAhZGVmYXVsdDtcbiRjeWFuOiAjMTdhMmI4ICFkZWZhdWx0O1xuJGJhcmxleS13aGl0ZTogI2ZjZWNiYSAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICMyNTgyOGUgIWRlZmF1bHQ7XG4kcHJpbWFyeS01MDA6ICMyYjk5YTggIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAjMzc0MjQ5ICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiR3YXJuaW5nOiAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogJHJlZCAhZGVmYXVsdDtcbiRsaWdodDogJGdyYXktMTAwICFkZWZhdWx0O1xuJGRhcms6ICRncmF5LTgwMCAhZGVmYXVsdDtcblxuLy9iYWRnZXMgY29sb3JzXG4kZ3JlZW4tMzAwOiAjNmVjNjY0O1xuJGN5YW4tMzAwOiAjMDA5NTk2O1xuJHB1cnBsZS0zMDA6ICNhMThmZmY7XG4kbGlnaHQtYmx1ZS0zMDA6ICMzNWNhZWQ7XG4kZ29sZC0zMDA6ICNmNGMxNDU7XG4kbGlnaHQtZ3JlZW4tMzAwOiAjYWNlMTJlO1xuXG4vLyBFeHRyYSB0aGVtZSBjb2xvcnMuXG4kYWNjZW50OiAkcHJpbWFyeSAhZGVmYXVsdDtcbiR3YXJuaW5nLWRhcms6ICRvcmFuZ2UgIWRlZmF1bHQ7XG5cbiRmZy1jb2xvci1vdmVyLWRhcmstYmc6ICR3aGl0ZSAhZGVmYXVsdDtcbiRmZy1ob3Zlci1jb2xvci1vdmVyLWRhcmstYmc6ICRncmF5LTUwMCAhZGVmYXVsdDtcblxuJHRoZW1lLWNvbG9yczogKFxuICAnYWNjZW50JzogJGFjY2VudCxcbiAgJ3dhcm5pbmctZGFyayc6ICR3YXJuaW5nLWRhcmssXG4gICdwcmltYXJ5JzogJGFjY2VudCxcbiAgJ3NlY29uZGFyeSc6ICRzZWNvbmRhcnksXG4gICdzdWNjZXNzJzogJHN1Y2Nlc3MsXG4gICdpbmZvJzogJGluZm8sXG4gICd3YXJuaW5nJzogJHdhcm5pbmcsXG4gICdkYW5nZXInOiAkZGFuZ2VyLFxuICAnbGlnaHQnOiAkbGlnaHQsXG4gICdkYXJrJzogJGRhcmtcbikgIWRlZmF1bHQ7XG5cbi8vIEJvZHlcbiRib2R5LWNvbG9yLWJyaWdodDogJGxpZ2h0ICFkZWZhdWx0O1xuJGJvZHktYmc6ICR3aGl0ZSAhZGVmYXVsdDtcbiRib2R5LWNvbG9yOiAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kYm9keS1iZy1hbHQ6ICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gSGVhbHRoIGNvbG9ycy5cbiRoZWFsdGgtY29sb3ItZXJyb3I6ICRyZWQgIWRlZmF1bHQ7XG4kaGVhbHRoLWNvbG9yLWhlYWx0aHk6ICRncmVlbiAhZGVmYXVsdDtcbiRoZWFsdGgtY29sb3Itd2FybmluZzogJHllbGxvdyAhZGVmYXVsdDtcbiRoZWFsdGgtY29sb3Itd2FybmluZy04MDA6ICM5ZDZkMTAgIWRlZmF1bHQ7XG5cbi8vIENoYXJ0IGNvbG9ycy5cbiRjaGFydC1jb2xvci1yZWQ6ICRyZWQgIWRlZmF1bHQ7XG4kY2hhcnQtY29sb3ItYmx1ZTogIzA2YyAhZGVmYXVsdDtcbiRjaGFydC1jb2xvci1vcmFuZ2U6ICNlZjkyMzQgIWRlZmF1bHQ7XG4kY2hhcnQtY29sb3IteWVsbG93OiAjZjZkMTczICFkZWZhdWx0O1xuJGNoYXJ0LWNvbG9yLWdyZWVuOiAkZ3JlZW4gIWRlZmF1bHQ7XG4kY2hhcnQtY29sb3ItZ3JheTogI2VkZWRlZCAhZGVmYXVsdDtcbiRjaGFydC1jb2xvci1jeWFuOiAkcHJpbWFyeS01MDAgIWRlZmF1bHQ7XG4kY2hhcnQtY29sb3ItcHVycGxlOiAjM2MzZDk5ICFkZWZhdWx0O1xuJGNoYXJ0LWNvbG9yLWNlbnRlci10ZXh0OiAjMTUxNTE1ICFkZWZhdWx0O1xuJGNoYXJ0LWNvbG9yLWNlbnRlci10ZXh0LWRlc2NyaXB0aW9uOiAjNzI3NjdiICFkZWZhdWx0O1xuJGNoYXJ0LWNvbG9yLXRvb2x0aXAtYmFja2dyb3VuZDogJGJsYWNrICFkZWZhdWx0O1xuJGNoYXJ0LWRhbmdlcjogI2M5MTkwYiAhZGVmYXVsdDtcblxuLy8gVHlwb2dyYXBoeVxuXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgJ05vdG8gU2FucycsIHNhbnMtc2VyaWYsXG4gICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaScgIWRlZmF1bHQ7XG5cbi8vIENhcmRcblxuJGNhcmQtY2FwLWJnOiAkZ3JheS0xMDAgIWRlZmF1bHQ7XG5cbi8vIEdyaWRcblxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAzMHB4ICFkZWZhdWx0O1xuXG4vLyBUYWJsZVxuXG4kZGF0YXRhYmxlLWRpdmlkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjA5KSAhZGVmYXVsdDtcblxuLy8gTmF2c1xuXG4kbmF2LXRhYnMtbWFyZ2luLWJvdHRvbTogMXJlbSAhZGVmYXVsdDtcblxuLy8gVG9vbHRpcHNcblxuJHRvb2x0aXAtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcbiR0b29sdGlwLWJnOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiR0b29sdGlwLW9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIE1pc2NcblxuJHNjcmVlbi1zbS1taW46IDU3NnB4ICFkZWZhdWx0O1xuJHNjcmVlbi1tZC1taW46IDc2OHB4ICFkZWZhdWx0O1xuJHNjcmVlbi1sZy1taW46IDk5MnB4ICFkZWZhdWx0O1xuJHNjcmVlbi14bC1taW46IDEyMDBweCAhZGVmYXVsdDtcblxuJHNjcmVlbi14cy1tYXg6IGNhbGMoI3skc2NyZWVuLXNtLW1pbn0gLSAxcHgpICFkZWZhdWx0O1xuJHNjcmVlbi1zbS1tYXg6IGNhbGMoI3skc2NyZWVuLW1kLW1pbn0gLSAxcHgpICFkZWZhdWx0O1xuJHNjcmVlbi1tZC1tYXg6IGNhbGMoI3skc2NyZWVuLWxnLW1pbn0gLSAxcHgpICFkZWZhdWx0O1xuJHNjcmVlbi1sZy1tYXg6IGNhbGMoI3skc2NyZWVuLXhsLW1pbn0gLSAxcHgpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWhlaWdodDogNDNweCAhZGVmYXVsdDtcbiJdfQ== */"] });


/***/ }),

/***/ 18275:
/*!******************************************!*\
  !*** ./src/app/ceph/pool/pool.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoolModule": () => (/* binding */ PoolModule),
/* harmony export */   "RoutedPoolModule": () => (/* binding */ RoutedPoolModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/shared.module */ 44466);
/* harmony import */ var _block_block_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block/block.module */ 14763);
/* harmony import */ var _shared_ceph_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/ceph-shared.module */ 370);
/* harmony import */ var _crush_rule_form_modal_crush_rule_form_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crush-rule-form-modal/crush-rule-form-modal.component */ 34363);
/* harmony import */ var _erasure_code_profile_form_erasure_code_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./erasure-code-profile-form/erasure-code-profile-form-modal.component */ 28109);
/* harmony import */ var _pool_details_pool_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pool-details/pool-details.component */ 69094);
/* harmony import */ var _pool_form_pool_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pool-form/pool-form.component */ 94012);
/* harmony import */ var _pool_list_pool_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pool-list/pool-list.component */ 98586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 18259);















class PoolModule {
}
PoolModule.ɵfac = function PoolModule_Factory(t) { return new (t || PoolModule)(); };
PoolModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: PoolModule });
PoolModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _shared_ceph_shared_module__WEBPACK_IMPORTED_MODULE_3__.CephSharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavModule,
            _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTooltipModule,
            _block_block_module__WEBPACK_IMPORTED_MODULE_2__.BlockModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](PoolModule, { declarations: [_pool_list_pool_list_component__WEBPACK_IMPORTED_MODULE_8__.PoolListComponent,
        _pool_form_pool_form_component__WEBPACK_IMPORTED_MODULE_7__.PoolFormComponent,
        _erasure_code_profile_form_erasure_code_profile_form_modal_component__WEBPACK_IMPORTED_MODULE_5__.ErasureCodeProfileFormModalComponent,
        _crush_rule_form_modal_crush_rule_form_modal_component__WEBPACK_IMPORTED_MODULE_4__.CrushRuleFormModalComponent,
        _pool_details_pool_details_component__WEBPACK_IMPORTED_MODULE_6__.PoolDetailsComponent], imports: [_shared_ceph_shared_module__WEBPACK_IMPORTED_MODULE_3__.CephSharedModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTooltipModule,
        _block_block_module__WEBPACK_IMPORTED_MODULE_2__.BlockModule], exports: [_pool_list_pool_list_component__WEBPACK_IMPORTED_MODULE_8__.PoolListComponent, _pool_form_pool_form_component__WEBPACK_IMPORTED_MODULE_7__.PoolFormComponent] }); })();
const routes = [
    { path: '', component: _pool_list_pool_list_component__WEBPACK_IMPORTED_MODULE_8__.PoolListComponent },
    {
        path: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.URLVerbs.CREATE,
        component: _pool_form_pool_form_component__WEBPACK_IMPORTED_MODULE_7__.PoolFormComponent,
        data: { breadcrumbs: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.ActionLabels.CREATE }
    },
    {
        path: `${_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.URLVerbs.EDIT}/:name`,
        component: _pool_form_pool_form_component__WEBPACK_IMPORTED_MODULE_7__.PoolFormComponent,
        data: { breadcrumbs: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.ActionLabels.EDIT }
    }
];
class RoutedPoolModule {
}
RoutedPoolModule.ɵfac = function RoutedPoolModule_Factory(t) { return new (t || RoutedPoolModule)(); };
RoutedPoolModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: RoutedPoolModule });
RoutedPoolModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[PoolModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](RoutedPoolModule, { imports: [PoolModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] }); })();


/***/ }),

/***/ 84779:
/*!***********************************!*\
  !*** ./src/app/ceph/pool/pool.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pool": () => (/* binding */ Pool)
/* harmony export */ });
class Pool {
    constructor(name) {
        this.pool_name = name;
    }
}


/***/ }),

/***/ 73345:
/*!************************************************************!*\
  !*** ./src/app/shared/api/erasure-code-profile.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErasureCodeProfileService": () => (/* binding */ ErasureCodeProfileService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 93690);



class ErasureCodeProfileService {
    constructor(http) {
        this.http = http;
        this.apiPath = 'api/erasure_code_profile';
        this.formTooltips = {
            // Copied from /doc/rados/operations/erasure-code.*.rst
            k: "Each object is split in data-chunks parts, each stored on a different OSD.",
            m: "Compute coding chunks for each object and store them on different OSDs.\n      The number of coding chunks is also the number of OSDs that can be down without losing data.",
            plugins: {
                jerasure: {
                    description: "The jerasure plugin is the most generic and flexible plugin,\n          it is also the default for Ceph erasure coded pools.",
                    technique: "The more flexible technique is reed_sol_van : it is enough to set k\n          and m. The cauchy_good technique can be faster but you need to chose the packetsize\n          carefully. All of reed_sol_r6_op, liberation, blaum_roth, liber8tion are RAID6 equivalents\n          in the sense that they can only be configured with m=2.",
                    packetSize: "The encoding will be done on packets of bytes size at a time.\n          Choosing the right packet size is difficult.\n          The jerasure documentation contains extensive information on this topic."
                },
                lrc: {
                    description: "With the jerasure plugin, when an erasure coded object is stored on\n          multiple OSDs, recovering from the loss of one OSD requires reading from all the others.\n          For instance if jerasure is configured with k=8 and m=4, losing one OSD requires reading\n          from the eleven others to repair.\n\n          The lrc erasure code plugin creates local parity chunks to be able to recover using\n          less OSDs. For instance if lrc is configured with k=8, m=4 and l=4, it will create\n          an additional parity chunk for every four OSDs. When a single OSD is lost, it can be\n          recovered with only four OSDs instead of eleven.",
                    l: "Group the coding and data chunks into sets of size locality. For instance,\n          for k=4 and m=2, when locality=3 two groups of three are created. Each set can\n          be recovered without reading chunks from another set.",
                    crushLocality: "The type of the crush bucket in which each set of chunks defined\n          by l will be stored. For instance, if it is set to rack, each group of l chunks will be\n          placed in a different rack. It is used to create a CRUSH rule step such as step choose\n          rack. If it is not set, no such grouping is done."
                },
                isa: {
                    description: "The isa plugin encapsulates the ISA library. It only runs on Intel processors.",
                    technique: "The ISA plugin comes in two Reed Solomon forms.\n          If reed_sol_van is set, it is Vandermonde, if cauchy is set, it is Cauchy."
                },
                shec: {
                    description: "The shec plugin encapsulates the multiple SHEC library.\n          It allows ceph to recover data more efficiently than Reed Solomon codes.",
                    c: "The number of parity chunks each of which includes each data chunk in its\n          calculation range. The number is used as a durability estimator. For instance, if c=2,\n          2 OSDs can be down without losing data."
                },
                clay: {
                    description: "CLAY (short for coupled-layer) codes are erasure codes designed to\n          bring about significant savings in terms of network bandwidth and disk IO when a failed\n          node/OSD/rack is being repaired.",
                    d: "Number of OSDs requested to send data during recovery of a single chunk.\n          d needs to be chosen such that k+1 <= d <= k+m-1. The larger the d, the better\n          the savings.",
                    scalar_mds: "scalar_mds specifies the plugin that is used as a building block\n          in the layered construction. It can be one of jerasure, isa, shec.",
                    technique: "technique specifies the technique that will be picked\n          within the 'scalar_mds' plugin specified. Supported techniques\n          are 'reed_sol_van', 'reed_sol_r6_op', 'cauchy_orig',\n          'cauchy_good', 'liber8tion' for jerasure, 'reed_sol_van',\n          'cauchy' for isa and 'single', 'multiple' for shec."
                }
            },
            crushRoot: "The name of the crush bucket used for the first step of the CRUSH rule.\n      For instance step take default.",
            crushFailureDomain: "Ensure that no two chunks are in a bucket with the same failure\n      domain. For instance, if the failure domain is host no two chunks will be stored on the same\n      host. It is used to create a CRUSH rule step such as step chooseleaf host.",
            crushDeviceClass: "Restrict placement to devices of a specific class\n      (e.g., ssd or hdd), using the crush device class names in the CRUSH map.",
            directory: "Set the directory name from which the erasure code plugin is loaded."
        };
    }
    list() {
        return this.http.get(this.apiPath);
    }
    create(ecp) {
        return this.http.post(this.apiPath, ecp, { observe: 'response' });
    }
    delete(name) {
        return this.http.delete(`${this.apiPath}/${name}`, { observe: 'response' });
    }
    getInfo() {
        return this.http.get(`ui-${this.apiPath}/info`);
    }
}
ErasureCodeProfileService.ɵfac = function ErasureCodeProfileService_Factory(t) { return new (t || ErasureCodeProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ErasureCodeProfileService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErasureCodeProfileService, factory: ErasureCodeProfileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 60228:
/*!**************************************************************!*\
  !*** ./src/app/shared/classes/crush.node.selection.class.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrushNodeSelectionClass": () => (/* binding */ CrushNodeSelectionClass)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

class CrushNodeSelectionClass {
    constructor() {
        this.nodes = [];
        this.idTree = {};
        this.allDevices = [];
        this.buckets = [];
        this.failureDomains = {};
        this.failureDomainKeys = [];
        this.devices = [];
        this.deviceCount = 0;
    }
    static searchFailureDomains(nodes, s) {
        return this.getFailureDomains(this.search(nodes, s));
    }
    /**
     * Filters crush map for a node and it's tree.
     * The node name as provided in crush rules attribute item_name is supported.
     * This means that '$name~$deviceType' can be used and will result in a crush map
     * that only include buckets with the specified device in use as their leaf.
     */
    static search(nodes, s) {
        const [search, deviceType] = s.split('~'); // Used inside item_name in crush rules
        const node = nodes.find((n) => ['name', 'id', 'type'].some((attr) => n[attr] === search));
        if (!node) {
            return [];
        }
        nodes = this.getSubNodes(node, this.createIdTreeFromNodes(nodes));
        if (deviceType) {
            nodes = this.filterNodesByDeviceType(nodes, deviceType);
        }
        return nodes;
    }
    static createIdTreeFromNodes(nodes) {
        const idTree = {};
        nodes.forEach((node) => {
            idTree[node.id] = node;
        });
        return idTree;
    }
    static getSubNodes(node, idTree) {
        let subNodes = [node]; // Includes parent node
        if (!node.children) {
            return subNodes;
        }
        node.children.forEach((id) => {
            const childNode = idTree[id];
            subNodes = subNodes.concat(this.getSubNodes(childNode, idTree));
        });
        return subNodes;
    }
    static filterNodesByDeviceType(nodes, deviceType) {
        let doNotInclude = nodes
            .filter((n) => n.device_class && n.device_class !== deviceType)
            .map((n) => n.id);
        let foundNewNode;
        let childrenToRemove = doNotInclude;
        // Filters out all unwanted nodes
        do {
            foundNewNode = false;
            nodes = nodes.filter((n) => !doNotInclude.includes(n.id)); // Unwanted nodes
            // Find nodes where all children were filtered
            const toRemoveNext = [];
            nodes.forEach((n) => {
                if (n.children && n.children.every((id) => doNotInclude.includes(id))) {
                    toRemoveNext.push(n.id);
                    foundNewNode = true;
                }
            });
            if (foundNewNode) {
                doNotInclude = toRemoveNext; // Reduces array length
                childrenToRemove = childrenToRemove.concat(toRemoveNext);
            }
        } while (foundNewNode);
        // Removes filtered out children in all left nodes with children
        nodes = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(nodes); // Clone objects to not change original objects
        nodes = nodes.map((n) => {
            if (!n.children) {
                return n;
            }
            n.children = n.children.filter((id) => !childrenToRemove.includes(id));
            return n;
        });
        return nodes;
    }
    static getFailureDomains(nodes) {
        const domains = {};
        nodes.forEach((node) => {
            const type = node.type;
            if (!domains[type]) {
                domains[type] = [];
            }
            domains[type].push(node);
        });
        return domains;
    }
    initCrushNodeSelection(nodes, rootControl, failureControl, deviceControl) {
        this.nodes = nodes;
        this.idTree = CrushNodeSelectionClass.createIdTreeFromNodes(nodes);
        nodes.forEach((node) => {
            this.idTree[node.id] = node;
        });
        this.buckets = lodash__WEBPACK_IMPORTED_MODULE_0___default().sortBy(nodes.filter((n) => n.children), 'name');
        this.controls = {
            root: rootControl,
            failure: failureControl,
            device: deviceControl
        };
        this.preSelectRoot();
        this.controls.root.valueChanges.subscribe(() => this.onRootChange());
        this.controls.failure.valueChanges.subscribe(() => this.onFailureDomainChange());
        this.controls.device.valueChanges.subscribe(() => this.onDeviceChange());
    }
    preSelectRoot() {
        const rootNode = this.nodes.find((node) => node.type === 'root');
        this.silentSet(this.controls.root, rootNode);
        this.onRootChange();
    }
    silentSet(control, value) {
        control.setValue(value, { emitEvent: false });
    }
    onRootChange() {
        const nodes = CrushNodeSelectionClass.getSubNodes(this.controls.root.value, this.idTree);
        const domains = CrushNodeSelectionClass.getFailureDomains(nodes);
        Object.keys(domains).forEach((type) => {
            if (domains[type].length <= 1) {
                delete domains[type];
            }
        });
        this.failureDomains = domains;
        this.failureDomainKeys = Object.keys(domains).sort();
        this.updateFailureDomain();
    }
    updateFailureDomain() {
        let failureDomain = this.getIncludedCustomValue(this.controls.failure, Object.keys(this.failureDomains));
        if (failureDomain === '') {
            failureDomain = this.setMostCommonDomain(this.controls.failure);
        }
        this.updateDevices(failureDomain);
    }
    getIncludedCustomValue(control, includedIn) {
        return control.dirty && includedIn.includes(control.value) ? control.value : '';
    }
    setMostCommonDomain(failureControl) {
        let winner = { n: 0, type: '' };
        Object.keys(this.failureDomains).forEach((type) => {
            const n = this.failureDomains[type].length;
            if (winner.n < n) {
                winner = { n, type };
            }
        });
        this.silentSet(failureControl, winner.type);
        return winner.type;
    }
    onFailureDomainChange() {
        this.updateDevices();
    }
    updateDevices(failureDomain = this.controls.failure.value) {
        const subNodes = lodash__WEBPACK_IMPORTED_MODULE_0___default().flatten(this.failureDomains[failureDomain].map((node) => CrushNodeSelectionClass.getSubNodes(node, this.idTree)));
        this.allDevices = subNodes.filter((n) => n.device_class).map((n) => n.device_class);
        this.devices = lodash__WEBPACK_IMPORTED_MODULE_0___default().uniq(this.allDevices).sort();
        const device = this.devices.length === 1
            ? this.devices[0]
            : this.getIncludedCustomValue(this.controls.device, this.devices);
        this.silentSet(this.controls.device, device);
        this.onDeviceChange(device);
    }
    onDeviceChange(deviceType = this.controls.device.value) {
        this.deviceCount =
            deviceType === ''
                ? this.allDevices.length
                : this.allDevices.filter((type) => type === deviceType).length;
    }
}


/***/ }),

/***/ 58102:
/*!*******************************************************!*\
  !*** ./src/app/shared/models/erasure-code-profile.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErasureCodeProfile": () => (/* binding */ ErasureCodeProfile)
/* harmony export */ });
class ErasureCodeProfile {
}


/***/ })

}]);
//# sourceMappingURL=src_app_ceph_pool_pool_module_ts.js.map