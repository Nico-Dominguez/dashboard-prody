import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    id: "01",
    deals: "Acme",
    totalAmount: "$250.00",
    contact: "Tyra Dhillon",
    email: "johndoe@gmail.com",
    source: "Social Networks",
  },
  {
    id: "02",
    deals: "Academic Project",
    totalAmount: "$150.00",
    contact: "Brittni Lando",
    email: "johndoe@gmail.com",
    source: "Outreach",
  },
  {
    id: "03",
    deals: "Aimbus",
    totalAmount: "$350.00",
    contact: "Kevin Chen",
    email: "johndoe@gmail.com",
    source: "Referrals",
  },
  {
    id: "04",
    deals: "Big Bang Production",
    totalAmount: "$450.00",
    contact: "Josh Ryan",
    email: "johndoe@gmail.com",
    source: "Word-of-mouth",
  },
  {
    id: "05",
    deals: "Book Launch",
    totalAmount: "$550.00",
    contact: "Chieko Chute",
    email: "johndoe@gmail.com",
    source: "Outreach",
  },
  {
    id: "06",
    deals: "Christo Inc",
    totalAmount: "$200.00",
    contact: "Ryan Reynolds",
    email: "johndoe@gmail.com",
    source: "Referrals",
  },
  {
    id: "07",
    deals: "Crimeworkers",
    totalAmount: "$300.00",
    contact: "Will Smith",
    email: "johndoe@gmail.com",
    source: "Social Networks",
  },
];

export function AppTable() {
  const sourceStyles = {
    "Social Networks": "bg-yellow-100 border-yellow-300 text-yellow-600",
    Outreach: "bg-blue-100 border-blue-300 text-blue-600",
    Referrals: "bg-green-100 border-green-300 text-green-600",
  } as const;

  const getSourceStyles = (source: string) => {
    return sourceStyles[source] || "bg-gray-100 border-gray-300 text-gray-600";
  };

  return (
    <Table>
      <TableHeader className="bg-gray-100 rounded-full border">
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Deals</TableHead>
          <TableHead>Contact</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="">Value</TableHead>
          <TableHead className="text-right">Source</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium py-4">{invoice.id}</TableCell>
            <TableCell>{invoice.deals}</TableCell>
            <TableCell className="">
              <span className="border rounded-full py-1 px-2 font-bold">
                {invoice.contact}
              </span>
            </TableCell>
            <TableCell>{invoice.email}</TableCell>
            <TableCell className="">{invoice.totalAmount}</TableCell>
            <TableCell className="text-right ">
              <span
                className={`border rounded-full py-1 px-2 shadow ${getSourceStyles(
                  invoice.source
                )}`}
              >
                {invoice.source}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

/* switch (invoice.source) {
    case "Social Networks"
        className = "bg-yellow-100 border-yellow-300 text-yellow-600"
    case "Outreach"
        className = "bg-blue-100 border-blue-300 text-blue-600"
}  */
