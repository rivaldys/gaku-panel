const TextArea = ({ className, errorMessage, ...rest }) =>
{
    const customStyles = className ? ` ${className}` : ''

    return (
        <>
            <textarea
                className={`w-full border border-gray-200 focus:outline-none focus:bg-red-50/40 focus:border-red-200 px-5 py-3 rounded-lg text-sm text-[#555555] font-light [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-track]:bg-[#dedede]/30 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:bg-[#dedede]/70${customStyles}`}
                spellCheck={false}
                {...rest}
            />
            {errorMessage && <p className="mt-[5px] text-[#E06379] font-light text-xs">{errorMessage}</p>}
        </>
    )
}

export default TextArea