import React, { useState } from 'react'
import { Image, Input } from '../../atoms'

const AutoComplete = ({ className, suggestions, suggestionObjectKeyId, suggestionObjectKey, imageKey, onSelect, emptyDataMessage, ...rest }) =>
{
    const [filteredSuggestions, setFilteredSuggestions] = useState([])
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0)
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [input, setInput] = useState('')
    const [isChoosing, setIsChoosing] = useState(false)

    suggestionObjectKeyId = typeof suggestionObjectKeyId === 'string' ? suggestionObjectKeyId : 'id'
    const customStyles = className ? ` ${className}` : ''

    const onInputChange = e =>
    {
        const userInput = e.target.value
        const unLinked = suggestions.filter(suggestion => suggestion[suggestionObjectKey].toLowerCase().indexOf(userInput.toLowerCase()) > -1)

        setInput(e.target.value)
        setFilteredSuggestions(unLinked)
        setActiveSuggestionIndex(0)
        setShowSuggestions(true)
    }

    const onInputKeyDown = e =>
    {
        if(e.key === 'ArrowUp' || e.key === 'ArrowDown') e.preventDefault()

        if(e.key === 'ArrowUp' && activeSuggestionIndex > 0)
        {
            setActiveSuggestionIndex(activeSuggestionIndex-1)
        }
        else if(e.key === 'ArrowDown' && activeSuggestionIndex < (filteredSuggestions.length-1))
        {
            setActiveSuggestionIndex(activeSuggestionIndex+1)
        }
        else if(e.key === 'Enter' && showSuggestions)
        {
            e.preventDefault()
            const selectedSuggestion = filteredSuggestions.filter((suggestion, index) => index === activeSuggestionIndex)
            onSuggestionClicked(selectedSuggestion[0][suggestionObjectKeyId], selectedSuggestion[0][suggestionObjectKey])
        }
    }

    const onInputBlur = () =>
    {
        if(showSuggestions && isChoosing === false)
        {
            onSelect('')
            setInput('')
            setFilteredSuggestions([])
            setActiveSuggestionIndex(0)
            setShowSuggestions(false)
        }
    }

    const onSuggestionClicked = (currVal, currName) =>
    {
        onSelect(currVal)
        setInput(currName)
        setFilteredSuggestions([])
        setActiveSuggestionIndex(0)
        setShowSuggestions(false)
    }

    const Suggestions = () =>
    {
        return (
            <ul
                onMouseEnter={() => (isChoosing === false && filteredSuggestions.length) && setIsChoosing(true)}
                onMouseLeave={() => isChoosing === true && setIsChoosing(false)}
                className="max-h-[250px] overflow-auto bg-white border border-gray-200 rounded-md absolute inset-x-0 mt-[5px] z-10 [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-track]:bg-[#dedede]/30 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:bg-[#dedede]/70"
            >
                {filteredSuggestions.length ? (
                    filteredSuggestions.map((suggestion, index) =>
                    {
                        let currClassName = ''
                        if(index === activeSuggestionIndex) currClassName = " bg-red-50/80"
                        
                        return (
                            <li
                                className={`flex text-[#555555] text-sm px-5 py-2 hover:bg-red-50/80 hover:cursor-pointer${currClassName}`}
                                onClick={() => onSuggestionClicked(suggestion[suggestionObjectKeyId], suggestion[suggestionObjectKey])}
                                key={index}
                            >
                                {imageKey && (
                                    <Image
                                        containerClassName="w-[35px] h-[35px] rounded-[3px] mr-[10px]"
                                        src={`${process.env.REACT_APP_IMAGE_URL}/${suggestion[imageKey]}`}
                                        alt={suggestion[suggestionObjectKey]}
                                    />
                                )}
                                {suggestion[suggestionObjectKey]}
                            </li>
                        )
                    })
                ) : (
                    <li className="text-[#999999] text-sm italic px-5 py-2">
                        {typeof emptyDataMessage === 'string' ? emptyDataMessage : 'No data.'}
                    </li>
                )}
            </ul>
        )
    }

    return (
        <div className={`relative${customStyles}`}>
            <Input
                type="text"
                value={input}
                onChange={onInputChange}
                onKeyDown={onInputKeyDown}
                onBlur={onInputBlur}
                {...rest}
            />
            {showSuggestions && input && (<Suggestions />)}
        </div>
    )
}

export default AutoComplete