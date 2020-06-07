/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled/macro";
import React from "react";
import { Conatiner } from "./Conatiner";
import "./pages/Landing/Landing.scss";
import { useTranslation } from "react-i18next";

const StyledFooterText = styled.p`
  text-align: center;
  margin: 20px 0;
`;

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <Conatiner>
        <StyledFooterText>{t("footer-text")}</StyledFooterText>
      </Conatiner>
    </footer>
  );
};
