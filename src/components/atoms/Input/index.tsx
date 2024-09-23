import { cva } from 'class-variance-authority'
import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const inputStyle = cva('w-full border border-gray-200 focus:outline-none focus:bg-red-50/40 focus:border-red-200 px-5 py-3 rounded-lg text-sm text-[#555555] font-light')

const Input = ({ className, ...rest }: InputProps) =>
{
    return (
        <input
            className={inputStyle({ className })}
            spellCheck={false}
            {...rest}
        />
    )
}

export default Input