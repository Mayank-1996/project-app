import styled from "styled-components";
import { BASE_HIEGHT, BASE_SPACING } from "../../constants/styles.constants";
import { MatteBlack } from "../../constants/styles.colors";

export const HeaderContainer = styled.div`
  background-color: #2b2b2b;
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
`;

export const HeaderLogo = styled.img``;

export const RightHeaderContainerText = styled.p`
  color: white;
  font-size: 30px;
  padding: 10px;
  padding-bottom: 0;
  margin-top: 4px;
  /* margin: 0; */
`;

export const SearchBox = styled.input`
  background-color: ${MatteBlack};
  width: ${73 * BASE_HIEGHT}px;
  height: ${4 * BASE_HIEGHT}px;
  margin-top: ${8 * BASE_SPACING}px;
`;
