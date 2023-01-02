import { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChanged = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
    }

    return (
        <form onSubmit={(event) => onSubmit(event) }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ onInputChanged }
            />
        </form>
    )
}
