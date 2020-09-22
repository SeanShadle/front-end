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
            <Styledh2>Med Cabinet</Styledh2>
            <h3><b>Signup</b></h3>
            <b>First Name:</b>
            <StyledInput type="text" placeholder="First Name" name="first-name" ref={register({required: "Password required"})} />
            <b>Last Name:</b>
            <StyledInput type="text" placeholder="Last Name" name="last-name" ref={register({required: "Password required"})} />
            <b>Email:</b>
            <StyledInput type="text" placeholder="Example@example.com" name="email" ref={register({required: "Password required", minLength: 8})} />
            <b>Username:</b>
            <StyledInput type="text" placeholder="Create your username" name="username" ref={register({required: "Password required", minLength: 8})} />
            <b>Password:</b>
            <StyledInput
            type="password"
            placeholder="Password"
            name="password"
            ref={register({required: "Password required", minLength: 8})}
            />
            <StyledP>We respect your privacy. Names and emails are not displayed publically. By creating your Med Cabinet account, you agree to the terms of use and privacy policy.</StyledP>
        {errors.password && <p>{errors.password.message}</p>}
        <StyledSubmit type="submit" value="Sign up"/>
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


