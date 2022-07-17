import {
  HeaderContainer,
  SearchBox,
  LeftHeaderContainer,
  RightHeaderContainer,
  RightHeaderContainerText,
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <LeftHeaderContainer>
        <SearchBox></SearchBox>
      </LeftHeaderContainer>
      <RightHeaderContainer>
        <RightHeaderContainerText>TEXT</RightHeaderContainerText>
        <RightHeaderContainerText>TEXT</RightHeaderContainerText>
        <RightHeaderContainerText>TEXT</RightHeaderContainerText>
      </RightHeaderContainer>
    </HeaderContainer>
  );
};

export default Header;
