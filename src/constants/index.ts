export const GROSS_PROFIT_MEASURE = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877' as string;

export const DATE_ATTR_IN_MONTHS = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142' as string;

export const DATE_ATTR = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180' as string;

export const PROJECT_ID = 'xms7ga4tf3g3nzucd8380o2bev8oeknp' as string;

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as Array<string>;

const now = new Date().getUTCFullYear();
export const YEARS = Array(now - (now - 20))
  .fill('')
  .map((val, idx) => now - idx) as Array<number>;
