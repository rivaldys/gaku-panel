import { Breadcrumbs, Button, Icon, Title } from 'gaku/components'

export default function Catalog()
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
                    <Title text="Catalogs" className="mb-[5px]" />
                    <Breadcrumbs paths={['Panel', 'Catalogs']} />
                </div>

                <Button>
                    <Icon className="mr-[5px]" name="plus" size={18} color="white" />
                    Add New
                </Button>
            </div>

            <div
                role="region"
                aria-label="Page Content"
                data-role="page-content"
            >
                Catalog
            </div>
        </>
    )
}

export { Catalog }