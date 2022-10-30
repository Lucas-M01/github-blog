import { useCallback, useEffect, useState } from 'react';
import { Info } from '../../components/Info'
import { api } from '../../lib/axios';
import { Card } from './components/Card'
import { SearchInput } from './components/SearchInput'
import { BlogContainer, BlogMain, PostsSummary } from './styles'

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;


export interface IPost {
    title: string;
    body: string;
    created_at: string;
    number: number;
    html_url: string;
    comments: number;
    user: {
      login: string;
    };
  }

export function Blog() {
    const [posts, setPosts] = useState<IPost[]>([]);

    const getPosts = useCallback(
        async (query: string = "") => {
          try {
            const response = await api.get(
              `/search/issues?q=${query}%20repo:${username}/${repoName}`
            );
    
            setPosts(response.data.items);
          } catch (err) {
                console.log(err);
          }
        },
        [posts]
      );
    
      useEffect(() => {
        getPosts();
      }, []);

    return (
        <div>
            <BlogContainer>
                <Info />

                <BlogMain>
                    <SearchInput postsLength={posts.length} getPosts={getPosts} />
                </BlogMain>

                <PostsSummary>
                    {posts.map((post) => (
                        <Card key={post.number} post={post} />
                    ))}
                </PostsSummary>

            </BlogContainer>
        </div>
    )
}