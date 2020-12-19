import { makeStyles, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";

const useStyles = makeStyles(() => ({
	input: {
		display: "none",
	},
}));

const NewsForm = () => {
	const classes = useStyles();

	return (
		<>
			<form>
				<Grid container spacing={1}>
					<Grid item xs={12} sm={6} lg={4}>
						<TextField label="Titre" />
					</Grid>
					<Grid item xs={12} sm={6} lg={4}>
						<TextField accept="image/*" type="file" label="Insérer une image" />
					</Grid>
					<Grid item xs={12} sm={6} lg={4}>
						<TextField label="Contenu" multiline />
					</Grid>
				</Grid>
			</form>
		</>
	);
};

export default NewsForm;
