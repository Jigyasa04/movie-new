import App from '../App.css'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import { useState } from 'react'

function Search() {
        const [input, setInput] = useState("");

        function working() {
                window.location.href = "/movies/" + input;
                console.log(input)
        }
        return (
                <>
                        <div className="Search">
                            <h1 className="Search__heading" >What do you want to watch next?</h1>
                                <div className="main__search">
                                        <input className="search__input" value={input} onChange={(e) => setInput(e.target.value)} type="search" placeholder="Type to search" />
                                        <button className="search__button" onClick={working}><AiOutlineSearch /></button>
                                </div>
                        </div>

                </>
        )
}

export default Search