import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);
/*
    const onAddCategory = () => {
        setCategories([...categories,'Valorant']);
        //setCategories(cat => [...cat,'Valorant2']);
    }
*/
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onAddCategory={setCategories} />

            {/* Listado de Gif */}
            
            <ol>
                { categories.map( category => { return <li key={category}>{category}</li>} )}
                
            </ol>
                {/* Gif Item */}

        </>
    )
}
