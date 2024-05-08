import React from 'react';
import Card from '../Components/Card';

const Cys = ({data}) => {
    const csData = data.filter((element)=>element.name==="Cyber Security")
    return (
        <div className="container">
           <div className="row">
            {csData.map((element,index)=>{
                return <Card element={element} index={index}/>
            })}
           </div>
        </div>
    );
};

export default Cys;