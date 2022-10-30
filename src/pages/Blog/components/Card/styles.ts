import styled from "styled-components";

export const CardContainer = styled.div`
    background: ${({theme}) => theme["base-post"]};
    border-radius: 10px;
    padding: 2rem;
    height: 16.25rem;

    &:hover {
        outline: 2px solid ${({theme}) => theme["base-label"]};
    }

    div {
        color: ${({theme}) => theme["base-text"]}
    }

    @media only screen and (max-width: 768px) {
        padding: 1.5rem;
    }
`

export const CardTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`
