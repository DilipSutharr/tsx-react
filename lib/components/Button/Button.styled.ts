import styled from "styled-components";

interface ButtonProps {
  primary: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  background: ${(props) => (!props.primary ? "white" : "black")};
  border-radius: 8px;
  height: 45px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  border: ${(props) => (!props.primary ? "1px solid black" : "none")};
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (!props.primary ? "black" : "white")};

  &:disabled {
    background: black;
    border: none;
    color: white;
  }
`;
