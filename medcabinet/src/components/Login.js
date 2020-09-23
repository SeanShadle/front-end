import React from 'react'
import {useForm} from "react-hook-form"
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from "../actions";
import styled, {keyframes} from 'styled-components'
import {Link} from 'react-router-dom'

export default function Login(props){
    const {push} = useHistory()
    const dispatch = useDispatch();
    const {register, handleSubmit, setValue, errors} = useForm();

    const onSubmit = data => {
        console.log(data);
        const user = {
            username: data.username,
            password: data.password
        }
        dispatch(loginUser(user, push));
        // history.push('/StrainList')
        setValue('username', '')
        setValue('password', '')
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
            <StyledButton>Login</StyledButton>
            {/* <StyledSubmit type="submit" value="Login" /> */}
            <LinkDiv>
            <Link to ='/Signup'>Don't have an account? Sign up here!</Link>
            </LinkDiv>
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

const LinkDiv = styled.div`
    margin: 1rem 0 0 3.2rem;
`

const StyledButton = styled.button`
    width: 10vw;
    color: white;
    background-color: #044A53;
    padding: 1rem 0rem;
    text-align:center;
    border-radius: 5px;
    margin-left: 5vw
`
