import React from 'react';
import Card from '../Components/Card';

const Ds = ({data}) => {
    const dsData = data.filter((element)=>element.name==="Data Science")
    return (
        <div className="container">
            <div className="row">
                {dsData.map((element,index)=>{
                    return <Card element={element} index={index} />
                })}
            </div>
           
        </div>
    );
};

export default Ds;