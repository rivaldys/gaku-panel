import { useEffect, useState } from 'react'
import Bus from '../../../utils/Bus'
import { Icon } from '../../atoms'

const FlashMessage = () =>
{
    const [visibility, setVisibility] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

    useEffect(() =>
    {
        Bus.addListener('flash-message', ({ message, type }) =>
        {
            setVisibility(true)
            setMessage(message)
            setType(type)
            setTimeout(() =>
            {
                setVisibility(false)
            }, 3000)
        })
    }, [])

    return (
        <div className={`opacity-0 flex items-center border ${type === 'error' ? 'border-[#FFCDD2] bg-[#FFEBEE]' : 'border-[#C8E6C9] bg-[#E8F5E9]'} rounded-xl px-[25px] py-[20px] fixed bottom-[35px] right-[35px] z-[1111] drop-shadow-[0_3px_3px_rgba(128,128,128,0.25)] transition duration-300${visibility ? ' translate-x-0 opacity-100' : ' translate-x-[415px]'}`}>
            <Icon name={type === 'error' ? 'x-circle' : 'check-circle'} size={35} color={type === 'error' ? '#F44336' : '#43A047'} variant="filled" />
            <p className="text-sm text-[#555555] font-light ml-[10px]">{message}</p>
            <span
                className="bg-white p-[7px] rounded-full border border-[#eeeeee] absolute top-[-10px] right-[-10px] transition duration-300 hover:bg-[#f5f5f5] hover:cursor-pointer"
                onClick={() => setVisibility(false)}
            >
                <Icon name="x" size={12} />
            </span>
        </div>
    )
}

export default FlashMessage