import { InfoContainer, InfoBottom, InfoTop } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/fontawesome-svg-core'
import logoGithub from '../../assets/logoGithub.svg'

export function Info() {
    return(
        <InfoContainer>
            <img src="https://avatars.githubusercontent.com/u/82176047?v=4" />
            <div>
                <InfoTop>
                    <span className="title">Lucas Montenegro</span>
                    <span className="rede">GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </span>
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