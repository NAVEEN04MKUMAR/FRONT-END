// import React, {useState,useEffect}from 'react';

// const UseEffectBasics=()=>{
//     const[value,setValue]=useState(0);
  
// //it means that when it will reach the value atleast 2 then it show new message 
//     useEffect(()=>{
//     console.log('call useEffect');
//     if(value>1){
//     document.title=`New Messages(${value})`;
//     }    
// },[value]); 

// useEffect(()=>{
// console.log('hello world');
// },[]);
// console.log('render component');


// return(
// //   <h2>use effect basics</h2>
// <>
// <h1>{value}</h1>
// {/* at click button if we clik then count increases */}
// <button className='btn' onClick={()=>setValue(value+1)}>
//     click me
//  </button>
// </> 
// );
// };
// export default  UseEffectBasics;
