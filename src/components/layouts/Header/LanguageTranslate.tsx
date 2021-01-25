import { Avatar, Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { updateChangeLanguage } from '_i18n/i18Slice';
import { LANGUAGES } from '_constants';

const { SubMenu } = Menu;

const LanguageTranslate = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const languageTranslate = useSelector((state: any) => state.languageTranslate);
  const { language } = languageTranslate;

  const setLocate = (langChange: string) => {
    if (langChange !== language) {
      const action = updateChangeLanguage(langChange);
      dispatch(action);
      i18n.changeLanguage(langChange);
    }
  };

  const currentLanguage = LANGUAGES.find((item) => item.key === language);

  return (
    <Menu key="language" mode="horizontal">
      <SubMenu title={<Avatar size="small" src={currentLanguage?.flag} />}>
        {LANGUAGES.map((lang) => (
          <Menu.Item
            key={lang.key}
            onClick={() => {
              setLocate(lang.key);
            }}
          >
            <Avatar size="small" style={{ marginRight: 8 }} src={lang.flag} />
            {lang.title}
          </Menu.Item>
        ))}
      </SubMenu>
    </Menu>
  );
};

export default LanguageTranslate;
