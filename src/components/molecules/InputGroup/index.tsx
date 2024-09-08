import { ReactNode } from 'react'

interface InputGroupProps {
    children: ReactNode
    className?: string
    label?: string
    labelFor?: string
}

const InputGroup = ({ className, children, label, labelFor }: InputGroupProps) =>
{
    return (
        <div className={className}>
            {label && (<label className="block w-fit text-[#555555] text-sm ml-[5px] mb-[5px]" htmlFor={labelFor}>{label}</label>)}
            {children}
        </div>
    )
}

export default InputGroup