import { cva } from 'class-variance-authority'
import type { HTMLAttributes } from 'react'

interface BreadcrumbsProps extends HTMLAttributes<HTMLUListElement> {
    paths: string[]
}

const breadcrumbsStyle = cva('flex flex-col sm:flex-row')

const Breadcrumbs = ({ className, paths }: BreadcrumbsProps) =>
{
    return (
        <ul className={breadcrumbsStyle({ className })}>
            {paths &&
                paths.map((path, index) => {
                    if(index === 0) return <li className="font-normal text-sm text-[#D66D75]" key={index}>{path}</li>
                    
                    return (
                        <li className="font-normal text-xs sm:text-sm text-[#999999]" key={index}>
                            <span className="font-normal mx-[5px]">{window.innerWidth >= 640 ? '/' : '|___'}</span>
                            {path}
                        </li>
                    )
            })}
        </ul>
    )
}

export default Breadcrumbs