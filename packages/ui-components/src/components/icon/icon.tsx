import { Component, Host, Prop, h } from '@stencil/core';
import { EIconName, EOtherIconName } from './icon.types';

import { CssClassMap } from '../../types';
import { getClassMap } from '../../utils/css-class.helper';
import { getConfig } from '../utils';

/**
 * @part icon - The icon container.
 */
@Component({
	tag: 'kv-icon',
	styleUrl: 'icon.scss',
	shadow: true
})
export class KvIcon {
	/** (required) Icon symbol name */
	@Prop({ reflect: true }) name!: EIconName | EOtherIconName;

	/**
	 * (optional) Additional classes to apply for custom CSS. If multiple classes are
	 * provided they should be separated by spaces. It is also valid to provide
	 * CssClassMap with boolean logic.
	 */
	@Prop({ reflect: true }) customClass: string | string[] | CssClassMap = '';

	/** (optional) Icon custom color */
	@Prop({ reflect: true }) customColor: string = '';

	render() {
		const { baseAssetsUrl, symbolsFileName } = getConfig();

		return (
			<Host>
				<svg
					part="icon"
					xmlns="http://www.w3.org/2000/svg"
					class={{
						...getClassMap(this.customClass),
						icon: true
					}}
					style={{ fill: this.customColor }}
				>
					<use href={`${baseAssetsUrl}${symbolsFileName}#${this.name}`}></use>
				</svg>
			</Host>
		);
	}
}
