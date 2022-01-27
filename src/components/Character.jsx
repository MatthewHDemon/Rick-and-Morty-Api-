import "../Styles/character.css"
import "../Styles/allcard.css"
import alien from "./ALIENS.jpg"
import human from "./HUMANO.png"
import humanoid from "./PORTAL.jpg"
import unknown from "./DESCONOCIDO.jpg"
import Poopybutthole from "./PBH.jpg"
import Mythological_Creature from "./CREATURE.png"
import Cronenberg from "./LABORATORY.jpg"
import animal from "./BOSQUE.jpg"
import disease from "./GERMENES.jpg"
import robot from "./ROBOTS.jpg"

function Character({characterObject}){
    const AllCharacters = characterObject

    const fondo = {
        Alien: alien,
        Human: human,
        Humanoid: humanoid,
        unknown: unknown,
        Poopybutthole: Poopybutthole,
        "Mythological Creature": Mythological_Creature, 
        Cronenberg: Cronenberg,
        Animal: animal,
        Disease: disease,
        Robot: robot, 
    }

    return (
        <div className="All_Cards" style={{
            backgroundImage: `url(${fondo[AllCharacters.species]})`
        }}>
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