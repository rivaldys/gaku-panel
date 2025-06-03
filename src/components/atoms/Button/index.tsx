import { cva } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: string
    variant?: 'filled' | 'outlined' | 'disabled'
    size?: 'sm' | 'md'
}

const buttonStyle = cva('transition duration-300 flex justify-center items-center hover:cursor-pointer', {
    variants:
    {
        variant:
        {
            filled: 'text-white bg-gradient-to-r from-[#D66D75] to-[#E29587] hover:opacity-80',
            outlined: 'text-[#D66D75] border border-red-200 hover:bg-red-50',
            disabled: 'text-[#999999] bg-[#eaeaea] border border-gray-300/50'
        },
        size:
        {
            sm: 'rounded-[4px] py-2 px-4 text-xs font-normal',
            md: 'rounded-md py-3 px-6 text-sm font-medium'
        }
    },
    defaultVariants:
    {
        variant: 'filled',
        size: 'md'
    }
})

export default function Button({ children, variant, size, className, type = 'button', disabled, ...rest }: ButtonProps)
{
    const resolvedVariant = disabled ? 'disabled' : variant

    return (
        <button
            className={buttonStyle({ variant: resolvedVariant, size, className })}
            type={type}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    )
}