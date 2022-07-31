import {
  HeaderContainer,
  SearchBox,
  LeftHeaderContainer,
  RightHeaderContainer,
  RightHeaderContainerText,
  LogoContainer,
} from "./styles";
import Logo from "./Assets/Logo";

const Header = () => {
  return (
    <HeaderContainer>
      <LeftHeaderContainer>
        <LogoContainer>
          <Logo width="70" height="70" />
        </LogoContainer>

        <SearchBox />
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
