import { CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./admin/Admin";
import AllNews from "./components/AllNews";
import Categories from "./components/Categories";
import News from "./components/News";
import Topbar from "./components/Topbar";
import DefaultThemeprovider from "./themes/DefaultThemeprovider";

function App() {
	return (
		<>
			<DefaultThemeprovider>
				<CssBaseline />
				<Topbar />
				<Switch>
					<Route exact path="/" component={News} />
					<Route path="/all" component={AllNews} />
					<Route path="/categories" component={Categories} />
					<Route path="/admin" component={Admin} />
				</Switch>
			</DefaultThemeprovider>
		</>
	);
}

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("myrtfm-root")
);
