import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { defineCustomElements } from '@kelvininc/ui-components/loader';
import {
	KvActionButton,
	KvActionButtonIcon,
	KvActionButtonSplit,
	KvActionButtonText,
	KvBadge,
	KvBreadcrumb,
	KvBreadcrumbItem,
	KvBreadcrumbList,
	KvSelect,
	KvSelectGroup,
	KvSelectOption,
	KvCalendar,
	KvCalendarDay,
	KvCalendarSingleDateSelector,
	KvCalendarRangeDatesSelector,
	KvDropdown,
	KvDropdownBase,
	KvSingleSelectDropdown,
	KvMultiSelectDropdown,
	KvIllustration,
	KvLink,
	KvLoader,
	KvRadio,
	KvSingleDateSelectDropdown,
	KvRangeDatesSelectDropdown,
	KvStateIndicator,
	KvSearch,
	KvIcon,
	KvSwitchButton,
	KvTabItem,
	KvTabList,
	KvTabNavigation,
	KvTagLetter,
	KvTextField,
	KvToaster,
	KvTooltip,
	KvSummaryCard,
	KvRadioButton,
	KvRadioButtonGroup,
	KvInfoLabel,
	KvTreeItem,
	KvTree,
	KvModal,
	KvFormHelpText,
	KvFormLabel,
	KvRange
} from './stencil-generated/component';

defineCustomElements(window);

const COMPONENTS = [
	KvActionButton,
	KvActionButtonIcon,
	KvActionButtonText,
	KvActionButtonSplit,
	KvBadge,
	KvSwitchButton,
	KvIllustration,
	KvLink,
	KvBreadcrumb,
	KvBreadcrumbItem,
	KvBreadcrumbList,
	KvCalendar,
	KvCalendarDay,
	KvCalendarSingleDateSelector,
	KvCalendarRangeDatesSelector,
	KvLoader,
	KvStateIndicator,
	KvRadio,
	KvSingleDateSelectDropdown,
	KvRangeDatesSelectDropdown,
	KvIcon,
	KvTagLetter,
	KvTabItem,
	KvTabList,
	KvTabNavigation,
	KvTextField,
	KvTooltip,
	KvSummaryCard,
	KvSearch,
	KvSelect,
	KvSelectGroup,
	KvSelectOption,
	KvDropdown,
	KvDropdownBase,
	KvSingleSelectDropdown,
	KvMultiSelectDropdown,
	KvToaster,
	KvRadioButton,
	KvRadioButtonGroup,
	KvInfoLabel,
	KvTreeItem,
	KvTree,
	KvModal,
	KvFormHelpText,
	KvFormLabel,
	KvRange
];

@NgModule({
	declarations: COMPONENTS,
	exports: COMPONENTS,
	imports: [CommonModule],
	providers: []
})
export class KvUIComponentsModule {}
