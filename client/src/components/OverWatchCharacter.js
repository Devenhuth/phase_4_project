import React, {useState} from "react";
import EditCharacter from "./EditCharacter";

function OverWatchCharacter({name, image, descripion, id, handleUpdateCharacter, handleDeleteCharacter}) {
    const [isEditing, setIsEdititing] = useState(false)

    function handleDeleteClick() {
        fetch(`/characters/${id}`, {
          method: "DELETE",
        })
        handleDeleteCharacter(id);
      }

    function handleUpdateClick(updatedCharacter) {
        setIsEdititing(false)
        handleUpdateCharacter(updatedCharacter);
    }

    return (
        <div className="OverwatchCharacter">
            {isEditing ? (
                <EditCharacter
                id={id}
                name={name}
                image={image}
                descripion={descripion}
                handleUpdateCharacter={handleUpdateClick}
                />
                ) : (
                <div className="Hero">
                <h2>{name}</h2>
                <img className="Picture" src={image} alt="Character" />
                <h3>{descripion}</h3>
                </div>
            )}
            <button onClick={() => setIsEdititing((isEditing) => !isEditing)}>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    
    )
}

export default OverWatchCharacter