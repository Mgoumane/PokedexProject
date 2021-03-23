import React, { useEffect, useState } from "react";
import PokemonThumbnail from "./pokemonThumbnail";



const PokemonList = (props) => {

    const [pokemonList, setPokemonList] = useState([]);

    // Useeffecte va s'appliquer quand le composant est monté et quand les props et les states s' update
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then((Response) => { return Response.json() })
            .then((Response) => {
                console.log(Response)
                setPokemonList(Response.results);
            })

    }, [])

    return (
        <div className=" container">
            <h2>Clique sur un Pokemon</h2>

            <div className="container-fluid">
                <div className="row">
                    {pokemonList.map((pokemon) => {
                        return (
                            <div 
                            className="col-6 col-md-4 col-lg-3 text-center "
                            onClick={() => { props.onPokemonClick(pokemon) }}>
                                <PokemonThumbnail pokemon={pokemon}></PokemonThumbnail>

                            </div>)

                    })}

                </div>
            </div>



        </div>
    )
}

export default PokemonList;