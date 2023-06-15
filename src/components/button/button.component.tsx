import React from 'react';
import './button.style.css';

interface BUTTON_PROPS{
    title:string
}

const Button:React.FC<BUTTON_PROPS>=({title})=>{
    return <button>
        {title}
    </button>
};

export default Button;