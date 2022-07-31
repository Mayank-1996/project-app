import {
  HeaderContainer,
  SearchBox,
  LeftHeaderContainer,
  RightHeaderContainer,
  RightHeaderContainerText,
  LogoContainer,
  Input,
} from "./styles";
import Logo from "./Assets/Logo";
import { useRef, useState } from "react";
import CrossIcon from "./Assets/CrossIcon";

const LOGO_WIDTH = "70";
const LOGO_HEIGHT = "70";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const searchBox = useRef();
  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <HeaderContainer>
      <LeftHeaderContainer>
        <LogoContainer>
          <Logo width={LOGO_WIDTH} height={LOGO_HEIGHT} />
        </LogoContainer>
        <SearchBox
          ref={searchBox}
          onMouseOver={() => {
            searchBox.current.classList.add("focused");
          }}
        >
          <Input onChange={onSearchHandler} value={searchText} />
          <CrossIcon />
        </SearchBox>
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
