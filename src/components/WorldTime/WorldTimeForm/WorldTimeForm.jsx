import React from 'react';

const WorldTimeForm = ({ titleValue, timeZoneValue, handleInput, handleSubmit }) => {

    return (
        <form action="#0" onSubmit={handleSubmit}>
            <label htmlFor="titleInput">
                <span>Название</span>
                <input type="text" id='titleInput' name='title' value={titleValue} onChange={handleInput} />
            </label>
            <label htmlFor="timeZoneInput">
                <span>Временная зона</span>
                <input type="number" id='timeZoneInput' name='timeZone' value={timeZoneValue} onChange={handleInput} />
            </label>
            <button type='submit'>Добавить</button>
        </form>
    );
}

export default WorldTimeForm;