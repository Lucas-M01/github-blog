import styled from "styled-components";


export const HeaderContainer = styled.header`
    display: flex;
    height: 18.5rem;
    width: 100%;

    align-items: center;
    justify-content: center;


    .logo {
        position: absolute;
        top: 72px;
    }

    @media only screen and (max-width: 768px) {
        display: flex;
        width: 100vw;
        
        .background {
            width: 100%;
            height: 100% 
       }
    }
`