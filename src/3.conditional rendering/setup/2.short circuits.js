// import React,{useState} from 'react';


// const Shortcircuit=()=>{
//     const [text]=useState('a');
//     const [isError,setIsError]=useState(false);

//     //when use state is empty then if or is present then we second value is printed
//     // when use state is empty then if and is present nothing will return
    
//     //when use state is non empty then if or is present then text value is printed
//     //when use state is non empty then if or is present then we second value string will print 

    
//     // const firstvalue=text||'hi naveen';
//     // const secondvalue=text&&'hi naveen';
//  return(
//     <>
//     {/* <h1>{firstvalue}</h1>
//     <h1>value:{secondvalue}</h1> */}
//     <h1>{text||'ex sweet heart'}</h1>
//     <button className='btn' onClick={()=>setIsError(!isError)}>toggle error</button>
//     {/* if error is true then we get thr o/p such error and there is an Error... */}
//     {isError&&<h1>Error...</h1>}
//     {isError?(<p>there is an Error...</p>):(<div><h2>there is no error</h2></div>)}
//     </>
//  );
// };
// export default Shortcircuit;
