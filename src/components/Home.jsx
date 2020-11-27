import React, { useState, useEffect } from 'react';

import {CircularProgress} from '@material-ui/core'

import MyButton from './myButton';
import MyCard from './Card';

//URL: https://pokeapi.co/api/v2/pokemon/

const handleClick = async (url, cb, loading) => {
	loading(true);
	const poke = await (await fetch(url)).json();
	setTimeout(() => {
		loading(false);
	}, 1500);
	cb({ results: poke.results, next: poke.next, previous: poke.previous });
};

const Home = () => {
	const [pokemons, setPokemons] = useState([]);
	const [isLoading, setisLoading] = useState(false);
	return (
		<div>
			<MyButton
				name='Fetch'
				handleClick={() =>
					handleClick(
						'https://pokeapi.co/api/v2/pokemon/',
						setPokemons,
						setisLoading
					)
				}
			/>
			{isLoading ? (
				<CircularProgress />
			) : (
				pokemons.results?.map((poke) => {
					return <MyCard key={poke} pokemon={poke.name} />;
				})
			)}
			{pokemons.previous ? (
				<MyButton
					name='previous'
					handleClick={() =>
						handleClick(pokemons?.previous, setPokemons, setisLoading)
					}
				/>
			) : null}
			{pokemons.next ? (
				<MyButton
					name='next'
					handleClick={() =>
						handleClick(pokemons?.next, setPokemons, setisLoading)
					}
				/>
			) : null}
		</div>
	);
};

export default Home;
