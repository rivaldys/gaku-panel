import { cva } from 'class-variance-authority'
import type { LinkProps } from 'react-router'
import { Link } from 'react-router'

interface TextLinkProps extends LinkProps {
    href?: string
}

const textLinkStyle = cva('text-eselection-green-5 transition duration-300 hover:text-eselection-green-5/70')

export default function TextLink({ children, className, href, to, ...rest }: TextLinkProps)
{
    return (
        <Link
            to={href ? href : to}
            className={textLinkStyle({ className })}
            {...rest}
        >
            {children}
        </Link>
    )
}