import { InfoContainer, InfoBottom, InfoTop, PostStyleContainer, Perfil } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faCalendarDay, faComment, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { TitleText } from '../Typography'
import { LinkSite } from "../Link";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";


const username = import.meta.env.VITE_GITHUB_USERNAME;

interface User {
    name: string;
    bio: string;
    followers: number;
    login: string;
    avatar_url: string;
    company?: string;
    html_url: string;
}

export function Info() {
    const [user, setUser] = useState<User>({} as User)

    const getUser = useCallback(async () => {
        try {
            const response = await api.get(`/users/${username}`);
    
            setUser(response.data);
        } catch (err) {
            console.log(err);
        }
      }, [user]);

      useEffect(() => {
        getUser()
      }, [])

        const { avatar_url, bio, name, followers, html_url, login, company } = user

    return(
        <InfoContainer>
            <img src={avatar_url} />
            <Perfil>
                <InfoTop>
                    <TitleText>{name}</TitleText>
                    <LinkSite href={html_url}>GITHUB</LinkSite>
                </InfoTop>
                <p>{bio?.length < 250 ? bio : bio?.substring(0, 250).concat("...")}</p>
                <InfoBottom>
                    <a href={html_url}><i className="fa-brands fa-github" />{login}</a>
                    {company ? <span><FontAwesomeIcon icon={faBuilding} color="#3A536B" />{company}</span>: <></>}

                    <span><FontAwesomeIcon icon={faUserGroup} color="#3A536B" />{followers} seguidores</span>
                </InfoBottom>
            </Perfil>
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
            <InfoBottom>
                <span><i className="fa-brands fa-github" />Lucas-M01</span>
                <span><FontAwesomeIcon icon={faCalendarDay} color="#3A536B" />Há 1 dia</span>
                <span><FontAwesomeIcon icon={faComment} color="#3A536B" />5 comentários</span>
            </InfoBottom>
        </PostStyleContainer>
    )
}