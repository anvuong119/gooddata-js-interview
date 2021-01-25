import englishFlag from '_assets/images/english.png';
import vietnamFlag from '_assets/images/vietnam.png';

export const LANGUAGES = [
  {
    key: 'en',
    title: 'English',
    flag: englishFlag,
  },
  {
    key: 'vn',
    title: 'Tiếng Việt',
    flag: vietnamFlag,
  },
];

export const GROSS_PROFIT_MEASURE = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877' as string;

export const DATE_ATTR_IN_MONTHS = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142' as string;

export const DATE_ATTR = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180' as string;

export const PROJECT_ID = 'xms7ga4tf3g3nzucd8380o2bev8oeknp' as string;

export const MONTHS = [
  'good_data.month_january',
  'good_data.month_february',
  'good_data.month_march',
  'good_data.month_april',
  'good_data.month_may',
  'good_data.month_june',
  'good_data.month_july',
  'good_data.month_august',
  'good_data.month_september',
  'good_data.month_october',
  'good_data.month_november',
  'good_data.month_december',
] as Array<string>;

const now = new Date().getUTCFullYear();
export const YEARS = Array(now - (now - 20))
  .fill('')
  .map((val, idx) => now - idx) as Array<number>;
