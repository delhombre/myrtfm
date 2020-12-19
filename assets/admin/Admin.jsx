import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import NewsForm from "./NewsForm";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

const Admin = () => {
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<>
			<div className={classes.root}>
				<CssBaseline />
				<TopBar handleDrawerToggle={handleDrawerToggle} />
				<SideBar
					handleDrawerToggle={handleDrawerToggle}
					mobileOpen={mobileOpen}
				/>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					<NewsForm />
				</main>
			</div>
		</>
	);
};

export default Admin;
