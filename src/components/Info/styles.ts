import styled, { css } from "styled-components";

export const InfoContainer = styled.section`
    background: ${({theme}) => theme["base-profile"]};
    padding: 2rem 2.3rem;
    display: flex;
    border-radius: 10px;
    margin-top: -5.25rem;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); 

    img {
        border-radius: 8px;
        margin-right: 2rem;
        width: 148px;
        height: 100%;
    }
` 

export const Perfil = styled.div`
    display: flex;
    flex-direction: column;
    width: 45rem;
    height: 9.25rem;
`

export const InfoTop = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
`

export const InfoBottom = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem; 
    flex-wrap: wrap;
    margin-top: auto;

    span, a {
        display: flex;
        
        align-items: center;
        align-content: flex-end;
        gap: 8px;
        text-decoration: none;
        color: ${({theme}) => theme["base-subtitle"]};

        i {
            color: ${({theme}) => theme["base-label"]};
        }
    }


`

export const PostStyleContainer = styled(InfoContainer)`
    flex-direction: column;
`