import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function DogDetail() {
    const [dog, setDog] = useState(null);
    const { id } = useParams()
    
    useEffect(() => {
        fetch(`http://localhost:3000/dogs/${id}`)
            .then((r) => r.json())
            .then((data) => setDog(data.dog))
    }, [id])
    
    if (!dog) return <h2>Loading...</h2>
    
    const { name, life, imageUrl } = dog
    
    
    return (
        <section>
            <div className="dogs-item">
                <h1>{name}</h1>
                <p>{life}</p>
                <img src= {imageUrl} alt="dog" />
            </div>
        </section>
    );
}

export default DogDetail;
