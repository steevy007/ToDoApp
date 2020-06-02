import React from 'react';
import deleteIC from '../Icon/icons8-effacer-24.png';
const ListItems=(props)=>{
    console.log(props.element);
            return(
                    <div className="box">
                        {
                            props.element.map(
                                (item,index)=>{
                                    return(
                                        <div className="grid1" key={index}>
                                          <h3 className='item'> <span><a> <img src={deleteIC} onClick={()=>props.delete(index)} /></a> </span>{item}</h3> 
                                       </div>
                                    )
                                }
                            )
                        }
                    </div>
            )
}

export default ListItems;