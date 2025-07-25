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

  // {
  //   const [tableData, newTableData]=useState(" no data")
  // const handleButtonClick=()=>{

  //   newTableData(data={data})
  // }

  // }





  const data = [
    { id: 1, species: 'Hathi', eggIdentifier: 'AWID:004/5', state: 'Fresh', days: 352, iniWeight: 10, curWeight: '-', length: 10, width: 10 },
    { id: 2, species: 'Lion', eggIdentifier: 'AWID:005/6', state: 'Fresh', days: 350, iniWeight: 9, curWeight: '-', length: 12, width: 12 },
    { id: 3, species: 'Bear', eggIdentifier: 'AWID:006/7', state: 'Fresh', days: 365, iniWeight: 12, curWeight: '-', length: 11, width: 11 },
    { id: 4, species: 'Zebra', eggIdentifier: 'AWID:007/8', state: 'Fresh', days: 340, iniWeight: 8, curWeight: '-', length: 9, width: 9 },
    { id: 5, species: 'Giraffe', eggIdentifier: 'AWID:008/9', state: 'Fresh', days: 315, iniWeight: 15, curWeight: '-', length: 13, width: 13 },
    { id: 6, species: 'Elephant', eggIdentifier: 'AWID:009/10', state: 'Fresh', days: 500, iniWeight: 20, curWeight: '-', length: 15, width: 15 },
    { id: 7, species: 'Cheetah', eggIdentifier: 'AWID:010/11', state: 'Fresh', days: 320, iniWeight: 7, curWeight: '-', length: 8, width: 8 },
    { id: 8, species: 'Kangaroo', eggIdentifier: 'AWID:011/12', state: 'Fresh', days: 330, iniWeight: 6, curWeight: '-', length: 7, width: 7 },
    { id: 9, species: 'Penguin', eggIdentifier: 'AWID:012/13', state: 'Fresh', days: 365, iniWeight: 5, curWeight: '-', length: 9, width: 9 },
    { id: 10, species: 'Tiger', eggIdentifier: 'AWID:013/14', state: 'Fresh', days: 355, iniWeight: 13, curWeight: '-', length: 12, width: 12 },
    { id: 11, species: 'Koala', eggIdentifier: 'AWID:014/15', state: 'Fresh', days: 280, iniWeight: 4, curWeight: '-', length: 6, width: 6 },
    { id: 12, species: 'Panda', eggIdentifier: 'AWID:015/16', state: 'Fresh+', days: 375, iniWeight: 11, curWeight: '-', length: 10, width: 10 },
    { id: 13, species: 'Rabbit', eggIdentifier: 'AWID:016/17', state: 'Fresh', days: 220, iniWeight: 3, curWeight: '-', length: 5, width: 5 },
    { id: 14, species: 'Fox', eggIdentifier: 'AWID:017/18', state: 'Fresh', days: 300, iniWeight: 7, curWeight: '-', length: 8, width: 8 },
    { id: 15, species: 'Wolf', eggIdentifier: 'AWID:018/19', state: 'Fresh', days: 340, iniWeight: 9, curWeight: '-', length: 11, width: 11 },
    

  ];

  const list = ['RECEIVED', 'INCUBATION', 'HATCHED', 'TO BEDISCARDED', 'DISCARDED', 'ALL']

  // const [showTable, setShowTable] = useState(true);
  // const TableOne = () => {
  //   setShowTable(!showTable);
  // };

  const [searchTerm, setSearchTerm] = useState("");

  // function TableToggle(){
  //   setSearchTerm(!searchTerm);

  // main in before (by ajaii)
  //  const [activeTab, setActiveTab] = useState();

  //   const handleTabClick = (tabName) => {
  //     setActiveTab(tabName);

  // };

  const [activeTab, setActiveTab] = useState('tab2'); // Initialize with a default active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };






  // const buttonContainer = document.getElementById('buttonContainer');
  // let currentActiveButton = tab1; // To keep track of the currently active button

  // const buttons = document.querySelectorAll('.button-group button'); // Assuming a common class for your buttons

  // buttons.forEach(button => {
  //     button.addEventListener('click', function() {
  //         // Remove 'active-button' from all buttons in the group
  //         buttons.forEach(btn => btn.classList.remove('active-button'));
  //         buttons.forEach(btn => btn.classList.add('inactive-button')); // Re-add inactive if needed

  //         // Add 'active-button' to the clicked button
  //         this.classList.remove('inactive-button'); // Remove inactive if present
  //         this.classList.add('active-button');
  //     });
  // // });
  // function handleTabClick(tabId) {
  //   // Get all buttons within the container
  //   const buttons = document.querySelectorAll('#buttonContainer .headerButton');

  //   // Remove 'active' class from all buttons
  //   buttons.forEach(button => {
  //     button.classList.remove('active');
  //   });

  //   // Add 'active' class to the clicked button
  //   // Find the button corresponding to the clicked tabId
  //   const clickedButton = document.querySelector(`.headerButton[onClick*="handleTabClick('${tabId}')"]`);
  //   if (clickedButton) {
  //     clickedButton.classList.add('active');
  //   }

  //   // You can also add logic here to update content based on the active tab
  //   // For example, display content related to 'tabId'
  //   console.log(`Tab clicked: ${tabId}`);
  // }

  // // Initial setup to ensure one button is active on page load
  // document.addEventListener('DOMContentLoaded', () => {
  //   // Assuming 'RECEIVED' is the default active tab
  //   handleTabClick('tab1');
  // });

  return (
    <>
    <div></div>
      <div className="DivMain">
        <div className="Div1">
          <Header />
        </div>

        <div className="DivButton">
          <div className="ButtonList" >
            {/* <button onClick={() =>{handleTabClick('tab1')} }  className="headerButton active" >RECEIVED</button>
            <button onClick={() =>{handleTabClick('tab2')}} className="headerButton">INCUBATION</button>
            <button onClick={() =>{handleTabClick('tab3')}} className="headerButton">HATCHED</button>
            <button onClick={() =>{handleTabClick('tab4')}} className="headerButton"> TO BE DISCARDED</button>
            <button onClick={() =>{handleTabClick('tab5')}} className="headerButton"> DISCARDED</button>
            <button onClick={() =>{handleTabClick('tab6')}} className="headerButton">ALL</button> */}

            {/* { list.map((item,index)=>( 
            <button key={index} className="headerButton" onclick={()=>handleTabClick(item)}>{item}</button>
           ))} */}


            <button
              onClick={() => handleTabClick('tab1')}
              className={`headerButton ${activeTab === 'tab1' ? 'active' : ''}`}
            >
              RECEIVED
            </button>

            <button
              onClick={() => handleTabClick('tab2')}
              className={`headerButton ${activeTab === 'tab2' ? 'active' : ''}`}
            >
              INCUBATION
            </button>

            <button
              onClick={() => handleTabClick('tab3')}
              className={`headerButton ${activeTab === 'tab3' ? 'active' : ''}`}
            >
              HATCHED
            </button>

            <button
              onClick={() => handleTabClick('tab4')}
              className={`headerButton ${activeTab === 'tab4' ? 'active' : ''}`}
            >
              TO BE DISCARDED
            </button>

            <button
              onClick={() => handleTabClick('tab5')}
              className={`headerButton ${activeTab === 'tab5' ? 'active' : ''}`}
            >
              DISCARDED
            </button>

            <button
              onClick={() => handleTabClick('tab6')}
              className={`headerButton ${activeTab === 'tab6' ? 'active' : ''}`}
            >
              ALL
            </button>




          </div>



          {/* <ButtonList /> */}
          {/* <ButtonList onClickHandler={handleButtonClick} /> */}
        </div>

        <div className="Div2">
          <div>
            <p className="eggCount">Total Eggs in Incubator: 10</p>
          </div>
          <div className="SearchDownload">
            <div>
              <Search setSearchTerm={setSearchTerm} />
            </div>
            <div className="downloadFiltBtn">
              <div className="CustomButtonDesign">
                <CustomButton imgSrc="/Icon/download.png" imgAlt="Icon for the Download Button" />
              </div>
              <div className="CustomButtonDesign">
                <CustomButton imgSrc="/Icon/filter.png" imgAlt="Icon for Filter" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Div3">
        <div>


          {/* <TableOne data={data} searchTerm={searchTerm} /> */}


          {activeTab === 'tab1' && <div>No Data Found In RECEIVED</div>}
          {activeTab === 'tab2' && <div><TableOne data={data} searchTerm={searchTerm} /></div>}
          {activeTab === 'tab3' && <div>No Data Found In HATCHED</div>}
          {activeTab === 'tab4' && <div><TableOne data={data} searchTerm={searchTerm} /></div>}
          {activeTab === 'tab5' && <div>No Data Found In DISCARDED</div>}
          {activeTab === 'tab6' && <div><TableOne data={data} searchTerm={searchTerm} /></div>}


          {/*           
        {activeTab === 'tab1' && <div> No Data Found In RECEIVED </div>}
        {activeTab === 'tab2' && <div><TableOne data={data} searchTerm={searchTerm} /> </div>}
        {activeTab === 'tab3' && <div> No Data Found In HATCHED</div>}
        {activeTab === 'tab4' && <div><TableOne data={data} searchTerm={searchTerm} /></div>}
        {activeTab === 'tab5' && <div>No Data Found In DISCARDED</div>}
        {activeTab === 'tab6' && <div><TableOne data={data} searchTerm={searchTerm} /></div>}
           */}


          {/* <TableOne  searchTerm={searchTerm}   > */}

          {/* <ButtonList linkRecievedButton = "data={data} "/> */}
          {/* <ButtonList onClickHandler={handleButtonClick} /> */}
          {/* <TableOne linkRecievedButton={Table} */}
        </div>
      </div>
    </>
  );
}

export default MainPage;
