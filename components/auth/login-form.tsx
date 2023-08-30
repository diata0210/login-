import { Box } from "@mui/material"
import { useForm } from "react-hook-form"
import { InputField } from "../form"
import { LoginPayLoad } from "@/models"


export interface LoginFormProps{
    onSubmit?: (payload: LoginPayLoad) => {}
}
export function LoginForm({onSubmit}: LoginFormProps) {

    const {handleSubmit, control} = useForm<LoginPayLoad>({
        defaultValues: {
            username: "", 
            password: ""
        }
    })
    function handleLoginSubmit(payload: LoginPayLoad){
        console.log(payload);
        onSubmit?.(payload)
    }
    return (
        <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)} className="flex gap-3 flex-col justify-center">
            <InputField name="username" control={control}/>
            <InputField name="password" control={control} type="password"/>
            <button className="border-[1px] text-black border-red-300">Submit</button>
        </Box>
    )
}