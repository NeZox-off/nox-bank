import React, { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {}

export const Container = ({ children }: ContainerProps) => {
  return <div className="container w-full mx-auto px-4">{children}</div>;
};
