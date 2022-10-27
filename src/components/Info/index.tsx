import { InfoContainer, InfoBottom, InfoTop } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { TitleText } from '../Typography'
import { LinkSite } from "../Link";

export function Info() {
    return(
        <InfoContainer>
            <img src="https://avatars.githubusercontent.com/u/82176047?v=4" />
            <div>
                <InfoTop>
                    <TitleText>Lucas Montenegro</TitleText>
                    <LinkSite href="https://github.com/Lucas-M01">GITHUB</LinkSite>
                </InfoTop>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae corporis delectus earum ipsa numquam praesentium, nesciunt autem aspernatur aperiam ipsum nemo porro hic labore voluptatem impedit architecto deleniti repudiandae modi.</p>
                <InfoBottom>
                    <span><i className="fa-brands fa-github" />Lucas-M01</span>
                    <span><FontAwesomeIcon icon={faUserGroup} color="#3A536B" />  9 seguidores</span>
                </InfoBottom>
            </div>
        </InfoContainer>
    )
}