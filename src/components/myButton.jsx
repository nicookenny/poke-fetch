import React from 'react';

import { Button } from '@material-ui/core';

const MyButton = ({handleClick}) => {
	return (<Button onClick={handleClick} variant="contained" color="secondary">FETCH</Button>);
};

export default MyButton;
