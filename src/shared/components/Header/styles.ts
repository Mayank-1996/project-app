import styled from "styled-components";
import { BASE_HIEGHT, BASE_SPACING } from "../../constants/styles.constants";
import { MatteBlack, MatteWhite } from "../../constants/styles.colors";

export const HeaderContainer = styled.div`
  background-color: ${MatteBlack};
  width: 100vw;
  height: ${9 * BASE_HIEGHT}px;
  justify-content: space-between;
  display: flex;
`;

export const LeftHeaderContainer = styled.div`
  display: flex;
`;

export const RightHeaderContainer = styled.div`
  display: flex;
  padding-right: 100px;
`;

export const HeaderLogo = styled.img`
  width: ${30 * BASE_HIEGHT}px;
  height: ${6.25 * BASE_HIEGHT}px;
  padding: 10px;
  margin-right: ${50 * BASE_SPACING}px;
`;

export const RightHeaderContainerText = styled.p`
  text-align: center;
  color: white;
  font-size: 30px;
  padding: 10px;
  padding-right: 40px;
  padding-bottom: 0;
  margin-top: 4px;
  /* margin: 0; */
`;

export const SearchBox = styled.input`
  background-color: ${MatteWhite};
  width: ${73 * BASE_HIEGHT}px;
  height: ${4 * BASE_HIEGHT}px;
  margin-top: ${8 * BASE_SPACING}px;
`;
