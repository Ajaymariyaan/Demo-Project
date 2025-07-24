// import React from "react";
// import './TableOne.css'

// function TableOne(){
//     return(<>
//       <table >
//       <thead className="thead"> 
//         <tr className="trHead">
//           <th>SL.No</th>
//           <th>SPECIES</th>
//           <th>EGG INDINTIFER</th>
//           <th>STATE</th>
//           <th>DAYS</th>
//           <th>INI WEIGHT</th>
//           <th>CUR WEIGHT</th>
//           <th>LENGTH</th>
//           <th>WIDTH</th>

//         </tr>
//       </thead>
//       <tbody className="tbody">
//       <tr>
//             <td>1</td>
//             <td><div className="MainSpeciesRow"><div className="mainSpeciesStyle"><div className=" childSpecies1"> <img src="/Icon/bear.png" alt="" className="img1"></img></div><div className="childSpecies2"><img src="/Icon/egg.png" alt=" "  className="img2"></img> </div> </div><div>Hathi</div></div></td>
//             <td>AWID:004/5</td>
//             <td ><text className="textDecoration"> Fresh</text></td>
//             <td>352</td>
//             <td>10</td>
//             <td>-</td>
//             <td>10</td>
//             <td>10</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td><div className="MainSpeciesRow"><div className="mainSpeciesStyle"><div className=" childSpecies1"> <img src="/Icon/bear.png" alt="" className="img1"></img></div><div className="childSpecies2"><img src="/Icon/egg.png" alt=" "  className="img2"></img> </div> </div><div>Hathi</div></div></td>
//             <td>AWID:004/5</td>
//             <td ><text className="textDecoration"> Fresh</text></td>
//             <td>352</td>
//             <td>10</td>
//             <td>-</td>
//             <td>10</td>
//             <td>10</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td><div className="MainSpeciesRow"><div className="mainSpeciesStyle"><div className=" childSpecies1"> <img src="/Icon/bear.png" alt="" className="img1"></img></div><div className="childSpecies2"><img src="/Icon/egg.png" alt=" "  className="img2"></img> </div> </div><div>Hathi</div></div></td>
//             <td>AWID:004/5</td>
//             <td ><text className="textDecoration"> Fresh</text></td>
//             <td>352</td>
//             <td>10</td>
//             <td>-</td>
//             <td>10</td>
//             <td>10</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td><div className="MainSpeciesRow"><div className="mainSpeciesStyle"><div className=" childSpecies1"> <img src="/Icon/bear.png" alt="" className="img1"></img></div><div className="childSpecies2"><img src="/Icon/egg.png" alt=" "  className="img2"></img> </div> </div><div>Hathi</div></div></td>
//             <td>AWID:004/5</td>
//             <td ><text className="textDecoration"> Fresh</text></td>
//             <td>352</td>
//             <td>10</td>
//             <td>-</td>
//             <td>10</td>
//             <td>10</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td><div className="MainSpeciesRow"><div className="mainSpeciesStyle"><div className=" childSpecies1"> <img src="/Icon/bear.png" alt="" className="img1"></img></div><div className="childSpecies2"><img src="/Icon/egg.png" alt=" "  className="img2"></img> </div> </div><div>Hathi</div></div></td>
//             <td>AWID:004/5</td>
//             <td ><text className="textDecoration"> Fresh</text></td>
//             <td>352</td>
//             <td>10</td>
//             <td>-</td>
//             <td>10</td>
//             <td>10</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td><div className="MainSpeciesRow"><div className="mainSpeciesStyle"><div className=" childSpecies1"> <img src="/Icon/bear.png" alt="" className="img1"></img></div><div className="childSpecies2"><img src="/Icon/egg.png" alt=" "  className="img2"></img> </div> </div><div>Hathi</div></div></td>
//             <td>AWID:004/5</td>
//             <td ><text className="textDecoration"> Fresh</text></td>
//             <td>352</td>
//             <td>10</td>
//             <td>-</td>
//             <td>10</td>
//             <td>10</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td><div className="MainSpeciesRow"><div className="mainSpeciesStyle"><div className=" childSpecies1"> <img src="/Icon/bear.png" alt="" className="img1"></img></div><div className="childSpecies2"><img src="/Icon/egg.png" alt=" "  className="img2"></img> </div> </div><div>Hathi</div></div></td>
//             <td>AWID:004/5</td>
//             <td ><text className="textDecoration"> Fresh</text></td>
//             <td>352</td>
//             <td>10</td>
//             <td>-</td>
//             <td>10</td>
//             <td>10</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td><div className="MainSpeciesRow"><div className="mainSpeciesStyle"><div className=" childSpecies1"> <img src="/Icon/bear.png" alt="" className="img1"></img></div><div className="childSpecies2"><img src="/Icon/egg.png" alt=" "  className="img2"></img> </div> </div><div>Hathi</div></div></td>
//             <td>AWID:004/5</td>
//             <td ><text className="textDecoration"> Fresh</text></td>
//             <td>352</td>
//             <td>10</td>
//             <td>-</td>
//             <td>10</td>
//             <td>10</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td><div className="MainSpeciesRow"><div className="mainSpeciesStyle"><div className=" childSpecies1"> <img src="/Icon/bear.png" alt="" className="img1"></img></div><div className="childSpecies2"><img src="/Icon/egg.png" alt=" "  className="img2"></img> </div> </div><div>Hathi</div></div></td>
//             <td>AWID:004/5</td>
//             <td ><text className="textDecoration"> Fresh</text></td>
//             <td>352</td>
//             <td>10</td>
//             <td>-</td>
//             <td>10</td>
//             <td>10</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td><div className="MainSpeciesRow"><div className="mainSpeciesStyle"><div className=" childSpecies1"> <img src="/Icon/bear.png" alt="" className="img1"></img></div><div className="childSpecies2"><img src="/Icon/egg.png" alt=" "  className="img2"></img> </div> </div><div>Hathi</div></div></td>
//             <td>AWID:004/5</td>
//             <td ><text className="textDecoration"> Fresh</text></td>
//             <td>352</td>
//             <td>10</td>
//             <td>-</td>
//             <td>10</td>
//             <td>10</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td><div className="MainSpeciesRow"><div className="mainSpeciesStyle"><div className=" childSpecies1"> <img src="/Icon/bear.png" alt="" className="img1"></img></div><div className="childSpecies2"><img src="/Icon/egg.png" alt=" "  className="img2"></img> </div> </div><div>Hathi</div></div></td>
//             <td>AWID:004/5</td>
//             <td ><text className="textDecoration"> Fresh</text></td>
//             <td>352</td>
//             <td>10</td>
//             <td>-</td>
//             <td>10</td>
//             <td>10</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td><div className="MainSpeciesRow"><div className="mainSpeciesStyle"><div className=" childSpecies1"> <img src="/Icon/bear.png" alt="" className="img1"></img></div><div className="childSpecies2"><img src="/Icon/egg.png" alt=" "  className="img2"></img> </div> </div><div>Hathi</div></div></td>
//             <td>AWID:004/5</td>
//             <td ><text className="textDecoration"> Fresh</text></td>
//             <td>352</td>
//             <td>10</td>
//             <td>-</td>
//             <td>10</td>
//             <td>10</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td><div className="MainSpeciesRow"><div className="mainSpeciesStyle"><div className=" childSpecies1"> <img src="/Icon/bear.png" alt="" className="img1"></img></div><div className="childSpecies2"><img src="/Icon/egg.png" alt=" "  className="img2"></img> </div> </div><div>Hathi</div></div></td>
//             <td>AWID:004/5</td>
//             <td ><text className="textDecoration"> Fresh</text></td>
//             <td>352</td>
//             <td>10</td>
//             <td>-</td>
//             <td>10</td>
//             <td>10</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td><div className="MainSpeciesRow"><div className="mainSpeciesStyle"><div className=" childSpecies1"> <img src="/Icon/bear.png" alt="" className="img1"></img></div><div className="childSpecies2"><img src="/Icon/egg.png" alt=" "  className="img2"></img> </div> </div><div>Hathi</div></div></td>
//             <td>AWID:004/5</td>
//             <td ><text className="textDecoration"> Fresh</text></td>
//             <td>352</td>
//             <td>10</td>
//             <td>-</td>
//             <td>10</td>
//             <td>10</td>
//           </tr>



        
        
        
       
       

       

       
       

       

       
//       </tbody>
//     </table>


