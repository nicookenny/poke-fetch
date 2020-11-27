import React from 'react';

import { Link } from 'react-router-dom';

import {
	Card,
	Typography,
	CardContent,
	CardActions,
	Button,
} from '@material-ui/core';

const MyCard = ({ pokemon }) => {
	return (
		<div>
			<Card style={{width:'50%',margin:'auto'}} variant='outlined'>
				<CardContent>
					<Typography color='textSecondary' gutterBottom>
						{pokemon}
					</Typography>
				</CardContent>
				<CardActions>
					<Link  style={{margin:'auto'}} to={`/${pokemon}`}><Button variant="contained" color="secondary" size='large'>Ver detalles</Button></Link>
				</CardActions>
			</Card>
		</div>
	);
};

export default MyCard;
