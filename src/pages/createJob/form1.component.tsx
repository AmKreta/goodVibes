import FormControl from '../../components/formControl/formControl.component';
import TextInput from '../../components/textInput/textInput.component';
import FormHeader from './formHeader.component';
import Button from '../../components/button/button.component';

interface FORM1_PROPS {
    onSave: React.MouseEventHandler<HTMLButtonElement>;
}


const Form1: React.FC<FORM1_PROPS> = function (props) {

    const formFields = [
        { displayName: 'Job title', required: true, id: 'jobTitle', placeholder: 'ex UI UX Designer' },
        { displayName: 'Company name', required: true, id: 'companyName', placeholder: 'ex Google' },
        { displayName: 'Industry', required: true, id: 'industry', placeholder: 'ex Information Technology' },
        { displayName: 'Location', id: 'location', placeholder: 'ex Chennai' },
        { displayName: 'Remote Type', id: 'remoteType', placeholder: 'ex In-Office' },
    ]

    return <form className='flex flex-col flex-nowrap'>
        <FormHeader formNo={1} />
        <fieldset className='flex-1'>
            {formFields.slice(0, -2).map(item => <FormControl
                for={item.id}
                label={item.displayName}
                required={item.required}
            >
                <TextInput id={item.id} placeholder={item.placeholder} />
            </FormControl>)}
            <div className='flex align-middle justify-between gap-6'>
                {formFields.slice(-2).map(item => <FormControl
                    for={item.id}
                    label={item.displayName}
                    required={item.required}
                    style={{ flexGrow: 1 }}
                >
                    <TextInput id={item.id} placeholder={item.placeholder} />
                </FormControl>)}
            </div>
        </fieldset>
        <div className='text-right'>
            <Button title='Next' type='button' onClick={props.onSave} />
        </div>
    </form>
}

export default Form1;