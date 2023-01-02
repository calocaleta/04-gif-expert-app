import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

    const onAddCategory = (newCategory) => {
        //console.log(newCategory);
        setCategories([...categories,newCategory]);
        //setCategories(cat => [...cat,'Valorant2']);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                onNewCategory={value => onAddCategory(value)} />

            {/* Listado de Gif */}
            
            <ol>
                { categories.map( category => { return <li key={category}>{category}</li>} )}
                
            </ol>
                {/* Gif Item */}

        </>
    )
}
