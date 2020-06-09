/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import LogoImage from "@app/components/images/logo.svg";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return <img src={LogoImage} alt="PassMent logotype" className={className} />;
};
