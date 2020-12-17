import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import "../styles/app.css";

const theme = createMuiTheme({
	typography: {
		fontFamily: "SF Pro Text Regular",
	},
});

const DefaultThemeprovider = ({ children }) => {
	return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default DefaultThemeprovider;
