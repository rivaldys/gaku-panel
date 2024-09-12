import { cva } from 'class-variance-authority'
import { Icon } from 'gaku/components'
import type { BusProps } from 'gaku/types'
import { Bus } from 'gaku/utils'
import { useEffect, useState } from 'react'

const messageStyle = cva('opacity-0 flex items-center rounded-xl px-[25px] py-[20px] fixed bottom-[35px] right-[35px] z-[1111] drop-shadow-[0_3px_3px_rgba(128,128,128,0.25)] transition duration-300', {
    variants:
    {
        type:
        {
            success: 'border border-[#C8E6C9] bg-[#E8F5E9]',
            warning: 'ring-1 ring-inset ring-yellow-600/20 bg-yellow-50',
            error: 'border border-[#FFCDD2] bg-[#FFEBEE]'
        }
    },
    defaultVariants:
    {
        type: 'success'
    }
})

const FlashMessage = () =>
{
    const [visibility, setVisibility] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState<BusProps['type']>(null)

    const iconStyle = () =>
    {
        if(type === 'warning') return { name: 'exclamation-triangle', color: '#EAB308' }
        if(type === 'error') return { name: 'x-circle', color: '#F44336' }

        return { name: 'check-circle', color: '#43A047' }
    }

    useEffect(() =>
    {
        Bus.addListener('flash-message', ({ message, type, time }: BusProps) =>
        {
            setVisibility(true)
            setMessage(message)
            setType(type)
            setTimeout(() =>
            {
                setVisibility(false)
            }, typeof time === 'number' ? time : 3000)
        })
    }, [])

    return (
        <div className={messageStyle({ type, className: visibility ? ' translate-x-0 opacity-100' : ' translate-x-[415px]' })}>
            <Icon name={iconStyle().name} size={30} color={iconStyle().color} variant="filled" />
            <p className="text-sm text-[#555555] font-light ml-[10px]">{message}</p>
            <span
                className="bg-white p-[7px] rounded-full border border-[#eeeeee] absolute top-[-10px] right-[-10px] transition duration-300 hover:bg-[#f5f5f5] hover:cursor-pointer"
                onClick={() => setVisibility(false)}
            >
                <Icon name="x-mark" size={12} />
            </span>
        </div>
    )
}

export default FlashMessage