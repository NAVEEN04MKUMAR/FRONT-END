import React,{useState} from 'react';

const ShowHide=()=>{
const[show,setShow]=useState(false);
return(
<>
<button className='btn' onClick={()=>setShow(!show)}>
show/hide
</button>
{/* by changng the state from the true to false and false to true  will get the o/p from the idea */}
{show&&<Item />}
</>
);
};
const Item=()=>{
return(
    <div>
        <h1>window</h1>
        <h2>size:</h2>
    </div>
);
};



export default ShowHide; 