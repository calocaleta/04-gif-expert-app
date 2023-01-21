import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if( categories.includes( newCategory)) return;

        //console.log(newCategory);
        setCategories([...categories,newCategory]);
        //setCategories(cat => [...cat,'Valorant2']);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={value => onAddCategory(value)} />
           
            { categories.map( category => 
                (
                    <GifGrid category={category} />
                )
            )}


        </>
    )
}
