import React, { useEffect, useState } from "react";
import DogItem from "./DogItem";

function DogList() {
    const [dogs, setDogs] = useState([]);
    

    useEffect(() => {
        fetch("http://localhost:3000/dogs")
        .then((r) => r.json())
        .then((data) => {
            setDogs(data);
        })    
    }, []);
    
    

    const dogItems = dogs.map((dog) => (
        <DogItem
            key={dog.id}
            id={dog.id}
            name={dog.name}
            life={dog.life}
            image={dog.imageUrl}
        />
    ));
    
    return (
        <section id="dogs">
            <h2>Dog Breeds</h2>
            <div id="dog-list">{dogItems}</div>
        </section>
    );
}

export default DogList;
