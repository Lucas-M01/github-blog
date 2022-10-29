import { Info } from '../../components/Info'
import { Card } from './components/Card'
import { SearchInput } from './components/SearchInput'
import { BlogContainer, BlogMain, PostsSummary } from './styles'

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