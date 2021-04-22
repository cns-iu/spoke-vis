import { VisualizationSpec } from 'vega-embed';


export interface SpecOptions {
  source?: string;
  destination?: string;
}

export function createSpec(options: SpecOptions = {}): VisualizationSpec {
  const { source, destination } = options;
  if (!source || !destination) {
    return vis1Spec;
  } else {
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
          data: {
            url: 'assets/datasets/overview/edges-v3.csv'
          },
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
              scale: {
                range: [1, 10]
              },
              legend: null
            },
            color: {
              value: '#f5f5f5',
              legend: null
            }
          }
        },
        {
          data: {
            url:  `assets/datasets/${source}-food-tree/tree-edges.csv`
          },
          transform: [
            {
              lookup: 'source_type',
              from: {
                data: {url: 'assets/datasets/overview/nodes-v3.csv'},
                key: 'type',
                fields: ['a', 'b']
              },
              as: ['a1', 'b1']
            },
            {
              lookup: 'target_type',
              from: {
                data: {url: 'assets/datasets/overview/nodes-v3.csv'},
                key: 'type',
                fields: ['a', 'b']
              },
              as: ['a2', 'b2']
            },
            {filter: `datum.dest_name == '${destination}'`}
          ],
          mark: {
            type: 'rule'
          },
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
            }
          }
        },
        {
          data: {
            url: 'assets/datasets/overview/nodes-v3.csv'
          },
          mark: {
            type: 'circle',
            opacity: 1,
            fill: {
              expr: 'datum.color2'
            }
          },
          encoding: {
            x: {
              field: 'a',
              type: 'quantitative',
              axis: {
                tickCount: 12,
                domain: false,
                labels: false,
                ticks: false,
                title: null
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
                gridOpacity: 0.5
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
          }
        },
        {
          data: {
            url:  `assets/datasets/${source}-food-tree/tree-edges.csv`
          },
          transform: [
            {
              lookup: 'target_type',
              from: {
                data: {url: 'assets/datasets/overview/nodes-v3.csv'},
                key: 'type',
                fields: ['a', 'b', 'id', 'weight', 'color']
              }
            },
            {filter: `datum.dest_name == '${destination}'`}
          ],
          mark: {
            type: 'circle',
            opacity: 1,
            fill: {
              expr: 'datum.color'
            }
          },
          encoding: {
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
                title: null
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
                gridOpacity: 0.5
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
          }
        },
        {
          data: {
            url: 'assets/datasets/overview/nodes-v3.csv'
          },
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
            opacity: {
              condition: {
                test: 'datum.label === "Disease"',
                value: 1
              },
              value: 0.15
            }
          }
        },
        {
          data: {
            url:  `assets/datasets/${source}-food-tree/tree-edges.csv`
          },
          transform: [
            {
              lookup: 'target_type',
              from: {
                data: {url: 'assets/datasets/overview/nodes-v3.csv'},
                key: 'type',
                fields: ['a', 'b', 'label']
              }
            },
            {filter: `datum.dest_name == '${destination}'`}
          ],
          mark: {
            type: 'text',
            dy: -30,
            fontSize: 12,
            opacity: 1
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
              {x: 0, y: 0, label: '1'},
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
              {x: 0, y: 6, label: '1'},
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
      ]
    };
  }
}

export const vis1Spec: VisualizationSpec =
  {
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
    data: {
      url: 'assets/datasets/overview/nodes-v3.csv'
    },
    layer: [
      {
        data: {
          url: 'assets/datasets/overview/edges-v3.csv'
        },
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
        params: [
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
            scale: {
              range: [1, 10]
            },
            legend: null
          },
          color: {
            condition: [
              {
                param: 'highlightEdge',
                empty: false,
                value: 'red'
              },
              {
                test: 'datum.total_weight > 500000',
                value: '#000000'
              }
            ],
            value: '#e0e0e0',
            legend: null
          },
          tooltip: [
            {
              field: 'tooltip',
              title: 'Link Types (#Links)',
              type: 'ordinal'
            }
          ]
        }
      },
      {
        mark: {
          type: 'circle',
          opacity: 1,
          stroke: 'red',
          strokeWidth: 2,
          fill: {
            expr: 'datum.color'
          }
        },
        params: [
          {
            name: 'highlightNode',
            select: {type: 'point', on: 'mouseover'}
          }
        ],
        encoding: {
          strokeOpacity: {
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
              title: null
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
              gridOpacity: 0.5
            },
            scale: {
              domain: [0, 6]
            }
          },
          tooltip: [
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
            legend: null
          }
        }
      },
      {
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
            {x: 0, y: 0, label: '1'},
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
            {x: 0, y: 6, label: '1'},
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
    ]
  };
