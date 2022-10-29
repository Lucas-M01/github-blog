import { RegularText, TitleText } from "../../../../components/Typography";
import { CardContainer, CardTop } from "./styles";
import { Link } from 'react-router-dom';

 
export function Card(){
    return (
        <Link to="/post">
            <CardContainer>
                <CardTop>
                    <TitleText size="s" width="17rem">JavaScript data types and data structures</TitleText>
                    <RegularText size="s" color="span" width="4rem" >Há 1 dia</RegularText>
                </CardTop>
                    <RegularText>
                        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                    </RegularText>
            </CardContainer>
        </Link>
    )
}