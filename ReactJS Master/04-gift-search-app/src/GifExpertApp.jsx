import { useState } from "react";
import { AddCategory , GridGif } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    
    const onAddCategory = (newCategory) => {
        
        if (categories.includes(newCategory)) {
            setCategories(value => [newCategory, ...value.filter(category => category !== newCategory)]);
        } else {
            setCategories([ newCategory, ...categories ]);
        }
        
        
    }
    

    return (
        <>
            {/* titulo */}
            <h1 className="text-3xl text-center mb-10">GifExpertApp</h1>
            {/* Input */}
            <AddCategory onNewCategory={onAddCategory} />
            
            
            {/* Listado de Gifs */}
            <ol className="list-decimal px-3">
                {categories.map(
                    (category) => 
                    <GridGif key={category} category={category} />
                )}
                
            </ol>

                {/* Gif Item */}
        </>
    )
}