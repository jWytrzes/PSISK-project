import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
	}

	body {
		font-size: 16px; 
		font-family: Roboto, sans-serif;
	}

	html, body {
		padding: 0;
		margin: 0;
	}
`;

export default GlobalStyle;
