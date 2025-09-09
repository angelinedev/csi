
'use client';

import { useEffect, useState } from 'react';
import { ProblemStatement } from '@/lib/problem-statements-data';
import ProblemStatementTable from '@/components/problem-statement-table';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { searchProblemStatements } from '@/services/search-service';

export default function ProblemStatementsClient({ allStatements }: { allStatements: ProblemStatement[] }) {
  const [filteredStatements, setFilteredStatements] = useState<ProblemStatement[]>(allStatements);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const fetchFilteredStatements = async () => {
      const statements = await searchProblemStatements(searchTerm, category, allStatements);
      setFilteredStatements(statements);
    };

    fetchFilteredStatements();
  }, [searchTerm, category, allStatements]);

  const categories = ['All', 'Software', 'Hardware', 'General'];

  const handleDownload = () => {
    window.location.href = '/api/register';
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
            <div>
                <CardTitle>Problem Statements</CardTitle>
                <CardDescription>Browse and select a problem statement to register your team.</CardDescription>
            </div>
            <Button onClick={handleDownload}>Download Registrations</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="w-1/2">
            <Input
              placeholder="Filter by keyword, PS Number, organization..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-1/4">
            <Select onValueChange={setCategory} defaultValue={category}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <ProblemStatementTable statements={filteredStatements} />
      </CardContent>
    </Card>
  );
}
