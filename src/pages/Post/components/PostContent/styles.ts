import styled from "styled-components";

export const PostContentContainer = styled.div`
    margin: 2.5rem 2rem;
    
    blockquote {
        border-left: 3px solid ${({theme}) => theme["base-subtitle"]};
        padding-left: 1rem;
    }

    h2 {
        margin-bottom: 1rem;
        border-bottom: 1px solid;
    }

    p {
        margin-bottom: 1rem;
    }
    
    a {
        color: ${({theme}) => theme["base-title"]};
    }

    ul {
        margin-bottom: 1rem;
    }

    ul > li {
        margin-left: 1.25rem;
    }
 
`

