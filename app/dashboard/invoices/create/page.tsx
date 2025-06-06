 import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata={
    title: 'Create Invoice',
};
 export default async function page() {
    const customers = await fetchCustomers();

    return (
        <>
        <Breadcrumbs
                breadcrumbs={[
                { label: 'Invoices', href: '/dashboard/invoices' },
                {
                    label: 'Create Invoice',
                    href: '/dashboard/invoices/create',
                    active: true,
                },
                ]}
            />
            <Form customers={customers} />
        </>
    )
}
