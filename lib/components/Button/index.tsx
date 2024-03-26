import React from "react";
import { StyledButton } from "./Button.styled";

interface ButtonProps {
  primary?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  primary = true,
  disabled = false,
  children,
  ...props
}) => {
  return (
    <StyledButton primary={primary} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
