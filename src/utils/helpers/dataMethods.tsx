import moment from 'moment';
import { DATE_ATTR, DATE_ATTR_IN_MONTHS, GROSS_PROFIT_MEASURE } from '_constants';

export function getFilter(activeMonth: number, activeYear: number) {
  const date = new Date(activeYear, activeMonth, 0);
  const from = moment(date).startOf('month').format('YYYY-MM-DD');
  const to = moment(date).endOf('month').format('YYYY-MM-DD');

  return {
    absoluteDateFilter: {
      dataSet: {
        uri: DATE_ATTR,
      },
      from,
      to,
    },
  };
}

export function getMeasures() {
  return [
    {
      measure: {
        localIdentifier: 'm1',
        definition: {
          measureDefinition: {
            item: {
              uri: GROSS_PROFIT_MEASURE,
            },
          },
        },
        alias: '$ Gross Profit',
      },
    },
  ];
}

export function getViewBy() {
  return {
    visualizationAttribute: {
      displayForm: {
        uri: DATE_ATTR_IN_MONTHS,
      },
      localIdentifier: 'a1',
    },
  };
}

export const MEASURES = [
  {
    measure: {
      localIdentifier: 'm1',
      definition: {
        measureDefinition: {
          item: {
            uri: GROSS_PROFIT_MEASURE,
          },
        },
      },
      alias: '$ Gross Profit',
    },
  },
];

export const VIEW_BY = {
  visualizationAttribute: {
    displayForm: {
      uri: DATE_ATTR_IN_MONTHS,
    },
    localIdentifier: 'a1',
  },
};
