
// import React,{useState} from 'react';

// const ControlledInputs=()=>{
//  const [firstName,setFirstName]=useState('');
//  const [email,setEmail]=useState('');
// const [people,setPeople]=useState([]);
    
// const handleSubmit=(e)=>{
// e.preventDefault();
// if(firstName&&email){
//     const person={id:new Date().getTime().toString(),firstName,email};
//     console.log(person); 
// //assign the value when we filled with name and mail id which is not empty,then reset the enter the value   
//     setPeople((people)=>{
//         return[...people,person];
//     });
//     setFirstName('');
//     setEmail('');
// }else{
//     console.log('empty values');
// }
// //console.log('firstName,email');
// };
// return(
// <>
// <article>
// <form className='form' onSubmit={handleSubmit}>
// <div className='form-control'>
//     <lablel htmlFor='firstName'>Name:</lablel>
//     <input
//     type='text'
//     id='firstName'
//     name='firstName'
//     value={firstName}
//     onChange={(e)=>setFirstName(e.target.value)}
//     />
// </div>

// <div className='form-control'>
//     <lablel htmlFor='email'>Email:</lablel>
//     <input
//      type='text' 
//      id='email' 
//      name='email'
//      value={email}
//      onChange={(e)=>setEmail(e.target.value)}
//      />
// </div>
// <button type='submit'>add person</button>
// </form>
// {people.map((person,index)=>{
//     const {id,firstName,email}=person;
// return(
// <div className='item'>
//     <h4>{firstName}</h4>
//     <p>{email}</p>
// </div>
// );
// })}
// </article>
// </>
// );
// };
// export default ControlledInputs;
// //component allows users to input their name and email, and when the "add person" button is clicked, it adds the person to the list of people displayed below the form.