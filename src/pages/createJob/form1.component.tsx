import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import React, { useMemo } from 'react';
import * as yup from 'yup';
import FormControl from '../../components/formControl/formControl.component';
import TextInput from '../../components/textInput/textInput.component';
import camelCaseToTitleCase from '../../util/camelCaseToTitleCase';
import FormHeader from './formHeader.component';
import Button from '../../components/button/button.component';

interface FORM_FIELDS {
    jobTitle: string,
    companyName: string,
    industry: string,
    location: string,
    remoteType: string
};

const Form1: React.FC<any> = function () {

    const initialValues = useMemo<FORM_FIELDS>(() => ({
        jobTitle: '',
        companyName: '',
        industry: '',
        location: '',
        remoteType: ''
    }), []);

    const validationSchema = useMemo(() => yup.object<FORM_FIELDS>({
        jobTitle: yup.string().required('this is a required field'),
        companyName: yup.string().required('this is a required field'),
        industry: yup.string().required('this is a required field'),
        location: yup.string().required('this is a required field'),
        remoteType: yup.string().required('this is a required field'),
    }), []);

    const onSubmit = (values: FORM_FIELDS, action: FormikHelpers<FORM_FIELDS>) => {

    }



    return <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnBlur
    >
        <Form className='flex flex-col flex-nowrap'>
            <FormHeader formNo={1} />
            <fieldset className='flex-1'>
                {Object.keys(initialValues).slice(0, -2).map((fieldName, index) => <Field name={fieldName} key={index}>
                    {(props: FieldProps) => <FormControl
                        for={fieldName}
                        label={camelCaseToTitleCase(fieldName)}
                        err={(props.meta.error && props.meta.touched) as boolean}
                        errMessage={props.meta.error}
                    >
                        <TextInput id={fieldName} value={props.field.value} setValue={props.field.onChange} className='required' />
                    </FormControl>
                    }
                </Field>)}
                <div className='flex align-middle justify-between gap-6'>
                    {Object.keys(initialValues).slice(-2).map((fieldName, index) => <Field name={fieldName} key={index}>
                        {(props: FieldProps) => <FormControl
                            for={fieldName}
                            label={camelCaseToTitleCase(fieldName)}
                            err={(props.meta.error && props.meta.touched) as boolean}
                            errMessage={props.meta.error}
                            style={{ flexGrow: 1 }}
                        >
                            <TextInput id={fieldName} value={props.field.value} setValue={props.field.onChange} />
                        </FormControl>
                        }
                    </Field>)}
                </div>
            </fieldset>
            <div className='text-right'>
                <Button title='Next'/>
            </div>
        </Form>
    </Formik>
}

export default Form1;