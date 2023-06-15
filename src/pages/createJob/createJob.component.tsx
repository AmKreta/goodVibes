import React, { useMemo, useState } from 'react';
import './createJob.style.css';
import Form1 from './form1.component';


const CreateJob:React.FC<any>=()=>{
    const [activeForm, setActiveForm]=useState(1);

    return <div className='tabContainer'>
       {activeForm===1?<Form1 />:null}
    </div>
}

export default CreateJob;