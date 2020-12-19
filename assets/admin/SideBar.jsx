import {
	Collapse,
	Divider,
	Drawer,
	Hidden,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	useTheme,
} from "@material-ui/core";
import { ExpandLess, ExpandMore, Inbox, Mail } from "@material-ui/icons";
import React, { useState } from "react";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	drawerPaper: {
		width: drawerWidth,
	},
	toolbar: theme.mixins.toolbar,
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

const items = [
	"A la une",
	"Dernières infos",
	"RTFM info",
	"Internationale info",
	"Grandes lignes",
	"RTFM Description",
	"Au tour du monde",
];

const articles = [
	"Politiques",
	"Economiques",
	"Cultures",
	"Sports",
	"Santé",
	"Environnement",
];

const SideBar = ({ window, handleDrawerToggle, mobileOpen }) => {
	const classes = useStyles();
	const theme = useTheme();
	const container =
		window !== undefined ? () => window().document.body : undefined;

	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow(!show);
	};

	const drawer = (
		<>
			<div className={classes.toolbar} />
			<Divider />
			<List>
				{items.map((text, index) => (
					<ListItem button key={index}>
						<ListItemIcon>
							{index % 2 === 0 ? <Inbox /> : <Mail />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
				<ListItem button onClick={handleShow}>
					<ListItemIcon>
						<Inbox />
					</ListItemIcon>
					<ListItemText primary="Articles" />
					{show ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={show} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{articles.map((text, index) => (
							<ListItem button key={index} className={classes.nested}>
								<ListItemIcon>
									{index % 2 === 0 ? <Inbox /> : <Mail />}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</Collapse>
			</List>
		</>
	);

	return (
		<>
			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === "rtl" ? "right" : "left"}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
		</>
	);
};

export default SideBar;
