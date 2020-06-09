/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled/macro";
import css from "@emotion/css/macro";
import React from "react";
import { useTranslation } from "react-i18next";
import { Langs } from "@app/languages/i18n";

const getLangText = (lang: Langs) => {
  switch (lang) {
    case Langs.EN:
      return "EN";
    case Langs.UA:
      return "UA";
    case Langs.RU:
      return "RU";
  }
};

const LangList = styled.ul`
  display: flex;
`;

const selectedLangItem = css`
  color: #ffffff;
  background: linear-gradient(146.3deg, #00aeff 14.65%, #0bced1 85.35%);
`;

const LangItemContent = styled.li<{ selected: boolean }>`
  margin-left: 5px;
  padding: 5px 8px 4px;
  font-size: 10px;
  line-height: 10px;
  color: #0763a6;
  font-weight: bold;
  border-radius: 30px;
  background: linear-gradient(146.3deg, #ffffff 14.65%, #ffffff 85.35%);
  cursor: pointer;

  & :hover {
    ${selectedLangItem};
  }

  ${({ selected }) => selected && selectedLangItem};
`;

const LangItem: React.FC<{ lang: Langs }> = ({ lang }) => {
  const { i18n } = useTranslation();

  return (
    <LangItemContent selected={i18n.language === lang} onClick={() => i18n.changeLanguage(lang)}>
      {getLangText(lang)}
    </LangItemContent>
  );
};

export const LangSwitcher: React.FC = () => (
  <LangList>
    <LangItem lang={Langs.UA} />
    <LangItem lang={Langs.RU} />
  </LangList>
);
