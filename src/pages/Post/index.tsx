import { PostInfo } from "../../components/Info";
import { PostContainer } from "./styles";

import { useCallback, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { IPost } from "../Blog";
import { api } from "../../lib/axios";
import { PostContent } from "./components/PostContent";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Post(){
    const [postData, setPostData] = useState<IPost>({} as IPost);

    const { id } = useParams();

    const getPostDetails = useCallback(async () => {
        try {
          const response = await api.get(
            `/repos/${username}/${repoName}/issues/${id}`
          );
    
          setPostData(response.data);
        } catch(err) {
          console.log(err);
        }
      }, [postData]);
    
      useEffect(() => {
        getPostDetails();
      }, []);

    return (
        <PostContainer>
            <PostInfo postData={postData} />
            <PostContent content={postData.body} />
        </PostContainer>
    )
}