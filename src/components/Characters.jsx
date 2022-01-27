import { Character } from "./Character";
import { useEffect } from "react";
import {useState} from "react";
import {ChangePage} from "./ChangePage";

function Characters() {
    const [apiCharacter, setApiCharacter] = useState("https://rickandmortyapi.com/api/character")
    const [apiInfo, setApiInfo] = useState([])
    const [charactersResults, setCharactersResults] = useState([])    
    
    useEffect(() => {
        const fetchData =async() => {
            const getData = await fetch(apiCharacter);
            const jsonData = await getData.json();
            setCharactersResults(jsonData.results);
            setApiInfo(jsonData.info);
        }
    
    fetchData()
}, [apiCharacter])

    return (
        <>
            <div >
             {charactersResults.map(character => (
                <Character
                 characterObject={character}
                key={character.id}
                />
            )) }
        </div>
        <ChangePage
        apiInfo = {apiInfo}
        setApiCharacter = {setApiCharacter}
        />
         </>
    );
} 
export {Characters}