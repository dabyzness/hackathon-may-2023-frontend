import Map, { Marker, Popup } from "react-map-gl";
import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import LocationOverlay from "../LocationOverlay/LocationOverlay";

import "mapbox-gl/dist/mapbox-gl.css";
import churchPin from "../../assets/mapPins/Church.svg";
import doctorPin from "../../assets/mapPins/Doctor.svg";
import domesticPin from "../../assets/mapPins/DomesticViolence.svg";
import financePin from "../../assets/mapPins/Finance.svg";
import foodPin from "../../assets/mapPins/Food.svg";
import housingPin from "../../assets/mapPins/Housing.svg";
import resourcePin from "../../assets/mapPins/Resource.svg";
import shelterPin from "../../assets/mapPins/Shelter.svg";

const LocationMap = (props) => {
  const { locations, filters } = props;

  const [popupViewState, setPopupViewState] = useState(null);
  const [viewState, setViewState] = useState({
    longitude: -122.4075807,
    latitude: 37.781706,
    zoom: 15,
  });
  const [markers, setMarkers] = useState([]);

  const navigate = useNavigate();

  const mapRef = useRef();

  useEffect(() => {
    setMarkers(
      locations.map((location, i) => (
        <Marker
          key={`marker-${i}`}
          latitude={location.latitude}
          longitude={location.longitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupViewState(location);
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <p style={{ marginBottom: "-5px", color: "black" }}>{location.name}</p> */}
          {location.category === "church" && (
            <img
              src={churchPin}
              alt={location.category}
              style={{ height: "30px" }}
            />
          )}
          {location.category === "doctor" && (
            <img
              src={doctorPin}
              alt={location.category}
              style={{ height: "30px" }}
            />
          )}
          {location.category === "shelter" && (
            <img
              src={shelterPin}
              alt={location.category}
              style={{ height: "30px" }}
            />
          )}
          {location.category === "food" && (
            <img
              src={foodPin}
              alt={location.category}
              style={{ height: "30px" }}
            />
          )}
          {location.category === "resource" && (
            <img
              src={resourcePin}
              alt={location.category}
              style={{ height: "30px" }}
            />
          )}
          {location.category === "finance" && (
            <img
              src={financePin}
              alt={location.category}
              style={{ height: "30px" }}
            />
          )}
          {location.category === "domestic violence" && (
            <img
              src={domesticPin}
              alt={location.category}
              style={{ height: "30px" }}
            />
          )}
        </Marker>
      ))
    );
  }, [locations]);

  return (
    <Map
      ref={mapRef}
      initialViewState={viewState}
      {...viewState}
      style={{ width: "100%", height: "83vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onMove={(e) => setViewState(e.viewState)}
    >
      {markers}

      {popupViewState && (
        <Popup
          longitude={Number(popupViewState.longitude)}
          latitude={Number(popupViewState.latitude)}
          anchor="top"
          onClose={() => setPopupViewState(null)}
        >
          <LocationOverlay location={popupViewState} />
        </Popup>
      )}
    </Map>
  );
};

export default LocationMap;
