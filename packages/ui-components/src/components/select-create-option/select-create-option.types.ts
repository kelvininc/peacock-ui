import { EventEmitter } from '@stencil/core';
import { EComponentSize, ITextField } from '../../types';

export interface ISelectCreateOption {
	/** (optional) The new option value. */
	value?: string;
	/** (optional) If `true` the input and actions will be disabled. Default: `false`. */
	disabled?: boolean;
	/** (optional) The text field custom config. */
	inputConfig?: Partial<ITextField>;
	/** (optional) The input and actions size. Default: `small´ */
	size?: EComponentSize;
}

export interface ISelectCreateOptionEvents {
	/** Emitted when the create button is pressed */
	clickCreate: EventEmitter<void>;
	/** Emitted when the cancel button is pressed */
	clickCancel: EventEmitter<void>;
	/** Emitted when the value changes */
	valueChanged: EventEmitter<string>;
}
