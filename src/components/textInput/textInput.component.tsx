import React, { CSSProperties } from 'react';
import './textInput.style.css';

export interface INPUT_PROPS {
    id: string;
    type?: 'text' | 'number';
    name?: string;
    className?: string;
    value?: string | number | undefined;
    setValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    style?: CSSProperties;
};

const TextInput: React.FC<INPUT_PROPS> = (props) => {
    return <input
        type={props.type || 'text'}
        name={props.name}
        id={props.id}
        onChange={props.setValue}
        value={props.value}
        placeholder={props.placeholder}
        className={props.className}
    />;
}

export default TextInput;