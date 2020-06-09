/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled/macro";
import React from "react";
import { TextSizeCss } from "@passment/client/src/style/text";
import { colors } from "@passment/client/src/style/colors";
import { verticalFlex } from "@passment/client/src/style/spacing";

const StyledInput = styled.input`
  background: #ffffff;
  box-shadow: inset 0px 2px 5px rgba(0, 174, 255, 0.5);
  border-radius: 20px;
  width: 100%;
  border: none;
  outline: none;
  ${TextSizeCss.m};
  padding: 12px 20px;
  box-sizing: border-box;
  color: ${colors.text.colored.primary};
  &::placeholder {
    color: ${colors.text.colored.low};
  }
`;

const InputLabel = styled.label`
  ${TextSizeCss.m};
  color: ${colors.text.colored.primary};
`;

const InputConatiner = styled.div`
  ${verticalFlex.s};
  max-width: 300px;
  width: 100%;
`;

interface InputProps {
  name: string;
  label?: string;
}

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & InputProps> = ({
  children,
  name,
  label,
  ...rest
}) => {
  return (
    <InputConatiner>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <StyledInput name={name} {...rest} />
    </InputConatiner>
  );
};
