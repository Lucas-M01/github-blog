import logoImg from  "../../assets/logo.svg"
import { HeaderContainer } from "./styles"
import headerBg from '../../assets/headerBg.png'


export function Header() {
    return(
        <HeaderContainer>
            <img src={headerBg} width={1600} />
            <img src={logoImg} className="logo" />
        </HeaderContainer>
    )
}