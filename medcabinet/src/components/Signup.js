import React from 'react'
import useForm from "react-hook-form"

export default function Signup(){
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="First Name" name="first-name" ref={register} />
            <input type="text" placeholder="Last Name" name="last-name" ref={register} />
            <input type="text" placeholder="Email" name="email" ref={register} />
            <input
            type="password"
            placeholder="Password"
            name="password"
            ref={register({required: "Password required", minLength: 8})}
            />
        {errors.password && <p>{errors.password.message}</p>}
        <input type="submit" />
        </form>
    )
}