import React, { CSSProperties } from 'react';
import Input from '../textInput/textInput.component';
import './formControl.style.css';

export interface FORM_CONTROL_PROPS {
    label: string;
    for: string;
    className?: string;
    children: React.ReactElement | React.ReactElement<typeof Input>[];
    err?: boolean;
    errMessage?: string;
    style?: CSSProperties
    required?: boolean;
}


const FormControl: React.FC<FORM_CONTROL_PROPS> = (props) => {
    return <div className={`form-control ${props.className}`} style={props.style}>
        <div className="label-container">
            <label htmlFor={props.for} className={props.required ? 'required' : ''}>{props.label}</label>
        </div>
        {props.children}
        {props.err ? <div className='errorMessage'>{props.errMessage}</div> : null}
    </div>
}

export default FormControl;