import React from 'react';

import { Button } from '@material-ui/core';

const MyButton = ({handleClick,name}) => {
	return (<Button onClick={handleClick} variant="contained" color="secondary">{name}</Button>);
};

export default MyButton;
