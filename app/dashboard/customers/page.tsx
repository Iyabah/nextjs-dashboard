
import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";
export default function page() {
    return (
        <>
        <p> Customer Page</p>
        <CustomersTable customers={[]} />
        </>
    )
};

export const metadata: Metadata = {
    title: 'Customers',
}