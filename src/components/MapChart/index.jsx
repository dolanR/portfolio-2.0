import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [1178],
        center: [-5, 40],
        scale: 800
      }}
      style={{width: '100%', height: '100%'}}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-78.999, 43.083]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#fff",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#fff" >
          {"Based out of Niagara Falls, NY"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
