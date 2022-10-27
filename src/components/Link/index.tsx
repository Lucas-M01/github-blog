import { ReactNode } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { LinkContainer } from "./styles";

interface LinkProps {
    children: ReactNode;
    href: string;
}

export function LinkSite({children, href}: LinkProps){
    return(
        <LinkContainer href={href}>
            {children}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </LinkContainer>
    )
}