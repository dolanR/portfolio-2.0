import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [1178],
        center: [-27, 40],
        scale: 600
      }}
      style={{width: '100%', height: '100%'}}
    >
      <Geographies
        geography="/features.json"
        fill="#1D054F"
        stroke="#fff"
        strokeWidth={0.3}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-78.999, 43.083]}
        dx={-35}
        dy={-60}
        connectorProps={{
          stroke: "#ddd",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#ddd" >
          {"Based out of Niagara Falls, NY"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
