import { RegularText, TitleText } from "../../../../components/Typography";
import { CardContainer, CardTop } from "./styles";
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import { IPost } from "../..";
import { relativeDateFormatter } from "../../../../utils/formatter";
import { format } from 'date-fns'

export interface PostProps {
    post: IPost;
}
 
export function Card({ post }: PostProps){
    const date = format(new Date(post.created_at), 'MM/dd/yyyy');

    const formattedDate = relativeDateFormatter(date)


    return (
        <Link to={`/post/${post.number}`}>
            <CardContainer>
                <CardTop>
                    <TitleText size="s" width="17rem">{post.title}</TitleText>
                    <RegularText size="s" color="span" width="4rem" >{formattedDate}</RegularText>
                </CardTop>
                    <div>
                        <ReactMarkdown>
                            {post.body && post.body.length > 500 ? post.body.substring(0, 140).concat("...") : post.body}
                        </ReactMarkdown>
                    </div>
            </CardContainer>
        </Link>
    )
}