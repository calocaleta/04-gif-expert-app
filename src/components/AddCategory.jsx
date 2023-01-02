import { useState } from 'react'

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChanged = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //console.log(inputValue);

        if(inputValue.trim().length <= 1 )  return;

        onAddCategory(cat => [...cat,inputValue]);
        setInputValue('');
        
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ onInputChanged }
            />
        </form>
    )
}