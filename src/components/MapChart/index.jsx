import React from 'react';
import { ComposableMap, Geographies, Geography, Annotation, Marker } from 'react-simple-maps';

const MapChart = () => {
	return (
		<ComposableMap
			projection='geoAzimuthalEqualArea'
			projectionConfig={{
				rotate: [1178],
				center: [-27, 40],
				scale: 600,
			}}
			style={{ width: '100%', height: '100%' }}
		>
			<Geographies geography='/features.json' fill='#1D054F' stroke='#fff' strokeWidth={0.3}>
				{({ geographies }) => geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)}
			</Geographies>
			<Marker coordinates={[-78.999, 43.083]}>
				<circle r={6} fill='#fff' />
				<text textAnchor='middle' y={-15} x={-160} style={{ fill: '#5D5A6D', fontSize: '1.5rem' }}>
					{'Based out of Niagara Falls, NY'}
				</text>
			</Marker>
		</ComposableMap>
	);
};

export default MapChart;
