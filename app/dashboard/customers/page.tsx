import { Suspense } from 'react';
import CustomersTable from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import CustomersTableSkeleton from '@/app/ui/skeletons';
import Search from '@/app/ui/search';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title:'Customers'
}

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <Suspense fallback={<CustomersTableSkeleton />}>
        <Search placeholder="Search customers..." />
        {/* TODO: Replace the empty array with actual customers data */}
        <CustomersTable customers={[]} />
      </Suspense>
    </div>
  );
}