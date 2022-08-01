import { EventEmitter } from '@stencil/core';
import { ITextField } from '../../types';
import { ICalendarRangeDatesSelector, ICalendarRangeDatesSelectorEvents } from '../calendar-range-dates-selector/calendar-range-dates-selector.types';
import { IDropdownBase } from '../dropdown-base/dropdown-base.types';

export interface IRangeDatesSelectDropdown extends ICalendarRangeDatesSelector, IDropdownBase {
	/** (optional) The start date text field input custom configurations */
	startInputConfig?: Partial<ITextField>;
	/** (optional) The end date text field input custom configurations */
	endInputConfig?: Partial<ITextField>;
	/** (optional) If `true` the calendar is opened */
	isOpen?: boolean;
	/** (optional) The text field start date format mask */
	startDateMask?: string;
	/** (optional) The text field end date format mask */
	endDateMask?: string;
}

export interface IRangeDatesSelectDropdownEvents extends ICalendarRangeDatesSelectorEvents {
	/** Emitted when the calendar selector opens state changes */
	openStateChange: EventEmitter<boolean>;
}
