import React from 'react';
import Card from '../Components/Card';

const Fsd = ({data}) => {
    const fsdData = data.filter((element)=>element.name==="fullstack")
    return (
        <div className="container">
            <div className="row">
                {fsdData.map((element,index)=>{
                    return <Card element={element} index={index}/>
                })}
            </div>
           
        </div>
    );
};

export default Fsd;