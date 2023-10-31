import React from "react";

import { Button } from "./styles";

interface Props {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<Props> = ({ children }) => {
  return <Button>{children}</Button>;
};

export default PrimaryButton;
