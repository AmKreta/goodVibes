import React from 'react';
import './radioInput.style.css';

interface RADIO_INPUT_PROPS {
    name: string;
    id?: string;
    checked?: boolean;
    setChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string; 
} 

const RadioInput: React.FC<RADIO_INPUT_PROPS> = (props) => {
    return <div className={`radio-input-container ${props.className}`}>
        <input
            type='radio'
            name={props.name}
            id={props.id}
            checked={props.checked}
            onChange={props.setChecked}
        />
        {props.placeholder ? <div className='placeholder-text'>{props.placeholder}</div> : null}
    </div>
}

export default RadioInput;