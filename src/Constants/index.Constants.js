import { TOTAL_CONFIRMED } from './dataTypes';

export const MAPBOX_API =
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXltcGVsIiwiYSI6ImNraXJpeWNreTFzZGozM3AzaGx4cDIxbGwifQ.eiHcaBfQAFrV6anXy3V8mA';
export const OPENSTRETMAP_API =
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
export const DEFAULT_DATA_TYPE = TOTAL_CONFIRMED;
export const GLOBAL_SELECTOR = 'All';
export const DEFAULT_COUNTRY = GLOBAL_SELECTOR;
export const DEFAULT_PRECISION = 2;
export const WORLD_POPULATION = 7594000000;
