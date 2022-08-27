import {
  HeaderContainer,
  SearchBox,
  LeftHeaderContainer,
  RightHeaderContainer,
  RightHeaderContainerText,
  LogoContainer,
  Input,
  ClearIcon,
} from "./styles";
import Logo from "./Assets/Logo";
import { useEffect, useRef, useState } from "react";
import CrossIcon from "./Assets/CrossIcon";

const LOGO_WIDTH = "70";
const LOGO_HEIGHT = "70";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const inputField = useRef<HTMLDivElement | null>(null);
  const onSearchHandler = (e: React.ChangeEvent<HTMLDivElement>) => {
    setSearchText(e.target.value);
  };
  const inputOnFocus = () => {};

  const callBack = () => {
    setInputFocus(false);
  };

  const onClearClick = () => {
    setSearchText("");
  };

  useEffect(() => {
    const onClickOutside = (e: any) => {
      if (inputField.current && !inputField.current.contains(e.target)) {
        callBack();
      }
    };
    document.addEventListener("click", onClickOutside, true);

    return () => {
      document.removeEventListener("click", onClickOutside, true);
    };
  }, []);

  return (
    <HeaderContainer>
      <LeftHeaderContainer>
        <LogoContainer>
          <Logo width={LOGO_WIDTH} height={LOGO_HEIGHT} />
        </LogoContainer>
        <SearchBox onClick={() => setInputFocus(true)} isFocused={inputFocus}>
          <Input
            ref={inputField}
            onChange={onSearchHandler}
            value={searchText}
            isFocused={inputFocus}
          />
          {!!searchText.trim().length && (
            <ClearIcon onClick={onClearClick}>
              <CrossIcon />
            </ClearIcon>
          )}
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
