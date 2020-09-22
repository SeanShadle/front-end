import React from 'react';
import { Route, NavLink, useHistory, useParams } from "react-router-dom";
import strainData from '../mockData'

const Strain = (props) => {
    const history = useHistory();
    const {id} = useParams();
    const item = props.items.find(
        (thing) => `${thing.id}` === id
      );
    
      if (!props.items.length || !item) {
        return <h2>Loading item data...</h2>;
      }
    
    
    return (
        <div className="strain">
            <img className="item-list-image" src={item.img} alt={item.strain_name} />
            <h4>{item.strain_name}</h4>
            <h4>{item.type}</h4> 
            <p>Rating : {item.rating}/5</p>
            <p>{item.description}</p>
           
            <button>Add to List</button>
        </div>
    )

}
export default Strain