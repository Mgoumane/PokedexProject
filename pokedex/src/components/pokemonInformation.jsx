import React, { useEffect, useState } from "react";

const PokemonInformation = (props) => {

    const [myPokemon, setMyPokemon] = useState();

    useEffect(() => {
        if (props.pokemon !== undefined) {
            fetch(props.pokemon.url)
                .then(response => { return response.json() })
                .then(response => {
                    console.log(response);
                    setMyPokemon(response);
                })
        }
    }, [props.pokemon])

    return (
        <div className=" container pokInfo">
            {myPokemon !== undefined ? (
                <>
                    <div class="card mb-3 pokThumbnail" >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={myPokemon.sprites.front_default} />
                            </div>
                            <div class="col-md-8 myCardName ">
                                <div class="card-body">
                                    <h1 class="card-title"> {myPokemon.name}</h1>
                                    <p>Height: {myPokemon.height}</p>
                                    <p>Weight: {myPokemon.weight}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    )


}
export default PokemonInformation;