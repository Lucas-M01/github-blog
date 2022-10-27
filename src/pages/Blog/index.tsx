import { Header } from '../../components/Header'
import { Info } from '../../components/Info'
import { RegularText } from '../../components/Typography'
import { Posts } from './components/Posts'
import { BlogContainer, BlogMain } from './styles'

export function Blog() {
    return (
        <div>
            <Header />
            <BlogContainer>
                <Info />
                <BlogMain>
                    <RegularText size="m" color='subtitle' >Publicações</RegularText>
                    <span>2 publicações</span>
                </BlogMain>
                    <input 
                        type="text"
                        placeholder="Buscar conteúdo "
                    />

                    <Posts />
            </BlogContainer>
        </div>
    )
}