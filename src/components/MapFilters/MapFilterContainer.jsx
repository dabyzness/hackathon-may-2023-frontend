import MapFilter from "./MapFilter";

import churchSelected from "../../assets/mapFilters/church_selected.svg";
import churchUnSelected from "../../assets/mapFilters/church_unselected.svg";
import doctorSelected from "../../assets/mapFilters/doctor_selected.svg";
import doctorUnSelected from "../../assets/mapFilters/doctor_unselected.svg";
import domesticSelected from "../../assets/mapFilters/domestic_selected.png";
import domesticUnSelected from "../../assets/mapFilters/domestic_unselected.svg";
import financeSelected from "../../assets/mapFilters/finance_selected.svg";
import financeUnSelected from "../../assets/mapFilters/finance_unselected.svg";
import foodSelected from "../../assets/mapFilters/food_selected.svg";
import foodUnSelected from "../../assets/mapFilters/food_unselected.svg";
import housingSelected from "../../assets/mapFilters/housing_selected.svg";
import housingUnSelected from "../../assets/mapFilters/housing_unselected.svg";
import resourceSelected from "../../assets/mapFilters/resources_selected.svg";
import resourceUnSelected from "../../assets/mapFilters/resources_unselected.svg";
import shelterSelected from "../../assets/mapFilters/shelter_selected.svg";
import shelterUnSelected from "../../assets/mapFilters/shelter_unselected.svg";

const svgArr = [
  foodSelected,
  foodUnSelected,
  shelterSelected,
  shelterUnSelected,
  doctorSelected,
  doctorUnSelected,
  resourceSelected,
  resourceUnSelected,
  churchSelected,
  churchUnSelected,
  domesticSelected,
  domesticUnSelected,
  housingSelected,
  housingUnSelected,
  financeSelected,
  financeUnSelected,
];

const MapFilterContainer = (props) => {
  const { filters, handleChangeFilter } = props;

  return (
    <div
      style={{
        width: "100%",
        height: "298px",
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        borderTop: "2px solid rgba(0,0,0,.25)",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          gridColumn: "span 6",
          margin: "10px auto 0 auto",
          height: "2px",
          width: "32px",
          backgroundColor: "#979797",
          border: "2px solid #979797",
          borderRadius: "5px",
          opacity: ".75",
        }}
      ></div>
      <p
        style={{
          gridColumn: "span 6",
          fontFamily: "FigtreeLight",
          fontSize: "22px",
          fontWeight: "bold",
          margin: "8px 0",
        }}
      >
        Explore San Francisco
      </p>
      {[
        "food",
        "shelter",
        "doctor",
        "resource",
        "church",
        "domestic violence",
        "housing",
        "finance",
      ].map((filter, i) => (
        <MapFilter
          filter={filter}
          handleChangeFilter={handleChangeFilter}
          icon={filters.includes(filter) ? svgArr[2 * i] : svgArr[2 * i + 1]}
        />
      ))}
    </div>
  );
};

export default MapFilterContainer;
