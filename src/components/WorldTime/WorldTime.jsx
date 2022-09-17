import React, { useState } from 'react';
import WorldTimeForm from './WorldTimeForm/WorldTimeForm';
import WorldTimeClock from './WorldTimeClock/WorldTimeClock';
import { v4 as uuidv4 } from 'uuid';

const WorldTime = () => {
    const [state, setState] = useState({
        'title': '',
        'timeZone': '',
        'clocks': [
            {
                'title': 'Moscow',
                'timeZone': 3,
                'id': uuidv4(),
            },
            {
                'title': 'London',
                'timeZone': 1,
                'id': uuidv4(),
            },
        ],
    });

    /**
     * Обработчик ввода в инпуты
     */
    function handleInput({ target }) {
        const name = target.name;
        const value = target.value;
        setState(prevState => {
            return { ...prevState, [name]: value };
        });
    }

    /**
     * Обработчик отправки формы
     */
    function handleSubmit(e) {
        e.preventDefault();
        setState(prevState => {
            return {
                'title': '',
                'timeZone': '',
                'clocks': [
                    ...prevState.clocks,
                    {
                        'title': state.title,
                        'timeZone': Number(state.timeZone),
                        'id': uuidv4()
                    }
                ]
            };
        });
    }

    /**
     * Обработчик удаления часов
     */
    function handleRemoveClock(id) {
        setState(prevState => {
            const newObject = prevState.clocks.filter(clock => clock.id !== id);
            return {...prevState, 'clocks': [...newObject]};
        });
    }

    return (
        <div className="wrapper">
            <div className="form">
                <WorldTimeForm titleValue={state.title} timeZoneValue={state.timeZone} handleInput={handleInput} handleSubmit={handleSubmit} />
            </div>
            <div className="clocks">
                {state.clocks.length > 0 && state.clocks.map(clock => <WorldTimeClock title={clock.title} timeZone={clock.timeZone} key={clock.id} id={clock.id} handleRemoveClock={handleRemoveClock} />)}
            </div>
        </div>
    );
}

export default WorldTime;