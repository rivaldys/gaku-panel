const Title = ({ text, className }) =>
{
    const customStyles = className ? ` ${className}` : ''
    return <h1 className={`text-[#555555] text-[28px] leading-[35px] font-semibold${customStyles}`}>{text}</h1>
}

export default Title