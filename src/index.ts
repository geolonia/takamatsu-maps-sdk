import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import style from './style.json'

declare global {
  interface Window {
      city: any;
  }
}

class TakamatsuMap extends maplibregl.Map {
  constructor(params: any) {
    const defaults = {
      container: 'map',
      style: style,
      center: [134.04654783784918, 34.34283588989655],
      zoom: 12
    }

    super({...defaults, ...params});
  }

  loadData(className: string) {
    this.addLayer({
      id: className,
      type: 'fill',
      source: 'takamatsu',
      'source-layer': 'main',
      paint: {
        'fill-color': '#FF0000',
        'fill-opacity': 0.2
      },
      "filter": [
        "all",
        [
          "==",
          "class",
          className
        ],
      ],
    });
  }
}

window.city = {}
window.city.Takamatsu = maplibregl
window.city.Takamatsu.Map = TakamatsuMap
