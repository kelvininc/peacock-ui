import { EValidationState } from '@kelvininc/ui-components';
import { FormContextType, RJSFSchema, StrictRJSFSchema, WidgetProps } from '@rjsf/utils';
import { isEmpty } from 'lodash';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { KvMultiSelectDropdown, KvSingleSelectDropdown } from '../../../stencil-generated';
import styles from './SelectWidget.module.scss';
import { buildDropdownOptions, buildSelectedOptions, getSelectedOptions, processValue, searchDropdownOptions } from './utils';
import { DEFAULT_MINIMUM_SEARCHABLE_OPTIONS } from './config';

const SelectWidget = <T, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({
	schema,
	id,
	options,
	label,
	required,
	disabled,
	readonly,
	value,
	multiple,
	onChange,
	placeholder,
	rawErrors = [],
	uiSchema = {}
}: WidgetProps<T, S, F>) => {
	const { enumOptions, enumDisabled } = options;
	const { displayValue, searchable, selectionClearable, minHeight, maxHeight, minSearchOptions, badge, displayValuePrefix } = uiSchema;
	const [searchTerm, setSearchTerm] = useState<string | null>(null);

	const defaultDropdownOptions = useMemo(() => buildDropdownOptions(enumOptions, enumDisabled), [enumOptions, enumDisabled]);
	const filteredOptions = useMemo(() => {
		if (searchTerm !== null && searchTerm.length > 0) {
			return searchDropdownOptions(searchTerm, defaultDropdownOptions);
		}

		return defaultDropdownOptions;
	}, [searchTerm, defaultDropdownOptions]);
	const [stateValue, setStateValue] = useState(processValue(schema, value));
	const emptyValue = useMemo(() => (multiple ? [] : undefined), [multiple]);

	const onSearchChange = useCallback(({ detail: searchedLabel }: CustomEvent<string>) => setSearchTerm(searchedLabel), []);
	const onChangeOptionSelected = useCallback(({ detail: selectedOption }: CustomEvent<string>) => {
		onChangeValue(selectedOption);
	}, []);
	const onChangeOptionsSelected = useCallback(({ detail: selectedOptionsMap }: CustomEvent<{ [key: string]: boolean }>) => {
		const selectedOptions = getSelectedOptions(selectedOptionsMap);
		onChangeValue(selectedOptions);
	}, []);
	const onChangeValue = useCallback(newValue => {
		const processedValue = processValue(schema, newValue);
		onChange(processedValue);
		setStateValue(processedValue);
	}, []);

	const hasErrors = useMemo(() => !isEmpty(rawErrors), [rawErrors]);
	const displayedLabel = useMemo(() => schema.title || label, [schema.title, label]);

	const props = {
		id,
		label: displayedLabel,
		placeholder: placeholder ? placeholder : undefined,
		required,
		disabled: disabled || readonly,
		errorState: hasErrors ? EValidationState.Invalid : EValidationState.Valid,
		displayValue: typeof value === 'undefined' ? emptyValue : displayValue?.(value, defaultDropdownOptions),
		displayValuePrefix,
		options: defaultDropdownOptions,
		filteredOptions,
		onSearchChange,
		searchable,
		minHeight,
		maxHeight,
		badge,
		selectionClearable,
		minSearchOptions: minSearchOptions ?? DEFAULT_MINIMUM_SEARCHABLE_OPTIONS
	};

	useEffect(() => {
		setStateValue(processValue(schema, value));
	}, [value]);

	return (
		<div className={styles.InputContainer}>
			{!multiple && <KvSingleSelectDropdown selectedOption={stateValue} onOptionSelected={onChangeOptionSelected} {...props} />}
			{multiple && <KvMultiSelectDropdown selectedOptions={buildSelectedOptions(stateValue)} onOptionsSelected={onChangeOptionsSelected} {...props} />}
		</div>
	);
};

export default SelectWidget;
