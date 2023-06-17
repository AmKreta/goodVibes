import React, { CSSProperties } from 'react';
import './button.style.css';

interface BUTTON_PROPS {
    title: string;
    type?: 'submit' | 'reset' | 'button';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    style?: CSSProperties;
    inverted?: boolean;
}

const Button: React.FC<BUTTON_PROPS> = (props) => {
    return <button type={props.type} onClick={props.onClick} className={`${props.className} ${props.inverted ? 'inverted' : ''}`}>
        {props.title}
    </button>
};

export default Button;