//     </>)
// }

// export default TableOne;





// import React from "react";
// import './TableOne.css';

// function TableOne({ searchTerm }) {
//   const data = [
//     { id: 1, species: "Hathi", eggIdentifier: "AWID:004/5", state: "Fresh", days: 352, iniWeight: 10, curWeight: "-", length: 10, width: 10 },
//     { id: 2, species: "Lion", eggIdentifier: "AWID:005/6", state: "Fresh", days: 350, iniWeight: 9, curWeight: "-", length: 12, width: 12 },
//     { id: 3, species: "Tiger", eggIdentifier: "AWID:006/7", state: "Fresh", days: 340, iniWeight: 8, curWeight: "-", length: 11, width: 11 },
//     // Add more data as needed
//   ];

//   // Function to filter data based on the search term
//   const filteredData = data.filter((row) => {
//     const lowerSearchTerm = searchTerm.toLowerCase();
//     return (
//       row.species.toLowerCase().includes(lowerSearchTerm) ||
//       row.eggIdentifier.toLowerCase().includes(lowerSearchTerm)
//     );
//   });

//   return (
//     <table>
//       <thead className="thead">
//         <tr className="trHead">
//           <th>SL.No</th>
//           <th>SPECIES</th>
//           <th>EGG INDINTIFER</th>
//           <th>STATE</th>
//           <th>DAYS</th>
//           <th>INI WEIGHT</th>
//           <th>CUR WEIGHT</th>
//           <th>LENGTH</th>
//           <th>WIDTH</th>
//         </tr>
//       </thead>
//       <tbody className="tbody">
//         {filteredData.map((row, index) => (
//           <tr key={row.id}>
//             <td>{index + 1}</td>
//             <td>
//               <div className="MainSpeciesRow">
//                 <div className="mainSpeciesStyle">
//                   <div className="childSpecies1">
//                     <img src="/Icon/bear.png" alt="" className="img1" />
//                   </div>
//                   <div className="childSpecies2">
//                     <img src="/Icon/egg.png" alt=" " className="img2" />
//                   </div>
//                 </div>
//                 <div>{row.species}</div>
//               </div>
//             </td>
//             <td>{row.eggIdentifier}</td>
//             <td>
//               <text className="textDecoration">{row.state}</text>
//             </td>
//             <td>{row.days}</td>
//             <td>{row.iniWeight}</td>
//             <td>{row.curWeight}</td>
//             <td>{row.length}</td>
//             <td>{row.width}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default TableOne;





