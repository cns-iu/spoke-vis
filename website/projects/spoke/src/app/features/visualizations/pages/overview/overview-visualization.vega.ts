import { VisualizationSpec } from 'vega-embed';


export interface SpecOptions {
  nodes: Record<string, unknown>[];
  edges: Record<string, unknown>[];
  source?: Record<string, unknown>[];
  destination?: string;
}

export function createSpec(options: SpecOptions): VisualizationSpec {
  // Clone values as vega modifies them
  const nodes = options.nodes.map(node => ({ ...node }));
  const edges = options.edges.map(edge => ({ ...edge }));
  const source = options.source?.map(item => ({ ...item }));
  const destination = options.destination;

  return {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    config: {
      view: {
        stroke: 'transparent'
      }
    },
    width: 'container',
    height: 'container',
    autosize: {
      type: 'fit',
      contains: 'padding'
    },
    layer: [
      {
        data: { name: 'edges' },
        transform: [{
          joinaggregate: [{
            op: 'sum',
            field: 'weight',
            as: 'total_weight'
          }],
          groupby: ['source_type', 'target_type']
        }],
        mark: {
          type: 'rule'
        },
        params: source || destination ? [] : [
          {
            name: 'highlightEdge',
            select: {type: 'point', on: 'mouseover'}
          }
        ],
        encoding: {
          x: {
            field: 'a1',
            type: 'quantitative'
          },
          y: {
            field: 'b1',
            type: 'quantitative'
          },
          x2: {
            field: 'a2'
          },
          y2: {
            field: 'b2'
          },
          strokeWidth: {
            field: 'total_weight',
            type: 'quantitative',
            scale: {
              range: [1, 10]
            },
            legend: {
              titleOrient: 'left',
              titleColor: '#052049',
              labelColor: '#052049',
              orient: 'bottom',
              values: [100000, 2000000, 4000000],
              title: 'Thickness by count:',
              symbolStrokeColor: '#052049',
              symbolSize: 200,
              padding: 20,
              direction: 'horizontal'
            }
          },
          color: {
            condition: source || destination ? [] : [
              {
                param: 'highlightEdge',
                empty: false,
                value: 'red'
              }
            ],
            value: source || destination ? '#EEEEEE' : '#bdbdbd',
            legend: null
          },
          tooltip: source || destination ? [] : [
            {
              field: 'tooltip',
              title: 'Link Types (#Links)',
              type: 'ordinal'
            }
          ]
        }
      },
      {
        data: source ? { name: 'source' } : undefined,
        transform: source || destination ? [
          {
            lookup: 'source_type',
            from: {
              data: { name: 'nodes' },
              key: 'type',
              fields: ['a', 'b']
            },
            as: ['a1', 'b1']
          },
          {
            lookup: 'target_type',
            from: {
              data: { name: 'nodes' },
              key: 'type',
              fields: ['a', 'b']
            },
            as: ['a2', 'b2']
          },
          {filter: `datum.dest_name == '${destination}'`}
        ] : [],
        mark: {
          type: 'rule'
        },
        params: [
          {
            name: 'highlightSelectedEdge',
            select: {type: 'point', on: 'mouseover'}
          }
        ],
        encoding: source || destination ? {
          x: {
            field: 'a1',
            type: 'quantitative'
          },
          y: {
            field: 'b1',
            type: 'quantitative'
          },
          x2: {
            field: 'a2'
          },
          y2: {
            field: 'b2'
          },
          color: {
            condition: [
              {
                param: 'highlightSelectedEdge',
                empty: false,
                value: 'red'
              }
            ],
            value: '#9E9E9E',
            legend: null
          },
          tooltip: [
            {
              field: 'source_name',
              title: 'Source',
              type: 'nominal'
            },
            {
              field: 'target_name',
              title: 'Target',
              type: 'nominal'
            },
            {
              field: 'edge_type',
              title: 'Edge Type',
              type: 'nominal'
            }
          ]
        } : {}
      },
      {
        data: { name: 'nodes' },
        mark: {
          type: 'circle',
          opacity: 1,
          stroke: source || destination ? undefined : 'red',
          strokeWidth: source || destination ? undefined : 2
        },
        params: source || destination ? [] : [
          {
            name: 'highlightNode',
            select: {type: 'point', on: 'mouseover'}
          }
        ],
        encoding: {
          strokeOpacity: source || destination ? {} : {
            value: 0,
            condition: [
              {
                param: 'highlightNode',
                empty: false,
                value: 100
              }
            ]
          },
          x: {
            field: 'a',
            type: 'quantitative',
            axis: {
              tickCount: 12,
              domain: false,
              labels: false,
              ticks: false,
              title: null,
              gridOpacity: 0.5,
              gridColor: '#eeeeee'
            },
            scale: {
              domain: [0, 11]
            }
          },
          y: {
            field: 'b',
            type: 'quantitative',
            axis: {
              tickCount: 5,
              domain: false,
              labels: false,
              ticks: false,
              title: null,
              gridOpacity: 0.5,
              gridColor: '#eeeeee'
            },
            scale: {
              domain: [0, 6]
            }
          },
          tooltip: source || destination ? [] : [
            {
              field: 'tooltip',
              title: 'Link Types (#Links)',
              type: 'ordinal'
            }
          ],
          size: {
            field: 'weight',
            type: 'quantitative',
            scale: {
              range: [500, 1000]
            },
            legend: {
              titleOrient: 'left',
              titleColor: '#052049',
              labelColor: '#052049',
              orient: 'bottom',
              values: [10, 1000000],
              title: 'Size by count:',
              symbolStrokeColor: '#052049',
              padding: 20,
              direction: 'horizontal'
            }
          },
          fill: {
            condition: {
              test: 'datum.label === "Disease"',
              value: {
                expr: 'datum.color'
              }
            },
            value: {
              expr: source || destination ? 'datum.color2 || "#052049"' : 'datum.color || "#052049"'
            }
          }
        }
      },
      {
        data: source ? { name: 'source' } : undefined,
        transform: source || destination ? [
          {
            lookup: 'target_type',
            from: {
              data: { name: 'nodes' },
              key: 'type',
              fields: ['a', 'b', 'id', 'weight', 'color']
            }
          },
          {filter: `datum.dest_name == '${destination}'`}
        ] : [],
        mark: {
          type: 'circle',
          opacity: 1,
          fill: {
            expr: 'datum.color'
          }
        },
        encoding: source || destination ? {
          strokeOpacity: {
            value: 0
          },
          x: {
            field: 'a',
            type: 'quantitative',
            axis: {
              tickCount: 12,
              domain: false,
              labels: false,
              ticks: false,
              title: null,
              gridOpacity: 0.5,
              gridColor: '#eeeeee'
            },
            scale: {
              domain: [0, 11]
            }
          },
          y: {
            field: 'b',
            type: 'quantitative',
            axis: {
              tickCount: 5,
              domain: false,
              labels: false,
              ticks: false,
              title: null,
              gridOpacity: 0.5,
              gridColor: '#eeeeee'
            },
            scale: {
              domain: [0, 6]
            }
          },
          size: {
            field: 'weight',
            type: 'quantitative',
            scale: {
              range: [500, 1000]
            },
            legend: null
          }
        } : {}
      },
      {
        data: { name: 'nodes' },
        mark: {
          type: 'text',
          dy: -30,
          fontSize: 12
        },
        encoding: {
          text: {
            field: 'label',
            type: 'nominal'
          },
          x: {
            field: 'a',
            type: 'quantitative'
          },
          y: {
            field: 'b',
            type: 'quantitative'
          },
          opacity: source || destination ? {
            condition: {
              test: 'datum.label === "Disease"',
              value: 1
            },
            value: 0.15
          } : {}
        }
      },
      {
        data: source ? { name: 'source' } : undefined,
        transform: source || destination ? [
          {
            lookup: 'target_type',
            from: {
              data: { name: 'nodes' },
              key: 'type',
              fields: ['a', 'b', 'label']
            }
          },
          {filter: `datum.dest_name == '${destination}'`}
        ] : undefined,
        mark: {
          type: 'text',
          dy: -30,
          fontSize: 12,
          opacity: 1
        },
        encoding: source || destination ? {
          text: {
            field: 'label',
            type: 'nominal'
          },
          x: {
            field: 'a',
            type: 'quantitative'
          },
          y: {
            field: 'b',
            type: 'quantitative'
          }
        } : {}
      },
      {
        data: {
          values: [
            {x: 0, y: 5, label: 'B'},
            {x: 0, y: 4, label: 'C'},
            {x: 0, y: 3, label: 'D'},
            {x: 0, y: 2, label: 'E'},
            {x: 0, y: 1, label: 'F'}
          ]
        },
        mark: {
          type: 'text',
          fontSize: 12,
          dx: -10,
          opacity: 0.5
        },
        encoding: {
          text: {
            field: 'label',
            type: 'nominal'
          },
          x: {
            field: 'x',
            type: 'quantitative'
          },
          y: {
            field: 'y',
            type: 'quantitative'
          }
        }
      },
      {
        data: {
          values: [
            {x: 11, y: 5, label: 'B'},
            {x: 11, y: 4, label: 'C'},
            {x: 11, y: 3, label: 'D'},
            {x: 11, y: 2, label: 'E'},
            {x: 11, y: 1, label: 'F'}
          ]
        },
        mark: {
          type: 'text',
          fontSize: 12,
          dx: 10,
          opacity: 0.5
        },
        encoding: {
          text: {
            field: 'label',
            type: 'nominal'
          },
          x: {
            field: 'x',
            type: 'quantitative'
          },
          y: {
            field: 'y',
            type: 'quantitative'
          }
        }
      },
      {
        data: {
          values: [
            {x: 0, y: 0, label: '1:G'},
            {x: 1, y: 0, label: '2'},
            {x: 2, y: 0, label: '3'},
            {x: 3, y: 0, label: '4'},
            {x: 4, y: 0, label: '5'},
            {x: 5, y: 0, label: '6'},
            {x: 6, y: 0, label: '7'},
            {x: 7, y: 0, label: '8'},
            {x: 8, y: 0, label: '9'},
            {x: 9, y: 0, label: '10'},
            {x: 10, y: 0, label: '11'},
            {x: 11, y: 0, label: '12:G'}
          ]
        },
        mark: {
          type: 'text',
          fontSize: 12,
          dy: 10,
          opacity: 0.5
        },
        encoding: {
          text: {
            field: 'label',
            type: 'nominal'
          },
          x: {
            field: 'x',
            type: 'quantitative'
          },
          y: {
            field: 'y',
            type: 'quantitative'
          }
        }
      },
      {
        data: {
          values: [
            {x: 0, y: 6, label: '1:A'},
            {x: 1, y: 6, label: '2'},
            {x: 2, y: 6, label: '3'},
            {x: 3, y: 6, label: '4'},
            {x: 4, y: 6, label: '5'},
            {x: 5, y: 6, label: '6'},
            {x: 6, y: 6, label: '7'},
            {x: 7, y: 6, label: '8'},
            {x: 8, y: 6, label: '9'},
            {x: 9, y: 6, label: '10'},
            {x: 10, y: 6, label: '11'},
            {x: 11, y: 6, label: '12:A'}
          ]
        },
        mark: {
          type: 'text',
          fontSize: 12,
          dy: -10,
          opacity: 0.5
        },
        encoding: {
          text: {
            field: 'label',
            type: 'nominal'
          },
          x: {
            field: 'x',
            type: 'quantitative'
          },
          y: {
            field: 'y',
            type: 'quantitative'
          }
        }
      }
    ],
    datasets: {
      nodes,
      edges,
      source: source as unknown[]
    }
  };
}
