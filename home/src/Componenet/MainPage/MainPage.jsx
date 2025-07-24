// import React from "react";
// import Header from "../Header/Header";
// // import DataTable from "../Table/DataTable";
// import "./MainPage.css";
// import Search from "../Search/Search";

// // import DataForTable from "../Table/TableData";
// // import DownloadButton from "../Download/Download";
// import TableOne from "../Table/TableOne";
// import ButtonList from "../Button/ButtonList/ButtonList";

// // import FilterButton from "../Button/ButtonList/FilterButton/FilterButton";
// import CustomButton from "../Button/CustomButton/CustomButton";


// function MainPage() {
//   // const placesData = [
//   //   {
//   //     name: "Central Park",
//   //     city: "New York",
//   //     description: "A la center.",
//   //   },
//   //   {
//   //     name: "Golden Gate Bridge",
//   //     city: "San Francisco",
//   //     description: "A    the Gate.",
//   //   },
//   //   {
//   //     name: "Statue of Liberty",
//   //     city: "New York",
//   //     description: "A   on Liberty Island.",
//   //   },
//   //   {
//   //     name: "Disneyland",
//   //     city: "Anaheim",
//   //     description: "The happiest place on earth.",
//   //   },
//   //   {
//   //     name: "Grand Canyon",
//   //     city: "Arizona",
//   //     description: "A steo River.",
//   //   },
//   //   {
//   //     name: "Mount Rushmore",
//   //     city: "South Dakota",
//   //     description: "Sculpture",
//   //   },
//   // ];

//   return (
//     < >
//       <div className="DivMain">
//         <div className="Div1">
//           <Header></Header>
//         </div>

//         <div className="DivButton">
//           <ButtonList/>

//         </div>
//         <div className="Div2">
//           <div>
//             <p className="eggCount"> Total Eggs in Incubator:10</p>
//           </div>
//           <div className="SearchDownload">
//             <div>
//               <Search />
//             </div>
//             <div className="CustomButtonDesign">
//               {/* <DownloadButton/> */}
//               <CustomButton imgSrc="/Icon/download.png" imgAlt=" Icon for the Download Button" />
//             </div>
//             <div className="CustomButtonDesign">
//               {/* <FilterButton/> */}
//               <CustomButton imgSrc="/Icon/filter.png" imgAlt="Icon for Filter" />
//             </div>
//           </div>

//         </div>
//       </div>
//       <div className="Div3">
//         <div>
//           {/* <TableOne data={data} searchTerm={searchTerm} /> */}
//           <TableOne />
//           {/* <DataTable data={placesData} /> */}
//         </div>
//       </div>
//     </>
//   );
// }

// export default MainPage;












import React, { useState } from "react";
import Header from "../Header/Header";
import "./MainPage.css";
import Search from "../Search/Search";
import TableOne from "../Table/TableOne";
import ButtonList from "../Button/ButtonList/ButtonList";
import CustomButton from "../Button/CustomButton/CustomButton";

