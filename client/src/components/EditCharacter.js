import React, { useState } from "react";

function EditCharacter({image, id, handleUpdateCharacter}) {
    const [charImage, setCharImage] = useState(image);

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`/characters/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                image: charImage
            }),
        })
            .then((r) => r.json())
            .then(updatedCharacter => handleUpdateCharacter(updatedCharacter));
    }

    return (
        <form className="editChar" onSubmit={handleFormSubmit}>
            <input type='text' name='image' value={charImage} onChange={(e) => setCharImage(e.target.value)}/>
            <input type="submit" value="save" />
        </form>
    );

}

export default EditCharacter