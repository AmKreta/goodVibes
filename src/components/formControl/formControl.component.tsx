import React, { CSSProperties } from 'react';
import Input from '../textInput/textInput.component';
import './formControl.style.css';

export interface FORM_CONTROL_PROPS {
    label: string;
    for: string;
    className?: string;
    children: React.ReactElement<typeof Input>;
    err?:boolean;
    errMessage?:string;
    style?:CSSProperties
}


const FormControl: React.FC<FORM_CONTROL_PROPS> = (props) => {
    return <div className={`form-control ${props.className}`} style={props.style}>
        <label htmlFor={props.for}>{props.label}</label>
        {props.children}
        {props.err?<div>{props.errMessage}</div>:null}
    </div>
}

export default FormControl;