import { cva } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'
import { useMemo } from 'react'
import Icon from '../Icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: string
    variant?: 'filled' | 'outlined' | 'disabled'
    size?: 'sm' | 'md' | 'sm-icon-only' | 'md-icon-only'
}

const buttonStyle = cva('transition duration-300 flex justify-center items-center', {
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
            md: 'rounded-md py-3 px-6 text-sm font-medium',
            'sm-icon-only': 'rounded-[4px] py-2 px-3',
            'md-icon-only': 'rounded-md py-3 px-4'
        }
    },
    defaultVariants:
    {
        variant: 'filled',
        size: 'md'
    }
})

export default function Button({ children, icon, variant: initialVariant = 'filled', size: initialSize = 'md', className, type = 'button', disabled, ...rest }: ButtonProps)
{
    const { variant, size, iconSize, iconColor } = useMemo(() =>
    {
        let variant = initialVariant
        let size = initialSize
        let iconSize = size === 'sm' ? 14 : 18
        let iconColor = variant === 'outlined' ? '#D66D75' : '#ffffff'

        if(disabled)
        {
            variant = 'disabled'
            iconColor = '#999999'
        }

        if(icon && !children)
        {
            size = size === 'sm' ? 'sm-icon-only' : 'md-icon-only'
        }

        return { variant, size, iconSize, iconColor }
    }, [icon, children, initialVariant, initialSize, disabled])

    return (
        <button
            className={buttonStyle({ variant, size, className })}
            type={type}
            disabled={disabled}
            {...rest}
        >
            {icon && (
                <span className={children ? 'mr-[5px]' : undefined}>
                    <Icon name={icon} size={iconSize} color={iconColor} />
                </span>
            )}
            {children}
        </button>
    )
}