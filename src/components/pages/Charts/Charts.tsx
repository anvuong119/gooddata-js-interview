import React from 'react';
import { useTranslation } from 'react-i18next';

const Charts: React.FC = () => {
  const { t } = useTranslation();
  return <>{t('charts.charts')}</>;
};

export default Charts;
