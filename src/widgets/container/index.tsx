"use client";
import React, { FC } from "react";
import { Wrapper } from "./styled";

interface IContainerProps extends React.ComponentProps<typeof Wrapper> {}

const Container: FC<IContainerProps> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Container;
