// import React from "react";
import './Table.css';






// src/components/DataTable.js
import React from "react";


function DataTable({data}) {


  return (
    <table >
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((place,index) => (
          <tr key={index+1}>
            <td>{place.name}</td>
            <td>{place.city}</td>
            <td>{place.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;






// const Table = () => {
//     const data = [
//         { id: 1, name: 'egg1', age: 28, city: 'Mumbai' },
//         { id: 2, name: 'egg2', age: 34, city: 'Delhi' },
//         { id: 3, name: 'egg3', age: 45, city: 'Bangalore' },
//         { id: 4, name: 'egg4', age: 22, city: 'Kolkata' },
//     ];

//     return (
//         <div>
//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Age</th>
//                         <th>City</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map(item => (
//                         <tr key={item.id}>
//                             <td>{item.id}</td>
//                             <td>{item.name}</td>
//                             <td>{item.age}</td>
//                             <td>{item.city}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }
//   // return (
//   //   <div className="tableContainer">
//   //   <table>
//   //     <thead>
//   //       <tr>
//   //         <th> Sl.no</th>
//   //         <th>SPECIES</th>
//   //         <th>EGG IDENTIFIER</th>
//   //         <th>STATE</th>
//   //         <th>DAYS</th>
//   //         <th>INI WEIGHT</th>
//   //         <th>CUR WEIGHT</th>
//   //         <th> LENTH</th>
          
//   //       </tr>
//   //     </thead>
//   //     <tbody>
//   //       <tr> 
//   //         <td>1</td>
//   //         <td>WHITE STINGER</td>
//   //         <td>0001</td>
//   //         <td>FRESH</td>
//   //         <td>333</td>
//   //         <td>10</td>
//   //         <td>20</td>
//   //         <td>10</td>
          
//   //         </tr>
//   //          <tr> 
//   //         <td>1</td>
//   //         <td>WHITE STINGER</td>
//   //         <td>0001</td>
//   //         <td>FRESH</td>
//   //         <td>333</td>
//   //         <td>10</td>
//   //         <td>20</td>
//   //         <td>10</td>
          
//   //         </tr>
   
   
         
    
        
//   //     </tbody>
//   //     {/* <tbody>
//   //       {data.map((Egg) => (
//   //         <tr key={Egg.id}>
//   //           <td>{Egg.name}</td>
//   //           <td>{Egg.city}</td>
//   //           <td>{Egg.description}</td>
//   //         </tr>
//   //       ))} */}
//   //     {/* </tbody> */}
//   //   </table>
//   //   </div>
//   // );




// }

// export default Table;