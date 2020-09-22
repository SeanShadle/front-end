import React, {useState} from 'react'
import strainData from '../mockData'
import { v4 as uuidv4 } from "uuid";

const initialSearch = {
    search:"",
    
}
const initialFilter= {
  type:""  
}

const StrainList = () => {
    const [search, setSearch] = useState(initialSearch);
    const [filter, setFilter] = useState(initialFilter)
    const [data, setData] = useState(strainData.map((strain) => ({ ...strain, newid: uuidv4() })));

    let history = useHistory();
    function routeToItem(ev, item) {
        ev.preventDefault();
        history.push(`/StrainList/${item.id}`);
    }

    // const convert = straindata.map((strain) => ({ ...strain, newid: uuidv4() }));
    
    const onChange = (e) => {
        setSearch({ [e.target.name]: e.target.value });
        
      };
    const onSelectChange = (e) => {
        setFilter({ [e.target.name]: e.target.value })
        if (e.target.value == "all" ) {
            setData(strainData)
        } else {
            filterIt(e.target.value)
        }
        
    }
    const filterIt = (value) => {
        const filteredData = strainData.map((item) => {return item})
        const filt =filteredData.filter((item)=> item.type === value)
        setData(filt);
    }
   

    function makeLowerCase(value) {
        return value.toString().toLowerCase();
      }
    
    
    return (
        <>
            <input type="text" name="search" value={search.search} onChange={onChange} />
            <select name="type" onChange={onSelectChange} >
                    <option value='all'>All Items</option>
                    <option value="indica">Indica</option>
                    <option value="sativa">Sativa</option>
                    <option value="hybrid">Hybrid</option>
                </select>
            <div>
                {data
                .filter((item)=>item.strain_name.toLowerCase().includes(makeLowerCase(search.search)))
                .map((item)=>(
                    <div key={item.id} item={item}  onClick={ev => routeToItem(ev, item)}>
                        <img className="item-list-image" src={item.img} alt={item.strain_name} />
                        <h4>{item.strain_name}</h4>
                        <h4>{item.type}</h4>
                        
                    </div>
                    
                ))}
            </div>
        </>
    )
}
export default StrainList;