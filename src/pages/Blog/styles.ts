import styled from "styled-components";

export const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 18rem;
    margin-right: 18rem;
    
    @media only screen and (max-width: 768px) {
        margin-left: 0.75rem;
        margin-right: 0.75rem;
        height: 100%;
    }
` 

export const BlogMain = styled.div`
    width: 100%;
    
    
`

export const PostsSummary = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        &:last-child {
            margin-bottom: 7rem;
        }
    }
`