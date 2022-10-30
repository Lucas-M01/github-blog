import { RegularText } from "../../../../components/Typography";
import { SearchContainer, SearchData } from "./styles";
import * as z from 'zod';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react";

const searchInputSchema = z.object({
    query: z.string(),
  })

  type SearchFormInput = z.infer<typeof searchInputSchema>

interface SearchInputProps {
    postsLength: number;
    getPosts: (query?: string) => Promise<void>;
}

export function SearchInput({ postsLength, getPosts }: SearchInputProps) {
    const {
        register,
        handleSubmit,
      } = useForm<SearchFormInput>({
        resolver: zodResolver(searchInputSchema),
      })

      async function handleSearchIssues(data: SearchFormInput) {
        await getPosts(data.query);
      }

    return(
        <SearchContainer>
            <SearchData>
                <RegularText size="m" color='subtitle'>Publicações</RegularText>
                <span>{postsLength} publicações</span>
            </SearchData>
            <form onSubmit={handleSubmit(handleSearchIssues)}>
                <input 
                    type="text"
                    placeholder="Buscar conteúdo "
                    {...register("query")}
                />
            </form>
        </SearchContainer>
    )
}