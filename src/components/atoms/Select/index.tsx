import { cva } from 'class-variance-authority'
import type { OptionHTMLAttributes, SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}
interface SelectOptionProps extends OptionHTMLAttributes<HTMLOptionElement> {}

const selectStyle = cva('w-full border border-gray-200 focus:outline-none focus:bg-red-50/40 focus:border-red-200 px-4 py-3 rounded-lg text-sm text-[#999999] font-light')

export default function Select({ children, className, ...rest }: SelectProps)
{
    return (
        <select
            className={selectStyle({ className })}
            {...rest}
        >
            {children}
        </select>
    )
}

export function Option({ children, className, ...rest }: SelectOptionProps)
{
    return <option className={className} {...rest}>{children}</option>
}