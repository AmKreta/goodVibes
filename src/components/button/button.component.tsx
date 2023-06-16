import React from 'react';
import './button.style.css';

interface BUTTON_PROPS {
    title: string;
    type?: 'submit' | 'reset' | 'button';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<BUTTON_PROPS> = (props) => {
    return <button type={props.type} onClick={props.onClick}>
        {props.title}
    </button>
};

export default Button;