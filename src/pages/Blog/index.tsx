import { useCallback, useState } from 'react';
import { Info } from '../../components/Info'
import { api } from '../../lib/axios';
import { Card } from './components/Card'
import { SearchInput } from './components/SearchInput'
import { BlogContainer, BlogMain, PostsSummary } from './styles'

const username = import.meta.env.GITHUB_USERNAME;
const repoName = import.meta.env.GITHUB_REPONAME;



export function Blog() {
    
    return (
        <div>
            <BlogContainer>
                <Info />

                <BlogMain>
                    <SearchInput />
                </BlogMain>

                <PostsSummary>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </PostsSummary>

            </BlogContainer>
        </div>
    )
}