import styled from "styled-components";

export const LinkContainer = styled.span`
    display: flex;
    align-items: center;
    height: 2rem;
    max-height: 10rem;

    a {
        align-items: center;
        display: flex;
        gap: 8px;
        color: ${({theme}) => theme.blue};
        text-decoration: none;


        &:hover {
            transition: 0.1s;
            border-bottom: 2px solid ${({theme}) => theme.blue}; 
        }
    }
`
