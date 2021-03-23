import React, { useEffect, useState } from "react";
const PokemonThumbnail = ({ pokemon }) => {// A voir avec Xavier !

    const [image, setImage] = useState("");


    useEffect(() => {
        fetch(pokemon.url)
            .then((Response) => { return Response.json() })
            .then((Response) => {
                console.log(Response);
                setImage(Response.sprites.front_default);
            })

    }, [pokemon])// CETTE FONCTION DEPEND DU POKEMON 

    return (

        <div>
            

            <div class="pokThumbnail ">
                <img src={image}></img>
                <div class="card-body myCardName">
                    <h4>{pokemon.name}</h4>
                </div>
            </div>
        </div>
    )
}

export default PokemonThumbnail;