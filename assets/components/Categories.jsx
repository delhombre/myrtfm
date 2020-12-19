import { Avatar, Box, Grid, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles(() => ({
	avatarRoot: {
		width: "100%",
		height: "200px",
	},
}));

const categories = [
	{
		title: "TECH",
		image:
			"https://images.unsplash.com/photo-1608370998373-fb8e4cb02715?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
		content: "Bouri s'appelle Bouri BOUri Bouri",
	},
	{
		title: "Santé",
		image:
			"https://images.unsplash.com/photo-1608370998373-fb8e4cb02715?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
		content: "Bouri s'appelle Bouri BOUri Bouri",
	},
	{
		title: "Economie",
		image:
			"https://images.unsplash.com/photo-1608370998373-fb8e4cb02715?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
		content: "Bouri s'appelle Bouri BOUri Bouri",
	},
];

const Categories = () => {
	const classes = useStyles();

	return (
		<>
			<Box m={4}>
				<Grid container spacing={1}>
					{categories.map((c, i) => (
						<Grid item key={i} lg={3}>
							<Typography variant="h4" color="initial">
								{" "}
								{c.title}{" "}
							</Typography>
							<Avatar
								src={c.image}
								variant="square"
								classes={{ root: classes.avatarRoot }}
							/>
							<Typography variant="body2" color="initial">
								{c.content}
							</Typography>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
};

export default Categories;
