import React from 'react';
    const ErrorExample=()=>{
    let title='random title';

    const Click=()=>{
    title='hello people';
    console.log(title);
};

return (
<React.Fragment>
    <h2>{title}</h2>
    <button type='button' className='btn' onClick={Click}>change title</button>
</React.Fragment> 
);
};
export default ErrorExample;



    
       

