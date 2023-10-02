// import React from 'react';
// import {object} from './object';

// const UseStateArray=()=>{
//  const [people]=React.useState([object]);
//     return (
//         <>
//         {people.map((person)=>{
//  //           console.log(person);
//   //          return 'hello';
//          const{id,name}=person;
//         return(
//             <div key={id} className='item'>
//             <h4>{name}</h4>
//             </div>
//          );
//     })}
//          </>
//     );
// };
// export default UseStateArray;

// import React from 'react';
// import { object } from './object';

// const UseStateArray = () => {
//   const [people,setPeople] = React.useState(object);

//   const removeItem=(id)=>{
//      let newPeople=people.filter((person)=>person.id!==id);
// setPeople(newPeople);
// //setPeople((pervPeople=>pervPeople.filter((person)=>person.id===idToRemove))) 
// };
//   return (
//     <>
//       {people.map((person) => {
//         const { id, name } = person;
//         return (
//           <div key={id} className='item'>
//             <h4>{name}</h4>
//                         <button onClick={() => removeItem(id)}>Remove</button>
//           </div>
//         );
//       })}
//     </>
//   );
// };


