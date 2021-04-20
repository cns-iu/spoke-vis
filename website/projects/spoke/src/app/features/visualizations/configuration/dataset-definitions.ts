import { parse } from 'papaparse';

import { DatasetDefinition } from '../services/dataset-definition.service';


export const DATASET_DEFINITIONS: DatasetDefinition[] = [
  {
    dataset: 'boundary',
    file: 'boundary.geojson',
    type: 'json'
  },
  {
    dataset: 'cluster',
    file: 'cluster.geojson',
    type: 'json'
  },
  {
    dataset: 'edges',
    file: 'edges.geojson',
    type: 'json'
  },
  {
    dataset: 'nodes',
    file: 'nodes.geojson',
    type: 'json'
  },
  {
    dataset: 'tree-edges',
    file: 'tree-edges.csv',
    type: 'text',
    parser: raw => parse(raw as string, {
      header: true,
      skipEmptyLines: 'greedy',
    }).data
  }
];
