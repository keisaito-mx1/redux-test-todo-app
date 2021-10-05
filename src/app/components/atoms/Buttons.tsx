import styled from "@emotion/styled";
import React, { ButtonHTMLAttributes } from "react";
import { COLOR, SIZE } from "../../styles/constant";

const StyledButton = styled("button")({
  width: "100%",
  height: "48px",
  padding: `${SIZE.PADDING.ZERO} ${SIZE.PADDING.LARGE}`,
  textAlign: "center",
  fontSize: SIZE.FONT.MEDIUM,
  color: COLOR.FONT.WHITE,
  backgroundColor: COLOR.BACKGROUND.BULE,
  border: 0,
  borderRadius: "4px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

type Contents = {
  label: string;
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & Contents;
const Button: React.FC<Props> = ({ label, onClick, disabled, type }) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
