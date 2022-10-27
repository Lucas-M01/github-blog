import styled from "styled-components";

export const LinkContainer = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: ${({theme}) => theme.blue};
    

    &:hover {
        transition: 0.1s;
        border-bottom: 2px solid ${({theme}) => theme.blue}; 
    }
`