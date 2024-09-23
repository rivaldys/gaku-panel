import { cva } from 'class-variance-authority'
import type { TextareaHTMLAttributes } from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const textareaStyle = cva('w-full border border-gray-200 focus:outline-none focus:bg-red-50/40 focus:border-red-200 px-5 py-3 rounded-lg text-sm text-[#555555] font-light [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-track]:bg-[#dedede]/30 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:bg-[#dedede]/70')

const TextArea = ({ className, ...rest }: TextAreaProps) =>
{
    return (
        <textarea
            className={textareaStyle({ className })}
            spellCheck={false}
            {...rest}
        />
    )
}

export default TextArea