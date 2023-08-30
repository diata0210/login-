import {useController, Control} from 'react-hook-form'
import {Box} from '@mui/system'
import TextField from '@mui/material/TextField'
export interface InputFieldProps{
    name: string, 
    label?: string,
    control: Control<any>
    type?:string
}

export function InputField({name, label, control, type, ...rest} : InputFieldProps){

    const {
        field: {onChange, onBlur, value, ref}, 
        fieldState: {error, invalid}
    } = useController({
        name, 
        control
    })
    return (
        <>
            <TextField 
                name={name}
                value={value}
                type={type}
                label={name}
                onBlur={onBlur}
                inputRef={ref}
                onChange={onChange}/>

                
        </>
    )
}