import { cva } from 'class-variance-authority'
import { Image, Input } from 'gaku/components'
import type { ChangeEvent, FocusEvent, KeyboardEvent } from 'react'
import { useEffect, useRef, useState } from 'react'

const combineLabelKey = (labelKeys: string[], suggestion: any) =>
{
    let result = ''

    Array.isArray(labelKeys) && labelKeys.forEach(labelKey =>
    {
        const currentLabelKey = labelKey.split('.')
        let currentLevel = suggestion

        if(currentLabelKey.length > 1)
        {
            for(let i = 0; i < currentLabelKey.length; i++)
            {
                currentLevel = currentLevel[currentLabelKey[i]]
            }

            result = result !== '' ? `${result} - ${currentLevel}` : currentLevel
        }
        else
        {
            currentLevel = currentLevel[currentLabelKey[0]]

            result = result !== '' ? `${result} - ${currentLevel}` : currentLevel
        }
    })

    return result
}

interface AutoCompleteProps {
    className?: string
    value?: string
    defaultValue?: string
    suggestions: any[]
    valueKey?: string
    labelKey?: string | ((callback: (labelKeys: string[]) => void) => void)
    imageUrl?: string
    onSelect: (value: string) => void
    emptyDataMessage?: string
    onFocus?: () => void
    onBlur?: () => void
    shouldReset?: boolean
    autoCascade?: boolean
}

const containerStyle = cva('relative w-full')
const suggestionsContainerStyle = cva('overflow-auto bg-white border border-gray-200 rounded-md absolute inset-x-0 mt-[5px] z-10 [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-track]:bg-[#dedede]/30 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:bg-[#dedede]/70')
const suggestionsItemStyle = cva('flex text-[#555555] text-sm px-5 py-2 hover:bg-red-50/80 hover:cursor-pointer')

const AutoComplete = ({
    className,
    value,
    defaultValue,
    suggestions,
    valueKey = 'id',
    labelKey,
    imageUrl,
    onSelect,
    emptyDataMessage,
    onFocus,
    onBlur,
    shouldReset,
    autoCascade,
    ...rest
}: AutoCompleteProps) =>
{
    const [filteredSuggestions, setFilteredSuggestions] = useState<any[]>([])
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0)
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [input, setInput] = useState('')
    const [isChoosing, setIsChoosing] = useState(false)
    const [marginBottom, setMarginBottom] = useState(0)

    const getLabelKey = (suggestion: any) =>
    {
        let label = ''

        if(labelKey && typeof labelKey === 'function')
        {
            labelKey((labelKeys) => (label = combineLabelKey(labelKeys, suggestion)))
        }
        else
        {
            label = suggestion[labelKey as string]
        }

        return label
    }

    useEffect(() =>
    {
        if(defaultValue) setInput(defaultValue)
        if(value) setInput(value)
        if(shouldReset) setInput('')
    }, [defaultValue, value, shouldReset])

    const onInputFocus = () =>
    {
        const unLinked = suggestions.filter(suggestion => getLabelKey(suggestion).toLowerCase())
        setFilteredSuggestions(unLinked)
        setActiveSuggestionIndex(0)
        setShowSuggestions(true)
        if (onFocus) onFocus()
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    {
        const userInput = e.target.value
        const unLinked = suggestions.filter(suggestion =>
            getLabelKey(suggestion).toLowerCase().indexOf(userInput.toLowerCase()) > -1
        )

        setInput(userInput)
        setFilteredSuggestions(unLinked)
        setActiveSuggestionIndex(0)
        setShowSuggestions(true)
        if(onFocus) onFocus()
    }

    const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) =>
    {
        if(e.key === 'ArrowUp' || e.key === 'ArrowDown') e.preventDefault()

        if(e.key === 'ArrowUp' && activeSuggestionIndex > 0)
        {
            setActiveSuggestionIndex(activeSuggestionIndex - 1)
        }
        else if(e.key === 'ArrowDown' && activeSuggestionIndex < filteredSuggestions.length - 1)
        {
            setActiveSuggestionIndex(activeSuggestionIndex + 1)
        }
        else if(e.key === 'Enter' && showSuggestions)
        {
            e.preventDefault()
            const selectedSuggestion = filteredSuggestions[activeSuggestionIndex]
            onSuggestionClicked(selectedSuggestion[valueKey], getLabelKey(selectedSuggestion))
        }
    }

    const onInputBlur = (e: FocusEvent<HTMLInputElement>) =>
    {
        if(showSuggestions && !isChoosing)
        {
            onSelect('')
            if(!e.target.value) setInput('')
            setFilteredSuggestions([])
            setActiveSuggestionIndex(0)
            setShowSuggestions(false)
            if(onBlur) onBlur()
            if(autoCascade) setMarginBottom(0)
        }
    }

    const onSuggestionClicked = (currVal: string, currName: string) =>
    {
        onSelect(currVal)
        setInput(currName)
        setFilteredSuggestions([])
        setActiveSuggestionIndex(0)
        setShowSuggestions(false)
        if(onBlur) onBlur()
        if(autoCascade) setMarginBottom(0)
    }

    const Suggestions = () =>
    {
        const suggestionsRef = useRef<HTMLUListElement>(null)
        const [suggestionsStyle, setSuggestionsStyle] = useState('')

        useEffect(() =>
        {
            if(suggestionsRef.current && suggestionsRef.current.offsetHeight)
            {
                if(suggestionsRef.current.offsetHeight > 250)
                {
                    setSuggestionsStyle(' max-h-[250px]')
                    if(autoCascade) setMarginBottom(265)
                }
                else
                {
                    if(autoCascade) setMarginBottom(suggestionsRef.current.offsetHeight + 15)
                }
            }
        }, [])

        return (
            <ul
                ref={suggestionsRef}
                onMouseEnter={() => isChoosing === false && filteredSuggestions.length && setIsChoosing(true)}
                onMouseLeave={() => isChoosing === true && setIsChoosing(false)}
                className={suggestionsContainerStyle({ className: suggestionsStyle })}
            >
                {filteredSuggestions.length ? (
                    filteredSuggestions.map((suggestion, index) =>
                    {
                        const label = getLabelKey(suggestion)
                        let currClassName = ''
                        if(index === activeSuggestionIndex) currClassName = ' bg-red-50/80'

                        return (
                            <li
                                className={suggestionsItemStyle({ className: currClassName })}
                                onClick={() => onSuggestionClicked(suggestion[valueKey], label)}
                                key={index}
                            >
                                {imageUrl && (
                                    <Image
                                        className="w-[35px] h-[35px] rounded-[3px] mr-[10px]"
                                        variant="cover"
                                        src={imageUrl}
                                        alt={label}
                                    />
                                )}
                                {label}
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
        <div className={containerStyle({ className })} style={{ marginBottom }}>
            <Input
                type="text"
                value={input}
                onChange={onInputChange}
                onKeyDown={onInputKeyDown}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
                autoComplete="off"
                {...rest}
            />
            {showSuggestions && <Suggestions />}
        </div>
    )
}

export default AutoComplete