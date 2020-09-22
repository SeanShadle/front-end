import React from 'react'
import {useForm} from "react-hook-form"

export default function StrainForm(){
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Strain" ref={register} />
            <select>
                <option value="">Select a type</option>
                <option value="Sativa">Sativa</option>
                <option value="Indica">Inidica</option>
                <option value="Hybrid">Hybrid</option>
            </select>
            <select>
                <option value="">Select a rating</option>
                <option value="one">★☆☆☆☆</option>
                <option value="two">★★☆☆☆</option>
                <option value="three">★★★☆☆</option>
                <option value="four">★★★★☆</option>
                <option value="five">★★★★★</option>
            </select>
            <input type="text" placeholder="Enter the desired effect" ref={register} />
            <input type="text" placeholder="Enter the desired flavor" ref={register} />
            <input type="text" placeholder="Description" ref={register}/>
        </form>
    )
}