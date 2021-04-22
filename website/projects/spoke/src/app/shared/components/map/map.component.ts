import { Any } from '@angular-ru/common/typings';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FeatureCollection } from 'geojson';
import { FullscreenControl, Map, MapLayerMouseEvent, Marker, NavigationControl, Style } from 'mapbox-gl';

import { Cluster, Edge, MapMarker, MiniMapOptions, Node, ZoomLookup } from '../../../core/models/Map';
import { MiniMap } from './minimap';
import { ZoomLevelControl } from './zoom-level.control';


const blankStyle: Style = {
  version: 8,
  name: 'Blank',
  center: [0, 0],
  zoom: 0,
  sources: {},
  sprite: 'https://cdn.jsdelivr.net/gh/lukasmartinelli/osm-liberty@gh-pages/sprites/osm-liberty',
  glyphs: 'https://cdn.jsdelivr.net/gh/orangemug/font-glyphs@gh-pages/glyphs/{fontstack}/{range}.pbf',
  layers: [
    {
      id: 'background',
      type: 'background',
      paint: {
        'background-color': 'white'
      }
    }
  ]
};
const defaultMinimapOptions: MiniMapOptions = {
  id: 'mapboxgl-minimap',
  width: '320px',
  height: '180px',
  style: blankStyle,
  center: [0, 0],
  zoom: 0,

  containerStyles: `
    border: 1px solid lightgray;
    border-radius: 5px;
    -webkit-box-shadow: 3px 3px 5px 4px #00000021;
    -moz-box-shadow: 3px 3px 5px 4px #00000021;
    box-shadow: 3px 3px 5px 4px #00000021;
  `,

  // should be a function; will be bound to Minimap
  zoomAdjust: null,

  // [a, b, c]
  // if parent map zoom >= a, and minimap zoom >= b, set minimap zoom to c
  // must be defined from most zoomed in rule, to least zoomed in rule.
  zoomLevels: [
    [9, 3, 4],
    [8, 2, 3],
    [6, 0, 2]
  ],

  edgeColor: '#08F',
  edgeWidth: 1,
  edgeOpacity: 1,

  fillColor: '#F80',
  fillOpacity: 0.25,

  dragPan: false,
  scrollZoom: false,
  boxZoom: false,
  dragRotate: false,
  keyboard: false,
  doubleClickZoom: false,
  touchZoomRotate: false
};
const defaultNodes: Node[] = [
  { level: 0, zoom: 0.0, fontSize: 0 },
  { level: 1, zoom: 0.0, fontSize: 20 },
  { level: 2, zoom: 4.5, fontSize: 18 },
  { level: 3, zoom: 5.0, fontSize: 18 },
  { level: 4, zoom: 5.5, fontSize: 16 },
  { level: 5, zoom: 6.0, fontSize: 16 },
  { level: 6, zoom: 6.2, fontSize: 14 },
  { level: 7, zoom: 6.5, fontSize: 14 },
  { level: 8, zoom: 6.7, fontSize: 12 },
  { level: 9, zoom: 7.5, fontSize: 12 },
];
const defaultEdges: Edge[] = [
  { level: 0, zoom: 0, color: '', width: 0, opacity: 0.0, borderOpacity: 0.0, borderColor: '', borderWidth: 0 },
  { level: 1, zoom: 1.5, color: '#FFEBA1', width: 3.2, opacity: 1.0, borderOpacity: 1.0, borderColor: 'yellow', borderWidth: 1.2 },
  { level: 2, zoom: 3.5, color: '#FFEBA1', width: 3, opacity: 1.0, borderOpacity: 1.0, borderColor: '#F9D776', borderWidth: 1 },
  { level: 3, zoom: 4.5, color: '#F9D776', width: 2.7, opacity: 0.9, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 },
  { level: 4, zoom: 5.0, color: '#c1b276', width: 2.7, opacity: 0.9, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 },
  { level: 5, zoom: 5.4, color: '#94895f', width: 2.2, opacity: 0.8, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 },
  { level: 6, zoom: 5.7, color: '#615b43', width: 2.2, opacity: 0.8, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 },
  { level: 7, zoom: 6.0, color: 'gray', width: 2, opacity: 0.7, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 },
  { level: 8, zoom: 6.2, color: 'gray', width: 2, opacity: 0.6, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 },
  { level: 9, zoom: 7.0, color: 'gray', width: 1, opacity: 0.5, borderOpacity: 0.0, borderColor: '#F9D776', borderWidth: 1 }
];
const defaultClusters: Cluster = {
  fillOpacity: 0.7,
  borderLineWidth: 0.5,
  borderLineOpacity: 0.8,
  borderLineMinZoom: 3
};
const defaultInitialZoom = 2;
const defaultTextOverlapEnabledZoom = 3;
const defaultTextOverlapEnabled = false;
const defaultMinZoom = 0;
const defaultMaxZoom = 10;



