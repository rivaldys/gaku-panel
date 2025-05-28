import { Breadcrumbs, Title } from 'gaku/components'

export default function Admin()
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
                    <Title text="Admins" className="mb-[5px]" />
                    <Breadcrumbs paths={['Panel', 'Admins']} />
                </div>
            </div>

            <div
                role="region"
                aria-label="Page Content"
                data-role="page-content"
            >
                Admin
            </div>
        </>
    )
}