function MainPage() {
  // Sample data for the table
 const data = [
  { id: 1, species: 'Hathi', eggIdentifier: 'AWID:004/5', state: 'Fresh', days: 352, iniWeight: 10, curWeight: '-', length: 10, width: 10 },
  { id: 2, species: 'Lion', eggIdentifier: 'AWID:005/6', state: 'Fresh', days: 350, iniWeight: 9, curWeight: '-', length: 12, width: 12 },
  { id: 3, species: 'Bear', eggIdentifier: 'AWID:006/7', state: 'Fresh', days: 365, iniWeight: 12, curWeight: '-', length: 11, width: 11 },
  { id: 4, species: 'Zebra', eggIdentifier: 'AWID:007/8', state: 'Incubated', days: 340, iniWeight: 8, curWeight: '-', length: 9, width: 9 },
  { id: 5, species: 'Giraffe', eggIdentifier: 'AWID:008/9', state: 'Fresh', days: 315, iniWeight: 15, curWeight: '-', length: 13, width: 13 },
  { id: 6, species: 'Elephant', eggIdentifier: 'AWID:009/10', state: 'Fresh', days: 500, iniWeight: 20, curWeight: '-', length: 15, width: 15 },
  { id: 7, species: 'Cheetah', eggIdentifier: 'AWID:010/11', state: 'Incubated', days: 320, iniWeight: 7, curWeight: '-', length: 8, width: 8 },
  { id: 8, species: 'Kangaroo', eggIdentifier: 'AWID:011/12', state: 'Fresh', days: 330, iniWeight: 6, curWeight: '-', length: 7, width: 7 },
  { id: 9, species: 'Penguin', eggIdentifier: 'AWID:012/13', state: 'Fresh', days: 365, iniWeight: 5, curWeight: '-', length: 9, width: 9 },
  { id: 10, species: 'Tiger', eggIdentifier: 'AWID:013/14', state: 'Incubated', days: 355, iniWeight: 13, curWeight: '-', length: 12, width: 12 },
  { id: 11, species: 'Koala', eggIdentifier: 'AWID:014/15', state: 'Fresh', days: 280, iniWeight: 4, curWeight: '-', length: 6, width: 6 },
  { id: 12, species: 'Panda', eggIdentifier: 'AWID:015/16', state: 'Incubated', days: 375, iniWeight: 11, curWeight: '-', length: 10, width: 10 },
  { id: 13, species: 'Rabbit', eggIdentifier: 'AWID:016/17', state: 'Fresh', days: 220, iniWeight: 3, curWeight: '-', length: 5, width: 5 },
  { id: 14, species: 'Fox', eggIdentifier: 'AWID:017/18', state: 'Fresh', days: 300, iniWeight: 7, curWeight: '-', length: 8, width: 8 },
  { id: 15, species: 'Wolf', eggIdentifier: 'AWID:018/19', state: 'Fresh', days: 340, iniWeight: 9, curWeight: '-', length: 11, width: 11 },
  { id: 16, species: 'Owl', eggIdentifier: 'AWID:019/20', state: 'Incubated', days: 280, iniWeight: 4, curWeight: '-', length: 6, width: 6 },
  { id: 17, species: 'Hawk', eggIdentifier: 'AWID:020/21', state: 'Fresh', days: 330, iniWeight: 6, curWeight: '-', length: 7, width: 7 },
  { id: 18, species: 'Eagle', eggIdentifier: 'AWID:021/22', state: 'Incubated', days: 400, iniWeight: 10, curWeight: '-', length: 12, width: 12 },
  { id: 19, species: 'Vulture', eggIdentifier: 'AWID:022/23', state: 'Fresh', days: 360, iniWeight: 8, curWeight: '-', length: 10, width: 10 },
  { id: 20, species: 'Peacock', eggIdentifier: 'AWID:023/24', state: 'Incubated', days: 320, iniWeight: 7, curWeight: '-', length: 9, width: 9 },
  { id: 21, species: 'Pigeon', eggIdentifier: 'AWID:024/25', state: 'Fresh', days: 180, iniWeight: 2, curWeight: '-', length: 4, width: 4 },
  { id: 22, species: 'Crow', eggIdentifier: 'AWID:025/26', state: 'Fresh', days: 250, iniWeight: 3, curWeight: '-', length: 6, width: 6 },
  { id: 23, species: 'Bat', eggIdentifier: 'AWID:026/27', state: 'Incubated', days: 300, iniWeight: 5, curWeight: '-', length: 7, width: 7 },
  { id: 24, species: 'Swan', eggIdentifier: 'AWID:027/28', state: 'Fresh', days: 330, iniWeight: 6, curWeight: '-', length: 9, width: 9 },
  { id: 25, species: 'Duck', eggIdentifier: 'AWID:028/29', state: 'Fresh', days: 280, iniWeight: 4, curWeight: '-', length: 5, width: 5 },
  { id: 26, species: 'Goose', eggIdentifier: 'AWID:029/30', state: 'Incubated', days: 315, iniWeight: 6, curWeight: '-', length: 8, width: 8 },
  { id: 27, species: 'Sheep', eggIdentifier: 'AWID:030/31', state: 'Fresh', days: 400, iniWeight: 15, curWeight: '-', length: 13, width: 13 },
  { id: 28, species: 'Cow', eggIdentifier: 'AWID:031/32', state: 'Incubated', days: 450, iniWeight: 18, curWeight: '-', length: 15, width: 15 },
  { id: 29, species: 'Horse', eggIdentifier: 'AWID:032/33', state: 'Fresh', days: 390, iniWeight: 17, curWeight: '-', length: 14, width: 14 },
  { id: 30, species: 'Camel', eggIdentifier: 'AWID:033/34', state: 'Incubated', days: 370, iniWeight: 16, curWeight: '-', length: 14, width: 14 }
];


  // State for the search term
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="DivMain">
        <div className="Div1">
          <Header />
        </div>

        <div className="DivButton">
          <ButtonList />
        </div>

        <div className="Div2">
          <div>
            <p className="eggCount">Total Eggs in Incubator: 10</p>
          </div>
          <div className="SearchDownload">
            <div>
              <Search setSearchTerm={setSearchTerm} />
            </div>
            <div className="CustomButtonDesign">
              <CustomButton imgSrc="/Icon/download.png" imgAlt="Icon for the Download Button" />
            </div>
            <div className="CustomButtonDesign">
              <CustomButton imgSrc="/Icon/filter.png" imgAlt="Icon for Filter" />
            </div>
          </div>
        </div>
      </div>

      <div className="Div3">
        <div>
          <TableOne data={data} searchTerm={searchTerm} />
        </div>
      </div>
    </>
  );
}

export default MainPage;
