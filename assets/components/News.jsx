import { Avatar, Box, Grid, Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Carousel from "react-material-ui-carousel";
import twothousand21 from "../images/2021.png";

const images = [
	"https://images.unsplash.com/photo-1608262941082-65cfdb51c571?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
	"https://images.unsplash.com/photo-1608068071962-63140de5de69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
	"https://images.unsplash.com/photo-1608070734668-e74dc3dda037?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
	"https://images.unsplash.com/photo-1608266152330-ff6811532b4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
	"https://images.unsplash.com/photo-1608257285756-c0d8c70e75b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
];

const News = () => {
	return (
		<>
			<div style={{ margin: "0 auto", textAlign: "center" }}>
				<Avatar
					variant="square"
					src={twothousand21}
					style={{ margin: "0 auto", height: "150px", width: "150px" }}
				/>
				<Typography variant="body1" color="initial">
					Bonne et heureuse année 2021.
				</Typography>
				<Typography
					component="h1"
					variant="h3"
					color="initial"
					style={{ fontWeight: "bold" }}
				>
					{"Ne manquer plus rien de l'actualité"}
				</Typography>
			</div>

			<Box m={4}>
				<Grid container spacing={3}>
					<Grid item md={6}>
						<Carousel>
							{images.map((image, index) => (
								<Avatar
									variant="square"
									key={index}
									src={image}
									style={{
										width: "100%",
										height: "432px",
										borderRadius: "10px",
									}}
								/>
							))}
						</Carousel>
					</Grid>
					<Grid container item md={6} spacing={0}>
						<Grid item md={12}>
							<Avatar
								variant="square"
								src="https://images.unsplash.com/photo-1608257285756-c0d8c70e75b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
								style={{ width: "100%", height: "200px", borderRadius: "10px" }}
							/>
						</Grid>
						<Grid item md={12}>
							<Avatar
								variant="square"
								src="https://images.unsplash.com/photo-1608257285756-c0d8c70e75b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
								style={{ width: "100%", height: "200px", borderRadius: "10px" }}
							/>
						</Grid>
					</Grid>
				</Grid>
				<div style={{ margin: "0 auto", textAlign: "center" }}>
					<Link href="#" align="center">
						{"Consulter le fil d'actualité"}
					</Link>
				</div>
			</Box>
		</>
	);
};

export default News;
