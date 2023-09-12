import { isEmpty } from 'lodash';
import { IMultiSelectDropdown, ISelectMultiOptions, ISelectOption } from '../types';

export const getSelectableOptions = (options: ISelectMultiOptions = {}): ISelectMultiOptions => {
	return Object.values(options).reduce<ISelectMultiOptions>((accumulator, option) => {
		if (isEmpty(option.options)) {
			accumulator[option.value] = option;
		} else {
			accumulator = {
				...accumulator,
				...getSelectableOptions(option.options)
			};
		}

		return accumulator;
	}, {});
};

export const getSelectedSelectableOptions = (options: ISelectMultiOptions = {}, selectedOptions: Record<string, boolean> = {}): ISelectMultiOptions => {
	const selectableOptions = getSelectableOptions(options);

	return Object.keys(selectedOptions).reduce((accumulator, optionKey) => {
		const selectedOption = selectableOptions[optionKey];
		const isOptionSelected = selectedOptions[optionKey] === true;

		if (selectedOption && isOptionSelected) {
			accumulator[optionKey] = selectedOption;
		}

		return accumulator;
	}, {});
};

export const getFlattenSelectOptions = (selectOptions: Record<string, ISelectOption> = {}): Record<string, ISelectOption> =>
	Object.values(selectOptions).reduce<Record<string, ISelectOption>>((accumulator, selectOption) => {
		accumulator[selectOption.value] = selectOption;

		const childrenOpts = getFlattenSelectOptions(selectOption.options);
		Object.keys(childrenOpts).forEach(childrenKey => (accumulator[childrenKey] = childrenOpts[childrenKey]));

		return accumulator;
	}, {});

export const buildSelectedOptions = (options: ISelectMultiOptions = {}, selected: string[]): Record<string, boolean> =>
	Object.keys(options).reduce<Record<string, boolean>>((accumulator, childKey) => {
		accumulator[childKey] = selected.includes(childKey);
		return accumulator;
	}, {});

export const buildAllOptionsSelected = (options: ISelectMultiOptions = {}): Record<string, boolean> =>
	Object.keys(options).reduce<Record<string, boolean>>((accumulator, childKey) => {
		accumulator[childKey] = true;
		return accumulator;
	}, {});

export const getPreviousHightlightableOption = (options: IMultiSelectDropdown = {}, highlightedOption?: string): string | undefined => {
	if (isEmpty(options)) {
		return;
	}

	// Add selected option as a fallback if it exists in the current options
	const optionsKeys = Object.keys(options);
	const fallbackOption = optionsKeys[0];

	if (!highlightedOption) {
		return fallbackOption;
	}

	const highlightedIndex = optionsKeys.findIndex(name => name === highlightedOption);
	if (highlightedIndex === -1) {
		return fallbackOption;
	}

	// Check if hightlighted option is the first
	if (highlightedIndex === 0) {
		return highlightedOption;
	}

	return optionsKeys[highlightedIndex - 1];
};

export const getNextHightlightableOption = (options: IMultiSelectDropdown = {}, highlightedOption?: string): string | undefined => {
	if (isEmpty(options)) {
		return;
	}

	// Add selected option as a fallback if it exists in the current options
	const optionsKeys = Object.keys(options);
	let fallbackOption = optionsKeys[0];

	if (!highlightedOption) {
		return fallbackOption;
	}

	const highlightedIndex = optionsKeys.findIndex(name => name === highlightedOption);
	if (highlightedIndex === -1) {
		return fallbackOption;
	}

	// Check if hightlighted option is the last
	if (highlightedIndex === optionsKeys.length - 1) {
		return highlightedOption;
	}

	return optionsKeys[highlightedIndex + 1];
};
