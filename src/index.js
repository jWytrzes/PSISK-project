import React from 'react';
import ReactDOM from 'react-dom';
import { useTheme } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home/Home';
import GlobalStyle from './utils/GlobalStyle';
import routes from './utils/routes';
import STP from './pages/STP/STP';
import SpanningTree from './pages/SpanningTree/SpanningTree';
import MSTP from './pages/MSTP/MSTP';
import RSTP from './pages/RSTP/RSTP';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={useTheme}>
			<StylesProvider injectFirst>
				<GlobalStyle />
				<BrowserRouter>
					<Switch>
						<Route exact path={routes.home}>
							<Home />
						</Route>
						<Route path={routes.spanningTree}>
							<SpanningTree />
						</Route>
						<Route path={routes.stp}>
							<STP />
						</Route>
						<Route path={routes.rstp}>
							<RSTP />
						</Route>
						<Route path={routes.mstp}>
							<MSTP />
						</Route>
					</Switch>
				</BrowserRouter>
			</StylesProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
