import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function NewDog() {
    const [name, setName] = useState("");
    const [life, setLife] = useState("");
    const [imageUrl, setImage] = useState([]);
    
    const history = useHistory();
    
    function handleSubmit(e) {
        e.preventDefault()
        const formData = {
            dog: { name, life, imageUrl }
        }
        fetch("http://localhost:3000/dogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(data => {
                history.push(`/dogs/${data.project.id}`)
            })
    }
    

    return (
        <section id="form">
            <h3>Add Dog Breed</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                
                <label htmlFor="life">Life Span:</label>
                <textarea id="life" value={life} onChange={e => setLife(e.target.value)} />
                
                <label htmlFor="img">Image Url:</label>
                <textarea id="img" value={imageUrl} onChange={e => setImage(e.target.value)} />
                
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default NewDog