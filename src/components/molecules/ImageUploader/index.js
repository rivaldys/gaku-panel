import { cva } from 'class-variance-authority'
import ImageUploading from 'react-images-uploading'
import { isValidURL } from '../../../utils'
import { Icon } from '../../atoms'

const ImageUploader = ({ className, defaultValue, value, placeholder, onChange, id, errorMessage }) =>
{
    const wrapperStyle = cva('w-[285px] h-auto aspect-square transition duration-500 flex flex-col justify-center items-center border px-5 py-3 rounded-lg text-sm font-light', {
        variants:
        {
            variant:
            {
                default: 'bg-[#f7f7f7] border-gray-200 [&>svg]:hover:stroke-[#D66D75] [&>svg]:transition [&>svg]:duration-500',
                dragged: 'bg-red-50/40 border-red-200 relative'
            }
        },
        defaultVariants:
        {
            variant: 'default'
        }
    })

    const isDefaultImageExist = isValidURL(defaultValue)

    return (
        <ImageUploading
            value={value}
            onChange={imageList => onChange(imageList)}
            maxNumber={1}
            dataURLKey="data_url"
        >
            {({ imageList, onImageUpload, onImageRemove, isDragging, dragProps }) => (
                <>
                    <div className="w-fit relative">
                        <div
                            className={wrapperStyle({
                                variant: (isDragging && imageList.length < 1) ? 'dragged' : 'default',
                                className: ((isDefaultImageExist && imageList.length < 1) || imageList.length < 1) ? `hover:cursor-pointer hover:bg-red-50/40 hover:border-red-200${' ' + className}` : className
                            })}
                            onClick={((isDefaultImageExist && imageList.length < 1) || imageList.length < 1) ? onImageUpload : undefined}
                            id={id}
                            {...dragProps}
                        >
                            {(isDefaultImageExist && imageList.length < 1) ? (
                                <img src={defaultValue} className="block h-full w-auto object-cover" alt="Current" />
                            ) : (
                                imageList.length < 1 ? (
                                    <>
                                        <Icon name="cloud-upload" size={28} color={isDragging ? '#D66D75' : '#999999' } />
                                        <span className="mt-[10px] text-sm text-[#999999] font-light">{typeof placeholder === 'string' ? placeholder : 'Click or drag image here'}</span>
                                    </>
                                ) : (imageList.map((image, index) => (
                                    <img src={image['data_url']} className="block h-full w-auto object-cover" alt={image.file.name} key={index} />
                                )))
                            )}
                        </div>
                        {imageList.map((image, index) => (
                            <div className="absolute z-10 top-[10px] right-[10px]" key={index}>
                                <button
                                    type="button"
                                    className="p-[8px] border border-red-200 rounded-full text-sm font-light transition duration-300 bg-red-50 hover:bg-red-100 [&>svg]:stroke-[#D66D75]"
                                    onClick={() => onImageRemove(index)}
                                >
                                    <Icon size={18} name="x" />
                                </button>
                            </div>
                        ))}
                    </div>
                    {errorMessage && <p className="mt-[5px] text-[#E06379] font-light text-xs">{errorMessage}</p>}
                </>
            )}
        </ImageUploading>
    )
}

export default ImageUploader