"use strict";(self.webpackChunk_kelvininc_react_ui_components=self.webpackChunk_kelvininc_react_ui_components||[]).push([[8288],{"../ui-components/dist/esm/kv-wizard-footer_2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{kv_wizard_footer:()=>KvWizardFooter,kv_wizard_header:()=>KvWizardHeader});var _index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../ui-components/dist/esm/index-a56a3e8b.js"),_components_72a05f91_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../ui-components/dist/esm/components-72a05f91.js"),_action_button_types_8f833980_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../ui-components/dist/esm/lib-config-c46937ad.js"),__webpack_require__("../ui-components/dist/esm/action-button.types-8f833980.js")),_icon_types_9f232f17_js__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("../ui-components/dist/esm/absolute-time-picker-dropdown.types-e9649833.js"),__webpack_require__("../ui-components/dist/esm/icon.types-9f232f17.js"));__webpack_require__("../ui-components/dist/esm/summary-card.types-39a67541.js"),__webpack_require__("../ui-components/dist/esm/toaster.types-b6fec137.js"),__webpack_require__("../ui-components/dist/esm/tree-item.types-9f0ec4b6.js"),__webpack_require__("../ui-components/dist/esm/tag-alarm.types-2fd2af11.js"),__webpack_require__("../ui-components/dist/esm/wizard.types-dff33869.js");const KvWizardFooter=class{constructor(hostRef){(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.stepClick=(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"stepClick",7),this.cancelClick=(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"cancelClick",7),this.prevClick=(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"prevClick",7),this.nextClick=(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"nextClick",7),this.completeClick=(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"completeClick",7),this.onPrevClick=()=>{this.prevClick.emit()},this.onNextClick=()=>{this.nextClick.emit()},this.onCancelClick=()=>{this.cancelClick.emit()},this.onCompleteClick=()=>{this.completeClick.emit()},this.onStepClick=({detail})=>{this.stepClick.emit(detail)},this.label=void 0,this.steps=void 0,this.currentStep=void 0,this.progressPercentage=void 0,this.hasError=void 0,this.showStepBar=!0,this.completeBtnLabel="Submit",this.cancelEnabled=!0,this.prevEnabled=!0,this.nextEnabled=!0,this.completeEnabled=void 0,this.showCancelBtn=void 0,this.showPrevBtn=void 0,this.showNextBtn=void 0,this.showCompleteBtn=void 0}render(){return(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"wizard-footer-container"},(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"actions-container",part:"footer-actions-container"},this.showStepBar&&(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"wizard-stepper"},(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kv-step-bar",{label:this.label,steps:this.steps,currentStep:this.currentStep,progressPercentage:this.progressPercentage,hasError:this.hasError,onStepClicked:this.onStepClick})),(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"additional-actions"})),(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"buttons-container"},this.showCancelBtn&&(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kv-action-button-text",{type:_action_button_types_8f833980_js__WEBPACK_IMPORTED_MODULE_3__.E.Ghost,text:"Cancel",disabled:!this.cancelEnabled,onClickButton:this.onCancelClick}),this.showPrevBtn&&(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kv-action-button-text",{type:_action_button_types_8f833980_js__WEBPACK_IMPORTED_MODULE_3__.E.Tertiary,text:"Previous",disabled:!this.prevEnabled,onClickButton:this.onPrevClick}),this.showNextBtn&&(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kv-action-button-text",{type:_action_button_types_8f833980_js__WEBPACK_IMPORTED_MODULE_3__.E.Primary,text:"Next",disabled:!this.nextEnabled,onClickButton:this.onNextClick}),this.showCompleteBtn&&(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kv-action-button-text",{type:_action_button_types_8f833980_js__WEBPACK_IMPORTED_MODULE_3__.E.Primary,text:this.completeBtnLabel,disabled:!this.completeEnabled,onClickButton:this.onCompleteClick}))))}};KvWizardFooter.style='@property --rotation{syntax:"<angle>";initial-value:0deg;inherits:false}@keyframes rotate-border{to{--rotation:360deg}}:host{--stepper-width:100%}.wizard-footer-container{display:flex;align-items:center;justify-content:space-between;padding:var(--kv-spacing-4x, 16px)}.wizard-footer-container .actions-container{display:flex;flex:1}.wizard-footer-container .actions-container .wizard-stepper{width:var(--stepper-width);padding-right:var(--kv-spacing-4x, 16px)}.wizard-footer-container .buttons-container{display:flex;gap:var(--kv-spacing-3x, 12px)}';const KvWizardHeader=class{constructor(hostRef){(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.label=void 0,this.description=void 0,this.tip=void 0}render(){var _a;return(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"wizard-header-container"},(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"label"},this.label),(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"separator"}),(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"description"},this.description),(null===(_a=this.tip)||void 0===_a?void 0:_a.length)>0&&(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kv-toggle-tip",{text:this.tip,position:_components_72a05f91_js__WEBPACK_IMPORTED_MODULE_1__.b.Bottom,customClass:"wizard-header-tip"},(0,_index_a56a3e8b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kv-icon",{name:_icon_types_9f232f17_js__WEBPACK_IMPORTED_MODULE_5__.E.Info,slot:"open-element-slot"}))))}};KvWizardHeader.style='@property --rotation{syntax:"<angle>";initial-value:0deg;inherits:false}@keyframes rotate-border{to{--rotation:360deg}}:host{--text-color:var(--kv-neutral-1, #f2f2f6);--separator-color:var(--kv-neutral-2, #e5e5e5)}.wizard-header-container{display:flex;align-items:center;padding:var(--kv-spacing-4x, 16px)}.wizard-header-container .label,.wizard-header-container .description{color:var(--text-color)}.wizard-header-container .label{font-family:var(--kv-primary-font, "proxima-nova", sans-serif, "Arial");font-size:12px;font-weight:600;font-stretch:normal;font-style:normal;line-height:18px;letter-spacing:normal;letter-spacing:1.5px;text-transform:uppercase}.wizard-header-container .description{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:var(--kv-primary-font, "proxima-nova", sans-serif, "Arial");font-size:14px;font-weight:300;font-stretch:normal;font-style:normal;line-height:21px;letter-spacing:normal;text-transform:none}.wizard-header-container .separator{width:4px;height:4px;border-radius:50%;margin:0 var(--kv-spacing-2x, 8px);background-color:var(--separator-color)}.wizard-header-container kv-toggle-tip .toggle-tip-open-element-container{cursor:pointer;user-select:none;pointer-events:all;margin-left:var(--kv-spacing-2x, 8px)}'}}]);