import Map, { Marker, Popup } from "react-map-gl";
import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const mapRef = useRef();

  const markers = useMemo(() =>
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
        {location.category === "clinic" && (
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
        {(location.category === "resource" ||
          location.category === "restaurant") && (
          <img
            src={resourcePin}
            alt={location.category}
            style={{ height: "30px" }}
          />
        )}
        {location.category === "charity" && (
          <img
            src={financePin}
            alt={location.category}
            style={{ height: "30px" }}
          />
        )}
      </Marker>
    ))
  );

  return (
    <Map
      ref={mapRef}
      initialViewState={viewState}
      {...viewState}
      style={{ width: "100%", height: "100%", borderRadius: "10px" }}
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "1.1rem" }}>{popupViewState.name}</p>
            <button
              style={{ transform: "scale(75%)" }}
              onClick={() => navigate(`/restaurant/${popupViewState._id}`)}
            >
              Go to page
            </button>
          </div>
        </Popup>
      )}
    </Map>
  );
};

export default LocationMap;
