import React from 'react';
const Sresult = (props)=>{
    const img= `https://source.unsplash.com/400x300/?${props.name}/emoji`;

    return(
        <>
        <div>
            <img src={img} alt="Not search emoji"/>
            
        </div>
         
        </>
    );
};
export default Sresult;