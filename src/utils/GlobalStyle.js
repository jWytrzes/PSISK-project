import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
	}

	html {
		font-size: 62.5%; 
	}

	body {
		font-size: 16px; 
		font-size: 1.6rem;
		line-height: 1.5;
		font-family: Roboto, sans-serif;
	}

	html, body {
		padding: 0;
		margin: 0;
	}
`;

export default GlobalStyle;
