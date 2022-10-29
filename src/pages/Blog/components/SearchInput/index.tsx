import { RegularText } from "../../../../components/Typography";
import { SearchContainer, SearchData } from "./styles";

export function SearchInput() {
    return(
        <SearchContainer>
            <SearchData>
                <RegularText size="m" color='subtitle' >Publicações</RegularText>
                <span>2 publicações</span>
            </SearchData>
                <input 
                    type="text"
                    placeholder="Buscar conteúdo "
                />
        </SearchContainer>
    )
}