import { cva } from 'class-variance-authority'
import type { HTMLAttributes } from 'react'

export interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {}

const errorMessageStyle = cva('text-[#E06379] font-light text-xs')

const ErrorMessage = ({ children, className }: ErrorMessageProps) => <p className={errorMessageStyle({ className })}>{children}</p>

export default ErrorMessage