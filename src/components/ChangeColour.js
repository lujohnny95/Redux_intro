import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColour } from '../features/theme';

const ChangeColour = () => {
    const [colour, setColour] = useState("");
    const dispatch = useDispatch();

    return( 
        <div>
            <input type="text" 
                onChange={(event => {
                    setColour(event.target.value);
                })}
            />
            <button
                onClick={() => {
                    dispatch(changeColour());
                }}
            >
            Change Colour</button>
        </div>
    )
};

export default ChangeColour;
