import { Breadcrumbs, Title } from 'gaku/components'

export default function Song()
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
                    <Title text="Songs" className="mb-[5px]" />
                    <Breadcrumbs paths={['Panel', 'Songs']} />
                </div>
            </div>

            <div
                role="region"
                aria-label="Page Content"
                data-role="page-content"
            >
                Song
            </div>
        </>
    )
}

export { Song }