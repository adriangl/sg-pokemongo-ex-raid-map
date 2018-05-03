import {} from 'leaflet';

export type Latitude = number;
export type Longitude = number;
export type Coordinates = [Latitude, Longitude];

export interface IGeoJSONFeature {
	type: string;
	geometry: {
		type: 'Point';
		coordinates: [number, number];
	};
	properties: {
		name: string;
		terrains: string[];
		dates: string[];
		s2Cell?: string;
	};
}

export interface IS2GeoJSONFeature {
	type: string;
	coordinates: [[Coordinates, Coordinates, Coordinates, Coordinates]];
	properties: {
		order: string;
	};
}

export interface IGeoJSON {
	type: string;
	features: IGeoJSONFeature[];
}
export interface IS2GeoJSON {
	type: string;
	features: IS2GeoJSONFeature[];
}

// export type FilterFunction = (feature: IGeoJSONFeature) => boolean;
// export type LoopFunction = (feature: IGeoJSONFeature) => void;
export type FilterFunction = any;
export type LoopFunction = any;
