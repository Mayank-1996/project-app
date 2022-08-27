import styled from "styled-components";
import {
  BASE_HIEGHT,
  BASE_WIDTH,
  BASE_FONT_SIZE,
} from "../../constants/styles.constants";
import { MatteBlack, surfaceColor } from "../../constants/styles.colors";

export const HeaderContainer = styled.div`
  background-color: ${MatteBlack};
  width: 100vw;
  height: ${9 * BASE_HIEGHT}px;
  justify-content: space-between;
  display: flex;
`;

export const LeftHeaderContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  padding: ${1.5 * BASE_HIEGHT}px ${1.5 * BASE_WIDTH}px;
`;

export const RightHeaderContainer = styled.div`
  width: 60%;
  display: flex;
  padding: ${1.5 * BASE_HIEGHT}px ${1.5 * BASE_WIDTH}px;
  & * {
    width: 20%;
  }
`;

export const LogoContainer = styled.div`
  position: relative;
  left: ${1.5 * BASE_WIDTH}px;
  bottom: ${0.5 * BASE_WIDTH}px;
  background: transparent;
`;

export const RightHeaderContainerText = styled.p`
  text-align: center;
  color: white;
  font-size: ${1.25 * BASE_FONT_SIZE}px;
  padding: ${BASE_HIEGHT}px 0;
  margin: 0;
`;
export const SearchBox = styled.div<{ isFocused: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: #dcdedc;
  margin: 0;
  width: 70%;
  height: fit-content;
  ${({ isFocused }) => {
    if (isFocused) return ` background-color: ${surfaceColor};`;
  }}
`;

export const Input = styled.input<{ isFocused: boolean }>`
  background-color: #dcdedc;
  width: 80%;
  height: ${5 * BASE_HIEGHT}px;
  outline: none;
  border: 0;
  font-size: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  ${({ isFocused }) => {
    if (isFocused) return ` background-color: ${surfaceColor};`;
  }}
`;
export const ClearIcon = styled.span`
  position: relative;
  height: 20px;
  right: 20px;
  top: 10px;
  padding: 2px;
  cursor: pointer;
  &:hover {
    background-color: #dcdedc;
    border-radius: 4px;
  }
`;
