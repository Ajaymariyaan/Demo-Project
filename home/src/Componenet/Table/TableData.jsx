// src/components/App.js
import React from "react";
// import DataTable from "./DataTable";
import DataTable from "./DataTable";

function DataForTable() {
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
  return (
    <div>
      <DataTable data={placesData} />
    </div>
  );
}

export default DataForTable;
