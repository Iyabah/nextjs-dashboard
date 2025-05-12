// // import postgres from 'postgres';

// // const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// // async function listInvoices() {
// // 	const data = await sql`
// //     SELECT invoices.amount, customers.name
// //     FROM invoices
// //     JOIN customers ON invoices.customer_id = customers.id
// //     WHERE invoices.amount = 666;
// //   `;

// // 	return data;
// // }
// // export async function GET() {
  
// //   try {
// //   	return Response.json(await listInvoices());
// //   } catch (error) {
// //   	return Response.json({ error }, { status: 500 });
// //   }
// // }


// import postgres from 'postgres';

// const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// export async function fetchCustomers() {
// 	const data = await sql`
//      SELECT
//         id,
//         name,
//         email,
//         image_url
//       FROM customers
//       ORDER BY name ASC
//     `;
// 	return data;
// }
// export async function GET() {
  
//   try {
//   	return Response.json(await fetchCustomers());
//   } catch (error) {
//   	return Response.json({ error }, { status: 500 });
//   }
// }


