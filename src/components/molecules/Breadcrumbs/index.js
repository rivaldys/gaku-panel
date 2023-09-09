const Breadcrumbs = ({ paths, className }) =>
{
    const customStyles = className ? ` ${className}` : ''

    return (
        <ul className={`flex${customStyles}`}>
            {paths.map((path, index) => {
                if(index === 0) return <li className="font-normal text-sm text-[#D66D75]" key={index}>{path}</li>
                
                return (
                    <li className="font-normal text-sm text-[#999999]" key={index}>
                        <span className="font-normal text-sm mx-[5px]">/</span>
                        {path}
                    </li>
                )
            })}
        </ul>
    )
}

export default Breadcrumbs