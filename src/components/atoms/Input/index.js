const Input = ({ className, errorMessage, ...rest }) =>
{
    const customStyles = className ? ` ${className}` : ''

    return (
        <>
            <input
                className={`w-full border border-gray-200 focus:outline-none focus:bg-red-50/40 focus:border-red-200 px-5 py-3 rounded-lg text-sm text-[#555555] font-light${customStyles}`}
                spellCheck={false}
                {...rest}
            />
            {errorMessage && <p className="mt-[5px] text-[#E06379] font-light text-xs">{errorMessage}</p>}
        </>
    )
}

export default Input