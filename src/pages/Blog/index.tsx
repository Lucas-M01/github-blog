import { Header } from '../../components/Header'
import { Info } from '../../components/Info'
import { BlogContainer, BlogMain } from './styles'

export function Blog() {
    return (
        <div>
            <Header />
            <BlogContainer>
                <Info />
                <BlogMain>
                    <h6>Publicações</h6>
                    <span>2 publicações</span>
                </BlogMain>
                    <input 
                        type="text"
                        placeholder="Buscar conteúdo "
                    />
            </BlogContainer>
        </div>
    )
}