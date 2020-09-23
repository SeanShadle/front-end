import React from 'react';
import { Route, NavLink, useHistory, useParams } from "react-router-dom";
import strainData from '../mockData'
import styled, {keyframes} from 'styled-components'

const Strain = (props) => {
    const history = useHistory();
    const {id} = useParams();
    const item = strainData.find(
        (thing) => `${thing.id}` === id
      );
    
      if (!strainData.length || !item) {
        return <h2>Loading item data...</h2>;
      }
    
    
    return (
        <StrainDiv className="item-wrapper">
            <StrainImg className="item-list-image" src={item.img} alt={item.strain_name} />
            <StrainName>{item.strain_name}</StrainName>
            <StrainType>{item.type}</StrainType> 
            <StrainP>Rating : {item.rating}/5</StrainP>
            <StrainP>{item.description}</StrainP>
           
            <StrainBtn onClick = {()=> props.addIt(item)}>Add to List</StrainBtn>
        </StrainDiv>
    )

}

const StrainDiv = styled.div`
  font-family: 'Maven Pro', sans-serif;
  background-color:#F7F7F7;
  padding: 3vh 0;
  border-radius: 10px;
`

const StrainImg = styled.img`
  max-width: 13vw;
  border: none;
  border-radius: 10px;
`

const StrainName = styled.h4`
  text-transform: capitalize;
  font-size: 2rem;
  margin: 0;
`

const StrainType = styled.h4`
  text-transform: capitalize;
  font-size: 1.5rem;
`

const StrainP = styled.p`
  max-width: 25vw;
  margin: 0 0 3vh 11vw;
`
const StrainBtn = styled.button`
    width: 10vw;
    color: white;
    background-color: #044A53;
    padding: 1vh 0vw;
    text-align:center;
    border-radius: 5px;
    margin-left: .75vw;
`

export default Strain