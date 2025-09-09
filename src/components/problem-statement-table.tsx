
'use client';

import { ProblemStatement } from "@/lib/problem-statements-data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ProblemStatementTable({ statements }: { statements: ProblemStatement[] }) {
  const router = useRouter();

  const handleRegister = (psNumber: string) => {
    router.push(`/register/${psNumber}`);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[80px]">S.No.</TableHead>
          <TableHead>Problem Statement</TableHead>
          <TableHead>Organization</TableHead>
          <TableHead className="w-[120px]">Category</TableHead>
          <TableHead>Theme</TableHead>
          <TableHead className="w-[150px]">PS Number</TableHead>
          <TableHead className="w-[120px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {statements.map(ps => (
          <TableRow key={ps.sNo}>
            <TableCell>{ps.sNo}</TableCell>
            <TableCell>{ps.title}</TableCell>
            <TableCell>{ps.organization}</TableCell>
            <TableCell>
              <Badge variant={ps.category === 'Software' ? 'default' : ps.category === 'Hardware' ? 'secondary' : 'outline'}>
                {ps.category}
              </Badge>
            </TableCell>
            <TableCell>{ps.theme}</TableCell>
            <TableCell>{ps.psNumber}</TableCell>
            <TableCell>
              <Button variant="default" size="sm" onClick={() => handleRegister(ps.psNumber)}>
                Register
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
