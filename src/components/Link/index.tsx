import { ReactNode } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { LinkContainer } from "./styles";
import { Link } from 'react-router-dom'

interface LinksProps {
    blank?: boolean;
    children: ReactNode;
    href: string;
}

export function LinkSite({ blank, children, href }: LinksProps){
    const redirect = blank as boolean;
    return(
        <LinkContainer>
            {redirect == true ? (
                <Link to={href}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    {children}
                </Link>
                ) : (
                <a href={href} >
                    {children}
                    {<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
                </a>
            )}
        </LinkContainer>
    )
}