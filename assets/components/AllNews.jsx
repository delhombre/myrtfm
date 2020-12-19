import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";

const news = [
	{
		title: "lormm m m m  m  m ",
		image:
			"https://images.unsplash.com/photo-1608068071962-63140de5de69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
	},
	{
		title: "lormm m m m  m  m ",
		image:
			"https://images.unsplash.com/photo-1608068071962-63140de5de69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
	},
	{
		title: "lormm m m m  m  m ",
		image:
			"https://images.unsplash.com/photo-1608068071962-63140de5de69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
	},
	{
		title: "lormm m m m  m  m ",
		image:
			"https://images.unsplash.com/photo-1608068071962-63140de5de69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
	},
];

const AllNews = () => {
	return (
		<>
			<Box m={4}>
				<Grid
					container
					spacing={1}
					// justify="space-between"
					// alignItems="center"
					// alignContent="center"
				>
					{news.map((image, index) => (
						<Grid item key={index} xs={12} md={6} lg={3}>
							<Card>
								<CardActionArea>
									<CardMedia
										component="img"
										alt="Contemplative Reptile"
										height="140"
										image={image.image}
										title="Contemplative Reptile"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											Lizard
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
										>
											{image.title}
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										Share
									</Button>
									<Button size="small" color="primary">
										Learn More
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
};

export default AllNews;
