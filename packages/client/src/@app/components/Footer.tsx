/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled/macro";
import React from "react";
import { Container } from "@app/components/Container";
import "./pages/Landing/Landing.scss";
import { useTranslation } from "react-i18next";

const StyledFooterText = styled.p`
  text-align: center;
  margin: 20px 0;
`;

const StyledFooter = styled.footer`
  margin-top: auto;
`;

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <Container>
        <StyledFooterText>{t("footer-text")}</StyledFooterText>
      </Container>
    </StyledFooter>
  );
};
