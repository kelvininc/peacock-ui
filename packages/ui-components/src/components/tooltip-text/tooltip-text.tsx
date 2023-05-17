import { Component, Host, Prop, h } from '@stencil/core';
import { isEmpty } from 'lodash-es';

import { ITooltipText } from './tooltip-text.types';

@Component({
	tag: 'kv-tooltip-text',
	styleUrl: 'tooltip-text.scss',
	shadow: true
})
export class KvTooltipText implements ITooltipText {
	/** @inheritdoc */
	@Prop({ reflect: true }) text: string = '';
	/** @inheritdoc */
	@Prop({ reflect: false }) visible?: boolean = false;

	render() {
		if (isEmpty(this.text)) {
			return;
		}
		return (
			<Host>
				<div class={{ 'tooltip-container': true, 'tooltip-container--visible': this.visible }}>{this.text}</div>
			</Host>
		);
	}
}
