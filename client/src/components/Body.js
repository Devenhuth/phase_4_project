import React from "react"; 
import OverWatchCharacter from "./OverWatchCharacter";

function Body({overwatchChar, handleUpdateCharacter, handleDeleteCharacter}) {

    const overwatchArr = overwatchChar.map((data) => {
        return ( <OverWatchCharacter name={data.name} image={data.image} descripion={data.overview} key={data.id} id={data.id} handleUpdateCharacter={handleUpdateCharacter} handleDeleteCharacter={handleDeleteCharacter}/>)
    })

    return (
        <div className="Characters">
            {overwatchArr}
        </div>
    )
}

export default Body