import { CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import Topbar from "./components/Topbar";
import DefaultThemeprovider from "./themes/DefaultThemeprovider";

function App() {
	return (
		<>
			<DefaultThemeprovider>
				<CssBaseline />
				<Topbar />
			</DefaultThemeprovider>
		</>
	);
}

ReactDOM.render(<App />, document.getElementById("myrtfm-root"));
