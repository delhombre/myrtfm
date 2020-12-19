import {
	AppBar,
	Link,
	makeStyles,
	Toolbar,
	Typography,
} from "@material-ui/core";
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
		// justifyContent: "space-between",
		// overflowX: "auto",
		margin: "0 auto",
		maxWidth: "980px",
	},
	toolbarLink: {
		margin: theme.spacing(0, 2),
		flexShrink: 0,
		color: "#bbbbbb",
		fontFamily: "Raleway",
		fontSize: "17px",
		transition: "color .5s ease",
		"&:hover": {
			color: "#ffffff",
			textDecoration: "none",
		},
	},
	gutters: {
		[theme.breakpoints.up("sm")]: {
			paddingLeft: "14px",
			paddingRight: "14px",
		},
		[theme.breakpoints.up("md")]: {
			paddingLeft: "22px",
			paddingRight: "22px",
		},
		[theme.breakpoints.up("lg")]: {
			paddingLeft: "44px",
			paddingRight: "44px",
		},
	},
}));

const sections = [
	"Myrtfm",
	"Radio",
	"TV",
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
					<Toolbar
						className={classes.toolbar}
						// disableGutters
						classes={{ gutters: classes.gutters }}
					>
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
				<Toolbar />
			</div>
			<div style={{ background: "#a9a9a933", padding: "10px" }}>
				<Typography
					variant="body2"
					color="initial"
					align="center"
					style={{ margin: "0 auto" }}
				>
					{
						"Toute l'équipe de Myrtfm vous invite à respecter les gestes barrières contre le covid-19."
					}
					<Link href="#"> Contactez-nous</Link> et laissez-vous guider pas à
					pas.
				</Typography>
			</div>
		</>
	);
};

export default Topbar;
