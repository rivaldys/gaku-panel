const Select = ({ children, className, errorMessage, ...rest }) =>
{
    const customStyles = className ? ` ${className}` : ''

    return (
        <>
            <select
                className={`w-full border border-gray-200 focus:outline-none focus:bg-red-50/40 focus:border-red-200 px-4 py-3 rounded-lg text-sm text-[#999999] font-light${customStyles}`}
                {...rest}
            >
                {children}
            </select>
            {errorMessage && <p className="mt-[5px] text-[#E06379] font-light text-xs">{errorMessage}</p>}
        </>
    )
}

const Option = ({ children, ...rest }) =>
{
    return <option {...rest}>{children}</option>
}

Select.Option = Option

export default Select