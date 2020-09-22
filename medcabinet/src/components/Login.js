import React from 'react'
import {useForm} from "react-hook-form"

export default function Login(){
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Email" name="email" ref={register} />
            <input 
            type="text" 
            placeholder="Password" 
            name="password" 
            ref={register({required: "Password required", minLength: 8})} 
            />
            <input type="submit" value="Login" />
        </form>
    )
}