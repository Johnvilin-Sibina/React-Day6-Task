import React from 'react';
import Card from '../Components/Card';
import CareerCard from '../Components/CareerCard';

const All = ({data}) => {
    let blogs = data.filter((element)=>element.name)
    let courseData = data.filter((element)=>element.course)
    return (
        <div className="container">
          <div className="row">
          {blogs.map((element,index)=>{
                return <Card element={element} index={index}/> 
            })}
            {courseData.map((element,index)=>{
                return <CareerCard element={element} index={index} />
            })}
            </div> 
        </div>
    );
};

export default All;