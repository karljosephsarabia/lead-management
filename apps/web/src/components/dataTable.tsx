import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import leadType from "@/utils/types/leadType";


export function DataTable({ data }: { data: leadType[]; }) {

  return (
    <Table>
      <TableCaption className="font-bold text-black text-2xl mb-5">Complete Lead Directory</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>No.</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((data, index) => (
          <TableRow key={data._id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.email}</TableCell>
            <TableCell>{data.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}