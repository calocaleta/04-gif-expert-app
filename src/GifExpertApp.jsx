import { useState } from "react"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

    const onAddCategory = () => {
        setCategories([...categories,'Valorant']);
        //setCategories(cat => [...cat,'Valorant2']);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* Listado de Gif */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                { categories.map( category => { return <li key={category}>{category}</li>} )}
                
            </ol>
                {/* Gif Item */}

        </>
    )
}
