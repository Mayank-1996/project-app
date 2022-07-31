import styled from "styled-components";
import {
  BASE_HIEGHT,
  BASE_WIDTH,
  BASE_FONT_SIZE,
} from "../../constants/styles.constants";
import { MatteBlack, MatteWhite } from "../../constants/styles.colors";

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
export const SearchBox = styled.div`
  background-color: ${MatteWhite};
  margin: 0;
  width: 70%;
  background-color: white;
  font-size: ${1.5 * BASE_FONT_SIZE}px;
  height: ${5 * BASE_HIEGHT}px;
  &.focused {
    border-bottom: 2px solid #0066cc;
    transition: border-bottom border 3s smooth;
  }
`;

export const Input = styled.input`
  width: 90%;
  outline: none;
  border: 0;
`;
