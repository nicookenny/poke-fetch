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
			<Card variant='outlined'>
				<CardContent>
					<Typography color='textSecondary' gutterBottom>
						{pokemon}
					</Typography>
				</CardContent>
				<CardActions>
					<Link to={`/${pokemon}`}><Button size='small'>Learn More</Button></Link>
				</CardActions>
			</Card>
		</div>
	);
};

export default MyCard;
