import React from 'react'
import {useForm} from "react-hook-form"
import styled, {keyframes} from 'styled-components'

export default function Login(){
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <FormDiv>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Styledh2>Med Cabinet</Styledh2>
            <h3><b>Login</b></h3>
            <b>Username:</b>
            <StyledInput type="text" placeholder="Username" name="username" ref={register} />
            <b>Password:</b>
            <StyledInput 
            type="password" 
            placeholder="Password" 
            name="password" 
            ref={register({required: "Password required", minLength: 8})} 
            />
            <StyledSubmit type="submit" value="Login" />
        </StyledForm>
        </FormDiv>
    )
}

const FormDiv = styled.div`
    display: flex;
    background-color: #F7F7F7;
    width: 25vw;
    margin: 5vh 35vw;
    padding: 3vh 0 5vh 5vw;
    text-align: left;
`
const StyledForm = styled.form`
    display:flex;
    flex-direction: column;
`

const Styledh2 = styled.h2`
    text-align:center;
    font-size: 2rem;
`

const StyledInput = styled.input` 
    padding: 1rem 12rem 1rem .5rem; 
    margin-bottom: 1vh;
    border-radius: 5px;
`
const StyledP = styled.p`
    width: 20vw;
    text-align: center;
`

const StyledSubmit = styled.input`
    width: 10vw;
    color: white;
    background-color: #044A53;
    padding: 1rem 0rem;
    text-align:center;
    border-radius: 5px;
    margin-left: 5vw
`
