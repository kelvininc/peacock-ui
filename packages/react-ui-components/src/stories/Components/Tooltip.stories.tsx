import { ComponentStory } from '@storybook/react';
import React from 'react';
import { EActionButtonType, KvActionButton, KvTooltip, TooltipPosition } from '../../components';

KvTooltip.displayName = 'KvTooltip';

export default {
	title: 'Feedback/Tooltip',
	component: 'kv-tooltip',
	argTypes: {
		text: { type: 'text' },
		position: {
			control: { type: 'select' },
			options: Object.values(TooltipPosition)
		},
		allowedPositions: { control: { type: 'multi-select' }, options: Object.values(TooltipPosition) }
	},
	parameters: {
		notes: require('@ui-notes/tooltip/readme.md'),
		layout: 'centered'
	}
};

const TooltipTemplate: ComponentStory<typeof KvTooltip> = args => (
	<KvTooltip {...args}>
		<KvActionButton type={EActionButtonType.Primary}>Hover me!</KvActionButton>
	</KvTooltip>
);

export const DefaultState = TooltipTemplate.bind(this);
DefaultState.args = {
	text: 'Tooltip text'
};

export const FixedPositionState = TooltipTemplate.bind(this);
FixedPositionState.args = {
	text: 'Tooltip text',
	position: TooltipPosition.Left
};

export const AllowedPositionsState = TooltipTemplate.bind(this);
AllowedPositionsState.args = {
	text: 'Tooltip text',
	allowedPositions: [TooltipPosition.Top, TooltipPosition.Bottom]
};
