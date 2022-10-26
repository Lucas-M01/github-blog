import styled from "styled-components";

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
    justify-content: space-between;
    color: ${({theme}) => theme.blue};
    margin-bottom: 0.5rem;
    

    .title {
        color: ${({theme}) => theme["base-title"]};
        font-size: 1.5rem;
        font-weight: 700;
    }

    .rede {
        display: flex;
        gap: 8px;
        align-items: center;
    }
`

export const InfoBottom = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 1.5rem;
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