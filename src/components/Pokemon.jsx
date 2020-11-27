import React, { useEffect, useState } from 'react';

import { useParams, Link,useHistory } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const getPokemon = async (URL, name, cb,loading) => {
    loading(true)
    const pokemonInfo = await (await fetch(URL + name)).json();
    
        loading(false)

	cb(pokemonInfo);
};

const Pokemon = () => {
    const [info, setInfo] = useState(null);
    const [isLoading, setisLoading] = useState(false);

	let { name } = useParams();
	let URL = `https://pokeapi.co/api/v2/pokemon/`;


    let history = useHistory()
    function handleClick() {
        history.push("/");
      }

	useEffect(() => {
		getPokemon(URL, name, setInfo,setisLoading);
	}, []);

	return (
		<div>
			{isLoading?'Cargando':<Card style={{ width: '50%', margin: 'auto' }} variant='outlined'>
				<CardMedia
                    component='img'
                    style={{width:'500px',margin:'auto'}}
                    src={info?.sprites.front_default}
				/>
				<CardContent>
					<Typography color='textSecondary' gutterBottom>
						<b>{info?.name}</b>
					</Typography>
					<Typography color='textSecondary'>Altura: {info?.height}</Typography>

					<Typography color='textSecondary'>Altura: {info?.height}</Typography>
					<Typography color='textSecondary'>Peso: {info?.weight}</Typography>
					<Typography variant='body2' component='p'>
						Tipo: {info?.types[0].type.name}
					</Typography>
				</CardContent>
				<CardActions>
					<Button onClick={handleClick} size='small'>Volver</Button>
				</CardActions>
			</Card>}
		</div>
	);
};

export default Pokemon;
