import {
	AppBar,
	IconButton,
	makeStyles,
	Toolbar,
	Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	appBar: {
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
}));

const TopBar = ({ handleDrawerToggle }) => {
	const classes = useStyles();

	return (
		<>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<Menu />
					</IconButton>
					<Typography variant="h6" noWrap>
						Responsive drawer
					</Typography>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default TopBar;
