import CustomersTable from "@/app/ui/customers/table";
export default function page() {
    return (
        <>
        <p> Customer Page</p>
        <CustomersTable customers={[]} />
        </>
    )
}