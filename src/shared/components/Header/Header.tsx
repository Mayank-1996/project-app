import {
  HeaderContainer,
  SearchBox,
  LeftHeaderContainer,
  RightHeaderContainer,
  RightHeaderContainerText,
  HeaderLogo,
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <LeftHeaderContainer>
        <HeaderLogo src="../Header/Assets/Untitled-1.svg"></HeaderLogo>
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
