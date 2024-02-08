import { HeaderContainer } from "./styles";
import githubBlogLogo from "../../assets/Logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={githubBlogLogo} alt="" />
    </HeaderContainer>
  )
}