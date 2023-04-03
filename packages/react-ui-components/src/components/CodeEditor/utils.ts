import { IFontOptions } from '../../utils/useFontsApi';
import { MONACO_FONT_FAMILY, MONACO_FONT_SIZE } from './config';
import { CodeEditorOptions } from './types';

export const getEditorOptions = (customOptions?: CodeEditorOptions): CodeEditorOptions => ({
	fontFamily: 'Inconsolata',
	fontSize: 14,
	wordWrap: 'on',
	renderLineHighlight: 'none',
	scrollBeyondLastLine: false,
	automaticLayout: true,
	readOnly: false,
	padding: {
		top: 12
	},
	scrollbar: {
		useShadows: false,
		verticalScrollbarSize: 6
	},
	minimap: {
		enabled: false
	},
	guides: {
		indentation: false,
		highlightActiveBracketPair: false,
		bracketPairs: false
	},
	...(customOptions || {})
});

export const getFontOptions = ({ fontFamily, fontSize }: CodeEditorOptions): IFontOptions => {
	return { fontFamily: fontFamily || MONACO_FONT_FAMILY, fontSize: fontSize || MONACO_FONT_SIZE };
};
