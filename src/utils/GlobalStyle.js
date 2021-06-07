import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
	}

	body {
		font-size: 16px; 
		font-family: Roboto, sans-serif;
		background-color: #f7f7f7;
		line-height: 1.5;
	}

	html, body {
		padding: 0;
		margin: 0;
		overflow-x: hidden;
	}

	figure {
		text-align: center;

		figcaption {
			margin-top: 5px;
		}
	}
`;

export default GlobalStyle;
