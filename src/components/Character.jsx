import {morty} from "../data_character"
import { data_characters } from "../data_characters"
import "../Styles/character.css"
import "../Styles/allcard.css"

function Character({characterObject}){
    const AllCharacters = characterObject

    return (
        <div className="All_Cards">
            <div className="card-container">
            <div className="card-img">
            <img className="images" src={AllCharacters.image} alt="este es un personaje :)"></img>
                <h2>{AllCharacters.name}</h2>
                <p>{AllCharacters.species}</p>
                <p>{AllCharacters.gender}</p>
                <button className="boton">Episodios</button>
            </div>
            </div>
        </div>
    )
}

export {Character}