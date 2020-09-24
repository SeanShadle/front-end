import React, {useState,} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'
import styled, {keyframes} from 'styled-components'

const SavedList = ({list}) => {
  let history = useHistory();
  function routeToItem(ev, item) {
      ev.preventDefault();
      history.push(`/StrainList/${item.strain_name}`);
  }
  const imageIt = (type) => {
    if (type == 'sativa'){
        return 'https://medcarefarms.com/wp-content/uploads/2020/07/MCF-Icons_Sativa-e1595555346200-uai-258x237.png'
    }
    if (type == 'indica'){
        return 'https://medcarefarms.com/wp-content/uploads/2020/07/MCF-Icons_Indica-e1595555429573-uai-258x216.png' 
    }
    if( type == 'hybrid') {
        return 'https://medcarefarms.com/wp-content/uploads/2020/07/MCF-Icons_Hybrid-e1595555500547-uai-258x216.png'
    }
    else{
        return 'error'
    }
}
      return (
       <StrainMain className="saved">
         {list.map((item) => (
        <ItemCard className="cart-items-list-wrapper">
          <div className="cart-item-card" key={item.id}>
            <ListImg
              className="cart-item-list-image"
              onClick={(ev) => routeToItem(ev, item)}
              src={imageIt(item.type)}
              alt={item.strain_name}
            />
          </div>
          <div className="cart-item-info">
            <StrainName>{item.strain_name}</StrainName>
            <StrainType>{item.type}</StrainType>
            <p>Rating :{item.rating}</p>
          </div>
          <StyledRemove>Remove from list</StyledRemove>
          <StyledEdit> Edit</StyledEdit>
        </ItemCard>
      ))}
       </StrainMain>
           
      
   
        
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
      font-family: 'Maven Pro', sans-serif;
`
  const ItemCard = styled.div`
    /* padding: 3vh 0; */
    margin-bottom: 2vh;
    border-bottom: 2px dashed black;
`

  const ListImg = styled.img`
    border-radius: 10px;
    max-width: 15vw;
`
  const StrainName = styled.p`
    font-size: 1.5rem;
  `

  const StrainType = styled.p`
    text-transform: capitalize;
`

const StyledRemove = styled.button`
    width: 10vw;
    color: white;
    background-color: red;
    padding: 1rem 0rem;
    text-align:center;
    border-radius: 5px;
    margin-bottom: 3vh;
`

const StyledEdit = styled.button`
    width: 10vw;
    color: white;
    background-color: lightseagreen;
    padding: 1rem 0rem;
    text-align:center;
    border-radius: 5px;
    margin-bottom: 3vh;
`

export default SavedList
