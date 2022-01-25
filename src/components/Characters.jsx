import {data_characters} from "../data_characters"
import { Character } from "./Character";
function Characters() {
    const AllCharacter = data_characters
    return (
        <div>
            {AllCharacter.results.map(character => (
                <Character
                characterObject={character}
                key={character.id}
                />
            ))
            }
        </div>
    );
} 
export {Characters}