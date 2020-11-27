import React, { useState, useEffect } from 'react';

import MyButton from './myButton';
import MyCard from './Card'

//URL: https://pokeapi.co/api/v2/pokemon/

const Home = () => {
	const [pokemons, setPokemons] = useState([]);
	const [isLoading, setisLoading] = useState(false);

	const handleClick = async () => {
        setisLoading(true)
		const poke = await (
			await fetch('https://pokeapi.co/api/v2/pokemon/')
		).json();
        setisLoading(false)
		setPokemons(poke.results);
	};

	return (
		<div>
			<MyButton handleClick={handleClick} />
            {isLoading?'Cargando':pokemons?.map((poke)=>{
                return <MyCard pokemon={poke.name}/>
            })}
		</div>
	);
};

export default Home;
