import dayjs from 'dayjs';
import { GROSS_PROFIT_MEASURE, DATE_ATTR_IN_MONTHS, DATE_ATTR } from '../../constants';

export function getFilter(activeMonth: number, activeYear: number) {
  const date = dayjs().year(activeYear);
  const format = 'YYYY-MM-DD';
  const month = date.month(activeMonth).date(1).format(format);
  const nextMonth = date
    .month(activeMonth + 1)
    .date(1)
    .subtract(1, 'day')
    .format(format);

  return {
    absoluteDateFilter: {
      dataSet: {
        uri: DATE_ATTR,
      },
      from: month,
      to: nextMonth,
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

export const INITIAL_MONTH_FILTER = {
  absoluteDateFilter: {
    dataSet: {
      uri: DATE_ATTR,
    },
    from: '2016-01-01',
    to: '2016-01-31',
  },
};
