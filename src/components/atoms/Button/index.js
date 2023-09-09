import { cva } from 'class-variance-authority'
import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon'

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

const Button = ({ children, icon, variant, size, className, type, href, ...rest }) =>
{
    // Basic configuration for icon
    let iconSize = 18
    let iconColor = '#ffffff'

    if(size === 'sm') iconSize = 14
    if(variant === 'outlined') iconColor = '#D66D75'

    // Condition when button is disabled
    if(rest.disabled)
    {
        variant = 'disabled'
        iconColor = '#999999'
    }

    // Condition when icon only is showed
    if(icon && !children)
    {
        if(size === 'sm') size = 'sm-icon-only'
        else size = 'md-icon-only'
    }

    if(type === 'button-link')
    {
        return (
            <Link
                to={href}
                className={buttonStyle({ variant, size, className })}
                {...rest}
            >
                {icon ? (
                    <>
                        <span className={children && 'mr-[5px]'}>
                            <Icon
                                name={icon}
                                size={iconSize}
                                color={iconColor}
                            />
                        </span>
                        {children && children}
                    </>
                ) : (
                    children && children
                )}
            </Link>
        )
    }

    return (
        <button
            className={buttonStyle({ variant, size, className })}
            type={type}
            {...rest}
        >
            {icon ? (
                <>
                    <span className={children && 'mr-[5px]'}>
                        <Icon
                            name={icon}
                            size={iconSize}
                            color={iconColor}
                        />
                    </span>
                    {children && children}
                </>
            ) : (
                children && children
            )}
        </button>
    )
}

export default Button