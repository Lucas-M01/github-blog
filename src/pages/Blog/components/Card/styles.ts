import styled from "styled-components";

export const CardContainer = styled.div`
    background: ${({theme}) => theme["base-post"]};
    border-radius: 10px;
    padding: 2rem;
`

export const CardTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`