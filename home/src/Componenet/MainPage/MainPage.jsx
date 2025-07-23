import React from "react";
import Header from "../Header/Header";
import DataTable from "../Table/DataTable";
import "./MainPage.css";
import Search from "../Search/Search";
import ButtonList from "../Button/ButtonList/ButtonList";
import DataForTable from "../Table/TableData";
import DownloadButton from "../Download/Download";
import TableOne from "../Table/TableOne";

import FilterButton from "../Button/ButtonList/FilterButton/FilterButton";
import CustomButton from "../Button/ButtonList/CustomButton/CustomButton";

function MainPage() {
  // const placesData = [
  //   {
  //     name: "Central Park",
  //     city: "New York",
  //     description: "A la center.",
  //   },
  //   {
  //     name: "Golden Gate Bridge",
  //     city: "San Francisco",
  //     description: "A    the Gate.",
  //   },
  //   {
  //     name: "Statue of Liberty",
  //     city: "New York",
  //     description: "A   on Liberty Island.",
  //   },
  //   {
  //     name: "Disneyland",
  //     city: "Anaheim",
  //     description: "The happiest place on earth.",
  //   },
  //   {
  //     name: "Grand Canyon",
  //     city: "Arizona",
  //     description: "A steo River.",
  //   },
  //   {
  //     name: "Mount Rushmore",
  //     city: "South Dakota",
  //     description: "Sculpture",
  //   },
  // ];

  return (
    < >
      <div className="DivMain">
        <div className="Div1">
          <Header></Header>
        </div>

        <div className="DivButton">
          <ButtonList />
        </div>
        <div className="Div2">
          <div>
            <p> Total Eggs in Incubator:10</p>
          </div>
          <div className="SearchDownload">
          <div>
            <Search />
          </div>
          <div>
            {/* <DownloadButton/> */}
            <CustomButton imgSrc="/Icon/download.png" imgAlt=" Icon for the Download Button"/>
          </div>
          <div>
            {/* <FilterButton/> */}
             <CustomButton imgSrc="/Icon/filter.png" imgAlt="Icon for Filter" />
          </div>
          </div>
          
        </div>
      </div>
      <div className="Div3">
        <div>
          <TableOne/>
          {/* <DataTable data={placesData} /> */}
        </div>
      </div>
    </>
  );
}

export default MainPage;