import React from "react";
import './TableOne.css'; // Adjust as needed

function TableOne({ data, searchTerm }) {
  // Filter the data based on the search term
  const filteredData = searchTerm 
    ? data.filter((row) => {
        const lowerSearchTerm = searchTerm.toLowerCase();

        // Ensure properties exist and are strings before calling .toLowerCase()
        const species = row.species ? row.species.toLowerCase() : '';
        const eggIdentifier = row.eggIdentifier ? row.eggIdentifier.toLowerCase() : '';
        
        // Check if the search term is present in either `species` or `eggIdentifier`
        return (
          species.includes(lowerSearchTerm) ||
          eggIdentifier.includes(lowerSearchTerm)
        );
      })
    : data; // If no search term, show all data

  return (
    <div className="table-wrapper">
    <table className="tableScroll">
      <thead className="thead">
        <tr className="trHead">
          <th>SL.No</th>
          <th>SPECIES</th>
          <th>EGG IDENTIFIER</th>
          <th>STATE</th>
          <th>DAYS</th>
          <th>INI WEIGHT</th>
          <th>CUR WEIGHT</th>
          <th>LENGTH</th>
          <th>WIDTH</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {filteredData.length > 0 ? filteredData.map((row, index) => (
          <tr key={row.id}>
            <td>{index + 1}</td>
            <td>
              <div className="MainSpeciesRow">
                <div className="mainSpeciesStyle">
                  <div className="childSpecies1">
                    <img src="/Icon/bear.png" alt="" className="img1" />
                  </div>
                  <div className="childSpecies2">
                    <img src="/Icon/egg.png" alt="" className="img2" />
                  </div>
                </div>
                <div>{row.species}</div>
              </div>
            </td>
            <td>{row.eggIdentifier}</td>
            <td>
              <text className="textDecoration">{row.state}</text>
            </td>
            <td>{row.days}</td>
            <td>{row.iniWeight}</td>
            <td>{row.curWeight}</td>
            <td>{row.length}</td>
            <td>{row.width}</td>
          </tr>
        )) : (
          <tr><td colSpan="9">Data Not Found </td></tr> // Message when no data matches
        )}
      </tbody>
    </table>
  </div>  
  );
}

export default TableOne;
