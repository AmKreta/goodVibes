import React from 'react';

const FormHeader:React.FC<{formNo:number}>=(props)=>{
    return <div className='flex justify-between text-font-20'>
        <div>Create job</div>
        <div>Step {props.formNo}</div>
    </div>
}

export default FormHeader;