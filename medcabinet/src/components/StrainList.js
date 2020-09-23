import React, {useState} from 'react'
import strainData from '../mockData'
import {useHistory} from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";
import styled, {keyframes} from 'styled-components'

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
        <StrainMain>
            <SearchBoxDiv>
                <StrainInput type="text" name="search" placeholder="Strain Name" value={search.search} onChange={onChange} />
                <StrainSelect name="type" onChange={onSelectChange} >
                        <option value='all'>All Items</option>
                        <option value="indica">Indica</option>
                        <option value="sativa">Sativa</option>
                        <option value="hybrid">Hybrid</option>
                    </StrainSelect>
            </SearchBoxDiv>
            <div className="items-list-wrapper">
                {data
                .filter((item)=>item.strain_name.toLowerCase().includes(makeLowerCase(search.search)))
                .map((item)=>(
                    <ItemCard className ="item-card" key={item.id} item={item} onClick={(ev) => routeToItem(ev, item)}>
                        <ListImg className="item-list-image" src={item.img} alt={item.strain_name} />
                        <h4>{item.strain_name}</h4>
                        <h4>{item.type}</h4>
                        
                    </ItemCard>
                    
                ))}
            </div>
        </StrainMain>
        </>
    )
}

const StrainMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F7F7F7;
    width: 25vw;
    margin-left: 37vw;
    padding-top: 3vh;
    border-radius: 10px;
`

const SearchBoxDiv = styled.div`
    display:flex;
    flex-direction: column;
    width: 15vw;
`

const StrainSelect = styled.select`
    padding: 1rem 12rem 1rem .5rem; 
    margin-bottom: 1vh;
    border-radius: 5px;
`

const StrainInput = styled.input` 
    padding: 1rem 12rem 1rem .5rem; 
    margin-bottom: 1vh;
    border-radius: 5px;
`

const ItemCard = styled.div`
    border-bottom: 1px dashed black;
    padding: 3vh 0;
`

const ListImg = styled.img`
    border-radius: 10px;
`


export default StrainList;