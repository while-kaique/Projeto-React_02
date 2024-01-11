import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

import './Navbar.css'

function Navbar() {

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit= (e) => {
        e.preventDefault()
        
        if (!search) return


        // search é a variável que guarda a pesquisa do cliente na barra de pesquisa
        navigate(`/search?q=${search}`)
        setSearch('')
    }

    return(
        <div>
            <nav id='navbar'>
            <h2>
                <Link to='/'>
                    <BiCameraMovie /> 
                    Kai Movies Lib
                </Link>
            </h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Busque um filme"
                    onChange={(e=>setSearch(e.target.value))}
                    value={search} />
                    <button type="submit">
                        <BiSearchAlt2 />
                    </button>
                </form>
            </nav>
        </div>
    )
}

export default Navbar