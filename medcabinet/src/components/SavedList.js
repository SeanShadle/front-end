import React, {useState,} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { v4 as uuidv4 } from "uuid";
const SavedList = () => {
    const [data, setData] = useState([])
    const [values, setValues] = useState([])
    console.log(values)

    const getData = (e) => {
    e.preventDefault()
      axiosWithAuth()
          .get('/api/strain/all') /*DS */
          .then(res => {
           setData(res.data)
           setValues(res.data)
            
          })
          .catch(err => console.log(err));
      };
      console.log(data)
    const handleSubmit = (e) => {
        e.preventDefault();
        const convert = values.map((strain) => ({ ...strain, newid: uuidv4() }));
        console.log(convert)
        axiosWithAuth()
          .post('/api/strain/add', convert)
          .then(res => {
            console.log(res)
          })
          .catch(err => console.log(err));
   
      };
      return (
        <>
        <button onClick={getData}>Fetch Data!</button>
        <button onClick={handleSubmit}>Fetch Data!</button>
      
        {data.map(strain =>(
                    <div key={strain.id} strain={strain} >
                        <h4>{strain.strain_name}</h4>
                        <h4>{strain.type}</h4>
                    </div>
                ))}
        </>
      )
    }

export default SavedList
