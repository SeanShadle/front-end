import React, {useState,} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { v4 as uuidv4 } from "uuid";
const SavedList = ({list}) => {

      return (
       <div className="saved">
         {list.map((item) => (
        <div className="cart-items-list-wrapper">
          <div className="cart-item-card" key={item.id}>
            <img
              className="cart-item-list-image"
              src={item.img}
              alt={item.strain_name}
            />
          </div>
          <div className="cart-item-info">
            <p>{item.strain_name}</p>
            <p>{item.type}</p>
            <p>Rating :{item.rating}</p>
          </div>
          <button>Remove from list</button>
        </div>
      ))}
       </div>
           
      
   
        
      )
    }

export default SavedList
