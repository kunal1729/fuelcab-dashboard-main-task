import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

export default function TrackingMap({ markerPos }) {
  return (
    <>
      <GoogleMap
        zoom={10}
        center={markerPos}
        clickableIcons={false}
        mapContainerClassName={{}}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        {markerPos && <Marker position={markerPos} />}
      </GoogleMap>
    </>
  );
}
