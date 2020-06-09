/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled/macro";
import React from "react";
import { Container } from "@app/components/Container";
import "@app/components/pages/Landing/Landing.scss";
import { Logo } from "@app/components/Logo";
import { LangSwitcher } from "@app/components/LangSwitcher";

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`;

const StyledLogo = styled(Logo)`
  height: 40px;
  width: auto;
`;

export const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <HeaderContent>
          <StyledLogo />
          <LangSwitcher />
        </HeaderContent>
      </Container>
    </header>
  );
};
