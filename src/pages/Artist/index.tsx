import { Breadcrumbs, Title } from 'gaku/components'

export default function Artist()
{
    return (
        <>
            <div
                role="region"
                aria-label="Page Header"
                className="flex justify-between items-center mb-[30px]"
                data-role="page-header"
            >
                <div>
                    <Title text="Artists" className="mb-[5px]" />
                    <Breadcrumbs paths={['Panel', 'Artists']} />
                </div>
            </div>

            <div
                role="region"
                aria-label="Page Content"
                data-role="page-content"
            >
                Artist
            </div>
        </>
    )
}

export { Artist }