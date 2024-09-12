import { cva } from 'class-variance-authority'
import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'

interface TextLinkProps extends LinkProps {
    href?: string
}

const textLinkStyle = cva('text-eselection-green-5 transition duration-300 hover:text-eselection-green-5/70')

const TextLink = ({ children, className, href, to, ...rest }: TextLinkProps) =>
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

export default TextLink