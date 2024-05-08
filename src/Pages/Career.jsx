import React from 'react';
import CareerCard from '../Components/CareerCard';

const Career = ({data}) => {
    let courseData = data.filter((element)=>element.course)
    return (
        <div className="container">
            <div className="row">
                {courseData.map((element,index)=>{
                    return <CareerCard element={element} index={index} />
                })}
            </div>
            
        </div>
    );
};

export default Career;