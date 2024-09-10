import { ReactNode } from 'react'

interface InputGroupProps {
    children: ReactNode
    className?: string
    classNames?: {
        label: string
    }
    label?: string
    labelFor?: string
}

const InputGroup = ({ className, classNames, children, label, labelFor }: InputGroupProps) =>
{
    const customStylesInput = classNames ? ` ${classNames.label}` : ''

    return (
        <div className={className}>
            {label && (<label className={`block w-fit text-[#555555] text-sm ml-[5px] mb-[5px]${customStylesInput}`} htmlFor={labelFor}>{label}</label>)}
            {children}
        </div>
    )
}

export default InputGroup