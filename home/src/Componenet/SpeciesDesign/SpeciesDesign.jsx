import react from "react";
import './SpeciesDesign.css'

function SpeciesDesign({species}) {
  return (
    <div className="MainSpeciesRow">
      <div className="mainSpeciesStyle">
        <div className="childSpecies1">
          <img src="/Icon/bear.png" alt="" className="imgg1" />
        </div>
        <div className="childSpecies2">
          <img src="/Icon/egg.png" alt="" className="imgg2" />
        </div>
      </div>
      <div>{species}</div>
    </div>


  )
}
export default SpeciesDesign;
