import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import React from "react";

const theme = createMuiTheme({
	typography: {
		fontFamily:
			"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 'Raleway', sans-serif",
	},
	overrides: {
		MuiCssBaseline: {},
	},
});

const DefaultThemeprovider = ({ children }) => {
	return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default DefaultThemeprovider;
