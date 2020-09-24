import {axiosWithAuth} from '../utils/axiosWithAuth'
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const initialValues = {
    strain_name: '',
    type: '',
    rating: '',
    effects: '',
    flavors: '',
    description: ''

}

const StrainForm = ({setList, list}) => {
    const [values , setValues] = useState(initialValues)
    const history = useHistory();
    const {id} = useParams();
    console.log(values)
    useEffect(() => {
        const itemy = list.find(
            (thing) => `${thing.id}` === id);
            setValues(itemy)
       
          
      }, [id]);
    

    // const handleChanges = (event) => {
    //     setValues({...values,[event.target.name] : event.target.value });
    //   };
    const handleChanges = (e) => {
        e.persist();
        let value = e.target.value;
        if (e.target.name === 'effects' || 'flavors') {
          value = value.split(',');
        }
        
    
        setValues({
          ...values,
          [e.target.name]: value,
        });
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/api/strain/edit/${id}`, values)
        .then((res)=> {
            setValues(res.data);
            setList(list.map(item =>{
                if(item.id== id){
                    return values
                } else{
                    return item
                }
            }))
            history.push(`/StrainList`);
        }); 
    };

    return(
        <div className='update'>
            <h2>Update A Strain</h2>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <input type= 'text' name='strain_name' value={values.strain_name} onChange={handleChanges} placeholder='Strain Name'  />
                    <select name="type" onChange={handleChanges}><option value="indica">Indica</option> <option value="sativa">Sativa</option><option value="hybrid">Hybrid</option></select> 
                    <input type='number' name ='rating' value={values.rating} onChange={handleChanges} placeholder='Rating'  />
                    <input type='text' name ='effects' value={values.effects} onChange={handleChanges} placeholder='Effects'  />
                    <input type='text' name ='flavors' value={values.flavors} onChange={handleChanges} placeholder='Flavors'  />
                    <input type='text' name ='description' value={values.description} onChange={handleChanges} placeholder='Description'  />
                    <button>UPDATE</button> 
                </form>
                
            </div>
            

        </div>
    )
}
export default StrainForm;