import { useState } from "react";

import { PropTypes } from "prop-types";

export const AddCategory = ( { onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = ({ target: { value } }) => {
        setInputValue(value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
        if (inputValue.trim().length <= 1) return;
        
        // setCategories(categories => [ ...categories , inputValue]);

        // emite el nuevo valor
        onNewCategory(inputValue.trim());
        setInputValue('');
        
    }

    return (
        <form className="flex gap-2 items-center justify-center" onSubmit={onSubmit} aria-label="form" >
            <input type="text" placeholder="Buscar Gifs" id="search" onChange={onInputChange} value={inputValue}  />
            <button type="submit"  className="p-3 border-1 border-black rounded-lg bg-slate-500 text-white ">Add</button>
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}