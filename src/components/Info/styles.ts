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
        height: 148px;
    }
` 

export const InfoTop = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
`

interface InfoBottomProps {
    marginTop?: string
}

export const InfoBottom = styled.div<InfoBottomProps>`
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: ${({ marginTop }) => marginTop ?? 1.5}rem;
    color: ${({theme}) => theme["base-subtitle"]};

    span {
        display: flex;
        align-items: center;
        gap: 8px;

        i {
            color: ${({theme}) => theme["base-label"]};
        }
    }


`

export const PostStyleContainer = styled(InfoContainer)`
    flex-direction: column;
`