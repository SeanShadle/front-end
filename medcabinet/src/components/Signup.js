import React from 'react'
import {useForm} from "react-hook-form"
import styled, {keyframes} from 'styled-components'

export default function Signup(){
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <FormDiv>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledInput type="text" placeholder="First Name" name="first-name" ref={register} />
            <StyledInput type="text" placeholder="Last Name" name="last-name" ref={register} />
            <StyledInput type="text" placeholder="Email" name="email" ref={register} />
            <StyledInput
            type="password"
            placeholder="Password"
            name="password"
            ref={register({required: "Password required", minLength: 8})}
            />
        {errors.password && <p>{errors.password.message}</p>}
        <StyledSubmit type="submit" value="Sign up"/>
        </StyledForm>
        </FormDiv>
    )
}

const kf = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const FormDiv = styled.div`
    display: flex;
    background-color: #F7F7F7;
`

const StyledInput = styled.input`
    background-color: #918383;  
`
const StyledSubmit = styled.input`
    width: 10vw;
    color: white;
    text-align: center;
    background-color: #044A53;
    padding: 1rem 5rem 1rem 5rem;
    border-radius: 8px;
`

const StyledForm = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
`



