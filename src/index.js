import React from 'react';
import ReactDOM from 'react-dom';

import {indigoA200} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: indigoA200,
    	primary2Color: indigoA200,
	},
});

ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
	  <App />
	</MuiThemeProvider>,
	document.getElementById('root')
);
