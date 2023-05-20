import Map, { Marker, Popup } from "react-map-gl";
import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import "mapbox-gl/dist/mapbox-gl.css";

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
        {/* <p style={{ marginBottom: "-5px", color: "white" }}>{location.name}</p>
        <img src="public/favico.ico" alt="" style={{ height: "30px" }} /> */}
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
