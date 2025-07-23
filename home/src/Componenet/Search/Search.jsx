import React from "react";
import './Search.css';
import DataTable from "../Table/DataTable";
import DataForTable from "../Table/TableData";

function Search() {
      const placesData = [
  {
    name: "Central Park",
    city: "New York",
    description: "A la center.",
  },
  {
    name: "Golden Gate Bridge",
    city: "San Francisco",
    description: "A    the Gate.",
  },
  {
    name: "Statue of Liberty",
    city: "New York",
    description: "A   on Liberty Island.",
  },
  {
    name: "Disneyland",
    city: "Anaheim",
    description: "The happiest place on earth.",
  },
  {
    name: "Grand Canyon",
    city: "Arizona",
    description: "A steo River.",
  },
  {
    name: "Mount Rushmore",
    city: "South Dakota",
    description: "Sculpture",
  },
  
];
 
   const [searchTerm, setSearchTerm] = React.useState(""); // State to hold the search term


  const filteredData = placesData.filter(
    (place) =>
      place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.description.toLowerCase().includes(searchTerm.toLowerCase())
  

    );

  // return (
  //   <>
  //       <div className="searchAndIcon">
  //      <div> 
  //        <img src="https://icon-library.com/images/search-bar-magnifying-glass-icon/search-bar-magnifying-glass-icon-19.jpg"/>
  //      </div>
    

  //     <input type="text" className="textSearch" placeholder="Search "value={searchTerm}
  //       onChange={(e) => setSearchTerm(e.target.value)} // Update the search term as the user types
  //       // style={{ margin: "10px 0", padding: "8px", width: "300px" }} // Basic styling for better visibility
  //     />
  //     <DataTable data={filteredData} /> 
  //     </div>
  //   </>
  return (
    <>

    
    <div className="searchAndIcon">
      <div> 
        <img src="https://icon-library.com/images/search-bar-magnifying-glass-icon/search-bar-magnifying-glass-icon-19.jpg"/>
      </div>
        
      <div className="Search">
        <input type="text" className="textSearch" placeholder="Search "value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
       
        {/* <input type="text" className="textSearch" placeholder="Search"></input> */}
      </div>
      </div>
       {/* <DataTable data={filteredData}  />  */}
    </>
  );
}

export default Search;
