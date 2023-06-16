import FormControl from '../../components/formControl/formControl.component';
import TextInput from '../../components/textInput/textInput.component';
import FormHeader from './formHeader.component';
import Button from '../../components/button/button.component';
import { useMemo } from 'react';
import RadioInput from '../../components/radioInput/radioInput.component';

interface FORM2_PROPS{
    onSave:React.MouseEventHandler<HTMLButtonElement>;
}


const Form2: React.FC<FORM2_PROPS> = function (props) {

    const formFields = useMemo(() => [
        {
            displayName: 'Experience',
            id: 'experience',
            children: [
                { id: 'minimumExperience', placeholder: 'Minumum' },
                { id: 'maximunExperience', placeholder: 'Maximum' }
            ]
        },
        {
            displayName: 'Salary',
            id: 'salary',
            children: [
                { id: 'minimumSalary', placeholder: 'Minimum' },
                { id: 'maximumSalary', placeholder: 'Maximum' }
            ]
        },
        {
            displayName: 'Total employee',
            id: 'totalEmployee',
            children: [{ id: 'totalEmploye', placeholder: 'ex. 100' }]
        },
        {
            displayName: 'Apply Type',
            type: 'radio',
            id: 'applyType',
            children: [
                { id: 'quickApply', name: 'applyType', type: 'radio', placeholder:'Quick apply' },
                { id: 'externalApply', name: 'applyType', type: 'radio', placeholder:'External Apply' }
            ]
        },
    ], []);

    return <form className='flex flex-col flex-nowrap'>
        <FormHeader formNo={2} />
        <fieldset className='flex-1'>
            {formFields.map(field => <FormControl label={field.displayName} key={field.id} for={field.id}>
                {
                    field.type === 'radio'
                        ? <div className='flex flex-row align-middle justify-between gap-6'>
                            {field.children.map(fieldChild => <RadioInput
                                className='flex-1'
                                key={fieldChild.id}
                                id={fieldChild.id}
                                placeholder={fieldChild.placeholder}
                                name={fieldChild.name}
                            />)}
                        </div>
                        : <div className='flex flex-row align-middle justify-between gap-6'>
                            {field.children.map(fieldChild => <TextInput
                                className='flex-1'
                                key={fieldChild.id}
                                id={fieldChild.id}
                                placeholder={fieldChild.placeholder}
                            />)}
                        </div>
                }
            </FormControl>)}
        </fieldset>
        <div className='text-right'>
            <Button title='Next' type='button' onClick={props.onSave}/>
        </div>
    </form>
}

export default Form2;