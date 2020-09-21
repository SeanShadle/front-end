import React, {useState} from 'react'
import strainData from '../mockData'
import { v4 as uuidv4 } from "uuid";

const initialValues = {
    search:""
}

const StrainList = () => {
    const [search, setSearch] = useState(initialValues);
    const [data, setData] = useState(strainData.map((strain) => ({ ...strain, newid: uuidv4() })));

    // const convert = straindata.map((strain) => ({ ...strain, newid: uuidv4() }));
    console.log(data)
    const onChange = (e) => {
        setSearch({ [e.target.name]: e.target.value });
      };
    const filterIt = (value) => {
        const filteredData = data.map((item) => {return item})
        setData(filteredData.filter((item)=> item.type === value))
    }
   

    function makeLowerCase(value) {
        return value.toString().toLowerCase();
      }
    
    
    return (
        <>
            <input type="text" name="search" value={search.search} onChange={onChange} />
            <select name="filter" >
                    <option value="all">All Items</option>
                    <option value="indica">Indica</option>
                    <option value="sativa">Sativa</option>
                    <option value="hybrid">Hybrid</option>
                </select>
            <div>
                {data.filter((item)=>item.strain_name.toLowerCase().includes(makeLowerCase(search.search)))
                .map((item)=>(
                    <div key={item.id} item={item}>
                        <img className="item-list-image" src={item.img} alt={item.strain_name} />
                        <h4>{item.strain_name}</h4>
                        <h4>{item.type}</h4>
                        <p>{item.description}</p>
                    </div>
                    
                ))}
            </div>
        </>
    )
}
export default StrainList;