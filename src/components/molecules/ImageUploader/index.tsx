import { cva } from 'class-variance-authority'
import { ErrorMessage, Icon } from 'gaku/components'
import type { ImageListType } from 'react-images-uploading'
import ImageUploading from 'react-images-uploading'

interface ImageUploaderProps {
    className?: string
    defaultValue?: string
    value?: ImageListType
    placeholder?: string
    onChange?: (image: ImageListType) => void
    id?: string
    displayType?: string
    width?: number | string
    errorMessage?: string
    flaggingIcon?: string
}

const ImageUploader = ({ className, defaultValue, value, placeholder, onChange, id, displayType, width, errorMessage, flaggingIcon }: ImageUploaderProps) =>
{
    const customStyles = className ? ` ${className}` : ''
    const currentDisplayType = displayType && typeof displayType === 'string' 
        ? displayType === 'rectangle' ? 'aspect-video' : 'aspect-square'
        : 'aspect-square'

    const wrapperStyle = cva(`w-full md:w-[285px] h-auto ${currentDisplayType} transition duration-500 flex flex-col justify-center items-center border px-5 py-3 rounded-lg text-sm font-light`, {
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

    const isDefaultImageExist = defaultValue ? true : false

    return (
        <ImageUploading
            value={value ? value : []}
            onChange={image => onChange && onChange(image)}
            maxNumber={1}
            dataURLKey="data_url"
        >
            {({ imageList, onImageUpload, onImageRemove, isDragging, dragProps }) => (
                <>
                    <div className="md:w-fit relative">
                        <div
                            className={wrapperStyle({
                                variant: (isDragging && imageList.length < 1) ? 'dragged' : 'default',
                                className: ((isDefaultImageExist && imageList.length < 1) || imageList.length < 1) ? `hover:cursor-pointer hover:bg-red-50/40 hover:border-red-200${customStyles}` : customStyles
                            })}
                            style={width ? { width } : undefined}
                            onClick={((isDefaultImageExist && imageList.length < 1) || imageList.length < 1) ? onImageUpload : undefined}
                            id={id}
                            {...dragProps}
                        >
                            {(isDefaultImageExist && imageList.length < 1) ? (
                                <img src={defaultValue} className="block h-full w-auto object-cover" alt="Current" />
                            ) : (
                                imageList.length < 1 ? (
                                    <>
                                        <Icon name="cloud-arrow-up" size={28} color={isDragging ? '#D66D75' : '#999999' } />
                                        <span className="mt-[10px] text-sm text-[#999999] font-light text-center">{typeof placeholder === 'string' ? placeholder : 'Click or drag image here'}</span>
                                    </>
                                ) : (imageList.map((image, index) => (
                                    <img src={image['data_url']} className="block h-full w-auto object-cover" alt={image && image.file ? image.file.name : 'image-uploader'} key={index} />
                                )))
                            )}
                        </div>

                        {imageList.map((_, index) => (
                            <div className="absolute z-10 top-[10px] right-[18px]" key={index}>
                                <button
                                    type="button"
                                    className="p-[5px] border border-red-200 rounded-full text-sm font-light transition duration-300 bg-red-50 hover:bg-red-100 [&>svg]:stroke-[#D66D75]"
                                    onClick={() => onImageRemove(index)}
                                >
                                    <Icon size={14} name="x-mark" />
                                </button>
                            </div>
                        ))}

                        {flaggingIcon && (
                            <div className="absolute z-10 bottom-[10px] right-[18px] flex items-center">
                                {flaggingIcon}
                            </div>
                        )}
                    </div>
                    {errorMessage && <ErrorMessage className="mt-[5px]">{errorMessage}</ErrorMessage>}
                </>
            )}
        </ImageUploading>
    )
}

export default ImageUploader