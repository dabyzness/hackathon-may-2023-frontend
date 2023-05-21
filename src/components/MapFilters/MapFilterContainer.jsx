import MapFilter from "./MapFilter";

import churchSelected from "../../assets/mapFilters/churches_selected.svg";
import churchUnSelected from "../../assets/mapFilters/churches_unselected.svg";
import doctorSelected from "../../assets/mapFilters/doctor_selected.svg";
import doctorUnSelected from "../../assets/mapFilters/doctor_unselected.svg";
import financeSelected from "../../assets/mapFilters/financial-resources_selected.svg";
import financeUnSelected from "../../assets/mapFilters/financial-resources_unselected.svg";
import foodSelected from "../../assets/mapFilters/food_selected.svg";
import foodUnSelected from "../../assets/mapFilters/food_unselected.svg";
import housingSelected from "../../assets/mapFilters/permanent housing_selected.svg";
import housingUnSelected from "../../assets/mapFilters/permanent housing_unselected.svg";
import resourceSelected from "../../assets/mapFilters/resources_selected.svg";
import resourceUnSelected from "../../assets/mapFilters/resources_unselected.svg";
import shelterSelected from "../../assets/mapFilters/Shelter_selected.svg";
import shelterUnSelected from "../../assets/mapFilters/Shelter_unselected.svg";

const MapFilterContainer = (props) => {
  const { filters, handleChangeFilter } = props;

  return (
    <div styles={{ width: "100%", height: "100px" }}>
      {[
        "shelter",
        "clinic",
        "food",
        "restaurant",
        "other",
        "church",
        "government",
        "resource",
        "charity",
      ].map((filter) => {
        let html;

        switch (filter) {
          case "shelter":
            html = (
              <MapFilter
                filter={filter}
                handleChangeFilter={handleChangeFilter}
                icon={
                  filters.includes(filter) ? shelterSelected : shelterUnSelected
                }
              />
            );
            break;
          case "clinic":
            html = (
              <MapFilter
                filter={filter}
                handleChangeFilter={handleChangeFilter}
                icon={
                  filters.includes(filter) ? doctorSelected : doctorUnSelected
                }
              />
            );
            break;
          case "food":
            html = (
              <MapFilter
                filter={filter}
                handleChangeFilter={handleChangeFilter}
                icon={filters.includes(filter) ? foodSelected : foodUnSelected}
              />
            );
            break;
          case "restaurant":
            html = (
              <MapFilter
                filter={filter}
                handleChangeFilter={handleChangeFilter}
                icon={
                  filters.includes(filter) ? housingSelected : housingUnSelected
                }
              />
            );
            break;
          // case "other":
          //   html = (
          //     <MapFilter
          //       filter={filter}
          //       handleChangeFilter={handleChangeFilter}
          //       icon={
          //         filters.includes(filter) ? domesticSelected : domesticUnSelected
          //       }
          //     />
          //   );
          //   break;
          case "church":
            html = (
              <MapFilter
                filter={filter}
                handleChangeFilter={handleChangeFilter}
                icon={
                  filters.includes(filter) ? churchSelected : churchUnSelected
                }
              />
            );
            break;
          case "government":
            html = (
              <MapFilter
                filter={filter}
                handleChangeFilter={handleChangeFilter}
                icon={
                  filters.includes(filter) ? shelterSelected : shelterUnSelected
                }
              />
            );
            break;
          case "resource":
            html = (
              <MapFilter
                filter={filter}
                handleChangeFilter={handleChangeFilter}
                icon={
                  filters.includes(filter)
                    ? resourceSelected
                    : resourceUnSelected
                }
              />
            );
            break;
          case "charity":
            html = (
              <MapFilter
                filter={filter}
                handleChangeFilter={handleChangeFilter}
                icon={
                  filters.includes(filter) ? financeSelected : financeUnSelected
                }
              />
            );
            break;
          default:
            break;
        }

        return html;
      })}
    </div>
  );
};

export default MapFilterContainer;
