import { AppBar, Link, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	appbar: {
		background: "rgba(0,0,0,0.8)",
		backdropFilter: "saturate(180%) blur(20px)",
		WebkitBackdropFilter: "saturate(180%) blur(20px)",
	},
	toolbar: {
		justifyContent: "space-around",
		overflowX: "auto",
		// paddingLeft: "calc(max(22px, env(safe-area-inset-left)))",
		// paddingRight: "calc(max(22px, env(safe-area-inset-right)))"
	},
	toolbarLink: {
		padding: theme.spacing(1),
		flexShrink: 0,
	},
}));

const sections = [
	"myrtfm",
	"Politique",
	"Economie",
	"Culture",
	"Sport",
	"Santé",
	"Environnement",
];

const Topbar = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.root}>
				<AppBar
					position="fixed"
					variant="outlined"
					elevation={0}
					className={classes.appbar}
				>
					<Toolbar className={classes.toolbar}>
						{sections.map((section, index) => (
							<Link
								key={index}
								color="inherit"
								noWrap
								variant="body2"
								href="#"
								className={classes.toolbarLink}
							>
								{section}
							</Link>
						))}
					</Toolbar>
				</AppBar>
			</div>
		</>
	);
};

export default Topbar;
