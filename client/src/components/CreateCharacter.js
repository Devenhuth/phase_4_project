import React, {useState} from "react";

function CreateCharacter({addNewCharacter}) {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [overview, setOverview] = useState('')
    const [group, setGroup] = useState('')
    const [role, setRole] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch("/characters", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                image: image,
                overview: overview,
                group_id: parseInt(group),
                role_id: parseInt(role)
            }),
        })
        .then(res => res.json())
        .then(newCharacter => addNewCharacter(newCharacter))

        setName('')
        setImage('')
        setOverview('')
        setGroup('')
        setRole('')
    }


    return (
        <div className="newCharacter">
            <h1>Add a New Character</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input type='text' name='image' placeholder="ImageURL" value={image} onChange={e => setImage(e.target.value)} />
                <input type='text' name='overview' placeholder="Description" value={overview} onChange={e => setOverview(e.target.value)} />
                <input type='number' name='Group' min='1' max='4' placeholder="Group" value={group} onChange={e => setGroup(e.target.value)} />
                <input type='number' name='Role' min='1' max='3' placeholder="Role" value={role} onChange={e => setRole(e.target.value)} />
                <button type="submit">submit</button>
            </form>
        </div>
    )


}

export default CreateCharacter