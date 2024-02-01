import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

import map from "../../public/map.json";

export default function MapChart() {
  const [hovered, setHovered] = useState<boolean>(false);

  const handleMouseEnter = (estado: string) => {
    if (estado === "Minas Gerais") {
      setHovered(true);
    }
  };
  const handleMouseLeave = (estado: string) => {
    if (estado === "Minas Gerais") {
      setHovered(false);
    }
  };
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        scale: 700,
        center: [0, -5],
      }}
    >
      <Geographies geography={map}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              onMouseEnter={() => handleMouseEnter(geo?.properties?.nome)}
              onMouseLeave={() => handleMouseLeave(geo?.properties?.nome)}
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: {
                  fill: hovered ? "#ffffff" : "#353535",
                  stroke: "#ffffff",
                  strokeWidth: "2px",
                  outline: "none",
                  transition: "1s ease",
                },
                hover: {
                  fill: "#424242",
                  stroke: "#ffffff",
                  outline: "none",
                  transition: "1s ease",
                  scale: hovered ? "103%" : "",
                  zIndex: hovered ? "1" : "-10",
                },
                pressed: {
                  fill: "#ffffff",
                  outline: "none",
                },
              }}
            />
          ))
        }
      </Geographies>
      <Annotation
        connectorProps={{
          stroke: "#ffffff0",
        }}
        subject={[12.5, 6.5]}
        dx={0}
        dy={0}
        className="flex justify-center items-center flex-col gap-4"
      >
        <text
          className="font-nunito font-semibold text-white text-sm"
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#ffffff"
        >
          I&apos;m Here
        </text>
      </Annotation>
      <Annotation
        connectorProps={{
          stroke: "#ffffff0",
        }}
        subject={[15, 5]}
        dx={0}
        dy={0}
        className="flex justify-center items-center flex-col gap-4"
      >
        <text
          className="font-nunito font-semibold text-white text-sm"
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#ffffff"
        >
          Ponte Nova - MG
        </text>
      </Annotation>
      <Annotation
        connectorProps={{
          stroke: "#ffffff0",
        }}
        subject={[11, 4.5]}
        dx={0}
        dy={0}
        className="flex justify-center items-center flex-col gap-4"
      >
        <text
          className="font-nunito font-semibold text-zinc-800 text-7xl"
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#ffffff"
        >
          .
        </text>
      </Annotation>
    </ComposableMap>
  );
}
