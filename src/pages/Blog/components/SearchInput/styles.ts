import styled from "styled-components";

export const SearchContainer = styled.main`
    margin-top: 4.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;


    h6 {
        color: ${({theme}) => theme["base-subtitle"]};
        font-size: 18px;
        font-weight: 700;
    }

    span {
        color: ${({theme})=> theme["base-span"]};
        font-size: 14px;
    }

    input {
        margin-top: 0.75rem;
        margin-bottom: 3rem;
        width: 100%;
        border-radius: 6px;
        border: 1px solid ${({theme}) => theme["base-border"]};
        background: ${({theme})=> theme["base-input"]};
        padding: 0.75rem 1rem;

        &::placeholder {
            color: ${({theme}) => theme["base-label"]};
        }

        &:focus {
            outline: 0;
            box-shadow: 0 0 0 1px ${({ theme }) => theme.blue};
            color: ${({theme}) => theme["base-text"]};
        }
    }
`

export const SearchData = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
`