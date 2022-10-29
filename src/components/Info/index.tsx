import { InfoContainer, InfoBottom, InfoTop, PostStyleContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'
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

export function PostInfo() {
    return(
        <PostStyleContainer>
            <InfoTop>
                <LinkSite blank={true} href="/">VOLTAR</LinkSite>
                <LinkSite blank={false} href="/">VER NO GITHUB</LinkSite>
            </InfoTop>
            <TitleText>JavaScript data types and data structures</TitleText>
            <InfoBottom marginTop="0.5">
                <span><i className="fa-brands fa-github" />Lucas-M01</span>
                <span><FontAwesomeIcon icon={faCalendarDay} color="#3A536B" />Há 1 dia</span>
                <span><FontAwesomeIcon icon={faComment} color="#3A536B" />5 comentários</span>
            </InfoBottom>
        </PostStyleContainer>
    )
}