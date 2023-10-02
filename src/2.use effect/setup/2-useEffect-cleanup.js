// import React,{useState,useEffect} from 'react';

// const useEffectCleanup=()=>{
//     const[size,setsize]=useState(window.innerWidth);

// const checksize=()=>{
//     setsize(window.innerWidth)
// };    
// useEffect(()=>{
//     console.log('hello world');
//     window.addEventListener('resize',checksize);
// return()=>{
//     //cleanup for the remove the memory leakage
//     console.log('cleanup');
//     window.removeEventListener('resize',checksize)
// }
// });

// //console.log('render');
// return(
//     <>
//     <h1>window</h1>
//     <h2>{size}px</h2>
//     </>
// );
// };
// export default useEffectCleanup;