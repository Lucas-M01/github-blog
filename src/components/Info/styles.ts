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
        width: 9.25rem;
        height: 100%;
    }

    @media only screen and (max-width: 768px) {
        padding: 1rem 1.3rem;
        
        img {
            margin-right: 1rem;
            height: 50%;
            width: 30%;
        }
    }
` 

export const Perfil = styled.div`
    display: flex;
    flex-direction: column;
    width: 45rem;
    height: 9.25rem;

    @media only screen and (max-width: 768px) {
        font-size: 0.75rem;
        height: 100%;
        
        .title {
            font-size: 1rem;
        }

        p {
            font-size: 0.75rem;
        }
    }
`

export const InfoTop = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    @media only screen and (max-width: 768px) {
        margin-bottom: 0.05rem;

        
        font-size: 0.75rem;


    }
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

    @media only screen and (max-width: 768px) {
        font-size: 0.65rem;
        gap: 1.25rem;
    }

`

export const PostStyleContainer = styled(InfoContainer)`
    flex-direction: column;

    @media only screen and (max-width: 768px) {
        .title {
            font-size: 1rem;
            line-height: 130%;
            margin-bottom: 0.5rem;
        }
    }    
`