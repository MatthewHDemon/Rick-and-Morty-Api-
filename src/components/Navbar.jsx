import {NavLink} from "react-router-dom"
function Navbar() {
    return (
        <div className="List">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/characters">Characters</NavLink>
                </li>
                <li>
                    <NavLink to="/episodes">About Rick and morty</NavLink>
                </li>
                <li>
                    <NavLink to="/locations">Locations</NavLink>
                </li>
            </ul>
        </div>
    )
}

export {Navbar}