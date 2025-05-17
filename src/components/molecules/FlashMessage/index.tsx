import { cva } from 'class-variance-authority'
import { Icon, type IconName } from 'gaku/components'
import type { BusProps } from 'gaku/shared/types'
import { Bus } from 'gaku/shared/utils'
import { useEffect, useMemo, useState } from 'react'

const messageStyle = cva(
    'opacity-0 flex items-center rounded-xl px-[25px] py-[20px] fixed bottom-[35px] right-[35px] z-[1111] drop-shadow-[0_3px_3px_rgba(128,128,128,0.25)] transition duration-300',
    {
        variants: {
            type: {
                success: 'border border-[#C8E6C9] bg-[#E8F5E9]',
                warning: 'ring-1 ring-inset ring-yellow-600/20 bg-yellow-50',
                error: 'border border-[#FFCDD2] bg-[#FFEBEE]'
            }
        },
        defaultVariants: {
            type: 'success'
        }
    }
)

const iconMap: Record<NonNullable<BusProps['type']>, { name: IconName; color: string }> = {
    success: { name: 'check-circle', color: '#43A047' },
    warning: { name: 'cog', color: '#EAB308' },
    error: { name: 'x-circle', color: '#F44336' }
}

export default function FlashMessage()
{
    const [visible, setVisible] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState<BusProps['type']>(null)

    useEffect(() => {
        const handler = ({ message, type, time }: BusProps) =>
        {
            setVisible(true)
            setMessage(message)
            setType(type)

            setTimeout(() => {
                setVisible(false)
            }, typeof time === 'number' ? time : 3000)
        }

        Bus.addListener('flash-message', handler)

        return () => {
            Bus.removeListener('flash-message', handler)
        }
    }, [])

    const iconData = useMemo(() =>
    {
        if(!type) return null
        return iconMap[type]
    }, [type])

    if(!type) return null

    return (
        <div
            role="alert"
            aria-live="polite"
            className={messageStyle({
                type,
                className: visible
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-[415px]'
            })}
        >
            {iconData && (
                <Icon
                    name={iconData.name}
                    size={30}
                    color={iconData.color}
                    variant="filled"
                />
            )}
            <p className="text-sm text-[#555555] font-light ml-[10px]">
                {message}
            </p>
            <span
                className="bg-white p-[7px] rounded-full border border-[#eeeeee] absolute top-[-10px] right-[-10px] transition duration-300 hover:bg-[#f5f5f5] hover:cursor-pointer"
                onClick={() => setVisible(false)}
            >
                <Icon name="x" size={12} />
            </span>
        </div>
    )
}