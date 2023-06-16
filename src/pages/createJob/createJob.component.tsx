import React, { useMemo, useState } from 'react';
import './createJob.style.css';
import Form1 from './form1.component';
import Form2 from './form2.component';


const CreateJob: React.FC<any> = () => {
    const [activeForm, setActiveForm] = useState(1);

    const onSave = () => {
        setActiveForm(prevState => prevState === 1 ? 2 : 1);
    }

    return <div className='tabContainer'>
        {activeForm === 1
            ? <Form1 onSave={onSave} />
            : <Form2 onSave={onSave} />}
    </div>
}

export default CreateJob;