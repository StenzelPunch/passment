/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled/macro";
import React, { useState } from "react";
import { Container } from "@app/components/Container";
import { Card, cardMaxWidthCss } from "@app/components/Card";
import { Input } from "@app/components/Input";
import { verticalFlex } from "@app/style/spacing";
import { colors } from "@app/style/colors";
import { TextSizeCss } from "@app/style/text";
import { signup } from "@app/api/signup";

const StyledContainer = styled(Container)`
  height: 100%;
  align-items: center;
`;

const PageHeader = styled.h2`
  color: ${colors.text.colored.primary};
  ${TextSizeCss.l}
`;

export const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>();

  return (
    <StyledContainer css={verticalFlex.l}>
      <PageHeader>Регистрация</PageHeader>
      <Card css={[verticalFlex.s, cardMaxWidthCss]}>
        <Input
          type="email"
          placeholder="E-mail"
          label="E-mail"
          name="email"
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          value={email || ""}
        />
        <Input
          type="text"
          placeholder="Имя Фамилия"
          label="Имя Фамилия"
          name="name"
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
          value={name || ""}
        />
        <Input
          type="password"
          placeholder="Пароль"
          label="Пароль"
          name="password"
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
          value={password || ""}
        />
        <Input
          type="password"
          placeholder="Повторите пароль"
          label="Повторите пароль"
          name="password_confirmation"
          onChange={(e) => {
            setPasswordConfirmation(e.currentTarget.value);
          }}
          value={passwordConfirmation || ""}
        />
        <button
          onClick={() => {
            signup({ email, name, password, passwordConfirmation });
          }}
        >
          Далее
        </button>
      </Card>
    </StyledContainer>
  );
};