@Component({
  selector: 'spoke-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  // Inputs
  @Input() mapStyle = blankStyle;
  @Input() edgeFeatures!: FeatureCollection;
  @Input() nodeFeatures!: FeatureCollection;
  @Input() clusterFeatures!: FeatureCollection;
  @Input() boundaryFeatures!: FeatureCollection;
  @Input() currentZoom = defaultInitialZoom;
  @Input() mapCenter: [number, number] = [0,0];
  @Input() minimapOptions: MiniMapOptions = defaultMinimapOptions;
  @Input() mapMarkers: MapMarker[] = [];

  // Outputs
  @Output() nodeClick = new EventEmitter<MapLayerMouseEvent>();
  @Output() edgeClick = new EventEmitter<MapLayerMouseEvent>();
  @Output() zoomChange = new EventEmitter<number>();
  @Output() panChange = new EventEmitter<[number, number]>();

  map!: Map;
  nodeZoomIndex = 0;
  edgeZoomIndex = 0;
  textOverlapEnabledZoom = defaultTextOverlapEnabledZoom;
  textOverlapEnabled = defaultTextOverlapEnabled;
  edges: Edge[] = defaultEdges;
  nodes: Node[] = defaultNodes;

  // Work these variables back into the layer tags.
  currentNodeFormula: Any = ['at', ['get', 'level'], ['literal', this.nodes]];
  currentEdgeFormula: Any = ['get', 'zoom', ['at', ['get', 'level'], ['literal', this.edges]]];
  edgeFormula = ['at', ['get', 'level'], ['literal', this.edges]];
  lastEdgeFormula = ['at', this.edges.length - 1, ['literal', this.edges]];

  capitalizeFirstLetter(input: string): string {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  nodeClicked(event: MapLayerMouseEvent): void {
    this.nodeClick.emit(event);
  }

  edgeClicked(event: MapLayerMouseEvent): void {
    this.edgeClick.emit(event);
  }

  onMapLoad(map: Map): void {
    this.map = map;
    this.currentZoom = map.getZoom();

    // Use the same map center for the minimap unless the minimapOptions have been customized.
    if (this.minimapOptions === defaultMinimapOptions) {
      this.minimapOptions.center = this.mapCenter;
    }

    // ShowCompass off to disable rotation.
    map.addControl(new NavigationControl({ showCompass: false }), 'top-right');
    map.addControl(new FullscreenControl({}), 'top-right');
    if (this.nodeFeatures.features.length === 0) {
      console.log('0 node features.');
    } else if (this.clusterFeatures.features.length === 0) {
      console.log('0 cluster features');
    } else {
      map.addControl(new MiniMap({nodes: this.nodeFeatures, clusters: this.clusterFeatures}, this.minimapOptions), 'bottom-right');
    }
    map.addControl(new ZoomLevelControl(), 'bottom-right');

    this.map.resize();

    if (this.mapMarkers.length) {
      this.addMapMarkers(this.mapMarkers);
    }

    // When the user zooms the map, this method handles showing and hiding data based on zoom level
    map.on('zoom', () => this.updateFilters());
    map.on('zoomend', (e) => this.zoomChange.emit(this.map.getZoom()));
    map.on('moveend', (e) => this.panChange.emit(this.map.getCenter().toArray() as [number, number]));
  }

  addMapMarkers(markers: MapMarker[]): void {
    markers.forEach(marker => {
      new Marker(marker.config || {})
        .setLngLat(marker.coordinates)
        .addTo(this.map);
    });
  }

  // In order to show more or less data based on the zoom level we have to update the layer filters when the map zooms.
  updateFilters(): void {
    const { map, edges, nodes, textOverlapEnabledZoom, textOverlapEnabled } = this;
    const currentZoom: number = map.getZoom();

    // When the zoom level changes, check if we need to display a different set of nodes. If we do, update the node filter.
    if (this.nodeLevelChange()) {
      const currentNode = ['get', 'zoom', ['at', ['get', 'level'], ['literal', nodes]]];
      map.setFilter('node_labels', ['>=', currentZoom, currentNode]);
    }

    // When the zoom level changes, check if we need to display a different set of edges. If we do, update the node filter.
    // We decided showing the nodes (without labels) at the same time as the edges was preferable, instead of waiting for
    // when the labels will fit.
    if (this.edgeLevelChange()) {
      const currentEdge = ['get', 'zoom', ['at', ['get', 'level'], ['literal', edges]]];
      map.setFilter('nodes', ['>=', currentZoom, currentEdge]);
      map.setFilter('edges_border', ['>=', currentZoom, currentEdge]);
      map.setFilter('edges', ['>=', currentZoom, currentEdge]);
    }

    //  Determing if text overlap should be enabled or disabled based on the break point set in the config object.
    if (!textOverlapEnabled && currentZoom > textOverlapEnabledZoom) {
      map.setLayoutProperty('node_labels', 'text-allow-overlap', true);
      this.textOverlapEnabled = true;
    } else if (textOverlapEnabled && currentZoom < textOverlapEnabledZoom) {
      map.setLayoutProperty('node_labels', 'text-allow-overlap', false);
      this.textOverlapEnabled = false;
    }
  }

  // Returns whether or not the zoom level has changed enough to warrant a change in which nodes we are displaying.
  nodeLevelChange(): boolean {
    const currentIndex: number = this.getZoomIndex(this.nodes);
    if (currentIndex === this.nodeZoomIndex) {
      return false;
    }
    this.nodeZoomIndex = currentIndex;
    return true;
  }

  // Returns whether or not the zoom level has changed enough to warrant a change in which edges we are displaying.
  edgeLevelChange(): boolean {
    const currentIndex: number = this.getZoomIndex(this.edges);
    if (currentIndex === this.edgeZoomIndex) {
      return false;
    }
    this.edgeZoomIndex = currentIndex;
    return true;
  }

  // Converts the current zoom number, to the index number of the object with the same .zoom property in the lookup array passed in.
  // Used because getZoom() will return very precise values, and the nodes / edges config objects will not match up exactly.
  getZoomIndex(zoomLookup: ZoomLookup): number {
    const zoom: number = this.map.getZoom();
    for (let index = 0; index <= zoomLookup.length; index++) {
      if (index === (zoomLookup.length - 1)) {
        return index;
      }
      if (zoom >= zoomLookup[index].zoom && zoom < zoomLookup[index + 1].zoom) {
        return index;
      }
    }

    console.error('No Zoom index found.  Zoom lookup: ', zoomLookup);
    return 0;
  }
}
