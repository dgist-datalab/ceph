"use strict";
(self["webpackChunkceph_dashboard"] = self["webpackChunkceph_dashboard"] || []).push([["default-src_app_ceph_block_block_module_ts"],{

/***/ 14763:
/*!********************************************!*\
  !*** ./src/app/ceph/block/block.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockModule": () => (/* binding */ BlockModule),
/* harmony export */   "RoutedBlockModule": () => (/* binding */ RoutedBlockModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @circlon/angular-tree-component */ 67891);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var ngx_pipe_function__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-pipe-function */ 47434);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_services_feature_toggles_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/services/feature-toggles-guard.service */ 4222);
/* harmony import */ var _app_shared_services_module_status_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/services/module-status-guard.service */ 54462);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/shared.module */ 44466);
/* harmony import */ var _iscsi_setting_iscsi_setting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iscsi-setting/iscsi-setting.component */ 161);
/* harmony import */ var _iscsi_tabs_iscsi_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iscsi-tabs/iscsi-tabs.component */ 98406);
/* harmony import */ var _iscsi_target_details_iscsi_target_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iscsi-target-details/iscsi-target-details.component */ 32478);
/* harmony import */ var _iscsi_target_discovery_modal_iscsi_target_discovery_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./iscsi-target-discovery-modal/iscsi-target-discovery-modal.component */ 23219);
/* harmony import */ var _iscsi_target_form_iscsi_target_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./iscsi-target-form/iscsi-target-form.component */ 83866);
/* harmony import */ var _iscsi_target_image_settings_modal_iscsi_target_image_settings_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./iscsi-target-image-settings-modal/iscsi-target-image-settings-modal.component */ 86369);
/* harmony import */ var _iscsi_target_iqn_settings_modal_iscsi_target_iqn_settings_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./iscsi-target-iqn-settings-modal/iscsi-target-iqn-settings-modal.component */ 81259);
/* harmony import */ var _iscsi_target_list_iscsi_target_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./iscsi-target-list/iscsi-target-list.component */ 35347);
/* harmony import */ var _iscsi_iscsi_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./iscsi/iscsi.component */ 93320);
/* harmony import */ var _mirroring_mirroring_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mirroring/mirroring.module */ 51361);
/* harmony import */ var _mirroring_overview_overview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mirroring/overview/overview.component */ 74783);
/* harmony import */ var _mirroring_pool_edit_mode_modal_pool_edit_mode_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mirroring/pool-edit-mode-modal/pool-edit-mode-modal.component */ 10922);
/* harmony import */ var _rbd_configuration_form_rbd_configuration_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rbd-configuration-form/rbd-configuration-form.component */ 44509);
/* harmony import */ var _rbd_configuration_list_rbd_configuration_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rbd-configuration-list/rbd-configuration-list.component */ 56467);
/* harmony import */ var _rbd_details_rbd_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rbd-details/rbd-details.component */ 65838);
/* harmony import */ var _rbd_form_rbd_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rbd-form/rbd-form.component */ 58103);
/* harmony import */ var _rbd_list_rbd_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rbd-list/rbd-list.component */ 96176);
/* harmony import */ var _rbd_namespace_form_rbd_namespace_form_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rbd-namespace-form/rbd-namespace-form-modal.component */ 7181);
/* harmony import */ var _rbd_namespace_list_rbd_namespace_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rbd-namespace-list/rbd-namespace-list.component */ 58344);
/* harmony import */ var _rbd_performance_rbd_performance_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./rbd-performance/rbd-performance.component */ 89188);
/* harmony import */ var _rbd_snapshot_form_rbd_snapshot_form_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./rbd-snapshot-form/rbd-snapshot-form-modal.component */ 15088);
/* harmony import */ var _rbd_snapshot_list_rbd_snapshot_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./rbd-snapshot-list/rbd-snapshot-list.component */ 14484);
/* harmony import */ var _rbd_tabs_rbd_tabs_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./rbd-tabs/rbd-tabs.component */ 80208);
/* harmony import */ var _rbd_trash_list_rbd_trash_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./rbd-trash-list/rbd-trash-list.component */ 86618);
/* harmony import */ var _rbd_trash_move_modal_rbd_trash_move_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./rbd-trash-move-modal/rbd-trash-move-modal.component */ 40736);
/* harmony import */ var _rbd_trash_purge_modal_rbd_trash_purge_modal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./rbd-trash-purge-modal/rbd-trash-purge-modal.component */ 95353);
/* harmony import */ var _rbd_trash_restore_modal_rbd_trash_restore_modal_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./rbd-trash-restore-modal/rbd-trash-restore-modal.component */ 20428);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ 18259);







































class BlockModule {
}
BlockModule.ɵfac = function BlockModule_Factory(t) { return new (t || BlockModule)(); };
BlockModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineNgModule"]({ type: BlockModule });
BlockModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_32__.CommonModule,
            _mirroring_mirroring_module__WEBPACK_IMPORTED_MODULE_13__.MirroringModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__.NgbPopoverModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__.NgbTooltipModule,
            ngx_pipe_function__WEBPACK_IMPORTED_MODULE_35__.NgxPipeFunctionModule,
            _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_36__.RouterModule,
            _circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_37__.TreeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetNgModuleScope"](BlockModule, { declarations: [_rbd_list_rbd_list_component__WEBPACK_IMPORTED_MODULE_20__.RbdListComponent,
        _iscsi_iscsi_component__WEBPACK_IMPORTED_MODULE_12__.IscsiComponent,
        _iscsi_setting_iscsi_setting_component__WEBPACK_IMPORTED_MODULE_4__.IscsiSettingComponent,
        _iscsi_tabs_iscsi_tabs_component__WEBPACK_IMPORTED_MODULE_5__.IscsiTabsComponent,
        _iscsi_target_list_iscsi_target_list_component__WEBPACK_IMPORTED_MODULE_11__.IscsiTargetListComponent,
        _rbd_details_rbd_details_component__WEBPACK_IMPORTED_MODULE_18__.RbdDetailsComponent,
        _rbd_form_rbd_form_component__WEBPACK_IMPORTED_MODULE_19__.RbdFormComponent,
        _rbd_namespace_form_rbd_namespace_form_modal_component__WEBPACK_IMPORTED_MODULE_21__.RbdNamespaceFormModalComponent,
        _rbd_namespace_list_rbd_namespace_list_component__WEBPACK_IMPORTED_MODULE_22__.RbdNamespaceListComponent,
        _rbd_snapshot_list_rbd_snapshot_list_component__WEBPACK_IMPORTED_MODULE_25__.RbdSnapshotListComponent,
        _rbd_snapshot_form_rbd_snapshot_form_modal_component__WEBPACK_IMPORTED_MODULE_24__.RbdSnapshotFormModalComponent,
        _rbd_trash_list_rbd_trash_list_component__WEBPACK_IMPORTED_MODULE_27__.RbdTrashListComponent,
        _rbd_trash_move_modal_rbd_trash_move_modal_component__WEBPACK_IMPORTED_MODULE_28__.RbdTrashMoveModalComponent,
        _rbd_trash_restore_modal_rbd_trash_restore_modal_component__WEBPACK_IMPORTED_MODULE_30__.RbdTrashRestoreModalComponent,
        _rbd_trash_purge_modal_rbd_trash_purge_modal_component__WEBPACK_IMPORTED_MODULE_29__.RbdTrashPurgeModalComponent,
        _iscsi_target_details_iscsi_target_details_component__WEBPACK_IMPORTED_MODULE_6__.IscsiTargetDetailsComponent,
        _iscsi_target_form_iscsi_target_form_component__WEBPACK_IMPORTED_MODULE_8__.IscsiTargetFormComponent,
        _iscsi_target_image_settings_modal_iscsi_target_image_settings_modal_component__WEBPACK_IMPORTED_MODULE_9__.IscsiTargetImageSettingsModalComponent,
        _iscsi_target_iqn_settings_modal_iscsi_target_iqn_settings_modal_component__WEBPACK_IMPORTED_MODULE_10__.IscsiTargetIqnSettingsModalComponent,
        _iscsi_target_discovery_modal_iscsi_target_discovery_modal_component__WEBPACK_IMPORTED_MODULE_7__.IscsiTargetDiscoveryModalComponent,
        _rbd_configuration_list_rbd_configuration_list_component__WEBPACK_IMPORTED_MODULE_17__.RbdConfigurationListComponent,
        _rbd_configuration_form_rbd_configuration_form_component__WEBPACK_IMPORTED_MODULE_16__.RbdConfigurationFormComponent,
        _rbd_tabs_rbd_tabs_component__WEBPACK_IMPORTED_MODULE_26__.RbdTabsComponent,
        _rbd_performance_rbd_performance_component__WEBPACK_IMPORTED_MODULE_23__.RbdPerformanceComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_32__.CommonModule,
        _mirroring_mirroring_module__WEBPACK_IMPORTED_MODULE_13__.MirroringModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__.NgbPopoverModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__.NgbTooltipModule,
        ngx_pipe_function__WEBPACK_IMPORTED_MODULE_35__.NgxPipeFunctionModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_36__.RouterModule,
        _circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_37__.TreeModule], exports: [_rbd_configuration_list_rbd_configuration_list_component__WEBPACK_IMPORTED_MODULE_17__.RbdConfigurationListComponent, _rbd_configuration_form_rbd_configuration_form_component__WEBPACK_IMPORTED_MODULE_16__.RbdConfigurationFormComponent] }); })();
/* The following breakdown is needed to allow importing block.module without
    the routes (e.g.: this module is imported by pool.module for RBD QoS
    components)
*/
const routes = [
    { path: '', redirectTo: 'rbd', pathMatch: 'full' },
    {
        path: 'rbd',
        canActivate: [_app_shared_services_feature_toggles_guard_service__WEBPACK_IMPORTED_MODULE_1__.FeatureTogglesGuardService, _app_shared_services_module_status_guard_service__WEBPACK_IMPORTED_MODULE_2__.ModuleStatusGuardService],
        data: {
            moduleStatusGuardConfig: {
                uiApiPath: 'block/rbd',
                redirectTo: 'error',
                header: 'No RBD pools available',
                button_name: 'Create RBD pool',
                button_route: '/pool/create'
            },
            breadcrumbs: 'Images'
        },
        children: [
            { path: '', component: _rbd_list_rbd_list_component__WEBPACK_IMPORTED_MODULE_20__.RbdListComponent },
            {
                path: 'namespaces',
                component: _rbd_namespace_list_rbd_namespace_list_component__WEBPACK_IMPORTED_MODULE_22__.RbdNamespaceListComponent,
                data: { breadcrumbs: 'Namespaces' }
            },
            {
                path: 'trash',
                component: _rbd_trash_list_rbd_trash_list_component__WEBPACK_IMPORTED_MODULE_27__.RbdTrashListComponent,
                data: { breadcrumbs: 'Trash' }
            },
            {
                path: 'performance',
                component: _rbd_performance_rbd_performance_component__WEBPACK_IMPORTED_MODULE_23__.RbdPerformanceComponent,
                data: { breadcrumbs: 'Overall Performance' }
            },
            {
                path: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.URLVerbs.CREATE,
                component: _rbd_form_rbd_form_component__WEBPACK_IMPORTED_MODULE_19__.RbdFormComponent,
                data: { breadcrumbs: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.ActionLabels.CREATE }
            },
            {
                path: `${_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.URLVerbs.EDIT}/:image_spec`,
                component: _rbd_form_rbd_form_component__WEBPACK_IMPORTED_MODULE_19__.RbdFormComponent,
                data: { breadcrumbs: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.ActionLabels.EDIT }
            },
            {
                path: `${_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.URLVerbs.CLONE}/:image_spec/:snap`,
                component: _rbd_form_rbd_form_component__WEBPACK_IMPORTED_MODULE_19__.RbdFormComponent,
                data: { breadcrumbs: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.ActionLabels.CLONE }
            },
            {
                path: `${_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.URLVerbs.COPY}/:image_spec`,
                component: _rbd_form_rbd_form_component__WEBPACK_IMPORTED_MODULE_19__.RbdFormComponent,
                data: { breadcrumbs: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.ActionLabels.COPY }
            },
            {
                path: `${_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.URLVerbs.COPY}/:image_spec/:snap`,
                component: _rbd_form_rbd_form_component__WEBPACK_IMPORTED_MODULE_19__.RbdFormComponent,
                data: { breadcrumbs: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.ActionLabels.COPY }
            }
        ]
    },
    {
        path: 'mirroring',
        component: _mirroring_overview_overview_component__WEBPACK_IMPORTED_MODULE_14__.OverviewComponent,
        canActivate: [_app_shared_services_feature_toggles_guard_service__WEBPACK_IMPORTED_MODULE_1__.FeatureTogglesGuardService, _app_shared_services_module_status_guard_service__WEBPACK_IMPORTED_MODULE_2__.ModuleStatusGuardService],
        data: {
            moduleStatusGuardConfig: {
                uiApiPath: 'block/mirroring',
                redirectTo: 'error',
                header: "RBD mirroring is not configured",
                button_name: "Configure RBD Mirroring",
                button_title: "This will create rbd-mirror service and a replicated RBD pool",
                component: 'RBD Mirroring',
                uiConfig: true
            },
            breadcrumbs: 'Mirroring'
        },
        children: [
            {
                path: `${_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.URLVerbs.EDIT}/:pool_name`,
                component: _mirroring_pool_edit_mode_modal_pool_edit_mode_modal_component__WEBPACK_IMPORTED_MODULE_15__.PoolEditModeModalComponent,
                outlet: 'modal'
            }
        ]
    },
    // iSCSI
    {
        path: 'iscsi',
        canActivate: [_app_shared_services_feature_toggles_guard_service__WEBPACK_IMPORTED_MODULE_1__.FeatureTogglesGuardService],
        data: { breadcrumbs: 'iSCSI' },
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: _iscsi_iscsi_component__WEBPACK_IMPORTED_MODULE_12__.IscsiComponent, data: { breadcrumbs: 'Overview' } },
            {
                path: 'targets',
                data: { breadcrumbs: 'Targets' },
                children: [
                    { path: '', component: _iscsi_target_list_iscsi_target_list_component__WEBPACK_IMPORTED_MODULE_11__.IscsiTargetListComponent },
                    {
                        path: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.URLVerbs.CREATE,
                        component: _iscsi_target_form_iscsi_target_form_component__WEBPACK_IMPORTED_MODULE_8__.IscsiTargetFormComponent,
                        data: { breadcrumbs: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.ActionLabels.CREATE }
                    },
                    {
                        path: `${_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.URLVerbs.EDIT}/:target_iqn`,
                        component: _iscsi_target_form_iscsi_target_form_component__WEBPACK_IMPORTED_MODULE_8__.IscsiTargetFormComponent,
                        data: { breadcrumbs: _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__.ActionLabels.EDIT }
                    }
                ]
            }
        ]
    }
];
class RoutedBlockModule {
}
RoutedBlockModule.ɵfac = function RoutedBlockModule_Factory(t) { return new (t || RoutedBlockModule)(); };
RoutedBlockModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineNgModule"]({ type: RoutedBlockModule });
RoutedBlockModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineInjector"]({ imports: [[BlockModule, _angular_router__WEBPACK_IMPORTED_MODULE_36__.RouterModule.forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetNgModuleScope"](RoutedBlockModule, { imports: [BlockModule, _angular_router__WEBPACK_IMPORTED_MODULE_36__.RouterModule] }); })();


/***/ }),

/***/ 161:
/*!*********************************************************************!*\
  !*** ./src/app/ceph/block/iscsi-setting/iscsi-setting.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IscsiSettingComponent": () => (/* binding */ IscsiSettingComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-group */ 95463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);









function IscsiSettingComponent_select_3_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", opt_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](opt_r5);
} }
function IscsiSettingComponent_select_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, IscsiSettingComponent_select_3_option_2_Template, 2, 2, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", ctx_r0.setting);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("name", ctx_r0.setting);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", ctx_r0.setting);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.limits["values"]);
} }
function IscsiSettingComponent_span_4_input_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 10);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", ctx_r6.setting);
} }
function IscsiSettingComponent_span_4_input_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 11);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", ctx_r7.setting);
} }
function IscsiSettingComponent_span_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", ctx_r8.setting + "True")("value", true)("formControlName", ctx_r8.setting);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", ctx_r8.setting + "True");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", ctx_r8.setting + "False")("value", false)("formControlName", ctx_r8.setting);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", ctx_r8.setting + "False");
} }
function IscsiSettingComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, IscsiSettingComponent_span_4_input_1_Template, 1, 1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, IscsiSettingComponent_span_4_input_2_Template, 1, 1, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, IscsiSettingComponent_span_4_ng_container_3_Template, 10, 8, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.limits["type"] === "int");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.limits["type"] === "str");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.limits["type"] === "bool");
} }
function IscsiSettingComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nExp"](ctx_r2.limits["min"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nApply"](2);
} }
function IscsiSettingComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nExp"](ctx_r3.limits["max"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nApply"](2);
} }
class IscsiSettingComponent {
    ngOnInit() {
        const validators = [];
        if ('min' in this.limits) {
            validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(this.limits['min']));
        }
        if ('max' in this.limits) {
            validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(this.limits['max']));
        }
        this.settingsForm.get(this.setting).setValidators(validators);
    }
}
IscsiSettingComponent.ɵfac = function IscsiSettingComponent_Factory(t) { return new (t || IscsiSettingComponent)(); };
IscsiSettingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: IscsiSettingComponent, selectors: [["cd-iscsi-setting"]], inputs: { settingsForm: "settingsForm", formDir: "formDir", setting: "setting", limits: "limits" }, decls: 7, vars: 7, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3918997869022270899$$SRC_APP_CEPH_BLOCK_ISCSI_SETTING_ISCSI_SETTING_COMPONENT_TS__1 = goog.getMsg("Must be greater than or equal to {$interpolation}.", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_0 = MSG_EXTERNAL_3918997869022270899$$SRC_APP_CEPH_BLOCK_ISCSI_SETTING_ISCSI_SETTING_COMPONENT_TS__1;
    }
    else {
        i18n_0 = "Must be greater than or equal to " + "\uFFFD0\uFFFD" + ".";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5607114880605224382$$SRC_APP_CEPH_BLOCK_ISCSI_SETTING_ISCSI_SETTING_COMPONENT_TS__3 = goog.getMsg("Must be less than or equal to {$interpolation}.", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_2 = MSG_EXTERNAL_5607114880605224382$$SRC_APP_CEPH_BLOCK_ISCSI_SETTING_ISCSI_SETTING_COMPONENT_TS__3;
    }
    else {
        i18n_2 = "Must be less than or equal to " + "\uFFFD0\uFFFD" + ".";
    } return [[1, "form-group", 3, "formGroup"], [1, "col-form-label", 3, "for"], ["class", "form-control", 3, "id", "name", "formControlName", 4, "ngIf"], [4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-control", 3, "id", "name", "formControlName"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "number", "class", "form-control", 3, "formControlName", 4, "ngIf"], ["type", "text", "class", "form-control", 3, "formControlName", 4, "ngIf"], ["type", "number", 1, "form-control", 3, "formControlName"], ["type", "text", 1, "form-control", 3, "formControlName"], [1, "custom-control", "custom-radio", "custom-control-inline"], ["type", "radio", 1, "custom-control-input", 3, "id", "value", "formControlName"], [1, "custom-control-label", 3, "for"], [1, "invalid-feedback"], i18n_0, i18n_2]; }, template: function IscsiSettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, IscsiSettingComponent_select_3_Template, 3, 5, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, IscsiSettingComponent_span_4_Template, 4, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, IscsiSettingComponent_span_5_Template, 3, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, IscsiSettingComponent_span_6_Template, 3, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.settingsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("for", ctx.setting);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.setting);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.limits["type"] === "enum");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.limits["type"] !== "enum");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.settingsForm.showError(ctx.setting, ctx.formDir, "min"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.settingsForm.showError(ctx.setting, ctx.formDir, "max"));
    } }, directives: [_shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_1__.CdFormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_2__.CdFormValidationDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_3__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_4__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpc2NzaS1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 98406:
/*!***************************************************************!*\
  !*** ./src/app/ceph/block/iscsi-tabs/iscsi-tabs.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IscsiTabsComponent": () => (/* binding */ IscsiTabsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 73903);


class IscsiTabsComponent {
}
IscsiTabsComponent.ɵfac = function IscsiTabsComponent_Factory(t) { return new (t || IscsiTabsComponent)(); };
IscsiTabsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IscsiTabsComponent, selectors: [["cd-iscsi-tabs"]], decls: 7, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2614607010577950577$$SRC_APP_CEPH_BLOCK_ISCSI_TABS_ISCSI_TABS_COMPONENT_TS_1 = goog.getMsg("Overview");
        i18n_0 = MSG_EXTERNAL_2614607010577950577$$SRC_APP_CEPH_BLOCK_ISCSI_TABS_ISCSI_TABS_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "Overview";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2603620551566373483$$SRC_APP_CEPH_BLOCK_ISCSI_TABS_ISCSI_TABS_COMPONENT_TS_3 = goog.getMsg("Targets");
        i18n_2 = MSG_EXTERNAL_2603620551566373483$$SRC_APP_CEPH_BLOCK_ISCSI_TABS_ISCSI_TABS_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "Targets";
    } return [[1, "nav", "nav-tabs"], [1, "nav-item"], ["routerLink", "/block/iscsi/overview", "routerLinkActive", "active", "ariaCurrentWhenActive", "page", 1, "nav-link"], i18n_0, ["routerLink", "/block/iscsi/targets", "routerLinkActive", "active", "ariaCurrentWhenActive", "page", 1, "nav-link"], i18n_2]; }, template: function IscsiTabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpc2NzaS10YWJzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 32478:
/*!***********************************************************************************!*\
  !*** ./src/app/ceph/block/iscsi-target-details/iscsi-target-details.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IscsiTargetDetailsComponent": () => (/* binding */ IscsiTargetDetailsComponent)
/* harmony export */ });
/* harmony import */ var _circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @circlon/angular-tree-component */ 67891);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/datatable/table/table.component */ 35905);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 65862);
/* harmony import */ var _app_shared_pipes_boolean_text_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/pipes/boolean-text.pipe */ 68962);
/* harmony import */ var _app_shared_pipes_iscsi_backstore_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/pipes/iscsi-backstore.pipe */ 88820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 48750);













const _c0 = ["highlightTpl"];
const _c1 = ["detailTable"];
const _c2 = ["tree"];
const _c5 = function () { return ["logged_in"]; };
const _c6 = function () { return ["logged_out"]; };
const _c7 = function (a0, a1) { return { "badge-success": a0, "badge-danger": a1 }; };
function IscsiTargetDetailsComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](node_r6.data.cdIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](node_r6.data.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c5).includes(node_r6.data.status), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c6).includes(node_r6.data.status)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", node_r6.data.status, " ");
} }
function IscsiTargetDetailsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "cd-table", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r3.data)("columns", ctx_r3.columns)("limit", 0);
} }
function IscsiTargetDetailsComponent_ng_template_9_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](value_r10);
} }
function IscsiTargetDetailsComponent_ng_template_9_strong_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](value_r10);
} }
function IscsiTargetDetailsComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, IscsiTargetDetailsComponent_ng_template_9_span_0_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, IscsiTargetDetailsComponent_ng_template_9_strong_1_Template, 2, 1, "strong", 12);
} if (rf & 2) {
    const row_r9 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r9.default === undefined || row_r9.default === row_r9.current);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r9.default !== undefined && row_r9.default !== row_r9.current);
} }
class IscsiTargetDetailsComponent {
    constructor(iscsiBackstorePipe, booleanTextPipe) {
        this.iscsiBackstorePipe = iscsiBackstorePipe;
        this.booleanTextPipe = booleanTextPipe;
        this.icons = _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__.Icons;
        this.metadata = {};
        this.nodes = [];
        this.treeOptions = {
            useVirtualScroll: true,
            actionMapping: {
                mouse: {
                    click: this.onNodeSelected.bind(this)
                }
            }
        };
    }
    set content(content) {
        this.detailTable = content;
        if (content) {
            content.updateColumns();
        }
    }
    ngOnInit() {
        this.columns = [
            {
                prop: 'displayName',
                name: "Name",
                flexGrow: 1,
                cellTemplate: this.highlightTpl
            },
            {
                prop: 'current',
                name: "Current",
                flexGrow: 1,
                cellTemplate: this.highlightTpl
            },
            {
                prop: 'default',
                name: "Default",
                flexGrow: 1,
                cellTemplate: this.highlightTpl
            }
        ];
    }
    ngOnChanges() {
        if (this.selection) {
            this.selectedItem = this.selection;
            this.generateTree();
        }
        this.data = undefined;
    }
    generateTree() {
        const target_meta = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(this.selectedItem.target_controls);
        // Target level authentication was introduced in ceph-iscsi config v11
        if (this.cephIscsiConfigVersion > 10) {
            lodash__WEBPACK_IMPORTED_MODULE_0___default().extend(target_meta, lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(this.selectedItem.auth));
        }
        this.metadata = { root: target_meta };
        const cssClasses = {
            target: {
                expanded: lodash__WEBPACK_IMPORTED_MODULE_0___default().join(this.selectedItem.cdExecuting
                    ? [_app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__.Icons.large, _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__.Icons.spinner, _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__.Icons.spin]
                    : [_app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__.Icons.large, _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__.Icons.bullseye], ' ')
            },
            initiators: {
                expanded: lodash__WEBPACK_IMPORTED_MODULE_0___default().join([_app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__.Icons.large, _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__.Icons.user], ' '),
                leaf: lodash__WEBPACK_IMPORTED_MODULE_0___default().join([_app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__.Icons.user], ' ')
            },
            groups: {
                expanded: lodash__WEBPACK_IMPORTED_MODULE_0___default().join([_app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__.Icons.large, _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__.Icons.users], ' '),
                leaf: lodash__WEBPACK_IMPORTED_MODULE_0___default().join([_app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__.Icons.users], ' ')
            },
            disks: {
                expanded: lodash__WEBPACK_IMPORTED_MODULE_0___default().join([_app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__.Icons.large, _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__.Icons.disk], ' '),
                leaf: lodash__WEBPACK_IMPORTED_MODULE_0___default().join([_app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__.Icons.disk], ' ')
            },
            portals: {
                expanded: lodash__WEBPACK_IMPORTED_MODULE_0___default().join([_app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__.Icons.large, _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__.Icons.server], ' '),
                leaf: lodash__WEBPACK_IMPORTED_MODULE_0___default().join([_app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_2__.Icons.server], ' ')
            }
        };
        const disks = [];
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.selectedItem.disks, (disk) => {
            const cdId = 'disk_' + disk.pool + '_' + disk.image;
            this.metadata[cdId] = {
                controls: disk.controls,
                backstore: disk.backstore
            };
            ['wwn', 'lun'].forEach((k) => {
                if (k in disk) {
                    this.metadata[cdId][k] = disk[k];
                }
            });
            disks.push({
                name: `${disk.pool}/${disk.image}`,
                cdId: cdId,
                cdIcon: cssClasses.disks.leaf
            });
        });
        const portals = [];
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.selectedItem.portals, (portal) => {
            portals.push({
                name: `${portal.host}:${portal.ip}`,
                cdIcon: cssClasses.portals.leaf
            });
        });
        const clients = [];
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.selectedItem.clients, (client) => {
            const client_metadata = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(client.auth);
            if (client.info) {
                lodash__WEBPACK_IMPORTED_MODULE_0___default().extend(client_metadata, client.info);
                delete client_metadata['state'];
                lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(Object.keys(client.info.state), (state) => {
                    client_metadata[state.toLowerCase()] = client.info.state[state];
                });
            }
            this.metadata['client_' + client.client_iqn] = client_metadata;
            const luns = [];
            client.luns.forEach((lun) => {
                luns.push({
                    name: `${lun.pool}/${lun.image}`,
                    cdId: 'disk_' + lun.pool + '_' + lun.image,
                    cdIcon: cssClasses.disks.leaf
                });
            });
            let status = '';
            if (client.info) {
                status = Object.keys(client.info.state).includes('LOGGED_IN') ? 'logged_in' : 'logged_out';
            }
            clients.push({
                name: client.client_iqn,
                status: status,
                cdId: 'client_' + client.client_iqn,
                children: luns,
                cdIcon: cssClasses.initiators.leaf
            });
        });
        const groups = [];
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.selectedItem.groups, (group) => {
            const luns = [];
            group.disks.forEach((disk) => {
                luns.push({
                    name: `${disk.pool}/${disk.image}`,
                    cdId: 'disk_' + disk.pool + '_' + disk.image,
                    cdIcon: cssClasses.disks.leaf
                });
            });
            const initiators = [];
            group.members.forEach((member) => {
                initiators.push({
                    name: member,
                    cdId: 'client_' + member
                });
            });
            groups.push({
                name: group.group_id,
                cdIcon: cssClasses.groups.leaf,
                children: [
                    {
                        name: 'Disks',
                        children: luns,
                        cdIcon: cssClasses.disks.expanded
                    },
                    {
                        name: 'Initiators',
                        children: initiators,
                        cdIcon: cssClasses.initiators.expanded
                    }
                ]
            });
        });
        this.nodes = [
            {
                name: this.selectedItem.target_iqn,
                cdId: 'root',
                isExpanded: true,
                cdIcon: cssClasses.target.expanded,
                children: [
                    {
                        name: 'Disks',
                        isExpanded: true,
                        children: disks,
                        cdIcon: cssClasses.disks.expanded
                    },
                    {
                        name: 'Portals',
                        isExpanded: true,
                        children: portals,
                        cdIcon: cssClasses.portals.expanded
                    },
                    {
                        name: 'Initiators',
                        isExpanded: true,
                        children: clients,
                        cdIcon: cssClasses.initiators.expanded
                    },
                    {
                        name: 'Groups',
                        isExpanded: true,
                        children: groups,
                        cdIcon: cssClasses.groups.expanded
                    }
                ]
            }
        ];
    }
    format(value) {
        if (typeof value === 'boolean') {
            return this.booleanTextPipe.transform(value);
        }
        return value;
    }
    onNodeSelected(tree, node) {
        var _a, _b, _c, _d;
        _circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_6__.TREE_ACTIONS.ACTIVATE(tree, node, true);
        if (node.data.cdId) {
            this.title = node.data.name;
            const tempData = this.metadata[node.data.cdId] || {};
            if (node.data.cdId === 'root') {
                (_a = this.detailTable) === null || _a === void 0 ? void 0 : _a.toggleColumn({ prop: 'default', isHidden: true });
                this.data = lodash__WEBPACK_IMPORTED_MODULE_0___default().map(this.settings.target_default_controls, (value, key) => {
                    value = this.format(value);
                    return {
                        displayName: key,
                        default: value,
                        current: !lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(tempData[key]) ? this.format(tempData[key]) : value
                    };
                });
                // Target level authentication was introduced in ceph-iscsi config v11
                if (this.cephIscsiConfigVersion > 10) {
                    ['user', 'password', 'mutual_user', 'mutual_password'].forEach((key) => {
                        this.data.push({
                            displayName: key,
                            default: null,
                            current: tempData[key]
                        });
                    });
                }
            }
            else if (node.data.cdId.toString().startsWith('disk_')) {
                (_b = this.detailTable) === null || _b === void 0 ? void 0 : _b.toggleColumn({ prop: 'default', isHidden: true });
                this.data = lodash__WEBPACK_IMPORTED_MODULE_0___default().map(this.settings.disk_default_controls[tempData.backstore], (value, key) => {
                    value = this.format(value);
                    return {
                        displayName: key,
                        default: value,
                        current: !lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(tempData.controls[key])
                            ? this.format(tempData.controls[key])
                            : value
                    };
                });
                this.data.push({
                    displayName: 'backstore',
                    default: this.iscsiBackstorePipe.transform(this.settings.default_backstore),
                    current: this.iscsiBackstorePipe.transform(tempData.backstore)
                });
                ['wwn', 'lun'].forEach((k) => {
                    if (k in tempData) {
                        this.data.push({
                            displayName: k,
                            default: undefined,
                            current: tempData[k]
                        });
                    }
                });
            }
            else {
                (_c = this.detailTable) === null || _c === void 0 ? void 0 : _c.toggleColumn({ prop: 'default', isHidden: false });
                this.data = lodash__WEBPACK_IMPORTED_MODULE_0___default().map(tempData, (value, key) => {
                    return {
                        displayName: key,
                        default: undefined,
                        current: this.format(value)
                    };
                });
            }
        }
        else {
            this.data = undefined;
        }
        (_d = this.detailTable) === null || _d === void 0 ? void 0 : _d.updateColumns();
    }
    onUpdateData() {
        this.tree.treeModel.expandAll();
    }
}
IscsiTargetDetailsComponent.ɵfac = function IscsiTargetDetailsComponent_Factory(t) { return new (t || IscsiTargetDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_shared_pipes_iscsi_backstore_pipe__WEBPACK_IMPORTED_MODULE_4__.IscsiBackstorePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_shared_pipes_boolean_text_pipe__WEBPACK_IMPORTED_MODULE_3__.BooleanTextPipe)); };
IscsiTargetDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: IscsiTargetDetailsComponent, selectors: [["cd-iscsi-target-details"]], viewQuery: function IscsiTargetDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.highlightTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.tree = _t.first);
    } }, inputs: { selection: "selection", settings: "settings", cephIscsiConfigVersion: "cephIscsiConfigVersion" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 11, vars: 3, consts: function () { let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4234733805678000262$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DETAILS_ISCSI_TARGET_DETAILS_COMPONENT_TS_4 = goog.getMsg("iSCSI Topology");
        i18n_3 = MSG_EXTERNAL_4234733805678000262$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DETAILS_ISCSI_TARGET_DETAILS_COMPONENT_TS_4;
    }
    else {
        i18n_3 = "iSCSI Topology";
    } return [[1, "row"], [1, "col-6"], i18n_3, [3, "nodes", "options", "updateData"], ["tree", ""], ["treeNodeTemplate", ""], ["class", "col-6 metadata", 4, "ngIf"], ["highlightTpl", ""], [1, "badge", 3, "ngClass"], [1, "col-6", "metadata"], ["columnMode", "flex", 3, "data", "columns", "limit"], ["detailTable", ""], [4, "ngIf"]]; }, template: function IscsiTargetDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "tree-root", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("updateData", function IscsiTargetDetailsComponent_Template_tree_root_updateData_4_listener() { return ctx.onUpdateData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, IscsiTargetDetailsComponent_ng_template_6_Template, 6, 10, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, IscsiTargetDetailsComponent_div_8_Template, 5, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, IscsiTargetDetailsComponent_ng_template_9_Template, 2, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nodes", ctx.nodes)("options", ctx.treeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [_circlon_angular_tree_component__WEBPACK_IMPORTED_MODULE_6__.TreeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_1__.TableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpc2NzaS10YXJnZXQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 23219:
/*!***************************************************************************************************!*\
  !*** ./src/app/ceph/block/iscsi-target-discovery-modal/iscsi-target-discovery-modal.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IscsiTargetDiscoveryModalComponent": () => (/* binding */ IscsiTargetDiscoveryModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _app_shared_api_iscsi_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/api/iscsi.service */ 82909);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/enum/notification-type.enum */ 18001);
/* harmony import */ var _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-group */ 95463);
/* harmony import */ var _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/forms/cd-validators */ 82723);
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 79247);
/* harmony import */ var _app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/services/notification.service */ 97161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_directives_password_button_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/directives/password-button.directive */ 4416);
/* harmony import */ var _shared_components_copy2clipboard_button_copy2clipboard_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/copy2clipboard-button/copy2clipboard-button.component */ 58039);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 30839);

























function IscsiTargetDiscoveryModalComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function IscsiTargetDiscoveryModalComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function IscsiTargetDiscoveryModalComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function IscsiTargetDiscoveryModalComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function IscsiTargetDiscoveryModalComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function IscsiTargetDiscoveryModalComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function IscsiTargetDiscoveryModalComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function IscsiTargetDiscoveryModalComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
class IscsiTargetDiscoveryModalComponent {
    constructor(authStorageService, activeModal, actionLabels, iscsiService, notificationService) {
        this.authStorageService = authStorageService;
        this.activeModal = activeModal;
        this.actionLabels = actionLabels;
        this.iscsiService = iscsiService;
        this.notificationService = notificationService;
        this.USER_REGEX = /^[\w\.:@_-]{8,64}$/;
        this.PASSWORD_REGEX = /^[\w@\-_\/]{12,16}$/;
        this.permission = this.authStorageService.getPermissions().iscsi;
    }
    ngOnInit() {
        this.hasPermission = this.permission.update;
        this.createForm();
        this.iscsiService.getDiscovery().subscribe((auth) => {
            this.discoveryForm.patchValue(auth);
        });
    }
    createForm() {
        this.discoveryForm = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_3__.CdFormGroup({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl({ value: '', disabled: !this.hasPermission }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl({ value: '', disabled: !this.hasPermission }),
            mutual_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl({ value: '', disabled: !this.hasPermission }),
            mutual_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl({ value: '', disabled: !this.hasPermission })
        });
        _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_4__.CdValidators.validateIf(this.discoveryForm.get('user'), () => this.discoveryForm.getValue('password') ||
            this.discoveryForm.getValue('mutual_user') ||
            this.discoveryForm.getValue('mutual_password'), [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required], [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.USER_REGEX)], [
            this.discoveryForm.get('password'),
            this.discoveryForm.get('mutual_user'),
            this.discoveryForm.get('mutual_password')
        ]);
        _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_4__.CdValidators.validateIf(this.discoveryForm.get('password'), () => this.discoveryForm.getValue('user') ||
            this.discoveryForm.getValue('mutual_user') ||
            this.discoveryForm.getValue('mutual_password'), [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required], [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.PASSWORD_REGEX)], [
            this.discoveryForm.get('user'),
            this.discoveryForm.get('mutual_user'),
            this.discoveryForm.get('mutual_password')
        ]);
        _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_4__.CdValidators.validateIf(this.discoveryForm.get('mutual_user'), () => this.discoveryForm.getValue('mutual_password'), [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required], [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.USER_REGEX)], [
            this.discoveryForm.get('user'),
            this.discoveryForm.get('password'),
            this.discoveryForm.get('mutual_password')
        ]);
        _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_4__.CdValidators.validateIf(this.discoveryForm.get('mutual_password'), () => this.discoveryForm.getValue('mutual_user'), [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required], [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.PASSWORD_REGEX)], [
            this.discoveryForm.get('user'),
            this.discoveryForm.get('password'),
            this.discoveryForm.get('mutual_user')
        ]);
    }
    submitAction() {
        this.iscsiService.updateDiscovery(this.discoveryForm.value).subscribe(() => {
            this.notificationService.show(_app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_2__.NotificationType.success, "Updated discovery authentication");
            this.activeModal.close();
        }, () => {
            this.discoveryForm.setErrors({ cdSubmitButton: true });
        });
    }
}
IscsiTargetDiscoveryModalComponent.ɵfac = function IscsiTargetDiscoveryModalComponent_Factory(t) { return new (t || IscsiTargetDiscoveryModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_5__.AuthStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__.ActionLabelsI18n), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_api_iscsi_service__WEBPACK_IMPORTED_MODULE_0__.IscsiService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService)); };
IscsiTargetDiscoveryModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: IscsiTargetDiscoveryModalComponent, selectors: [["cd-iscsi-target-discovery-modal"]], decls: 44, vars: 13, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_696197579544771576$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS_1 = goog.getMsg("Discovery Authentication");
        i18n_0 = MSG_EXTERNAL_696197579544771576$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "Discovery Authentication";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2392488717875840729$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS_3 = goog.getMsg("User");
        i18n_2 = MSG_EXTERNAL_2392488717875840729$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "User";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1431416938026210429$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS_5 = goog.getMsg("Password");
        i18n_4 = MSG_EXTERNAL_1431416938026210429$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "Password";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2070274988518095909$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS_7 = goog.getMsg("Mutual User");
        i18n_6 = MSG_EXTERNAL_2070274988518095909$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "Mutual User";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3904643404211684919$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS_9 = goog.getMsg("Mutual Password");
        i18n_8 = MSG_EXTERNAL_3904643404211684919$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS_9;
    }
    else {
        i18n_8 = "Mutual Password";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS__11 = goog.getMsg("This field is required.");
        i18n_10 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS__11;
    }
    else {
        i18n_10 = "This field is required.";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6191728806822774464$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS__13 = goog.getMsg("User names must have a length of 8 to 64 characters and can contain alphanumeric characters, '.', '@', '-', '_' or ':'.");
        i18n_12 = MSG_EXTERNAL_6191728806822774464$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS__13;
    }
    else {
        i18n_12 = "User names must have a length of 8 to 64 characters and can contain alphanumeric characters, '.', '@', '-', '_' or ':'.";
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS__15 = goog.getMsg("This field is required.");
        i18n_14 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS__15;
    }
    else {
        i18n_14 = "This field is required.";
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2767784636073464786$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS__17 = goog.getMsg("Passwords must have a length of 12 to 16 characters and can contain alphanumeric characters, '@', '-', '_' or '/'.");
        i18n_16 = MSG_EXTERNAL_2767784636073464786$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS__17;
    }
    else {
        i18n_16 = "Passwords must have a length of 12 to 16 characters and can contain alphanumeric characters, '@', '-', '_' or '/'.";
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS__19 = goog.getMsg("This field is required.");
        i18n_18 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS__19;
    }
    else {
        i18n_18 = "This field is required.";
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6191728806822774464$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS__21 = goog.getMsg("User names must have a length of 8 to 64 characters and can contain alphanumeric characters, '.', '@', '-', '_' or ':'.");
        i18n_20 = MSG_EXTERNAL_6191728806822774464$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS__21;
    }
    else {
        i18n_20 = "User names must have a length of 8 to 64 characters and can contain alphanumeric characters, '.', '@', '-', '_' or ':'.";
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS__23 = goog.getMsg("This field is required.");
        i18n_22 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS__23;
    }
    else {
        i18n_22 = "This field is required.";
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2767784636073464786$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS__25 = goog.getMsg("Passwords must have a length of 12 to 16 characters and can contain alphanumeric characters, '@', '-', '_' or '/'.");
        i18n_24 = MSG_EXTERNAL_2767784636073464786$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_DISCOVERY_MODAL_ISCSI_TARGET_DISCOVERY_MODAL_COMPONENT_TS__25;
    }
    else {
        i18n_24 = "Passwords must have a length of 12 to 16 characters and can contain alphanumeric characters, '@', '-', '_' or '/'.";
    } return [[3, "modalRef"], [1, "modal-title"], i18n_0, [1, "modal-content"], ["name", "discoveryForm", "novalidate", "", 3, "formGroup"], ["formDir", "ngForm"], [1, "modal-body"], [1, "form-group", "row"], ["for", "user", 1, "cd-col-form-label"], i18n_2, [1, "cd-col-form-input"], ["id", "user", "formControlName", "user", "type", "text", "autocomplete", "off", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "password", 1, "cd-col-form-label"], i18n_4, [1, "input-group"], ["id", "password", "formControlName", "password", "type", "password", "autocomplete", "new-password", 1, "form-control"], ["type", "button", "cdPasswordButton", "password", 1, "btn", "btn-light"], ["source", "password"], ["for", "mutual_user", 1, "cd-col-form-label"], i18n_6, ["id", "mutual_user", "formControlName", "mutual_user", "type", "text", "autocomplete", "off", 1, "form-control"], ["for", "mutual_password", 1, "cd-col-form-label"], i18n_8, ["id", "mutual_password", "formControlName", "mutual_password", "type", "password", "autocomplete", "new-password", 1, "form-control"], ["type", "button", "cdPasswordButton", "mutual_password", 1, "btn", "btn-light"], ["source", "mutual_password"], [1, "modal-footer"], [3, "form", "showSubmit", "submitText", "submitActionEvent"], [1, "invalid-feedback"], i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24]; }, template: function IscsiTargetDiscoveryModalComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, IscsiTargetDiscoveryModalComponent_span_12_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, IscsiTargetDiscoveryModalComponent_span_13_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 7)(15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](16, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 10)(18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](19, "input", 16)(20, "button", 17)(21, "cd-copy-2-clipboard-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](22, IscsiTargetDiscoveryModalComponent_span_22_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](23, IscsiTargetDiscoveryModalComponent_span_23_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "div", 7)(25, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](27, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](29, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](30, IscsiTargetDiscoveryModalComponent_span_30_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](31, IscsiTargetDiscoveryModalComponent_span_31_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "div", 7)(33, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](34, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "div", 10)(36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](37, "input", 24)(38, "button", 25)(39, "cd-copy-2-clipboard-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](40, IscsiTargetDiscoveryModalComponent_span_40_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](41, IscsiTargetDiscoveryModalComponent_span_41_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "div", 27)(43, "cd-form-button-panel", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("submitActionEvent", function IscsiTargetDiscoveryModalComponent_Template_cd_form_button_panel_submitActionEvent_43_listener() { return ctx.submitAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.discoveryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.discoveryForm.showError("user", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.discoveryForm.showError("user", _r0, "pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.discoveryForm.showError("password", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.discoveryForm.showError("password", _r0, "pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.discoveryForm.showError("mutual_user", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.discoveryForm.showError("mutual_user", _r0, "pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.discoveryForm.showError("mutual_password", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.discoveryForm.showError("mutual_password", _r0, "pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("form", ctx.discoveryForm)("showSubmit", ctx.hasPermission)("submitText", ctx.actionLabels.SUBMIT);
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_8__.CdFormValidationDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_9__.CdFormGroupDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_10__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_11__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _shared_directives_password_button_directive__WEBPACK_IMPORTED_MODULE_12__.PasswordButtonDirective, _shared_components_copy2clipboard_button_copy2clipboard_button_component__WEBPACK_IMPORTED_MODULE_13__.Copy2ClipboardButtonComponent, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_14__.FormButtonPanelComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpc2NzaS10YXJnZXQtZGlzY292ZXJ5LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 83866:
/*!*****************************************************************************!*\
  !*** ./src/app/ceph/block/iscsi-target-form/iscsi-target-form.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IscsiTargetFormComponent": () => (/* binding */ IscsiTargetFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ 42720);
/* harmony import */ var _app_shared_api_iscsi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/iscsi.service */ 82909);
/* harmony import */ var _app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/api/rbd.service */ 23170);
/* harmony import */ var _app_shared_components_select_select_messages_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/components/select/select-messages.model */ 7022);
/* harmony import */ var _app_shared_components_select_select_option_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/components/select/select-option.model */ 14745);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 65862);
/* harmony import */ var _app_shared_forms_cd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/forms/cd-form */ 26624);
/* harmony import */ var _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-group */ 95463);
/* harmony import */ var _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/shared/forms/cd-validators */ 82723);
/* harmony import */ var _app_shared_models_cd_table_fetch_data_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/shared/models/cd-table-fetch-data-context */ 86226);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/shared/services/modal.service */ 63285);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 32337);
/* harmony import */ var _iscsi_target_image_settings_modal_iscsi_target_image_settings_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../iscsi-target-image-settings-modal/iscsi-target-image-settings-modal.component */ 86369);
/* harmony import */ var _iscsi_target_iqn_settings_modal_iscsi_target_iqn_settings_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../iscsi-target-iqn-settings-modal/iscsi-target-iqn-settings-modal.component */ 81259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _shared_directives_form_loading_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/directives/form-loading.directive */ 63622);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _shared_directives_trim_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/directives/trim.directive */ 12594);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/components/select/select.component */ 39092);
/* harmony import */ var _shared_directives_password_button_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/directives/password-button.directive */ 4416);
/* harmony import */ var _shared_components_copy2clipboard_button_copy2clipboard_button_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/components/copy2clipboard-button/copy2clipboard-button.component */ 58039);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 30839);
/* harmony import */ var _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/pipes/upper-first.pipe */ 10545);
/* harmony import */ var _shared_pipes_iscsi_backstore_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../shared/pipes/iscsi-backstore.pipe */ 88820);








































function IscsiTargetFormComponent_div_0_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](2, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](5, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](7, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](8, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
} }
function IscsiTargetFormComponent_div_0_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
const _c26 = function (a0) { return [a0]; };
function IscsiTargetFormComponent_div_0_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](2, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function IscsiTargetFormComponent_div_0_ng_container_26_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r17); const i_r15 = restoredCtx.index; const portal_r14 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2); return ctx_r16.removePortal(i_r15, portal_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r14 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("value", portal_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpureFunction1"](2, _c26, ctx_r6.icons.destroy));
} }
function IscsiTargetFormComponent_div_0_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18nExp"](ctx_r7.minimum_gateways);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18nApply"](1);
} }
function IscsiTargetFormComponent_div_0_ng_container_40_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"]("lun: ", ctx_r20.imagesSettings[image_r18]["lun"], "");
} }
function IscsiTargetFormComponent_div_0_ng_container_40_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](2, "iscsiBackstore");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const image_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](2, 1, ctx_r21.imagesSettings[image_r18].backstore));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18nApply"](1);
} }
function IscsiTargetFormComponent_div_0_ng_container_40_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
} }
function IscsiTargetFormComponent_div_0_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](2, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](3, IscsiTargetFormComponent_div_0_ng_container_40_div_3_Template, 2, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](4, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function IscsiTargetFormComponent_div_0_ng_container_40_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r26); const image_r18 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2); return ctx_r25.imageSettingsModal(image_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](5, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](6, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function IscsiTargetFormComponent_div_0_ng_container_40_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r26); const i_r19 = restoredCtx.index; const image_r18 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2); return ctx_r27.removeImage(i_r19, image_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](7, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](8, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](9, IscsiTargetFormComponent_div_0_ng_container_40_ng_container_9_Template, 3, 3, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](10, IscsiTargetFormComponent_div_0_ng_container_40_ng_container_10_Template, 2, 0, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const image_r18 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("value", image_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r8.api_version >= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpureFunction1"](6, _c26, ctx_r8.icons.deepCheck));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpureFunction1"](8, _c26, ctx_r8.icons.destroy));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r8.backstores.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r8.hasAdvancedSettings(ctx_r8.imagesSettings[image_r18][ctx_r8.imagesSettings[image_r18].backstore]));
} }
function IscsiTargetFormComponent_div_0_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_58_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_58_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_58_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_58_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_58_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_58_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_58_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_58_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "div", 60)(1, "div", 8)(2, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](4, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](6, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](7, IscsiTargetFormComponent_div_0_div_58_span_7_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](8, IscsiTargetFormComponent_div_0_div_58_span_8_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](9, "div", 8)(10, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](12, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](13, "div", 11)(14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](15, "input", 66)(16, "button", 67)(17, "cd-copy-2-clipboard-button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](18, IscsiTargetFormComponent_div_0_div_58_span_18_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](19, IscsiTargetFormComponent_div_0_div_58_span_19_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](20, "div", 8)(21, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](23, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](24, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](25, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](26, IscsiTargetFormComponent_div_0_div_58_span_26_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](27, IscsiTargetFormComponent_div_0_div_58_span_27_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](28, "div", 8)(29, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](31, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](32, "div", 11)(33, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](34, "input", 74)(35, "button", 75)(36, "cd-copy-2-clipboard-button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](37, IscsiTargetFormComponent_div_0_div_58_span_37_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](38, IscsiTargetFormComponent_div_0_div_58_span_38_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵreference"](2);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r11.targetForm.showError("user", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r11.targetForm.showError("user", _r1, "pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r11.targetForm.showError("password", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r11.targetForm.showError("password", _r1, "pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r11.targetForm.showError("mutual_user", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r11.targetForm.showError("mutual_user", _r1, "pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r11.targetForm.showError("mutual_password", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r11.targetForm.showError("mutual_password", _r1, "pattern"));
} }
function IscsiTargetFormComponent_div_0_div_59_div_4_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_59_div_4_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_59_div_4_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_59_div_4_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_59_div_4_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_59_div_4_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_59_div_4_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_59_div_4_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_59_div_4_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_59_div_4_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_59_div_4_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_59_div_4_ng_container_55_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](2, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function IscsiTargetFormComponent_div_0_div_59_div_4_ng_container_55_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r58); const li_r55 = restoredCtx.index; const image_r54 = restoredCtx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](); const initiator_r38 = ctx_r57.$implicit; const ii_r39 = ctx_r57.index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](3); return ctx_r56.removeInitiatorImage(initiator_r38, li_r55, ii_r39, image_r54); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const image_r54 = ctx.$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("value", image_r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpureFunction1"](2, _c26, ctx_r51.icons.destroy));
} }
function IscsiTargetFormComponent_div_0_div_59_div_4_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_59_div_4_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "cd-select", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](3, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](5, 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
    const initiator_r38 = ctx_r59.$implicit;
    const ii_r39 = ctx_r59.index;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("data", initiator_r38.getValue("luns"))("options", ctx_r53.imagesInitiatorSelections[ii_r39])("messages", ctx_r53.messages.initiatorImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpureFunction1"](4, _c26, ctx_r53.icons.add));
} }
function IscsiTargetFormComponent_div_0_div_59_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "div", 91)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](3, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](5, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function IscsiTargetFormComponent_div_0_div_59_div_4_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r61); const ii_r39 = restoredCtx.index; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](3); return ctx_r60.removeInitiator(ii_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](6, "div", 7)(7, "div", 8)(8, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](9, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](10, "div", 11)(11, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("blur", function IscsiTargetFormComponent_div_0_div_59_div_4_Template_input_blur_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](3); return ctx_r62.updatedInitiatorSelector(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](12, IscsiTargetFormComponent_div_0_div_59_div_4_span_12_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](13, IscsiTargetFormComponent_div_0_div_59_div_4_span_13_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](14, IscsiTargetFormComponent_div_0_div_59_div_4_span_14_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](15, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](16, "div", 8)(17, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](18, 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](20, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](21, IscsiTargetFormComponent_div_0_div_59_div_4_span_21_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](22, IscsiTargetFormComponent_div_0_div_59_div_4_span_22_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](23, "div", 8)(24, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](25, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](26, "div", 11)(27, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](28, "input", 102)(29, "button", 103)(30, "cd-copy-2-clipboard-button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](31, IscsiTargetFormComponent_div_0_div_59_div_4_span_31_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](32, IscsiTargetFormComponent_div_0_div_59_div_4_span_32_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](33, "div", 8)(34, "label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](36, 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](37, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](38, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](39, IscsiTargetFormComponent_div_0_div_59_div_4_span_39_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](40, IscsiTargetFormComponent_div_0_div_59_div_4_span_40_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](41, "div", 8)(42, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](43, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](44, "div", 11)(45, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](46, "input", 110)(47, "button", 103)(48, "cd-copy-2-clipboard-button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](49, IscsiTargetFormComponent_div_0_div_59_div_4_span_49_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](50, IscsiTargetFormComponent_div_0_div_59_div_4_span_50_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](51, "div", 8)(52, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](53, 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](54, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](55, IscsiTargetFormComponent_div_0_div_59_div_4_ng_container_55_Template, 5, 4, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](56, IscsiTargetFormComponent_div_0_div_59_div_4_span_56_Template, 2, 0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](57, IscsiTargetFormComponent_div_0_div_59_div_4_div_57_Template, 6, 6, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const initiator_r38 = ctx.$implicit;
    const ii_r39 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("formGroup", initiator_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](": ", initiator_r38.getValue("client_iqn"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", initiator_r38.showError("client_iqn", _r1, "notUnique"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", initiator_r38.showError("client_iqn", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", initiator_r38.showError("client_iqn", _r1, "pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("id", "user" + ii_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", initiator_r38.showError("user", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", initiator_r38.showError("user", _r1, "pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("id", "password" + ii_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("cdPasswordButton", "password" + ii_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("source", "password" + ii_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", initiator_r38.showError("password", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", initiator_r38.showError("password", _r1, "pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("id", "mutual_user" + ii_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", initiator_r38.showError("mutual_user", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", initiator_r38.showError("mutual_user", _r1, "pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("id", "mutual_password" + ii_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("cdPasswordButton", "mutual_password" + ii_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("source", "mutual_password" + ii_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", initiator_r38.showError("mutual_password", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", initiator_r38.showError("mutual_password", _r1, "pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngForOf", initiator_r38.getValue("luns"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", initiator_r38.getValue("cdIsInGroup"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", !initiator_r38.getValue("cdIsInGroup"));
} }
function IscsiTargetFormComponent_div_0_div_59_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "div", 8)(1, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](2, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](4, IscsiTargetFormComponent_div_0_div_59_div_4_Template, 58, 24, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](5, "div", 21)(6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](7, IscsiTargetFormComponent_div_0_div_59_span_7_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](8, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function IscsiTargetFormComponent_div_0_div_59_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2); ctx_r63.addInitiator(); return false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](9, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](11, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngForOf", ctx_r12.initiators.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r12.initiators.controls.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpureFunction1"](3, _c26, ctx_r12.icons.add));
} }
function IscsiTargetFormComponent_div_0_div_60_div_4_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](2, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function IscsiTargetFormComponent_div_0_div_60_div_4_ng_container_17_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r75); const i_r72 = restoredCtx.index; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](); const group_r67 = ctx_r74.$implicit; const gi_r68 = ctx_r74.index; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](3); return ctx_r73.removeGroupInitiator(group_r67, i_r72, gi_r68); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const member_r71 = ctx.$implicit;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("value", member_r71);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpureFunction1"](2, _c26, ctx_r69.icons.destroy));
} }
function IscsiTargetFormComponent_div_0_div_60_div_4_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](2, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function IscsiTargetFormComponent_div_0_div_60_div_4_ng_container_30_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r80); const i_r77 = restoredCtx.index; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](); const group_r67 = ctx_r79.$implicit; const gi_r68 = ctx_r79.index; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](3); return ctx_r78.removeGroupDisk(group_r67, i_r77, gi_r68); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const disk_r76 = ctx.$implicit;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("value", disk_r76);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpureFunction1"](2, _c26, ctx_r70.icons.destroy));
} }
function IscsiTargetFormComponent_div_0_div_60_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "div", 91)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](3, 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](5, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function IscsiTargetFormComponent_div_0_div_60_div_4_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r82); const gi_r68 = restoredCtx.index; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](3); return ctx_r81.removeGroup(gi_r68); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](6, "div", 7)(7, "div", 8)(8, "label", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](9, 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](11, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](12, "div", 8)(13, "label", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](15, 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](17, IscsiTargetFormComponent_div_0_div_60_div_4_ng_container_17_Template, 5, 4, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](18, "div", 21)(19, "div", 22)(20, "cd-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("selection", function IscsiTargetFormComponent_div_0_div_60_div_4_Template_cd_select_selection_20_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r82); const gi_r68 = restoredCtx.index; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](3); return ctx_r83.onGroupMemberSelection($event, gi_r68); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](21, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](23, 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](24, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](25, "div", 8)(26, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](28, 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](29, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](30, IscsiTargetFormComponent_div_0_div_60_div_4_ng_container_30_Template, 5, 4, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](31, "div", 21)(32, "div", 22)(33, "cd-select", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](34, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](36, 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](37, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const group_r67 = ctx.$implicit;
    const gi_r68 = ctx.index;
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("formGroup", group_r67);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](": ", group_r67.getValue("group_id"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngForOf", group_r67.getValue("members"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("data", group_r67.getValue("members"))("options", ctx_r65.groupMembersSelections[gi_r68])("messages", ctx_r65.messages.groupInitiator);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpureFunction1"](12, _c26, ctx_r65.icons.add));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngForOf", group_r67.getValue("disks"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("data", group_r67.getValue("disks"))("options", ctx_r65.groupDiskSelections[gi_r68])("messages", ctx_r65.messages.initiatorImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpureFunction1"](14, _c26, ctx_r65.icons.add));
} }
function IscsiTargetFormComponent_div_0_div_60_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](1, 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} }
function IscsiTargetFormComponent_div_0_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "div", 8)(1, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](2, 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](3, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](4, IscsiTargetFormComponent_div_0_div_60_div_4_Template, 38, 16, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](5, "div", 21)(6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](7, IscsiTargetFormComponent_div_0_div_60_span_7_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](8, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function IscsiTargetFormComponent_div_0_div_60_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2); ctx_r84.addGroup(); return false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](9, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](11, 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngForOf", ctx_r13.groups.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r13.groups.controls.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpureFunction1"](3, _c26, ctx_r13.icons.add));
} }
function IscsiTargetFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "div", 1)(1, "form", 2, 3)(3, "div", 4)(4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](7, "upperFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](11, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](12, "div", 11)(13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](14, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](15, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function IscsiTargetFormComponent_div_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](); return ctx_r86.targetSettingsModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](16, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](17, IscsiTargetFormComponent_div_0_span_17_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](18, IscsiTargetFormComponent_div_0_span_18_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](19, IscsiTargetFormComponent_div_0_span_19_Template, 9, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](20, IscsiTargetFormComponent_div_0_span_20_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](21, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](22, "div", 8)(23, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](24, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](25, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](26, IscsiTargetFormComponent_div_0_ng_container_26_Template, 5, 4, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](27, "div", 21)(28, "div", 22)(29, "cd-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("selection", function IscsiTargetFormComponent_div_0_Template_cd_select_selection_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r87); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](); return ctx_r88.onPortalSelection($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](30, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](32, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](33, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](34, IscsiTargetFormComponent_div_0_span_34_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](35, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](36, "div", 8)(37, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](38, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](39, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](40, IscsiTargetFormComponent_div_0_ng_container_40_Template, 11, 10, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](41, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](42, IscsiTargetFormComponent_div_0_span_42_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](43, IscsiTargetFormComponent_div_0_span_43_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](44, "div", 21)(45, "div", 22)(46, "cd-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("selection", function IscsiTargetFormComponent_div_0_Template_cd_select_selection_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r87); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](); return ctx_r89.onImageSelection($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](47, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](49, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](50, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](51, "div", 8)(52, "div", 31)(53, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](54, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](55, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18n"](56, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](57, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](58, IscsiTargetFormComponent_div_0_div_58_Template, 39, 8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](59, IscsiTargetFormComponent_div_0_div_59_Template, 13, 5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](60, IscsiTargetFormComponent_div_0_div_60_Template, 12, 5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](61, "div", 38)(62, "cd-form-button-panel", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("submitActionEvent", function IscsiTargetFormComponent_div_0_Template_cd_form_button_panel_submitActionEvent_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r87); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](); return ctx_r90.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](63, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](64, "upperFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("formGroup", ctx_r0.targetForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](6, 26, ctx_r0.action))(_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](7, 28, ctx_r0.resource));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵi18nApply"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpureFunction1"](34, _c26, ctx_r0.icons.deepCheck));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r0.targetForm.showError("target_iqn", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r0.targetForm.showError("target_iqn", _r1, "pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r0.targetForm.showError("target_iqn", _r1, "iqn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r0.hasAdvancedSettings(ctx_r0.targetForm.getValue("target_controls")));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngForOf", ctx_r0.portals.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("data", ctx_r0.portals.value)("options", ctx_r0.portalsSelections)("messages", ctx_r0.messages.portals);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpureFunction1"](36, _c26, ctx_r0.icons.add));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r0.targetForm.showError("portals", _r1, "minGateways"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngForOf", ctx_r0.targetForm.getValue("disks"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r0.targetForm.showError("disks", _r1, "dupLunId"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r0.targetForm.showError("disks", _r1, "dupWwn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("data", ctx_r0.disks.value)("options", ctx_r0.imagesSelections)("messages", ctx_r0.messages.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpureFunction1"](38, _c26, ctx_r0.icons.add));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r0.cephIscsiConfigVersion > 10 && !ctx_r0.targetForm.getValue("acl_enabled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r0.targetForm.getValue("acl_enabled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r0.targetForm.getValue("acl_enabled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("form", ctx_r0.targetForm)("submitText", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](63, 30, ctx_r0.action) + " " + _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](64, 32, ctx_r0.resource));
} }
class IscsiTargetFormComponent extends _app_shared_forms_cd_form__WEBPACK_IMPORTED_MODULE_7__.CdForm {
    constructor(iscsiService, modalService, rbdService, router, route, taskWrapper, actionLabels) {
        super();
        this.iscsiService = iscsiService;
        this.modalService = modalService;
        this.rbdService = rbdService;
        this.router = router;
        this.route = route;
        this.taskWrapper = taskWrapper;
        this.actionLabels = actionLabels;
        this.api_version = 0;
        this.minimum_gateways = 1;
        this.icons = _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_6__.Icons;
        this.isEdit = false;
        this.portalsSelections = [];
        this.imagesInitiatorSelections = [];
        this.groupDiskSelections = [];
        this.groupMembersSelections = [];
        this.imagesSettings = {};
        this.messages = {
            portals: new _app_shared_components_select_select_messages_model__WEBPACK_IMPORTED_MODULE_3__.SelectMessages({ noOptions: "There are no portals available." }),
            images: new _app_shared_components_select_select_messages_model__WEBPACK_IMPORTED_MODULE_3__.SelectMessages({ noOptions: "There are no images available." }),
            initiatorImage: new _app_shared_components_select_select_messages_model__WEBPACK_IMPORTED_MODULE_3__.SelectMessages({
                noOptions: "There are no images available. Please make sure you add an image to the target."
            }),
            groupInitiator: new _app_shared_components_select_select_messages_model__WEBPACK_IMPORTED_MODULE_3__.SelectMessages({
                noOptions: "There are no initiators available. Please make sure you add an initiator to the target."
            })
        };
        this.IQN_REGEX = /^iqn\.(19|20)\d\d-(0[1-9]|1[0-2])\.\D{2,3}(\.[A-Za-z0-9-]+)+(:[A-Za-z0-9-\.]+)*$/;
        this.USER_REGEX = /^[\w\.:@_-]{8,64}$/;
        this.PASSWORD_REGEX = /^[\w@\-_\/]{12,16}$/;
        this.resource = "target";
    }
    ngOnInit() {
        const rbdListContext = new _app_shared_models_cd_table_fetch_data_context__WEBPACK_IMPORTED_MODULE_10__.CdTableFetchDataContext(() => undefined);
        /* limit -1 to specify all images */
        rbdListContext.pageInfo.limit = -1;
        const promises = [
            this.iscsiService.listTargets(),
            /* tslint:disable:no-empty */
            this.rbdService.list(rbdListContext.toParams()),
            this.iscsiService.portals(),
            this.iscsiService.settings(),
            this.iscsiService.version()
        ];
        if (this.router.url.startsWith('/block/iscsi/targets/edit')) {
            this.isEdit = true;
            this.route.params.subscribe((params) => {
                this.target_iqn = decodeURIComponent(params.target_iqn);
                promises.push(this.iscsiService.getTarget(this.target_iqn));
            });
        }
        this.action = this.isEdit ? this.actionLabels.EDIT : this.actionLabels.CREATE;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.forkJoin)(promises).subscribe((data) => {
            // iscsiService.listTargets
            const usedImages = lodash__WEBPACK_IMPORTED_MODULE_0___default()(data[0])
                .filter((target) => target.target_iqn !== this.target_iqn)
                .flatMap((target) => target.disks)
                .map((image) => `${image.pool}/${image.image}`)
                .value();
            // iscsiService.settings()
            if ('api_version' in data[3]) {
                this.api_version = data[3].api_version;
            }
            this.minimum_gateways = data[3].config.minimum_gateways;
            this.target_default_controls = data[3].target_default_controls;
            this.target_controls_limits = data[3].target_controls_limits;
            this.disk_default_controls = data[3].disk_default_controls;
            this.disk_controls_limits = data[3].disk_controls_limits;
            this.backstores = data[3].backstores;
            this.default_backstore = data[3].default_backstore;
            this.unsupported_rbd_features = data[3].unsupported_rbd_features;
            this.required_rbd_features = data[3].required_rbd_features;
            // rbdService.list()
            this.imagesAll = lodash__WEBPACK_IMPORTED_MODULE_0___default()(data[1])
                .flatMap((pool) => pool.value)
                .filter((image) => {
                // Namespaces are not supported by ceph-iscsi
                if (image.namespace) {
                    return false;
                }
                const imageId = `${image.pool_name}/${image.name}`;
                if (usedImages.indexOf(imageId) !== -1) {
                    return false;
                }
                const validBackstores = this.getValidBackstores(image);
                if (validBackstores.length === 0) {
                    return false;
                }
                return true;
            })
                .value();
            this.imagesSelections = this.imagesAll.map((image) => new _app_shared_components_select_select_option_model__WEBPACK_IMPORTED_MODULE_4__.SelectOption(false, `${image.pool_name}/${image.name}`, ''));
            // iscsiService.portals()
            const portals = [];
            data[2].forEach((portal) => {
                portal.ip_addresses.forEach((ip) => {
                    portals.push(new _app_shared_components_select_select_option_model__WEBPACK_IMPORTED_MODULE_4__.SelectOption(false, portal.name + ':' + ip, ''));
                });
            });
            this.portalsSelections = [...portals];
            // iscsiService.version()
            this.cephIscsiConfigVersion = data[4]['ceph_iscsi_config_version'];
            this.createForm();
            // iscsiService.getTarget()
            if (data[5]) {
                this.resolveModel(data[5]);
            }
            this.loadingReady();
        });
    }
    createForm() {
        this.targetForm = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_8__.CdFormGroup({
            target_iqn: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl('iqn.2001-07.com.ceph:' + Date.now(), {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.pattern(this.IQN_REGEX)]
            }),
            target_controls: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl({}),
            portals: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl([], {
                validators: [
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_9__.CdValidators.custom('minGateways', (value) => {
                        const gateways = lodash__WEBPACK_IMPORTED_MODULE_0___default().uniq(value.map((elem) => elem.split(':')[0]));
                        return gateways.length < Math.max(1, this.minimum_gateways);
                    })
                ]
            }),
            disks: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl([], {
                validators: [
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_9__.CdValidators.custom('dupLunId', (value) => {
                        const lunIds = this.getLunIds(value);
                        return lunIds.length !== lodash__WEBPACK_IMPORTED_MODULE_0___default().uniq(lunIds).length;
                    }),
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_9__.CdValidators.custom('dupWwn', (value) => {
                        const wwns = this.getWwns(value);
                        return wwns.length !== lodash__WEBPACK_IMPORTED_MODULE_0___default().uniq(wwns).length;
                    })
                ]
            }),
            initiators: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormArray([]),
            groups: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormArray([]),
            acl_enabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl(false)
        });
        // Target level authentication was introduced in ceph-iscsi config v11
        if (this.cephIscsiConfigVersion > 10) {
            const authFormGroup = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_8__.CdFormGroup({
                user: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl(''),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl(''),
                mutual_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl(''),
                mutual_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl('')
            });
            this.setAuthValidator(authFormGroup);
            this.targetForm.addControl('auth', authFormGroup);
        }
    }
    resolveModel(res) {
        this.targetForm.patchValue({
            target_iqn: res.target_iqn,
            target_controls: res.target_controls,
            acl_enabled: res.acl_enabled
        });
        // Target level authentication was introduced in ceph-iscsi config v11
        if (this.cephIscsiConfigVersion > 10) {
            this.targetForm.patchValue({
                auth: res.auth
            });
        }
        const portals = [];
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(res.portals, (portal) => {
            const id = `${portal.host}:${portal.ip}`;
            portals.push(id);
        });
        this.targetForm.patchValue({
            portals: portals
        });
        const disks = [];
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(res.disks, (disk) => {
            const id = `${disk.pool}/${disk.image}`;
            disks.push(id);
            this.imagesSettings[id] = {
                backstore: disk.backstore
            };
            this.imagesSettings[id][disk.backstore] = disk.controls;
            if ('lun' in disk) {
                this.imagesSettings[id]['lun'] = disk.lun;
            }
            if ('wwn' in disk) {
                this.imagesSettings[id]['wwn'] = disk.wwn;
            }
            this.onImageSelection({ option: { name: id, selected: true } });
        });
        this.targetForm.patchValue({
            disks: disks
        });
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(res.clients, (client) => {
            const initiator = this.addInitiator();
            client.luns = lodash__WEBPACK_IMPORTED_MODULE_0___default().map(client.luns, (lun) => `${lun.pool}/${lun.image}`);
            initiator.patchValue(client);
            // updatedInitiatorSelector()
        });
        res.groups.forEach((group, group_index) => {
            const fg = this.addGroup();
            group.disks = lodash__WEBPACK_IMPORTED_MODULE_0___default().map(group.disks, (disk) => `${disk.pool}/${disk.image}`);
            fg.patchValue(group);
            lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(group.members, (member) => {
                this.onGroupMemberSelection({ option: new _app_shared_components_select_select_option_model__WEBPACK_IMPORTED_MODULE_4__.SelectOption(true, member, '') }, group_index);
            });
        });
    }
    hasAdvancedSettings(settings) {
        return Object.values(settings).length > 0;
    }
    // Portals
    get portals() {
        return this.targetForm.get('portals');
    }
    onPortalSelection() {
        this.portals.setValue(this.portals.value);
    }
    removePortal(index, portal) {
        this.portalsSelections.forEach((value) => {
            if (value.name === portal) {
                value.selected = false;
            }
        });
        this.portals.value.splice(index, 1);
        this.portals.setValue(this.portals.value);
        return false;
    }
    // Images
    get disks() {
        return this.targetForm.get('disks');
    }
    removeImage(index, image) {
        this.imagesSelections.forEach((value) => {
            if (value.name === image) {
                value.selected = false;
            }
        });
        this.disks.value.splice(index, 1);
        this.removeImageRefs(image);
        this.targetForm.get('disks').updateValueAndValidity({ emitEvent: false });
        return false;
    }
    removeImageRefs(name) {
        this.initiators.controls.forEach((element) => {
            const newImages = element.value.luns.filter((item) => item !== name);
            element.get('luns').setValue(newImages);
        });
        this.groups.controls.forEach((element) => {
            const newDisks = element.value.disks.filter((item) => item !== name);
            element.get('disks').setValue(newDisks);
        });
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.imagesInitiatorSelections, (selections, i) => {
            this.imagesInitiatorSelections[i] = selections.filter((item) => item.name !== name);
        });
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.groupDiskSelections, (selections, i) => {
            this.groupDiskSelections[i] = selections.filter((item) => item.name !== name);
        });
    }
    getDefaultBackstore(imageId) {
        let result = this.default_backstore;
        const image = this.getImageById(imageId);
        if (!this.validFeatures(image, this.default_backstore)) {
            this.backstores.forEach((backstore) => {
                if (backstore !== this.default_backstore) {
                    if (this.validFeatures(image, backstore)) {
                        result = backstore;
                    }
                }
            });
        }
        return result;
    }
    isLunIdInUse(lunId, imageId) {
        const images = this.disks.value.filter((currentImageId) => currentImageId !== imageId);
        return this.getLunIds(images).includes(lunId);
    }
    getLunIds(images) {
        return lodash__WEBPACK_IMPORTED_MODULE_0___default().map(images, (image) => this.imagesSettings[image]['lun']);
    }
    nextLunId(imageId) {
        const images = this.disks.value.filter((currentImageId) => currentImageId !== imageId);
        const lunIdsInUse = this.getLunIds(images);
        let lunIdCandidate = 0;
        while (lunIdsInUse.includes(lunIdCandidate)) {
            lunIdCandidate++;
        }
        return lunIdCandidate;
    }
    getWwns(images) {
        const wwns = lodash__WEBPACK_IMPORTED_MODULE_0___default().map(images, (image) => this.imagesSettings[image]['wwn']);
        return wwns.filter((wwn) => lodash__WEBPACK_IMPORTED_MODULE_0___default().isString(wwn) && wwn !== '');
    }
    onImageSelection($event) {
        const option = $event.option;
        if (option.selected) {
            if (!this.imagesSettings[option.name]) {
                const defaultBackstore = this.getDefaultBackstore(option.name);
                this.imagesSettings[option.name] = {
                    backstore: defaultBackstore,
                    lun: this.nextLunId(option.name)
                };
                this.imagesSettings[option.name][defaultBackstore] = {};
            }
            else if (this.isLunIdInUse(this.imagesSettings[option.name]['lun'], option.name)) {
                // If the lun id is now in use, we have to generate a new one
                this.imagesSettings[option.name]['lun'] = this.nextLunId(option.name);
            }
            lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.imagesInitiatorSelections, (selections, i) => {
                selections.push(new _app_shared_components_select_select_option_model__WEBPACK_IMPORTED_MODULE_4__.SelectOption(false, option.name, ''));
                this.imagesInitiatorSelections[i] = [...selections];
            });
            lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.groupDiskSelections, (selections, i) => {
                selections.push(new _app_shared_components_select_select_option_model__WEBPACK_IMPORTED_MODULE_4__.SelectOption(false, option.name, ''));
                this.groupDiskSelections[i] = [...selections];
            });
        }
        else {
            this.removeImageRefs(option.name);
        }
        this.targetForm.get('disks').updateValueAndValidity({ emitEvent: false });
    }
    // Initiators
    get initiators() {
        return this.targetForm.get('initiators');
    }
    addInitiator() {
        const fg = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_8__.CdFormGroup({
            client_iqn: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required,
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_9__.CdValidators.custom('notUnique', (client_iqn) => {
                        const flattened = this.initiators.controls.reduce(function (accumulator, currentValue) {
                            return accumulator.concat(currentValue.value.client_iqn);
                        }, []);
                        return flattened.indexOf(client_iqn) !== flattened.lastIndexOf(client_iqn);
                    }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.pattern(this.IQN_REGEX)
                ]
            }),
            auth: new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_8__.CdFormGroup({
                user: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl(''),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl(''),
                mutual_user: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl(''),
                mutual_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl('')
            }),
            luns: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl([]),
            cdIsInGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl(false)
        });
        this.setAuthValidator(fg);
        this.initiators.push(fg);
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.groupMembersSelections, (selections, i) => {
            selections.push(new _app_shared_components_select_select_option_model__WEBPACK_IMPORTED_MODULE_4__.SelectOption(false, '', ''));
            this.groupMembersSelections[i] = [...selections];
        });
        const disks = lodash__WEBPACK_IMPORTED_MODULE_0___default().map(this.targetForm.getValue('disks'), (disk) => new _app_shared_components_select_select_option_model__WEBPACK_IMPORTED_MODULE_4__.SelectOption(false, disk, ''));
        this.imagesInitiatorSelections.push(disks);
        return fg;
    }
    setAuthValidator(fg) {
        _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_9__.CdValidators.validateIf(fg.get('user'), () => fg.getValue('password') || fg.getValue('mutual_user') || fg.getValue('mutual_password'), [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required], [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.pattern(this.USER_REGEX)], [fg.get('password'), fg.get('mutual_user'), fg.get('mutual_password')]);
        _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_9__.CdValidators.validateIf(fg.get('password'), () => fg.getValue('user') || fg.getValue('mutual_user') || fg.getValue('mutual_password'), [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required], [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.pattern(this.PASSWORD_REGEX)], [fg.get('user'), fg.get('mutual_user'), fg.get('mutual_password')]);
        _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_9__.CdValidators.validateIf(fg.get('mutual_user'), () => fg.getValue('mutual_password'), [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required], [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.pattern(this.USER_REGEX)], [fg.get('user'), fg.get('password'), fg.get('mutual_password')]);
        _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_9__.CdValidators.validateIf(fg.get('mutual_password'), () => fg.getValue('mutual_user'), [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required], [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.pattern(this.PASSWORD_REGEX)], [fg.get('user'), fg.get('password'), fg.get('mutual_user')]);
    }
    removeInitiator(index) {
        const removed = this.initiators.value[index];
        this.initiators.removeAt(index);
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.groupMembersSelections, (selections, i) => {
            selections.splice(index, 1);
            this.groupMembersSelections[i] = [...selections];
        });
        this.groups.controls.forEach((element) => {
            const newMembers = element.value.members.filter((item) => item !== removed.client_iqn);
            element.get('members').setValue(newMembers);
        });
        this.imagesInitiatorSelections.splice(index, 1);
    }
    updatedInitiatorSelector() {
        // Validate all client_iqn
        this.initiators.controls.forEach((control) => {
            control.get('client_iqn').updateValueAndValidity({ emitEvent: false });
        });
        // Update Group Initiator Selector
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.groupMembersSelections, (group, group_index) => {
            lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(group, (elem, index) => {
                const oldName = elem.name;
                elem.name = this.initiators.controls[index].value.client_iqn;
                this.groups.controls.forEach((element) => {
                    const members = element.value.members;
                    const i = members.indexOf(oldName);
                    if (i !== -1) {
                        members[i] = elem.name;
                    }
                    element.get('members').setValue(members);
                });
            });
            this.groupMembersSelections[group_index] = [...this.groupMembersSelections[group_index]];
        });
    }
    removeInitiatorImage(initiator, lun_index, initiator_index, image) {
        const luns = initiator.getValue('luns');
        luns.splice(lun_index, 1);
        initiator.patchValue({ luns: luns });
        this.imagesInitiatorSelections[initiator_index].forEach((value) => {
            if (value.name === image) {
                value.selected = false;
            }
        });
        return false;
    }
    // Groups
    get groups() {
        return this.targetForm.get('groups');
    }
    addGroup() {
        const fg = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_8__.CdFormGroup({
            group_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required] }),
            members: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl([]),
            disks: new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl([])
        });
        this.groups.push(fg);
        const disks = lodash__WEBPACK_IMPORTED_MODULE_0___default().map(this.targetForm.getValue('disks'), (disk) => new _app_shared_components_select_select_option_model__WEBPACK_IMPORTED_MODULE_4__.SelectOption(false, disk, ''));
        this.groupDiskSelections.push(disks);
        const initiators = lodash__WEBPACK_IMPORTED_MODULE_0___default().map(this.initiators.value, (initiator) => new _app_shared_components_select_select_option_model__WEBPACK_IMPORTED_MODULE_4__.SelectOption(false, initiator.client_iqn, '', !initiator.cdIsInGroup));
        this.groupMembersSelections.push(initiators);
        return fg;
    }
    removeGroup(index) {
        // Remove group and disk selections
        this.groups.removeAt(index);
        // Free initiator from group
        const selectedMembers = this.groupMembersSelections[index].filter((value) => value.selected);
        selectedMembers.forEach((selection) => {
            selection.selected = false;
            this.onGroupMemberSelection({ option: selection }, index);
        });
        this.groupMembersSelections.splice(index, 1);
        this.groupDiskSelections.splice(index, 1);
    }
    onGroupMemberSelection($event, group_index) {
        const option = $event.option;
        let luns = [];
        if (!option.selected) {
            const selectedDisks = this.groupDiskSelections[group_index].filter((value) => value.selected);
            luns = selectedDisks.map((value) => value.name);
        }
        this.initiators.controls.forEach((element, index) => {
            if (element.value.client_iqn === option.name) {
                element.patchValue({ luns: luns });
                element.get('cdIsInGroup').setValue(option.selected);
                // Members can only be at one group at a time, so when a member is selected
                // in one group we need to disable its selection in other groups
                lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.groupMembersSelections, (group) => {
                    group[index].enabled = !option.selected;
                });
                this.imagesInitiatorSelections[index].forEach((image) => {
                    image.selected = luns.includes(image.name);
                });
            }
        });
    }
    removeGroupInitiator(group, member_index, group_index) {
        const name = group.getValue('members')[member_index];
        group.getValue('members').splice(member_index, 1);
        this.onGroupMemberSelection({ option: new _app_shared_components_select_select_option_model__WEBPACK_IMPORTED_MODULE_4__.SelectOption(false, name, '') }, group_index);
    }
    removeGroupDisk(group, disk_index, group_index) {
        const name = group.getValue('disks')[disk_index];
        group.getValue('disks').splice(disk_index, 1);
        this.groupDiskSelections[group_index].forEach((value) => {
            if (value.name === name) {
                value.selected = false;
            }
        });
        this.groupDiskSelections[group_index] = [...this.groupDiskSelections[group_index]];
    }
    submit() {
        const formValue = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(this.targetForm.value);
        const request = {
            target_iqn: this.targetForm.getValue('target_iqn'),
            target_controls: this.targetForm.getValue('target_controls'),
            acl_enabled: this.targetForm.getValue('acl_enabled'),
            portals: [],
            disks: [],
            clients: [],
            groups: []
        };
        // Target level authentication was introduced in ceph-iscsi config v11
        if (this.cephIscsiConfigVersion > 10) {
            const targetAuth = this.targetForm.get('auth');
            if (!targetAuth.getValue('user')) {
                targetAuth.get('user').setValue('');
            }
            if (!targetAuth.getValue('password')) {
                targetAuth.get('password').setValue('');
            }
            if (!targetAuth.getValue('mutual_user')) {
                targetAuth.get('mutual_user').setValue('');
            }
            if (!targetAuth.getValue('mutual_password')) {
                targetAuth.get('mutual_password').setValue('');
            }
            const acl_enabled = this.targetForm.getValue('acl_enabled');
            request['auth'] = {
                user: acl_enabled ? '' : targetAuth.getValue('user'),
                password: acl_enabled ? '' : targetAuth.getValue('password'),
                mutual_user: acl_enabled ? '' : targetAuth.getValue('mutual_user'),
                mutual_password: acl_enabled ? '' : targetAuth.getValue('mutual_password')
            };
        }
        // Disks
        formValue.disks.forEach((disk) => {
            const imageSplit = disk.split('/');
            const backstore = this.imagesSettings[disk].backstore;
            request.disks.push({
                pool: imageSplit[0],
                image: imageSplit[1],
                backstore: backstore,
                controls: this.imagesSettings[disk][backstore],
                lun: this.imagesSettings[disk]['lun'],
                wwn: this.imagesSettings[disk]['wwn']
            });
        });
        // Portals
        formValue.portals.forEach((portal) => {
            const index = portal.indexOf(':');
            request.portals.push({
                host: portal.substring(0, index),
                ip: portal.substring(index + 1)
            });
        });
        // Clients
        if (request.acl_enabled) {
            formValue.initiators.forEach((initiator) => {
                if (!initiator.auth.user) {
                    initiator.auth.user = '';
                }
                if (!initiator.auth.password) {
                    initiator.auth.password = '';
                }
                if (!initiator.auth.mutual_user) {
                    initiator.auth.mutual_user = '';
                }
                if (!initiator.auth.mutual_password) {
                    initiator.auth.mutual_password = '';
                }
                delete initiator.cdIsInGroup;
                const newLuns = [];
                initiator.luns.forEach((lun) => {
                    const imageSplit = lun.split('/');
                    newLuns.push({
                        pool: imageSplit[0],
                        image: imageSplit[1]
                    });
                });
                initiator.luns = newLuns;
            });
            request.clients = formValue.initiators;
        }
        // Groups
        if (request.acl_enabled) {
            formValue.groups.forEach((group) => {
                const newDisks = [];
                group.disks.forEach((disk) => {
                    const imageSplit = disk.split('/');
                    newDisks.push({
                        pool: imageSplit[0],
                        image: imageSplit[1]
                    });
                });
                group.disks = newDisks;
            });
            request.groups = formValue.groups;
        }
        let wrapTask;
        if (this.isEdit) {
            request['new_target_iqn'] = request.target_iqn;
            request.target_iqn = this.target_iqn;
            wrapTask = this.taskWrapper.wrapTaskAroundCall({
                task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_11__.FinishedTask('iscsi/target/edit', {
                    target_iqn: request.target_iqn
                }),
                call: this.iscsiService.updateTarget(this.target_iqn, request)
            });
        }
        else {
            wrapTask = this.taskWrapper.wrapTaskAroundCall({
                task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_11__.FinishedTask('iscsi/target/create', {
                    target_iqn: request.target_iqn
                }),
                call: this.iscsiService.createTarget(request)
            });
        }
        wrapTask.subscribe({
            error: () => {
                this.targetForm.setErrors({ cdSubmitButton: true });
            },
            complete: () => this.router.navigate(['/block/iscsi/targets'])
        });
    }
    targetSettingsModal() {
        const initialState = {
            target_controls: this.targetForm.get('target_controls'),
            target_default_controls: this.target_default_controls,
            target_controls_limits: this.target_controls_limits
        };
        this.modalRef = this.modalService.show(_iscsi_target_iqn_settings_modal_iscsi_target_iqn_settings_modal_component__WEBPACK_IMPORTED_MODULE_15__.IscsiTargetIqnSettingsModalComponent, initialState);
    }
    imageSettingsModal(image) {
        const initialState = {
            imagesSettings: this.imagesSettings,
            image: image,
            api_version: this.api_version,
            disk_default_controls: this.disk_default_controls,
            disk_controls_limits: this.disk_controls_limits,
            backstores: this.getValidBackstores(this.getImageById(image)),
            control: this.targetForm.get('disks')
        };
        this.modalRef = this.modalService.show(_iscsi_target_image_settings_modal_iscsi_target_image_settings_modal_component__WEBPACK_IMPORTED_MODULE_14__.IscsiTargetImageSettingsModalComponent, initialState);
    }
    validFeatures(image, backstore) {
        const imageFeatures = image.features;
        const requiredFeatures = this.required_rbd_features[backstore];
        const unsupportedFeatures = this.unsupported_rbd_features[backstore];
        // eslint-disable-next-line no-bitwise
        const validRequiredFeatures = (imageFeatures & requiredFeatures) === requiredFeatures;
        // eslint-disable-next-line no-bitwise
        const validSupportedFeatures = (imageFeatures & unsupportedFeatures) === 0;
        return validRequiredFeatures && validSupportedFeatures;
    }
    getImageById(imageId) {
        return this.imagesAll.find((image) => imageId === `${image.pool_name}/${image.name}`);
    }
    getValidBackstores(image) {
        return this.backstores.filter((backstore) => this.validFeatures(image, backstore));
    }
}
IscsiTargetFormComponent.ɵfac = function IscsiTargetFormComponent_Factory(t) { return new (t || IscsiTargetFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_app_shared_api_iscsi_service__WEBPACK_IMPORTED_MODULE_1__.IscsiService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_12__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_2__.RbdService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_31__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_31__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_13__.TaskWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__.ActionLabelsI18n)); };
IscsiTargetFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineComponent"]({ type: IscsiTargetFormComponent, selectors: [["cd-iscsi-target-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc form title
         */
        const MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS__1 = goog.getMsg("{$interpolation} {$interpolation_1}", { "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
        i18n_0 = MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS__1;
    }
    else {
        i18n_0 = "" + "\uFFFD0\uFFFD" + " " + "\uFFFD1\uFFFD" + "";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9099967630066046837$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS__3 = goog.getMsg("Target IQN");
        i18n_2 = MSG_EXTERNAL_9099967630066046837$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS__3;
    }
    else {
        i18n_2 = "Target IQN";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4093869278527257288$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS__5 = goog.getMsg("Portals");
        i18n_4 = MSG_EXTERNAL_4093869278527257288$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS__5;
    }
    else {
        i18n_4 = "Portals";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1710501367407910297$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS__7 = goog.getMsg("Add portal");
        i18n_6 = MSG_EXTERNAL_1710501367407910297$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS__7;
    }
    else {
        i18n_6 = "Add portal";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_414887388288176527$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS__9 = goog.getMsg("Images");
        i18n_8 = MSG_EXTERNAL_414887388288176527$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS__9;
    }
    else {
        i18n_8 = "Images";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8505033464202249845$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS__11 = goog.getMsg("Add image");
        i18n_10 = MSG_EXTERNAL_8505033464202249845$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS__11;
    }
    else {
        i18n_10 = "Add image";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3201988817758584069$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS__13 = goog.getMsg("ACL authentication");
        i18n_12 = MSG_EXTERNAL_3201988817758584069$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS__13;
    }
    else {
        i18n_12 = "ACL authentication";
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___15 = goog.getMsg("This field is required.");
        i18n_14 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___15;
    }
    else {
        i18n_14 = "This field is required.";
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6634500519731596063$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___17 = goog.getMsg("IQN has wrong pattern.");
        i18n_16 = MSG_EXTERNAL_6634500519731596063$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___17;
    }
    else {
        i18n_16 = "IQN has wrong pattern.";
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_342294605291224846$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___19 = goog.getMsg("An IQN has the following notation 'iqn.$year-$month.$reversedAddress:$definedName'");
        i18n_18 = MSG_EXTERNAL_342294605291224846$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___19;
    }
    else {
        i18n_18 = "An IQN has the following notation 'iqn.$year-$month.$reversedAddress:$definedName'";
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1060169226344940725$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___21 = goog.getMsg("For example: iqn.2016-06.org.dashboard:storage:disk.sn-a8675309");
        i18n_20 = MSG_EXTERNAL_1060169226344940725$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___21;
    }
    else {
        i18n_20 = "For example: iqn.2016-06.org.dashboard:storage:disk.sn-a8675309";
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4619188387782427495$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___23 = goog.getMsg("More information");
        i18n_22 = MSG_EXTERNAL_4619188387782427495$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___23;
    }
    else {
        i18n_22 = "More information";
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8917673582546787481$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___25 = goog.getMsg("This target has modified advanced settings.");
        i18n_24 = MSG_EXTERNAL_8917673582546787481$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___25;
    }
    else {
        i18n_24 = "This target has modified advanced settings.";
    } let i18n_27; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7970492737765104046$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___28 = goog.getMsg("At least {$interpolation} gateways are required.", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_27 = MSG_EXTERNAL_7970492737765104046$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___28;
    }
    else {
        i18n_27 = "At least " + "\uFFFD0\uFFFD" + " gateways are required.";
    } let i18n_29; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1944260501025399900$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____30 = goog.getMsg("Backstore: {$interpolation}.\u00A0", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_29 = MSG_EXTERNAL_1944260501025399900$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____30;
    }
    else {
        i18n_29 = "Backstore: " + "\uFFFD0\uFFFD" + ".\xA0";
    } let i18n_31; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4845735981980836298$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____32 = goog.getMsg("This image has modified settings.");
        i18n_31 = MSG_EXTERNAL_4845735981980836298$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____32;
    }
    else {
        i18n_31 = "This image has modified settings.";
    } let i18n_33; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5090274954293186295$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___34 = goog.getMsg("Duplicated LUN numbers.");
        i18n_33 = MSG_EXTERNAL_5090274954293186295$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___34;
    }
    else {
        i18n_33 = "Duplicated LUN numbers.";
    } let i18n_35; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4401850496814738651$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___36 = goog.getMsg("Duplicated WWN.");
        i18n_35 = MSG_EXTERNAL_4401850496814738651$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___36;
    }
    else {
        i18n_35 = "Duplicated WWN.";
    } let i18n_37; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2392488717875840729$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___38 = goog.getMsg("User");
        i18n_37 = MSG_EXTERNAL_2392488717875840729$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___38;
    }
    else {
        i18n_37 = "User";
    } let i18n_39; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1431416938026210429$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___40 = goog.getMsg("Password");
        i18n_39 = MSG_EXTERNAL_1431416938026210429$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___40;
    }
    else {
        i18n_39 = "Password";
    } let i18n_41; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2070274988518095909$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___42 = goog.getMsg("Mutual User");
        i18n_41 = MSG_EXTERNAL_2070274988518095909$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___42;
    }
    else {
        i18n_41 = "Mutual User";
    } let i18n_43; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3904643404211684919$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___44 = goog.getMsg("Mutual Password");
        i18n_43 = MSG_EXTERNAL_3904643404211684919$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___44;
    }
    else {
        i18n_43 = "Mutual Password";
    } let i18n_45; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____46 = goog.getMsg("This field is required.");
        i18n_45 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____46;
    }
    else {
        i18n_45 = "This field is required.";
    } let i18n_47; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3803457758347001601$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____48 = goog.getMsg("User names must have a length of 8 to 64 characters and can contain alphanumeric characters, '.', '@', '-', '_' or ':'.");
        i18n_47 = MSG_EXTERNAL_3803457758347001601$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____48;
    }
    else {
        i18n_47 = "User names must have a length of 8 to 64 characters and can contain alphanumeric characters, '.', '@', '-', '_' or ':'.";
    } let i18n_49; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____50 = goog.getMsg("This field is required.");
        i18n_49 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____50;
    }
    else {
        i18n_49 = "This field is required.";
    } let i18n_51; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3483324600798316784$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____52 = goog.getMsg("Passwords must have a length of 12 to 16 characters and can contain alphanumeric characters, '@', '-', '_' or '/'.");
        i18n_51 = MSG_EXTERNAL_3483324600798316784$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____52;
    }
    else {
        i18n_51 = "Passwords must have a length of 12 to 16 characters and can contain alphanumeric characters, '@', '-', '_' or '/'.";
    } let i18n_53; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____54 = goog.getMsg("This field is required.");
        i18n_53 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____54;
    }
    else {
        i18n_53 = "This field is required.";
    } let i18n_55; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3803457758347001601$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____56 = goog.getMsg("User names must have a length of 8 to 64 characters and can contain alphanumeric characters, '.', '@', '-', '_' or ':'.");
        i18n_55 = MSG_EXTERNAL_3803457758347001601$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____56;
    }
    else {
        i18n_55 = "User names must have a length of 8 to 64 characters and can contain alphanumeric characters, '.', '@', '-', '_' or ':'.";
    } let i18n_57; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____58 = goog.getMsg("This field is required.");
        i18n_57 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____58;
    }
    else {
        i18n_57 = "This field is required.";
    } let i18n_59; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3483324600798316784$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____60 = goog.getMsg("Passwords must have a length of 12 to 16 characters and can contain alphanumeric characters, '@', '-', '_' or '/'.");
        i18n_59 = MSG_EXTERNAL_3483324600798316784$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____60;
    }
    else {
        i18n_59 = "Passwords must have a length of 12 to 16 characters and can contain alphanumeric characters, '@', '-', '_' or '/'.";
    } let i18n_61; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1458520862046965337$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___62 = goog.getMsg("Initiators");
        i18n_61 = MSG_EXTERNAL_1458520862046965337$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___62;
    }
    else {
        i18n_61 = "Initiators";
    } let i18n_63; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3791640154834395946$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___64 = goog.getMsg("Add initiator");
        i18n_63 = MSG_EXTERNAL_3791640154834395946$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___64;
    }
    else {
        i18n_63 = "Add initiator";
    } let i18n_65; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7391040346436232576$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____66 = goog.getMsg("Initiator");
        i18n_65 = MSG_EXTERNAL_7391040346436232576$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____66;
    }
    else {
        i18n_65 = "Initiator";
    } let i18n_67; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2829168764054066072$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____68 = goog.getMsg("Client IQN");
        i18n_67 = MSG_EXTERNAL_2829168764054066072$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____68;
    }
    else {
        i18n_67 = "Client IQN";
    } let i18n_69; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2392488717875840729$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____70 = goog.getMsg("User");
        i18n_69 = MSG_EXTERNAL_2392488717875840729$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____70;
    }
    else {
        i18n_69 = "User";
    } let i18n_71; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1431416938026210429$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____72 = goog.getMsg("Password");
        i18n_71 = MSG_EXTERNAL_1431416938026210429$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____72;
    }
    else {
        i18n_71 = "Password";
    } let i18n_73; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2070274988518095909$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____74 = goog.getMsg("Mutual User");
        i18n_73 = MSG_EXTERNAL_2070274988518095909$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____74;
    }
    else {
        i18n_73 = "Mutual User";
    } let i18n_75; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3904643404211684919$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____76 = goog.getMsg("Mutual Password");
        i18n_75 = MSG_EXTERNAL_3904643404211684919$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____76;
    }
    else {
        i18n_75 = "Mutual Password";
    } let i18n_77; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_414887388288176527$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____78 = goog.getMsg("Images");
        i18n_77 = MSG_EXTERNAL_414887388288176527$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____78;
    }
    else {
        i18n_77 = "Images";
    } let i18n_79; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_701614853586215948$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____80 = goog.getMsg("Initiator IQN needs to be unique.");
        i18n_79 = MSG_EXTERNAL_701614853586215948$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____80;
    }
    else {
        i18n_79 = "Initiator IQN needs to be unique.";
    } let i18n_81; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____82 = goog.getMsg("This field is required.");
        i18n_81 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____82;
    }
    else {
        i18n_81 = "This field is required.";
    } let i18n_83; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6634500519731596063$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____84 = goog.getMsg("IQN has wrong pattern.");
        i18n_83 = MSG_EXTERNAL_6634500519731596063$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____84;
    }
    else {
        i18n_83 = "IQN has wrong pattern.";
    } let i18n_85; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____86 = goog.getMsg("This field is required.");
        i18n_85 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____86;
    }
    else {
        i18n_85 = "This field is required.";
    } let i18n_87; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_822668950098303431$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____88 = goog.getMsg("User names must have a length of 8 to 64 characters and can contain alphanumeric characters, '.', '@', '-', '_' or ':'.");
        i18n_87 = MSG_EXTERNAL_822668950098303431$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____88;
    }
    else {
        i18n_87 = "User names must have a length of 8 to 64 characters and can contain alphanumeric characters, '.', '@', '-', '_' or ':'.";
    } let i18n_89; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____90 = goog.getMsg("This field is required.");
        i18n_89 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____90;
    }
    else {
        i18n_89 = "This field is required.";
    } let i18n_91; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6729734963576882093$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____92 = goog.getMsg("Passwords must have a length of 12 to 16 characters and can contain alphanumeric characters, '@', '-', '_' or '/'.");
        i18n_91 = MSG_EXTERNAL_6729734963576882093$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____92;
    }
    else {
        i18n_91 = "Passwords must have a length of 12 to 16 characters and can contain alphanumeric characters, '@', '-', '_' or '/'.";
    } let i18n_93; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____94 = goog.getMsg("This field is required.");
        i18n_93 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____94;
    }
    else {
        i18n_93 = "This field is required.";
    } let i18n_95; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_822668950098303431$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____96 = goog.getMsg("User names must have a length of 8 to 64 characters and can contain alphanumeric characters, '.', '@', '-', '_' or ':'.");
        i18n_95 = MSG_EXTERNAL_822668950098303431$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____96;
    }
    else {
        i18n_95 = "User names must have a length of 8 to 64 characters and can contain alphanumeric characters, '.', '@', '-', '_' or ':'.";
    } let i18n_97; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____98 = goog.getMsg("This field is required.");
        i18n_97 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____98;
    }
    else {
        i18n_97 = "This field is required.";
    } let i18n_99; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6729734963576882093$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____100 = goog.getMsg("Passwords must have a length of 12 to 16 characters and can contain alphanumeric characters, '@', '-', '_' or '/'.");
        i18n_99 = MSG_EXTERNAL_6729734963576882093$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____100;
    }
    else {
        i18n_99 = "Passwords must have a length of 12 to 16 characters and can contain alphanumeric characters, '@', '-', '_' or '/'.";
    } let i18n_101; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4540684723296721500$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____102 = goog.getMsg("Initiator belongs to a group. Images will be configure in the group.");
        i18n_101 = MSG_EXTERNAL_4540684723296721500$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____102;
    }
    else {
        i18n_101 = "Initiator belongs to a group. Images will be configure in the group.";
    } let i18n_103; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8505033464202249845$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____104 = goog.getMsg("Add image");
        i18n_103 = MSG_EXTERNAL_8505033464202249845$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS_____104;
    }
    else {
        i18n_103 = "Add image";
    } let i18n_105; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3993736677319608343$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____106 = goog.getMsg("No items added.");
        i18n_105 = MSG_EXTERNAL_3993736677319608343$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____106;
    }
    else {
        i18n_105 = "No items added.";
    } let i18n_107; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5944812089887969249$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___108 = goog.getMsg("Groups");
        i18n_107 = MSG_EXTERNAL_5944812089887969249$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___108;
    }
    else {
        i18n_107 = "Groups";
    } let i18n_109; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2765038467790743178$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___110 = goog.getMsg("Add group");
        i18n_109 = MSG_EXTERNAL_2765038467790743178$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS___110;
    }
    else {
        i18n_109 = "Add group";
    } let i18n_111; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8623978917681527907$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____112 = goog.getMsg("Group");
        i18n_111 = MSG_EXTERNAL_8623978917681527907$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____112;
    }
    else {
        i18n_111 = "Group";
    } let i18n_113; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____114 = goog.getMsg("Name");
        i18n_113 = MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____114;
    }
    else {
        i18n_113 = "Name";
    } let i18n_115; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1458520862046965337$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____116 = goog.getMsg("Initiators");
        i18n_115 = MSG_EXTERNAL_1458520862046965337$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____116;
    }
    else {
        i18n_115 = "Initiators";
    } let i18n_117; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3791640154834395946$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____118 = goog.getMsg("Add initiator");
        i18n_117 = MSG_EXTERNAL_3791640154834395946$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____118;
    }
    else {
        i18n_117 = "Add initiator";
    } let i18n_119; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_414887388288176527$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____120 = goog.getMsg("Images");
        i18n_119 = MSG_EXTERNAL_414887388288176527$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____120;
    }
    else {
        i18n_119 = "Images";
    } let i18n_121; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8505033464202249845$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____122 = goog.getMsg("Add image");
        i18n_121 = MSG_EXTERNAL_8505033464202249845$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____122;
    }
    else {
        i18n_121 = "Add image";
    } let i18n_123; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3993736677319608343$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____124 = goog.getMsg("No items added.");
        i18n_123 = MSG_EXTERNAL_3993736677319608343$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_FORM_ISCSI_TARGET_FORM_COMPONENT_TS____124;
    }
    else {
        i18n_123 = "No items added.";
    } return [["class", "cd-col-form", 4, "cdFormLoading"], [1, "cd-col-form"], ["name", "targetForm", "novalidate", "", 3, "formGroup"], ["formDir", "ngForm"], [1, "card"], [1, "card-header"], i18n_0, [1, "card-body"], [1, "form-group", "row"], ["for", "target_iqn", 1, "cd-col-form-label", "required"], i18n_2, [1, "cd-col-form-input"], [1, "input-group"], ["type", "text", "id", "target_iqn", "name", "target_iqn", "formControlName", "target_iqn", "cdTrim", "", 1, "form-control"], ["id", "ecp-info-button", "type", "button", 1, "btn", "btn-light", 3, "click"], ["aria-hidden", "true", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "form-text text-muted", 4, "ngIf"], ["for", "portals", 1, "cd-col-form-label", "required"], i18n_4, [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-12"], ["elemClass", "btn btn-light float-end", 3, "data", "options", "messages", "selection"], [3, "ngClass"], i18n_6, ["type", "hidden", "id", "portals", "name", "portals", "formControlName", "portals", 1, "form-control"], ["for", "disks", 1, "cd-col-form-label"], i18n_8, ["type", "hidden", "id", "disks", "name", "disks", "formControlName", "disks", 1, "form-control"], i18n_10, [1, "cd-col-form-offset"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "formControlName", "acl_enabled", "name", "acl_enabled", "id", "acl_enabled", 1, "custom-control-input"], ["for", "acl_enabled", 1, "custom-control-label"], i18n_12, ["formGroupName", "auth", 4, "ngIf"], ["class", "form-group row", 4, "ngIf"], [1, "card-footer"], ["wrappingClass", "text-right", 3, "form", "submitText", "submitActionEvent"], [1, "invalid-feedback"], i18n_14, i18n_16, i18n_18, i18n_20, ["target", "_blank", "href", "https://en.wikipedia.org/wiki/ISCSI#Addressing"], i18n_22, [1, "form-text", "text-muted"], i18n_24, [1, "input-group", "cd-mb"], ["type", "text", "disabled", "", 1, "cd-form-control", 3, "value"], ["type", "button", 1, "btn", "btn-light", 3, "click"], i18n_27, ["class", "input-group-text", 4, "ngIf"], [4, "ngIf"], [1, "input-group-text"], i18n_29, i18n_31, i18n_33, i18n_35, ["formGroupName", "auth"], ["for", "target_user", 1, "cd-col-form-label"], i18n_37, ["type", "text", "autocomplete", "off", "id", "target_user", "name", "target_user", "formControlName", "user", 1, "form-control"], ["for", "target_password", 1, "cd-col-form-label"], i18n_39, ["type", "password", "autocomplete", "new-password", "id", "target_password", "name", "target_password", "formControlName", "password", 1, "form-control"], ["type", "button", "cdPasswordButton", "target_password", 1, "btn", "btn-light"], ["source", "target_password"], ["for", "target_mutual_user", 1, "cd-col-form-label"], i18n_41, ["type", "text", "autocomplete", "off", "id", "target_mutual_user", "name", "target_mutual_user", "formControlName", "mutual_user", 1, "form-control"], ["for", "target_mutual_password", 1, "cd-col-form-label"], i18n_43, ["type", "password", "autocomplete", "new-password", "id", "target_mutual_password", "name", "target_mutual_password", "formControlName", "mutual_password", 1, "form-control"], ["type", "button", "cdPasswordButton", "target_mutual_password", 1, "btn", "btn-light"], ["source", "target_mutual_password"], i18n_45, i18n_47, i18n_49, i18n_51, i18n_53, i18n_55, i18n_57, i18n_59, ["for", "initiators", 1, "cd-col-form-label"], i18n_61, ["formArrayName", "initiators", 1, "cd-col-form-input"], ["class", "card mb-2", 3, "formGroup", 4, "ngFor", "ngForOf"], [1, "btn", "btn-light", "float-end", 3, "click"], i18n_63, [1, "card", "mb-2", 3, "formGroup"], i18n_65, ["type", "button", 1, "btn-close", "float-end", 3, "click"], ["for", "client_iqn", 1, "cd-col-form-label", "required"], i18n_67, ["type", "text", "formControlName", "client_iqn", "cdTrim", "", 1, "form-control", 3, "blur"], ["for", "user", 1, "cd-col-form-label"], i18n_69, ["formControlName", "user", "autocomplete", "off", "type", "text", 1, "form-control", 3, "id"], ["for", "password", 1, "cd-col-form-label"], i18n_71, ["formControlName", "password", "autocomplete", "new-password", "type", "password", 1, "form-control", 3, "id"], ["type", "button", 1, "btn", "btn-light", 3, "cdPasswordButton"], [3, "source"], ["for", "mutual_user", 1, "cd-col-form-label"], i18n_73, ["formControlName", "mutual_user", "autocomplete", "off", "type", "text", 1, "form-control", 3, "id"], ["for", "mutual_password", 1, "cd-col-form-label"], i18n_75, ["formControlName", "mutual_password", "autocomplete", "new-password", "type", "password", 1, "form-control", 3, "id"], ["for", "luns", 1, "cd-col-form-label"], i18n_77, ["class", "row", 4, "ngIf"], i18n_79, i18n_81, i18n_83, i18n_85, i18n_87, i18n_89, i18n_91, i18n_93, i18n_95, i18n_97, i18n_99, i18n_101, ["elemClass", "btn btn-light float-end", 3, "data", "options", "messages"], i18n_103, i18n_105, i18n_107, ["formArrayName", "groups", 1, "cd-col-form-input"], i18n_109, i18n_111, ["for", "group_id", 1, "cd-col-form-label", "required"], i18n_113, ["type", "text", "formControlName", "group_id", 1, "form-control"], ["for", "members", 1, "cd-col-form-label"], i18n_115, i18n_117, i18n_119, i18n_121, i18n_123]; }, template: function IscsiTargetFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](0, IscsiTargetFormComponent_div_0_Template, 65, 40, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("cdFormLoading", ctx.loading);
    } }, directives: [_shared_directives_form_loading_directive__WEBPACK_IMPORTED_MODULE_16__.FormLoadingDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_17__.CdFormValidationDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_18__.CdFormGroupDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_19__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_20__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControlName, _shared_directives_trim_directive__WEBPACK_IMPORTED_MODULE_21__.TrimDirective, _angular_common__WEBPACK_IMPORTED_MODULE_32__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_32__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_32__.NgForOf, _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_22__.SelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormGroupName, _shared_directives_password_button_directive__WEBPACK_IMPORTED_MODULE_23__.PasswordButtonDirective, _shared_components_copy2clipboard_button_copy2clipboard_button_component__WEBPACK_IMPORTED_MODULE_24__.Copy2ClipboardButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormArrayName, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_25__.FormButtonPanelComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_32__.TitleCasePipe, _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_26__.UpperFirstPipe, _shared_pipes_iscsi_backstore_pipe__WEBPACK_IMPORTED_MODULE_27__.IscsiBackstorePipe], styles: [".cd-mb[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzY3NpLXRhcmdldC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRiIsImZpbGUiOiJpc2NzaS10YXJnZXQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZC1tYiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 86369:
/*!*************************************************************************************************************!*\
  !*** ./src/app/ceph/block/iscsi-target-image-settings-modal/iscsi-target-image-settings-modal.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IscsiTargetImageSettingsModalComponent": () => (/* binding */ IscsiTargetImageSettingsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_shared_api_iscsi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/iscsi.service */ 82909);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-group */ 95463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _iscsi_setting_iscsi_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../iscsi-setting/iscsi-setting.component */ 161);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 30839);
/* harmony import */ var _shared_pipes_iscsi_backstore_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/pipes/iscsi-backstore.pipe */ 88820);




















function IscsiTargetImageSettingsModalComponent_span_13_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](1, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function IscsiTargetImageSettingsModalComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span")(1, "legend", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](2, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 12)(4, "div", 13)(5, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](6, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, IscsiTargetImageSettingsModalComponent_span_13_span_8_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 12)(10, "div", 13)(11, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](12, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.settingsForm.showError("lun", _r0, "required"));
} }
function IscsiTargetImageSettingsModalComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "iscsiBackstore");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bs_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", bs_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, bs_r5));
} }
function IscsiTargetImageSettingsModalComponent_ng_container_22_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "cd-iscsi-setting", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const setting_r9 = ctx.$implicit;
    const bs_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("settingsForm", ctx_r8.settingsForm)("formDir", _r0)("setting", setting_r9.key)("limits", ctx_r8.getDiskControlLimits(bs_r6, setting_r9.key));
} }
function IscsiTargetImageSettingsModalComponent_ng_container_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, IscsiTargetImageSettingsModalComponent_ng_container_22_ng_container_1_div_1_Template, 3, 4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const bs_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, ctx_r7.disk_default_controls[bs_r6]));
} }
function IscsiTargetImageSettingsModalComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, IscsiTargetImageSettingsModalComponent_ng_container_22_ng_container_1_Template, 3, 3, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const bs_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.settingsForm.value["backstore"] === bs_r6);
} }
class IscsiTargetImageSettingsModalComponent {
    constructor(activeModal, iscsiService, actionLabels) {
        this.activeModal = activeModal;
        this.iscsiService = iscsiService;
        this.actionLabels = actionLabels;
    }
    ngOnInit() {
        const fg = {
            backstore: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.imagesSettings[this.image]['backstore']),
            lun: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.imagesSettings[this.image]['lun']),
            wwn: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.imagesSettings[this.image]['wwn'])
        };
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.backstores, (backstore) => {
            const model = this.imagesSettings[this.image][backstore] || {};
            lodash__WEBPACK_IMPORTED_MODULE_0___default().forIn(this.disk_default_controls[backstore], (_value, key) => {
                fg[key] = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(model[key]);
            });
        });
        this.settingsForm = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_3__.CdFormGroup(fg);
    }
    getDiskControlLimits(backstore, setting) {
        if (this.disk_controls_limits) {
            return this.disk_controls_limits[backstore][setting];
        }
        // backward compatibility
        return { type: 'int' };
    }
    save() {
        const backstore = this.settingsForm.controls['backstore'].value;
        const lun = this.settingsForm.controls['lun'].value;
        const wwn = this.settingsForm.controls['wwn'].value;
        const settings = {};
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forIn(this.settingsForm.controls, (control, key) => {
            if (!(control.value === '' || control.value === null) &&
                key in this.disk_default_controls[this.settingsForm.value['backstore']]) {
                settings[key] = control.value;
                // If one setting belongs to multiple backstores, we have to update it in all backstores
                lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.backstores, (currentBackstore) => {
                    if (currentBackstore !== backstore) {
                        const model = this.imagesSettings[this.image][currentBackstore] || {};
                        if (key in model) {
                            this.imagesSettings[this.image][currentBackstore][key] = control.value;
                        }
                    }
                });
            }
        });
        this.imagesSettings[this.image]['backstore'] = backstore;
        this.imagesSettings[this.image]['lun'] = lun;
        this.imagesSettings[this.image]['wwn'] = wwn;
        this.imagesSettings[this.image][backstore] = settings;
        this.imagesSettings = Object.assign({}, this.imagesSettings);
        this.control.updateValueAndValidity({ emitEvent: false });
        this.activeModal.close();
    }
}
IscsiTargetImageSettingsModalComponent.ɵfac = function IscsiTargetImageSettingsModalComponent_Factory(t) { return new (t || IscsiTargetImageSettingsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_app_shared_api_iscsi_service__WEBPACK_IMPORTED_MODULE_1__.IscsiService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__.ActionLabelsI18n)); };
IscsiTargetImageSettingsModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: IscsiTargetImageSettingsModalComponent, selectors: [["cd-iscsi-target-image-settings-modal"]], decls: 25, vars: 8, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5479133824073842793$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_COMPONENT_TS_1 = goog.getMsg("Configure");
        i18n_0 = MSG_EXTERNAL_5479133824073842793$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "Configure";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6408223950156931278$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_COMPONENT_TS_3 = goog.getMsg("Changing these parameters from their default values is usually not necessary.");
        i18n_2 = MSG_EXTERNAL_6408223950156931278$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "Changing these parameters from their default values is usually not necessary.";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4930506384627295710$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_COMPONENT_TS_5 = goog.getMsg("Settings");
        i18n_4 = MSG_EXTERNAL_4930506384627295710$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "Settings";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2699995524827665158$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_COMPONENT_TS_7 = goog.getMsg("Backstore");
        i18n_6 = MSG_EXTERNAL_2699995524827665158$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "Backstore";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4164796296331721280$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_COMPONENT_TS__9 = goog.getMsg("Identifier");
        i18n_8 = MSG_EXTERNAL_4164796296331721280$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_COMPONENT_TS__9;
    }
    else {
        i18n_8 = "Identifier";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2967517037057080886$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_COMPONENT_TS__11 = goog.getMsg("lun");
        i18n_10 = MSG_EXTERNAL_2967517037057080886$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_COMPONENT_TS__11;
    }
    else {
        i18n_10 = "lun";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4035337430291532334$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_COMPONENT_TS__13 = goog.getMsg("wwn");
        i18n_12 = MSG_EXTERNAL_4035337430291532334$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_COMPONENT_TS__13;
    }
    else {
        i18n_12 = "wwn";
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_COMPONENT_TS___15 = goog.getMsg("This field is required.");
        i18n_14 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_ISCSI_TARGET_IMAGE_SETTINGS_MODAL_COMPONENT_TS___15;
    }
    else {
        i18n_14 = "This field is required.";
    } return [[3, "modalRef"], [1, "modal-title"], i18n_0, [1, "modal-content"], ["name", "settingsForm", "novalidate", "", 1, "form", 3, "formGroup"], ["formDir", "ngForm"], [1, "modal-body"], [1, "alert-warning"], i18n_2, [4, "ngIf"], [1, "cd-header"], i18n_4, [1, "form-group", "row"], [1, "col-sm-12"], [1, "col-form-label"], i18n_6, ["id", "backstore", "name", "backstore", "formControlName", "backstore", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], [3, "form", "submitText", "submitActionEvent"], i18n_8, ["for", "lun", 1, "col-form-label", "required"], i18n_10, ["type", "number", "id", "lun", "name", "lun", "formControlName", "lun", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "wwn", 1, "col-form-label"], i18n_12, ["type", "text", "id", "wwn", "name", "wwn", "formControlName", "wwn", 1, "form-control"], [1, "invalid-feedback"], i18n_14, [3, "value"], ["class", "form-group row", 4, "ngFor", "ngForOf"], [3, "settingsForm", "formDir", "setting", "limits"]]; }, template: function IscsiTargetImageSettingsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "cd-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](1, 1)(2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](7, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "form", 4, 5)(10, "div", 6)(11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, IscsiTargetImageSettingsModalComponent_span_13_Template, 14, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "legend", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](15, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 12)(17, "div", 13)(18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](19, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, IscsiTargetImageSettingsModalComponent_option_21_Template, 3, 4, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, IscsiTargetImageSettingsModalComponent_ng_container_22_Template, 2, 1, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 19)(24, "cd-form-button-panel", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("submitActionEvent", function IscsiTargetImageSettingsModalComponent_Template_cd_form_button_panel_submitActionEvent_24_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.settingsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.api_version >= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.backstores);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.backstores);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("form", ctx.settingsForm)("submitText", ctx.actionLabels.UPDATE);
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_5__.CdFormValidationDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_6__.CdFormGroupDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_7__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_8__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _iscsi_setting_iscsi_setting_component__WEBPACK_IMPORTED_MODULE_9__.IscsiSettingComponent, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_10__.FormButtonPanelComponent], pipes: [_shared_pipes_iscsi_backstore_pipe__WEBPACK_IMPORTED_MODULE_11__.IscsiBackstorePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.KeyValuePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpc2NzaS10YXJnZXQtaW1hZ2Utc2V0dGluZ3MtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 81259:
/*!*********************************************************************************************************!*\
  !*** ./src/app/ceph/block/iscsi-target-iqn-settings-modal/iscsi-target-iqn-settings-modal.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IscsiTargetIqnSettingsModalComponent": () => (/* binding */ IscsiTargetIqnSettingsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_shared_api_iscsi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/iscsi.service */ 82909);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-group */ 95463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _iscsi_setting_iscsi_setting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../iscsi-setting/iscsi-setting.component */ 161);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 30839);

















function IscsiTargetIqnSettingsModalComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "cd-iscsi-setting", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const setting_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("settingsForm", ctx_r1.settingsForm)("formDir", _r0)("setting", setting_r2.key)("limits", ctx_r1.getTargetControlLimits(setting_r2.key));
} }
class IscsiTargetIqnSettingsModalComponent {
    constructor(activeModal, iscsiService, actionLabels) {
        this.activeModal = activeModal;
        this.iscsiService = iscsiService;
        this.actionLabels = actionLabels;
    }
    ngOnInit() {
        const fg = {};
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forIn(this.target_default_controls, (_value, key) => {
            fg[key] = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.target_controls.value[key]);
        });
        this.settingsForm = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_3__.CdFormGroup(fg);
    }
    save() {
        const settings = {};
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forIn(this.settingsForm.controls, (control, key) => {
            if (!(control.value === '' || control.value === null)) {
                settings[key] = control.value;
            }
        });
        this.target_controls.setValue(settings);
        this.activeModal.close();
    }
    getTargetControlLimits(setting) {
        if (this.target_controls_limits) {
            return this.target_controls_limits[setting];
        }
        // backward compatibility
        if (['Yes', 'No'].includes(this.target_default_controls[setting])) {
            return { type: 'bool' };
        }
        return { type: 'int' };
    }
}
IscsiTargetIqnSettingsModalComponent.ɵfac = function IscsiTargetIqnSettingsModalComponent_Factory(t) { return new (t || IscsiTargetIqnSettingsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_shared_api_iscsi_service__WEBPACK_IMPORTED_MODULE_1__.IscsiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__.ActionLabelsI18n)); };
IscsiTargetIqnSettingsModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: IscsiTargetIqnSettingsModalComponent, selectors: [["cd-iscsi-target-iqn-settings-modal"]], decls: 13, vars: 7, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8360107325291301836$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IQN_SETTINGS_MODAL_ISCSI_TARGET_IQN_SETTINGS_MODAL_COMPONENT_TS_1 = goog.getMsg("Advanced Settings");
        i18n_0 = MSG_EXTERNAL_8360107325291301836$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IQN_SETTINGS_MODAL_ISCSI_TARGET_IQN_SETTINGS_MODAL_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "Advanced Settings";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6408223950156931278$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IQN_SETTINGS_MODAL_ISCSI_TARGET_IQN_SETTINGS_MODAL_COMPONENT_TS_3 = goog.getMsg("Changing these parameters from their default values is usually not necessary.");
        i18n_2 = MSG_EXTERNAL_6408223950156931278$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_IQN_SETTINGS_MODAL_ISCSI_TARGET_IQN_SETTINGS_MODAL_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "Changing these parameters from their default values is usually not necessary.";
    } return [[3, "modalRef"], [1, "modal-title"], i18n_0, [1, "modal-content"], ["name", "settingsForm", "novalidate", "", 3, "formGroup"], ["formDir", "ngForm"], [1, "modal-body"], [1, "alert-warning"], i18n_2, ["class", "form-group row", 4, "ngFor", "ngForOf"], [1, "modal-footer"], [3, "form", "submitText", "submitActionEvent"], [1, "form-group", "row"], [1, "col-sm-12"], [3, "settingsForm", "formDir", "setting", "limits"]]; }, template: function IscsiTargetIqnSettingsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "cd-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "form", 4, 5)(6, "div", 6)(7, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](8, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, IscsiTargetIqnSettingsModalComponent_div_9_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 10)(12, "cd-form-button-panel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("submitActionEvent", function IscsiTargetIqnSettingsModalComponent_Template_cd_form_button_panel_submitActionEvent_12_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.settingsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 5, ctx.settingsForm.controls));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("form", ctx.settingsForm)("submitText", ctx.actionLabels.UPDATE);
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_5__.CdFormValidationDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_6__.CdFormGroupDirective, _iscsi_setting_iscsi_setting_component__WEBPACK_IMPORTED_MODULE_7__.IscsiSettingComponent, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_8__.FormButtonPanelComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.KeyValuePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpc2NzaS10YXJnZXQtaXFuLXNldHRpbmdzLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 35347:
/*!*****************************************************************************!*\
  !*** ./src/app/ceph/block/iscsi-target-list/iscsi-target-list.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IscsiTargetListComponent": () => (/* binding */ IscsiTargetListComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_shared_api_iscsi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/iscsi.service */ 82909);
/* harmony import */ var _app_shared_classes_list_with_details_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/classes/list-with-details.class */ 68136);
/* harmony import */ var _app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/components/critical-confirmation-modal/critical-confirmation-modal.component */ 30982);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/datatable/table/table.component */ 35905);
/* harmony import */ var _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/enum/cell-template.enum */ 99466);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 65862);
/* harmony import */ var _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/shared/models/cd-table-selection */ 68774);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_pipes_join_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/shared/pipes/join.pipe */ 86969);
/* harmony import */ var _app_shared_pipes_not_available_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/shared/pipes/not-available.pipe */ 55657);
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 79247);
/* harmony import */ var _app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/shared/services/modal.service */ 63285);
/* harmony import */ var _app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/app/shared/services/task-list.service */ 38047);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 32337);
/* harmony import */ var _iscsi_target_discovery_modal_iscsi_target_discovery_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../iscsi-target-discovery-modal/iscsi-target-discovery-modal.component */ 23219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _iscsi_tabs_iscsi_tabs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../iscsi-tabs/iscsi-tabs.component */ 98406);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_alert_panel_alert_panel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/alert-panel/alert-panel.component */ 34501);
/* harmony import */ var _shared_components_doc_doc_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/components/doc/doc.component */ 30490);
/* harmony import */ var _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/datatable/table-actions/table-actions.component */ 94928);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _iscsi_target_details_iscsi_target_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../iscsi-target-details/iscsi-target-details.component */ 32478);



































function IscsiTargetListComponent_cd_alert_panel_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵi18n"](3, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](4, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](ctx_r2.status);
} }
function IscsiTargetListComponent_cd_alert_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "cd-alert-panel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵi18nStart"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](3, "cd-doc", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](4, IscsiTargetListComponent_cd_alert_panel_1_ng_container_4_Template, 6, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r0.status);
} }
function IscsiTargetListComponent_cd_table_2_cd_iscsi_target_details_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "cd-iscsi-target-details", 15);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("cephIscsiConfigVersion", ctx_r4.cephIscsiConfigVersion)("selection", ctx_r4.expandedRow)("settings", ctx_r4.settings);
} }
const _c8 = function (a0) { return [a0]; };
function IscsiTargetListComponent_cd_table_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "cd-table", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("fetchData", function IscsiTargetListComponent_cd_table_2_Template_cd_table_fetchData_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r5.getTargets(); })("setExpandedRow", function IscsiTargetListComponent_cd_table_2_Template_cd_table_setExpandedRow_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r7.setExpandedRow($event); })("updateSelection", function IscsiTargetListComponent_cd_table_2_Template_cd_table_updateSelection_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r8.updateSelection($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](3, "cd-table-actions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function IscsiTargetListComponent_cd_table_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r9.configureDiscoveryAuth(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](5, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerStart"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵi18n"](7, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](8, IscsiTargetListComponent_cd_table_2_cd_iscsi_target_details_8_Template, 1, 3, "cd-iscsi-target-details", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("data", ctx_r1.targets)("columns", ctx_r1.columns)("hasDetails", true)("autoReload", false)("status", ctx_r1.tableStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("permission", ctx_r1.permission)("selection", ctx_r1.selection)("tableActions", ctx_r1.tableActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction1"](10, _c8, ctx_r1.icons.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r1.expandedRow);
} }
class IscsiTargetListComponent extends _app_shared_classes_list_with_details_class__WEBPACK_IMPORTED_MODULE_2__.ListWithDetails {
    constructor(authStorageService, iscsiService, joinPipe, taskListService, notAvailablePipe, modalService, taskWrapper, actionLabels, ngZone) {
        super(ngZone);
        this.authStorageService = authStorageService;
        this.iscsiService = iscsiService;
        this.joinPipe = joinPipe;
        this.taskListService = taskListService;
        this.notAvailablePipe = notAvailablePipe;
        this.modalService = modalService;
        this.taskWrapper = taskWrapper;
        this.actionLabels = actionLabels;
        this.ngZone = ngZone;
        this.available = undefined;
        this.selection = new _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_8__.CdTableSelection();
        this.targets = [];
        this.icons = _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_7__.Icons;
        this.builders = {
            'iscsi/target/create': (metadata) => {
                return {
                    target_iqn: metadata['target_iqn']
                };
            }
        };
        this.permission = this.authStorageService.getPermissions().iscsi;
        this.tableActions = [
            {
                permission: 'create',
                icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_7__.Icons.add,
                routerLink: () => '/block/iscsi/targets/create',
                name: this.actionLabels.CREATE
            },
            {
                permission: 'update',
                icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_7__.Icons.edit,
                routerLink: () => `/block/iscsi/targets/edit/${this.selection.first().target_iqn}`,
                name: this.actionLabels.EDIT,
                disable: () => this.getEditDisableDesc()
            },
            {
                permission: 'delete',
                icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_7__.Icons.destroy,
                click: () => this.deleteIscsiTargetModal(),
                name: this.actionLabels.DELETE,
                disable: () => this.getDeleteDisableDesc()
            }
        ];
    }
    ngOnInit() {
        this.columns = [
            {
                name: "Target",
                prop: 'target_iqn',
                flexGrow: 2,
                cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_6__.CellTemplate.executing
            },
            {
                name: "Portals",
                prop: 'cdPortals',
                pipe: this.joinPipe,
                flexGrow: 2
            },
            {
                name: "Images",
                prop: 'cdImages',
                pipe: this.joinPipe,
                flexGrow: 2
            },
            {
                name: "# Sessions",
                prop: 'info.num_sessions',
                pipe: this.notAvailablePipe,
                flexGrow: 1
            }
        ];
        this.iscsiService.status().subscribe((result) => {
            this.available = result.available;
            if (!result.available) {
                this.status = result.message;
            }
        });
    }
    getTargets() {
        if (this.available) {
            this.setTableRefreshTimeout();
            this.iscsiService.version().subscribe((res) => {
                this.cephIscsiConfigVersion = res['ceph_iscsi_config_version'];
            });
            this.taskListService.init(() => this.iscsiService.listTargets(), (resp) => this.prepareResponse(resp), (targets) => (this.targets = targets), () => this.onFetchError(), this.taskFilter, this.itemFilter, this.builders);
            this.iscsiService.settings().subscribe((settings) => {
                this.settings = settings;
            });
        }
    }
    ngOnDestroy() {
        if (this.summaryDataSubscription) {
            this.summaryDataSubscription.unsubscribe();
        }
    }
    getEditDisableDesc() {
        const first = this.selection.first();
        if (first && (first === null || first === void 0 ? void 0 : first.cdExecuting)) {
            return first.cdExecuting;
        }
        if (first && lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(first === null || first === void 0 ? void 0 : first['info'])) {
            return "Unavailable gateway(s)";
        }
        return !first;
    }
    getDeleteDisableDesc() {
        var _a;
        const first = this.selection.first();
        if (first === null || first === void 0 ? void 0 : first.cdExecuting) {
            return first.cdExecuting;
        }
        if (first && lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(first === null || first === void 0 ? void 0 : first['info'])) {
            return "Unavailable gateway(s)";
        }
        if (first && ((_a = first === null || first === void 0 ? void 0 : first['info']) === null || _a === void 0 ? void 0 : _a['num_sessions'])) {
            return "Target has active sessions";
        }
        return !first;
    }
    prepareResponse(resp) {
        resp.forEach((element) => {
            element.cdPortals = element.portals.map((portal) => `${portal.host}:${portal.ip}`);
            element.cdImages = element.disks.map((disk) => `${disk.pool}/${disk.image}`);
        });
        return resp;
    }
    onFetchError() {
        this.table.reset(); // Disable loading indicator.
    }
    itemFilter(entry, task) {
        return entry.target_iqn === task.metadata['target_iqn'];
    }
    taskFilter(task) {
        return ['iscsi/target/create', 'iscsi/target/edit', 'iscsi/target/delete'].includes(task.name);
    }
    updateSelection(selection) {
        this.selection = selection;
    }
    deleteIscsiTargetModal() {
        const target_iqn = this.selection.first().target_iqn;
        this.modalRef = this.modalService.show(_app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_3__.CriticalConfirmationModalComponent, {
            itemDescription: "iSCSI target",
            itemNames: [target_iqn],
            submitActionObservable: () => this.taskWrapper.wrapTaskAroundCall({
                task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_9__.FinishedTask('iscsi/target/delete', {
                    target_iqn: target_iqn
                }),
                call: this.iscsiService.deleteTarget(target_iqn)
            })
        });
    }
    configureDiscoveryAuth() {
        this.modalService.show(_iscsi_target_discovery_modal_iscsi_target_discovery_modal_component__WEBPACK_IMPORTED_MODULE_16__.IscsiTargetDiscoveryModalComponent);
    }
}
IscsiTargetListComponent.ɵfac = function IscsiTargetListComponent_Factory(t) { return new (t || IscsiTargetListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_12__.AuthStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_app_shared_api_iscsi_service__WEBPACK_IMPORTED_MODULE_1__.IscsiService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_app_shared_pipes_join_pipe__WEBPACK_IMPORTED_MODULE_10__.JoinPipe), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_14__.TaskListService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_app_shared_pipes_not_available_pipe__WEBPACK_IMPORTED_MODULE_11__.NotAvailablePipe), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_13__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_15__.TaskWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__.ActionLabelsI18n), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_23__.NgZone)); };
IscsiTargetListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineComponent"]({ type: IscsiTargetListComponent, selectors: [["cd-iscsi-target-list"]], viewQuery: function IscsiTargetListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵviewQuery"](_app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵProvidersFeature"]([_app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_14__.TaskListService]), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_406380496911957581$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_LIST_ISCSI_TARGET_LIST_COMPONENT_TS_1 = goog.getMsg("iSCSI Targets not available");
        i18n_0 = MSG_EXTERNAL_406380496911957581$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_LIST_ISCSI_TARGET_LIST_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "iSCSI Targets not available";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8335014002096923898$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_LIST_ISCSI_TARGET_LIST_COMPONENT_TS__3 = goog.getMsg("Please consult the {$startTagCdDoc}{$closeTagCdDoc} on how to configure and enable the iSCSI Targets management functionality.", { "startTagCdDoc": "\uFFFD#3\uFFFD", "closeTagCdDoc": "\uFFFD/#3\uFFFD" });
        i18n_2 = MSG_EXTERNAL_8335014002096923898$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_LIST_ISCSI_TARGET_LIST_COMPONENT_TS__3;
    }
    else {
        i18n_2 = "Please consult the " + "\uFFFD#3\uFFFD" + "" + "\uFFFD/#3\uFFFD" + " on how to configure and enable the iSCSI Targets management functionality.";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_383572930609025836$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_LIST_ISCSI_TARGET_LIST_COMPONENT_TS___5 = goog.getMsg("Available information:");
        i18n_4 = MSG_EXTERNAL_383572930609025836$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_LIST_ISCSI_TARGET_LIST_COMPONENT_TS___5;
    }
    else {
        i18n_4 = "Available information:";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_129814798024179889$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_LIST_ISCSI_TARGET_LIST_COMPONENT_TS__7 = goog.getMsg("Discovery authentication");
        i18n_6 = MSG_EXTERNAL_129814798024179889$$SRC_APP_CEPH_BLOCK_ISCSI_TARGET_LIST_ISCSI_TARGET_LIST_COMPONENT_TS__7;
    }
    else {
        i18n_6 = "Discovery authentication";
    } return [["type", "info", "title", i18n_0, 4, "ngIf"], ["columnMode", "flex", "identifier", "target_iqn", "forceIdentifier", "true", "selectionType", "single", 3, "data", "columns", "hasDetails", "autoReload", "status", "fetchData", "setExpandedRow", "updateSelection", 4, "ngIf"], ["type", "info", "title", i18n_0], i18n_2, ["section", "iscsi"], [4, "ngIf"], i18n_4, ["columnMode", "flex", "identifier", "target_iqn", "forceIdentifier", "true", "selectionType", "single", 3, "data", "columns", "hasDetails", "autoReload", "status", "fetchData", "setExpandedRow", "updateSelection"], ["table", ""], [1, "table-actions", "btn-toolbar"], [1, "btn-group", 3, "permission", "selection", "tableActions"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["aria-hidden", "true", 3, "ngClass"], i18n_6, ["cdTableDetail", "", 3, "cephIscsiConfigVersion", "selection", "settings", 4, "ngIf"], ["cdTableDetail", "", 3, "cephIscsiConfigVersion", "selection", "settings"]]; }, template: function IscsiTargetListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "cd-iscsi-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, IscsiTargetListComponent_cd_alert_panel_1_Template, 5, 1, "cd-alert-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](2, IscsiTargetListComponent_cd_table_2_Template, 9, 12, "cd-table", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.available === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.available === true);
    } }, directives: [_iscsi_tabs_iscsi_tabs_component__WEBPACK_IMPORTED_MODULE_17__.IscsiTabsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _shared_components_alert_panel_alert_panel_component__WEBPACK_IMPORTED_MODULE_18__.AlertPanelComponent, _shared_components_doc_doc_component__WEBPACK_IMPORTED_MODULE_19__.DocComponent, _app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_20__.TableActionsComponent, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_21__.FormInputDisableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass, _iscsi_target_details_iscsi_target_details_component__WEBPACK_IMPORTED_MODULE_22__.IscsiTargetDetailsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpc2NzaS10YXJnZXQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 93320:
/*!*****************************************************!*\
  !*** ./src/app/ceph/block/iscsi/iscsi.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IscsiComponent": () => (/* binding */ IscsiComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_api_iscsi_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/api/iscsi.service */ 82909);
/* harmony import */ var _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/enum/cell-template.enum */ 99466);
/* harmony import */ var _app_shared_pipes_dimless_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/pipes/dimless.pipe */ 66369);
/* harmony import */ var _app_shared_pipes_iscsi_backstore_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/pipes/iscsi-backstore.pipe */ 88820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _iscsi_tabs_iscsi_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../iscsi-tabs/iscsi-tabs.component */ 98406);
/* harmony import */ var _shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/datatable/table/table.component */ 35905);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_sparkline_sparkline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/sparkline/sparkline.component */ 76446);
/* harmony import */ var _shared_pipes_not_available_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/pipes/not-available.pipe */ 55657);
/* harmony import */ var _shared_pipes_relative_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/pipes/relative-date.pipe */ 90068);















const _c0 = ["iscsiSparklineTpl"];
const _c1 = ["iscsiPerSecondTpl"];
const _c2 = ["iscsiRelativeDateTpl"];
function IscsiComponent_ng_template_9_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "cd-sparkline", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    const value_r7 = ctx_r10.value;
    const row_r6 = ctx_r10.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", value_r7)("isBinary", row_r6.cdIsBinary);
} }
function IscsiComponent_ng_template_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " n/a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function IscsiComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, IscsiComponent_ng_template_9_span_0_Template, 2, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, IscsiComponent_ng_template_9_span_1_Template, 2, 0, "span", 8);
} if (rf & 2) {
    const row_r6 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", row_r6.backstore === "user:rbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", row_r6.backstore !== "user:rbd");
} }
function IscsiComponent_ng_template_11_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", value_r12, " /s ");
} }
function IscsiComponent_ng_template_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " n/a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function IscsiComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, IscsiComponent_ng_template_11_span_0_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, IscsiComponent_ng_template_11_span_1_Template, 2, 0, "span", 8);
} if (rf & 2) {
    const row_r11 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", row_r11.backstore === "user:rbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", row_r11.backstore !== "user:rbd");
} }
function IscsiComponent_ng_template_13_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "notAvailable");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "relativeDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, value_r17)), " ");
} }
function IscsiComponent_ng_template_13_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " n/a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function IscsiComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, IscsiComponent_ng_template_13_span_0_Template, 4, 5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, IscsiComponent_ng_template_13_span_1_Template, 2, 0, "span", 8);
} if (rf & 2) {
    const row_r16 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", row_r16.backstore === "user:rbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", row_r16.backstore !== "user:rbd");
} }
class IscsiComponent {
    constructor(iscsiService, dimlessPipe, iscsiBackstorePipe) {
        this.iscsiService = iscsiService;
        this.dimlessPipe = dimlessPipe;
        this.iscsiBackstorePipe = iscsiBackstorePipe;
        this.gateways = [];
        this.images = [];
    }
    ngOnInit() {
        this.gatewaysColumns = [
            {
                name: "Name",
                prop: 'name'
            },
            {
                name: "State",
                prop: 'state',
                flexGrow: 1,
                cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_1__.CellTemplate.badge,
                customTemplateConfig: {
                    map: {
                        up: { class: 'badge-success' },
                        down: { class: 'badge-danger' }
                    }
                }
            },
            {
                name: "# Targets",
                prop: 'num_targets'
            },
            {
                name: "# Sessions",
                prop: 'num_sessions'
            }
        ];
        this.imagesColumns = [
            {
                name: "Pool",
                prop: 'pool'
            },
            {
                name: "Image",
                prop: 'image'
            },
            {
                name: "Backstore",
                prop: 'backstore',
                pipe: this.iscsiBackstorePipe
            },
            {
                name: "Read Bytes",
                prop: 'stats_history.rd_bytes',
                cellTemplate: this.iscsiSparklineTpl
            },
            {
                name: "Write Bytes",
                prop: 'stats_history.wr_bytes',
                cellTemplate: this.iscsiSparklineTpl
            },
            {
                name: "Read Ops",
                prop: 'stats.rd',
                pipe: this.dimlessPipe,
                cellTemplate: this.iscsiPerSecondTpl
            },
            {
                name: "Write Ops",
                prop: 'stats.wr',
                pipe: this.dimlessPipe,
                cellTemplate: this.iscsiPerSecondTpl
            },
            {
                name: "A/O Since",
                prop: 'optimized_since',
                cellTemplate: this.iscsiRelativeDateTpl
            }
        ];
    }
    refresh() {
        this.iscsiService.overview().subscribe((overview) => {
            this.gateways = overview['gateways'];
            this.images = overview['images'];
            this.images.map((image) => {
                if (image.stats_history) {
                    image.stats_history.rd_bytes = image.stats_history.rd_bytes.map((i) => i[1]);
                    image.stats_history.wr_bytes = image.stats_history.wr_bytes.map((i) => i[1]);
                }
                image.cdIsBinary = true;
                return image;
            });
        });
    }
}
IscsiComponent.ɵfac = function IscsiComponent_Factory(t) { return new (t || IscsiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_shared_api_iscsi_service__WEBPACK_IMPORTED_MODULE_0__.IscsiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_shared_pipes_dimless_pipe__WEBPACK_IMPORTED_MODULE_2__.DimlessPipe), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_shared_pipes_iscsi_backstore_pipe__WEBPACK_IMPORTED_MODULE_3__.IscsiBackstorePipe)); };
IscsiComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: IscsiComponent, selectors: [["cd-iscsi"]], viewQuery: function IscsiComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c2, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.iscsiSparklineTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.iscsiPerSecondTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.iscsiRelativeDateTpl = _t.first);
    } }, decls: 15, vars: 4, consts: function () { let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5130480165747305341$$SRC_APP_CEPH_BLOCK_ISCSI_ISCSI_COMPONENT_TS_4 = goog.getMsg("Gateways");
        i18n_3 = MSG_EXTERNAL_5130480165747305341$$SRC_APP_CEPH_BLOCK_ISCSI_ISCSI_COMPONENT_TS_4;
    }
    else {
        i18n_3 = "Gateways";
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_414887388288176527$$SRC_APP_CEPH_BLOCK_ISCSI_ISCSI_COMPONENT_TS_6 = goog.getMsg("Images");
        i18n_5 = MSG_EXTERNAL_414887388288176527$$SRC_APP_CEPH_BLOCK_ISCSI_ISCSI_COMPONENT_TS_6;
    }
    else {
        i18n_5 = "Images";
    } return [i18n_3, [3, "data", "columns", "fetchData"], i18n_5, [3, "data", "columns"], ["iscsiSparklineTpl", ""], ["iscsiPerSecondTpl", ""], ["iscsiRelativeDateTpl", ""], [4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [3, "data", "isBinary"], [1, "text-muted"]]; }, template: function IscsiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "cd-iscsi-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div")(4, "cd-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("fetchData", function IscsiComponent_Template_cd_table_fetchData_4_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](6, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "cd-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, IscsiComponent_ng_template_9_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, IscsiComponent_ng_template_11_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, IscsiComponent_ng_template_13_Template, 2, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx.gateways)("columns", ctx.gatewaysColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx.images)("columns", ctx.imagesColumns);
    } }, directives: [_iscsi_tabs_iscsi_tabs_component__WEBPACK_IMPORTED_MODULE_4__.IscsiTabsComponent, _shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_sparkline_sparkline_component__WEBPACK_IMPORTED_MODULE_6__.SparklineComponent], pipes: [_shared_pipes_not_available_pipe__WEBPACK_IMPORTED_MODULE_7__.NotAvailablePipe, _shared_pipes_relative_date_pipe__WEBPACK_IMPORTED_MODULE_8__.RelativeDatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpc2NzaS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 62252:
/*!*************************************************************************************************!*\
  !*** ./src/app/ceph/block/mirroring/bootstrap-create-modal/bootstrap-create-modal.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BootstrapCreateModalComponent": () => (/* binding */ BootstrapCreateModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 76461);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 42720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 27153);
/* harmony import */ var _app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/rbd-mirroring.service */ 2840);
/* harmony import */ var _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-group */ 95463);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 32337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/directives/autofocus.directive */ 82945);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/submit-button/submit-button.component */ 39749);
/* harmony import */ var _shared_components_copy2clipboard_button_copy2clipboard_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/copy2clipboard-button/copy2clipboard-button.component */ 58039);
/* harmony import */ var _shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/back-button/back-button.component */ 13472);
























function BootstrapCreateModalComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](1, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function BootstrapCreateModalComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const pool_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("id", pool_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("name", pool_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", pool_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("for", pool_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](pool_r4.name);
} }
function BootstrapCreateModalComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](1, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
class BootstrapCreateModalComponent {
    constructor(activeModal, rbdMirroringService, taskWrapper) {
        this.activeModal = activeModal;
        this.rbdMirroringService = rbdMirroringService;
        this.taskWrapper = taskWrapper;
        this.pools = [];
        this.createForm();
    }
    createForm() {
        this.createBootstrapForm = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_2__.CdFormGroup({
            siteName: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]
            }),
            pools: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({}, {
                validators: [this.validatePools()]
            }),
            token: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', {})
        });
    }
    ngOnInit() {
        this.createBootstrapForm.get('siteName').setValue(this.siteName);
        this.rbdMirroringService.getSiteName().subscribe((response) => {
            this.createBootstrapForm.get('siteName').setValue(response.site_name);
        });
        this.subs = this.rbdMirroringService.subscribeSummary((data) => {
            const pools = data.content_data.pools;
            this.pools = pools.reduce((acc, pool) => {
                acc.push({
                    name: pool['name'],
                    mirror_mode: pool['mirror_mode']
                });
                return acc;
            }, []);
            const poolsControl = this.createBootstrapForm.get('pools');
            lodash__WEBPACK_IMPORTED_MODULE_0___default().each(this.pools, (pool) => {
                const poolName = pool['name'];
                const mirroring_disabled = pool['mirror_mode'] === 'disabled';
                const control = poolsControl.controls[poolName];
                if (control) {
                    if (mirroring_disabled && control.disabled) {
                        control.enable();
                    }
                    else if (!mirroring_disabled && control.enabled) {
                        control.disable();
                        control.setValue(true);
                    }
                }
                else {
                    poolsControl.addControl(poolName, new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl({ value: !mirroring_disabled, disabled: !mirroring_disabled }));
                }
            });
        });
    }
    ngOnDestroy() {
        if (this.subs) {
            this.subs.unsubscribe();
        }
    }
    validatePools() {
        return (poolsControl) => {
            let checkedCount = 0;
            lodash__WEBPACK_IMPORTED_MODULE_0___default().each(poolsControl.controls, (control) => {
                if (control.value === true) {
                    ++checkedCount;
                }
            });
            if (checkedCount > 0) {
                return null;
            }
            return { requirePool: true };
        };
    }
    generate() {
        this.createBootstrapForm.get('token').setValue('');
        let bootstrapPoolName = '';
        const poolNames = [];
        const poolsControl = this.createBootstrapForm.get('pools');
        lodash__WEBPACK_IMPORTED_MODULE_0___default().each(poolsControl.controls, (control, poolName) => {
            if (control.value === true) {
                bootstrapPoolName = poolName;
                if (!control.disabled) {
                    poolNames.push(poolName);
                }
            }
        });
        const poolModeRequest = {
            mirror_mode: 'image'
        };
        const apiActionsObs = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.concat)(this.rbdMirroringService.setSiteName(this.createBootstrapForm.getValue('siteName')), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.forkJoin)(poolNames.map((poolName) => this.rbdMirroringService.updatePool(poolName, poolModeRequest))), this.rbdMirroringService
            .createBootstrapToken(bootstrapPoolName)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.tap)((data) => this.createBootstrapForm.get('token').setValue(data['token'])))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.last)());
        const finishHandler = () => {
            this.rbdMirroringService.refresh();
            this.createBootstrapForm.setErrors({ cdSubmitButton: true });
        };
        const taskObs = this.taskWrapper.wrapTaskAroundCall({
            task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_3__.FinishedTask('rbd/mirroring/bootstrap/create', {}),
            call: apiActionsObs
        });
        taskObs.subscribe({ error: finishHandler, complete: finishHandler });
    }
}
BootstrapCreateModalComponent.ɵfac = function BootstrapCreateModalComponent_Factory(t) { return new (t || BootstrapCreateModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_1__.RbdMirroringService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_4__.TaskWrapperService)); };
BootstrapCreateModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: BootstrapCreateModalComponent, selectors: [["cd-bootstrap-create-modal"]], decls: 32, vars: 6, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4645993115976933405$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS_1 = goog.getMsg("Create Bootstrap Token");
        i18n_0 = MSG_EXTERNAL_4645993115976933405$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "Create Bootstrap Token";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2076916388907664716$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS_3 = goog.getMsg("To create a bootstrap token which can be imported by a peer site cluster, provide the local site's name, select which pools will have mirroring enabled, and click\u00A0 {$startTagKbd}Generate{$closeTagKbd}.", { "startTagKbd": "\uFFFD#10\uFFFD", "closeTagKbd": "\uFFFD/#10\uFFFD" });
        i18n_2 = MSG_EXTERNAL_2076916388907664716$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "To create a bootstrap token which can be imported by a peer site cluster, provide the local site's name, select which pools will have mirroring enabled, and click\xA0 " + "\uFFFD#10\uFFFD" + "Generate" + "\uFFFD/#10\uFFFD" + ".";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8184915422139451927$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS_5 = goog.getMsg("Site Name");
        i18n_4 = MSG_EXTERNAL_8184915422139451927$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "Site Name";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5451140586403689891$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS_7 = goog.getMsg("Name...");
        i18n_6 = MSG_EXTERNAL_5451140586403689891$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "Name...";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8231861638104479971$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS_9 = goog.getMsg("Pools");
        i18n_8 = MSG_EXTERNAL_8231861638104479971$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS_9;
    }
    else {
        i18n_8 = "Pools";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5193539160604294602$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS_11 = goog.getMsg("Generate");
        i18n_10 = MSG_EXTERNAL_5193539160604294602$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS_11;
    }
    else {
        i18n_10 = "Generate";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3039940756451018621$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS_13 = goog.getMsg("Token");
        i18n_12 = MSG_EXTERNAL_3039940756451018621$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS_13;
    }
    else {
        i18n_12 = "Token";
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2219690728897166230$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS_15 = goog.getMsg("Generated token...");
        i18n_14 = MSG_EXTERNAL_2219690728897166230$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS_15;
    }
    else {
        i18n_14 = "Generated token...";
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7819314041543176992$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS_17 = goog.getMsg("Close");
        i18n_16 = MSG_EXTERNAL_7819314041543176992$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS_17;
    }
    else {
        i18n_16 = "Close";
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS__19 = goog.getMsg("This field is required.");
        i18n_18 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS__19;
    }
    else {
        i18n_18 = "This field is required.";
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7972613560172284866$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS__21 = goog.getMsg("At least one pool is required.");
        i18n_20 = MSG_EXTERNAL_7972613560172284866$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_CREATE_MODAL_BOOTSTRAP_CREATE_MODAL_COMPONENT_TS__21;
    }
    else {
        i18n_20 = "At least one pool is required.";
    } return [[3, "modalRef"], [1, "modal-title"], i18n_0, [1, "modal-content"], ["name", "createBootstrapForm", "novalidate", "", 1, "form", 3, "formGroup"], ["formDir", "ngForm"], [1, "modal-body"], i18n_2, [1, "form-group"], ["for", "siteName", 1, "col-form-label", "required"], i18n_4, ["type", "text", "placeholder", i18n_6, "id", "siteName", "name", "siteName", "formControlName", "siteName", "autofocus", "", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["formGroupName", "pools", 1, "form-group"], ["for", "pools", 1, "col-form-label", "required"], i18n_8, ["class", "custom-control custom-checkbox", 4, "ngFor", "ngForOf"], [1, "mb-4", "float-end", 3, "form", "submitAction"], i18n_10, ["for", "token", 1, "col-form-label"], i18n_12, ["placeholder", i18n_14, "id", "token", "formControlName", "token", "readonly", "", 1, "form-control", "resize-vertical"], ["source", "token", 1, "float-end"], [1, "modal-footer"], ["name", i18n_16, 3, "backAction"], [1, "invalid-feedback"], i18n_18, [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "name", "formControlName"], [1, "custom-control-label", 3, "for"], i18n_20]; }, template: function BootstrapCreateModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "cd-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "form", 4, 5)(6, "div", 6)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18nStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "kbd");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 8)(12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, BootstrapCreateModalComponent_span_15_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 13)(17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](18, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, BootstrapCreateModalComponent_div_19_Template, 4, 5, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, BootstrapCreateModalComponent_span_20_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "cd-submit-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("submitAction", function BootstrapCreateModalComponent_Template_cd_submit_button_submitAction_21_listener() { return ctx.generate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](22, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "div", 8)(24, "label", 19)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](26, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "cd-copy-2-clipboard-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div", 23)(31, "cd-back-button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("backAction", function BootstrapCreateModalComponent_Template_cd_back_button_backAction_31_listener() { return ctx.activeModal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.createBootstrapForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.createBootstrapForm.showError("siteName", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.pools);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.createBootstrapForm.showError("pools", _r0, "requirePool"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("form", ctx.createBootstrapForm);
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_6__.CdFormValidationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_7__.CdFormGroupDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_8__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_9__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_10__.AutofocusDirective, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupName, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.CheckboxControlValueAccessor, _shared_components_submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_11__.SubmitButtonComponent, _shared_components_copy2clipboard_button_copy2clipboard_button_component__WEBPACK_IMPORTED_MODULE_12__.Copy2ClipboardButtonComponent, _shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_13__.BackButtonComponent], styles: [".form-group.ng-invalid[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC1jcmVhdGUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiYm9vdHN0cmFwLWNyZWF0ZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwLm5nLWludmFsaWQgLmludmFsaWQtZmVlZGJhY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 83739:
/*!*************************************************************************************************!*\
  !*** ./src/app/ceph/block/mirroring/bootstrap-import-modal/bootstrap-import-modal.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BootstrapImportModalComponent": () => (/* binding */ BootstrapImportModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 76461);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 42720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 27153);
/* harmony import */ var _app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/rbd-mirroring.service */ 2840);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-group */ 95463);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 32337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/directives/autofocus.directive */ 82945);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/form-button-panel/form-button-panel.component */ 30839);
























function BootstrapImportModalComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](1, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function BootstrapImportModalComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const direction_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", direction_r7.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](direction_r7.desc);
} }
function BootstrapImportModalComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const pool_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("id", pool_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("name", pool_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("formControlName", pool_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("for", pool_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](pool_r8.name);
} }
function BootstrapImportModalComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](1, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function BootstrapImportModalComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](1, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function BootstrapImportModalComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](1, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
class BootstrapImportModalComponent {
    constructor(activeModal, actionLabels, rbdMirroringService, taskWrapper) {
        this.activeModal = activeModal;
        this.actionLabels = actionLabels;
        this.rbdMirroringService = rbdMirroringService;
        this.taskWrapper = taskWrapper;
        this.pools = [];
        this.directions = [
            { key: 'rx-tx', desc: 'Bidirectional' },
            { key: 'rx', desc: 'Unidirectional (receive-only)' }
        ];
        this.createForm();
    }
    createForm() {
        this.importBootstrapForm = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_3__.CdFormGroup({
            siteName: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]
            }),
            direction: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('rx-tx', {}),
            pools: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroup({}, {
                validators: [this.validatePools()]
            }),
            token: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, this.validateToken()]
            })
        });
    }
    ngOnInit() {
        this.rbdMirroringService.getSiteName().subscribe((response) => {
            this.importBootstrapForm.get('siteName').setValue(response.site_name);
        });
        this.subs = this.rbdMirroringService.subscribeSummary((data) => {
            const pools = data.content_data.pools;
            this.pools = pools.reduce((acc, pool) => {
                acc.push({
                    name: pool['name'],
                    mirror_mode: pool['mirror_mode']
                });
                return acc;
            }, []);
            const poolsControl = this.importBootstrapForm.get('pools');
            lodash__WEBPACK_IMPORTED_MODULE_0___default().each(this.pools, (pool) => {
                const poolName = pool['name'];
                const mirroring_disabled = pool['mirror_mode'] === 'disabled';
                const control = poolsControl.controls[poolName];
                if (control) {
                    if (mirroring_disabled && control.disabled) {
                        control.enable();
                    }
                    else if (!mirroring_disabled && control.enabled) {
                        control.disable();
                        control.setValue(true);
                    }
                }
                else {
                    poolsControl.addControl(poolName, new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl({ value: !mirroring_disabled, disabled: !mirroring_disabled }));
                }
            });
        });
    }
    ngOnDestroy() {
        if (this.subs) {
            this.subs.unsubscribe();
        }
    }
    validatePools() {
        return (poolsControl) => {
            let checkedCount = 0;
            lodash__WEBPACK_IMPORTED_MODULE_0___default().each(poolsControl.controls, (control) => {
                if (control.value === true) {
                    ++checkedCount;
                }
            });
            if (checkedCount > 0) {
                return null;
            }
            return { requirePool: true };
        };
    }
    validateToken() {
        return (token) => {
            try {
                if (JSON.parse(atob(token.value))) {
                    return null;
                }
            }
            catch (error) { }
            return { invalidToken: true };
        };
    }
    import() {
        const bootstrapPoolNames = [];
        const poolNames = [];
        const poolsControl = this.importBootstrapForm.get('pools');
        lodash__WEBPACK_IMPORTED_MODULE_0___default().each(poolsControl.controls, (control, poolName) => {
            if (control.value === true) {
                bootstrapPoolNames.push(poolName);
                if (!control.disabled) {
                    poolNames.push(poolName);
                }
            }
        });
        const poolModeRequest = {
            mirror_mode: 'image'
        };
        let apiActionsObs = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.concat)(this.rbdMirroringService.setSiteName(this.importBootstrapForm.getValue('siteName')), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.forkJoin)(poolNames.map((poolName) => this.rbdMirroringService.updatePool(poolName, poolModeRequest))));
        apiActionsObs = bootstrapPoolNames
            .reduce((obs, poolName) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.concat)(obs, this.rbdMirroringService.importBootstrapToken(poolName, this.importBootstrapForm.getValue('direction'), this.importBootstrapForm.getValue('token')));
        }, apiActionsObs)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.last)());
        const finishHandler = () => {
            this.rbdMirroringService.refresh();
            this.importBootstrapForm.setErrors({ cdSubmitButton: true });
        };
        const taskObs = this.taskWrapper.wrapTaskAroundCall({
            task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_4__.FinishedTask('rbd/mirroring/bootstrap/import', {}),
            call: apiActionsObs
        });
        taskObs.subscribe({
            error: finishHandler,
            complete: () => {
                finishHandler();
                this.activeModal.close();
            }
        });
    }
}
BootstrapImportModalComponent.ɵfac = function BootstrapImportModalComponent_Factory(t) { return new (t || BootstrapImportModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__.ActionLabelsI18n), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_1__.RbdMirroringService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_5__.TaskWrapperService)); };
BootstrapImportModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: BootstrapImportModalComponent, selectors: [["cd-bootstrap-import-modal"]], decls: 36, vars: 10, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4130053543590533787$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS_1 = goog.getMsg("Import Bootstrap Token");
        i18n_0 = MSG_EXTERNAL_4130053543590533787$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "Import Bootstrap Token";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3788646122571774014$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS_3 = goog.getMsg("To import a bootstrap token which was created by a peer site cluster, provide the local site's name, select which pools will have mirroring enabled, provide the generated token, and click\u00A0{$startTagKbd}Import{$closeTagKbd}.", { "startTagKbd": "\uFFFD#10\uFFFD", "closeTagKbd": "\uFFFD/#10\uFFFD" });
        i18n_2 = MSG_EXTERNAL_3788646122571774014$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "To import a bootstrap token which was created by a peer site cluster, provide the local site's name, select which pools will have mirroring enabled, provide the generated token, and click\xA0" + "\uFFFD#10\uFFFD" + "Import" + "\uFFFD/#10\uFFFD" + ".";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8184915422139451927$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS_5 = goog.getMsg("Site Name");
        i18n_4 = MSG_EXTERNAL_8184915422139451927$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "Site Name";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5451140586403689891$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS_7 = goog.getMsg("Name...");
        i18n_6 = MSG_EXTERNAL_5451140586403689891$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "Name...";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4328738626502194147$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS_9 = goog.getMsg("Direction");
        i18n_8 = MSG_EXTERNAL_4328738626502194147$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS_9;
    }
    else {
        i18n_8 = "Direction";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8231861638104479971$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS_11 = goog.getMsg("Pools");
        i18n_10 = MSG_EXTERNAL_8231861638104479971$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS_11;
    }
    else {
        i18n_10 = "Pools";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3039940756451018621$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS_13 = goog.getMsg("Token");
        i18n_12 = MSG_EXTERNAL_3039940756451018621$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS_13;
    }
    else {
        i18n_12 = "Token";
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2219690728897166230$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS_15 = goog.getMsg("Generated token...");
        i18n_14 = MSG_EXTERNAL_2219690728897166230$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS_15;
    }
    else {
        i18n_14 = "Generated token...";
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS__17 = goog.getMsg("This field is required.");
        i18n_16 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS__17;
    }
    else {
        i18n_16 = "This field is required.";
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7972613560172284866$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS__19 = goog.getMsg("At least one pool is required.");
        i18n_18 = MSG_EXTERNAL_7972613560172284866$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS__19;
    }
    else {
        i18n_18 = "At least one pool is required.";
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS__21 = goog.getMsg("This field is required.");
        i18n_20 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS__21;
    }
    else {
        i18n_20 = "This field is required.";
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2384592179404220850$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS__23 = goog.getMsg("The token is invalid.");
        i18n_22 = MSG_EXTERNAL_2384592179404220850$$SRC_APP_CEPH_BLOCK_MIRRORING_BOOTSTRAP_IMPORT_MODAL_BOOTSTRAP_IMPORT_MODAL_COMPONENT_TS__23;
    }
    else {
        i18n_22 = "The token is invalid.";
    } return [[3, "modalRef"], [1, "modal-title"], i18n_0, [1, "modal-content"], ["name", "importBootstrapForm", "novalidate", "", 1, "form", 3, "formGroup"], ["formDir", "ngForm"], [1, "modal-body"], i18n_2, [1, "form-group"], ["for", "siteName", 1, "col-form-label", "required"], i18n_4, ["type", "text", "placeholder", i18n_6, "id", "siteName", "name", "siteName", "formControlName", "siteName", "autofocus", "", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "direction", 1, "col-form-label"], i18n_8, ["id", "direction", "name", "direction", "formControlName", "direction", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["formGroupName", "pools", 1, "form-group"], ["for", "pools", 1, "col-form-label", "required"], i18n_10, ["class", "custom-control custom-checkbox", 4, "ngFor", "ngForOf"], ["for", "token", 1, "col-form-label", "required"], i18n_12, ["placeholder", i18n_14, "id", "token", "formControlName", "token", 1, "form-control", "resize-vertical"], [1, "modal-footer"], [3, "form", "submitText", "submitActionEvent"], [1, "invalid-feedback"], i18n_16, [3, "value"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "name", "formControlName"], [1, "custom-control-label", 3, "for"], i18n_18, i18n_20, i18n_22]; }, template: function BootstrapImportModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "cd-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "form", 4, 5)(6, "div", 6)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18nStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "kbd");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 8)(12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, BootstrapImportModalComponent_span_15_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 8)(17, "label", 13)(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](19, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, BootstrapImportModalComponent_option_21_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 17)(23, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](24, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](25, BootstrapImportModalComponent_div_25_Template, 4, 5, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](26, BootstrapImportModalComponent_span_26_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "div", 8)(28, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](29, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](32, BootstrapImportModalComponent_span_32_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](33, BootstrapImportModalComponent_span_33_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "div", 24)(35, "cd-form-button-panel", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("submitActionEvent", function BootstrapImportModalComponent_Template_cd_form_button_panel_submitActionEvent_35_listener() { return ctx.import(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.importBootstrapForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.importBootstrapForm.showError("siteName", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.directions);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.pools);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.importBootstrapForm.showError("pools", _r0, "requirePool"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.importBootstrapForm.showError("token", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.importBootstrapForm.showError("token", _r0, "invalidToken"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("form", ctx.importBootstrapForm)("submitText", ctx.actionLabels.SUBMIT);
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_7__.CdFormValidationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_8__.CdFormGroupDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_9__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_10__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_11__.AutofocusDirective, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.CheckboxControlValueAccessor, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_12__.FormButtonPanelComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib290c3RyYXAtaW1wb3J0LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 22464:
/*!***************************************************************************!*\
  !*** ./src/app/ceph/block/mirroring/daemon-list/daemon-list.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DaemonListComponent": () => (/* binding */ DaemonListComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/api/rbd-mirroring.service */ 2840);
/* harmony import */ var _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/classes/table-status-view-cache */ 69158);
/* harmony import */ var _app_shared_pipes_ceph_short_version_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/pipes/ceph-short-version.pipe */ 58111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/datatable/table/table.component */ 35905);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _mirror_health_color_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mirror-health-color.pipe */ 6228);










const _c0 = ["healthTmpl"];
function DaemonListComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "mirrorHealthColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r2 = ctx.row;
    const value_r3 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, row_r2.health_color));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](value_r3);
} }
class DaemonListComponent {
    constructor(rbdMirroringService, cephShortVersionPipe) {
        this.rbdMirroringService = rbdMirroringService;
        this.cephShortVersionPipe = cephShortVersionPipe;
        this.tableStatus = new _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_1__.TableStatusViewCache();
    }
    ngOnInit() {
        this.columns = [
            { prop: 'instance_id', name: "Instance", flexGrow: 2 },
            { prop: 'id', name: "ID", flexGrow: 2 },
            { prop: 'server_hostname', name: "Hostname", flexGrow: 2 },
            {
                prop: 'version',
                name: "Version",
                pipe: this.cephShortVersionPipe,
                flexGrow: 2
            },
            {
                prop: 'health',
                name: "Health",
                cellTemplate: this.healthTmpl,
                flexGrow: 1
            }
        ];
        this.subs = this.rbdMirroringService.subscribeSummary((data) => {
            this.data = data.content_data.daemons;
            this.tableStatus = new _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_1__.TableStatusViewCache(data.status);
        });
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    refresh() {
        this.rbdMirroringService.refresh();
    }
}
DaemonListComponent.ɵfac = function DaemonListComponent_Factory(t) { return new (t || DaemonListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_0__.RbdMirroringService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_shared_pipes_ceph_short_version_pipe__WEBPACK_IMPORTED_MODULE_2__.CephShortVersionPipe)); };
DaemonListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DaemonListComponent, selectors: [["cd-mirroring-daemons"]], viewQuery: function DaemonListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.healthTmpl = _t.first);
    } }, decls: 3, vars: 4, consts: [["columnMode", "flex", 3, "data", "columns", "autoReload", "status", "fetchData"], ["healthTmpl", ""], [3, "ngClass"]], template: function DaemonListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "cd-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("fetchData", function DaemonListComponent_Template_cd_table_fetchData_0_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DaemonListComponent_ng_template_1_Template, 3, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.data)("columns", ctx.columns)("autoReload", -1)("status", ctx.tableStatus);
    } }, directives: [_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_3__.TableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass], pipes: [_mirror_health_color_pipe__WEBPACK_IMPORTED_MODULE_4__.MirrorHealthColorPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYWVtb24tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 12523:
/*!*************************************************************************!*\
  !*** ./src/app/ceph/block/mirroring/image-list/image-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageListComponent": () => (/* binding */ ImageListComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/api/rbd-mirroring.service */ 2840);
/* harmony import */ var _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/classes/table-status-view-cache */ 69158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_directives_stateful_tab_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/stateful-tab.directive */ 59376);
/* harmony import */ var _shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/datatable/table/table.component */ 35905);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _mirror_health_color_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mirror-health-color.pipe */ 6228);










const _c0 = ["stateTmpl"];
const _c1 = ["syncTmpl"];
const _c2 = ["progressTmpl"];
function ImageListComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "cd-table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("fetchData", function ImageListComponent_ng_template_5_Template_cd_table_fetchData_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.refresh(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r1.image_error.data)("columns", ctx_r1.image_error.columns)("autoReload", -1)("status", ctx_r1.tableStatus);
} }
function ImageListComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "cd-table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("fetchData", function ImageListComponent_ng_template_9_Template_cd_table_fetchData_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.refresh(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r2.image_syncing.data)("columns", ctx_r2.image_syncing.columns)("autoReload", -1)("status", ctx_r2.tableStatus);
} }
function ImageListComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "cd-table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("fetchData", function ImageListComponent_ng_template_13_Template_cd_table_fetchData_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.refresh(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r3.image_ready.data)("columns", ctx_r3.image_ready.columns)("autoReload", -1)("status", ctx_r3.tableStatus);
} }
function ImageListComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "mirrorHealthColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r14 = ctx.row;
    const value_r15 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, row_r14.state_color));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](value_r15);
} }
function ImageListComponent_ng_template_17_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div");
} }
function ImageListComponent_ng_template_17_ngb_progressbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ngb-progressbar", 17);
} if (rf & 2) {
    const value_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", value_r17)("showValue", true);
} }
function ImageListComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ImageListComponent_ng_template_17_div_0_Template, 1, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ImageListComponent_ng_template_17_ngb_progressbar_1_Template, 1, 2, "ngb-progressbar", 16);
} if (rf & 2) {
    const row_r16 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r16.state === "Replaying");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r16.state === "Syncing");
} }
class ImageListComponent {
    constructor(rbdMirroringService) {
        this.rbdMirroringService = rbdMirroringService;
        this.image_error = {
            data: [],
            columns: {}
        };
        this.image_syncing = {
            data: [],
            columns: {}
        };
        this.image_ready = {
            data: [],
            columns: {}
        };
        this.tableStatus = new _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_1__.TableStatusViewCache();
    }
    ngOnInit() {
        this.image_error.columns = [
            { prop: 'pool_name', name: "Pool", flexGrow: 2 },
            { prop: 'name', name: "Image", flexGrow: 2 },
            {
                prop: 'state',
                name: "State",
                cellTemplate: this.stateTmpl,
                flexGrow: 1
            },
            { prop: 'description', name: "Issue", flexGrow: 4 }
        ];
        this.image_syncing.columns = [
            { prop: 'pool_name', name: "Pool", flexGrow: 2 },
            { prop: 'name', name: "Image", flexGrow: 2 },
            {
                prop: 'state',
                name: "State",
                cellTemplate: this.stateTmpl,
                flexGrow: 1
            },
            {
                prop: 'progress',
                name: "Progress",
                cellTemplate: this.progressTmpl,
                flexGrow: 2
            },
            { prop: 'bytes_per_second', name: "Bytes per second", flexGrow: 2 },
            { prop: 'entries_behind_primary', name: "Entries behind primary", flexGrow: 2 }
        ];
        this.image_ready.columns = [
            { prop: 'pool_name', name: "Pool", flexGrow: 2 },
            { prop: 'name', name: "Image", flexGrow: 2 },
            {
                prop: 'state',
                name: "State",
                cellTemplate: this.stateTmpl,
                flexGrow: 1
            },
            { prop: 'description', name: "Description", flexGrow: 4 }
        ];
        this.subs = this.rbdMirroringService.subscribeSummary((data) => {
            this.image_error.data = data.content_data.image_error;
            this.image_syncing.data = data.content_data.image_syncing;
            this.image_ready.data = data.content_data.image_ready;
            this.tableStatus = new _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_1__.TableStatusViewCache(data.status);
        });
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    refresh() {
        this.rbdMirroringService.refresh();
    }
}
ImageListComponent.ɵfac = function ImageListComponent_Factory(t) { return new (t || ImageListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_0__.RbdMirroringService)); };
ImageListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ImageListComponent, selectors: [["cd-mirroring-images"]], viewQuery: function ImageListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.stateTmpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.syncTmpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.progressTmpl = _t.first);
    } }, decls: 19, vars: 4, consts: function () { let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5286124415242572625$$SRC_APP_CEPH_BLOCK_MIRRORING_IMAGE_LIST_IMAGE_LIST_COMPONENT_TS_4 = goog.getMsg("Issues ({$interpolation})", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_3 = MSG_EXTERNAL_5286124415242572625$$SRC_APP_CEPH_BLOCK_MIRRORING_IMAGE_LIST_IMAGE_LIST_COMPONENT_TS_4;
    }
    else {
        i18n_3 = "Issues (" + "\uFFFD0\uFFFD" + ")";
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7278007401355007972$$SRC_APP_CEPH_BLOCK_MIRRORING_IMAGE_LIST_IMAGE_LIST_COMPONENT_TS_6 = goog.getMsg("Syncing ({$interpolation})", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_5 = MSG_EXTERNAL_7278007401355007972$$SRC_APP_CEPH_BLOCK_MIRRORING_IMAGE_LIST_IMAGE_LIST_COMPONENT_TS_6;
    }
    else {
        i18n_5 = "Syncing (" + "\uFFFD0\uFFFD" + ")";
    } let i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3872275816315562585$$SRC_APP_CEPH_BLOCK_MIRRORING_IMAGE_LIST_IMAGE_LIST_COMPONENT_TS_8 = goog.getMsg("Ready ({$interpolation})", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_7 = MSG_EXTERNAL_3872275816315562585$$SRC_APP_CEPH_BLOCK_MIRRORING_IMAGE_LIST_IMAGE_LIST_COMPONENT_TS_8;
    }
    else {
        i18n_7 = "Ready (" + "\uFFFD0\uFFFD" + ")";
    } return [["ngbNav", "", "cdStatefulTab", "image-list", 1, "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", "issues"], ["ngbNavLink", ""], i18n_3, ["ngbNavContent", ""], ["ngbNavItem", "syncing"], i18n_5, ["ngbNavItem", "ready"], i18n_7, [3, "ngbNavOutlet"], ["stateTmpl", ""], ["progressTmpl", ""], ["columnMode", "flex", 3, "data", "columns", "autoReload", "status", "fetchData"], [3, "ngClass"], [4, "ngIf"], ["type", "info", 3, "value", "showValue", 4, "ngIf"], ["type", "info", 3, "value", "showValue"]]; }, template: function ImageListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ImageListComponent_ng_template_5_Template, 1, 4, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ImageListComponent_ng_template_9_Template, 1, 4, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ImageListComponent_ng_template_13_Template, 1, 4, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ImageListComponent_ng_template_15_Template, 3, 4, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ImageListComponent_ng_template_17_Template, 2, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nExp"](ctx.image_error.data.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nApply"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nExp"](ctx.image_syncing.data.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nApply"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nExp"](ctx.image_ready.data.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nApply"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngbNavOutlet", _r0);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNav, _shared_directives_stateful_tab_directive__WEBPACK_IMPORTED_MODULE_2__.StatefulTabDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavContent, _shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_3__.TableComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbProgressbar], pipes: [_mirror_health_color_pipe__WEBPACK_IMPORTED_MODULE_4__.MirrorHealthColorPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6228:
/*!******************************************************************!*\
  !*** ./src/app/ceph/block/mirroring/mirror-health-color.pipe.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MirrorHealthColorPipe": () => (/* binding */ MirrorHealthColorPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);

class MirrorHealthColorPipe {
    transform(value) {
        if (value === 'warning') {
            return 'badge badge-warning';
        }
        else if (value === 'error') {
            return 'badge badge-danger';
        }
        else if (value === 'success') {
            return 'badge badge-success';
        }
        return 'badge badge-info';
    }
}
MirrorHealthColorPipe.ɵfac = function MirrorHealthColorPipe_Factory(t) { return new (t || MirrorHealthColorPipe)(); };
MirrorHealthColorPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "mirrorHealthColor", type: MirrorHealthColorPipe, pure: true });


/***/ }),

/***/ 51361:
/*!**********************************************************!*\
  !*** ./src/app/ceph/block/mirroring/mirroring.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MirroringModule": () => (/* binding */ MirroringModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/shared.module */ 44466);
/* harmony import */ var _bootstrap_create_modal_bootstrap_create_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap-create-modal/bootstrap-create-modal.component */ 62252);
/* harmony import */ var _bootstrap_import_modal_bootstrap_import_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap-import-modal/bootstrap-import-modal.component */ 83739);
/* harmony import */ var _daemon_list_daemon_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./daemon-list/daemon-list.component */ 22464);
/* harmony import */ var _image_list_image_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-list/image-list.component */ 12523);
/* harmony import */ var _mirror_health_color_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mirror-health-color.pipe */ 6228);
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overview/overview.component */ 74783);
/* harmony import */ var _pool_edit_mode_modal_pool_edit_mode_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pool-edit-mode-modal/pool-edit-mode-modal.component */ 10922);
/* harmony import */ var _pool_edit_peer_modal_pool_edit_peer_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pool-edit-peer-modal/pool-edit-peer-modal.component */ 72309);
/* harmony import */ var _pool_list_pool_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pool-list/pool-list.component */ 89871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 18259);















class MirroringModule {
}
MirroringModule.ɵfac = function MirroringModule_Factory(t) { return new (t || MirroringModule)(); };
MirroringModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: MirroringModule });
MirroringModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbNavModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbProgressbarModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTooltipModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](MirroringModule, { declarations: [_bootstrap_create_modal_bootstrap_create_modal_component__WEBPACK_IMPORTED_MODULE_1__.BootstrapCreateModalComponent,
        _bootstrap_import_modal_bootstrap_import_modal_component__WEBPACK_IMPORTED_MODULE_2__.BootstrapImportModalComponent,
        _daemon_list_daemon_list_component__WEBPACK_IMPORTED_MODULE_3__.DaemonListComponent,
        _image_list_image_list_component__WEBPACK_IMPORTED_MODULE_4__.ImageListComponent,
        _overview_overview_component__WEBPACK_IMPORTED_MODULE_6__.OverviewComponent,
        _pool_edit_mode_modal_pool_edit_mode_modal_component__WEBPACK_IMPORTED_MODULE_7__.PoolEditModeModalComponent,
        _pool_edit_peer_modal_pool_edit_peer_modal_component__WEBPACK_IMPORTED_MODULE_8__.PoolEditPeerModalComponent,
        _pool_list_pool_list_component__WEBPACK_IMPORTED_MODULE_9__.PoolListComponent,
        _mirror_health_color_pipe__WEBPACK_IMPORTED_MODULE_5__.MirrorHealthColorPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbNavModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbProgressbarModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTooltipModule], exports: [_overview_overview_component__WEBPACK_IMPORTED_MODULE_6__.OverviewComponent] }); })();


/***/ }),

/***/ 74783:
/*!*********************************************************************!*\
  !*** ./src/app/ceph/block/mirroring/overview/overview.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverviewComponent": () => (/* binding */ OverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 94283);
/* harmony import */ var _app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/api/rbd-mirroring.service */ 2840);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 65862);
/* harmony import */ var _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-group */ 95463);
/* harmony import */ var _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/models/cd-table-selection */ 68774);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 79247);
/* harmony import */ var _app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/services/modal.service */ 63285);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 32337);
/* harmony import */ var _bootstrap_create_modal_bootstrap_create_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../bootstrap-create-modal/bootstrap-create-modal.component */ 62252);
/* harmony import */ var _bootstrap_import_modal_bootstrap_import_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../bootstrap-import-modal/bootstrap-import-modal.component */ 83739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_copy2clipboard_button_copy2clipboard_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/copy2clipboard-button/copy2clipboard-button.component */ 58039);
/* harmony import */ var _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/datatable/table-actions/table-actions.component */ 94928);
/* harmony import */ var _daemon_list_daemon_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../daemon-list/daemon-list.component */ 22464);
/* harmony import */ var _pool_list_pool_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../pool-list/pool-list.component */ 89871);
/* harmony import */ var _image_list_image_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../image-list/image-list.component */ 12523);



























function OverviewComponent_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "i", 19);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", ctx_r1.icons.edit);
} }
function OverviewComponent_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "i", 19);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", ctx_r2.icons.check);
} }
class OverviewComponent {
    constructor(authStorageService, rbdMirroringService, modalService, taskWrapper) {
        this.authStorageService = authStorageService;
        this.rbdMirroringService = rbdMirroringService;
        this.modalService = modalService;
        this.taskWrapper = taskWrapper;
        this.selection = new _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_3__.CdTableSelection();
        this.peersExist = true;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_19__.Subscription();
        this.editing = false;
        this.icons = _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_1__.Icons;
        this.permission = this.authStorageService.getPermissions().rbdMirroring;
        const createBootstrapAction = {
            permission: 'update',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_1__.Icons.upload,
            click: () => this.createBootstrapModal(),
            name: "Create Bootstrap Token",
            canBePrimary: () => true,
            disable: () => false
        };
        const importBootstrapAction = {
            permission: 'update',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_1__.Icons.download,
            click: () => this.importBootstrapModal(),
            name: "Import Bootstrap Token",
            disable: () => false
        };
        this.tableActions = [createBootstrapAction, importBootstrapAction];
    }
    ngOnInit() {
        this.createForm();
        this.subs.add(this.rbdMirroringService.startPolling());
        this.subs.add(this.rbdMirroringService.subscribeSummary((data) => {
            this.status = data.content_data.status;
            this.peersExist = !!data.content_data.pools.find((o) => o['peer_uuids'].length > 0);
        }));
        this.rbdMirroringService.getSiteName().subscribe((response) => {
            this.siteName = response.site_name;
            this.rbdmirroringForm.get('siteName').setValue(this.siteName);
        });
    }
    createForm() {
        this.rbdmirroringForm = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_2__.CdFormGroup({
            siteName: new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControl({ value: '', disabled: true })
        });
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    updateSiteName() {
        if (this.editing) {
            const action = this.taskWrapper.wrapTaskAroundCall({
                task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_4__.FinishedTask('rbd/mirroring/site_name/edit', {}),
                call: this.rbdMirroringService.setSiteName(this.rbdmirroringForm.getValue('siteName'))
            });
            action.subscribe({
                complete: () => {
                    this.rbdMirroringService.refresh();
                }
            });
        }
        this.editing = !this.editing;
    }
    createBootstrapModal() {
        const initialState = {
            siteName: this.siteName
        };
        this.modalRef = this.modalService.show(_bootstrap_create_modal_bootstrap_create_modal_component__WEBPACK_IMPORTED_MODULE_8__.BootstrapCreateModalComponent, initialState);
    }
    importBootstrapModal() {
        const initialState = {
            siteName: this.siteName
        };
        this.modalRef = this.modalService.show(_bootstrap_import_modal_bootstrap_import_modal_component__WEBPACK_IMPORTED_MODULE_9__.BootstrapImportModalComponent, initialState);
    }
}
OverviewComponent.ɵfac = function OverviewComponent_Factory(t) { return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_5__.AuthStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_0__.RbdMirroringService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_7__.TaskWrapperService)); };
OverviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: OverviewComponent, selectors: [["cd-mirroring"]], decls: 31, vars: 10, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8184915422139451927$$SRC_APP_CEPH_BLOCK_MIRRORING_OVERVIEW_OVERVIEW_COMPONENT_TS_1 = goog.getMsg("Site Name");
        i18n_0 = MSG_EXTERNAL_8184915422139451927$$SRC_APP_CEPH_BLOCK_MIRRORING_OVERVIEW_OVERVIEW_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "Site Name";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1419569261746199221$$SRC_APP_CEPH_BLOCK_MIRRORING_OVERVIEW_OVERVIEW_COMPONENT_TS_3 = goog.getMsg("Daemons");
        i18n_2 = MSG_EXTERNAL_1419569261746199221$$SRC_APP_CEPH_BLOCK_MIRRORING_OVERVIEW_OVERVIEW_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "Daemons";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8231861638104479971$$SRC_APP_CEPH_BLOCK_MIRRORING_OVERVIEW_OVERVIEW_COMPONENT_TS_5 = goog.getMsg("Pools");
        i18n_4 = MSG_EXTERNAL_8231861638104479971$$SRC_APP_CEPH_BLOCK_MIRRORING_OVERVIEW_OVERVIEW_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "Pools";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_414887388288176527$$SRC_APP_CEPH_BLOCK_MIRRORING_OVERVIEW_OVERVIEW_COMPONENT_TS_7 = goog.getMsg("Images");
        i18n_6 = MSG_EXTERNAL_414887388288176527$$SRC_APP_CEPH_BLOCK_MIRRORING_OVERVIEW_OVERVIEW_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "Images";
    } return [["name", "rbdmirroringForm", "novalidate", "", 3, "formGroup"], ["formDir", "ngForm"], [1, "row", "mb-3"], [1, "col-md-auto"], ["for", "siteName", 1, "col-form-label"], i18n_0, [1, "col-sm-4", "d-flex"], ["type", "text", "id", "siteName", "name", "siteName", "formControlName", "siteName", 1, "form-control"], ["id", "editSiteName", 1, "btn", "btn-light", 3, "click"], [3, "ngClass", 4, "ngIf"], [3, "source", "byId"], [1, "col"], [1, "table-actions", "float-end", 3, "permission", "selection", "tableActions"], [1, "row"], [1, "col-sm-6"], i18n_2, i18n_4, [1, "col-md-12"], i18n_6, [3, "ngClass"]]; }, template: function OverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "form", 0, 1)(2, "div", 2)(3, "div", 3)(4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function OverviewComponent_Template_button_click_8_listener() { return ctx.updateSiteName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, OverviewComponent_i_9_Template, 1, 1, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, OverviewComponent_i_10_Template, 1, 1, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](11, "cd-copy-2-clipboard-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](13, "cd-table-actions", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "div", 13)(15, "div", 14)(16, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](17, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](19, "cd-mirroring-daemons");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "div", 14)(21, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](22, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](24, "cd-mirroring-pools");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "div", 13)(26, "div", 17)(27, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](28, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](30, "cd-mirroring-images");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx.rbdmirroringForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("disabled", !ctx.editing ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("title", ctx.editing ? "Save" : "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.editing);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.editing);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("source", ctx.siteName)("byId", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("permission", ctx.permission)("selection", ctx.selection)("tableActions", ctx.tableActions);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_10__.CdFormValidationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_11__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_12__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _shared_components_copy2clipboard_button_copy2clipboard_button_component__WEBPACK_IMPORTED_MODULE_13__.Copy2ClipboardButtonComponent, _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_14__.TableActionsComponent, _daemon_list_daemon_list_component__WEBPACK_IMPORTED_MODULE_15__.DaemonListComponent, _pool_list_pool_list_component__WEBPACK_IMPORTED_MODULE_16__.PoolListComponent, _image_list_image_list_component__WEBPACK_IMPORTED_MODULE_17__.ImageListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 10922:
/*!*********************************************************************************************!*\
  !*** ./src/app/ceph/block/mirroring/pool-edit-mode-modal/pool-edit-mode-modal.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoolEditModeModalComponent": () => (/* binding */ PoolEditModeModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/api/rbd-mirroring.service */ 2840);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-group */ 95463);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 32337);
/* harmony import */ var _pool_edit_mode_response_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pool-edit-mode-response.model */ 50909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/form-button-panel/form-button-panel.component */ 30839);























function PoolEditModeModalComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mirrorMode_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", mirrorMode_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](mirrorMode_r3.name);
} }
function PoolEditModeModalComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
class PoolEditModeModalComponent {
    constructor(activeModal, actionLabels, rbdMirroringService, taskWrapper, route, location) {
        this.activeModal = activeModal;
        this.actionLabels = actionLabels;
        this.rbdMirroringService = rbdMirroringService;
        this.taskWrapper = taskWrapper;
        this.route = route;
        this.location = location;
        this.bsConfig = {
            containerClass: 'theme-default'
        };
        this.peerExists = false;
        this.mirrorModes = [
            { id: 'disabled', name: "Disabled" },
            { id: 'pool', name: "Pool" },
            { id: 'image', name: "Image" }
        ];
        this.createForm();
    }
    createForm() {
        this.editModeForm = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_2__.CdFormGroup({
            mirrorMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, this.validateMode.bind(this)]
            })
        });
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.poolName = params.pool_name;
        });
        this.pattern = `${this.poolName}`;
        this.rbdMirroringService.getPool(this.poolName).subscribe((resp) => {
            this.setResponse(resp);
        });
        this.subs = this.rbdMirroringService.subscribeSummary((data) => {
            this.peerExists = false;
            const poolData = data.content_data.pools;
            const pool = poolData.find((o) => this.poolName === o['name']);
            this.peerExists = pool && pool['peer_uuids'].length;
        });
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    validateMode(control) {
        if (control.value === 'disabled' && this.peerExists) {
            return { cannotDisable: { value: control.value } };
        }
        return null;
    }
    setResponse(response) {
        this.editModeForm.get('mirrorMode').setValue(response.mirror_mode);
    }
    update() {
        const request = new _pool_edit_mode_response_model__WEBPACK_IMPORTED_MODULE_5__.PoolEditModeResponseModel();
        request.mirror_mode = this.editModeForm.getValue('mirrorMode');
        const action = this.taskWrapper.wrapTaskAroundCall({
            task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_3__.FinishedTask('rbd/mirroring/pool/edit', {
                pool_name: this.poolName
            }),
            call: this.rbdMirroringService.updatePool(this.poolName, request)
        });
        action.subscribe({
            error: () => this.editModeForm.setErrors({ cdSubmitButton: true }),
            complete: () => {
                this.rbdMirroringService.refresh();
                this.location.back();
            }
        });
    }
}
PoolEditModeModalComponent.ɵfac = function PoolEditModeModalComponent_Factory(t) { return new (t || PoolEditModeModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__.ActionLabelsI18n), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_0__.RbdMirroringService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_4__.TaskWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.Location)); };
PoolEditModeModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: PoolEditModeModalComponent, selectors: [["cd-pool-edit-mode-modal"]], decls: 21, vars: 7, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5225960534299296541$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_MODE_MODAL_POOL_EDIT_MODE_MODAL_COMPONENT_TS_1 = goog.getMsg("Edit pool mirror mode");
        i18n_0 = MSG_EXTERNAL_5225960534299296541$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_MODE_MODAL_POOL_EDIT_MODE_MODAL_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "Edit pool mirror mode";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2857189959449756561$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_MODE_MODAL_POOL_EDIT_MODE_MODAL_COMPONENT_TS_3 = goog.getMsg("To edit the mirror mode for pool\u00A0 {$startTagKbd}{$interpolation}{$closeTagKbd}, select a new mode from the list and click\u00A0 {$startTagKbd}Update{$closeTagKbd}.", { "startTagKbd": "[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]", "interpolation": "\uFFFD0\uFFFD", "closeTagKbd": "[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]" });
        i18n_2 = MSG_EXTERNAL_2857189959449756561$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_MODE_MODAL_POOL_EDIT_MODE_MODAL_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "To edit the mirror mode for pool\xA0 " + "[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]" + "" + "\uFFFD0\uFFFD" + "" + "[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]" + ", select a new mode from the list and click\xA0 " + "[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]" + "Update" + "[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]" + ".";
    } i18n_2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18nPostprocess"](i18n_2); let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1713271461473302108$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_MODE_MODAL_POOL_EDIT_MODE_MODAL_COMPONENT_TS_5 = goog.getMsg("Mode");
        i18n_4 = MSG_EXTERNAL_1713271461473302108$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_MODE_MODAL_POOL_EDIT_MODE_MODAL_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "Mode";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7393113340385537982$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_MODE_MODAL_POOL_EDIT_MODE_MODAL_COMPONENT_TS__7 = goog.getMsg("Peer clusters must be removed prior to disabling mirror.");
        i18n_6 = MSG_EXTERNAL_7393113340385537982$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_MODE_MODAL_POOL_EDIT_MODE_MODAL_COMPONENT_TS__7;
    }
    else {
        i18n_6 = "Peer clusters must be removed prior to disabling mirror.";
    } return [["pageURL", "mirroring", 3, "modalRef"], [1, "modal-title"], i18n_0, [1, "modal-content"], ["name", "editModeForm", "novalidate", "", 1, "form", 3, "formGroup"], ["formDir", "ngForm"], [1, "modal-body"], i18n_2, [1, "form-group"], ["for", "mirrorMode", 1, "col-form-label"], i18n_4, ["id", "mirrorMode", "name", "mirrorMode", "formControlName", "mirrorMode", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "modal-footer"], [3, "form", "submitText", "submitActionEvent"], [3, "value"], [1, "invalid-feedback"], i18n_6]; }, template: function PoolEditModeModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "cd-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "form", 4, 5)(6, "div", 6)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18nStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "kbd")(11, "kbd");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 8)(13, "label", 9)(14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, PoolEditModeModalComponent_option_17_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, PoolEditModeModalComponent_span_18_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 14)(20, "cd-form-button-panel", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("submitActionEvent", function PoolEditModeModalComponent_Template_cd_form_button_panel_submitActionEvent_20_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.editModeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18nExp"](ctx.poolName);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18nApply"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.mirrorModes);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.editModeForm.showError("mirrorMode", _r0, "cannotDisable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("form", ctx.editModeForm)("submitText", ctx.actionLabels.UPDATE);
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_7__.CdFormValidationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_8__.CdFormGroupDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_9__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_10__.FormButtonPanelComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb29sLWVkaXQtbW9kZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 50909:
/*!********************************************************************************************!*\
  !*** ./src/app/ceph/block/mirroring/pool-edit-mode-modal/pool-edit-mode-response.model.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoolEditModeResponseModel": () => (/* binding */ PoolEditModeResponseModel)
/* harmony export */ });
class PoolEditModeResponseModel {
}


/***/ }),

/***/ 72309:
/*!*********************************************************************************************!*\
  !*** ./src/app/ceph/block/mirroring/pool-edit-peer-modal/pool-edit-peer-modal.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoolEditPeerModalComponent": () => (/* binding */ PoolEditPeerModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/api/rbd-mirroring.service */ 2840);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-group */ 95463);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 32337);
/* harmony import */ var _pool_edit_peer_response_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pool-edit-peer-response.model */ 86130);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/directives/autofocus.directive */ 82945);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/form-button-panel/form-button-panel.component */ 30839);






















function PoolEditPeerModalComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](1, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function PoolEditPeerModalComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](1, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function PoolEditPeerModalComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](1, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function PoolEditPeerModalComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](1, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function PoolEditPeerModalComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](1, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function PoolEditPeerModalComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](1, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
class PoolEditPeerModalComponent {
    constructor(activeModal, actionLabels, rbdMirroringService, taskWrapper) {
        this.activeModal = activeModal;
        this.actionLabels = actionLabels;
        this.rbdMirroringService = rbdMirroringService;
        this.taskWrapper = taskWrapper;
        this.bsConfig = {
            containerClass: 'theme-default'
        };
        this.createForm();
    }
    createForm() {
        this.editPeerForm = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_2__.CdFormGroup({
            clusterName: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, this.validateClusterName]
            }),
            clientID: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, this.validateClientID]
            }),
            monAddr: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', {
                validators: [this.validateMonAddr]
            }),
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', {
                validators: [this.validateKey]
            })
        });
    }
    ngOnInit() {
        this.pattern = `${this.poolName}/${this.peerUUID}`;
        if (this.mode === 'edit') {
            this.rbdMirroringService
                .getPeer(this.poolName, this.peerUUID)
                .subscribe((resp) => {
                this.setResponse(resp);
            });
        }
    }
    validateClusterName(control) {
        if (!control.value.match(/^[\w\-_]*$/)) {
            return { invalidClusterName: { value: control.value } };
        }
        return undefined;
    }
    validateClientID(control) {
        if (!control.value.match(/^(?!client\.)[\w\-_.]*$/)) {
            return { invalidClientID: { value: control.value } };
        }
        return undefined;
    }
    validateMonAddr(control) {
        if (!control.value.match(/^[,; ]*([\w.\-_\[\]]+(:[\d]+)?[,; ]*)*$/)) {
            return { invalidMonAddr: { value: control.value } };
        }
        return undefined;
    }
    validateKey(control) {
        try {
            if (control.value === '' || !!atob(control.value)) {
                return null;
            }
        }
        catch (error) { }
        return { invalidKey: { value: control.value } };
    }
    setResponse(response) {
        this.response = response;
        this.editPeerForm.get('clusterName').setValue(response.cluster_name);
        this.editPeerForm.get('clientID').setValue(response.client_id);
        this.editPeerForm.get('monAddr').setValue(response.mon_host);
        this.editPeerForm.get('key').setValue(response.key);
    }
    update() {
        const request = new _pool_edit_peer_response_model__WEBPACK_IMPORTED_MODULE_5__.PoolEditPeerResponseModel();
        request.cluster_name = this.editPeerForm.getValue('clusterName');
        request.client_id = this.editPeerForm.getValue('clientID');
        request.mon_host = this.editPeerForm.getValue('monAddr');
        request.key = this.editPeerForm.getValue('key');
        let action;
        if (this.mode === 'edit') {
            action = this.taskWrapper.wrapTaskAroundCall({
                task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_3__.FinishedTask('rbd/mirroring/peer/edit', {
                    pool_name: this.poolName
                }),
                call: this.rbdMirroringService.updatePeer(this.poolName, this.peerUUID, request)
            });
        }
        else {
            action = this.taskWrapper.wrapTaskAroundCall({
                task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_3__.FinishedTask('rbd/mirroring/peer/add', {
                    pool_name: this.poolName
                }),
                call: this.rbdMirroringService.addPeer(this.poolName, request)
            });
        }
        action.subscribe({
            error: () => this.editPeerForm.setErrors({ cdSubmitButton: true }),
            complete: () => {
                this.rbdMirroringService.refresh();
                this.activeModal.close();
            }
        });
    }
}
PoolEditPeerModalComponent.ɵfac = function PoolEditPeerModalComponent_Factory(t) { return new (t || PoolEditPeerModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__.ActionLabelsI18n), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_0__.RbdMirroringService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_4__.TaskWrapperService)); };
PoolEditPeerModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: PoolEditPeerModalComponent, selectors: [["cd-pool-edit-peer-modal"]], decls: 38, vars: 13, consts: function () { let i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5057118102059517518$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_2 = goog.getMsg("{VAR_SELECT, select, edit {Edit} other {Add}}");
        i18n_1 = MSG_EXTERNAL_5057118102059517518$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_2;
    }
    else {
        i18n_1 = "{VAR_SELECT, select, edit {Edit} other {Add}}";
    } i18n_1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18nPostprocess"](i18n_1, { "VAR_SELECT": "\uFFFD0\uFFFD" }); let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9035365556214271628$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_3 = goog.getMsg("{$icu} pool mirror peer", { "icu": i18n_1 });
        i18n_0 = MSG_EXTERNAL_9035365556214271628$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_3;
    }
    else {
        i18n_0 = "" + i18n_1 + " pool mirror peer";
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5057118102059517518$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_6 = goog.getMsg("{VAR_SELECT, select, edit {Edit} other {Add}}");
        i18n_5 = MSG_EXTERNAL_5057118102059517518$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_6;
    }
    else {
        i18n_5 = "{VAR_SELECT, select, edit {Edit} other {Add}}";
    } i18n_5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18nPostprocess"](i18n_5, { "VAR_SELECT": "\uFFFD0\uFFFD" }); let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1376527463528271233$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_7 = goog.getMsg("{$icu} the pool mirror peer attributes for pool {$startTagKbd}{$interpolation}{$closeTagKbd} and click {$startTagKbd}Submit{$closeTagKbd}.", { "startTagKbd": "[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]", "interpolation": "\uFFFD1\uFFFD", "closeTagKbd": "[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]", "icu": i18n_5 });
        i18n_4 = MSG_EXTERNAL_1376527463528271233$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_7;
    }
    else {
        i18n_4 = "" + i18n_5 + " the pool mirror peer attributes for pool " + "[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]" + "" + "\uFFFD1\uFFFD" + "" + "[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]" + " and click " + "[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]" + "Submit" + "[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]" + ".";
    } i18n_4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18nPostprocess"](i18n_4); let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4676550950822536677$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_9 = goog.getMsg("Cluster Name");
        i18n_8 = MSG_EXTERNAL_4676550950822536677$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_9;
    }
    else {
        i18n_8 = "Cluster Name";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5451140586403689891$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_11 = goog.getMsg("Name...");
        i18n_10 = MSG_EXTERNAL_5451140586403689891$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_11;
    }
    else {
        i18n_10 = "Name...";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8144929320511053770$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_13 = goog.getMsg("CephX ID");
        i18n_12 = MSG_EXTERNAL_8144929320511053770$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_13;
    }
    else {
        i18n_12 = "CephX ID";
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2229794677672311753$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_15 = goog.getMsg("CephX ID...");
        i18n_14 = MSG_EXTERNAL_2229794677672311753$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_15;
    }
    else {
        i18n_14 = "CephX ID...";
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4666686494862824900$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_17 = goog.getMsg("Monitor Addresses");
        i18n_16 = MSG_EXTERNAL_4666686494862824900$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_17;
    }
    else {
        i18n_16 = "Monitor Addresses";
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7458522866753335106$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_19 = goog.getMsg("Comma-delimited addresses...");
        i18n_18 = MSG_EXTERNAL_7458522866753335106$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_19;
    }
    else {
        i18n_18 = "Comma-delimited addresses...";
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6448327539130286076$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_21 = goog.getMsg("CephX Key");
        i18n_20 = MSG_EXTERNAL_6448327539130286076$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_21;
    }
    else {
        i18n_20 = "CephX Key";
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5337220475614495124$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_23 = goog.getMsg("Base64-encoded key...");
        i18n_22 = MSG_EXTERNAL_5337220475614495124$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS_23;
    }
    else {
        i18n_22 = "Base64-encoded key...";
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS__25 = goog.getMsg("This field is required.");
        i18n_24 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS__25;
    }
    else {
        i18n_24 = "This field is required.";
    } let i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7676453378151263120$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS__27 = goog.getMsg("The cluster name is not valid.");
        i18n_26 = MSG_EXTERNAL_7676453378151263120$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS__27;
    }
    else {
        i18n_26 = "The cluster name is not valid.";
    } let i18n_28; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS__29 = goog.getMsg("This field is required.");
        i18n_28 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS__29;
    }
    else {
        i18n_28 = "This field is required.";
    } let i18n_30; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7023083013631288341$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS__31 = goog.getMsg("The CephX ID is not valid.");
        i18n_30 = MSG_EXTERNAL_7023083013631288341$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS__31;
    }
    else {
        i18n_30 = "The CephX ID is not valid.";
    } let i18n_32; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6590812369230617068$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS__33 = goog.getMsg("The monitory address is not valid.");
        i18n_32 = MSG_EXTERNAL_6590812369230617068$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS__33;
    }
    else {
        i18n_32 = "The monitory address is not valid.";
    } let i18n_34; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1941784345057787005$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS__35 = goog.getMsg("CephX key must be base64 encoded.");
        i18n_34 = MSG_EXTERNAL_1941784345057787005$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_EDIT_PEER_MODAL_POOL_EDIT_PEER_MODAL_COMPONENT_TS__35;
    }
    else {
        i18n_34 = "CephX key must be base64 encoded.";
    } return [[3, "modalRef"], [1, "modal-title"], i18n_0, [1, "modal-content"], ["name", "editPeerForm", "novalidate", "", 1, "form", 3, "formGroup"], ["formDir", "ngForm"], [1, "modal-body"], i18n_4, [1, "form-group"], ["for", "clusterName", 1, "col-form-label", "required"], i18n_8, ["type", "text", "placeholder", i18n_10, "id", "clusterName", "name", "clusterName", "formControlName", "clusterName", "autofocus", "", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "clientID", 1, "col-form-label", "required"], i18n_12, ["type", "text", "placeholder", i18n_14, "id", "clientID", "name", "clientID", "formControlName", "clientID", 1, "form-control"], ["for", "monAddr", 1, "col-form-label"], i18n_16, ["type", "text", "placeholder", i18n_18, "id", "monAddr", "name", "monAddr", "formControlName", "monAddr", 1, "form-control"], ["for", "key", 1, "col-form-label"], i18n_20, ["type", "text", "placeholder", i18n_22, "id", "key", "name", "key", "formControlName", "key", 1, "form-control"], [1, "modal-footer"], [3, "form", "submitText", "submitActionEvent"], [1, "invalid-feedback"], i18n_24, i18n_26, i18n_28, i18n_30, i18n_32, i18n_34]; }, template: function PoolEditPeerModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "cd-modal", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "form", 4, 5)(6, "div", 6)(7, "p")(8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18nStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "kbd")(11, "kbd");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 8)(13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, PoolEditPeerModalComponent_span_16_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, PoolEditPeerModalComponent_span_17_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 8)(19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](20, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, PoolEditPeerModalComponent_span_22_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](23, PoolEditPeerModalComponent_span_23_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div", 8)(25, "label", 16)(26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](27, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](29, PoolEditPeerModalComponent_span_29_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "div", 8)(31, "label", 19)(32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](33, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](34, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](35, PoolEditPeerModalComponent_span_35_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "div", 22)(37, "cd-form-button-panel", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("submitActionEvent", function PoolEditPeerModalComponent_Template_cd_form_button_panel_submitActionEvent_37_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18nExp"](ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18nApply"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.editPeerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18nExp"](ctx.mode)(ctx.poolName);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18nApply"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.editPeerForm.showError("clusterName", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.editPeerForm.showError("clusterName", _r0, "invalidClusterName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.editPeerForm.showError("clientID", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.editPeerForm.showError("clientID", _r0, "invalidClientID"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.editPeerForm.showError("monAddr", _r0, "invalidMonAddr"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.editPeerForm.showError("key", _r0, "invalidKey"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("form", ctx.editPeerForm)("submitText", ctx.actionLabels.SUBMIT);
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_7__.CdFormValidationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_8__.CdFormGroupDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_9__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_10__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_11__.AutofocusDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_12__.FormButtonPanelComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb29sLWVkaXQtcGVlci1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 86130:
/*!********************************************************************************************!*\
  !*** ./src/app/ceph/block/mirroring/pool-edit-peer-modal/pool-edit-peer-response.model.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoolEditPeerResponseModel": () => (/* binding */ PoolEditPeerResponseModel)
/* harmony export */ });
class PoolEditPeerResponseModel {
}


/***/ }),

/***/ 89871:
/*!***********************************************************************!*\
  !*** ./src/app/ceph/block/mirroring/pool-list/pool-list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoolListComponent": () => (/* binding */ PoolListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 25160);
/* harmony import */ var _app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/api/rbd-mirroring.service */ 2840);
/* harmony import */ var _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/classes/table-status-view-cache */ 69158);
/* harmony import */ var _app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/components/critical-confirmation-modal/critical-confirmation-modal.component */ 30982);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 65862);
/* harmony import */ var _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/models/cd-table-selection */ 68774);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 79247);
/* harmony import */ var _app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/shared/services/modal.service */ 63285);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 32337);
/* harmony import */ var _pool_edit_peer_modal_pool_edit_peer_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pool-edit-peer-modal/pool-edit-peer-modal.component */ 72309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/datatable/table/table.component */ 35905);
/* harmony import */ var _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/datatable/table-actions/table-actions.component */ 94928);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _mirror_health_color_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../mirror-health-color.pipe */ 6228);

























const _c0 = ["healthTmpl"];
const _c1 = ["localTmpl"];
const _c2 = ["remoteTmpl"];
function PoolListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "mirrorHealthColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r6 = ctx.row;
    const value_r7 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 2, row_r6.health_color));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](value_r7);
} }
function PoolListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function PoolListComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
const BASE_URL = '/block/mirroring';
class PoolListComponent {
    constructor(authStorageService, rbdMirroringService, modalService, taskWrapper, router) {
        this.authStorageService = authStorageService;
        this.rbdMirroringService = rbdMirroringService;
        this.modalService = modalService;
        this.taskWrapper = taskWrapper;
        this.router = router;
        this.selection = new _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_5__.CdTableSelection();
        this.tableStatus = new _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_1__.TableStatusViewCache();
        this.data = [];
        this.permission = this.authStorageService.getPermissions().rbdMirroring;
        const editModeAction = {
            permission: 'update',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_4__.Icons.edit,
            click: () => this.editModeModal(),
            name: "Edit Mode",
            canBePrimary: () => true
        };
        const addPeerAction = {
            permission: 'create',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_4__.Icons.add,
            name: "Add Peer",
            click: () => this.editPeersModal('add'),
            disable: () => !this.selection.first() || this.selection.first().mirror_mode === 'disabled',
            visible: () => !this.getPeerUUID(),
            canBePrimary: () => false
        };
        const editPeerAction = {
            permission: 'update',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_4__.Icons.exchange,
            name: "Edit Peer",
            click: () => this.editPeersModal('edit'),
            visible: () => !!this.getPeerUUID()
        };
        const deletePeerAction = {
            permission: 'delete',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_4__.Icons.destroy,
            name: "Delete Peer",
            click: () => this.deletePeersModal(),
            visible: () => !!this.getPeerUUID()
        };
        this.tableActions = [editModeAction, addPeerAction, editPeerAction, deletePeerAction];
    }
    ngOnInit() {
        this.columns = [
            { prop: 'name', name: "Name", flexGrow: 2 },
            { prop: 'mirror_mode', name: "Mode", flexGrow: 2 },
            { prop: 'leader_id', name: "Leader", flexGrow: 2 },
            {
                prop: 'image_local_count',
                name: "# Local",
                headerTemplate: this.localTmpl,
                flexGrow: 2
            },
            {
                prop: 'image_remote_count',
                name: "# Remote",
                headerTemplate: this.remoteTmpl,
                flexGrow: 2
            },
            {
                prop: 'health',
                name: "Health",
                cellTemplate: this.healthTmpl,
                flexGrow: 1
            }
        ];
        this.subs = this.rbdMirroringService.subscribeSummary((data) => {
            this.data = data.content_data.pools;
            this.tableStatus = new _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_1__.TableStatusViewCache(data.status);
        });
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    refresh() {
        this.rbdMirroringService.refresh();
    }
    editModeModal() {
        this.router.navigate([
            BASE_URL,
            { outlets: { modal: [_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__.URLVerbs.EDIT, this.selection.first().name] } }
        ]);
    }
    editPeersModal(mode) {
        const initialState = {
            poolName: this.selection.first().name,
            mode: mode
        };
        if (mode === 'edit') {
            initialState['peerUUID'] = this.getPeerUUID();
        }
        this.modalRef = this.modalService.show(_pool_edit_peer_modal_pool_edit_peer_modal_component__WEBPACK_IMPORTED_MODULE_10__.PoolEditPeerModalComponent, initialState);
    }
    deletePeersModal() {
        const poolName = this.selection.first().name;
        const peerUUID = this.getPeerUUID();
        this.modalRef = this.modalService.show(_app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_2__.CriticalConfirmationModalComponent, {
            itemDescription: "mirror peer",
            itemNames: [`${poolName} (${peerUUID})`],
            submitActionObservable: () => new rxjs__WEBPACK_IMPORTED_MODULE_15__.Observable((observer) => {
                this.taskWrapper
                    .wrapTaskAroundCall({
                    task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_6__.FinishedTask('rbd/mirroring/peer/delete', {
                        pool_name: poolName
                    }),
                    call: this.rbdMirroringService.deletePeer(poolName, peerUUID)
                })
                    .subscribe({
                    error: (resp) => observer.error(resp),
                    complete: () => {
                        this.rbdMirroringService.refresh();
                        observer.complete();
                    }
                });
            })
        });
    }
    getPeerUUID() {
        const selection = this.selection.first();
        const pool = this.data.find((o) => selection && selection.name === o['name']);
        if (pool && pool['peer_uuids']) {
            return pool['peer_uuids'][0];
        }
        return undefined;
    }
    updateSelection(selection) {
        this.selection = selection;
    }
}
PoolListComponent.ɵfac = function PoolListComponent_Factory(t) { return new (t || PoolListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_7__.AuthStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_0__.RbdMirroringService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_9__.TaskWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router)); };
PoolListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: PoolListComponent, selectors: [["cd-mirroring-pools"]], viewQuery: function PoolListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c2, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.healthTmpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.localTmpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.remoteTmpl = _t.first);
    } }, decls: 9, vars: 7, consts: function () { let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1072031601182811536$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_LIST_POOL_LIST_COMPONENT_TS__4 = goog.getMsg("Local image count");
        i18n_3 = MSG_EXTERNAL_1072031601182811536$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_LIST_POOL_LIST_COMPONENT_TS__4;
    }
    else {
        i18n_3 = "Local image count";
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8517494870558773093$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_LIST_POOL_LIST_COMPONENT_TS__6 = goog.getMsg("# Local");
        i18n_5 = MSG_EXTERNAL_8517494870558773093$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_LIST_POOL_LIST_COMPONENT_TS__6;
    }
    else {
        i18n_5 = "# Local";
    } let i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6244870042586497251$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_LIST_POOL_LIST_COMPONENT_TS__8 = goog.getMsg("Remote image count");
        i18n_7 = MSG_EXTERNAL_6244870042586497251$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_LIST_POOL_LIST_COMPONENT_TS__8;
    }
    else {
        i18n_7 = "Remote image count";
    } let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4953753699491987394$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_LIST_POOL_LIST_COMPONENT_TS__10 = goog.getMsg("# Remote");
        i18n_9 = MSG_EXTERNAL_4953753699491987394$$SRC_APP_CEPH_BLOCK_MIRRORING_POOL_LIST_POOL_LIST_COMPONENT_TS__10;
    }
    else {
        i18n_9 = "# Remote";
    } return [["columnMode", "flex", "identifier", "name", "forceIdentifier", "true", "selectionType", "single", 3, "data", "columns", "autoReload", "status", "fetchData", "updateSelection"], [1, "table-actions", 3, "permission", "selection", "tableActions"], ["healthTmpl", ""], ["localTmpl", ""], ["remoteTmpl", ""], ["name", "modal"], [3, "ngClass"], ["ngbTooltip", i18n_3], i18n_5, ["ngbTooltip", i18n_7], i18n_9]; }, template: function PoolListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "cd-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("fetchData", function PoolListComponent_Template_cd_table_fetchData_0_listener() { return ctx.refresh(); })("updateSelection", function PoolListComponent_Template_cd_table_updateSelection_0_listener($event) { return ctx.updateSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "cd-table-actions", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PoolListComponent_ng_template_2_Template, 3, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, PoolListComponent_ng_template_4_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, PoolListComponent_ng_template_6_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "router-outlet", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", ctx.data)("columns", ctx.columns)("autoReload", -1)("status", ctx.tableStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("permission", ctx.permission)("selection", ctx.selection)("tableActions", ctx.tableActions);
    } }, directives: [_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_11__.TableComponent, _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_12__.TableActionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbTooltip, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterOutlet], pipes: [_mirror_health_color_pipe__WEBPACK_IMPORTED_MODULE_13__.MirrorHealthColorPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb29sLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 44509:
/*!***************************************************************************************!*\
  !*** ./src/app/ceph/block/rbd-configuration-form/rbd-configuration-form.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdConfigurationFormComponent": () => (/* binding */ RbdConfigurationFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 13413);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 65862);
/* harmony import */ var _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-group */ 95463);
/* harmony import */ var _app_shared_models_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/models/configuration */ 30633);
/* harmony import */ var _app_shared_services_formatter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/services/formatter.service */ 28211);
/* harmony import */ var _app_shared_services_rbd_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/services/rbd-configuration.service */ 34089);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/helper/helper.component */ 18372);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _shared_directives_milliseconds_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/directives/milliseconds.directive */ 7743);
/* harmony import */ var _shared_directives_dimless_binary_per_second_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/directives/dimless-binary-per-second.directive */ 38163);
/* harmony import */ var _shared_directives_iops_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/directives/iops.directive */ 38156);






















function RbdConfigurationFormComponent_div_4_div_6_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("id", option_r4.name)("name", option_r4.name)("formControlName", option_r4.name)("ngDataReady", ctx_r5.ngDataReady);
} }
function RbdConfigurationFormComponent_div_4_div_6_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("id", option_r4.name)("name", option_r4.name)("formControlName", option_r4.name)("ngDataReady", ctx_r6.ngDataReady);
} }
function RbdConfigurationFormComponent_div_4_div_6_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("id", option_r4.name)("name", option_r4.name)("formControlName", option_r4.name)("ngDataReady", ctx_r7.ngDataReady);
} }
function RbdConfigurationFormComponent_div_4_div_6_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](1, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
const _c6 = function (a0) { return { "active": a0 }; };
const _c7 = function (a0) { return [a0]; };
function RbdConfigurationFormComponent_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 10)(1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "cd-helper");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div")(6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](7, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, RbdConfigurationFormComponent_div_4_div_6_ng_container_8_Template, 2, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, RbdConfigurationFormComponent_div_4_div_6_ng_container_9_Template, 2, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, RbdConfigurationFormComponent_div_4_div_6_ng_container_10_Template, 2, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RbdConfigurationFormComponent_div_4_div_6_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13); const option_r4 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r12.reset(option_r4.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, RbdConfigurationFormComponent_div_4_div_6_span_13_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const section_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("for", option_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](option_r4.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](option_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMapInterpolate1"]("cd-col-form-input ", section_r2.heading, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitch", option_r4.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx_r3.configurationType.milliseconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx_r3.configurationType.bps);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx_r3.configurationType.iops);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](13, _c6, ctx_r3.isDisabled(option_r4.name)));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](15, _c7, ctx_r3.icons.erase));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r3.form.showError("configuration." + option_r4.name, _r0, "min"));
} }
function RbdConfigurationFormComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 4)(1, "h4", 5)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RbdConfigurationFormComponent_div_4_Template_span_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16); const section_r2 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r15.toggleSectionVisibility(section_r2.class); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, RbdConfigurationFormComponent_div_4_div_6_Template, 14, 17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const section_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", section_r2.heading, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", !ctx_r1.sectionVisibility[section_r2.class] ? ctx_r1.icons.addCircle : ctx_r1.icons.minusCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"](section_r2.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", !ctx_r1.sectionVisibility[section_r2.class]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", section_r2.options);
} }
class RbdConfigurationFormComponent {
    constructor(formatterService, rbdConfigurationService) {
        this.formatterService = formatterService;
        this.rbdConfigurationService = rbdConfigurationService;
        this.initializeData = new rxjs__WEBPACK_IMPORTED_MODULE_15__.ReplaySubject(1);
        this.changes = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
        this.icons = _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_1__.Icons;
        this.ngDataReady = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
        this.configurationType = _app_shared_models_configuration__WEBPACK_IMPORTED_MODULE_3__.RbdConfigurationType;
        this.sectionVisibility = {};
    }
    ngOnInit() {
        const configFormGroup = this.createConfigurationFormGroup();
        this.form.addControl('configuration', configFormGroup);
        // Listen to changes and emit the values to the parent component
        configFormGroup.valueChanges.subscribe(() => {
            this.changes.emit(this.getDirtyValues.bind(this));
        });
        if (this.initializeData) {
            this.initializeData.subscribe((data) => {
                this.initialData = data.initialData;
                const dataType = data.sourceType;
                this.rbdConfigurationService.getWritableOptionFields().forEach((option) => {
                    const optionData = data.initialData
                        .filter((entry) => entry.name === option.name)
                        .pop();
                    if (optionData && optionData['source'] === dataType) {
                        this.form.get(`configuration.${option.name}`).setValue(optionData['value']);
                    }
                });
                this.ngDataReady.emit();
            });
        }
        this.rbdConfigurationService
            .getWritableSections()
            .forEach((section) => (this.sectionVisibility[section.class] = false));
    }
    getDirtyValues(includeLocalValues = false, localFieldType) {
        if (includeLocalValues && !localFieldType) {
            const msg = 'ProgrammingError: If local values shall be included, a proper localFieldType argument has to be provided, too';
            throw new Error(msg);
        }
        const result = {};
        this.rbdConfigurationService.getWritableOptionFields().forEach((config) => {
            const control = this.form.get('configuration').get(config.name);
            const dirty = control.dirty;
            if (this.initialData && this.initialData[config.name] === control.value) {
                return; // Skip controls with initial data loaded
            }
            if (dirty || (includeLocalValues && control['source'] === localFieldType)) {
                if (control.value === null) {
                    result[config.name] = control.value;
                }
                else if (config.type === _app_shared_models_configuration__WEBPACK_IMPORTED_MODULE_3__.RbdConfigurationType.bps) {
                    result[config.name] = this.formatterService.toBytes(control.value);
                }
                else if (config.type === _app_shared_models_configuration__WEBPACK_IMPORTED_MODULE_3__.RbdConfigurationType.milliseconds) {
                    result[config.name] = this.formatterService.toMilliseconds(control.value);
                }
                else if (config.type === _app_shared_models_configuration__WEBPACK_IMPORTED_MODULE_3__.RbdConfigurationType.iops) {
                    result[config.name] = this.formatterService.toIops(control.value);
                }
                else {
                    result[config.name] = control.value;
                }
            }
        });
        return result;
    }
    /**
     * Dynamically create form controls.
     */
    createConfigurationFormGroup() {
        const configFormGroup = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_2__.CdFormGroup({});
        this.rbdConfigurationService.getWritableOptionFields().forEach((c) => {
            let control;
            if (c.type === _app_shared_models_configuration__WEBPACK_IMPORTED_MODULE_3__.RbdConfigurationType.milliseconds ||
                c.type === _app_shared_models_configuration__WEBPACK_IMPORTED_MODULE_3__.RbdConfigurationType.iops ||
                c.type === _app_shared_models_configuration__WEBPACK_IMPORTED_MODULE_3__.RbdConfigurationType.bps) {
                let initialValue = 0;
                lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.initialData, (configList) => {
                    if (configList['name'] === c.name) {
                        initialValue = configList['value'];
                    }
                });
                control = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(initialValue, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.min(0));
            }
            else {
                throw new Error(`Type ${c.type} is unknown, you may need to add it to RbdConfiguration class`);
            }
            configFormGroup.addControl(c.name, control);
        });
        return configFormGroup;
    }
    /**
     * Reset the value. The inherited value will be used instead.
     */
    reset(optionName) {
        const formControl = this.form.get('configuration').get(optionName);
        if (formControl.disabled) {
            formControl.setValue(formControl['previousValue'] || 0);
            formControl.enable();
            if (!formControl['previousValue']) {
                formControl.markAsPristine();
            }
        }
        else {
            formControl['previousValue'] = formControl.value;
            formControl.setValue(null);
            formControl.markAsDirty();
            formControl.disable();
        }
    }
    isDisabled(optionName) {
        return this.form.get('configuration').get(optionName).disabled;
    }
    toggleSectionVisibility(className) {
        this.sectionVisibility[className] = !this.sectionVisibility[className];
    }
}
RbdConfigurationFormComponent.ɵfac = function RbdConfigurationFormComponent_Factory(t) { return new (t || RbdConfigurationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_shared_services_formatter_service__WEBPACK_IMPORTED_MODULE_4__.FormatterService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_app_shared_services_rbd_configuration_service__WEBPACK_IMPORTED_MODULE_5__.RbdConfigurationService)); };
RbdConfigurationFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: RbdConfigurationFormComponent, selectors: [["cd-rbd-configuration-form"]], inputs: { form: "form", initializeData: "initializeData" }, outputs: { changes: "changes" }, decls: 5, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1662293395030598962$$SRC_APP_CEPH_BLOCK_RBD_CONFIGURATION_FORM_RBD_CONFIGURATION_FORM_COMPONENT_TS_1 = goog.getMsg("RBD Configuration");
        i18n_0 = MSG_EXTERNAL_1662293395030598962$$SRC_APP_CEPH_BLOCK_RBD_CONFIGURATION_FORM_RBD_CONFIGURATION_FORM_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "RBD Configuration";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8204275934016772861$$SRC_APP_CEPH_BLOCK_RBD_CONFIGURATION_FORM_RBD_CONFIGURATION_FORM_COMPONENT_TS___3 = goog.getMsg("Remove the local configuration value. The parent configuration value will be inherited and used instead.");
        i18n_2 = MSG_EXTERNAL_8204275934016772861$$SRC_APP_CEPH_BLOCK_RBD_CONFIGURATION_FORM_RBD_CONFIGURATION_FORM_COMPONENT_TS___3;
    }
    else {
        i18n_2 = "Remove the local configuration value. The parent configuration value will be inherited and used instead.";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2451923413219991477$$SRC_APP_CEPH_BLOCK_RBD_CONFIGURATION_FORM_RBD_CONFIGURATION_FORM_COMPONENT_TS____5 = goog.getMsg("The minimum value is 0");
        i18n_4 = MSG_EXTERNAL_2451923413219991477$$SRC_APP_CEPH_BLOCK_RBD_CONFIGURATION_FORM_RBD_CONFIGURATION_FORM_COMPONENT_TS____5;
    }
    else {
        i18n_4 = "The minimum value is 0";
    } return [[3, "formGroup"], ["cfgFormGroup", ""], i18n_0, ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "cd-header"], [1, "collapsible", 3, "click"], ["aria-hidden", "true", 3, "ngClass"], [3, "hidden"], ["class", "form-group row", 4, "ngFor", "ngForOf"], [1, "form-group", "row"], [1, "cd-col-form-label", 3, "for"], [1, "input-group"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["type", "button", "data-toggle", "button", "title", i18n_2, 1, "btn", "btn-light", 3, "ngClass", "click"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "cdMilliseconds", "", 1, "form-control", 3, "id", "name", "formControlName", "ngDataReady"], ["type", "text", "defaultUnit", "b", "cdDimlessBinaryPerSecond", "", 1, "form-control", 3, "id", "name", "formControlName", "ngDataReady"], ["type", "text", "cdIops", "", 1, "form-control", 3, "id", "name", "formControlName", "ngDataReady"], [1, "invalid-feedback"], i18n_4]; }, template: function RbdConfigurationFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "fieldset", 0, 1)(2, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, RbdConfigurationFormComponent_div_4_Template, 7, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.form.get("configuration"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.rbdConfigurationService.sections);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_6__.CdFormValidationDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_7__.CdFormGroupDirective, _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_8__.HelperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgSwitchCase, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_9__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_10__.CdFormControlDirective, _shared_directives_milliseconds_directive__WEBPACK_IMPORTED_MODULE_11__.MillisecondsDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _shared_directives_dimless_binary_per_second_directive__WEBPACK_IMPORTED_MODULE_12__.DimlessBinaryPerSecondDirective, _shared_directives_iops_directive__WEBPACK_IMPORTED_MODULE_13__.IopsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf], styles: [".collapsible[_ngcontent-%COMP%] {\n  cursor: pointer;\n  user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJiZC1jb25maWd1cmF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJyYmQtY29uZmlndXJhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbGxhcHNpYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 56467:
/*!***************************************************************************************!*\
  !*** ./src/app/ceph/block/rbd-configuration-list/rbd-configuration-list.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdConfigurationListComponent": () => (/* binding */ RbdConfigurationListComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/datatable/table/table.component */ 35905);
/* harmony import */ var _app_shared_models_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/models/configuration */ 30633);
/* harmony import */ var _app_shared_pipes_rbd_configuration_source_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/pipes/rbd-configuration-source.pipe */ 40083);
/* harmony import */ var _app_shared_services_formatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/services/formatter.service */ 28211);
/* harmony import */ var _app_shared_services_rbd_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/services/rbd-configuration.service */ 34089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_pipes_dimless_binary_per_second_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pipes/dimless-binary-per-second.pipe */ 20044);
/* harmony import */ var _shared_pipes_milliseconds_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pipes/milliseconds.pipe */ 48537);
/* harmony import */ var _shared_pipes_iops_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/pipes/iops.pipe */ 21766);














const _c0 = ["configurationSourceTpl"];
const _c1 = ["configurationValueTpl"];
const _c2 = ["poolConfTable"];
function RbdConfigurationListComponent_ng_template_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RbdConfigurationListComponent_ng_template_2_strong_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RbdConfigurationListComponent_ng_template_2_strong_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RbdConfigurationListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, RbdConfigurationListComponent_ng_template_2_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, RbdConfigurationListComponent_ng_template_2_strong_2_Template, 2, 0, "strong", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, RbdConfigurationListComponent_ng_template_2_strong_3_Template, 2, 0, "strong", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r5 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", value_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "global");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "pool");
} }
function RbdConfigurationListComponent_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "dimlessBinaryPerSecond");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, value_r10));
} }
function RbdConfigurationListComponent_ng_template_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "milliseconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, value_r10));
} }
function RbdConfigurationListComponent_ng_template_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "iops");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, value_r10));
} }
function RbdConfigurationListComponent_ng_template_4_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](value_r10);
} }
function RbdConfigurationListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, RbdConfigurationListComponent_ng_template_4_span_1_Template, 3, 3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, RbdConfigurationListComponent_ng_template_4_span_2_Template, 3, 3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, RbdConfigurationListComponent_ng_template_4_span_3_Template, 3, 3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, RbdConfigurationListComponent_ng_template_4_span_4_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = ctx.row;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", row_r9.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", ctx_r4.typeField.bps);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", ctx_r4.typeField.milliseconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", ctx_r4.typeField.iops);
} }
class RbdConfigurationListComponent {
    constructor(formatterService, rbdConfigurationService) {
        this.formatterService = formatterService;
        this.rbdConfigurationService = rbdConfigurationService;
        this.sourceField = _app_shared_models_configuration__WEBPACK_IMPORTED_MODULE_1__.RbdConfigurationSourceField;
        this.typeField = _app_shared_models_configuration__WEBPACK_IMPORTED_MODULE_1__.RbdConfigurationType;
    }
    ngOnInit() {
        this.poolConfigurationColumns = [
            { prop: 'displayName', name: "Name" },
            { prop: 'description', name: "Description" },
            { prop: 'name', name: "Key" },
            {
                prop: 'source',
                name: "Source",
                cellTemplate: this.configurationSourceTpl,
                pipe: new _app_shared_pipes_rbd_configuration_source_pipe__WEBPACK_IMPORTED_MODULE_2__.RbdConfigurationSourcePipe()
            },
            { prop: 'value', name: "Value", cellTemplate: this.configurationValueTpl }
        ];
    }
    ngOnChanges() {
        if (!this.data) {
            return;
        }
        // Filter settings out which are not listed in RbdConfigurationService
        this.data = this.data.filter((row) => this.rbdConfigurationService
            .getOptionFields()
            .map((o) => o.name)
            .includes(row.name));
    }
}
RbdConfigurationListComponent.ɵfac = function RbdConfigurationListComponent_Factory(t) { return new (t || RbdConfigurationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_shared_services_formatter_service__WEBPACK_IMPORTED_MODULE_3__.FormatterService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_shared_services_rbd_configuration_service__WEBPACK_IMPORTED_MODULE_4__.RbdConfigurationService)); };
RbdConfigurationListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: RbdConfigurationListComponent, selectors: [["cd-rbd-configuration-table"]], viewQuery: function RbdConfigurationListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c2, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.configurationSourceTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.configurationValueTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.poolConfTable = _t.first);
    } }, inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 2, consts: function () { let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3437679369074503203$$SRC_APP_CEPH_BLOCK_RBD_CONFIGURATION_LIST_RBD_CONFIGURATION_LIST_COMPONENT_TS___4 = goog.getMsg("Global");
        i18n_3 = MSG_EXTERNAL_3437679369074503203$$SRC_APP_CEPH_BLOCK_RBD_CONFIGURATION_LIST_RBD_CONFIGURATION_LIST_COMPONENT_TS___4;
    }
    else {
        i18n_3 = "Global";
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3012906865384504293$$SRC_APP_CEPH_BLOCK_RBD_CONFIGURATION_LIST_RBD_CONFIGURATION_LIST_COMPONENT_TS___6 = goog.getMsg("Image");
        i18n_5 = MSG_EXTERNAL_3012906865384504293$$SRC_APP_CEPH_BLOCK_RBD_CONFIGURATION_LIST_RBD_CONFIGURATION_LIST_COMPONENT_TS___6;
    }
    else {
        i18n_5 = "Image";
    } let i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7101197021456818771$$SRC_APP_CEPH_BLOCK_RBD_CONFIGURATION_LIST_RBD_CONFIGURATION_LIST_COMPONENT_TS___8 = goog.getMsg("Pool");
        i18n_7 = MSG_EXTERNAL_7101197021456818771$$SRC_APP_CEPH_BLOCK_RBD_CONFIGURATION_LIST_RBD_CONFIGURATION_LIST_COMPONENT_TS___8;
    }
    else {
        i18n_7 = "Pool";
    } return [["identifier", "name", 3, "data", "columns"], ["poolConfTable", ""], ["configurationSourceTpl", ""], ["configurationValueTpl", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], i18n_3, i18n_5, i18n_7, [4, "ngSwitchDefault"]]; }, template: function RbdConfigurationListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "cd-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, RbdConfigurationListComponent_ng_template_2_Template, 4, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, RbdConfigurationListComponent_ng_template_4_Template, 5, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx.data)("columns", ctx.poolConfigurationColumns);
    } }, directives: [_app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_0__.TableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitchDefault], pipes: [_shared_pipes_dimless_binary_per_second_pipe__WEBPACK_IMPORTED_MODULE_5__.DimlessBinaryPerSecondPipe, _shared_pipes_milliseconds_pipe__WEBPACK_IMPORTED_MODULE_6__.MillisecondsPipe, _shared_pipes_iops_pipe__WEBPACK_IMPORTED_MODULE_7__.IopsPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYmQtY29uZmlndXJhdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 65838:
/*!*****************************************************************!*\
  !*** ./src/app/ceph/block/rbd-details/rbd-details.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdDetailsComponent": () => (/* binding */ RbdDetailsComponent)
/* harmony export */ });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _rbd_form_rbd_form_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rbd-form/rbd-form.model */ 89694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_directives_stateful_tab_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/stateful-tab.directive */ 59376);
/* harmony import */ var _rbd_snapshot_list_rbd_snapshot_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rbd-snapshot-list/rbd-snapshot-list.component */ 14484);
/* harmony import */ var _rbd_configuration_list_rbd_configuration_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rbd-configuration-list/rbd-configuration-list.component */ 56467);
/* harmony import */ var _shared_components_grafana_grafana_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/grafana/grafana.component */ 76317);
/* harmony import */ var _shared_components_alert_panel_alert_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/alert-panel/alert-panel.component */ 34501);
/* harmony import */ var _shared_pipes_empty_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pipes/empty.pipe */ 41039);
/* harmony import */ var _shared_pipes_cd_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/pipes/cd-date.pipe */ 96102);
/* harmony import */ var _shared_pipes_dimless_binary_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/pipes/dimless-binary.pipe */ 47557);
/* harmony import */ var _shared_pipes_dimless_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/pipes/dimless.pipe */ 66369);















const _c0 = ["poolConfigurationSourceTpl"];
function RbdDetailsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18nStart"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function RbdDetailsComponent_ng_container_2_ng_template_6_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span")(1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const feature_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](feature_r18);
} }
function RbdDetailsComponent_ng_container_2_ng_template_6_span_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span")(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](2, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbTooltip", _r0);
} }
function RbdDetailsComponent_ng_container_2_ng_template_6_span_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "dimlessBinary");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r13.selection.disk_usage), " ");
} }
function RbdDetailsComponent_ng_container_2_ng_template_6_span_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span")(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](2, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbTooltip", _r0);
} }
function RbdDetailsComponent_ng_container_2_ng_template_6_span_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "dimlessBinary");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r15.selection.total_disk_usage), " ");
} }
function RbdDetailsComponent_ng_container_2_ng_template_6_span_74_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("/", ctx_r19.selection.parent.pool_namespace, "");
} }
function RbdDetailsComponent_ng_container_2_ng_template_6_span_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, RbdDetailsComponent_ng_container_2_ng_template_6_span_74_span_2_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r16.selection.parent.pool_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r16.selection.parent.pool_namespace);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("/", ctx_r16.selection.parent.image_name, "@", ctx_r16.selection.parent.snap_name, "");
} }
function RbdDetailsComponent_ng_container_2_ng_template_6_span_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function RbdDetailsComponent_ng_container_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "table", 17)(1, "tbody")(2, "tr")(3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](4, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "tr")(8, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](9, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "tr")(13, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](14, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "tr")(19, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](20, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "cdDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "tr")(25, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](26, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](29, "dimlessBinary");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "tr")(31, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](32, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](35, "dimless");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "tr")(37, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](38, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](41, "dimlessBinary");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "tr")(43, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](44, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, RbdDetailsComponent_ng_container_2_ng_template_6_span_46_Template, 3, 1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "tr")(48, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](49, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](51, RbdDetailsComponent_ng_container_2_ng_template_6_span_51_Template, 3, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](52, RbdDetailsComponent_ng_container_2_ng_template_6_span_52_Template, 3, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "tr")(54, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](55, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, RbdDetailsComponent_ng_container_2_ng_template_6_span_57_Template, 3, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](58, RbdDetailsComponent_ng_container_2_ng_template_6_span_58_Template, 3, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "tr")(60, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](61, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](64, "dimlessBinary");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "tr")(66, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](67, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "tr")(71, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](72, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](74, RbdDetailsComponent_ng_container_2_ng_template_6_span_74_Template, 4, 4, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](75, RbdDetailsComponent_ng_container_2_ng_template_6_span_75_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "tr")(77, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](78, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "tr")(82, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](83, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "tr")(87, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](88, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r7.selection.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r7.selection.pool_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 19, ctx_r7.selection.data_pool));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](23, 21, ctx_r7.selection.timestamp));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](29, 23, ctx_r7.selection.size));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](35, 25, ctx_r7.selection.num_objs));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](41, 27, ctx_r7.selection.obj_size));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r7.selection.features_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r7.selection.features_name == null ? null : ctx_r7.selection.features_name.indexOf("fast-diff")) === -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r7.selection.features_name == null ? null : ctx_r7.selection.features_name.indexOf("fast-diff")) !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r7.selection.features_name == null ? null : ctx_r7.selection.features_name.indexOf("fast-diff")) === -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r7.selection.features_name == null ? null : ctx_r7.selection.features_name.indexOf("fast-diff")) !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](64, 29, ctx_r7.selection.stripe_unit));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r7.selection.stripe_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.selection.parent);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r7.selection.parent);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r7.selection.block_name_prefix);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r7.selection.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r7.selection.image_format);
} }
function RbdDetailsComponent_ng_container_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "cd-rbd-snapshot-list", 42);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("snapshots", ctx_r8.selection.snapshots)("featuresName", ctx_r8.selection.features_name)("poolName", ctx_r8.selection.pool_name)("primary", ctx_r8.selection.primary)("namespace", ctx_r8.selection.namespace)("mirroring", ctx_r8.selection.mirror_mode)("rbdName", ctx_r8.selection.name);
} }
function RbdDetailsComponent_ng_container_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "cd-rbd-configuration-table", 43);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("data", ctx_r9.selection["configuration"]);
} }
function RbdDetailsComponent_ng_container_2_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "cd-grafana", 44);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("grafanaPath", ctx_r10.rbdDashboardUrl)("type", "metrics");
} }
function RbdDetailsComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "nav", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](3, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](5, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, RbdDetailsComponent_ng_container_2_ng_template_6_Template, 91, 31, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](7, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](9, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, RbdDetailsComponent_ng_container_2_ng_template_10_Template, 1, 7, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](13, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, RbdDetailsComponent_ng_container_2_ng_template_14_Template, 1, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](15, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](17, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, RbdDetailsComponent_ng_container_2_ng_template_18_Template, 1, 2, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbNavOutlet", _r6);
} }
function RbdDetailsComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "cd-alert-panel", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](2, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function RbdDetailsComponent_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "strong", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](2, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function RbdDetailsComponent_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](1, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function RbdDetailsComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, RbdDetailsComponent_ng_template_4_ng_container_0_Template, 3, 0, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, RbdDetailsComponent_ng_template_4_ng_template_1_Template, 2, 0, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const value_r21 = ctx.value;
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", +value_r21)("ngIfElse", _r23);
} }
class RbdDetailsComponent {
    ngOnChanges() {
        if (this.selection) {
            this.rbdDashboardUrl = `rbd-details?var-Pool=${this.selection['pool_name']}&var-Image=${this.selection['name']}`;
        }
    }
}
RbdDetailsComponent.ɵfac = function RbdDetailsComponent_Factory(t) { return new (t || RbdDetailsComponent)(); };
RbdDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: RbdDetailsComponent, selectors: [["cd-rbd-details"]], viewQuery: function RbdDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNav, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.poolConfigurationSourceTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.nav = _t.first);
    } }, inputs: { selection: "selection", images: "images" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 2, consts: function () { let i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6020859631108226316$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS__2 = goog.getMsg("Only available for RBD images with {$startTagStrong}fast-diff{$closeTagStrong} enabled", { "startTagStrong": "\uFFFD#2\uFFFD", "closeTagStrong": "\uFFFD/#2\uFFFD" });
        i18n_1 = MSG_EXTERNAL_6020859631108226316$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS__2;
    }
    else {
        i18n_1 = "Only available for RBD images with " + "\uFFFD#2\uFFFD" + "fast-diff" + "\uFFFD/#2\uFFFD" + " enabled";
    } let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5028777105388019087$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS__4 = goog.getMsg("Details");
        i18n_3 = MSG_EXTERNAL_5028777105388019087$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS__4;
    }
    else {
        i18n_3 = "Details";
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_633791246656795624$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS__6 = goog.getMsg("Snapshots");
        i18n_5 = MSG_EXTERNAL_633791246656795624$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS__6;
    }
    else {
        i18n_5 = "Snapshots";
    } let i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3008420115644088420$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS__8 = goog.getMsg("Configuration");
        i18n_7 = MSG_EXTERNAL_3008420115644088420$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS__8;
    }
    else {
        i18n_7 = "Configuration";
    } let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1322586333669103999$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS__10 = goog.getMsg("Performance");
        i18n_9 = MSG_EXTERNAL_1322586333669103999$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS__10;
    }
    else {
        i18n_9 = "Performance";
    } let i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___12 = goog.getMsg("Name");
        i18n_11 = MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___12;
    }
    else {
        i18n_11 = "Name";
    } let i18n_13; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7101197021456818771$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___14 = goog.getMsg("Pool");
        i18n_13 = MSG_EXTERNAL_7101197021456818771$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___14;
    }
    else {
        i18n_13 = "Pool";
    } let i18n_15; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6723409555790866872$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___16 = goog.getMsg("Data Pool");
        i18n_15 = MSG_EXTERNAL_6723409555790866872$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___16;
    }
    else {
        i18n_15 = "Data Pool";
    } let i18n_17; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4207916966377787111$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___18 = goog.getMsg("Created");
        i18n_17 = MSG_EXTERNAL_4207916966377787111$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___18;
    }
    else {
        i18n_17 = "Created";
    } let i18n_19; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_45739481977493163$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___20 = goog.getMsg("Size");
        i18n_19 = MSG_EXTERNAL_45739481977493163$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___20;
    }
    else {
        i18n_19 = "Size";
    } let i18n_21; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7531602241051125940$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___22 = goog.getMsg("Objects");
        i18n_21 = MSG_EXTERNAL_7531602241051125940$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___22;
    }
    else {
        i18n_21 = "Objects";
    } let i18n_23; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1194977199378511591$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___24 = goog.getMsg("Object size");
        i18n_23 = MSG_EXTERNAL_1194977199378511591$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___24;
    }
    else {
        i18n_23 = "Object size";
    } let i18n_25; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6599364831830861985$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___26 = goog.getMsg("Features");
        i18n_25 = MSG_EXTERNAL_6599364831830861985$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___26;
    }
    else {
        i18n_25 = "Features";
    } let i18n_27; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_178418048502923560$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___28 = goog.getMsg("Provisioned");
        i18n_27 = MSG_EXTERNAL_178418048502923560$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___28;
    }
    else {
        i18n_27 = "Provisioned";
    } let i18n_29; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7638291694671392137$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___30 = goog.getMsg("Total provisioned");
        i18n_29 = MSG_EXTERNAL_7638291694671392137$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___30;
    }
    else {
        i18n_29 = "Total provisioned";
    } let i18n_31; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1800097309964848809$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___32 = goog.getMsg("Striping unit");
        i18n_31 = MSG_EXTERNAL_1800097309964848809$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___32;
    }
    else {
        i18n_31 = "Striping unit";
    } let i18n_33; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_687809034918250111$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___34 = goog.getMsg("Striping count");
        i18n_33 = MSG_EXTERNAL_687809034918250111$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___34;
    }
    else {
        i18n_33 = "Striping count";
    } let i18n_35; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8621797738551294959$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___36 = goog.getMsg("Parent");
        i18n_35 = MSG_EXTERNAL_8621797738551294959$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___36;
    }
    else {
        i18n_35 = "Parent";
    } let i18n_37; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4007496790154046990$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___38 = goog.getMsg("Block name prefix");
        i18n_37 = MSG_EXTERNAL_4007496790154046990$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___38;
    }
    else {
        i18n_37 = "Block name prefix";
    } let i18n_39; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_220550782947016929$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___40 = goog.getMsg("Order");
        i18n_39 = MSG_EXTERNAL_220550782947016929$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___40;
    }
    else {
        i18n_39 = "Order";
    } let i18n_41; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3794302445743744096$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___42 = goog.getMsg("Format Version");
        i18n_41 = MSG_EXTERNAL_3794302445743744096$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___42;
    }
    else {
        i18n_41 = "Format Version";
    } let i18n_43; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6811901802533648897$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS____44 = goog.getMsg("N/A");
        i18n_43 = MSG_EXTERNAL_6811901802533648897$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS____44;
    }
    else {
        i18n_43 = "N/A";
    } let i18n_45; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6811901802533648897$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS____46 = goog.getMsg("N/A");
        i18n_45 = MSG_EXTERNAL_6811901802533648897$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS____46;
    }
    else {
        i18n_45 = "N/A";
    } let i18n_47; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2739698594663437434$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___48 = goog.getMsg("RBD details");
        i18n_47 = MSG_EXTERNAL_2739698594663437434$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___48;
    }
    else {
        i18n_47 = "RBD details";
    } let i18n_49; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6907626059040112763$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS__50 = goog.getMsg("Information can not be displayed for RBD in status 'Removing'.");
        i18n_49 = MSG_EXTERNAL_6907626059040112763$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS__50;
    }
    else {
        i18n_49 = "Information can not be displayed for RBD in status 'Removing'.";
    } let i18n_51; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1742222667041334221$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___52 = goog.getMsg("This setting overrides the global value");
        i18n_51 = MSG_EXTERNAL_1742222667041334221$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___52;
    }
    else {
        i18n_51 = "This setting overrides the global value";
    } let i18n_53; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3012906865384504293$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___54 = goog.getMsg("Image");
        i18n_53 = MSG_EXTERNAL_3012906865384504293$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___54;
    }
    else {
        i18n_53 = "Image";
    } let i18n_55; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6985012125929874856$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___56 = goog.getMsg("This is the global value. No value for this option has been set for this image.");
        i18n_55 = MSG_EXTERNAL_6985012125929874856$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___56;
    }
    else {
        i18n_55 = "This is the global value. No value for this option has been set for this image.";
    } let i18n_57; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3437679369074503203$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___58 = goog.getMsg("Global");
        i18n_57 = MSG_EXTERNAL_3437679369074503203$$SRC_APP_CEPH_BLOCK_RBD_DETAILS_RBD_DETAILS_COMPONENT_TS___58;
    }
    else {
        i18n_57 = "Global";
    } return [["usageNotAvailableTooltipTpl", ""], [4, "ngIf"], ["poolConfigurationSourceTpl", ""], i18n_1, ["ngbNav", "", "cdStatefulTab", "rbd-details", 1, "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", "details"], ["ngbNavLink", ""], i18n_3, ["ngbNavContent", ""], ["ngbNavItem", "snapshots"], i18n_5, ["ngbNavItem", "configuration"], i18n_7, ["ngbNavItem", "performance"], i18n_9, [3, "ngbNavOutlet"], [1, "table", "table-striped", "table-bordered"], [1, "bold", "w-25"], i18n_11, [1, "w-75"], [1, "bold"], i18n_13, i18n_15, i18n_17, i18n_19, i18n_21, i18n_23, i18n_25, [4, "ngFor", "ngForOf"], i18n_27, i18n_29, i18n_31, i18n_33, i18n_35, i18n_37, i18n_39, i18n_41, [1, "badge", "badge-dark", "me-2"], ["placement", "top", 1, "form-text", "text-muted", 3, "ngbTooltip"], i18n_43, i18n_45, [3, "snapshots", "featuresName", "poolName", "primary", "namespace", "mirroring", "rbdName"], [3, "data"], ["title", i18n_47, "uid", "YhCYGcuZz", "grafanaStyle", "one", 3, "grafanaPath", "type"], ["type", "warning"], i18n_49, [4, "ngIf", "ngIfElse"], ["global", ""], ["ngbTooltip", i18n_51], i18n_53, ["ngbTooltip", i18n_55], i18n_57]; }, template: function RbdDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, RbdDetailsComponent_ng_template_0_Template, 3, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, RbdDetailsComponent_ng_container_2_Template, 20, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, RbdDetailsComponent_ng_container_3_Template, 3, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, RbdDetailsComponent_ng_template_4_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selection && ctx.selection.source !== "REMOVING");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selection && ctx.selection.source === "REMOVING");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNav, _shared_directives_stateful_tab_directive__WEBPACK_IMPORTED_MODULE_1__.StatefulTabDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavContent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTooltip, _rbd_snapshot_list_rbd_snapshot_list_component__WEBPACK_IMPORTED_MODULE_2__.RbdSnapshotListComponent, _rbd_configuration_list_rbd_configuration_list_component__WEBPACK_IMPORTED_MODULE_3__.RbdConfigurationListComponent, _shared_components_grafana_grafana_component__WEBPACK_IMPORTED_MODULE_4__.GrafanaComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavOutlet, _shared_components_alert_panel_alert_panel_component__WEBPACK_IMPORTED_MODULE_5__.AlertPanelComponent], pipes: [_shared_pipes_empty_pipe__WEBPACK_IMPORTED_MODULE_6__.EmptyPipe, _shared_pipes_cd_date_pipe__WEBPACK_IMPORTED_MODULE_7__.CdDatePipe, _shared_pipes_dimless_binary_pipe__WEBPACK_IMPORTED_MODULE_8__.DimlessBinaryPipe, _shared_pipes_dimless_pipe__WEBPACK_IMPORTED_MODULE_9__.DimlessPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYmQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 92710:
/*!*********************************************************************!*\
  !*** ./src/app/ceph/block/rbd-form/rbd-form-clone-request.model.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdFormCloneRequestModel": () => (/* binding */ RbdFormCloneRequestModel)
/* harmony export */ });
class RbdFormCloneRequestModel {
    constructor() {
        this.features = [];
    }
}


/***/ }),

/***/ 69731:
/*!********************************************************************!*\
  !*** ./src/app/ceph/block/rbd-form/rbd-form-copy-request.model.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdFormCopyRequestModel": () => (/* binding */ RbdFormCopyRequestModel)
/* harmony export */ });
class RbdFormCopyRequestModel {
    constructor() {
        this.features = [];
    }
}


/***/ }),

/***/ 95256:
/*!**********************************************************************!*\
  !*** ./src/app/ceph/block/rbd-form/rbd-form-create-request.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdFormCreateRequestModel": () => (/* binding */ RbdFormCreateRequestModel)
/* harmony export */ });
/* harmony import */ var _rbd_form_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rbd-form.model */ 89694);

class RbdFormCreateRequestModel extends _rbd_form_model__WEBPACK_IMPORTED_MODULE_0__.RbdFormModel {
    constructor() {
        super(...arguments);
        this.features = [];
    }
}


/***/ }),

/***/ 91646:
/*!********************************************************************!*\
  !*** ./src/app/ceph/block/rbd-form/rbd-form-edit-request.model.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdFormEditRequestModel": () => (/* binding */ RbdFormEditRequestModel)
/* harmony export */ });
class RbdFormEditRequestModel {
    constructor() {
        this.features = [];
        this.remove_scheduling = false;
    }
}


/***/ }),

/***/ 22864:
/*!***********************************************************!*\
  !*** ./src/app/ceph/block/rbd-form/rbd-form-mode.enum.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdFormMode": () => (/* binding */ RbdFormMode)
/* harmony export */ });
var RbdFormMode;
(function (RbdFormMode) {
    RbdFormMode["editing"] = "editing";
    RbdFormMode["cloning"] = "cloning";
    RbdFormMode["copying"] = "copying";
})(RbdFormMode || (RbdFormMode = {}));


/***/ }),

/***/ 58103:
/*!***********************************************************!*\
  !*** ./src/app/ceph/block/rbd-form/rbd-form.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdFormComponent": () => (/* binding */ RbdFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs */ 13413);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! rxjs */ 42720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! rxjs/operators */ 20088);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var _app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/pool.service */ 80842);
/* harmony import */ var _app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/api/rbd-mirroring.service */ 2840);
/* harmony import */ var _app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/api/rbd.service */ 23170);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 65862);
/* harmony import */ var _app_shared_forms_cd_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/forms/cd-form */ 26624);
/* harmony import */ var _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-group */ 95463);
/* harmony import */ var _app_shared_models_configuration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/shared/models/configuration */ 30633);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/shared/models/image-spec */ 19358);
/* harmony import */ var _app_shared_pipes_dimless_binary_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/shared/pipes/dimless-binary.pipe */ 47557);
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 79247);
/* harmony import */ var _app_shared_services_formatter_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/shared/services/formatter.service */ 28211);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 32337);
/* harmony import */ var _rbd_list_rbd_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../rbd-list/rbd-model */ 23272);
/* harmony import */ var _rbd_form_clone_request_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rbd-form-clone-request.model */ 92710);
/* harmony import */ var _rbd_form_copy_request_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rbd-form-copy-request.model */ 69731);
/* harmony import */ var _rbd_form_create_request_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rbd-form-create-request.model */ 95256);
/* harmony import */ var _rbd_form_edit_request_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rbd-form-edit-request.model */ 91646);
/* harmony import */ var _rbd_form_mode_enum__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rbd-form-mode.enum */ 22864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _shared_directives_form_loading_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/directives/form-loading.directive */ 63622);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/directives/autofocus.directive */ 82945);
/* harmony import */ var _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../shared/components/helper/helper.component */ 18372);
/* harmony import */ var _shared_directives_dimless_binary_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../shared/directives/dimless-binary.directive */ 17932);
/* harmony import */ var _rbd_configuration_form_rbd_configuration_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../rbd-configuration-form/rbd-configuration-form.component */ 44509);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 30839);
/* harmony import */ var _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../shared/pipes/upper-first.pipe */ 10545);
















































function RbdFormComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "div", 9)(1, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](2, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](5, "input", 60)(6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipeBind1"](3, 1, ctx_r2.action));
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18nApply"](2);
} }
function RbdFormComponent_div_0_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](2, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} }
function RbdFormComponent_div_0_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](2, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} }
function RbdFormComponent_div_0_input_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](0, "input", 64);
} }
function RbdFormComponent_div_0_select_22_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](1, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngValue", null);
} }
function RbdFormComponent_div_0_select_22_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](1, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngValue", null);
} }
function RbdFormComponent_div_0_select_22_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](1, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngValue", null);
} }
function RbdFormComponent_div_0_select_22_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pool_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("value", pool_r29.pool_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtextInterpolate"](pool_r29.pool_name);
} }
function RbdFormComponent_div_0_select_22_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵlistener"]("change", function RbdFormComponent_div_0_select_22_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](2); return ctx_r30.setPoolMirrorMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](1, RbdFormComponent_div_0_select_22_option_1_Template, 2, 1, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](2, RbdFormComponent_div_0_select_22_option_2_Template, 2, 1, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](3, RbdFormComponent_div_0_select_22_option_3_Template, 2, 1, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](4, RbdFormComponent_div_0_select_22_option_4_Template, 2, 2, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r6.pools === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r6.pools !== null && ctx_r6.pools.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r6.pools !== null && ctx_r6.pools.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngForOf", ctx_r6.pools);
} }
function RbdFormComponent_div_0_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](1, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} }
const _c40 = function (a0, a1) { return [a0, a1]; };
function RbdFormComponent_div_0_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "div", 9)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](2, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpureFunction2"](1, _c40, ctx_r8.icons.spinner, ctx_r8.icons.spin));
} }
function RbdFormComponent_div_0_div_25_input_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](0, "input", 76);
} }
function RbdFormComponent_div_0_div_25_select_5_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](1, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngValue", null);
} }
function RbdFormComponent_div_0_div_25_select_5_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](1, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngValue", null);
} }
function RbdFormComponent_div_0_div_25_select_5_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](1, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngValue", null);
} }
function RbdFormComponent_div_0_div_25_select_5_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    const namespace_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("value", namespace_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtextInterpolate"](namespace_r38);
} }
function RbdFormComponent_div_0_div_25_select_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "select", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](1, RbdFormComponent_div_0_div_25_select_5_option_1_Template, 2, 1, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](2, RbdFormComponent_div_0_div_25_select_5_option_2_Template, 2, 1, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](3, RbdFormComponent_div_0_div_25_select_5_option_3_Template, 2, 1, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](4, RbdFormComponent_div_0_div_25_select_5_option_4_Template, 2, 2, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r33.pools === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r33.pools !== null && ctx_r33.pools.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r33.pools !== null && ctx_r33.pools.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngForOf", ctx_r33.namespaces);
} }
function RbdFormComponent_div_0_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "div", 9)(1, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](2, " Namespace ");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](4, RbdFormComponent_div_0_div_25_input_4_Template, 1, 0, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](5, RbdFormComponent_div_0_div_25_select_5_Template, 5, 4, "select", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r9.mode === "editing" || !ctx_r9.poolPermission.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r9.mode !== "editing" && ctx_r9.poolPermission.read);
} }
function RbdFormComponent_div_0_cd_helper_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "cd-helper")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](2, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
} }
function RbdFormComponent_div_0_div_33_input_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](0, "input", 87);
} }
function RbdFormComponent_div_0_div_33_select_7_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](1, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngValue", null);
} }
function RbdFormComponent_div_0_div_33_select_7_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](1, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngValue", null);
} }
function RbdFormComponent_div_0_div_33_select_7_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](1, "-- Select a data pool -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngValue", null);
} }
function RbdFormComponent_div_0_div_33_select_7_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataPool_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("value", dataPool_r46.pool_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtextInterpolate"](dataPool_r46.pool_name);
} }
function RbdFormComponent_div_0_div_33_select_7_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "select", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵlistener"]("change", function RbdFormComponent_div_0_div_33_select_7_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](3); return ctx_r47.onDataPoolChange($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](1, RbdFormComponent_div_0_div_33_select_7_option_1_Template, 2, 1, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](2, RbdFormComponent_div_0_div_33_select_7_option_2_Template, 2, 1, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](3, RbdFormComponent_div_0_div_33_select_7_option_3_Template, 2, 1, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](4, RbdFormComponent_div_0_div_33_select_7_option_4_Template, 2, 2, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r40.dataPools === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r40.dataPools !== null && ctx_r40.dataPools.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r40.dataPools !== null && ctx_r40.dataPools.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngForOf", ctx_r40.dataPools);
} }
function RbdFormComponent_div_0_div_33_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](1, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} }
const _c59 = function (a0) { return { "required": a0 }; };
function RbdFormComponent_div_0_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "div", 9)(1, "label", 82)(2, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](3, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](4, "cd-helper", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](6, RbdFormComponent_div_0_div_33_input_6_Template, 1, 0, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](7, RbdFormComponent_div_0_div_33_select_7_Template, 5, 4, "select", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](8, RbdFormComponent_div_0_div_33_span_8_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵreference"](2);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpureFunction1"](4, _c59, ctx_r11.mode !== "editing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r11.mode === "editing" || !ctx_r11.poolPermission.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r11.mode !== "editing" && ctx_r11.poolPermission.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r11.rbdForm.showError("dataPool", _r1, "required"));
} }
function RbdFormComponent_div_0_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](1, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} }
function RbdFormComponent_div_0_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](1, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} }
function RbdFormComponent_div_0_div_45_cd_helper_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](0, "cd-helper", 97);
} if (rf & 2) {
    const feature_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpropertyInterpolate"]("html", feature_r49.helperHtml);
} }
function RbdFormComponent_div_0_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](1, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](2, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](4, RbdFormComponent_div_0_div_45_cd_helper_4_Template, 1, 1, "cd-helper", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpropertyInterpolate"]("id", feature_r49.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpropertyInterpolate"]("name", feature_r49.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpropertyInterpolate"]("formControlName", feature_r49.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpropertyInterpolate"]("for", feature_r49.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtextInterpolate"](feature_r49.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", feature_r49.helperHtml);
} }
const _c66 = function (a1) { return ["edit", a1]; };
const _c67 = function (a0) { return { modal: a0 }; };
const _c68 = function (a0) { return { outlets: a0 }; };
const _c69 = function (a1) { return ["/block/mirroring", a1]; };
function RbdFormComponent_div_0_cd_helper_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "cd-helper")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18nStart"](2, 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](3, "b")(4, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpureFunction1"](7, _c69, _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpureFunction1"](5, _c68, _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpureFunction1"](3, _c67, _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpureFunction1"](1, _c66, ctx_r15.currentPoolName)))));
} }
function RbdFormComponent_div_0_div_53_div_1_cd_helper_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "cd-helper")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18nStart"](2, 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](3, "b")(4, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpureFunction1"](7, _c69, _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpureFunction1"](5, _c68, _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpureFunction1"](3, _c67, _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpureFunction1"](1, _c66, ctx_r54.currentPoolName)))));
} }
function RbdFormComponent_div_0_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "div", 101)(1, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵlistener"]("change", function RbdFormComponent_div_0_div_53_div_1_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](3); return ctx_r55.setExclusiveLock(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](2, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](5, RbdFormComponent_div_0_div_53_div_1_cd_helper_5_Template, 5, 9, "cd-helper", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r53 = ctx.$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("id", option_r53)("value", option_r53);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵattribute"]("disabled", ctx_r52.poolMirrorMode === "pool" && option_r53 === "snapshot" ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("for", option_r53);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipeBind1"](4, 6, option_r53));
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r52.poolMirrorMode === "pool" && option_r53 === "snapshot");
} }
function RbdFormComponent_div_0_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](1, RbdFormComponent_div_0_div_53_div_1_Template, 6, 8, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngForOf", ctx_r16.mirroringOptions);
} }
function RbdFormComponent_div_0_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "div", 9)(1, "label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18nStart"](2, 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](3, "cd-helper", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](5, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵattribute"]("disabled", ctx_r17.peerConfigured === false ? true : null);
} }
function RbdFormComponent_div_0_a_57_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "a", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵlistener"]("click", function RbdFormComponent_div_0_a_57_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](2); ctx_r57.advancedEnabled = true; return false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](1, 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} }
function RbdFormComponent_div_0_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    const objectSize_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("value", objectSize_r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtextInterpolate"](objectSize_r59);
} }
function RbdFormComponent_div_0_option_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} if (rf & 2) {
    const objectSize_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("value", objectSize_r60);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtextInterpolate"](objectSize_r60);
} }
function RbdFormComponent_div_0_span_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](1, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} }
function RbdFormComponent_div_0_span_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](1, 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} }
function RbdFormComponent_div_0_span_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](1, 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} }
function RbdFormComponent_div_0_span_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](1, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
} }
function RbdFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](0, "div", 1)(1, "form", 2, 3)(3, "div", 4)(4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipe"](7, "upperFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](9, RbdFormComponent_div_0_div_9_Template, 7, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](10, "div", 9)(11, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](12, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](14, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](15, RbdFormComponent_div_0_span_15_Template, 3, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](16, RbdFormComponent_div_0_span_16_Template, 3, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵlistener"]("change", function RbdFormComponent_div_0_Template_div_change_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](); return ctx_r61.onPoolChange($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](18, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](19, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](21, RbdFormComponent_div_0_input_21_Template, 1, 0, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](22, RbdFormComponent_div_0_select_22_Template, 5, 4, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](23, RbdFormComponent_div_0_span_23_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](24, RbdFormComponent_div_0_div_24_Template, 3, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](25, RbdFormComponent_div_0_div_25_Template, 6, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](26, "div", 9)(27, "div", 20)(28, "div", 21)(29, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵlistener"]("change", function RbdFormComponent_div_0_Template_input_change_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](); return ctx_r63.onUseDataPoolChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](30, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](31, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](32, RbdFormComponent_div_0_cd_helper_32_Template, 3, 0, "cd-helper", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](33, RbdFormComponent_div_0_div_33_Template, 9, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](34, "div", 9)(35, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](36, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](37, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](38, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](39, RbdFormComponent_div_0_span_39_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](40, RbdFormComponent_div_0_span_40_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](41, "div", 29)(42, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](43, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](44, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](45, RbdFormComponent_div_0_div_45_Template, 5, 6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](46, "div", 9)(47, "div", 20)(48, "div", 21)(49, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵlistener"]("change", function RbdFormComponent_div_0_Template_input_change_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵrestoreView"](_r62); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](); return ctx_r64.setMirrorMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](50, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtext"](51, "Mirroring");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](52, RbdFormComponent_div_0_cd_helper_52_Template, 5, 9, "cd-helper", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](53, RbdFormComponent_div_0_div_53_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](54, RbdFormComponent_div_0_div_54_Template, 6, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](55, "div", 35)(56, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](57, RbdFormComponent_div_0_a_57_Template, 2, 0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](58, "div", 38)(59, "legend", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](60, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](61, "div", 41)(62, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](63, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](64, "div", 9)(65, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18nStart"](66, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](67, "cd-helper");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](68, "div", 12)(69, "select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](70, RbdFormComponent_div_0_option_70_Template, 2, 2, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](71, "div", 9)(72, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18nStart"](73, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](74, "cd-helper");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](75, "div", 12)(76, "select", 49)(77, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18n"](78, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](79, RbdFormComponent_div_0_option_79_Template, 2, 2, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](80, RbdFormComponent_div_0_span_80_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](81, RbdFormComponent_div_0_span_81_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](82, "div", 9)(83, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18nStart"](84, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](85, "cd-helper");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](86, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelement"](87, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](88, RbdFormComponent_div_0_span_88_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](89, RbdFormComponent_div_0_span_89_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](90, "cd-rbd-configuration-form", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵlistener"]("changes", function RbdFormComponent_div_0_Template_cd_rbd_configuration_form_changes_90_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵrestoreView"](_r62); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](); return ctx_r65.getDirtyConfigurationValues = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementStart"](91, "div", 56)(92, "cd-form-button-panel", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵlistener"]("submitActionEvent", function RbdFormComponent_div_0_Template_cd_form_button_panel_submitActionEvent_92_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵrestoreView"](_r62); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"](); return ctx_r66.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipe"](93, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipe"](94, "upperFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("formGroup", ctx_r0.rbdForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipeBind1"](6, 35, ctx_r0.action))(_angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipeBind1"](7, 37, ctx_r0.resource));
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵi18nApply"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r0.rbdForm.getValue("parent"));
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r0.rbdForm.showError("name", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r0.rbdForm.showError("name", _r1, "pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpureFunction1"](43, _c59, ctx_r0.mode !== "editing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r0.mode === "editing" || !ctx_r0.poolPermission.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r0.mode !== "editing" && ctx_r0.poolPermission.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r0.rbdForm.showError("pool", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r0.mode !== "editing" && ctx_r0.rbdForm.getValue("pool") && ctx_r0.namespaces === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r0.mode === "editing" && ctx_r0.rbdForm.getValue("namespace") || ctx_r0.mode !== "editing" && (ctx_r0.namespaces && ctx_r0.namespaces.length > 0 || !ctx_r0.poolPermission.read));
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r0.allDataPools.length <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r0.rbdForm.getValue("useDataPool"));
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r0.rbdForm.showError("size", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r0.rbdForm.showError("size", _r1, "invalidSizeObject"));
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngForOf", ctx_r0.featuresList);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r0.mirroring === false && ctx_r0.currentPoolName);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r0.mirroring);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r0.rbdForm.getValue("mirroringMode") === "snapshot" && ctx_r0.mirroring);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", !ctx_r0.advancedEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("hidden", !ctx_r0.advancedEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngForOf", ctx_r0.objectSizes);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpureFunction1"](45, _c59, ctx_r0.rbdForm.getValue("stripingCount")));
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngForOf", ctx_r0.objectSizes);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r0.rbdForm.showError("stripingUnit", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r0.rbdForm.showError("stripingUnit", _r1, "invalidStripingUnit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpureFunction1"](47, _c59, ctx_r0.rbdForm.getValue("stripingUnit")));
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r0.rbdForm.showError("stripingCount", _r1, "required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("ngIf", ctx_r0.rbdForm.showError("stripingCount", _r1, "min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("form", ctx_r0.rbdForm)("initializeData", ctx_r0.initializeConfigData);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("form", _r1)("submitText", _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipeBind1"](93, 39, ctx_r0.action) + " " + _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵpipeBind1"](94, 41, ctx_r0.resource));
} }
class ExternalData {
}
class RbdFormComponent extends _app_shared_forms_cd_form__WEBPACK_IMPORTED_MODULE_6__.CdForm {
    constructor(authStorageService, route, poolService, rbdService, formatter, taskWrapper, dimlessBinaryPipe, actionLabels, router, rbdMirroringService) {
        super();
        this.authStorageService = authStorageService;
        this.route = route;
        this.poolService = poolService;
        this.rbdService = rbdService;
        this.formatter = formatter;
        this.taskWrapper = taskWrapper;
        this.dimlessBinaryPipe = dimlessBinaryPipe;
        this.actionLabels = actionLabels;
        this.router = router;
        this.rbdMirroringService = rbdMirroringService;
        this.namespaces = [];
        this.namespacesByPoolCache = {};
        this.pools = null;
        this.allPools = null;
        this.dataPools = null;
        this.allDataPools = [];
        this.featuresList = [];
        this.initializeConfigData = new rxjs__WEBPACK_IMPORTED_MODULE_33__.ReplaySubject(1);
        this.peerConfigured = false;
        this.advancedEnabled = false;
        this.rbdFormMode = _rbd_form_mode_enum__WEBPACK_IMPORTED_MODULE_20__.RbdFormMode;
        this.defaultObjectSize = '4 MiB';
        this.mirroringOptions = ['journal', 'snapshot'];
        this.mirroring = false;
        this.currentPoolName = '';
        this.objectSizes = [
            '4 KiB',
            '8 KiB',
            '16 KiB',
            '32 KiB',
            '64 KiB',
            '128 KiB',
            '256 KiB',
            '512 KiB',
            '1 MiB',
            '2 MiB',
            '4 MiB',
            '8 MiB',
            '16 MiB',
            '32 MiB'
        ];
        this.defaultStripingUnit = '4 MiB';
        this.defaultStripingCount = 1;
        this.rbdImage = new rxjs__WEBPACK_IMPORTED_MODULE_33__.ReplaySubject(1);
        this.icons = _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_5__.Icons;
        this.routerUrl = this.router.url;
        this.poolPermission = this.authStorageService.getPermissions().pool;
        this.resource = "RBD";
        this.features = {
            'deep-flatten': {
                desc: "Deep flatten",
                requires: null,
                allowEnable: false,
                allowDisable: true
            },
            layering: {
                desc: "Layering",
                requires: null,
                allowEnable: false,
                allowDisable: false
            },
            'exclusive-lock': {
                desc: "Exclusive lock",
                requires: null,
                allowEnable: true,
                allowDisable: true
            },
            'object-map': {
                desc: "Object map (requires exclusive-lock)",
                requires: 'exclusive-lock',
                allowEnable: true,
                allowDisable: true,
                initDisabled: true
            },
            'fast-diff': {
                desc: "Fast diff (interlocked with object-map)",
                requires: 'object-map',
                allowEnable: true,
                allowDisable: true,
                interlockedWith: 'object-map',
                initDisabled: true
            }
        };
        this.featuresList = this.objToArray(this.features);
        this.createForm();
    }
    objToArray(obj) {
        return lodash__WEBPACK_IMPORTED_MODULE_0___default().map(obj, (o, key) => Object.assign(o, { key: key }));
    }
    createForm() {
        this.rbdForm = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_7__.CdFormGroup({
            parent: new _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormControl(''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_34__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.Validators.pattern(/^[^@/]+?$/)]
            }),
            pool: new _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormControl(null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_34__.Validators.required]
            }),
            namespace: new _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormControl(null),
            useDataPool: new _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormControl(false),
            dataPool: new _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormControl(null),
            size: new _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormControl(null, {
                updateOn: 'blur'
            }),
            obj_size: new _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormControl(this.defaultObjectSize),
            features: new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_7__.CdFormGroup(this.featuresList.reduce((acc, e) => {
                acc[e.key] = new _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormControl({ value: false, disabled: !!e.initDisabled });
                return acc;
            }, {})),
            mirroring: new _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormControl(''),
            schedule: new _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_34__.Validators.pattern(/^([0-9]+)d|([0-9]+)h|([0-9]+)m$/)] // check schedule interval to be in format - 1d or 1h or 1m
            }),
            mirroringMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormControl(''),
            stripingUnit: new _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormControl(this.defaultStripingUnit),
            stripingCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormControl(this.defaultStripingCount, {
                updateOn: 'blur'
            })
        }, this.validateRbdForm(this.formatter));
    }
    disableForEdit() {
        this.rbdForm.get('parent').disable();
        this.rbdForm.get('pool').disable();
        this.rbdForm.get('namespace').disable();
        this.rbdForm.get('useDataPool').disable();
        this.rbdForm.get('dataPool').disable();
        this.rbdForm.get('obj_size').disable();
        this.rbdForm.get('stripingUnit').disable();
        this.rbdForm.get('stripingCount').disable();
        /* RBD Image Format v1 */
        this.rbdImage.subscribe((image) => {
            if (image.image_format === _rbd_list_rbd_model__WEBPACK_IMPORTED_MODULE_15__.RBDImageFormat.V1) {
                this.rbdForm.get('deep-flatten').disable();
                this.rbdForm.get('layering').disable();
                this.rbdForm.get('exclusive-lock').disable();
            }
        });
    }
    disableForClone() {
        this.rbdForm.get('parent').disable();
        this.rbdForm.get('size').disable();
    }
    disableForCopy() {
        this.rbdForm.get('parent').disable();
        this.rbdForm.get('size').disable();
    }
    ngOnInit() {
        this.prepareFormForAction();
        this.gatherNeededData().subscribe(this.handleExternalData.bind(this));
    }
    setExclusiveLock() {
        if (this.mirroring && this.rbdForm.get('mirroringMode').value === 'journal') {
            this.rbdForm.get('exclusive-lock').setValue(true);
            this.rbdForm.get('exclusive-lock').disable();
        }
        else {
            this.rbdForm.get('exclusive-lock').enable();
            if (this.poolMirrorMode === 'pool') {
                this.rbdForm.get('mirroringMode').setValue(this.mirroringOptions[0]);
            }
        }
    }
    setMirrorMode() {
        this.mirroring = !this.mirroring;
        this.setExclusiveLock();
        this.checkPeersConfigured();
    }
    checkPeersConfigured(poolname) {
        const poolName = poolname ? poolname : this.rbdForm.get('pool').value;
        this.rbdMirroringService.getPeerForPool(poolName).subscribe((resp) => {
            if (resp.length > 0) {
                this.peerConfigured = true;
            }
        });
    }
    setPoolMirrorMode() {
        var _a;
        this.currentPoolName =
            this.mode === this.rbdFormMode.editing
                ? (_a = this.response) === null || _a === void 0 ? void 0 : _a.pool_name
                : this.rbdForm.getValue('pool');
        if (this.currentPoolName) {
            this.rbdMirroringService.refresh();
            this.rbdMirroringService.subscribeSummary((data) => {
                const pool = data.content_data.pools.find((o) => o.name === this.currentPoolName);
                this.poolMirrorMode = pool.mirror_mode;
                if (pool.mirror_mode === 'disabled') {
                    this.mirroring = false;
                    this.rbdForm.get('mirroring').setValue(this.mirroring);
                    this.rbdForm.get('mirroring').disable();
                }
            });
        }
        this.setExclusiveLock();
    }
    prepareFormForAction() {
        const url = this.routerUrl;
        if (url.startsWith('/block/rbd/edit')) {
            this.mode = this.rbdFormMode.editing;
            this.action = this.actionLabels.EDIT;
            this.disableForEdit();
        }
        else if (url.startsWith('/block/rbd/clone')) {
            this.mode = this.rbdFormMode.cloning;
            this.disableForClone();
            this.action = this.actionLabels.CLONE;
        }
        else if (url.startsWith('/block/rbd/copy')) {
            this.mode = this.rbdFormMode.copying;
            this.action = this.actionLabels.COPY;
            this.disableForCopy();
        }
        else {
            this.action = this.actionLabels.CREATE;
        }
        lodash__WEBPACK_IMPORTED_MODULE_0___default().each(this.features, (feature) => {
            this.rbdForm
                .get('features')
                .get(feature.key)
                .valueChanges.subscribe((value) => this.featureFormUpdate(feature.key, value));
        });
    }
    gatherNeededData() {
        const promises = {};
        if (this.mode) {
            // Mode is not set for creation
            this.route.params.subscribe((params) => {
                const imageSpec = _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_10__.ImageSpec.fromString(decodeURIComponent(params.image_spec));
                if (params.snap) {
                    this.snapName = decodeURIComponent(params.snap);
                }
                promises['rbd'] = this.rbdService.get(imageSpec);
                this.checkPeersConfigured(imageSpec.poolName);
            });
        }
        else {
            // New image
            promises['defaultFeatures'] = this.rbdService.defaultFeatures();
        }
        if (this.mode !== this.rbdFormMode.editing && this.poolPermission.read) {
            promises['pools'] = this.poolService.list([
                'pool_name',
                'type',
                'flags_names',
                'application_metadata'
            ]);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_35__.forkJoin)(promises);
    }
    handleExternalData(data) {
        this.handlePoolData(data.pools);
        this.setPoolMirrorMode();
        if (data.defaultFeatures) {
            // Fetched only during creation
            this.setFeatures(data.defaultFeatures);
        }
        if (data.rbd) {
            // Not fetched for creation
            const resp = data.rbd;
            this.setResponse(resp, this.snapName);
            this.rbdImage.next(resp);
        }
        this.loadingReady();
    }
    handlePoolData(data) {
        if (!data) {
            // Not fetched while editing
            return;
        }
        const pools = [];
        const dataPools = [];
        for (const pool of data) {
            if (this.rbdService.isRBDPool(pool)) {
                if (pool.type === 'replicated') {
                    pools.push(pool);
                    dataPools.push(pool);
                }
                else if (pool.type === 'erasure' && pool.flags_names.indexOf('ec_overwrites') !== -1) {
                    dataPools.push(pool);
                }
            }
        }
        this.pools = pools;
        this.allPools = pools;
        this.dataPools = dataPools;
        this.allDataPools = dataPools;
        if (this.pools.length === 1) {
            const poolName = this.pools[0].pool_name;
            this.rbdForm.get('pool').setValue(poolName);
            this.onPoolChange(poolName);
        }
        if (this.allDataPools.length <= 1) {
            this.rbdForm.get('useDataPool').disable();
        }
    }
    onPoolChange(selectedPoolName) {
        const dataPoolControl = this.rbdForm.get('dataPool');
        if (dataPoolControl.value === selectedPoolName) {
            dataPoolControl.setValue(null);
        }
        this.dataPools = this.allDataPools
            ? this.allDataPools.filter((dataPool) => {
                return dataPool.pool_name !== selectedPoolName;
            })
            : [];
        this.namespaces = null;
        if (selectedPoolName in this.namespacesByPoolCache) {
            this.namespaces = this.namespacesByPoolCache[selectedPoolName];
        }
        else {
            this.rbdService.listNamespaces(selectedPoolName).subscribe((namespaces) => {
                namespaces = namespaces.map((namespace) => namespace.namespace);
                this.namespacesByPoolCache[selectedPoolName] = namespaces;
                this.namespaces = namespaces;
            });
        }
        this.rbdForm.get('namespace').setValue(null);
    }
    onUseDataPoolChange() {
        if (!this.rbdForm.getValue('useDataPool')) {
            this.rbdForm.get('dataPool').setValue(null);
            this.onDataPoolChange(null);
        }
    }
    onDataPoolChange(selectedDataPoolName) {
        const newPools = this.allPools.filter((pool) => {
            return pool.pool_name !== selectedDataPoolName;
        });
        if (this.rbdForm.getValue('pool') === selectedDataPoolName) {
            this.rbdForm.get('pool').setValue(null);
        }
        this.pools = newPools;
    }
    validateRbdForm(formatter) {
        return (formGroup) => {
            // Data Pool
            const useDataPoolControl = formGroup.get('useDataPool');
            const dataPoolControl = formGroup.get('dataPool');
            let dataPoolControlErrors = null;
            if (useDataPoolControl.value && dataPoolControl.value == null) {
                dataPoolControlErrors = { required: true };
            }
            dataPoolControl.setErrors(dataPoolControlErrors);
            // Size
            const sizeControl = formGroup.get('size');
            const objectSizeControl = formGroup.get('obj_size');
            const objectSizeInBytes = formatter.toBytes(objectSizeControl.value != null ? objectSizeControl.value : this.defaultObjectSize);
            const stripingCountControl = formGroup.get('stripingCount');
            const stripingCount = stripingCountControl.value != null ? stripingCountControl.value : this.defaultStripingCount;
            let sizeControlErrors = null;
            if (sizeControl.value === null) {
                sizeControlErrors = { required: true };
            }
            else {
                const sizeInBytes = formatter.toBytes(sizeControl.value);
                if (stripingCount * objectSizeInBytes > sizeInBytes) {
                    sizeControlErrors = { invalidSizeObject: true };
                }
            }
            sizeControl.setErrors(sizeControlErrors);
            // Striping Unit
            const stripingUnitControl = formGroup.get('stripingUnit');
            let stripingUnitControlErrors = null;
            if (stripingUnitControl.value === null && stripingCountControl.value !== null) {
                stripingUnitControlErrors = { required: true };
            }
            else if (stripingUnitControl.value !== null) {
                const stripingUnitInBytes = formatter.toBytes(stripingUnitControl.value);
                if (stripingUnitInBytes > objectSizeInBytes) {
                    stripingUnitControlErrors = { invalidStripingUnit: true };
                }
            }
            stripingUnitControl.setErrors(stripingUnitControlErrors);
            // Striping Count
            let stripingCountControlErrors = null;
            if (stripingCountControl.value === null && stripingUnitControl.value !== null) {
                stripingCountControlErrors = { required: true };
            }
            else if (stripingCount < 1) {
                stripingCountControlErrors = { min: true };
            }
            stripingCountControl.setErrors(stripingCountControlErrors);
            return null;
        };
    }
    deepBoxCheck(key, checked) {
        const childFeatures = this.getDependentChildFeatures(key);
        childFeatures.forEach((feature) => {
            const featureControl = this.rbdForm.get(feature.key);
            if (checked) {
                featureControl.enable({ emitEvent: false });
            }
            else {
                featureControl.disable({ emitEvent: false });
                featureControl.setValue(false, { emitEvent: false });
                this.deepBoxCheck(feature.key, checked);
            }
            const featureFormGroup = this.rbdForm.get('features');
            if (this.mode === this.rbdFormMode.editing && featureFormGroup.get(feature.key).enabled) {
                if (this.response.features_name.indexOf(feature.key) !== -1 && !feature.allowDisable) {
                    featureFormGroup.get(feature.key).disable();
                }
                else if (this.response.features_name.indexOf(feature.key) === -1 &&
                    !feature.allowEnable) {
                    featureFormGroup.get(feature.key).disable();
                }
            }
        });
    }
    getDependentChildFeatures(featureKey) {
        return lodash__WEBPACK_IMPORTED_MODULE_0___default().filter(this.features, (f) => f.requires === featureKey) || [];
    }
    interlockCheck(key, checked) {
        // Adds a compatibility layer for Ceph cluster where the feature interlock of features hasn't
        // been implemented yet. It disables the feature interlock for images which only have one of
        // both interlocked features (at the time of this writing: object-map and fast-diff) enabled.
        const feature = this.featuresList.find((f) => f.key === key);
        if (this.response) {
            // Ignore `create` page
            const hasInterlockedFeature = feature.interlockedWith != null;
            const dependentInterlockedFeature = this.featuresList.find((f) => f.interlockedWith === feature.key);
            const isOriginFeatureEnabled = !!this.response.features_name.find((e) => e === feature.key); // in this case: fast-diff
            if (hasInterlockedFeature) {
                const isLinkedEnabled = !!this.response.features_name.find((e) => e === feature.interlockedWith); // depends: object-map
                if (isOriginFeatureEnabled !== isLinkedEnabled) {
                    return; // Ignore incompatible setting because it's from a previous cluster version
                }
            }
            else if (dependentInterlockedFeature) {
                const isOtherInterlockedFeatureEnabled = !!this.response.features_name.find((e) => e === dependentInterlockedFeature.key);
                if (isOtherInterlockedFeatureEnabled !== isOriginFeatureEnabled) {
                    return; // Ignore incompatible setting because it's from a previous cluster version
                }
            }
        }
        if (checked) {
            lodash__WEBPACK_IMPORTED_MODULE_0___default().filter(this.features, (f) => f.interlockedWith === key).forEach((f) => this.rbdForm.get(f.key).setValue(true, { emitEvent: false }));
        }
        else {
            if (feature.interlockedWith) {
                // Don't skip emitting the event here, as it prevents `fast-diff` from
                // becoming disabled when manually unchecked.  This is because it
                // triggers an update on `object-map` and if `object-map` doesn't emit,
                // `fast-diff` will not be automatically disabled.
                this.rbdForm.get('features').get(feature.interlockedWith).setValue(false);
            }
        }
    }
    featureFormUpdate(key, checked) {
        if (checked) {
            const required = this.features[key].requires;
            if (required && !this.rbdForm.getValue(required)) {
                this.rbdForm.get(`features.${key}`).setValue(false);
                return;
            }
        }
        this.deepBoxCheck(key, checked);
        this.interlockCheck(key, checked);
    }
    setFeatures(features) {
        const featuresControl = this.rbdForm.get('features');
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forIn(this.features, (feature) => {
            if (features.indexOf(feature.key) !== -1) {
                featuresControl.get(feature.key).setValue(true);
            }
            this.featureFormUpdate(feature.key, featuresControl.get(feature.key).value);
        });
    }
    setResponse(response, snapName) {
        this.response = response;
        const imageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_10__.ImageSpec(response.pool_name, response.namespace, response.name).toString();
        if (this.mode === this.rbdFormMode.cloning) {
            this.rbdForm.get('parent').setValue(`${imageSpec}@${snapName}`);
        }
        else if (this.mode === this.rbdFormMode.copying) {
            if (snapName) {
                this.rbdForm.get('parent').setValue(`${imageSpec}@${snapName}`);
            }
            else {
                this.rbdForm.get('parent').setValue(`${imageSpec}`);
            }
        }
        else if (response.parent) {
            const parent = response.parent;
            this.rbdForm
                .get('parent')
                .setValue(`${parent.pool_name}/${parent.image_name}@${parent.snap_name}`);
        }
        if (this.mode === this.rbdFormMode.editing) {
            this.rbdForm.get('name').setValue(response.name);
            if ((response === null || response === void 0 ? void 0 : response.mirror_mode) === 'snapshot' || response.features_name.includes('journaling')) {
                this.mirroring = true;
                this.rbdForm.get('mirroring').setValue(this.mirroring);
                this.rbdForm.get('mirroringMode').setValue(response === null || response === void 0 ? void 0 : response.mirror_mode);
                this.rbdForm.get('schedule').setValue(response === null || response === void 0 ? void 0 : response.schedule_interval);
            }
            else {
                this.mirroring = false;
                this.rbdForm.get('mirroring').setValue(this.mirroring);
            }
            this.setPoolMirrorMode();
        }
        this.rbdForm.get('pool').setValue(response.pool_name);
        this.onPoolChange(response.pool_name);
        this.rbdForm.get('namespace').setValue(response.namespace);
        if (response.data_pool) {
            this.rbdForm.get('useDataPool').setValue(true);
            this.rbdForm.get('dataPool').setValue(response.data_pool);
        }
        this.rbdForm.get('size').setValue(this.dimlessBinaryPipe.transform(response.size));
        this.rbdForm.get('obj_size').setValue(this.dimlessBinaryPipe.transform(response.obj_size));
        this.setFeatures(response.features_name);
        this.rbdForm
            .get('stripingUnit')
            .setValue(this.dimlessBinaryPipe.transform(response.stripe_unit));
        this.rbdForm.get('stripingCount').setValue(response.stripe_count);
        /* Configuration */
        this.initializeConfigData.next({
            initialData: this.response.configuration,
            sourceType: _app_shared_models_configuration__WEBPACK_IMPORTED_MODULE_8__.RbdConfigurationSourceField.image
        });
    }
    createRequest() {
        const request = new _rbd_form_create_request_model__WEBPACK_IMPORTED_MODULE_18__.RbdFormCreateRequestModel();
        request.pool_name = this.rbdForm.getValue('pool');
        request.namespace = this.rbdForm.getValue('namespace');
        request.name = this.rbdForm.getValue('name');
        request.schedule_interval = this.rbdForm.getValue('schedule');
        request.size = this.formatter.toBytes(this.rbdForm.getValue('size'));
        if (this.poolMirrorMode === 'image') {
            request.mirror_mode = this.rbdForm.getValue('mirroringMode');
        }
        this.addObjectSizeAndStripingToRequest(request);
        request.configuration = this.getDirtyConfigurationValues();
        return request;
    }
    addObjectSizeAndStripingToRequest(request) {
        request.obj_size = this.formatter.toBytes(this.rbdForm.getValue('obj_size'));
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forIn(this.features, (feature) => {
            if (this.rbdForm.getValue(feature.key)) {
                request.features.push(feature.key);
            }
        });
        if (this.mirroring && this.rbdForm.getValue('mirroringMode') === 'journal') {
            request.features.push('journaling');
        }
        /* Striping */
        request.stripe_unit = this.formatter.toBytes(this.rbdForm.getValue('stripingUnit'));
        request.stripe_count = this.rbdForm.getValue('stripingCount');
        request.data_pool = this.rbdForm.getValue('dataPool');
    }
    createAction() {
        const request = this.createRequest();
        return this.taskWrapper.wrapTaskAroundCall({
            task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_9__.FinishedTask('rbd/create', {
                pool_name: request.pool_name,
                namespace: request.namespace,
                image_name: request.name,
                schedule_interval: request.schedule_interval,
                start_time: request.start_time
            }),
            call: this.rbdService.create(request)
        });
    }
    editRequest() {
        const request = new _rbd_form_edit_request_model__WEBPACK_IMPORTED_MODULE_19__.RbdFormEditRequestModel();
        request.name = this.rbdForm.getValue('name');
        request.schedule_interval = this.rbdForm.getValue('schedule');
        request.name = this.rbdForm.getValue('name');
        request.size = this.formatter.toBytes(this.rbdForm.getValue('size'));
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forIn(this.features, (feature) => {
            if (this.rbdForm.getValue(feature.key)) {
                request.features.push(feature.key);
            }
        });
        request.enable_mirror = this.rbdForm.getValue('mirroring');
        if (request.enable_mirror) {
            if (this.rbdForm.getValue('mirroringMode') === 'journal') {
                request.features.push('journaling');
            }
            if (this.poolMirrorMode === 'image') {
                request.mirror_mode = this.rbdForm.getValue('mirroringMode');
            }
        }
        else {
            const index = request.features.indexOf('journaling', 0);
            if (index > -1) {
                request.features.splice(index, 1);
            }
        }
        request.configuration = this.getDirtyConfigurationValues();
        return request;
    }
    cloneRequest() {
        const request = new _rbd_form_clone_request_model__WEBPACK_IMPORTED_MODULE_16__.RbdFormCloneRequestModel();
        request.child_pool_name = this.rbdForm.getValue('pool');
        request.child_namespace = this.rbdForm.getValue('namespace');
        request.child_image_name = this.rbdForm.getValue('name');
        this.addObjectSizeAndStripingToRequest(request);
        request.configuration = this.getDirtyConfigurationValues(true, _app_shared_models_configuration__WEBPACK_IMPORTED_MODULE_8__.RbdConfigurationSourceField.image);
        return request;
    }
    editAction() {
        const imageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_10__.ImageSpec(this.response.pool_name, this.response.namespace, this.response.name);
        return this.taskWrapper.wrapTaskAroundCall({
            task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_9__.FinishedTask('rbd/edit', {
                image_spec: imageSpec.toString()
            }),
            call: this.rbdService.update(imageSpec, this.editRequest())
        });
    }
    cloneAction() {
        const request = this.cloneRequest();
        const imageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_10__.ImageSpec(this.response.pool_name, this.response.namespace, this.response.name);
        return this.taskWrapper.wrapTaskAroundCall({
            task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_9__.FinishedTask('rbd/clone', {
                parent_image_spec: imageSpec.toString(),
                parent_snap_name: this.snapName,
                child_pool_name: request.child_pool_name,
                child_namespace: request.child_namespace,
                child_image_name: request.child_image_name
            }),
            call: this.rbdService.cloneSnapshot(imageSpec, this.snapName, request)
        });
    }
    copyRequest() {
        const request = new _rbd_form_copy_request_model__WEBPACK_IMPORTED_MODULE_17__.RbdFormCopyRequestModel();
        if (this.snapName) {
            request.snapshot_name = this.snapName;
        }
        request.dest_pool_name = this.rbdForm.getValue('pool');
        request.dest_namespace = this.rbdForm.getValue('namespace');
        request.dest_image_name = this.rbdForm.getValue('name');
        this.addObjectSizeAndStripingToRequest(request);
        request.configuration = this.getDirtyConfigurationValues(true, _app_shared_models_configuration__WEBPACK_IMPORTED_MODULE_8__.RbdConfigurationSourceField.image);
        return request;
    }
    copyAction() {
        const request = this.copyRequest();
        const imageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_10__.ImageSpec(this.response.pool_name, this.response.namespace, this.response.name);
        return this.taskWrapper.wrapTaskAroundCall({
            task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_9__.FinishedTask('rbd/copy', {
                src_image_spec: imageSpec.toString(),
                dest_pool_name: request.dest_pool_name,
                dest_namespace: request.dest_namespace,
                dest_image_name: request.dest_image_name
            }),
            call: this.rbdService.copy(imageSpec, request)
        });
    }
    submit() {
        if (!this.mode) {
            this.rbdImage.next('create');
        }
        this.rbdImage
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_36__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_37__.switchMap)(() => {
            if (this.mode === this.rbdFormMode.editing) {
                return this.editAction();
            }
            else if (this.mode === this.rbdFormMode.cloning) {
                return this.cloneAction();
            }
            else if (this.mode === this.rbdFormMode.copying) {
                return this.copyAction();
            }
            else {
                return this.createAction();
            }
        }))
            .subscribe(() => undefined, () => this.rbdForm.setErrors({ cdSubmitButton: true }), () => this.router.navigate(['/block/rbd']));
    }
}
RbdFormComponent.ɵfac = function RbdFormComponent_Factory(t) { return new (t || RbdFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_12__.AuthStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_38__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](_app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_1__.PoolService), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](_app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_3__.RbdService), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](_app_shared_services_formatter_service__WEBPACK_IMPORTED_MODULE_13__.FormatterService), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_14__.TaskWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](_app_shared_pipes_dimless_binary_pipe__WEBPACK_IMPORTED_MODULE_11__.DimlessBinaryPipe), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__.ActionLabelsI18n), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_38__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdirectiveInject"](_app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_2__.RbdMirroringService)); };
RbdFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineComponent"]({ type: RbdFormComponent, selectors: [["cd-rbd-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc form title
         */
        const MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__1 = goog.getMsg("{$interpolation} {$interpolation_1}", { "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
        i18n_0 = MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__1;
    }
    else {
        i18n_0 = "" + "\uFFFD0\uFFFD" + " " + "\uFFFD1\uFFFD" + "";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__3 = goog.getMsg("Name");
        i18n_2 = MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__3;
    }
    else {
        i18n_2 = "Name";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7101197021456818771$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__5 = goog.getMsg("Pool");
        i18n_4 = MSG_EXTERNAL_7101197021456818771$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__5;
    }
    else {
        i18n_4 = "Pool";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_257213081742499964$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__7 = goog.getMsg("Use a dedicated data pool");
        i18n_6 = MSG_EXTERNAL_257213081742499964$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__7;
    }
    else {
        i18n_6 = "Use a dedicated data pool";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_45739481977493163$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__9 = goog.getMsg("Size");
        i18n_8 = MSG_EXTERNAL_45739481977493163$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__9;
    }
    else {
        i18n_8 = "Size";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2739243284262593813$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__11 = goog.getMsg("e.g., 10GiB");
        i18n_10 = MSG_EXTERNAL_2739243284262593813$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__11;
    }
    else {
        i18n_10 = "e.g., 10GiB";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6599364831830861985$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__13 = goog.getMsg("Features");
        i18n_12 = MSG_EXTERNAL_6599364831830861985$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__13;
    }
    else {
        i18n_12 = "Features";
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6201638315245239510$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__15 = goog.getMsg("Advanced");
        i18n_14 = MSG_EXTERNAL_6201638315245239510$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__15;
    }
    else {
        i18n_14 = "Advanced";
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8401117767373393091$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__17 = goog.getMsg("Striping");
        i18n_16 = MSG_EXTERNAL_8401117767373393091$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__17;
    }
    else {
        i18n_16 = "Striping";
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8566817275400192153$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__19 = goog.getMsg("Object size{$startTagCdHelper}Objects in the Ceph Storage Cluster have a maximum configurable size (e.g., 2MB, 4MB, etc.). The object size should be large enough to accommodate many stripe units, and should be a multiple of the stripe unit.{$closeTagCdHelper}", { "startTagCdHelper": "\uFFFD#67\uFFFD", "closeTagCdHelper": "\uFFFD/#67\uFFFD" });
        i18n_18 = MSG_EXTERNAL_8566817275400192153$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__19;
    }
    else {
        i18n_18 = "Object size" + "\uFFFD#67\uFFFD" + "Objects in the Ceph Storage Cluster have a maximum configurable size (e.g., 2MB, 4MB, etc.). The object size should be large enough to accommodate many stripe units, and should be a multiple of the stripe unit." + "\uFFFD/#67\uFFFD" + "";
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5194313583341171922$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__21 = goog.getMsg("Stripe unit{$startTagCdHelper}Stripes have a configurable unit size (e.g., 64kb). The Ceph Client divides the data it will write to objects into equally sized stripe units, except for the last stripe unit. A stripe width, should be a fraction of the Object Size so that an object may contain many stripe units.{$closeTagCdHelper}", { "startTagCdHelper": "\uFFFD#74\uFFFD", "closeTagCdHelper": "\uFFFD/#74\uFFFD" });
        i18n_20 = MSG_EXTERNAL_5194313583341171922$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__21;
    }
    else {
        i18n_20 = "Stripe unit" + "\uFFFD#74\uFFFD" + "Stripes have a configurable unit size (e.g., 64kb). The Ceph Client divides the data it will write to objects into equally sized stripe units, except for the last stripe unit. A stripe width, should be a fraction of the Object Size so that an object may contain many stripe units." + "\uFFFD/#74\uFFFD" + "";
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1429607588655891113$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__23 = goog.getMsg("-- Select stripe unit --");
        i18n_22 = MSG_EXTERNAL_1429607588655891113$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__23;
    }
    else {
        i18n_22 = "-- Select stripe unit --";
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5850626615523016383$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__25 = goog.getMsg("Stripe count{$startTagCdHelper}The Ceph Client writes a sequence of stripe units over a series of objects determined by the stripe count. The series of objects is called an object set. After the Ceph Client writes to the last object in the object set, it returns to the first object in the object set.{$closeTagCdHelper}", { "startTagCdHelper": "\uFFFD#85\uFFFD", "closeTagCdHelper": "\uFFFD/#85\uFFFD" });
        i18n_24 = MSG_EXTERNAL_5850626615523016383$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS__25;
    }
    else {
        i18n_24 = "Stripe count" + "\uFFFD#85\uFFFD" + "The Ceph Client writes a sequence of stripe units over a series of objects determined by the stripe count. The series of objects is called an object set. After the Ceph Client writes to the last object in the object set, it returns to the first object in the object set." + "\uFFFD/#85\uFFFD" + "";
    } let i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2389251380158603463$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___27 = goog.getMsg("{$interpolation} from", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_26 = MSG_EXTERNAL_2389251380158603463$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___27;
    }
    else {
        i18n_26 = "" + "\uFFFD0\uFFFD" + " from";
    } let i18n_28; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___29 = goog.getMsg("This field is required.");
        i18n_28 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___29;
    }
    else {
        i18n_28 = "This field is required.";
    } let i18n_30; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_905598583984240707$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___31 = goog.getMsg("'/' and '@' are not allowed.");
        i18n_30 = MSG_EXTERNAL_905598583984240707$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___31;
    }
    else {
        i18n_30 = "'/' and '@' are not allowed.";
    } let i18n_32; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS____33 = goog.getMsg("Loading...");
        i18n_32 = MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS____33;
    }
    else {
        i18n_32 = "Loading...";
    } let i18n_34; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7409869370957226155$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS____35 = goog.getMsg("-- No rbd pools available --");
        i18n_34 = MSG_EXTERNAL_7409869370957226155$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS____35;
    }
    else {
        i18n_34 = "-- No rbd pools available --";
    } let i18n_36; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7859304693598053124$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS____37 = goog.getMsg("-- Select a pool --");
        i18n_36 = MSG_EXTERNAL_7859304693598053124$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS____37;
    }
    else {
        i18n_36 = "-- Select a pool --";
    } let i18n_38; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___39 = goog.getMsg("This field is required.");
        i18n_38 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___39;
    }
    else {
        i18n_38 = "This field is required.";
    } let i18n_41; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS_____42 = goog.getMsg("Loading...");
        i18n_41 = MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS_____42;
    }
    else {
        i18n_41 = "Loading...";
    } let i18n_43; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9096215332780695499$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS_____44 = goog.getMsg("-- No namespaces available --");
        i18n_43 = MSG_EXTERNAL_9096215332780695499$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS_____44;
    }
    else {
        i18n_43 = "-- No namespaces available --";
    } let i18n_45; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5599601174257443416$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS_____46 = goog.getMsg("-- Select a namespace --");
        i18n_45 = MSG_EXTERNAL_5599601174257443416$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS_____46;
    }
    else {
        i18n_45 = "-- Select a namespace --";
    } let i18n_47; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4758717516411783326$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___48 = goog.getMsg("You need more than one pool with the rbd application label use to use a dedicated data pool.");
        i18n_47 = MSG_EXTERNAL_4758717516411783326$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___48;
    }
    else {
        i18n_47 = "You need more than one pool with the rbd application label use to use a dedicated data pool.";
    } let i18n_49; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7334279777218381504$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___50 = goog.getMsg("Data pool");
        i18n_49 = MSG_EXTERNAL_7334279777218381504$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___50;
    }
    else {
        i18n_49 = "Data pool";
    } let i18n_51; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8817331618527901776$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___52 = goog.getMsg("Dedicated pool that stores the object-data of the RBD.");
        i18n_51 = MSG_EXTERNAL_8817331618527901776$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___52;
    }
    else {
        i18n_51 = "Dedicated pool that stores the object-data of the RBD.";
    } let i18n_53; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS_____54 = goog.getMsg("Loading...");
        i18n_53 = MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS_____54;
    }
    else {
        i18n_53 = "Loading...";
    } let i18n_55; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7896082652291310983$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS_____56 = goog.getMsg("-- No data pools available --");
        i18n_55 = MSG_EXTERNAL_7896082652291310983$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS_____56;
    }
    else {
        i18n_55 = "-- No data pools available --";
    } let i18n_57; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS____58 = goog.getMsg("This field is required.");
        i18n_57 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS____58;
    }
    else {
        i18n_57 = "This field is required.";
    } let i18n_60; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___61 = goog.getMsg("This field is required.");
        i18n_60 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___61;
    }
    else {
        i18n_60 = "This field is required.";
    } let i18n_62; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5328556463084038907$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___63 = goog.getMsg("You have to increase the size.");
        i18n_62 = MSG_EXTERNAL_5328556463084038907$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___63;
    }
    else {
        i18n_62 = "You have to increase the size.";
    } let i18n_64; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5187069218719898499$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___65 = goog.getMsg("You need to enable a {$startBoldText}mirror mode{$closeBoldText} in the selected pool. Please {$startLink}click here to select a mode and enable it in this pool.{$closeLink}", { "startBoldText": "\uFFFD#3\uFFFD", "closeBoldText": "\uFFFD/#3\uFFFD", "startLink": "\uFFFD#4\uFFFD", "closeLink": "\uFFFD/#4\uFFFD" });
        i18n_64 = MSG_EXTERNAL_5187069218719898499$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___65;
    }
    else {
        i18n_64 = "You need to enable a " + "\uFFFD#3\uFFFD" + "mirror mode" + "\uFFFD/#3\uFFFD" + " in the selected pool. Please " + "\uFFFD#4\uFFFD" + "click here to select a mode and enable it in this pool." + "\uFFFD/#4\uFFFD" + "";
    } let i18n_70; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6627792323781795719$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS_____71 = goog.getMsg("You need to enable {$startBoldText}image mirror mode{$closeBoldText} in the selected pool. Please {$startLink}click here to select a mode and enable it in this pool.{$closeLink}", { "startBoldText": "\uFFFD#3\uFFFD", "closeBoldText": "\uFFFD/#3\uFFFD", "startLink": "\uFFFD#4\uFFFD", "closeLink": "\uFFFD/#4\uFFFD" });
        i18n_70 = MSG_EXTERNAL_6627792323781795719$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS_____71;
    }
    else {
        i18n_70 = "You need to enable " + "\uFFFD#3\uFFFD" + "image mirror mode" + "\uFFFD/#3\uFFFD" + " in the selected pool. Please " + "\uFFFD#4\uFFFD" + "click here to select a mode and enable it in this pool." + "\uFFFD/#4\uFFFD" + "";
    } let i18n_73; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3412464103628325279$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___74 = goog.getMsg("Create Mirror-Snapshots automatically on a periodic basis. The interval can be specified in days, hours, or minutes using d, h, m suffix respectively. To create mirror snapshots, you must import or create and have available peers to mirror");
        i18n_73 = MSG_EXTERNAL_3412464103628325279$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___74;
    }
    else {
        i18n_73 = "Create Mirror-Snapshots automatically on a periodic basis. The interval can be specified in days, hours, or minutes using d, h, m suffix respectively. To create mirror snapshots, you must import or create and have available peers to mirror";
    } let i18n_72; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9221343737072080596$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___75 = goog.getMsg("Schedule Interval {$startTagCdHelper}{$closeTagCdHelper}", { "startTagCdHelper": "\uFFFD#3\uFFFD", "closeTagCdHelper": "\uFFFD/#3\uFFFD" });
        i18n_72 = MSG_EXTERNAL_9221343737072080596$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___75;
    }
    else {
        i18n_72 = "Schedule Interval " + "\uFFFD#3\uFFFD" + "" + "\uFFFD/#3\uFFFD" + "";
    } let i18n_76; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5039677893225013711$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___77 = goog.getMsg("e.g., 12h or 1d or 10m");
        i18n_76 = MSG_EXTERNAL_5039677893225013711$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___77;
    }
    else {
        i18n_76 = "e.g., 12h or 1d or 10m";
    } let i18n_78; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5943692975122361417$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___79 = goog.getMsg("Advanced...");
        i18n_78 = MSG_EXTERNAL_5943692975122361417$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___79;
    }
    else {
        i18n_78 = "Advanced...";
    } let i18n_80; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3075270917188041328$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___81 = goog.getMsg("This field is required because stripe count is defined!");
        i18n_80 = MSG_EXTERNAL_3075270917188041328$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___81;
    }
    else {
        i18n_80 = "This field is required because stripe count is defined!";
    } let i18n_82; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6153477700535402202$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___83 = goog.getMsg("Stripe unit is greater than object size.");
        i18n_82 = MSG_EXTERNAL_6153477700535402202$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___83;
    }
    else {
        i18n_82 = "Stripe unit is greater than object size.";
    } let i18n_84; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7722186069234753681$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___85 = goog.getMsg("This field is required because stripe unit is defined!");
        i18n_84 = MSG_EXTERNAL_7722186069234753681$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___85;
    }
    else {
        i18n_84 = "This field is required because stripe unit is defined!";
    } let i18n_86; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3849256548364425655$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___87 = goog.getMsg("Stripe count must be greater than 0.");
        i18n_86 = MSG_EXTERNAL_3849256548364425655$$SRC_APP_CEPH_BLOCK_RBD_FORM_RBD_FORM_COMPONENT_TS___87;
    }
    else {
        i18n_86 = "Stripe count must be greater than 0.";
    } return [["class", "cd-col-form", 4, "cdFormLoading"], [1, "cd-col-form"], ["name", "rbdForm", "novalidate", "", 3, "formGroup"], ["formDir", "ngForm"], [1, "card"], [1, "card-header"], i18n_0, [1, "card-body"], ["class", "form-group row", 4, "ngIf"], [1, "form-group", "row"], ["for", "name", 1, "cd-col-form-label", "required"], i18n_2, [1, "cd-col-form-input"], ["type", "text", "placeholder", "Name...", "id", "name", "name", "name", "formControlName", "name", "autofocus", "", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "row", 3, "change"], ["for", "pool", 1, "cd-col-form-label", 3, "ngClass"], i18n_4, ["class", "form-control", "type", "text", "placeholder", "Pool name...", "id", "pool", "name", "pool", "formControlName", "pool", 4, "ngIf"], ["id", "pool", "name", "pool", "class", "form-select", "formControlName", "pool", 3, "change", 4, "ngIf"], [1, "cd-col-form-offset"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "useDataPool", "name", "useDataPool", "formControlName", "useDataPool", 1, "custom-control-input", 3, "change"], ["for", "useDataPool", 1, "custom-control-label"], i18n_6, [4, "ngIf"], ["for", "size", 1, "cd-col-form-label", "required"], i18n_8, ["id", "size", "name", "size", "type", "text", "formControlName", "size", "placeholder", i18n_10, "defaultUnit", "GiB", "cdDimlessBinary", "", 1, "form-control"], ["formGroupName", "features", 1, "form-group", "row"], ["for", "features", 1, "cd-col-form-label"], i18n_12, ["class", "custom-control custom-checkbox", 4, "ngFor", "ngForOf"], ["type", "checkbox", "id", "mirroring", "name", "mirroring", "formControlName", "mirroring", 1, "custom-control-input", 3, "change"], ["for", "mirroring", 1, "custom-control-label"], [1, "row"], [1, "col-sm-12"], ["class", "float-end margin-right-md", "href", "", 3, "click", 4, "ngIf"], [3, "hidden"], [1, "cd-header"], i18n_14, [1, "col-md-12"], i18n_16, ["for", "size", 1, "cd-col-form-label"], i18n_18, ["id", "obj_size", "name", "obj_size", "formControlName", "obj_size", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "stripingUnit", 1, "cd-col-form-label", 3, "ngClass"], i18n_20, ["id", "stripingUnit", "name", "stripingUnit", "formControlName", "stripingUnit", 1, "form-select"], [3, "ngValue"], i18n_22, ["for", "stripingCount", 1, "cd-col-form-label", 3, "ngClass"], i18n_24, ["id", "stripingCount", "name", "stripingCount", "formControlName", "stripingCount", "type", "number", 1, "form-control"], [3, "form", "initializeData", "changes"], [1, "card-footer"], ["wrappingClass", "text-right", 3, "form", "submitText", "submitActionEvent"], ["for", "name", 1, "cd-col-form-label"], i18n_26, ["type", "text", "id", "parent", "name", "parent", "formControlName", "parent", 1, "form-control"], [1, "invalid-feedback"], i18n_28, i18n_30, ["type", "text", "placeholder", "Pool name...", "id", "pool", "name", "pool", "formControlName", "pool", 1, "form-control"], ["id", "pool", "name", "pool", "formControlName", "pool", 1, "form-select", 3, "change"], [3, "ngValue", 4, "ngIf"], i18n_32, i18n_34, i18n_36, [3, "value"], i18n_38, [3, "ngClass"], ["for", "pool", 1, "cd-col-form-label"], ["class", "form-control", "type", "text", "placeholder", "Namespace...", "id", "namespace", "name", "namespace", "formControlName", "namespace", 4, "ngIf"], ["id", "namespace", "name", "namespace", "class", "form-select", "formControlName", "namespace", 4, "ngIf"], ["type", "text", "placeholder", "Namespace...", "id", "namespace", "name", "namespace", "formControlName", "namespace", 1, "form-control"], ["id", "namespace", "name", "namespace", "formControlName", "namespace", 1, "form-select"], i18n_41, i18n_43, i18n_45, i18n_47, ["for", "dataPool", 1, "cd-col-form-label"], i18n_49, ["html", i18n_51], ["class", "form-control", "type", "text", "placeholder", "Data pool name...", "id", "dataPool", "name", "dataPool", "formControlName", "dataPool", 4, "ngIf"], ["id", "dataPool", "name", "dataPool", "class", "form-select", "formControlName", "dataPool", 3, "change", 4, "ngIf"], ["type", "text", "placeholder", "Data pool name...", "id", "dataPool", "name", "dataPool", "formControlName", "dataPool", 1, "form-control"], ["id", "dataPool", "name", "dataPool", "formControlName", "dataPool", 1, "form-select", 3, "change"], i18n_53, i18n_55, i18n_57, i18n_60, i18n_62, ["type", "checkbox", 1, "custom-control-input", 3, "id", "name", "formControlName"], [1, "custom-control-label", 3, "for"], [3, "html", 4, "ngIf"], [3, "html"], i18n_64, [3, "routerLink"], ["class", "custom-control custom-radio ms-2", 4, "ngFor", "ngForOf"], [1, "custom-control", "custom-radio", "ms-2"], ["type", "radio", "name", "mirroringMode", "formControlName", "mirroringMode", 1, "form-check-input", 3, "id", "value", "change"], [1, "form-check-label", 3, "for"], i18n_70, [1, "cd-col-form-label"], i18n_72, ["html", i18n_73], ["id", "schedule", "name", "schedule", "type", "text", "formControlName", "schedule", "placeholder", i18n_76, 1, "form-control"], ["href", "", 1, "float-end", "margin-right-md", 3, "click"], i18n_78, i18n_80, i18n_82, i18n_84, i18n_86]; }, template: function RbdFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵtemplate"](0, RbdFormComponent_div_0_Template, 95, 49, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵproperty"]("cdFormLoading", ctx.loading);
    } }, directives: [_shared_directives_form_loading_directive__WEBPACK_IMPORTED_MODULE_21__.FormLoadingDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_34__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_22__.CdFormValidationDirective, _angular_common__WEBPACK_IMPORTED_MODULE_39__.NgIf, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_23__.CdFormGroupDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_24__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_25__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormControlName, _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_26__.AutofocusDirective, _angular_common__WEBPACK_IMPORTED_MODULE_39__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_39__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.CheckboxControlValueAccessor, _shared_components_helper_helper_component__WEBPACK_IMPORTED_MODULE_27__.HelperComponent, _shared_directives_dimless_binary_directive__WEBPACK_IMPORTED_MODULE_28__.DimlessBinaryDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormGroupName, _angular_router__WEBPACK_IMPORTED_MODULE_38__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.NumberValueAccessor, _rbd_configuration_form_rbd_configuration_form_component__WEBPACK_IMPORTED_MODULE_29__.RbdConfigurationFormComponent, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_30__.FormButtonPanelComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_39__.TitleCasePipe, _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_31__.UpperFirstPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYmQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 89694:
/*!*******************************************************!*\
  !*** ./src/app/ceph/block/rbd-form/rbd-form.model.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdFormModel": () => (/* binding */ RbdFormModel)
/* harmony export */ });
class RbdFormModel {
}


/***/ }),

/***/ 96176:
/*!***********************************************************!*\
  !*** ./src/app/ceph/block/rbd-list/rbd-list.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdListComponent": () => (/* binding */ RbdListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs */ 25160);
/* harmony import */ var _app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/api/rbd.service */ 23170);
/* harmony import */ var _app_shared_classes_list_with_details_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/classes/list-with-details.class */ 68136);
/* harmony import */ var _app_shared_classes_table_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/classes/table-status */ 71225);
/* harmony import */ var _app_shared_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/components/confirmation-modal/confirmation-modal.component */ 36169);
/* harmony import */ var _app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/components/critical-confirmation-modal/critical-confirmation-modal.component */ 30982);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/datatable/table/table.component */ 35905);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 65862);
/* harmony import */ var _app_shared_models_cd_table_fetch_data_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/shared/models/cd-table-fetch-data-context */ 86226);
/* harmony import */ var _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/shared/models/cd-table-selection */ 68774);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/shared/models/image-spec */ 19358);
/* harmony import */ var _app_shared_pipes_dimless_binary_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/pipes/dimless-binary.pipe */ 47557);
/* harmony import */ var _app_shared_pipes_dimless_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/shared/pipes/dimless.pipe */ 66369);
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 79247);
/* harmony import */ var _app_shared_services_cd_table_server_side_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/app/shared/services/cd-table-server-side.service */ 42135);
/* harmony import */ var _app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~/app/shared/services/modal.service */ 63285);
/* harmony import */ var _app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~/app/shared/services/task-list.service */ 38047);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 32337);
/* harmony import */ var _app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~/app/shared/services/url-builder.service */ 51847);
/* harmony import */ var _rbd_form_rbd_form_edit_request_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../rbd-form/rbd-form-edit-request.model */ 91646);
/* harmony import */ var _rbd_trash_move_modal_rbd_trash_move_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../rbd-trash-move-modal/rbd-trash-move-modal.component */ 40736);
/* harmony import */ var _rbd_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rbd-model */ 23272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _rbd_tabs_rbd_tabs_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../rbd-tabs/rbd-tabs.component */ 80208);
/* harmony import */ var _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/datatable/table-actions/table-actions.component */ 94928);
/* harmony import */ var _rbd_details_rbd_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../rbd-details/rbd-details.component */ 65838);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_pipes_cd_date_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/pipes/cd-date.pipe */ 96102);











































const _c0 = ["usageTpl"];
const _c1 = ["parentTpl"];
const _c2 = ["nameTpl"];
const _c3 = ["scheduleTpl"];
const _c4 = ["mirroringTpl"];
const _c5 = ["flattenTpl"];
const _c6 = ["deleteTpl"];
const _c7 = ["removingStatTpl"];
const _c8 = ["provisionedNotAvailableTooltipTpl"];
const _c9 = ["totalProvisionedNotAvailableTooltipTpl"];
function RbdListComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "div", 13);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("innerHtml", "Only available for RBD images with <strong>fast-diff</strong> enabled", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsanitizeHtml"]);
} }
function RbdListComponent_ng_template_7_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngbTooltip", ctx_r20.usageNotAvailableTooltipTpl);
} }
function RbdListComponent_ng_template_7_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](0, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](1, "dimlessBinary");
} if (rf & 2) {
    const row_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](1, 1, row_r19.disk_usage));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18nApply"](0);
} }
function RbdListComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, RbdListComponent_ng_template_7_span_0_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, RbdListComponent_ng_template_7_ng_template_1_Template, 2, 3, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const row_r19 = ctx.row;
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", row_r19.disk_usage === null && !row_r19.features_name.includes("fast-diff"))("ngIfElse", _r21);
} }
function RbdListComponent_ng_template_9_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngbTooltip", ctx_r25.usageNotAvailableTooltipTpl);
} }
function RbdListComponent_ng_template_9_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](0, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](1, "dimlessBinary");
} if (rf & 2) {
    const row_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](1, 1, row_r24.total_disk_usage));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18nApply"](0);
} }
function RbdListComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, RbdListComponent_ng_template_9_span_0_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, RbdListComponent_ng_template_9_ng_template_1_Template, 2, 3, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const row_r24 = ctx.row;
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", row_r24.total_disk_usage === null && !row_r24.features_name.includes("fast-diff"))("ngIfElse", _r26);
} }
function RbdListComponent_ng_template_11_span_0_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2).value;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"]("/", value_r29.pool_namespace, "");
} }
function RbdListComponent_ng_template_11_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](2, RbdListComponent_ng_template_11_span_0_span_2_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](value_r29.pool_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", value_r29.pool_namespace);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate2"]("/", value_r29.image_name, "@", value_r29.snap_name, "");
} }
function RbdListComponent_ng_template_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RbdListComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, RbdListComponent_ng_template_11_span_0_Template, 4, 4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, RbdListComponent_ng_template_11_span_1_Template, 2, 0, "span", 22);
} if (rf & 2) {
    const value_r29 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", value_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !value_r29);
} }
function RbdListComponent_ng_template_13_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](value_r35[0]);
} }
function RbdListComponent_ng_template_13_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](value_r35[1]);
} }
function RbdListComponent_ng_template_13_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RbdListComponent_ng_template_13_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](1, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} }
function RbdListComponent_ng_template_13_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](value_r35);
} }
function RbdListComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, RbdListComponent_ng_template_13_span_0_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](2, RbdListComponent_ng_template_13_span_2_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](4, RbdListComponent_ng_template_13_span_4_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](5, RbdListComponent_ng_template_13_span_5_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](6, RbdListComponent_ng_template_13_ng_template_6_Template, 2, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const value_r35 = ctx.value;
    const row_r36 = ctx.row;
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", value_r35.length === 3)("ngIfElse", _r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", value_r35.length === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", row_r36.primary === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", row_r36.primary === false);
} }
function RbdListComponent_ng_template_15_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](2, "cdDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](2, 1, value_r46[2]));
} }
function RbdListComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, RbdListComponent_ng_template_15_span_0_Template, 3, 3, "span", 24);
} if (rf & 2) {
    const value_r46 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", value_r46.length === 3);
} }
function RbdListComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](0, " You are about to flatten ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](3, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](4, "br")(5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](6, " All blocks will be copied from parent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](9, " to child ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](12, ".\n");
} if (rf & 2) {
    const value_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](value_r50.child);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](value_r50.parent);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](value_r50.child);
} }
function RbdListComponent_ng_template_19_div_0_ng_container_4_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} if (rf & 2) {
    const snapshot_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](snapshot_r56);
} }
function RbdListComponent_ng_template_19_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](4, RbdListComponent_ng_template_19_div_0_ng_container_4_li_4_Template, 2, 1, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const snapshots_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2).snapshots;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngForOf", snapshots_r52);
} }
function RbdListComponent_ng_template_19_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 30)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵi18n"](2, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](4, RbdListComponent_ng_template_19_div_0_ng_container_4_Template, 5, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} if (rf & 2) {
    const snapshots_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]().snapshots;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", snapshots_r52.length > 0);
} }
function RbdListComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, RbdListComponent_ng_template_19_div_0_Template, 5, 1, "div", 29);
} if (rf & 2) {
    const hasSnapshots_r51 = ctx.hasSnapshots;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", hasSnapshots_r51);
} }
const _c28 = function (a0, a1) { return [a0, a1]; };
function RbdListComponent_ng_template_21_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "i", 35);
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction2"](1, _c28, ctx_r62.icons.spinner, ctx_r62.icons.spin));
} }
function RbdListComponent_ng_template_21_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    const column_r59 = ctx_r65.column;
    const row_r61 = ctx_r65.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", (column_r59 == null ? null : column_r59.customTemplateConfig == null ? null : column_r59.customTemplateConfig.executingClass) ? column_r59.customTemplateConfig.executingClass : "text-muted italic");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" (", row_r61.cdExecuting, ") ");
} }
function RbdListComponent_ng_template_21_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "i", 37);
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵclassMapInterpolate1"]("", ctx_r64.icons.warning, " warn");
} }
function RbdListComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](0, RbdListComponent_ng_template_21_i_0_Template, 1, 4, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](3, RbdListComponent_ng_template_21_span_3_Template, 2, 2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](4, RbdListComponent_ng_template_21_i_4_Template, 1, 3, "i", 36);
} if (rf & 2) {
    const column_r59 = ctx.column;
    const value_r60 = ctx.value;
    const row_r61 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", row_r61.cdExecuting);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", column_r59 == null ? null : column_r59.customTemplateConfig == null ? null : column_r59.customTemplateConfig.valueClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", value_r60, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", row_r61.cdExecuting);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", row_r61.source && row_r61.source === "REMOVING");
} }
const BASE_URL = 'block/rbd';
class RbdListComponent extends _app_shared_classes_list_with_details_class__WEBPACK_IMPORTED_MODULE_1__.ListWithDetails {
    constructor(authStorageService, rbdService, dimlessBinaryPipe, dimlessPipe, modalService, taskWrapper, taskListService, urlBuilder, actionLabels) {
        super();
        this.authStorageService = authStorageService;
        this.rbdService = rbdService;
        this.dimlessBinaryPipe = dimlessBinaryPipe;
        this.dimlessPipe = dimlessPipe;
        this.modalService = modalService;
        this.taskWrapper = taskWrapper;
        this.taskListService = taskListService;
        this.urlBuilder = urlBuilder;
        this.actionLabels = actionLabels;
        this.tableStatus = new _app_shared_classes_table_status__WEBPACK_IMPORTED_MODULE_2__.TableStatus('light');
        this.selection = new _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_9__.CdTableSelection();
        this.icons = _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_7__.Icons;
        this.count = 0;
        this.tableContext = null;
        this.builders = {
            'rbd/create': (metadata) => this.createRbdFromTask(metadata['pool_name'], metadata['namespace'], metadata['image_name']),
            'rbd/delete': (metadata) => this.createRbdFromTaskImageSpec(metadata['image_spec']),
            'rbd/clone': (metadata) => this.createRbdFromTask(metadata['child_pool_name'], metadata['child_namespace'], metadata['child_image_name']),
            'rbd/copy': (metadata) => this.createRbdFromTask(metadata['dest_pool_name'], metadata['dest_namespace'], metadata['dest_image_name'])
        };
        this.permission = this.authStorageService.getPermissions().rbdImage;
        const getImageUri = () => this.selection.first() &&
            new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__.ImageSpec(this.selection.first().pool_name, this.selection.first().namespace, this.selection.first().name).toStringEncoded();
        const addAction = {
            permission: 'create',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_7__.Icons.add,
            routerLink: () => this.urlBuilder.getCreate(),
            canBePrimary: (selection) => !selection.hasSingleSelection,
            name: this.actionLabels.CREATE
        };
        const editAction = {
            permission: 'update',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_7__.Icons.edit,
            routerLink: () => this.urlBuilder.getEdit(getImageUri()),
            name: this.actionLabels.EDIT,
            disable: (selection) => this.getRemovingStatusDesc(selection) || this.getInvalidNameDisable(selection)
        };
        const deleteAction = {
            permission: 'delete',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_7__.Icons.destroy,
            click: () => this.deleteRbdModal(),
            name: this.actionLabels.DELETE,
            disable: (selection) => this.getDeleteDisableDesc(selection)
        };
        const resyncAction = {
            permission: 'update',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_7__.Icons.refresh,
            click: () => this.resyncRbdModal(),
            name: this.actionLabels.RESYNC,
            disable: (selection) => this.getResyncDisableDesc(selection)
        };
        const copyAction = {
            permission: 'create',
            canBePrimary: (selection) => selection.hasSingleSelection,
            disable: (selection) => this.getRemovingStatusDesc(selection) ||
                this.getInvalidNameDisable(selection) ||
                !!selection.first().cdExecuting,
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_7__.Icons.copy,
            routerLink: () => `/block/rbd/copy/${getImageUri()}`,
            name: this.actionLabels.COPY
        };
        const flattenAction = {
            permission: 'update',
            disable: (selection) => this.getRemovingStatusDesc(selection) ||
                this.getInvalidNameDisable(selection) ||
                selection.first().cdExecuting ||
                !selection.first().parent,
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_7__.Icons.flatten,
            click: () => this.flattenRbdModal(),
            name: this.actionLabels.FLATTEN
        };
        const moveAction = {
            permission: 'delete',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_7__.Icons.trash,
            click: () => this.trashRbdModal(),
            name: this.actionLabels.TRASH,
            disable: (selection) => this.getRemovingStatusDesc(selection) ||
                this.getInvalidNameDisable(selection) ||
                selection.first().image_format === _rbd_model__WEBPACK_IMPORTED_MODULE_22__.RBDImageFormat.V1
        };
        const removeSchedulingAction = {
            permission: 'update',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_7__.Icons.edit,
            click: () => this.removeSchedulingModal(),
            name: this.actionLabels.REMOVE_SCHEDULING,
            disable: (selection) => this.getRemovingStatusDesc(selection) ||
                this.getInvalidNameDisable(selection) ||
                selection.first().schedule_info === undefined
        };
        const promoteAction = {
            permission: 'update',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_7__.Icons.edit,
            click: () => this.actionPrimary(true),
            name: this.actionLabels.PROMOTE,
            visible: () => this.selection.first() != null && !this.selection.first().primary
        };
        const demoteAction = {
            permission: 'update',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_7__.Icons.edit,
            click: () => this.actionPrimary(false),
            name: this.actionLabels.DEMOTE,
            visible: () => this.selection.first() != null && this.selection.first().primary
        };
        this.tableActions = [
            addAction,
            editAction,
            copyAction,
            flattenAction,
            resyncAction,
            deleteAction,
            moveAction,
            removeSchedulingAction,
            promoteAction,
            demoteAction
        ];
    }
    createRbdFromTaskImageSpec(imageSpecStr) {
        const imageSpec = _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__.ImageSpec.fromString(imageSpecStr);
        return this.createRbdFromTask(imageSpec.poolName, imageSpec.namespace, imageSpec.imageName);
    }
    createRbdFromTask(pool, namespace, name) {
        const model = new _rbd_model__WEBPACK_IMPORTED_MODULE_22__.RbdModel();
        model.id = '-1';
        model.unique_id = '-1';
        model.name = name;
        model.namespace = namespace;
        model.pool_name = pool;
        model.image_format = _rbd_model__WEBPACK_IMPORTED_MODULE_22__.RBDImageFormat.V2;
        return model;
    }
    ngOnInit() {
        this.columns = [
            {
                name: "Name",
                prop: 'name',
                flexGrow: 2,
                cellTemplate: this.removingStatTpl
            },
            {
                name: "Pool",
                prop: 'pool_name',
                flexGrow: 2
            },
            {
                name: "Namespace",
                prop: 'namespace',
                flexGrow: 2
            },
            {
                name: "Size",
                prop: 'size',
                flexGrow: 1,
                cellClass: 'text-right',
                sortable: false,
                pipe: this.dimlessBinaryPipe
            },
            {
                name: "Objects",
                prop: 'num_objs',
                flexGrow: 1,
                cellClass: 'text-right',
                sortable: false,
                pipe: this.dimlessPipe
            },
            {
                name: "Object size",
                prop: 'obj_size',
                flexGrow: 1,
                cellClass: 'text-right',
                sortable: false,
                pipe: this.dimlessBinaryPipe
            },
            {
                name: "Provisioned",
                prop: 'disk_usage',
                cellClass: 'text-center',
                flexGrow: 1,
                pipe: this.dimlessBinaryPipe,
                sortable: false,
                cellTemplate: this.provisionedNotAvailableTooltipTpl
            },
            {
                name: "Total provisioned",
                prop: 'total_disk_usage',
                cellClass: 'text-center',
                flexGrow: 1,
                pipe: this.dimlessBinaryPipe,
                sortable: false,
                cellTemplate: this.totalProvisionedNotAvailableTooltipTpl
            },
            {
                name: "Parent",
                prop: 'parent',
                flexGrow: 2,
                sortable: false,
                cellTemplate: this.parentTpl
            },
            {
                name: "Mirroring",
                prop: 'mirror_mode',
                flexGrow: 3,
                sortable: false,
                cellTemplate: this.mirroringTpl
            },
            {
                name: "Next Scheduled Snapshot",
                prop: 'mirror_mode',
                flexGrow: 3,
                sortable: false,
                cellTemplate: this.scheduleTpl
            }
        ];
        const itemFilter = (entry, task) => {
            let taskImageSpec;
            switch (task.name) {
                case 'rbd/copy':
                    taskImageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__.ImageSpec(task.metadata['dest_pool_name'], task.metadata['dest_namespace'], task.metadata['dest_image_name']).toString();
                    break;
                case 'rbd/clone':
                    taskImageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__.ImageSpec(task.metadata['child_pool_name'], task.metadata['child_namespace'], task.metadata['child_image_name']).toString();
                    break;
                case 'rbd/create':
                    taskImageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__.ImageSpec(task.metadata['pool_name'], task.metadata['namespace'], task.metadata['image_name']).toString();
                    break;
                default:
                    taskImageSpec = task.metadata['image_spec'];
                    break;
            }
            return (taskImageSpec === new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__.ImageSpec(entry.pool_name, entry.namespace, entry.name).toString());
        };
        const taskFilter = (task) => {
            return [
                'rbd/clone',
                'rbd/copy',
                'rbd/create',
                'rbd/delete',
                'rbd/edit',
                'rbd/flatten',
                'rbd/trash/move'
            ].includes(task.name);
        };
        this.taskListService.init((context) => this.getRbdImages(context), (resp) => this.prepareResponse(resp), (images) => (this.images = images), () => this.onFetchError(), taskFilter, itemFilter, this.builders);
    }
    onFetchError() {
        this.table.reset(); // Disable loading indicator.
        this.tableStatus = new _app_shared_classes_table_status__WEBPACK_IMPORTED_MODULE_2__.TableStatus('danger');
    }
    getRbdImages(context) {
        var _a;
        if (context !== null) {
            this.tableContext = context;
        }
        if (this.tableContext == null) {
            this.tableContext = new _app_shared_models_cd_table_fetch_data_context__WEBPACK_IMPORTED_MODULE_8__.CdTableFetchDataContext(() => undefined);
        }
        return this.rbdService.list((_a = this.tableContext) === null || _a === void 0 ? void 0 : _a.toParams());
    }
    prepareResponse(resp) {
        let images = [];
        resp.forEach((pool) => {
            images = images.concat(pool.value);
        });
        images.forEach((image) => {
            if (image.schedule_info !== undefined) {
                let scheduling = [];
                const scheduleStatus = 'scheduled';
                let nextSnapshotDate = +new Date(image.schedule_info.schedule_time);
                const offset = new Date().getTimezoneOffset();
                nextSnapshotDate = nextSnapshotDate + Math.abs(offset) * 60000;
                scheduling.push(image.mirror_mode, scheduleStatus, nextSnapshotDate);
                image.mirror_mode = scheduling;
                scheduling = [];
            }
        });
        if (images.length > 0) {
            this.count = _app_shared_services_cd_table_server_side_service__WEBPACK_IMPORTED_MODULE_15__.CdTableServerSideService.getCount(resp[0]);
        }
        else {
            this.count = 0;
        }
        return images;
    }
    updateSelection(selection) {
        this.selection = selection;
    }
    deleteRbdModal() {
        const poolName = this.selection.first().pool_name;
        const namespace = this.selection.first().namespace;
        const imageName = this.selection.first().name;
        const imageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__.ImageSpec(poolName, namespace, imageName);
        this.modalRef = this.modalService.show(_app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_4__.CriticalConfirmationModalComponent, {
            itemDescription: 'RBD',
            itemNames: [imageSpec],
            bodyTemplate: this.deleteTpl,
            bodyContext: {
                hasSnapshots: this.hasSnapshots(),
                snapshots: this.listProtectedSnapshots()
            },
            submitActionObservable: () => this.taskWrapper.wrapTaskAroundCall({
                task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_10__.FinishedTask('rbd/delete', {
                    image_spec: imageSpec.toString()
                }),
                call: this.rbdService.delete(imageSpec)
            })
        });
    }
    resyncRbdModal() {
        const poolName = this.selection.first().pool_name;
        const namespace = this.selection.first().namespace;
        const imageName = this.selection.first().name;
        const imageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__.ImageSpec(poolName, namespace, imageName);
        this.modalRef = this.modalService.show(_app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_4__.CriticalConfirmationModalComponent, {
            itemDescription: 'RBD',
            itemNames: [imageSpec],
            actionDescription: 'resync',
            submitActionObservable: () => this.taskWrapper.wrapTaskAroundCall({
                task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_10__.FinishedTask('rbd/edit', {
                    image_spec: imageSpec.toString()
                }),
                call: this.rbdService.update(imageSpec, { resync: true })
            })
        });
    }
    trashRbdModal() {
        const initialState = {
            poolName: this.selection.first().pool_name,
            namespace: this.selection.first().namespace,
            imageName: this.selection.first().name,
            hasSnapshots: this.hasSnapshots()
        };
        this.modalRef = this.modalService.show(_rbd_trash_move_modal_rbd_trash_move_modal_component__WEBPACK_IMPORTED_MODULE_21__.RbdTrashMoveModalComponent, initialState);
    }
    flattenRbd(imageSpec) {
        this.taskWrapper
            .wrapTaskAroundCall({
            task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_10__.FinishedTask('rbd/flatten', {
                image_spec: imageSpec.toString()
            }),
            call: this.rbdService.flatten(imageSpec)
        })
            .subscribe({
            complete: () => {
                this.modalRef.close();
            }
        });
    }
    flattenRbdModal() {
        const poolName = this.selection.first().pool_name;
        const namespace = this.selection.first().namespace;
        const imageName = this.selection.first().name;
        const parent = this.selection.first().parent;
        const parentImageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__.ImageSpec(parent.pool_name, parent.pool_namespace, parent.image_name);
        const childImageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__.ImageSpec(poolName, namespace, imageName);
        const initialState = {
            titleText: 'RBD flatten',
            buttonText: 'Flatten',
            bodyTpl: this.flattenTpl,
            bodyData: {
                parent: `${parentImageSpec}@${parent.snap_name}`,
                child: childImageSpec.toString()
            },
            onSubmit: () => {
                this.flattenRbd(childImageSpec);
            }
        };
        this.modalRef = this.modalService.show(_app_shared_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmationModalComponent, initialState);
    }
    editRequest() {
        const request = new _rbd_form_rbd_form_edit_request_model__WEBPACK_IMPORTED_MODULE_20__.RbdFormEditRequestModel();
        request.remove_scheduling = !request.remove_scheduling;
        return request;
    }
    removeSchedulingModal() {
        const imageName = this.selection.first().name;
        const imageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__.ImageSpec(this.selection.first().pool_name, this.selection.first().namespace, this.selection.first().name);
        this.modalRef = this.modalService.show(_app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_4__.CriticalConfirmationModalComponent, {
            actionDescription: 'remove scheduling on',
            itemDescription: "image",
            itemNames: [`${imageName}`],
            submitActionObservable: () => new rxjs__WEBPACK_IMPORTED_MODULE_28__.Observable((observer) => {
                this.taskWrapper
                    .wrapTaskAroundCall({
                    task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_10__.FinishedTask('rbd/edit', {
                        image_spec: imageSpec.toString()
                    }),
                    call: this.rbdService.update(imageSpec, this.editRequest())
                })
                    .subscribe({
                    error: (resp) => observer.error(resp),
                    complete: () => {
                        this.modalRef.close();
                    }
                });
            })
        });
    }
    actionPrimary(primary) {
        const request = new _rbd_form_rbd_form_edit_request_model__WEBPACK_IMPORTED_MODULE_20__.RbdFormEditRequestModel();
        request.primary = primary;
        request.features = null;
        const imageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__.ImageSpec(this.selection.first().pool_name, this.selection.first().namespace, this.selection.first().name);
        this.taskWrapper
            .wrapTaskAroundCall({
            task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_10__.FinishedTask('rbd/edit', {
                image_spec: imageSpec.toString()
            }),
            call: this.rbdService.update(imageSpec, request)
        })
            .subscribe();
    }
    hasSnapshots() {
        const snapshots = this.selection.first()['snapshots'] || [];
        return snapshots.length > 0;
    }
    hasClonedSnapshots(image) {
        const snapshots = image['snapshots'] || [];
        return snapshots.some((snap) => snap['children'] && snap['children'].length > 0);
    }
    listProtectedSnapshots() {
        const first = this.selection.first();
        const snapshots = first['snapshots'];
        return snapshots.reduce((accumulator, snap) => {
            if (snap['is_protected']) {
                accumulator.push(snap['name']);
            }
            return accumulator;
        }, []);
    }
    getDeleteDisableDesc(selection) {
        const first = selection.first();
        if (first && this.hasClonedSnapshots(first)) {
            return "This RBD has cloned snapshots. Please delete related RBDs before deleting this RBD.";
        }
        return this.getInvalidNameDisable(selection) || this.hasClonedSnapshots(selection.first());
    }
    getResyncDisableDesc(selection) {
        const first = selection.first();
        if (first && this.imageIsPrimary(first)) {
            return "Primary RBD images cannot be resynced";
        }
        return this.getInvalidNameDisable(selection);
    }
    imageIsPrimary(image) {
        return image['primary'];
    }
    getInvalidNameDisable(selection) {
        var _a;
        const first = selection.first();
        if ((_a = first === null || first === void 0 ? void 0 : first.name) === null || _a === void 0 ? void 0 : _a.match(/[@/]/)) {
            return "This RBD image has an invalid name and can't be managed by ceph.";
        }
        return !selection.first() || !selection.hasSingleSelection;
    }
    getRemovingStatusDesc(selection) {
        const first = selection.first();
        if ((first === null || first === void 0 ? void 0 : first.source) === 'REMOVING') {
            return "Action not possible for an RBD in status 'Removing'";
        }
        return false;
    }
}
RbdListComponent.ɵfac = function RbdListComponent_Factory(t) { return new (t || RbdListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_14__.AuthStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_0__.RbdService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_pipes_dimless_binary_pipe__WEBPACK_IMPORTED_MODULE_12__.DimlessBinaryPipe), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_pipes_dimless_pipe__WEBPACK_IMPORTED_MODULE_13__.DimlessPipe), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_16__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_18__.TaskWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_17__.TaskListService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_19__.URLBuilderService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__.ActionLabelsI18n)); };
RbdListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineComponent"]({ type: RbdListComponent, selectors: [["cd-rbd-list"]], viewQuery: function RbdListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_6__.TableComponent, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c3, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c4, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c5, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c7, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c9, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.usageTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.parentTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.nameTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.scheduleTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.mirroringTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.flattenTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.deleteTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.removingStatTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.provisionedNotAvailableTooltipTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.totalProvisionedNotAvailableTooltipTpl = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵProvidersFeature"]([
            _app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_17__.TaskListService,
            { provide: _app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_19__.URLBuilderService, useValue: new _app_shared_services_url_builder_service__WEBPACK_IMPORTED_MODULE_19__.URLBuilderService(BASE_URL) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵInheritDefinitionFeature"]], decls: 23, vars: 13, consts: function () { let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6811901802533648897$$SRC_APP_CEPH_BLOCK_RBD_LIST_RBD_LIST_COMPONENT_TS___11 = goog.getMsg("N/A");
        i18n_10 = MSG_EXTERNAL_6811901802533648897$$SRC_APP_CEPH_BLOCK_RBD_LIST_RBD_LIST_COMPONENT_TS___11;
    }
    else {
        i18n_10 = "N/A";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2916864750986889249$$SRC_APP_CEPH_BLOCK_RBD_LIST_RBD_LIST_COMPONENT_TS___13 = goog.getMsg("{$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_12 = MSG_EXTERNAL_2916864750986889249$$SRC_APP_CEPH_BLOCK_RBD_LIST_RBD_LIST_COMPONENT_TS___13;
    }
    else {
        i18n_12 = "" + "\uFFFD0\uFFFD" + "";
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6811901802533648897$$SRC_APP_CEPH_BLOCK_RBD_LIST_RBD_LIST_COMPONENT_TS___15 = goog.getMsg("N/A");
        i18n_14 = MSG_EXTERNAL_6811901802533648897$$SRC_APP_CEPH_BLOCK_RBD_LIST_RBD_LIST_COMPONENT_TS___15;
    }
    else {
        i18n_14 = "N/A";
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2389587873539649039$$SRC_APP_CEPH_BLOCK_RBD_LIST_RBD_LIST_COMPONENT_TS___17 = goog.getMsg("{$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_16 = MSG_EXTERNAL_2389587873539649039$$SRC_APP_CEPH_BLOCK_RBD_LIST_RBD_LIST_COMPONENT_TS___17;
    }
    else {
        i18n_16 = "" + "\uFFFD0\uFFFD" + "";
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6966257120197587982$$SRC_APP_CEPH_BLOCK_RBD_LIST_RBD_LIST_COMPONENT_TS___19 = goog.getMsg("primary");
        i18n_18 = MSG_EXTERNAL_6966257120197587982$$SRC_APP_CEPH_BLOCK_RBD_LIST_RBD_LIST_COMPONENT_TS___19;
    }
    else {
        i18n_18 = "primary";
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2093410769944345568$$SRC_APP_CEPH_BLOCK_RBD_LIST_RBD_LIST_COMPONENT_TS___21 = goog.getMsg("secondary");
        i18n_20 = MSG_EXTERNAL_2093410769944345568$$SRC_APP_CEPH_BLOCK_RBD_LIST_RBD_LIST_COMPONENT_TS___21;
    }
    else {
        i18n_20 = "secondary";
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6216813477472533999$$SRC_APP_CEPH_BLOCK_RBD_LIST_RBD_LIST_COMPONENT_TS___23 = goog.getMsg("Deleting this image will also delete all its snapshots.");
        i18n_22 = MSG_EXTERNAL_6216813477472533999$$SRC_APP_CEPH_BLOCK_RBD_LIST_RBD_LIST_COMPONENT_TS___23;
    }
    else {
        i18n_22 = "Deleting this image will also delete all its snapshots.";
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7253619115563450917$$SRC_APP_CEPH_BLOCK_RBD_LIST_RBD_LIST_COMPONENT_TS____25 = goog.getMsg("The following snapshots are currently protected and will be removed:");
        i18n_24 = MSG_EXTERNAL_7253619115563450917$$SRC_APP_CEPH_BLOCK_RBD_LIST_RBD_LIST_COMPONENT_TS____25;
    }
    else {
        i18n_24 = "The following snapshots are currently protected and will be removed:";
    } let i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8252859511015934313$$SRC_APP_CEPH_BLOCK_RBD_LIST_RBD_LIST_COMPONENT_TS__27 = goog.getMsg("RBD in status 'Removing'");
        i18n_26 = MSG_EXTERNAL_8252859511015934313$$SRC_APP_CEPH_BLOCK_RBD_LIST_RBD_LIST_COMPONENT_TS__27;
    }
    else {
        i18n_26 = "RBD in status 'Removing'";
    } return [["columnMode", "flex", "identifier", "unique_id", "forceIdentifier", "true", "selectionType", "single", 3, "data", "columns", "searchableObjects", "serverSide", "count", "hasDetails", "status", "maxLimit", "autoReload", "fetchData", "setExpandedRow", "updateSelection"], ["table", ""], [1, "table-actions", 3, "permission", "selection", "tableActions"], ["cdTableDetail", "", 3, "selection"], ["scheduleStatus", ""], ["provisionedNotAvailableTooltipTpl", ""], ["totalProvisionedNotAvailableTooltipTpl", ""], ["parentTpl", ""], ["mirroringTpl", ""], ["scheduleTpl", ""], ["flattenTpl", ""], ["deleteTpl", ""], ["removingStatTpl", ""], [3, "innerHtml"], ["placement", "top", 3, "ngbTooltip", 4, "ngIf", "ngIfElse"], ["provisioned", ""], ["placement", "top", 3, "ngbTooltip"], i18n_10, i18n_12, ["totalProvisioned", ""], i18n_14, i18n_16, [4, "ngIf"], ["class", "badge badge-info", 4, "ngIf", "ngIfElse"], ["class", "badge badge-info", 4, "ngIf"], ["probb", ""], [1, "badge", "badge-info"], i18n_18, i18n_20, ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-warning"], i18n_22, i18n_24, [4, "ngFor", "ngForOf"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["title", i18n_26, 3, "class", 4, "ngIf"], ["title", i18n_26]]; }, template: function RbdListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "cd-rbd-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](1, "cd-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("fetchData", function RbdListComponent_Template_cd_table_fetchData_1_listener($event) { return ctx.taskListService.fetch($event); })("setExpandedRow", function RbdListComponent_Template_cd_table_setExpandedRow_1_listener($event) { return ctx.setExpandedRow($event); })("updateSelection", function RbdListComponent_Template_cd_table_updateSelection_1_listener($event) { return ctx.updateSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](3, "cd-table-actions", 2)(4, "cd-rbd-details", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](5, RbdListComponent_ng_template_5_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](7, RbdListComponent_ng_template_7_Template, 3, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](9, RbdListComponent_ng_template_9_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](11, RbdListComponent_ng_template_11_Template, 2, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](13, RbdListComponent_ng_template_13_Template, 8, 5, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](15, RbdListComponent_ng_template_15_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](17, RbdListComponent_ng_template_17_Template, 13, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](19, RbdListComponent_ng_template_19_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](21, RbdListComponent_ng_template_21_Template, 5, 5, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("data", ctx.images)("columns", ctx.columns)("searchableObjects", true)("serverSide", true)("count", ctx.count)("hasDetails", true)("status", ctx.tableStatus)("maxLimit", 25)("autoReload", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("permission", ctx.permission)("selection", ctx.selection)("tableActions", ctx.tableActions);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("selection", ctx.expandedRow);
    } }, directives: [_rbd_tabs_rbd_tabs_component__WEBPACK_IMPORTED_MODULE_23__.RbdTabsComponent, _app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_6__.TableComponent, _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_24__.TableActionsComponent, _rbd_details_rbd_details_component__WEBPACK_IMPORTED_MODULE_25__.RbdDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_30__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgClass], pipes: [_app_shared_pipes_dimless_binary_pipe__WEBPACK_IMPORTED_MODULE_12__.DimlessBinaryPipe, _shared_pipes_cd_date_pipe__WEBPACK_IMPORTED_MODULE_26__.CdDatePipe], styles: [".warn[_ngcontent-%COMP%] {\n  color: #d48200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0eWxlcy92ZW5kb3IvX3ZhcmlhYmxlcy5zY3NzIiwicmJkLWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsZXMvZGVmYXVsdHMvX2Jvb3RzdHJhcC1kZWZhdWx0cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0NBQUE7QUFNQTs7Ozs7Ozs7O0NBQUE7QUNKQTtFQUNFLGNDaUJPO0FESFQiLCJmaWxlIjoicmJkLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBWZW5kb3Igc3BlY2lmaWMgdmFyaWFibGVzXG5cbkV4YW1wbGU6XG4kbXktYWNjZW50LWNvbG9yOiAjYTE4ZmZmXG4qL1xuXG4vKiBCb290c3RyYXAgdmFyaWFibGVzIHRoYXQgYXJlIGFscmVhZHkgZGVmaW5lZCBjYW4gYmUgb3ZlcnJpZGRlbiB1c2luZyBjb25maWd1cmF0aW9uOlxuaHR0cHM6Ly9zYXNzLWxhbmcuY29tL2RvY3VtZW50YXRpb24vYXQtcnVsZXMvZm9yd2FyZCNjb25maWd1cmluZy1tb2R1bGVzXG5cbkV4YW1wbGU6XG5AZm9yd2FyZCAnLi4vZGVmYXVsdHMvYm9vdHN0cmFwLWRlZmF1bHRzJyB3aXRoIChcbiAgJHRoZW1lLWNvbG9yczogKFxuICAgICdhY2NlbnQnOiAkbXktYWNjZW50LWNvbG9yXG4gIClcbik7XG4qL1xuQGZvcndhcmQgJy4uL2RlZmF1bHRzL2Jvb3RzdHJhcC1kZWZhdWx0cyc7XG4iLCJAdXNlICcuL3NyYy9zdHlsZXMvdmVuZG9yL3ZhcmlhYmxlcycgYXMgdnY7XG5cbi53YXJuIHtcbiAgY29sb3I6IHZ2LiR3YXJuaW5nO1xufVxuIiwiLy8gQ29sb3Igc3lzdGVtXG5cbiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcblxuJGJsdWU6ICMwMDdiZmYgIWRlZmF1bHQ7XG4kaW5kaWdvOiAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogIzZmNDJjMSAhZGVmYXVsdDtcbiRwaW5rOiAjYTk0NDQyICFkZWZhdWx0O1xuJHJlZDogI2RjMzU0NSAhZGVmYXVsdDtcbiRvcmFuZ2U6ICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAjZDQ4MjAwICFkZWZhdWx0O1xuJGdyZWVuOiAjMDA4YTAwICFkZWZhdWx0O1xuJHRlYWw6ICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogIzE3YTJiOCAhZGVmYXVsdDtcbiRiYXJsZXktd2hpdGU6ICNmY2VjYmEgIWRlZmF1bHQ7XG5cbiRwcmltYXJ5OiAjMjU4MjhlICFkZWZhdWx0O1xuJHByaW1hcnktNTAwOiAjMmI5OWE4ICFkZWZhdWx0O1xuJHNlY29uZGFyeTogIzM3NDI0OSAhZGVmYXVsdDtcbiRzdWNjZXNzOiAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogJHByaW1hcnkgIWRlZmF1bHQ7XG4kd2FybmluZzogJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICRncmF5LTEwMCAhZGVmYXVsdDtcbiRkYXJrOiAkZ3JheS04MDAgIWRlZmF1bHQ7XG5cbi8vYmFkZ2VzIGNvbG9yc1xuJGdyZWVuLTMwMDogIzZlYzY2NDtcbiRjeWFuLTMwMDogIzAwOTU5NjtcbiRwdXJwbGUtMzAwOiAjYTE4ZmZmO1xuJGxpZ2h0LWJsdWUtMzAwOiAjMzVjYWVkO1xuJGdvbGQtMzAwOiAjZjRjMTQ1O1xuJGxpZ2h0LWdyZWVuLTMwMDogI2FjZTEyZTtcblxuLy8gRXh0cmEgdGhlbWUgY29sb3JzLlxuJGFjY2VudDogJHByaW1hcnkgIWRlZmF1bHQ7XG4kd2FybmluZy1kYXJrOiAkb3JhbmdlICFkZWZhdWx0O1xuXG4kZmctY29sb3Itb3Zlci1kYXJrLWJnOiAkd2hpdGUgIWRlZmF1bHQ7XG4kZmctaG92ZXItY29sb3Itb3Zlci1kYXJrLWJnOiAkZ3JheS01MDAgIWRlZmF1bHQ7XG5cbiR0aGVtZS1jb2xvcnM6IChcbiAgJ2FjY2VudCc6ICRhY2NlbnQsXG4gICd3YXJuaW5nLWRhcmsnOiAkd2FybmluZy1kYXJrLFxuICAncHJpbWFyeSc6ICRhY2NlbnQsXG4gICdzZWNvbmRhcnknOiAkc2Vjb25kYXJ5LFxuICAnc3VjY2Vzcyc6ICRzdWNjZXNzLFxuICAnaW5mbyc6ICRpbmZvLFxuICAnd2FybmluZyc6ICR3YXJuaW5nLFxuICAnZGFuZ2VyJzogJGRhbmdlcixcbiAgJ2xpZ2h0JzogJGxpZ2h0LFxuICAnZGFyayc6ICRkYXJrXG4pICFkZWZhdWx0O1xuXG4vLyBCb2R5XG4kYm9keS1jb2xvci1icmlnaHQ6ICRsaWdodCAhZGVmYXVsdDtcbiRib2R5LWJnOiAkd2hpdGUgIWRlZmF1bHQ7XG4kYm9keS1jb2xvcjogJGdyYXktOTAwICFkZWZhdWx0O1xuJGJvZHktYmctYWx0OiAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbi8vIEhlYWx0aCBjb2xvcnMuXG4kaGVhbHRoLWNvbG9yLWVycm9yOiAkcmVkICFkZWZhdWx0O1xuJGhlYWx0aC1jb2xvci1oZWFsdGh5OiAkZ3JlZW4gIWRlZmF1bHQ7XG4kaGVhbHRoLWNvbG9yLXdhcm5pbmc6ICR5ZWxsb3cgIWRlZmF1bHQ7XG4kaGVhbHRoLWNvbG9yLXdhcm5pbmctODAwOiAjOWQ2ZDEwICFkZWZhdWx0O1xuXG4vLyBDaGFydCBjb2xvcnMuXG4kY2hhcnQtY29sb3ItcmVkOiAkcmVkICFkZWZhdWx0O1xuJGNoYXJ0LWNvbG9yLWJsdWU6ICMwNmMgIWRlZmF1bHQ7XG4kY2hhcnQtY29sb3Itb3JhbmdlOiAjZWY5MjM0ICFkZWZhdWx0O1xuJGNoYXJ0LWNvbG9yLXllbGxvdzogI2Y2ZDE3MyAhZGVmYXVsdDtcbiRjaGFydC1jb2xvci1ncmVlbjogJGdyZWVuICFkZWZhdWx0O1xuJGNoYXJ0LWNvbG9yLWdyYXk6ICNlZGVkZWQgIWRlZmF1bHQ7XG4kY2hhcnQtY29sb3ItY3lhbjogJHByaW1hcnktNTAwICFkZWZhdWx0O1xuJGNoYXJ0LWNvbG9yLXB1cnBsZTogIzNjM2Q5OSAhZGVmYXVsdDtcbiRjaGFydC1jb2xvci1jZW50ZXItdGV4dDogIzE1MTUxNSAhZGVmYXVsdDtcbiRjaGFydC1jb2xvci1jZW50ZXItdGV4dC1kZXNjcmlwdGlvbjogIzcyNzY3YiAhZGVmYXVsdDtcbiRjaGFydC1jb2xvci10b29sdGlwLWJhY2tncm91bmQ6ICRibGFjayAhZGVmYXVsdDtcbiRjaGFydC1kYW5nZXI6ICNjOTE5MGIgIWRlZmF1bHQ7XG5cbi8vIFR5cG9ncmFwaHlcblxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmLFxuICAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJywgJ05vdG8gQ29sb3IgRW1vamknICFkZWZhdWx0O1xuXG4vLyBDYXJkXG5cbiRjYXJkLWNhcC1iZzogJGdyYXktMTAwICFkZWZhdWx0O1xuXG4vLyBHcmlkXG5cbiRncmlkLWd1dHRlci13aWR0aDogMzBweCAhZGVmYXVsdDtcblxuLy8gVGFibGVcblxuJGRhdGF0YWJsZS1kaXZpZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4wOSkgIWRlZmF1bHQ7XG5cbi8vIE5hdnNcblxuJG5hdi10YWJzLW1hcmdpbi1ib3R0b206IDFyZW0gIWRlZmF1bHQ7XG5cbi8vIFRvb2x0aXBzXG5cbiR0b29sdGlwLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XG4kdG9vbHRpcC1iZzogJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kdG9vbHRpcC1vcGFjaXR5OiAxICFkZWZhdWx0O1xuXG4vLyBNaXNjXG5cbiRzY3JlZW4tc20tbWluOiA1NzZweCAhZGVmYXVsdDtcbiRzY3JlZW4tbWQtbWluOiA3NjhweCAhZGVmYXVsdDtcbiRzY3JlZW4tbGctbWluOiA5OTJweCAhZGVmYXVsdDtcbiRzY3JlZW4teGwtbWluOiAxMjAwcHggIWRlZmF1bHQ7XG5cbiRzY3JlZW4teHMtbWF4OiBjYWxjKCN7JHNjcmVlbi1zbS1taW59IC0gMXB4KSAhZGVmYXVsdDtcbiRzY3JlZW4tc20tbWF4OiBjYWxjKCN7JHNjcmVlbi1tZC1taW59IC0gMXB4KSAhZGVmYXVsdDtcbiRzY3JlZW4tbWQtbWF4OiBjYWxjKCN7JHNjcmVlbi1sZy1taW59IC0gMXB4KSAhZGVmYXVsdDtcbiRzY3JlZW4tbGctbWF4OiBjYWxjKCN7JHNjcmVlbi14bC1taW59IC0gMXB4KSAhZGVmYXVsdDtcblxuJG5hdmJhci1oZWlnaHQ6IDQzcHggIWRlZmF1bHQ7XG4iXX0= */"] });


/***/ }),

/***/ 23272:
/*!**************************************************!*\
  !*** ./src/app/ceph/block/rbd-list/rbd-model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RBDImageFormat": () => (/* binding */ RBDImageFormat),
/* harmony export */   "RbdModel": () => (/* binding */ RbdModel)
/* harmony export */ });
class RbdModel {
}
var RBDImageFormat;
(function (RBDImageFormat) {
    RBDImageFormat[RBDImageFormat["V1"] = 1] = "V1";
    RBDImageFormat[RBDImageFormat["V2"] = 2] = "V2";
})(RBDImageFormat || (RBDImageFormat = {}));


/***/ }),

/***/ 7181:
/*!*************************************************************************************!*\
  !*** ./src/app/ceph/block/rbd-namespace-form/rbd-namespace-form-modal.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdNamespaceFormModalComponent": () => (/* binding */ RbdNamespaceFormModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/api/pool.service */ 80842);
/* harmony import */ var _app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/rbd.service */ 23170);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/enum/notification-type.enum */ 18001);
/* harmony import */ var _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-group */ 95463);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 79247);
/* harmony import */ var _app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/services/notification.service */ 97161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/directives/autofocus.directive */ 82945);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 30839);



























function RbdNamespaceFormModalComponent_input_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "input", 19);
} }
function RbdNamespaceFormModalComponent_select_12_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngValue", null);
} }
function RbdNamespaceFormModalComponent_select_12_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngValue", null);
} }
function RbdNamespaceFormModalComponent_select_12_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngValue", null);
} }
function RbdNamespaceFormModalComponent_select_12_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pool_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", pool_r10.pool_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](pool_r10.pool_name);
} }
function RbdNamespaceFormModalComponent_select_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, RbdNamespaceFormModalComponent_select_12_option_1_Template, 2, 1, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, RbdNamespaceFormModalComponent_select_12_option_2_Template, 2, 1, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, RbdNamespaceFormModalComponent_select_12_option_3_Template, 2, 1, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, RbdNamespaceFormModalComponent_select_12_option_4_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.pools === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.pools !== null && ctx_r2.pools.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.pools !== null && ctx_r2.pools.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.pools);
} }
function RbdNamespaceFormModalComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function RbdNamespaceFormModalComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function RbdNamespaceFormModalComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
class RbdNamespaceFormModalComponent {
    constructor(activeModal, actionLabels, authStorageService, notificationService, poolService, rbdService) {
        this.activeModal = activeModal;
        this.actionLabels = actionLabels;
        this.authStorageService = authStorageService;
        this.notificationService = notificationService;
        this.poolService = poolService;
        this.rbdService = rbdService;
        this.pools = null;
        this.editing = false;
        this.poolPermission = this.authStorageService.getPermissions().pool;
        this.createForm();
    }
    createForm() {
        this.namespaceForm = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_4__.CdFormGroup({
            pool: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
            namespace: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('')
        }, this.validator(), this.asyncValidator());
    }
    validator() {
        return (control) => {
            const poolCtrl = control.get('pool');
            const namespaceCtrl = control.get('namespace');
            let poolErrors = null;
            if (!poolCtrl.value) {
                poolErrors = { required: true };
            }
            poolCtrl.setErrors(poolErrors);
            let namespaceErrors = null;
            if (!namespaceCtrl.value) {
                namespaceErrors = { required: true };
            }
            namespaceCtrl.setErrors(namespaceErrors);
            return null;
        };
    }
    asyncValidator() {
        return (control) => {
            return new Promise((resolve) => {
                const poolCtrl = control.get('pool');
                const namespaceCtrl = control.get('namespace');
                this.rbdService.listNamespaces(poolCtrl.value).subscribe((namespaces) => {
                    if (namespaces.some((ns) => ns.namespace === namespaceCtrl.value)) {
                        const error = { namespaceExists: true };
                        namespaceCtrl.setErrors(error);
                        resolve(error);
                    }
                    else {
                        resolve(null);
                    }
                });
            });
        };
    }
    ngOnInit() {
        this.onSubmit = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject();
        if (this.poolPermission.read) {
            this.poolService.list(['pool_name', 'type', 'application_metadata']).then((resp) => {
                const pools = [];
                for (const pool of resp) {
                    if (this.rbdService.isRBDPool(pool) && pool.type === 'replicated') {
                        pools.push(pool);
                    }
                }
                this.pools = pools;
                if (this.pools.length === 1) {
                    const poolName = this.pools[0]['pool_name'];
                    this.namespaceForm.get('pool').setValue(poolName);
                }
            });
        }
    }
    submit() {
        const pool = this.namespaceForm.getValue('pool');
        const namespace = this.namespaceForm.getValue('namespace');
        const finishedTask = new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_5__.FinishedTask();
        finishedTask.name = 'rbd/namespace/create';
        finishedTask.metadata = {
            pool: pool,
            namespace: namespace
        };
        this.rbdService
            .createNamespace(pool, namespace)
            .toPromise()
            .then(() => {
            this.notificationService.show(_app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_3__.NotificationType.success, "Created namespace '" + pool + "/" + namespace + "'");
            this.activeModal.close();
            this.onSubmit.next();
        })
            .catch(() => {
            this.namespaceForm.setErrors({ cdSubmitButton: true });
        });
    }
}
RbdNamespaceFormModalComponent.ɵfac = function RbdNamespaceFormModalComponent_Factory(t) { return new (t || RbdNamespaceFormModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__.ActionLabelsI18n), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_6__.AuthStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_0__.PoolService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_1__.RbdService)); };
RbdNamespaceFormModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: RbdNamespaceFormModalComponent, selectors: [["cd-rbd-namespace-form-modal"]], decls: 23, vars: 9, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4198266245735383111$$SRC_APP_CEPH_BLOCK_RBD_NAMESPACE_FORM_RBD_NAMESPACE_FORM_MODAL_COMPONENT_TS_1 = goog.getMsg("Create Namespace");
        i18n_0 = MSG_EXTERNAL_4198266245735383111$$SRC_APP_CEPH_BLOCK_RBD_NAMESPACE_FORM_RBD_NAMESPACE_FORM_MODAL_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "Create Namespace";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7101197021456818771$$SRC_APP_CEPH_BLOCK_RBD_NAMESPACE_FORM_RBD_NAMESPACE_FORM_MODAL_COMPONENT_TS_3 = goog.getMsg("Pool");
        i18n_2 = MSG_EXTERNAL_7101197021456818771$$SRC_APP_CEPH_BLOCK_RBD_NAMESPACE_FORM_RBD_NAMESPACE_FORM_MODAL_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "Pool";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_BLOCK_RBD_NAMESPACE_FORM_RBD_NAMESPACE_FORM_MODAL_COMPONENT_TS_5 = goog.getMsg("Name");
        i18n_4 = MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_BLOCK_RBD_NAMESPACE_FORM_RBD_NAMESPACE_FORM_MODAL_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "Name";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_BLOCK_RBD_NAMESPACE_FORM_RBD_NAMESPACE_FORM_MODAL_COMPONENT_TS___7 = goog.getMsg("Loading...");
        i18n_6 = MSG_EXTERNAL_3894950702316166331$$SRC_APP_CEPH_BLOCK_RBD_NAMESPACE_FORM_RBD_NAMESPACE_FORM_MODAL_COMPONENT_TS___7;
    }
    else {
        i18n_6 = "Loading...";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7409869370957226155$$SRC_APP_CEPH_BLOCK_RBD_NAMESPACE_FORM_RBD_NAMESPACE_FORM_MODAL_COMPONENT_TS___9 = goog.getMsg("-- No rbd pools available --");
        i18n_8 = MSG_EXTERNAL_7409869370957226155$$SRC_APP_CEPH_BLOCK_RBD_NAMESPACE_FORM_RBD_NAMESPACE_FORM_MODAL_COMPONENT_TS___9;
    }
    else {
        i18n_8 = "-- No rbd pools available --";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7859304693598053124$$SRC_APP_CEPH_BLOCK_RBD_NAMESPACE_FORM_RBD_NAMESPACE_FORM_MODAL_COMPONENT_TS___11 = goog.getMsg("-- Select a pool --");
        i18n_10 = MSG_EXTERNAL_7859304693598053124$$SRC_APP_CEPH_BLOCK_RBD_NAMESPACE_FORM_RBD_NAMESPACE_FORM_MODAL_COMPONENT_TS___11;
    }
    else {
        i18n_10 = "-- Select a pool --";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_RBD_NAMESPACE_FORM_RBD_NAMESPACE_FORM_MODAL_COMPONENT_TS__13 = goog.getMsg("This field is required.");
        i18n_12 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_RBD_NAMESPACE_FORM_RBD_NAMESPACE_FORM_MODAL_COMPONENT_TS__13;
    }
    else {
        i18n_12 = "This field is required.";
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_RBD_NAMESPACE_FORM_RBD_NAMESPACE_FORM_MODAL_COMPONENT_TS__15 = goog.getMsg("This field is required.");
        i18n_14 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_RBD_NAMESPACE_FORM_RBD_NAMESPACE_FORM_MODAL_COMPONENT_TS__15;
    }
    else {
        i18n_14 = "This field is required.";
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6025806304008767453$$SRC_APP_CEPH_BLOCK_RBD_NAMESPACE_FORM_RBD_NAMESPACE_FORM_MODAL_COMPONENT_TS__17 = goog.getMsg("Namespace already exists.");
        i18n_16 = MSG_EXTERNAL_6025806304008767453$$SRC_APP_CEPH_BLOCK_RBD_NAMESPACE_FORM_RBD_NAMESPACE_FORM_MODAL_COMPONENT_TS__17;
    }
    else {
        i18n_16 = "Namespace already exists.";
    } return [[3, "modalRef"], [1, "modal-title"], i18n_0, [1, "modal-content"], ["name", "namespaceForm", "novalidate", "", 3, "formGroup"], ["formDir", "ngForm"], [1, "modal-body"], [1, "form-group", "row"], ["for", "pool", 1, "cd-col-form-label", "required"], i18n_2, [1, "cd-col-form-input"], ["class", "form-control", "type", "text", "placeholder", "Pool name...", "id", "pool", "name", "pool", "formControlName", "pool", 4, "ngIf"], ["id", "pool", "name", "pool", "class", "form-select", "formControlName", "pool", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "namespace", 1, "cd-col-form-label", "required"], i18n_4, ["type", "text", "placeholder", "Namespace name...", "id", "namespace", "name", "namespace", "formControlName", "namespace", "autofocus", "", 1, "form-control"], [1, "modal-footer"], [3, "form", "submitText", "submitActionEvent"], ["type", "text", "placeholder", "Pool name...", "id", "pool", "name", "pool", "formControlName", "pool", 1, "form-control"], ["id", "pool", "name", "pool", "formControlName", "pool", 1, "form-select"], [3, "ngValue", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngValue"], i18n_6, i18n_8, i18n_10, [3, "value"], [1, "invalid-feedback"], i18n_12, i18n_14, i18n_16]; }, template: function RbdNamespaceFormModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "cd-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "form", 4, 5)(6, "div", 6)(7, "div", 7)(8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](9, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, RbdNamespaceFormModalComponent_input_11_Template, 1, 0, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, RbdNamespaceFormModalComponent_select_12_Template, 5, 4, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, RbdNamespaceFormModalComponent_span_13_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 7)(15, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](16, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, RbdNamespaceFormModalComponent_span_19_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](20, RbdNamespaceFormModalComponent_span_20_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 17)(22, "cd-form-button-panel", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("submitActionEvent", function RbdNamespaceFormModalComponent_Template_cd_form_button_panel_submitActionEvent_22_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.namespaceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.poolPermission.read);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.poolPermission.read);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.namespaceForm.showError("pool", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.namespaceForm.showError("namespace", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.namespaceForm.showError("namespace", _r0, "namespaceExists"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("form", ctx.namespaceForm)("submitText", ctx.actionLabels.CREATE);
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_9__.CdFormValidationDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_10__.CdFormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_11__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_12__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_13__.AutofocusDirective, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_14__.FormButtonPanelComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYmQtbmFtZXNwYWNlLWZvcm0tbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 58344:
/*!*******************************************************************************!*\
  !*** ./src/app/ceph/block/rbd-namespace-list/rbd-namespace-list.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdNamespaceListComponent": () => (/* binding */ RbdNamespaceListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 42720);
/* harmony import */ var _app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/api/pool.service */ 80842);
/* harmony import */ var _app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/rbd.service */ 23170);
/* harmony import */ var _app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/components/critical-confirmation-modal/critical-confirmation-modal.component */ 30982);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 65862);
/* harmony import */ var _app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/enum/notification-type.enum */ 18001);
/* harmony import */ var _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/models/cd-table-selection */ 68774);
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 79247);
/* harmony import */ var _app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/shared/services/modal.service */ 63285);
/* harmony import */ var _app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/shared/services/notification.service */ 97161);
/* harmony import */ var _app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/shared/services/task-list.service */ 38047);
/* harmony import */ var _rbd_namespace_form_rbd_namespace_form_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../rbd-namespace-form/rbd-namespace-form-modal.component */ 7181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _rbd_tabs_rbd_tabs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../rbd-tabs/rbd-tabs.component */ 80208);
/* harmony import */ var _shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/datatable/table/table.component */ 35905);
/* harmony import */ var _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/datatable/table-actions/table-actions.component */ 94928);























class RbdNamespaceListComponent {
    constructor(authStorageService, rbdService, poolService, modalService, notificationService, actionLabels) {
        this.authStorageService = authStorageService;
        this.rbdService = rbdService;
        this.poolService = poolService;
        this.modalService = modalService;
        this.notificationService = notificationService;
        this.actionLabels = actionLabels;
        this.selection = new _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_6__.CdTableSelection();
        this.permission = this.authStorageService.getPermissions().rbdImage;
        const createAction = {
            permission: 'create',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_4__.Icons.add,
            click: () => this.createModal(),
            name: this.actionLabels.CREATE
        };
        const deleteAction = {
            permission: 'delete',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_4__.Icons.destroy,
            click: () => this.deleteModal(),
            name: this.actionLabels.DELETE,
            disable: () => this.getDeleteDisableDesc()
        };
        this.tableActions = [createAction, deleteAction];
    }
    ngOnInit() {
        this.columns = [
            {
                name: "Namespace",
                prop: 'namespace',
                flexGrow: 1
            },
            {
                name: "Pool",
                prop: 'pool',
                flexGrow: 1
            },
            {
                name: "Total images",
                prop: 'num_images',
                flexGrow: 1
            }
        ];
        this.refresh();
    }
    refresh() {
        this.poolService.list(['pool_name', 'type', 'application_metadata']).then((pools) => {
            pools = pools.filter((pool) => this.rbdService.isRBDPool(pool) && pool.type === 'replicated');
            const promisses = [];
            pools.forEach((pool) => {
                promisses.push(this.rbdService.listNamespaces(pool['pool_name']));
            });
            if (promisses.length > 0) {
                (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.forkJoin)(promisses).subscribe((data) => {
                    const result = [];
                    for (let i = 0; i < data.length; i++) {
                        const namespaces = data[i];
                        const pool_name = pools[i]['pool_name'];
                        namespaces.forEach((namespace) => {
                            result.push({
                                id: `${pool_name}/${namespace.namespace}`,
                                pool: pool_name,
                                namespace: namespace.namespace,
                                num_images: namespace.num_images
                            });
                        });
                    }
                    this.namespaces = result;
                });
            }
            else {
                this.namespaces = [];
            }
        });
    }
    updateSelection(selection) {
        this.selection = selection;
    }
    createModal() {
        this.modalRef = this.modalService.show(_rbd_namespace_form_rbd_namespace_form_modal_component__WEBPACK_IMPORTED_MODULE_11__.RbdNamespaceFormModalComponent);
        this.modalRef.componentInstance.onSubmit.subscribe(() => {
            this.refresh();
        });
    }
    deleteModal() {
        const pool = this.selection.first().pool;
        const namespace = this.selection.first().namespace;
        this.modalRef = this.modalService.show(_app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_2__.CriticalConfirmationModalComponent, {
            itemDescription: 'Namespace',
            itemNames: [`${pool}/${namespace}`],
            submitAction: () => this.rbdService.deleteNamespace(pool, namespace).subscribe(() => {
                this.notificationService.show(_app_shared_enum_notification_type_enum__WEBPACK_IMPORTED_MODULE_5__.NotificationType.success, "Deleted namespace '" + pool + "/" + namespace + "'");
                this.modalRef.close();
                this.refresh();
            }, () => {
                this.modalRef.componentInstance.stopLoadingSpinner();
            })
        });
    }
    getDeleteDisableDesc() {
        var _a;
        const first = this.selection.first();
        if ((first === null || first === void 0 ? void 0 : first.num_images) > 0) {
            return "Namespace contains images";
        }
        return !((_a = this.selection) === null || _a === void 0 ? void 0 : _a.first());
    }
}
RbdNamespaceListComponent.ɵfac = function RbdNamespaceListComponent_Factory(t) { return new (t || RbdNamespaceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_7__.AuthStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_1__.RbdService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_0__.PoolService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_9__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__.ActionLabelsI18n)); };
RbdNamespaceListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: RbdNamespaceListComponent, selectors: [["cd-rbd-namespace-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵProvidersFeature"]([_app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_10__.TaskListService])], decls: 4, vars: 5, consts: [["columnMode", "flex", "identifier", "id", "forceIdentifier", "true", "selectionType", "single", 3, "data", "columns", "fetchData", "updateSelection"], [1, "table-actions", "btn-toolbar"], [1, "btn-group", 3, "permission", "selection", "tableActions"]], template: function RbdNamespaceListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "cd-rbd-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "cd-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("fetchData", function RbdNamespaceListComponent_Template_cd_table_fetchData_1_listener() { return ctx.refresh(); })("updateSelection", function RbdNamespaceListComponent_Template_cd_table_updateSelection_1_listener($event) { return ctx.updateSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "cd-table-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("data", ctx.namespaces)("columns", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("permission", ctx.permission)("selection", ctx.selection)("tableActions", ctx.tableActions);
    } }, directives: [_rbd_tabs_rbd_tabs_component__WEBPACK_IMPORTED_MODULE_12__.RbdTabsComponent, _shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_13__.TableComponent, _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_14__.TableActionsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYmQtbmFtZXNwYWNlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 89188:
/*!*************************************************************************!*\
  !*** ./src/app/ceph/block/rbd-performance/rbd-performance.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdPerformanceComponent": () => (/* binding */ RbdPerformanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _rbd_tabs_rbd_tabs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rbd-tabs/rbd-tabs.component */ 80208);
/* harmony import */ var _shared_components_grafana_grafana_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/grafana/grafana.component */ 76317);



class RbdPerformanceComponent {
}
RbdPerformanceComponent.ɵfac = function RbdPerformanceComponent_Factory(t) { return new (t || RbdPerformanceComponent)(); };
RbdPerformanceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RbdPerformanceComponent, selectors: [["cd-rbd-performance"]], decls: 2, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6298915973855995368$$SRC_APP_CEPH_BLOCK_RBD_PERFORMANCE_RBD_PERFORMANCE_COMPONENT_TS_1 = goog.getMsg("RBD overview");
        i18n_0 = MSG_EXTERNAL_6298915973855995368$$SRC_APP_CEPH_BLOCK_RBD_PERFORMANCE_RBD_PERFORMANCE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "RBD overview";
    } return [["title", i18n_0, "uid", "41FrpeUiz", "grafanaStyle", "two", 3, "grafanaPath", "type"]]; }, template: function RbdPerformanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "cd-rbd-tabs")(1, "cd-grafana", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("grafanaPath", "rbd-overview?")("type", "metrics");
    } }, directives: [_rbd_tabs_rbd_tabs_component__WEBPACK_IMPORTED_MODULE_0__.RbdTabsComponent, _shared_components_grafana_grafana_component__WEBPACK_IMPORTED_MODULE_1__.GrafanaComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYmQtcGVyZm9ybWFuY2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 15088:
/*!***********************************************************************************!*\
  !*** ./src/app/ceph/block/rbd-snapshot-form/rbd-snapshot-form-modal.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdSnapshotFormModalComponent": () => (/* binding */ RbdSnapshotFormModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/api/rbd.service */ 23170);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-group */ 95463);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/models/image-spec */ 19358);
/* harmony import */ var _app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/services/notification.service */ 97161);
/* harmony import */ var _app_shared_services_task_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/services/task-manager.service */ 71099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/directives/autofocus.directive */ 82945);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 30839);
/* harmony import */ var _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/pipes/upper-first.pipe */ 10545);


























function RbdSnapshotFormModalComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function RbdSnapshotFormModalComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18nStart"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18nExp"](ctx_r2.imageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18nApply"](1);
} }
class RbdSnapshotFormModalComponent {
    constructor(activeModal, rbdService, taskManagerService, notificationService, actionLabels) {
        this.activeModal = activeModal;
        this.rbdService = rbdService;
        this.taskManagerService = taskManagerService;
        this.notificationService = notificationService;
        this.actionLabels = actionLabels;
        this.editing = false;
        this.onSubmit = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.action = this.actionLabels.CREATE;
        this.resource = "RBD Snapshot";
        this.createForm();
    }
    createForm() {
        this.snapshotForm = new _app_shared_forms_cd_form_group__WEBPACK_IMPORTED_MODULE_2__.CdFormGroup({
            snapshotName: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]
            })
        });
    }
    setSnapName(snapName) {
        this.snapName = snapName;
        if (this.mirroring !== 'snapshot') {
            this.snapshotForm.get('snapshotName').setValue(snapName);
        }
        else {
            this.snapshotForm.get('snapshotName').clearValidators();
        }
    }
    /**
     * Set the 'editing' flag. If set to TRUE, the modal dialog is in
     * 'Edit' mode, otherwise in 'Create' mode.
     * @param {boolean} editing
     */
    setEditing(editing = true) {
        this.editing = editing;
        this.action = this.editing ? this.actionLabels.RENAME : this.actionLabels.CREATE;
    }
    editAction() {
        const snapshotName = this.snapshotForm.getValue('snapshotName');
        const imageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_4__.ImageSpec(this.poolName, this.namespace, this.imageName);
        const finishedTask = new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_3__.FinishedTask();
        finishedTask.name = 'rbd/snap/edit';
        finishedTask.metadata = {
            image_spec: imageSpec.toString(),
            snapshot_name: snapshotName
        };
        this.rbdService
            .renameSnapshot(imageSpec, this.snapName, snapshotName)
            .toPromise()
            .then(() => {
            this.taskManagerService.subscribe(finishedTask.name, finishedTask.metadata, (asyncFinishedTask) => {
                this.notificationService.notifyTask(asyncFinishedTask);
            });
            this.activeModal.close();
            this.onSubmit.next(this.snapName);
        })
            .catch(() => {
            this.snapshotForm.setErrors({ cdSubmitButton: true });
        });
    }
    createAction() {
        const snapshotName = this.snapshotForm.getValue('snapshotName');
        const imageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_4__.ImageSpec(this.poolName, this.namespace, this.imageName);
        const finishedTask = new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_3__.FinishedTask();
        finishedTask.name = 'rbd/snap/create';
        finishedTask.metadata = {
            image_spec: imageSpec.toString(),
            snapshot_name: snapshotName
        };
        this.rbdService
            .createSnapshot(imageSpec, snapshotName)
            .toPromise()
            .then(() => {
            this.taskManagerService.subscribe(finishedTask.name, finishedTask.metadata, (asyncFinishedTask) => {
                this.notificationService.notifyTask(asyncFinishedTask);
            });
            this.activeModal.close();
            this.onSubmit.next(snapshotName);
        })
            .catch(() => {
            this.snapshotForm.setErrors({ cdSubmitButton: true });
        });
    }
    submit() {
        if (this.editing) {
            this.editAction();
        }
        else {
            this.createAction();
        }
    }
}
RbdSnapshotFormModalComponent.ɵfac = function RbdSnapshotFormModalComponent_Factory(t) { return new (t || RbdSnapshotFormModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_0__.RbdService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_services_task_manager_service__WEBPACK_IMPORTED_MODULE_6__.TaskManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__.ActionLabelsI18n)); };
RbdSnapshotFormModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: RbdSnapshotFormModalComponent, selectors: [["cd-rbd-snapshot-form-modal"]], decls: 22, vars: 17, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc form title
         */
        const MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_BLOCK_RBD_SNAPSHOT_FORM_RBD_SNAPSHOT_FORM_MODAL_COMPONENT_TS_1 = goog.getMsg("{$interpolation} {$interpolation_1}", { "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
        i18n_0 = MSG_EXTERNAL_3346778808274133574$$SRC_APP_CEPH_BLOCK_RBD_SNAPSHOT_FORM_RBD_SNAPSHOT_FORM_MODAL_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "" + "\uFFFD0\uFFFD" + " " + "\uFFFD1\uFFFD" + "";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_BLOCK_RBD_SNAPSHOT_FORM_RBD_SNAPSHOT_FORM_MODAL_COMPONENT_TS_3 = goog.getMsg("Name");
        i18n_2 = MSG_EXTERNAL_8953033926734869941$$SRC_APP_CEPH_BLOCK_RBD_SNAPSHOT_FORM_RBD_SNAPSHOT_FORM_MODAL_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "Name";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_RBD_SNAPSHOT_FORM_RBD_SNAPSHOT_FORM_MODAL_COMPONENT_TS__5 = goog.getMsg("This field is required.");
        i18n_4 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_RBD_SNAPSHOT_FORM_RBD_SNAPSHOT_FORM_MODAL_COMPONENT_TS__5;
    }
    else {
        i18n_4 = "This field is required.";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3774585388161018825$$SRC_APP_CEPH_BLOCK_RBD_SNAPSHOT_FORM_RBD_SNAPSHOT_FORM_MODAL_COMPONENT_TS__7 = goog.getMsg("Snapshot mode is enabled on image {$startBoldText}{$interpolation}{$closeBoldText}: snapshot names are auto generated", { "startBoldText": "\uFFFD#2\uFFFD", "interpolation": "\uFFFD0\uFFFD", "closeBoldText": "\uFFFD/#2\uFFFD" });
        i18n_6 = MSG_EXTERNAL_3774585388161018825$$SRC_APP_CEPH_BLOCK_RBD_SNAPSHOT_FORM_RBD_SNAPSHOT_FORM_MODAL_COMPONENT_TS__7;
    }
    else {
        i18n_6 = "Snapshot mode is enabled on image " + "\uFFFD#2\uFFFD" + "" + "\uFFFD0\uFFFD" + "" + "\uFFFD/#2\uFFFD" + ": snapshot names are auto generated";
    } return [[3, "modalRef"], [1, "modal-title"], i18n_0, [1, "modal-content"], ["name", "snapshotForm", "novalidate", "", 3, "formGroup"], ["formDir", "ngForm"], [1, "modal-body"], [1, "form-group", "row"], ["for", "snapshotName", 1, "cd-col-form-label", "required"], i18n_2, [1, "cd-col-form-input"], ["type", "text", "placeholder", "Snapshot name...", "id", "snapshotName", "name", "snapshotName", "formControlName", "snapshotName", "autofocus", "", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], [4, "ngIf"], [1, "modal-footer"], [3, "form", "submitText", "submitActionEvent"], [1, "invalid-feedback"], i18n_4, i18n_6]; }, template: function RbdSnapshotFormModalComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, RbdSnapshotFormModalComponent_span_14_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "br")(16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](17, RbdSnapshotFormModalComponent_span_17_Template, 3, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "div", 14)(19, "cd-form-button-panel", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("submitActionEvent", function RbdSnapshotFormModalComponent_Template_cd_form_button_panel_submitActionEvent_19_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](20, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](21, "upperFirst");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 9, ctx.action))(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 11, ctx.resource));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18nApply"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.snapshotForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("disabled", ctx.mirroring === "snapshot" ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.snapshotForm.showError("snapshotName", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mirroring === "snapshot");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("form", ctx.snapshotForm)("submitText", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](20, 13, ctx.action) + " " + _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](21, 15, ctx.resource));
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_8__.CdFormValidationDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_9__.CdFormGroupDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_10__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_11__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_12__.AutofocusDirective, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_13__.FormButtonPanelComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.TitleCasePipe, _shared_pipes_upper_first_pipe__WEBPACK_IMPORTED_MODULE_14__.UpperFirstPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYmQtc25hcHNob3QtZm9ybS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 71520:
/*!****************************************************************************!*\
  !*** ./src/app/ceph/block/rbd-snapshot-list/rbd-snapshot-actions.model.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdSnapshotActionsModel": () => (/* binding */ RbdSnapshotActionsModel)
/* harmony export */ });
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 65862);

class RbdSnapshotActionsModel {
    constructor(actionLabels, featuresName, rbdService) {
        this.featuresName = featuresName;
        this.cloneFormatVersion = 1;
        rbdService.cloneFormatVersion().subscribe((version) => {
            this.cloneFormatVersion = version;
        });
        this.create = {
            permission: 'create',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_0__.Icons.add,
            name: actionLabels.CREATE
        };
        this.rename = {
            permission: 'update',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_0__.Icons.edit,
            name: actionLabels.RENAME,
            disable: (selection) => this.disableForMirrorSnapshot(selection)
        };
        this.protect = {
            permission: 'update',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_0__.Icons.lock,
            visible: (selection) => selection.hasSingleSelection && !selection.first().is_protected,
            name: actionLabels.PROTECT,
            disable: (selection) => this.disableForMirrorSnapshot(selection)
        };
        this.unprotect = {
            permission: 'update',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_0__.Icons.unlock,
            visible: (selection) => selection.hasSingleSelection && selection.first().is_protected,
            name: actionLabels.UNPROTECT,
            disable: (selection) => this.disableForMirrorSnapshot(selection)
        };
        this.clone = {
            permission: 'create',
            canBePrimary: (selection) => selection.hasSingleSelection,
            disable: (selection) => this.getCloneDisableDesc(selection, this.featuresName) ||
                this.disableForMirrorSnapshot(selection),
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_0__.Icons.clone,
            name: actionLabels.CLONE
        };
        this.copy = {
            permission: 'create',
            canBePrimary: (selection) => selection.hasSingleSelection,
            disable: (selection) => !selection.hasSingleSelection ||
                selection.first().cdExecuting ||
                this.disableForMirrorSnapshot(selection),
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_0__.Icons.copy,
            name: actionLabels.COPY
        };
        this.rollback = {
            permission: 'update',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_0__.Icons.undo,
            name: actionLabels.ROLLBACK,
            disable: (selection) => this.disableForMirrorSnapshot(selection)
        };
        this.deleteSnap = {
            permission: 'delete',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_0__.Icons.destroy,
            disable: (selection) => {
                const first = selection.first();
                return (!selection.hasSingleSelection ||
                    first.cdExecuting ||
                    first.is_protected ||
                    this.disableForMirrorSnapshot(selection));
            },
            name: actionLabels.DELETE
        };
        this.ordering = [
            this.create,
            this.rename,
            this.protect,
            this.unprotect,
            this.clone,
            this.copy,
            this.rollback,
            this.deleteSnap
        ];
    }
    getCloneDisableDesc(selection, featuresName) {
        if (selection.hasSingleSelection && !selection.first().cdExecuting) {
            if (!(featuresName === null || featuresName === void 0 ? void 0 : featuresName.includes('layering'))) {
                return "Parent image must support Layering";
            }
            if (this.cloneFormatVersion === 1 && !selection.first().is_protected) {
                return "Snapshot must be protected in order to clone.";
            }
            return false;
        }
        return true;
    }
    disableForMirrorSnapshot(selection) {
        return (selection.hasSingleSelection &&
            selection.first().mirror_mode === 'snapshot' &&
            selection.first().name.includes('.mirror.'));
    }
}


/***/ }),

/***/ 14484:
/*!*****************************************************************************!*\
  !*** ./src/app/ceph/block/rbd-snapshot-list/rbd-snapshot-list.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdSnapshotListComponent": () => (/* binding */ RbdSnapshotListComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var _app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/rbd-mirroring.service */ 2840);
/* harmony import */ var _app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/api/rbd.service */ 23170);
/* harmony import */ var _app_shared_classes_cd_helper_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/classes/cd-helper.class */ 51295);
/* harmony import */ var _app_shared_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/components/confirmation-modal/confirmation-modal.component */ 36169);
/* harmony import */ var _app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/components/critical-confirmation-modal/critical-confirmation-modal.component */ 30982);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/enum/cell-template.enum */ 99466);
/* harmony import */ var _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/shared/models/cd-table-selection */ 68774);
/* harmony import */ var _app_shared_models_executing_task__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/shared/models/executing-task */ 60737);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/shared/models/image-spec */ 19358);
/* harmony import */ var _app_shared_pipes_cd_date_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/shared/pipes/cd-date.pipe */ 96102);
/* harmony import */ var _app_shared_pipes_dimless_binary_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/app/shared/pipes/dimless-binary.pipe */ 47557);
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 79247);
/* harmony import */ var _app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/app/shared/services/modal.service */ 63285);
/* harmony import */ var _app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~/app/shared/services/notification.service */ 97161);
/* harmony import */ var _app_shared_services_summary_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~/app/shared/services/summary.service */ 74255);
/* harmony import */ var _app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~/app/shared/services/task-list.service */ 38047);
/* harmony import */ var _app_shared_services_task_manager_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~/app/shared/services/task-manager.service */ 71099);
/* harmony import */ var _rbd_snapshot_form_rbd_snapshot_form_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../rbd-snapshot-form/rbd-snapshot-form-modal.component */ 15088);
/* harmony import */ var _rbd_snapshot_actions_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rbd-snapshot-actions.model */ 71520);
/* harmony import */ var _rbd_snapshot_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rbd-snapshot.model */ 8324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/datatable/table/table.component */ 35905);
/* harmony import */ var _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/datatable/table-actions/table-actions.component */ 94928);







































const _c0 = ["nameTpl"];
const _c1 = ["rollbackTpl"];
function RbdSnapshotListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](4, ".\n");
} if (rf & 2) {
    const value_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", value_r2.snapName, "");
} }
class RbdSnapshotListComponent {
    constructor(authStorageService, modalService, dimlessBinaryPipe, cdDatePipe, rbdService, rbdMirrorService, taskManagerService, notificationService, summaryService, taskListService, actionLabels, cdr) {
        this.authStorageService = authStorageService;
        this.modalService = modalService;
        this.dimlessBinaryPipe = dimlessBinaryPipe;
        this.cdDatePipe = cdDatePipe;
        this.rbdService = rbdService;
        this.rbdMirrorService = rbdMirrorService;
        this.taskManagerService = taskManagerService;
        this.notificationService = notificationService;
        this.summaryService = summaryService;
        this.taskListService = taskListService;
        this.actionLabels = actionLabels;
        this.cdr = cdr;
        this.snapshots = [];
        this.selection = new _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_8__.CdTableSelection();
        this.peerConfigured = false;
        this.builders = {
            'rbd/snap/create': (metadata) => {
                const model = new _rbd_snapshot_model__WEBPACK_IMPORTED_MODULE_22__.RbdSnapshotModel();
                model.name = metadata['snapshot_name'];
                return model;
            }
        };
        this.permission = this.authStorageService.getPermissions().rbdImage;
    }
    ngOnInit() {
        this.columns = [
            {
                name: "Name",
                prop: 'name',
                cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_7__.CellTemplate.executing,
                flexGrow: 2
            },
            {
                name: "Size",
                prop: 'size',
                flexGrow: 1,
                cellClass: 'text-right',
                pipe: this.dimlessBinaryPipe
            },
            {
                name: "Provisioned",
                prop: 'disk_usage',
                flexGrow: 1,
                cellClass: 'text-right',
                pipe: this.dimlessBinaryPipe
            },
            {
                name: "State",
                prop: 'is_protected',
                flexGrow: 1,
                cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_7__.CellTemplate.badge,
                customTemplateConfig: {
                    map: {
                        true: { value: "PROTECTED", class: 'badge-success' },
                        false: { value: "UNPROTECTED", class: 'badge-info' }
                    }
                }
            },
            {
                name: "Created",
                prop: 'timestamp',
                flexGrow: 1,
                pipe: this.cdDatePipe
            }
        ];
        this.rbdMirrorService.getPeerForPool(this.poolName).subscribe((resp) => {
            if (resp.length > 0) {
                this.peerConfigured = true;
            }
        });
        this.imageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__.ImageSpec(this.poolName, this.namespace, this.rbdName);
        this.rbdTableActions = new _rbd_snapshot_actions_model__WEBPACK_IMPORTED_MODULE_21__.RbdSnapshotActionsModel(this.actionLabels, this.featuresName, this.rbdService);
        this.rbdTableActions.create.disable = () => !this.primary || (!this.peerConfigured && this.mirroring === 'snapshot');
        this.rbdTableActions.create.click = () => this.openCreateSnapshotModal();
        this.rbdTableActions.rename.click = () => this.openEditSnapshotModal();
        this.rbdTableActions.protect.click = () => this.toggleProtection();
        this.rbdTableActions.unprotect.click = () => this.toggleProtection();
        const getImageUri = () => this.selection.first() &&
            `${this.imageSpec.toStringEncoded()}/${encodeURIComponent(this.selection.first().name)}`;
        this.rbdTableActions.clone.routerLink = () => `/block/rbd/clone/${getImageUri()}`;
        this.rbdTableActions.copy.routerLink = () => `/block/rbd/copy/${getImageUri()}`;
        this.rbdTableActions.rollback.click = () => this.rollbackModal();
        this.rbdTableActions.deleteSnap.click = () => this.deleteSnapshotModal();
        this.tableActions = this.rbdTableActions.ordering;
        const itemFilter = (entry, task) => {
            return entry.name === task.metadata['snapshot_name'];
        };
        const taskFilter = (task) => {
            return (['rbd/snap/create', 'rbd/snap/delete', 'rbd/snap/edit', 'rbd/snap/rollback'].includes(task.name) && this.imageSpec.toString() === task.metadata['image_spec']);
        };
        this.taskListService.init(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.of)(this.snapshots), null, (items) => {
            const hasChanges = _app_shared_classes_cd_helper_class__WEBPACK_IMPORTED_MODULE_3__.CdHelperClass.updateChanged(this, {
                data: items
            });
            if (hasChanges) {
                this.cdr.detectChanges();
                this.data = [...this.data];
            }
        }, () => {
            const hasChanges = _app_shared_classes_cd_helper_class__WEBPACK_IMPORTED_MODULE_3__.CdHelperClass.updateChanged(this, {
                data: this.snapshots
            });
            if (hasChanges) {
                this.cdr.detectChanges();
                this.data = [...this.data];
            }
        }, taskFilter, itemFilter, this.builders);
    }
    ngOnChanges() {
        if (this.columns) {
            this.imageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__.ImageSpec(this.poolName, this.namespace, this.rbdName);
            if (this.rbdTableActions) {
                this.rbdTableActions.featuresName = this.featuresName;
            }
            this.taskListService.fetch();
        }
    }
    openSnapshotModal(taskName, snapName = null) {
        const modalVariables = {
            mirroring: this.mirroring
        };
        this.modalRef = this.modalService.show(_rbd_snapshot_form_rbd_snapshot_form_modal_component__WEBPACK_IMPORTED_MODULE_20__.RbdSnapshotFormModalComponent, modalVariables);
        this.modalRef.componentInstance.poolName = this.poolName;
        this.modalRef.componentInstance.imageName = this.rbdName;
        this.modalRef.componentInstance.namespace = this.namespace;
        if (snapName) {
            this.modalRef.componentInstance.setEditing();
        }
        else {
            // Auto-create a name for the snapshot: <image_name>_<timestamp_ISO_8601>
            // https://en.wikipedia.org/wiki/ISO_8601
            snapName = `${this.rbdName}_${moment__WEBPACK_IMPORTED_MODULE_0___default()().toISOString(true)}`;
        }
        this.modalRef.componentInstance.setSnapName(snapName);
        this.modalRef.componentInstance.onSubmit.subscribe((snapshotName) => {
            const executingTask = new _app_shared_models_executing_task__WEBPACK_IMPORTED_MODULE_9__.ExecutingTask();
            executingTask.name = taskName;
            executingTask.metadata = {
                image_spec: this.imageSpec.toString(),
                snapshot_name: snapshotName
            };
            this.summaryService.addRunningTask(executingTask);
        });
    }
    openCreateSnapshotModal() {
        this.openSnapshotModal('rbd/snap/create');
    }
    openEditSnapshotModal() {
        this.openSnapshotModal('rbd/snap/edit', this.selection.first().name);
    }
    toggleProtection() {
        const snapshotName = this.selection.first().name;
        const isProtected = this.selection.first().is_protected;
        const finishedTask = new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_10__.FinishedTask();
        finishedTask.name = 'rbd/snap/edit';
        const imageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__.ImageSpec(this.poolName, this.namespace, this.rbdName);
        finishedTask.metadata = {
            image_spec: imageSpec.toString(),
            snapshot_name: snapshotName
        };
        this.rbdService
            .protectSnapshot(imageSpec, snapshotName, !isProtected)
            .toPromise()
            .then(() => {
            const executingTask = new _app_shared_models_executing_task__WEBPACK_IMPORTED_MODULE_9__.ExecutingTask();
            executingTask.name = finishedTask.name;
            executingTask.metadata = finishedTask.metadata;
            this.summaryService.addRunningTask(executingTask);
            this.taskManagerService.subscribe(finishedTask.name, finishedTask.metadata, (asyncFinishedTask) => {
                this.notificationService.notifyTask(asyncFinishedTask);
            });
        });
    }
    _asyncTask(task, taskName, snapshotName) {
        const finishedTask = new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_10__.FinishedTask();
        finishedTask.name = taskName;
        finishedTask.metadata = {
            image_spec: new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__.ImageSpec(this.poolName, this.namespace, this.rbdName).toString(),
            snapshot_name: snapshotName
        };
        const imageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__.ImageSpec(this.poolName, this.namespace, this.rbdName);
        this.rbdService[task](imageSpec, snapshotName)
            .toPromise()
            .then(() => {
            const executingTask = new _app_shared_models_executing_task__WEBPACK_IMPORTED_MODULE_9__.ExecutingTask();
            executingTask.name = finishedTask.name;
            executingTask.metadata = finishedTask.metadata;
            this.summaryService.addRunningTask(executingTask);
            this.modalRef.close();
            this.taskManagerService.subscribe(executingTask.name, executingTask.metadata, (asyncFinishedTask) => {
                this.notificationService.notifyTask(asyncFinishedTask);
            });
        })
            .catch(() => {
            this.modalRef.componentInstance.stopLoadingSpinner();
        });
    }
    rollbackModal() {
        const snapshotName = this.selection.selected[0].name;
        const imageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_11__.ImageSpec(this.poolName, this.namespace, this.rbdName).toString();
        const initialState = {
            titleText: "RBD snapshot rollback",
            buttonText: "Rollback",
            bodyTpl: this.rollbackTpl,
            bodyData: {
                snapName: `${imageSpec}@${snapshotName}`
            },
            onSubmit: () => {
                this._asyncTask('rollbackSnapshot', 'rbd/snap/rollback', snapshotName);
            }
        };
        this.modalRef = this.modalService.show(_app_shared_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmationModalComponent, initialState);
    }
    deleteSnapshotModal() {
        const snapshotName = this.selection.selected[0].name;
        this.modalRef = this.modalService.show(_app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__.CriticalConfirmationModalComponent, {
            itemDescription: "RBD snapshot",
            itemNames: [snapshotName],
            submitAction: () => this._asyncTask('deleteSnapshot', 'rbd/snap/delete', snapshotName)
        });
    }
    updateSelection(selection) {
        this.selection = selection;
    }
}
RbdSnapshotListComponent.ɵfac = function RbdSnapshotListComponent_Factory(t) { return new (t || RbdSnapshotListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_14__.AuthStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_15__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_app_shared_pipes_dimless_binary_pipe__WEBPACK_IMPORTED_MODULE_13__.DimlessBinaryPipe), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_app_shared_pipes_cd_date_pipe__WEBPACK_IMPORTED_MODULE_12__.CdDatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_2__.RbdService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_app_shared_api_rbd_mirroring_service__WEBPACK_IMPORTED_MODULE_1__.RbdMirroringService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_app_shared_services_task_manager_service__WEBPACK_IMPORTED_MODULE_19__.TaskManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_16__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_app_shared_services_summary_service__WEBPACK_IMPORTED_MODULE_17__.SummaryService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_18__.TaskListService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__.ActionLabelsI18n), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_25__.ChangeDetectorRef)); };
RbdSnapshotListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineComponent"]({ type: RbdSnapshotListComponent, selectors: [["cd-rbd-snapshot-list"]], viewQuery: function RbdSnapshotListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵloadQuery"]()) && (ctx.nameTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵloadQuery"]()) && (ctx.rollbackTpl = _t.first);
    } }, inputs: { snapshots: "snapshots", featuresName: "featuresName", poolName: "poolName", namespace: "namespace", mirroring: "mirroring", primary: "primary", rbdName: "rbdName" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵProvidersFeature"]([_app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_18__.TaskListService]), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 5, consts: function () { let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4319929422702564786$$SRC_APP_CEPH_BLOCK_RBD_SNAPSHOT_LIST_RBD_SNAPSHOT_LIST_COMPONENT_TS__3 = goog.getMsg("You are about to rollback");
        i18n_2 = MSG_EXTERNAL_4319929422702564786$$SRC_APP_CEPH_BLOCK_RBD_SNAPSHOT_LIST_RBD_SNAPSHOT_LIST_COMPONENT_TS__3;
    }
    else {
        i18n_2 = "You are about to rollback";
    } return [["columnMode", "flex", "selectionType", "single", 3, "data", "columns", "updateSelection"], [1, "table-actions", 3, "permission", "selection", "tableActions"], ["rollbackTpl", ""], i18n_2]; }, template: function RbdSnapshotListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "cd-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("updateSelection", function RbdSnapshotListComponent_Template_cd_table_updateSelection_0_listener($event) { return ctx.updateSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](1, "cd-table-actions", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](2, RbdSnapshotListComponent_ng_template_2_Template, 5, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("data", ctx.data)("columns", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("permission", ctx.permission)("selection", ctx.selection)("tableActions", ctx.tableActions);
    } }, directives: [_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_23__.TableComponent, _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_24__.TableActionsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYmQtc25hcHNob3QtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 8324:
/*!********************************************************************!*\
  !*** ./src/app/ceph/block/rbd-snapshot-list/rbd-snapshot.model.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdSnapshotModel": () => (/* binding */ RbdSnapshotModel)
/* harmony export */ });
class RbdSnapshotModel {
}


/***/ }),

/***/ 80208:
/*!***********************************************************!*\
  !*** ./src/app/ceph/block/rbd-tabs/rbd-tabs.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdTabsComponent": () => (/* binding */ RbdTabsComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 79247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 48750);





const _c8 = function () { return { exact: true }; };
function RbdTabsComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 1)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c8));
} }
class RbdTabsComponent {
    constructor(authStorageService) {
        this.authStorageService = authStorageService;
        this.grafanaPermission = this.authStorageService.getPermissions().grafana;
    }
}
RbdTabsComponent.ɵfac = function RbdTabsComponent_Factory(t) { return new (t || RbdTabsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_0__.AuthStorageService)); };
RbdTabsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RbdTabsComponent, selectors: [["cd-rbd-tabs"]], decls: 11, vars: 7, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_414887388288176527$$SRC_APP_CEPH_BLOCK_RBD_TABS_RBD_TABS_COMPONENT_TS_1 = goog.getMsg("Images");
        i18n_0 = MSG_EXTERNAL_414887388288176527$$SRC_APP_CEPH_BLOCK_RBD_TABS_RBD_TABS_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "Images";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7060498773332878646$$SRC_APP_CEPH_BLOCK_RBD_TABS_RBD_TABS_COMPONENT_TS_3 = goog.getMsg("Namespaces");
        i18n_2 = MSG_EXTERNAL_7060498773332878646$$SRC_APP_CEPH_BLOCK_RBD_TABS_RBD_TABS_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "Namespaces";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3418677553313974490$$SRC_APP_CEPH_BLOCK_RBD_TABS_RBD_TABS_COMPONENT_TS_5 = goog.getMsg("Trash");
        i18n_4 = MSG_EXTERNAL_3418677553313974490$$SRC_APP_CEPH_BLOCK_RBD_TABS_RBD_TABS_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "Trash";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4352555506458562289$$SRC_APP_CEPH_BLOCK_RBD_TABS_RBD_TABS_COMPONENT_TS__7 = goog.getMsg("Overall Performance");
        i18n_6 = MSG_EXTERNAL_4352555506458562289$$SRC_APP_CEPH_BLOCK_RBD_TABS_RBD_TABS_COMPONENT_TS__7;
    }
    else {
        i18n_6 = "Overall Performance";
    } return [[1, "nav", "nav-tabs"], [1, "nav-item"], ["routerLink", "/block/rbd", "routerLinkActive", "active", "ariaCurrentWhenActive", "page", 1, "nav-link", 3, "routerLinkActiveOptions"], i18n_0, ["routerLink", "/block/rbd/namespaces", "routerLinkActive", "active", "ariaCurrentWhenActive", "page", 1, "nav-link", 3, "routerLinkActiveOptions"], i18n_2, ["routerLink", "/block/rbd/trash", "routerLinkActive", "active", "ariaCurrentWhenActive", "page", 1, "nav-link", 3, "routerLinkActiveOptions"], i18n_4, ["class", "nav-item", 4, "ngIf"], ["routerLink", "/block/rbd/performance", "routerLinkActive", "active", "ariaCurrentWhenActive", "page", 1, "nav-link", 3, "routerLinkActiveOptions"], i18n_6]; }, template: function RbdTabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 1)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 1)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RbdTabsComponent_li_10_Template, 3, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.grafanaPermission.read);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYmQtdGFicy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 86618:
/*!***********************************************************************!*\
  !*** ./src/app/ceph/block/rbd-trash-list/rbd-trash-list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdTrashListComponent": () => (/* binding */ RbdTrashListComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/api/rbd.service */ 23170);
/* harmony import */ var _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/classes/table-status-view-cache */ 69158);
/* harmony import */ var _app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/components/critical-confirmation-modal/critical-confirmation-modal.component */ 30982);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/datatable/table/table.component */ 35905);
/* harmony import */ var _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/enum/cell-template.enum */ 99466);
/* harmony import */ var _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/app/shared/enum/icons.enum */ 65862);
/* harmony import */ var _app_shared_enum_view_cache_status_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/app/shared/enum/view-cache-status.enum */ 91801);
/* harmony import */ var _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/app/shared/models/cd-table-selection */ 68774);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/app/shared/models/image-spec */ 19358);
/* harmony import */ var _app_shared_pipes_cd_date_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/pipes/cd-date.pipe */ 96102);
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 79247);
/* harmony import */ var _app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/app/shared/services/modal.service */ 63285);
/* harmony import */ var _app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~/app/shared/services/task-list.service */ 38047);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 32337);
/* harmony import */ var _rbd_trash_purge_modal_rbd_trash_purge_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../rbd-trash-purge-modal/rbd-trash-purge-modal.component */ 95353);
/* harmony import */ var _rbd_trash_restore_modal_rbd_trash_restore_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../rbd-trash-restore-modal/rbd-trash-restore-modal.component */ 20428);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _rbd_tabs_rbd_tabs_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../rbd-tabs/rbd-tabs.component */ 80208);
/* harmony import */ var _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/datatable/table-actions/table-actions.component */ 94928);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);



































const _c0 = ["expiresTpl"];
const _c1 = ["deleteTpl"];
const _c4 = function (a0) { return [a0]; };
function RbdTrashListComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function RbdTrashListComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r5.purgeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵi18n"](3, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("disabled", ctx_r0.disablePurgeBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction1"](2, _c4, ctx_r0.icons.destroy));
} }
function RbdTrashListComponent_ng_template_5_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵi18n"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerEnd"]();
} }
function RbdTrashListComponent_ng_template_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵi18n"](1, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerEnd"]();
} }
function RbdTrashListComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](0, RbdTrashListComponent_ng_template_5_ng_container_0_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, RbdTrashListComponent_ng_template_5_ng_container_1_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](3, "cdDate");
} if (rf & 2) {
    const row_r7 = ctx.row;
    const value_r8 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", row_r7.cdIsExpired);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !row_r7.cdIsExpired);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](3, 3, value_r8), "\n");
} }
function RbdTrashListComponent_ng_template_7_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "p", 13)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵi18n"](3, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](4, "cdDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const expiresAt_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().expiresAt;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](4, 1, expiresAt_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵi18nApply"](3);
} }
function RbdTrashListComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](0, RbdTrashListComponent_ng_template_7_p_0_Template, 5, 3, "p", 12);
} if (rf & 2) {
    const isExpired_r12 = ctx.isExpired;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !isExpired_r12);
} }
class RbdTrashListComponent {
    constructor(authStorageService, rbdService, modalService, cdDatePipe, taskListService, taskWrapper, actionLabels) {
        this.authStorageService = authStorageService;
        this.rbdService = rbdService;
        this.modalService = modalService;
        this.cdDatePipe = cdDatePipe;
        this.taskListService = taskListService;
        this.taskWrapper = taskWrapper;
        this.actionLabels = actionLabels;
        this.icons = _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_8__.Icons;
        this.executingTasks = [];
        this.selection = new _app_shared_models_cd_table_selection__WEBPACK_IMPORTED_MODULE_10__.CdTableSelection();
        this.tableStatus = new _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_3__.TableStatusViewCache();
        this.disablePurgeBtn = true;
        this.permission = this.authStorageService.getPermissions().rbdImage;
        const restoreAction = {
            permission: 'update',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_8__.Icons.undo,
            click: () => this.restoreModal(),
            name: this.actionLabels.RESTORE
        };
        const deleteAction = {
            permission: 'delete',
            icon: _app_shared_enum_icons_enum__WEBPACK_IMPORTED_MODULE_8__.Icons.destroy,
            click: () => this.deleteModal(),
            name: this.actionLabels.DELETE
        };
        this.tableActions = [restoreAction, deleteAction];
    }
    ngOnInit() {
        this.columns = [
            {
                name: "ID",
                prop: 'id',
                flexGrow: 1,
                cellTransformation: _app_shared_enum_cell_template_enum__WEBPACK_IMPORTED_MODULE_7__.CellTemplate.executing
            },
            {
                name: "Name",
                prop: 'name',
                flexGrow: 1
            },
            {
                name: "Pool",
                prop: 'pool_name',
                flexGrow: 1
            },
            {
                name: "Namespace",
                prop: 'namespace',
                flexGrow: 1
            },
            {
                name: "Status",
                prop: 'deferment_end_time',
                flexGrow: 1,
                cellTemplate: this.expiresTpl
            },
            {
                name: "Deleted At",
                prop: 'deletion_time',
                flexGrow: 1,
                pipe: this.cdDatePipe
            }
        ];
        const itemFilter = (entry, task) => {
            const imageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_12__.ImageSpec(entry.pool_name, entry.namespace, entry.id);
            return imageSpec.toString() === task.metadata['image_id_spec'];
        };
        const taskFilter = (task) => {
            return ['rbd/trash/remove', 'rbd/trash/restore'].includes(task.name);
        };
        this.taskListService.init(() => this.rbdService.listTrash(), (resp) => this.prepareResponse(resp), (images) => (this.images = images), () => this.onFetchError(), taskFilter, itemFilter, undefined);
    }
    prepareResponse(resp) {
        let images = [];
        const viewCacheStatusMap = {};
        resp.forEach((pool) => {
            if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(viewCacheStatusMap[pool.status])) {
                viewCacheStatusMap[pool.status] = [];
            }
            viewCacheStatusMap[pool.status].push(pool.pool_name);
            images = images.concat(pool.value);
            this.disablePurgeBtn = !images.length;
        });
        let status;
        if (viewCacheStatusMap[3]) {
            status = 3;
        }
        else if (viewCacheStatusMap[1]) {
            status = 1;
        }
        else if (viewCacheStatusMap[2]) {
            status = 2;
        }
        if (status) {
            const statusFor = (viewCacheStatusMap[status].length > 1 ? 'pools ' : 'pool ') +
                viewCacheStatusMap[status].join();
            this.tableStatus = new _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_3__.TableStatusViewCache(status, statusFor);
        }
        else {
            this.tableStatus = new _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_3__.TableStatusViewCache();
        }
        images.forEach((image) => {
            image.cdIsExpired = moment__WEBPACK_IMPORTED_MODULE_1___default()().isAfter(image.deferment_end_time);
        });
        return images;
    }
    onFetchError() {
        this.table.reset(); // Disable loading indicator.
        this.tableStatus = new _app_shared_classes_table_status_view_cache__WEBPACK_IMPORTED_MODULE_3__.TableStatusViewCache(_app_shared_enum_view_cache_status_enum__WEBPACK_IMPORTED_MODULE_9__.ViewCacheStatus.ValueException);
    }
    updateSelection(selection) {
        this.selection = selection;
    }
    restoreModal() {
        const initialState = {
            poolName: this.selection.first().pool_name,
            namespace: this.selection.first().namespace,
            imageName: this.selection.first().name,
            imageId: this.selection.first().id
        };
        this.modalRef = this.modalService.show(_rbd_trash_restore_modal_rbd_trash_restore_modal_component__WEBPACK_IMPORTED_MODULE_19__.RbdTrashRestoreModalComponent, initialState);
    }
    deleteModal() {
        const poolName = this.selection.first().pool_name;
        const namespace = this.selection.first().namespace;
        const imageId = this.selection.first().id;
        const expiresAt = this.selection.first().deferment_end_time;
        const isExpired = moment__WEBPACK_IMPORTED_MODULE_1___default()().isAfter(expiresAt);
        const imageIdSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_12__.ImageSpec(poolName, namespace, imageId);
        this.modalRef = this.modalService.show(_app_shared_components_critical_confirmation_modal_critical_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_4__.CriticalConfirmationModalComponent, {
            itemDescription: 'RBD',
            itemNames: [imageIdSpec],
            bodyTemplate: this.deleteTpl,
            bodyContext: { expiresAt, isExpired },
            submitActionObservable: () => this.taskWrapper.wrapTaskAroundCall({
                task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_11__.FinishedTask('rbd/trash/remove', {
                    image_id_spec: imageIdSpec.toString()
                }),
                call: this.rbdService.removeTrash(imageIdSpec, true)
            })
        });
    }
    purgeModal() {
        this.modalService.show(_rbd_trash_purge_modal_rbd_trash_purge_modal_component__WEBPACK_IMPORTED_MODULE_18__.RbdTrashPurgeModalComponent);
    }
}
RbdTrashListComponent.ɵfac = function RbdTrashListComponent_Factory(t) { return new (t || RbdTrashListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_14__.AuthStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_2__.RbdService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_15__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_app_shared_pipes_cd_date_pipe__WEBPACK_IMPORTED_MODULE_13__.CdDatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_16__.TaskListService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_17__.TaskWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__.ActionLabelsI18n)); };
RbdTrashListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineComponent"]({ type: RbdTrashListComponent, selectors: [["cd-rbd-trash-list"]], viewQuery: function RbdTrashListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵviewQuery"](_app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_6__.TableComponent, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵloadQuery"]()) && (ctx.expiresTpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵloadQuery"]()) && (ctx.deleteTpl = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵProvidersFeature"]([_app_shared_services_task_list_service__WEBPACK_IMPORTED_MODULE_16__.TaskListService])], decls: 9, vars: 8, consts: function () { let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2025285675896024439$$SRC_APP_CEPH_BLOCK_RBD_TRASH_LIST_RBD_TRASH_LIST_COMPONENT_TS__3 = goog.getMsg("Purge Trash");
        i18n_2 = MSG_EXTERNAL_2025285675896024439$$SRC_APP_CEPH_BLOCK_RBD_TRASH_LIST_RBD_TRASH_LIST_COMPONENT_TS__3;
    }
    else {
        i18n_2 = "Purge Trash";
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5741682642200313706$$SRC_APP_CEPH_BLOCK_RBD_TRASH_LIST_RBD_TRASH_LIST_COMPONENT_TS___6 = goog.getMsg("Expired at");
        i18n_5 = MSG_EXTERNAL_5741682642200313706$$SRC_APP_CEPH_BLOCK_RBD_TRASH_LIST_RBD_TRASH_LIST_COMPONENT_TS___6;
    }
    else {
        i18n_5 = "Expired at";
    } let i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4824267839944614379$$SRC_APP_CEPH_BLOCK_RBD_TRASH_LIST_RBD_TRASH_LIST_COMPONENT_TS___8 = goog.getMsg("Protected until");
        i18n_7 = MSG_EXTERNAL_4824267839944614379$$SRC_APP_CEPH_BLOCK_RBD_TRASH_LIST_RBD_TRASH_LIST_COMPONENT_TS___8;
    }
    else {
        i18n_7 = "Protected until";
    } let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2131659442404981779$$SRC_APP_CEPH_BLOCK_RBD_TRASH_LIST_RBD_TRASH_LIST_COMPONENT_TS___10 = goog.getMsg("This image is protected until {$interpolation}.", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_9 = MSG_EXTERNAL_2131659442404981779$$SRC_APP_CEPH_BLOCK_RBD_TRASH_LIST_RBD_TRASH_LIST_COMPONENT_TS___10;
    }
    else {
        i18n_9 = "This image is protected until " + "\uFFFD0\uFFFD" + ".";
    } return [["columnMode", "flex", "identifier", "id", "forceIdentifier", "true", "selectionType", "single", 3, "data", "columns", "status", "autoReload", "fetchData", "updateSelection"], [1, "table-actions", "btn-toolbar"], [1, "btn-group", 3, "permission", "selection", "tableActions"], ["class", "btn btn-light", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["expiresTpl", ""], ["deleteTpl", ""], ["type", "button", 1, "btn", "btn-light", 3, "disabled", "click"], ["aria-hidden", "true", 3, "ngClass"], i18n_2, [4, "ngIf"], i18n_5, i18n_7, ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], i18n_9]; }, template: function RbdTrashListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "cd-rbd-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "cd-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("fetchData", function RbdTrashListComponent_Template_cd_table_fetchData_1_listener() { return ctx.taskListService.fetch(); })("updateSelection", function RbdTrashListComponent_Template_cd_table_updateSelection_1_listener($event) { return ctx.updateSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](3, "cd-table-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](4, RbdTrashListComponent_button_4_Template, 4, 4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](5, RbdTrashListComponent_ng_template_5_Template, 4, 5, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](7, RbdTrashListComponent_ng_template_7_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("data", ctx.images)("columns", ctx.columns)("status", ctx.tableStatus)("autoReload", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("permission", ctx.permission)("selection", ctx.selection)("tableActions", ctx.tableActions);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.permission.delete);
    } }, directives: [_rbd_tabs_rbd_tabs_component__WEBPACK_IMPORTED_MODULE_20__.RbdTabsComponent, _app_shared_datatable_table_table_component__WEBPACK_IMPORTED_MODULE_6__.TableComponent, _shared_datatable_table_actions_table_actions_component__WEBPACK_IMPORTED_MODULE_21__.TableActionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_22__.FormInputDisableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass], pipes: [_app_shared_pipes_cd_date_pipe__WEBPACK_IMPORTED_MODULE_13__.CdDatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYmQtdHJhc2gtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 40736:
/*!***********************************************************************************!*\
  !*** ./src/app/ceph/block/rbd-trash-move-modal/rbd-trash-move-modal.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdTrashMoveModalComponent": () => (/* binding */ RbdTrashMoveModalComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/rbd.service */ 23170);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-builder */ 62862);
/* harmony import */ var _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/forms/cd-validators */ 82723);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/models/image-spec */ 19358);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 32337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 30839);
/* harmony import */ var _shared_components_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/date-time-picker/date-time-picker.component */ 52266);
























function RbdTrashMoveModalComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 18)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](2, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
} }
function RbdTrashMoveModalComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function RbdTrashMoveModalComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} }
function RbdTrashMoveModalComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "cd-date-time-picker", 23);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("control", ctx_r6.moveForm.get("expiresAt"));
} }
class RbdTrashMoveModalComponent {
    constructor(rbdService, activeModal, actionLabels, fb, taskWrapper) {
        this.rbdService = rbdService;
        this.activeModal = activeModal;
        this.actionLabels = actionLabels;
        this.fb = fb;
        this.taskWrapper = taskWrapper;
        this.createForm();
    }
    createForm() {
        this.moveForm = this.fb.group({
            expiresAt: [
                '',
                [
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_4__.CdValidators.custom('format', (expiresAt) => {
                        const result = expiresAt === '' || moment__WEBPACK_IMPORTED_MODULE_0___default()(expiresAt, 'YYYY-MM-DD HH:mm:ss').isValid();
                        return !result;
                    }),
                    _app_shared_forms_cd_validators__WEBPACK_IMPORTED_MODULE_4__.CdValidators.custom('expired', (expiresAt) => {
                        const result = moment__WEBPACK_IMPORTED_MODULE_0___default()().isAfter(expiresAt);
                        return result;
                    })
                ]
            ]
        });
    }
    ngOnInit() {
        this.imageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_6__.ImageSpec(this.poolName, this.namespace, this.imageName);
        this.imageSpecStr = this.imageSpec.toString();
        this.pattern = `${this.poolName}/${this.imageName}`;
    }
    moveImage() {
        let delay = 0;
        const expiresAt = this.moveForm.getValue('expiresAt');
        if (expiresAt) {
            delay = moment__WEBPACK_IMPORTED_MODULE_0___default()(expiresAt, 'YYYY-MM-DD HH:mm:ss').diff(moment__WEBPACK_IMPORTED_MODULE_0___default()(), 'seconds', true);
        }
        if (delay < 0) {
            delay = 0;
        }
        this.taskWrapper
            .wrapTaskAroundCall({
            task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_5__.FinishedTask('rbd/trash/move', {
                image_spec: this.imageSpecStr
            }),
            call: this.rbdService.moveTrash(this.imageSpec, delay)
        })
            .subscribe({
            complete: () => {
                this.activeModal.close();
            }
        });
    }
}
RbdTrashMoveModalComponent.ɵfac = function RbdTrashMoveModalComponent_Factory(t) { return new (t || RbdTrashMoveModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_1__.RbdService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__.ActionLabelsI18n), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_3__.CdFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_7__.TaskWrapperService)); };
RbdTrashMoveModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: RbdTrashMoveModalComponent, selectors: [["cd-rbd-trash-move-modal"]], decls: 23, vars: 9, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_875646211293044587$$SRC_APP_CEPH_BLOCK_RBD_TRASH_MOVE_MODAL_RBD_TRASH_MOVE_MODAL_COMPONENT_TS_1 = goog.getMsg("Move an image to trash");
        i18n_0 = MSG_EXTERNAL_875646211293044587$$SRC_APP_CEPH_BLOCK_RBD_TRASH_MOVE_MODAL_RBD_TRASH_MOVE_MODAL_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "Move an image to trash";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7013347605737541452$$SRC_APP_CEPH_BLOCK_RBD_TRASH_MOVE_MODAL_RBD_TRASH_MOVE_MODAL_COMPONENT_TS_3 = goog.getMsg("To move {$startTagKbd}{$interpolation}{$closeTagKbd} to trash, click {$startTagKbd}Move{$closeTagKbd}. Optionally, you can pick an expiration date.", { "startTagKbd": "[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]", "interpolation": "\uFFFD0\uFFFD", "closeTagKbd": "[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]" });
        i18n_2 = MSG_EXTERNAL_7013347605737541452$$SRC_APP_CEPH_BLOCK_RBD_TRASH_MOVE_MODAL_RBD_TRASH_MOVE_MODAL_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "To move " + "[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]" + "" + "\uFFFD0\uFFFD" + "" + "[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]" + " to trash, click " + "[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]" + "Move" + "[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]" + ". Optionally, you can pick an expiration date.";
    } i18n_2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18nPostprocess"](i18n_2); let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3332964840072616237$$SRC_APP_CEPH_BLOCK_RBD_TRASH_MOVE_MODAL_RBD_TRASH_MOVE_MODAL_COMPONENT_TS_5 = goog.getMsg("Protection expires at");
        i18n_4 = MSG_EXTERNAL_3332964840072616237$$SRC_APP_CEPH_BLOCK_RBD_TRASH_MOVE_MODAL_RBD_TRASH_MOVE_MODAL_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "Protection expires at";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7062367883881004588$$SRC_APP_CEPH_BLOCK_RBD_TRASH_MOVE_MODAL_RBD_TRASH_MOVE_MODAL_COMPONENT_TS_7 = goog.getMsg("NOT PROTECTED");
        i18n_6 = MSG_EXTERNAL_7062367883881004588$$SRC_APP_CEPH_BLOCK_RBD_TRASH_MOVE_MODAL_RBD_TRASH_MOVE_MODAL_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "NOT PROTECTED";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6218578883162425073$$SRC_APP_CEPH_BLOCK_RBD_TRASH_MOVE_MODAL_RBD_TRASH_MOVE_MODAL_COMPONENT_TS__9 = goog.getMsg("This image contains snapshot(s), which will prevent it from being removed after moved to trash.");
        i18n_8 = MSG_EXTERNAL_6218578883162425073$$SRC_APP_CEPH_BLOCK_RBD_TRASH_MOVE_MODAL_RBD_TRASH_MOVE_MODAL_COMPONENT_TS__9;
    }
    else {
        i18n_8 = "This image contains snapshot(s), which will prevent it from being removed after moved to trash.";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6926771993782935943$$SRC_APP_CEPH_BLOCK_RBD_TRASH_MOVE_MODAL_RBD_TRASH_MOVE_MODAL_COMPONENT_TS__11 = goog.getMsg("Wrong date format. Please use \"YYYY-MM-DD HH:mm:ss\".");
        i18n_10 = MSG_EXTERNAL_6926771993782935943$$SRC_APP_CEPH_BLOCK_RBD_TRASH_MOVE_MODAL_RBD_TRASH_MOVE_MODAL_COMPONENT_TS__11;
    }
    else {
        i18n_10 = "Wrong date format. Please use \"YYYY-MM-DD HH:mm:ss\".";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7478191432394227909$$SRC_APP_CEPH_BLOCK_RBD_TRASH_MOVE_MODAL_RBD_TRASH_MOVE_MODAL_COMPONENT_TS__13 = goog.getMsg("Protection has already expired. Please pick a future date or leave it empty.");
        i18n_12 = MSG_EXTERNAL_7478191432394227909$$SRC_APP_CEPH_BLOCK_RBD_TRASH_MOVE_MODAL_RBD_TRASH_MOVE_MODAL_COMPONENT_TS__13;
    }
    else {
        i18n_12 = "Protection has already expired. Please pick a future date or leave it empty.";
    } return [[3, "modalRef"], [1, "modal-title"], i18n_0, [1, "modal-content"], ["name", "moveForm", "novalidate", "", 1, "form", 3, "formGroup"], ["formDir", "ngForm"], [1, "modal-body"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], i18n_2, [1, "form-group"], ["for", "expiresAt", 1, "col-form-label"], i18n_4, ["type", "text", "placeholder", i18n_6, "formControlName", "expiresAt", "triggers", "manual", 1, "form-control", 3, "ngbPopover", "click", "keypress"], ["p", "ngbPopover"], ["class", "invalid-feedback", 4, "ngIf"], [1, "modal-footer"], [3, "form", "submitText", "submitActionEvent"], ["popContent", ""], ["role", "alert", 1, "alert", "alert-warning"], i18n_8, [1, "invalid-feedback"], i18n_10, i18n_12, [3, "control"]]; }, template: function RbdTrashMoveModalComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "cd-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "form", 4, 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, RbdTrashMoveModalComponent_div_7_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18nStart"](9, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "kbd")(11, "kbd");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 9)(13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](14, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RbdTrashMoveModalComponent_Template_input_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](16); return _r2.open(); })("keypress", function RbdTrashMoveModalComponent_Template_input_keypress_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](16); return _r2.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](17, RbdTrashMoveModalComponent_span_17_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, RbdTrashMoveModalComponent_span_18_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 15)(20, "cd-form-button-panel", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("submitActionEvent", function RbdTrashMoveModalComponent_Template_cd_form_button_panel_submitActionEvent_20_listener() { return ctx.moveImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](21, RbdTrashMoveModalComponent_ng_template_21_Template, 1, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](5);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.moveForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.hasSnapshots);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18nExp"](ctx.imageSpecStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18nApply"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngbPopover", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.moveForm.showError("expiresAt", _r0, "format"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.moveForm.showError("expiresAt", _r0, "expired"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("form", ctx.moveForm)("submitText", ctx.actionLabels.MOVE);
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_9__.CdFormValidationDirective, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_10__.CdFormGroupDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_11__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_12__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbPopover, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_13__.FormButtonPanelComponent, _shared_components_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_14__.DateTimePickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYmQtdHJhc2gtbW92ZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 95353:
/*!*************************************************************************************!*\
  !*** ./src/app/ceph/block/rbd-trash-purge-modal/rbd-trash-purge-modal.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdTrashPurgeModalComponent": () => (/* binding */ RbdTrashPurgeModalComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/api/pool.service */ 80842);
/* harmony import */ var _app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/rbd.service */ 23170);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-builder */ 62862);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/services/auth-storage.service */ 79247);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 32337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 30839);
























function RbdTrashPurgeModalComponent_input_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "input", 15);
} }
function RbdTrashPurgeModalComponent_select_15_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pool_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", pool_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](pool_r4);
} }
function RbdTrashPurgeModalComponent_select_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "select", 16)(1, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](2, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, RbdTrashPurgeModalComponent_select_15_option_3_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.pools);
} }
class RbdTrashPurgeModalComponent {
    constructor(authStorageService, rbdService, activeModal, actionLabels, fb, poolService, taskWrapper) {
        this.authStorageService = authStorageService;
        this.rbdService = rbdService;
        this.activeModal = activeModal;
        this.actionLabels = actionLabels;
        this.fb = fb;
        this.poolService = poolService;
        this.taskWrapper = taskWrapper;
        this.poolPermission = this.authStorageService.getPermissions().pool;
    }
    createForm() {
        this.purgeForm = this.fb.group({
            poolName: ''
        });
    }
    ngOnInit() {
        if (this.poolPermission.read) {
            this.poolService.list(['pool_name', 'application_metadata']).then((resp) => {
                this.pools = resp
                    .filter((pool) => pool.application_metadata.includes('rbd'))
                    .map((pool) => pool.pool_name);
            });
        }
        this.createForm();
    }
    purge() {
        const poolName = this.purgeForm.getValue('poolName') || '';
        this.taskWrapper
            .wrapTaskAroundCall({
            task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_4__.FinishedTask('rbd/trash/purge', {
                pool_name: poolName
            }),
            call: this.rbdService.purgeTrash(poolName)
        })
            .subscribe({
            error: () => {
                this.purgeForm.setErrors({ cdSubmitButton: true });
            },
            complete: () => {
                this.activeModal.close();
            }
        });
    }
}
RbdTrashPurgeModalComponent.ɵfac = function RbdTrashPurgeModalComponent_Factory(t) { return new (t || RbdTrashPurgeModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_shared_services_auth_storage_service__WEBPACK_IMPORTED_MODULE_5__.AuthStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_1__.RbdService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__.ActionLabelsI18n), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_3__.CdFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_shared_api_pool_service__WEBPACK_IMPORTED_MODULE_0__.PoolService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_6__.TaskWrapperService)); };
RbdTrashPurgeModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: RbdTrashPurgeModalComponent, selectors: [["cd-rbd-trash-purge-modal"]], decls: 18, vars: 6, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2025285675896024439$$SRC_APP_CEPH_BLOCK_RBD_TRASH_PURGE_MODAL_RBD_TRASH_PURGE_MODAL_COMPONENT_TS_1 = goog.getMsg("Purge Trash");
        i18n_0 = MSG_EXTERNAL_2025285675896024439$$SRC_APP_CEPH_BLOCK_RBD_TRASH_PURGE_MODAL_RBD_TRASH_PURGE_MODAL_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "Purge Trash";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6386985526565088968$$SRC_APP_CEPH_BLOCK_RBD_TRASH_PURGE_MODAL_RBD_TRASH_PURGE_MODAL_COMPONENT_TS_3 = goog.getMsg("To purge, select\u00A0 {$startTagKbd}All{$closeTagKbd}\u00A0 or one pool and click\u00A0 {$startTagKbd}Purge{$closeTagKbd}.\u00A0", { "startTagKbd": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]", "closeTagKbd": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]" });
        i18n_2 = MSG_EXTERNAL_6386985526565088968$$SRC_APP_CEPH_BLOCK_RBD_TRASH_PURGE_MODAL_RBD_TRASH_PURGE_MODAL_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "To purge, select\xA0 " + "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]" + "All" + "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]" + "\xA0 or one pool and click\xA0 " + "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]" + "Purge" + "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]" + ".\xA0";
    } i18n_2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18nPostprocess"](i18n_2); let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_63486424706729807$$SRC_APP_CEPH_BLOCK_RBD_TRASH_PURGE_MODAL_RBD_TRASH_PURGE_MODAL_COMPONENT_TS_5 = goog.getMsg("Pool:");
        i18n_4 = MSG_EXTERNAL_63486424706729807$$SRC_APP_CEPH_BLOCK_RBD_TRASH_PURGE_MODAL_RBD_TRASH_PURGE_MODAL_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "Pool:";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6780663482436981429$$SRC_APP_CEPH_BLOCK_RBD_TRASH_PURGE_MODAL_RBD_TRASH_PURGE_MODAL_COMPONENT_TS_7 = goog.getMsg("Pool name...");
        i18n_6 = MSG_EXTERNAL_6780663482436981429$$SRC_APP_CEPH_BLOCK_RBD_TRASH_PURGE_MODAL_RBD_TRASH_PURGE_MODAL_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "Pool name...";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1616102757855967475$$SRC_APP_CEPH_BLOCK_RBD_TRASH_PURGE_MODAL_RBD_TRASH_PURGE_MODAL_COMPONENT_TS__9 = goog.getMsg("All");
        i18n_8 = MSG_EXTERNAL_1616102757855967475$$SRC_APP_CEPH_BLOCK_RBD_TRASH_PURGE_MODAL_RBD_TRASH_PURGE_MODAL_COMPONENT_TS__9;
    }
    else {
        i18n_8 = "All";
    } return [[3, "modalRef"], [1, "modal-title"], i18n_0, [1, "modal-content"], ["name", "purgeForm", "novalidate", "", 1, "form", 3, "formGroup"], ["formDir", "ngForm"], [1, "modal-body"], i18n_2, [1, "form-group"], [1, "col-form-label", "mx-auto"], i18n_4, ["class", "form-control", "type", "text", "placeholder", i18n_6, "formControlName", "poolName", 4, "ngIf"], ["id", "poolName", "name", "poolName", "class", "form-control", "formControlName", "poolName", 4, "ngIf"], [1, "modal-footer"], [3, "form", "submitText", "submitActionEvent"], ["type", "text", "placeholder", i18n_6, "formControlName", "poolName", 1, "form-control"], ["id", "poolName", "name", "poolName", "formControlName", "poolName", 1, "form-control"], ["value", ""], i18n_8, [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]]; }, template: function RbdTrashPurgeModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "cd-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "form", 4, 5)(6, "div", 6)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18nStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "kbd")(10, "kbd");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 8)(12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, RbdTrashPurgeModalComponent_input_14_Template, 1, 0, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, RbdTrashPurgeModalComponent_select_15_Template, 4, 1, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 13)(17, "cd-form-button-panel", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("submitActionEvent", function RbdTrashPurgeModalComponent_Template_cd_form_button_panel_submitActionEvent_17_listener() { return ctx.purge(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.purgeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.poolPermission.read);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.poolPermission.read);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("form", ctx.purgeForm)("submitText", ctx.actionLabels.PURGE);
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_8__.CdFormValidationDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_9__.CdFormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_10__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_11__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_12__.FormButtonPanelComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYmQtdHJhc2gtcHVyZ2UtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 20428:
/*!*****************************************************************************************!*\
  !*** ./src/app/ceph/block/rbd-trash-restore-modal/rbd-trash-restore-modal.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdTrashRestoreModalComponent": () => (/* binding */ RbdTrashRestoreModalComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/app/shared/api/rbd.service */ 23170);
/* harmony import */ var _app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/constants/app.constants */ 79512);
/* harmony import */ var _app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/app/shared/forms/cd-form-builder */ 62862);
/* harmony import */ var _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/app/shared/models/finished-task */ 76111);
/* harmony import */ var _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/app/shared/models/image-spec */ 19358);
/* harmony import */ var _app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/app/shared/services/task-wrapper.service */ 32337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 39109);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-validation.directive */ 41582);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-group.directive */ 56310);
/* harmony import */ var _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/directives/form-input-disable.directive */ 87925);
/* harmony import */ var _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/directives/ng-bootstrap-form-validation/cd-form-control.directive */ 94276);
/* harmony import */ var _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/directives/autofocus.directive */ 82945);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/form-button-panel/form-button-panel.component */ 30839);






















function RbdTrashRestoreModalComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](1, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
class RbdTrashRestoreModalComponent {
    constructor(rbdService, activeModal, actionLabels, fb, taskWrapper) {
        this.rbdService = rbdService;
        this.activeModal = activeModal;
        this.actionLabels = actionLabels;
        this.fb = fb;
        this.taskWrapper = taskWrapper;
    }
    ngOnInit() {
        this.imageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_4__.ImageSpec(this.poolName, this.namespace, this.imageName).toString();
        this.restoreForm = this.fb.group({
            name: this.imageName
        });
    }
    restore() {
        const name = this.restoreForm.getValue('name');
        const imageSpec = new _app_shared_models_image_spec__WEBPACK_IMPORTED_MODULE_4__.ImageSpec(this.poolName, this.namespace, this.imageId);
        this.taskWrapper
            .wrapTaskAroundCall({
            task: new _app_shared_models_finished_task__WEBPACK_IMPORTED_MODULE_3__.FinishedTask('rbd/trash/restore', {
                image_id_spec: imageSpec.toString(),
                new_image_name: name
            }),
            call: this.rbdService.restoreTrash(imageSpec, name)
        })
            .subscribe({
            error: () => {
                this.restoreForm.setErrors({ cdSubmitButton: true });
            },
            complete: () => {
                this.activeModal.close();
            }
        });
    }
}
RbdTrashRestoreModalComponent.ɵfac = function RbdTrashRestoreModalComponent_Factory(t) { return new (t || RbdTrashRestoreModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_shared_api_rbd_service__WEBPACK_IMPORTED_MODULE_0__.RbdService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__.ActionLabelsI18n), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_shared_forms_cd_form_builder__WEBPACK_IMPORTED_MODULE_2__.CdFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_app_shared_services_task_wrapper_service__WEBPACK_IMPORTED_MODULE_5__.TaskWrapperService)); };
RbdTrashRestoreModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: RbdTrashRestoreModalComponent, selectors: [["cd-rbd-trash-restore-modal"]], decls: 18, vars: 7, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5911856861458705446$$SRC_APP_CEPH_BLOCK_RBD_TRASH_RESTORE_MODAL_RBD_TRASH_RESTORE_MODAL_COMPONENT_TS_1 = goog.getMsg("Restore Image");
        i18n_0 = MSG_EXTERNAL_5911856861458705446$$SRC_APP_CEPH_BLOCK_RBD_TRASH_RESTORE_MODAL_RBD_TRASH_RESTORE_MODAL_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "Restore Image";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7611775460943573861$$SRC_APP_CEPH_BLOCK_RBD_TRASH_RESTORE_MODAL_RBD_TRASH_RESTORE_MODAL_COMPONENT_TS_3 = goog.getMsg("To restore\u00A0 {$startTagKbd}{$interpolation}@{$interpolation_1}{$closeTagKbd},\u00A0 type the image's new name and click\u00A0 {$startTagKbd}Restore{$closeTagKbd}.", { "startTagKbd": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]", "interpolation": "\uFFFD0\uFFFD", "interpolation_1": "\uFFFD1\uFFFD", "closeTagKbd": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]" });
        i18n_2 = MSG_EXTERNAL_7611775460943573861$$SRC_APP_CEPH_BLOCK_RBD_TRASH_RESTORE_MODAL_RBD_TRASH_RESTORE_MODAL_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "To restore\xA0 " + "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]" + "" + "\uFFFD0\uFFFD" + "@" + "\uFFFD1\uFFFD" + "" + "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]" + ",\xA0 type the image's new name and click\xA0 " + "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]" + "Restore" + "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]" + ".";
    } i18n_2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18nPostprocess"](i18n_2); let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6672881283340466018$$SRC_APP_CEPH_BLOCK_RBD_TRASH_RESTORE_MODAL_RBD_TRASH_RESTORE_MODAL_COMPONENT_TS_5 = goog.getMsg("New Name");
        i18n_4 = MSG_EXTERNAL_6672881283340466018$$SRC_APP_CEPH_BLOCK_RBD_TRASH_RESTORE_MODAL_RBD_TRASH_RESTORE_MODAL_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "New Name";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_RBD_TRASH_RESTORE_MODAL_RBD_TRASH_RESTORE_MODAL_COMPONENT_TS__7 = goog.getMsg("This field is required.");
        i18n_6 = MSG_EXTERNAL_1417693714872528491$$SRC_APP_CEPH_BLOCK_RBD_TRASH_RESTORE_MODAL_RBD_TRASH_RESTORE_MODAL_COMPONENT_TS__7;
    }
    else {
        i18n_6 = "This field is required.";
    } return [[3, "modalRef"], [1, "modal-title"], i18n_0, [1, "modal-content"], ["name", "restoreForm", "novalidate", "", 1, "form", 3, "formGroup"], ["formDir", "ngForm"], [1, "modal-body"], i18n_2, [1, "form-group"], ["for", "name", 1, "col-form-label"], i18n_4, ["type", "text", "name", "name", "id", "name", "autocomplete", "off", "formControlName", "name", "autofocus", "", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], [1, "modal-footer"], [3, "form", "submitText", "submitActionEvent"], [1, "invalid-feedback"], i18n_6]; }, template: function RbdTrashRestoreModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "cd-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "form", 4, 5)(6, "div", 6)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18nStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "kbd")(10, "kbd");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 8)(12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, RbdTrashRestoreModalComponent_span_15_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 13)(17, "cd-form-button-panel", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("submitActionEvent", function RbdTrashRestoreModalComponent_Template_cd_form_button_panel_submitActionEvent_17_listener() { return ctx.restore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("modalRef", ctx.activeModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.restoreForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18nExp"](ctx.imageSpec)(ctx.imageId);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18nApply"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.restoreForm.showError("name", _r0, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("form", ctx.restoreForm)("submitText", ctx.actionLabels.RESTORE);
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_validation_directive__WEBPACK_IMPORTED_MODULE_7__.CdFormValidationDirective, _shared_directives_ng_bootstrap_form_validation_cd_form_group_directive__WEBPACK_IMPORTED_MODULE_8__.CdFormGroupDirective, _shared_directives_form_input_disable_directive__WEBPACK_IMPORTED_MODULE_9__.FormInputDisableDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _shared_directives_ng_bootstrap_form_validation_cd_form_control_directive__WEBPACK_IMPORTED_MODULE_10__.CdFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_11__.AutofocusDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_form_button_panel_form_button_panel_component__WEBPACK_IMPORTED_MODULE_12__.FormButtonPanelComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYmQtdHJhc2gtcmVzdG9yZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 82909:
/*!*********************************************!*\
  !*** ./src/app/shared/api/iscsi.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IscsiService": () => (/* binding */ IscsiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 93690);
/* harmony import */ var _decorators_cd_encode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../decorators/cd-encode */ 93523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 18259);





let IscsiService = class IscsiService {
    constructor(http) {
        this.http = http;
    }
    listTargets() {
        return this.http.get(`api/iscsi/target`);
    }
    getTarget(target_iqn) {
        return this.http.get(`api/iscsi/target/${target_iqn}`);
    }
    updateTarget(target_iqn, target) {
        return this.http.put(`api/iscsi/target/${target_iqn}`, target, { observe: 'response' });
    }
    status() {
        return this.http.get(`ui-api/iscsi/status`);
    }
    settings() {
        return this.http.get(`ui-api/iscsi/settings`);
    }
    version() {
        return this.http.get(`ui-api/iscsi/version`);
    }
    portals() {
        return this.http.get(`ui-api/iscsi/portals`);
    }
    createTarget(target) {
        return this.http.post(`api/iscsi/target`, target, { observe: 'response' });
    }
    deleteTarget(target_iqn) {
        return this.http.delete(`api/iscsi/target/${target_iqn}`, { observe: 'response' });
    }
    getDiscovery() {
        return this.http.get(`api/iscsi/discoveryauth`);
    }
    updateDiscovery(auth) {
        return this.http.put(`api/iscsi/discoveryauth`, auth);
    }
    overview() {
        return this.http.get(`ui-api/iscsi/overview`);
    }
};
IscsiService.ɵfac = function IscsiService_Factory(t) { return new (t || IscsiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
IscsiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IscsiService, factory: IscsiService.ɵfac, providedIn: 'root' });
IscsiService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _decorators_cd_encode__WEBPACK_IMPORTED_MODULE_0__.cdEncode,
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient])
], IscsiService);



/***/ }),

/***/ 2840:
/*!*****************************************************!*\
  !*** ./src/app/shared/api/rbd-mirroring.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdMirroringService": () => (/* binding */ RbdMirroringService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 93690);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _decorators_cd_encode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../decorators/cd-encode */ 93523);
/* harmony import */ var _services_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/timer.service */ 53159);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 18259);









let RbdMirroringService = class RbdMirroringService {
    constructor(http, timerService) {
        this.http = http;
        this.timerService = timerService;
        this.REFRESH_INTERVAL = 30000;
        // Observable sources
        this.summaryDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        // Observable streams
        this.summaryData$ = this.summaryDataSource.asObservable();
    }
    startPolling() {
        return this.timerService
            .get(() => this.retrieveSummaryObservable(), this.REFRESH_INTERVAL)
            .subscribe(this.retrieveSummaryObserver());
    }
    refresh() {
        return this.retrieveSummaryObservable().subscribe(this.retrieveSummaryObserver());
    }
    retrieveSummaryObservable() {
        return this.http.get('api/block/mirroring/summary');
    }
    retrieveSummaryObserver() {
        return (data) => {
            this.summaryDataSource.next(data);
        };
    }
    /**
     * Subscribes to the summaryData,
     * which is updated periodically or when a new task is created.
     */
    subscribeSummary(next, error) {
        return this.summaryData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((value) => !!value)).subscribe(next, error);
    }
    getPool(poolName) {
        return this.http.get(`api/block/mirroring/pool/${poolName}`);
    }
    updatePool(poolName, request) {
        return this.http.put(`api/block/mirroring/pool/${poolName}`, request, { observe: 'response' });
    }
    getSiteName() {
        return this.http.get(`api/block/mirroring/site_name`);
    }
    setSiteName(siteName) {
        return this.http.put(`api/block/mirroring/site_name`, { site_name: siteName }, { observe: 'response' });
    }
    createBootstrapToken(poolName) {
        return this.http.post(`api/block/mirroring/pool/${poolName}/bootstrap/token`, {});
    }
    importBootstrapToken(poolName, direction, token) {
        const request = {
            direction: direction,
            token: token
        };
        return this.http.post(`api/block/mirroring/pool/${poolName}/bootstrap/peer`, request, {
            observe: 'response'
        });
    }
    getPeer(poolName, peerUUID) {
        return this.http.get(`api/block/mirroring/pool/${poolName}/peer/${peerUUID}`);
    }
    getPeerForPool(poolName) {
        return this.http.get(`api/block/mirroring/pool/${poolName}/peer`);
    }
    addPeer(poolName, request) {
        return this.http.post(`api/block/mirroring/pool/${poolName}/peer`, request, {
            observe: 'response'
        });
    }
    updatePeer(poolName, peerUUID, request) {
        return this.http.put(`api/block/mirroring/pool/${poolName}/peer/${peerUUID}`, request, {
            observe: 'response'
        });
    }
    deletePeer(poolName, peerUUID) {
        return this.http.delete(`api/block/mirroring/pool/${poolName}/peer/${peerUUID}`, {
            observe: 'response'
        });
    }
};
RbdMirroringService.ɵfac = function RbdMirroringService_Factory(t) { return new (t || RbdMirroringService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_timer_service__WEBPACK_IMPORTED_MODULE_1__.TimerService)); };
RbdMirroringService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RbdMirroringService, factory: RbdMirroringService.ɵfac, providedIn: 'root' });
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__param)(0, _decorators_cd_encode__WEBPACK_IMPORTED_MODULE_0__.cdEncodeNot),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [String]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:returntype", void 0)
], RbdMirroringService.prototype, "setSiteName", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__param)(1, _decorators_cd_encode__WEBPACK_IMPORTED_MODULE_0__.cdEncodeNot),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__param)(2, _decorators_cd_encode__WEBPACK_IMPORTED_MODULE_0__.cdEncodeNot),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [String, String, String]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:returntype", void 0)
], RbdMirroringService.prototype, "importBootstrapToken", null);
RbdMirroringService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _decorators_cd_encode__WEBPACK_IMPORTED_MODULE_0__.cdEncode,
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient, _services_timer_service__WEBPACK_IMPORTED_MODULE_1__.TimerService])
], RbdMirroringService);



/***/ }),

/***/ 23170:
/*!*******************************************!*\
  !*** ./src/app/shared/api/rbd.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbdService": () => (/* binding */ RbdService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 93690);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _app_shared_api_api_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/app/shared/api/api-client */ 76189);
/* harmony import */ var _decorators_cd_encode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/cd-encode */ 93523);
/* harmony import */ var _models_image_spec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/image-spec */ 19358);
/* harmony import */ var _services_rbd_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rbd-configuration.service */ 34089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 18259);











let RbdService = class RbdService extends _app_shared_api_api_client__WEBPACK_IMPORTED_MODULE_1__.ApiClient {
    constructor(http, rbdConfigurationService) {
        super();
        this.http = http;
        this.rbdConfigurationService = rbdConfigurationService;
    }
    isRBDPool(pool) {
        return lodash__WEBPACK_IMPORTED_MODULE_0___default().indexOf(pool.application_metadata, 'rbd') !== -1 && !pool.pool_name.includes('/');
    }
    create(rbd) {
        return this.http.post('api/block/image', rbd, { observe: 'response' });
    }
    delete(imageSpec) {
        return this.http.delete(`api/block/image/${imageSpec.toStringEncoded()}`, {
            observe: 'response'
        });
    }
    update(imageSpec, rbd) {
        return this.http.put(`api/block/image/${imageSpec.toStringEncoded()}`, rbd, {
            observe: 'response'
        });
    }
    get(imageSpec) {
        return this.http.get(`api/block/image/${imageSpec.toStringEncoded()}`);
    }
    list(params) {
        return this.http
            .get('api/block/image', {
            params: params,
            headers: { Accept: this.getVersionHeaderValue(2, 0) },
            observe: 'response'
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((response) => {
            return response['body'].map((pool) => {
                pool.value.map((image) => {
                    if (!image.configuration) {
                        return image;
                    }
                    image.configuration.map((option) => Object.assign(option, this.rbdConfigurationService.getOptionByName(option.name)));
                    return image;
                });
                pool['headers'] = response.headers;
                return pool;
            });
        }));
    }
    copy(imageSpec, rbd) {
        return this.http.post(`api/block/image/${imageSpec.toStringEncoded()}/copy`, rbd, {
            observe: 'response'
        });
    }
    flatten(imageSpec) {
        return this.http.post(`api/block/image/${imageSpec.toStringEncoded()}/flatten`, null, {
            observe: 'response'
        });
    }
    defaultFeatures() {
        return this.http.get('api/block/image/default_features');
    }
    cloneFormatVersion() {
        return this.http.get('api/block/image/clone_format_version');
    }
    createSnapshot(imageSpec, snapshotName) {
        const request = {
            snapshot_name: snapshotName
        };
        return this.http.post(`api/block/image/${imageSpec.toStringEncoded()}/snap`, request, {
            observe: 'response'
        });
    }
    renameSnapshot(imageSpec, snapshotName, newSnapshotName) {
        const request = {
            new_snap_name: newSnapshotName
        };
        return this.http.put(`api/block/image/${imageSpec.toStringEncoded()}/snap/${snapshotName}`, request, {
            observe: 'response'
        });
    }
    protectSnapshot(imageSpec, snapshotName, isProtected) {
        const request = {
            is_protected: isProtected
        };
        return this.http.put(`api/block/image/${imageSpec.toStringEncoded()}/snap/${snapshotName}`, request, {
            observe: 'response'
        });
    }
    rollbackSnapshot(imageSpec, snapshotName) {
        return this.http.post(`api/block/image/${imageSpec.toStringEncoded()}/snap/${snapshotName}/rollback`, null, { observe: 'response' });
    }
    cloneSnapshot(imageSpec, snapshotName, request) {
        return this.http.post(`api/block/image/${imageSpec.toStringEncoded()}/snap/${snapshotName}/clone`, request, { observe: 'response' });
    }
    deleteSnapshot(imageSpec, snapshotName) {
        return this.http.delete(`api/block/image/${imageSpec.toStringEncoded()}/snap/${snapshotName}`, {
            observe: 'response'
        });
    }
    listTrash() {
        return this.http.get(`api/block/image/trash/`);
    }
    createNamespace(pool, namespace) {
        const request = {
            namespace: namespace
        };
        return this.http.post(`api/block/pool/${pool}/namespace`, request, { observe: 'response' });
    }
    listNamespaces(pool) {
        return this.http.get(`api/block/pool/${pool}/namespace/`);
    }
    deleteNamespace(pool, namespace) {
        return this.http.delete(`api/block/pool/${pool}/namespace/${namespace}`, {
            observe: 'response'
        });
    }
    moveTrash(imageSpec, delay) {
        return this.http.post(`api/block/image/${imageSpec.toStringEncoded()}/move_trash`, { delay: delay }, { observe: 'response' });
    }
    purgeTrash(poolName) {
        return this.http.post(`api/block/image/trash/purge/?pool_name=${poolName}`, null, {
            observe: 'response'
        });
    }
    restoreTrash(imageSpec, newImageName) {
        return this.http.post(`api/block/image/trash/${imageSpec.toStringEncoded()}/restore`, { new_image_name: newImageName }, { observe: 'response' });
    }
    removeTrash(imageSpec, force = false) {
        return this.http.delete(`api/block/image/trash/${imageSpec.toStringEncoded()}/?force=${force}`, { observe: 'response' });
    }
};
RbdService.ɵfac = function RbdService_Factory(t) { return new (t || RbdService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_rbd_configuration_service__WEBPACK_IMPORTED_MODULE_4__.RbdConfigurationService)); };
RbdService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: RbdService, factory: RbdService.ɵfac, providedIn: 'root' });
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__param)(1, _decorators_cd_encode__WEBPACK_IMPORTED_MODULE_2__.cdEncodeNot),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_models_image_spec__WEBPACK_IMPORTED_MODULE_3__.ImageSpec, String]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:returntype", void 0)
], RbdService.prototype, "createSnapshot", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__param)(2, _decorators_cd_encode__WEBPACK_IMPORTED_MODULE_2__.cdEncodeNot),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_models_image_spec__WEBPACK_IMPORTED_MODULE_3__.ImageSpec, String, String]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:returntype", void 0)
], RbdService.prototype, "renameSnapshot", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__param)(2, _decorators_cd_encode__WEBPACK_IMPORTED_MODULE_2__.cdEncodeNot),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_models_image_spec__WEBPACK_IMPORTED_MODULE_3__.ImageSpec, String, Boolean]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:returntype", void 0)
], RbdService.prototype, "protectSnapshot", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__param)(1, _decorators_cd_encode__WEBPACK_IMPORTED_MODULE_2__.cdEncodeNot),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_models_image_spec__WEBPACK_IMPORTED_MODULE_3__.ImageSpec, String]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:returntype", void 0)
], RbdService.prototype, "restoreTrash", null);
RbdService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    _decorators_cd_encode__WEBPACK_IMPORTED_MODULE_2__.cdEncode,
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient, _services_rbd_configuration_service__WEBPACK_IMPORTED_MODULE_4__.RbdConfigurationService])
], RbdService);



/***/ }),

/***/ 42135:
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/cd-table-server-side.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdTableServerSideService": () => (/* binding */ CdTableServerSideService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);

class CdTableServerSideService {
    /* tslint:disable:no-empty */
    constructor() { }
    static getCount(resp) {
        var _a;
        return Number((_a = resp.headers) === null || _a === void 0 ? void 0 : _a.get('X-Total-Count'));
    }
}
CdTableServerSideService.ɵfac = function CdTableServerSideService_Factory(t) { return new (t || CdTableServerSideService)(); };
CdTableServerSideService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CdTableServerSideService, factory: CdTableServerSideService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_ceph_block_block_module_ts.js.map